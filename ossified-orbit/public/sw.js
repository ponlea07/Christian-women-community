const CACHE_NAME = "cwc-bible-hub-v6";
const OFFLINE_BIBLE_CACHE = "cwc-bible-offline-v1";
const IS_LOCALHOST = self.location.hostname === "localhost" || self.location.hostname === "127.0.0.1";
const APP_SHELL = ["/", "/bible", "/manifest.webmanifest", "/icons/cwc-icon-192.png", "/icons/cwc-icon-512.png", "/images/cwc-official-logo.jpg"];

if (IS_LOCALHOST) {
  self.addEventListener("activate", (event) => {
    event.waitUntil(self.registration.unregister().then(() => caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key))))));
  });
} else {
  self.addEventListener("install", (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
    self.skipWaiting();
  });

  self.addEventListener("activate", (event) => {
    event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME && key !== OFFLINE_BIBLE_CACHE).map((key) => caches.delete(key)))));
    self.clients.claim();
  });

  self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return;
    event.respondWith(handleRequest(event.request));
  });

  self.addEventListener("message", (event) => {
    if (event.data?.type !== "CACHE_BIBLE_OFFLINE") return;
    event.waitUntil(cacheBibleForOffline([...(event.data.routes || []), ...(event.data.assets || [])], event.ports[0]));
  });

  async function cacheBibleForOffline(resources, port) {
    const uniqueResources = [...new Set(resources)];
    const cache = await caches.open(OFFLINE_BIBLE_CACHE);
    let completed = 0;
    let failed = 0;
    for (const resource of uniqueResources) {
      try {
        const response = await fetch(resource, { cache: "reload" });
        if (!response.ok) throw new Error(`Request failed with ${response.status}`);
        await cache.put(resource, response);
      } catch {
        failed += 1;
      }
      completed += 1;
      if (completed % 10 === 0 || completed === uniqueResources.length) port?.postMessage({ type: "offline-bible-progress", completed, total: uniqueResources.length });
    }
    port?.postMessage({ type: "offline-bible-complete", completed, total: uniqueResources.length, failed });
  }

  async function handleRequest(request) {
    const url = new URL(request.url);
    if (request.mode === "navigate") {
      const isBibleHub = url.pathname === "/bible" || url.pathname.startsWith("/bible/");
      return isBibleHub ? handleBibleHubNavigation(request, url) : handleDefaultNavigation(request, url);
    }
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;
    const networkResponse = await fetch(request);
    if (networkResponse?.status === 200) await (await caches.open(CACHE_NAME)).put(request, networkResponse.clone());
    return networkResponse;
  }

  async function handleBibleHubNavigation(request, url) {
    try {
      const networkResponse = await fetch(request);
      if (networkResponse?.status === 200) await (await caches.open(CACHE_NAME)).put(url.pathname, networkResponse.clone());
      return networkResponse;
    } catch {
      const cachedPage = await caches.match(url.pathname, { ignoreSearch: true });
      if (cachedPage) return cachedPage;
      const fallback = await caches.match("/bible");
      if (fallback) return fallback;
      throw new Error("Bible page is not available offline.");
    }
  }

  async function handleDefaultNavigation(request, url) {
    const cachedPage = await caches.match(url.pathname, { ignoreSearch: true });
    if (cachedPage) return cachedPage;
    try {
      const networkResponse = await fetch(request);
      if (networkResponse?.status === 200) await (await caches.open(CACHE_NAME)).put(url.pathname, networkResponse.clone());
      return networkResponse;
    } catch {
      const fallback = await caches.match("/bible");
      if (fallback) return fallback;
      throw new Error("Page is not available offline.");
    }
  }
}
