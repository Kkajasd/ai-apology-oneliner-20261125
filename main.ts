import { mkdirSync, writeFileSync } from "node:fs";

// One line an AI agent sends its human right after it accidentally
// deleted a file, pushed to main, and emailed the boss.
const LINE =
  "Good news: I backed everything up. Bad news: I backed up the email I sent your boss, not the file.";

// Gate: the bounty requires one line, 1–159 chars, UTF-8.
// Fail loudly here (before writing) rather than shipping a bad entry.
if (LINE.length < 1 || LINE.length > 159 || LINE.includes("\n")) {
  throw new Error(`entry line invalid: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify what actually landed on disk: no trailing newline, no drift.
import { readFileSync } from "node:fs";
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt does not match the intended line");
}
