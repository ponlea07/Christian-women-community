import fs from "node:fs";
import path from "node:path";

const RAW_BIBLE = path.resolve(
  "src/data/bible/translations/web"
);


const OUTPUT = path.resolve(
  "src/data/bible/search-index.json"
);

const files = fs
  .readdirSync(RAW_BIBLE)
  .filter(file => file.endsWith(".json"));

const index = [];

for (const file of files) {

  const fullPath = path.join(RAW_BIBLE, file);

  const book = JSON.parse(
    fs.readFileSync(fullPath, "utf8")
  );

  const slug = file.replace(".json", "");

  book.chapters.forEach((chapter, chapterIndex) => {

  chapter.forEach((verse) => {

    index.push({

      book: slug,

      bookName: slug
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),

      chapter: chapterIndex + 1,

      verse: verse.verse,

      reference: `${slug} ${chapterIndex + 1}:${verse.verse}`,

      text: verse.text

    });

  });

});

}

fs.writeFileSync(
  OUTPUT,
  JSON.stringify(index, null, 2)
);

console.log(`✅ Search index created.`);
console.log(`Verses indexed: ${index.length}`);
console.log(`Output: ${OUTPUT}`);