import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createRequire } from "node:module";
import ts from "typescript";

const require = createRequire(import.meta.url);

const repository = process.argv[2];
if (!repository) throw new Error("Usage: node validate-devotionals.mjs <repository>");

function loadTs(relativePath) {
  const source = fs.readFileSync(path.join(repository, relativePath), "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const module = { exports: {} };
  const localRequire = (specifier) => {
    if (relativePath === "src/content/bible/devotionals/devotionals.ts" && specifier.startsWith("./journeys/")) {
      return loadTs(`src/content/bible/devotionals/journeys/${specifier.slice("./journeys/".length)}.ts`);
    }
    return require(specifier);
  };
  new Function("exports", "module", "require", output)(module.exports, module, localRequire);
  return module.exports;
}

const { devotionalJourneys, devotionals } = loadTs("src/content/bible/devotionals/devotionals.ts");
const { books } = loadTs("src/content/bible/books.ts");
const required = ["day", "slug", "title", "theme", "movement", "scriptureReference", "book", "chapter", "reflection", "declaration", "prayer"];
const validBooks = new Map(books.map((book) => [book.slug, book.chapters]));
const days = devotionals.map((entry) => entry.day);
const duplicateValues = (values) => values.filter((value, index) => values.indexOf(value) !== index);
const movementRanges = [
  ["Knowing God", 31], ["Jesus: Our Saviour & Lord", 28], ["Life in the Holy Spirit", 31],
  ["Walking by Faith", 30], ["Sanctification: Becoming Like Christ", 31], ["Fruitful Living", 30],
  ["A Woman After God’s Heart", 31], ["Women of the Bible", 31], ["Home, Parenting & Relationships", 30],
  ["Purpose, Calling & Service", 31], ["Generosity & Kingdom Living", 30], ["Hope, Perseverance & Eternity", 31],
];
const canonicalContentFields = ["day", "slug", "title", "theme", "movement", "date", "scripture", "scriptureReference", "book", "chapter", "secondaryScriptureReferences", "reflection", "declaration", "prayer"];
const canonicalContentFingerprint = crypto.createHash("sha256").update(JSON.stringify(devotionals.map((entry) => Object.fromEntries(canonicalContentFields.map((field) => [field, entry[field] ?? null]))))).digest("hex");
const expectedCanonicalContentFingerprint = "77194d01885b35a1199c63db94ef94a3385d7b4921abef6f76f90fcb51bdbb9f";
const hs90 = devotionalJourneys.find((journey) => journey.id === "90-day");
const hs90DayNumbers = hs90?.dayNumbers ?? [];
const expectedHs90SelectionFingerprint = "085fcd2bb62f8e7295c913d50e7f6d4d55297a466ac070679a1bc61ec9f287b6";
const hs90SelectionFingerprint = crypto.createHash("sha256").update(JSON.stringify(hs90DayNumbers)).digest("hex");
const hs90Entries = hs90DayNumbers.map((day) => devotionals.find((entry) => entry.day === day)).filter(Boolean);
const devotionalContentFingerprint = (entry) => crypto.createHash("sha256").update(JSON.stringify([entry.reflection, entry.declaration, entry.prayer])).digest("hex");
const hs90DuplicateContent = [...new Set(duplicateValues(hs90Entries.map(devotionalContentFingerprint)))];
const sg180 = devotionalJourneys.find((journey) => journey.id === "180-day");
const sg180DayNumbers = sg180?.dayNumbers ?? [];
const expectedSg180SelectionFingerprint = "4c4ae54d1b65a3dca6469c8c31dc3672671a372987b2dc4834a333ed83906e69";
const sg180SelectionFingerprint = crypto.createHash("sha256").update(JSON.stringify(sg180DayNumbers)).digest("hex");
const sg180Entries = sg180DayNumbers.map((day) => devotionals.find((entry) => entry.day === day)).filter(Boolean);
const sg180DuplicateContent = [...new Set(duplicateValues(sg180Entries.map(devotionalContentFingerprint)))];
const sg180Source = fs.readFileSync(path.join(repository, "src/content/bible/devotionals/journeys/sg180.ts"), "utf8");
const sg180UsesExplicitSelection = !/Array\.from|\.slice\(|\.filter\(|\.map\(|for\s*\(|while\s*\(/.test(sg180Source);
const report = {
  canonicalCount: devotionals.length,
  firstDay: Math.min(...days),
  lastDay: Math.max(...days),
  missingDays: Array.from({ length: 365 }, (_, index) => index + 1).filter((day) => !days.includes(day)),
  duplicateDayNumbers: [...new Set(duplicateValues(days))],
  duplicateSlugs: [...new Set(duplicateValues(devotionals.map((entry) => entry.slug)))],
  missingRequiredFields: devotionals.flatMap((entry) => required.filter((field) => !entry[field]).map((field) => `${entry.day}:${field}`)),
  invalidBookSlugsOrChapters: devotionals.filter((entry) => !validBooks.has(entry.book) || entry.chapter < 1 || entry.chapter > validBooks.get(entry.book)).map((entry) => `${entry.day}:${entry.book}/${entry.chapter}`),
  movementCounts: movementRanges.map(([movement, expected]) => ({ movement, actual: devotionals.filter((entry) => entry.movement === movement).length, expected })),
  canonicalContentUnchanged: canonicalContentFingerprint === expectedCanonicalContentFingerprint,
  hs90Count: hs90DayNumbers.length,
  hs90UniqueDays: new Set(hs90DayNumbers).size,
  hs90InvalidDayNumbers: hs90DayNumbers.filter((day) => !Number.isInteger(day) || day < 1 || day > 365),
  hs90MissingCanonicalDays: hs90DayNumbers.filter((day) => !days.includes(day)),
  hs90DuplicateContent,
  hs90ResolvedEntries: hs90Entries.length,
  hs90SelectionUnchanged: hs90SelectionFingerprint === expectedHs90SelectionFingerprint,
  sg180Count: sg180DayNumbers.length,
  sg180UniqueDays: new Set(sg180DayNumbers).size,
  sg180InvalidDayNumbers: sg180DayNumbers.filter((day) => !Number.isInteger(day) || day < 1 || day > 365),
  sg180MissingCanonicalDays: sg180DayNumbers.filter((day) => !days.includes(day)),
  sg180DuplicateContent,
  sg180ResolvedEntries: sg180Entries.length,
  sg180SelectionFingerprintMatches: sg180SelectionFingerprint === expectedSg180SelectionFingerprint,
  sg180UsesExplicitSelection,
};
console.table({
  "Canonical count": report.canonicalCount, "First day": report.firstDay, "Last day": report.lastDay,
  "Missing days": report.missingDays.length, "Duplicate days": report.duplicateDayNumbers.length,
  "Duplicate slugs": report.duplicateSlugs.length, "Missing fields": report.missingRequiredFields.length,
  "Invalid books/chapters": report.invalidBookSlugsOrChapters.length,
  "Canonical content unchanged": report.canonicalContentUnchanged,
  "HS90 selections": report.hs90Count, "HS90 unique days": report.hs90UniqueDays,
  "HS90 invalid IDs": report.hs90InvalidDayNumbers.length, "HS90 missing master days": report.hs90MissingCanonicalDays.length,
  "HS90 duplicated content": report.hs90DuplicateContent.length, "HS90 resolved detail routes": report.hs90ResolvedEntries,
  "HS90 selection unchanged": report.hs90SelectionUnchanged,
  "SG180 selections": report.sg180Count, "SG180 unique days": report.sg180UniqueDays,
  "SG180 invalid IDs": report.sg180InvalidDayNumbers.length, "SG180 missing master days": report.sg180MissingCanonicalDays.length,
  "SG180 duplicated content": report.sg180DuplicateContent.length, "SG180 resolved detail routes": report.sg180ResolvedEntries,
  "SG180 ordered fingerprint matches": report.sg180SelectionFingerprintMatches,
  "SG180 is explicit (not first-N logic)": report.sg180UsesExplicitSelection,
});
console.table(report.movementCounts);
const failures = report.canonicalCount !== 365 || report.firstDay !== 1 || report.lastDay !== 365 || report.missingDays.length || report.duplicateDayNumbers.length || report.duplicateSlugs.length || report.missingRequiredFields.length || report.invalidBookSlugsOrChapters.length || report.movementCounts.some(({ actual, expected }) => actual !== expected) || !report.canonicalContentUnchanged || report.hs90Count !== 90 || report.hs90UniqueDays !== 90 || report.hs90InvalidDayNumbers.length || report.hs90MissingCanonicalDays.length || report.hs90DuplicateContent.length || report.hs90ResolvedEntries !== 90 || !report.hs90SelectionUnchanged || report.sg180Count !== 180 || report.sg180UniqueDays !== 180 || report.sg180InvalidDayNumbers.length || report.sg180MissingCanonicalDays.length || report.sg180DuplicateContent.length || report.sg180ResolvedEntries !== 180 || !report.sg180SelectionFingerprintMatches || !report.sg180UsesExplicitSelection;
if (failures) process.exitCode = 1;
