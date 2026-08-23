import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const booksSource = fs.readFileSync(path.join(projectRoot, "src", "content", "bible", "books.ts"), "utf8");
const distDirectory = path.join(projectRoot, "dist");
const manifestPath = path.join(distDirectory, "data", "bible", "offline-manifest.json");
const books = [...booksSource.matchAll(/slug:\s*"([^"]+)"[\s\S]*?chapters:\s*(\d+)/g)].map(([, slug, chapters]) => ({ slug, chapters: Number(chapters) }));

if (books.length !== 66) throw new Error(`Expected 66 Bible books, found ${books.length}.`);

const chapterRoutes = books.flatMap(({ slug, chapters }) => Array.from({ length: chapters }, (_, index) => `/bible/${slug}/${index + 1}`));
if (chapterRoutes.length !== 1189) throw new Error(`Expected 1,189 Bible chapters, found ${chapterRoutes.length}.`);

function listBuildAssets(directory, relativeDirectory = "") {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = path.posix.join(relativeDirectory, entry.name);
    return entry.isDirectory()
      ? listBuildAssets(path.join(directory, entry.name), relativePath)
      : [`/${relativePath}`];
  });
}

const appRoutes = ["/", "/bible", "/bible/books", "/bible/old-testament", "/bible/new-testament", "/bible/search", "/bible/bookmarks", "/bible/highlights", "/bible/notes", "/bible/history", "/bible/prayer"];
const assetsDirectory = path.join(distDirectory, "_astro");
const assets = fs.existsSync(assetsDirectory) ? listBuildAssets(assetsDirectory, "_astro") : [];

fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
fs.writeFileSync(manifestPath, `${JSON.stringify({ version: 1, routes: [...appRoutes, ...books.map(({ slug }) => `/bible/${slug}`), ...chapterRoutes], assets }, null, 2)}\n`);
console.log(`Created offline Bible manifest for ${chapterRoutes.length} chapters and ${assets.length} build assets.`);
