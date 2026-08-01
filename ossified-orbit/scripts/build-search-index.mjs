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
  .filter((file) => file.endsWith(".json"))
  .sort();

/**
 * Single source of truth for book names and route slugs.
 * The key is the JSON filename (without .json).
 */
const BOOK_METADATA = {
  genesis: { slug: "genesis", name: "Genesis" },
  exodus: { slug: "exodus", name: "Exodus" },
  leviticus: { slug: "leviticus", name: "Leviticus" },
  numbers: { slug: "numbers", name: "Numbers" },
  deuteronomy: { slug: "deuteronomy", name: "Deuteronomy" },
  joshua: { slug: "joshua", name: "Joshua" },
  judges: { slug: "judges", name: "Judges" },
  ruth: { slug: "ruth", name: "Ruth" },
  "1samuel": { slug: "1-samuel", name: "1 Samuel" },
  "2samuel": { slug: "2-samuel", name: "2 Samuel" },
  "1kings": { slug: "1-kings", name: "1 Kings" },
  "2kings": { slug: "2-kings", name: "2 Kings" },
  "1chronicles": { slug: "1-chronicles", name: "1 Chronicles" },
  "2chronicles": { slug: "2-chronicles", name: "2 Chronicles" },
  ezra: { slug: "ezra", name: "Ezra" },
  nehemiah: { slug: "nehemiah", name: "Nehemiah" },
  esther: { slug: "esther", name: "Esther" },
  job: { slug: "job", name: "Job" },
  psalms: { slug: "psalms", name: "Psalms" },
  proverbs: { slug: "proverbs", name: "Proverbs" },
  ecclesiastes: { slug: "ecclesiastes", name: "Ecclesiastes" },
  songofsolomon: {
    slug: "song-of-solomon",
    name: "Song of Solomon",
  },
  isaiah: { slug: "isaiah", name: "Isaiah" },
  jeremiah: { slug: "jeremiah", name: "Jeremiah" },
  lamentations: { slug: "lamentations", name: "Lamentations" },
  ezekiel: { slug: "ezekiel", name: "Ezekiel" },
  daniel: { slug: "daniel", name: "Daniel" },
  hosea: { slug: "hosea", name: "Hosea" },
  joel: { slug: "joel", name: "Joel" },
  amos: { slug: "amos", name: "Amos" },
  obadiah: { slug: "obadiah", name: "Obadiah" },
  jonah: { slug: "jonah", name: "Jonah" },
  micah: { slug: "micah", name: "Micah" },
  nahum: { slug: "nahum", name: "Nahum" },
  habakkuk: { slug: "habakkuk", name: "Habakkuk" },
  zephaniah: { slug: "zephaniah", name: "Zephaniah" },
  haggai: { slug: "haggai", name: "Haggai" },
  zechariah: { slug: "zechariah", name: "Zechariah" },
  malachi: { slug: "malachi", name: "Malachi" },
  matthew: { slug: "matthew", name: "Matthew" },
  mark: { slug: "mark", name: "Mark" },
  luke: { slug: "luke", name: "Luke" },
  john: { slug: "john", name: "John" },
  acts: { slug: "acts", name: "Acts" },
  romans: { slug: "romans", name: "Romans" },
  "1corinthians": {
    slug: "1-corinthians",
    name: "1 Corinthians",
  },
  "2corinthians": {
    slug: "2-corinthians",
    name: "2 Corinthians",
  },
  galatians: { slug: "galatians", name: "Galatians" },
  ephesians: { slug: "ephesians", name: "Ephesians" },
  philippians: { slug: "philippians", name: "Philippians" },
  colossians: { slug: "colossians", name: "Colossians" },
  "1thessalonians": {
    slug: "1-thessalonians",
    name: "1 Thessalonians",
  },
  "2thessalonians": {
    slug: "2-thessalonians",
    name: "2 Thessalonians",
  },
  "1timothy": {
    slug: "1-timothy",
    name: "1 Timothy",
  },
  "2timothy": {
    slug: "2-timothy",
    name: "2 Timothy",
  },
  titus: { slug: "titus", name: "Titus" },
  philemon: { slug: "philemon", name: "Philemon" },
  hebrews: { slug: "hebrews", name: "Hebrews" },
  james: { slug: "james", name: "James" },
  "1peter": { slug: "1-peter", name: "1 Peter" },
  "2peter": { slug: "2-peter", name: "2 Peter" },
  "1john": { slug: "1-john", name: "1 John" },
  "2john": { slug: "2-john", name: "2 John" },
  "3john": { slug: "3-john", name: "3 John" },
  jude: { slug: "jude", name: "Jude" },
  revelation: { slug: "revelation", name: "Revelation" },
};

const index = [];

for (const file of files) {
  const fileSlug = file.replace(".json", "");

  const metadata = BOOK_METADATA[fileSlug];

  if (!metadata) {
    console.warn(`⚠ Missing metadata for ${fileSlug}`);
    continue;
  }

  const bibleBook = JSON.parse(
    fs.readFileSync(path.join(RAW_BIBLE, file), "utf8")
  );

  bibleBook.chapters.forEach((chapter, chapterIndex) => {
    if (!chapter) return;

    chapter.forEach((verse) => {
      if (!verse?.text) return;

      index.push({
        book: metadata.slug,
        bookName: metadata.name,
        chapter: chapterIndex + 1,
        verse: verse.verse,
        reference: `${metadata.name} ${chapterIndex + 1}:${verse.verse}`,
        text: verse.text,
        href: `/bible/${metadata.slug}/${chapterIndex + 1}#verse-${verse.verse}`,
      });
    });
  });
}

fs.writeFileSync(
  OUTPUT,
  JSON.stringify(index, null, 2),
  "utf8"
);

console.log(`✅ Search index created.`);
console.log(`Verses indexed: ${index.length}`);
console.log(`Output: ${OUTPUT}`);