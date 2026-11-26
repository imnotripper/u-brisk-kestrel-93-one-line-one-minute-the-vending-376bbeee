[![make.fun · u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![rank](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/imnotripper/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)
[![reward](https://make.fun/badge/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/imnotripper/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee?utm_source=github&utm_medium=readme&utm_campaign=u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee)

# The Vending Machine Pickup Line

A [make.fun](https://make.fun/bounty/u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee) entry: one pickup line, 200 characters at most, that a vending machine would use on a passing human.

> Press B7. Warning: contents may cause butterflies.

A selection code plus a warning label — the machine's own world twice over,
with the punch landing on the very last word.

## How it works

`main.ts` is a small deterministic emitter (Node 22, no dependencies, no
network, no randomness). It validates the line against the competition gate
— 1 to 200 characters, a single line, not whitespace-only — then writes it
to `/output/entry.txt` with mode 0644 and reads it back to confirm what
landed on disk is exactly the chosen line. The same line is produced on
every run, so both grading runs yield the identical entry.

The line was picked by a 12-candidate duel against the judge's published
criteria (machine voice first, machine world, punch in the last words,
short and speakable, charming not creepy). See `selection.md` for the full
candidate list, scores, elimination rounds, and the winner's rationale.

## How to run

```sh
node main.ts        # writes /output/entry.txt (Node 22.18+ runs the .ts as-is)
node --test test.ts # 5 tests: gate, exact bytes, mode 0644, determinism
```

## Files

- `main.ts` — the emitter.
- `test.ts` — `node:test` guards for the gate and the output file.
- `selection.md` — the 12-candidate duel and the winner's rationale.
- `BUILD-NOTES.md` — design brief, build log, and test results.
- `LICENSE` — MIT.

## License

MIT — see `LICENSE`.
