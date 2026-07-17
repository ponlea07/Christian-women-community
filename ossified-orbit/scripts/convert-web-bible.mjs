import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE = path.join(
  __dirname,
  "../world-english-bible/json"
);

const OUTPUT = path.join(
  __dirname,
  "../src/data/bible/translations/web"
);

await fs.mkdir(OUTPUT, { recursive: true });

const files = (await fs.readdir(SOURCE))
  .filter(file => file.endsWith(".json"))
  .sort();

console.log(`Found ${files.length} source files`);
for (const file of files) {
  const raw = await fs.readFile(
    path.join(SOURCE, file),
    "utf8"
  );

  const records = JSON.parse(raw);

  const bookName = path.basename(file, ".json");

  const chapters = [];
  let currentChapter = [];
  let currentChapterNumber = 1;

  const verseMap = new Map();

  for (const record of records) {
    if (
      record.type !== "paragraph text" &&
      record.type !== "line text"
    ) {
      continue;
    }

    const chapter = record.chapterNumber;
    const verse = record.verseNumber;

    while (currentChapterNumber < chapter) {
      chapters.push(currentChapter);
      currentChapter = [];
      verseMap.clear();
      currentChapterNumber++;
    }

    if (!verseMap.has(verse)) {
      const verseObject = {
        verse,
        text: record.value.trim(),
      };

      currentChapter.push(verseObject);
      verseMap.set(verse, verseObject);
    } else {
      verseMap.get(verse).text += record.value;
    }
  }

  chapters.push(currentChapter);

  const output = {
    name: bookName,
    chapters,
  };

  await fs.writeFile(
    path.join(OUTPUT, file),
    JSON.stringify(output, null, 2),
    "utf8"
  );

  console.log(`✓ ${file}`);
}

console.log("\n✅ Conversion complete.");