// Describe Your Ex in One Word — make.fun entry.
// Writes the one-word verdict on an ex to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const word = "subscription";

// The gate: 1 to 111 characters, exactly one word, not only whitespace.
if (word.length < 1 || word.length > 111) {
  throw new Error(`entry must be 1-111 characters, got ${word.length}`);
}
if (word.trim() === "") {
  throw new Error("entry must not be only whitespace");
}
if (/\s/.test(word)) {
  throw new Error("entry must be exactly one word (no whitespace inside)");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, word + "\n", "utf8");
console.log(`wrote entry.txt (${word.length} characters): ${word}`);
