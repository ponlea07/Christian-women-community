import fs from "fs";
import path from "path";

const RAW_DIR = path.resolve("raw-bible", "json");
const OUTPUT_DIR = path.resolve("src", "data", "bible", "translations", "web");

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const files = fs
  .readdirSync(RAW_DIR)
  .filter((file) => file.endsWith(".json"))
  .sort();

for (const file of files) {
  const raw = fs.readFileSync(path.join(RAW_DIR, file), "utf8");
  const data = JSON.parse(raw);

  const verses = data.filter(
    (record) => record.type === "paragraph text"
  );

  const chapters = [];

  for (const verse of verses) {
    const chapterIndex = verse.chapterNumber - 1;

    if (!chapters[chapterIndex]) {
      chapters[chapterIndex] = [];
    }

    chapters[chapterIndex].push({
      verse: verse.verseNumber,
      text: verse.value.trim(),
    });
  }

  const output = {
    translation: "WEB",
    chapters,
  };

  const outputPath = path.join(OUTPUT_DIR, file);

  fs.writeFileSync(
    outputPath,
    JSON.stringify(output, null, 2),
    "utf8"
  );

  console.log(`✓ ${file}`);
}

console.log("\n--------------------------------");
console.log(`Converted ${files.length} books successfully.`);
console.log("--------------------------------");