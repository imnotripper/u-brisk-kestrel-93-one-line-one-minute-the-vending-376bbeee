// Guards for the vending-machine emitter: the sealed gate is 1–200 UTF-8
// characters, one line, not whitespace-only. Run: node --test test.ts
//
// SPDX-License-Identifier: MIT

import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";

const MAIN = new URL("./main.ts", import.meta.url).pathname;
const OUT = "/output/entry.txt";
const MAX_CHARS = 200;
const WINNING_LINE =
  "Press B7. Warning: contents may cause butterflies.";

function run(): string {
  execFileSync("node", [MAIN], {
    stdio: ["ignore", "ignore", "pipe"],
    encoding: "utf8",
  });
  return readFileSync(OUT, "utf8");
}

function gateOk(line: string): boolean {
  const n = [...line].length;
  return n >= 1 && n <= MAX_CHARS && line.trim().length > 0 && !/[\r\n]/.test(line);
}

test("emitter writes exactly the winning line, within the gate", () => {
  const line = run();
  assert.equal(line, WINNING_LINE);
  assert.equal([...line].length, 50);
  assert.ok(gateOk(line));
});

test("output is a single line with no trailing newline", () => {
  const line = run();
  assert.ok(!line.includes("\n") && !line.includes("\r"));
  assert.equal(line, line.trim());
});

test("output file has mode 0644", () => {
  run();
  const mode = statSync(OUT).mode & 0o777;
  assert.equal(mode, 0o644);
});

test("output bytes are exactly the winning line as UTF-8", () => {
  run();
  const raw = readFileSync(OUT); // Buffer: no silent replacement of bad bytes
  assert.deepEqual(raw, Buffer.from(WINNING_LINE, "utf8"));
  assert.equal(raw.length, 50);
});

test("emitter is deterministic across runs", () => {
  const first = run();
  const second = run();
  assert.equal(first, second);
});
