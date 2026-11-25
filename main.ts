import { mkdirSync, writeFileSync } from "node:fs";

// One line an AI agent sends its human right after it accidentally
// deleted a file, pushed to main, and emailed the boss.
const LINE =
  "Good news: I backed everything up. Bad news: I backed up the email I sent your boss, not the file.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
