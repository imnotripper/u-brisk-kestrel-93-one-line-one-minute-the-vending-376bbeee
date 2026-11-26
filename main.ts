// The Vending Machine Pickup Line — a small deterministic emitter for
// u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.
//
// Writes one pickup line, as if a vending machine were flirting with a
// passing human, to /output/entry.txt. No network, no dependencies, no
// randomness: the same line on every run, so both grading runs produce
// the identical entry. Node 22 (type stripping runs this file as-is).
//
// The gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. The emitter enforces that before
// writing: the line is validated, written with mode 0644, and read back
// to confirm what landed on disk is exactly what was chosen. The file
// holds the line alone, with no trailing newline, so its bytes are the
// entry exactly as judged.
//
// Winner (see selection.md — 12-candidate duel): "Press B7. Warning:
// contents may cause butterflies." A selection code plus a warning label:
// the machine's own world twice over, the punch in the last word.
//
// SPDX-License-Identifier: MIT

import { chmodSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

const LINE =
  "Press B7. Warning: contents may cause butterflies.";

function charCount(s: string): number {
  return [...s].length;
}

function gateOk(s: string): boolean {
  const n = charCount(s);
  return n >= 1 && n <= MAX_CHARS && s.trim().length > 0 && !/[\r\n]/.test(s);
}

function main(): void {
  // Gate enforcement, before anything touches disk: 1–200 chars,
  // single line, not whitespace-only.
  if (!gateOk(LINE)) {
    throw new Error(`line fails gate: ${JSON.stringify(LINE)}`);
  }

  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, LINE, { encoding: "utf8", mode: 0o644 });
  chmodSync(OUT_PATH, 0o644);

  // Read-back: what landed on disk must be exactly what was chosen.
  const back = readFileSync(OUT_PATH, "utf8");
  if (back !== LINE) {
    throw new Error("read-back mismatch on /output/entry.txt");
  }

  console.log(`wrote ${charCount(back)} chars to ${OUT_PATH}`);
}

main();
