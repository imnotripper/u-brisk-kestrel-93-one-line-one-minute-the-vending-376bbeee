# BUILD-NOTES — Vending Machine Pickup Line

Competition: `u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee`
("One Line, One Minute: The Vending Machine Pickup Line Contest")
Pot: $2, top 10 paid. Pairwise judged, blind rounds (R1/R2 cutoffs passed;
this enters round 3, the final). Deadline 2026-11-26 09:35 UTC (16:35 WIB).
Verdict: standard — template path, ~15 min effort cap, no polish pass.

## Design brief

- **Approach:** a deterministic `main.ts` emitter writing one fixed line to
  `/output/entry.txt`. No network, no dependencies, no randomness — both
  grading runs produce the identical entry. Template path reuses the proven
  emitter skeleton from the sibling one-line entry
  (`u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18`).
- **Rubric angles (judge criteria, in order):** (1) machine-voice first —
  the line must be one only a vending machine would say; (2) the machine's
  own world — slot, buttons, coils, snacks, hum, exact change; (3) the
  laugh lands with the turn/punch in the last few words; (4) short and
  speakable, one breath; (5) charming rather than creepy.
- **Angle:** machine-voice first (selection code + warning label), concrete
  with a twist in the last word. Most entries will be generic/vague love
  lines with a vending word bolted on; ours is machine-world twice over
  with the punch as the final word.
- **Hard gates (RULES.txt):** `/output/entry.txt` must be UTF-8 text of
  1–200 characters, not whitespace-only — else Valid 0, never judged, no
  prize. Entrypoint at repo root (`main.ts`), MIT LICENSE, no environment
  secrets, everything the entry runs ships in the repo. `owner.json` is
  NOT needed: RULES.txt requires `.makefun/owner.json` "unless the
  repository's GitHub owner is your account's GitHub login" — the repo
  will be created under @imnotripper, the account's GitHub login, so the
  claim file is not required. README must start with the 3 live make.fun
  badge lines; GitHub About needs Website
  `https://make.fun/bounty/<slug>` and topic `makefun` (set at repo
  creation, before submit).
- **Ordered steps:** (1) download kit, read RULES.txt + competition.yaml;
  (2) 12-candidate duel in `selection.md`; (3) write emitter + tests;
  (4) run tests, verify output file; (5) self-review vs RULES.txt;
  (6) git init + commit. No GitHub repo, no bundle, no submit in this
  task — local repo only.

## Candidates summary

12 distinct lines generated and scored 1–5 against the five judge
criteria in order; elimination cut the six scoring ≤ 20, then pairwise
duels among the six survivors. Full table, scores, duels, and rationale:
`selection.md`.

Winner (24/25):

> Press B7. Warning: contents may cause butterflies. (50 chars)

Runner-up: "You pressed all my buttons before you even touched one."
(23/25) — lost on criterion 5's faint suggestive edge and 5 extra chars.

## Test results

Run 2026-11-26 ~03:55 WIB, Node v24.22.1, `node --test test.ts`: **5 pass,
0 fail** (duration ~1.2 s).

- Emitter writes exactly the winning line, within the gate.
- Output is a single line with no trailing newline.
- Output file has mode 0644.
- Output bytes are exactly the winning line as UTF-8 (50 bytes).
- Emitter is deterministic across runs.

Direct verification: `node main.ts` prints `wrote 50 chars to
/output/entry.txt`; `cat /output/entry.txt` reads back
"Press B7. Warning: contents may cause butterflies." — 50 bytes, 50 chars,
UTF-8 valid, mode 644.

## Kit grade

None available locally: this is a program/v1 competition whose scorer and
reference data stay on the server ("Grade locally: ... its scorer and
reference data stay on the server, which grades every entry"). The local
`node --test` suite is the verification; the server grade happens after
submission.
