import fs from "node:fs";
import path from "node:path";

const RAW_BIBLE = path.resolve(
  "src/data/bible/translations/web"
);

const OUTPUT = path.resolve(
  "public/data/bible/search-index.json"
);

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });

const files = fs
  .readdirSync(RAW_BIBLE)
  .filter(file => file.endsWith(".json"))
  .sort();

const index = [];

// Convert filename to route slug
function toRouteSlug(fileSlug) {
  return fileSlug.replace(/^([123])([a-z])/, "$1-$2");
}

// Convert filename to display name
function toDisplayName(fileSlug) {
  return fileSlug
    .replace(/^1([a-z])/, "1 $1")
    .replace(/^2([a-z])/, "2 $1")
    .replace(/^3([a-z])/, "3 $1")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
}

for (const file of files) {

  console.log(`Processing ${file}`);

  const fullPath = path.join(RAW_BIBLE, file);

  const bibleBook = JSON.parse(
    fs.readFileSync(fullPath, "utf8")
  );

  const fileSlug = file.replace(".json", "");

  const slug = toRouteSlug(fileSlug);
  const displayName = toDisplayName(fileSlug);

  bibleBook.chapters.forEach((chapter, chapterIndex) => {

    if (!chapter) return;

    chapter.forEach((verse) => {

      if (!verse || !verse.text) return;

      index.push({
        book: slug,
        bookName: displayName,
        chapter: chapterIndex + 1,
        verse: verse.verse,
        reference: `${displayName} ${chapterIndex + 1}:${verse.verse}`,
        text: verse.text,
        href: `/bible/${slug}/${chapterIndex + 1}`
      });

    });

  });

}

fs.writeFileSync(
  OUTPUT,
  JSON.stringify(index, null, 2),
  "utf8"
);

console.log();
console.log("✅ Search index created.");
console.log(`Verses indexed: ${index.length}`);
console.log(`Output: ${OUTPUT}`);