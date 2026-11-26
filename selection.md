# Selection — Vending Machine Pickup Line

Competition: `u-brisk-kestrel-93-one-line-one-minute-the-vending-376bbeee`
Judge criteria, in order (RULES.txt):
1. Machine-voice pickup line, spoken by the machine itself (a line any bar
   stranger could say loses to one only a vending machine would say).
2. Uses the machine's own world: slot, buttons, coils, snacks, hum, exact
   change — not love in general.
3. Laugh lands with the turn/punch in the last few words.
4. Short and speakable, one line read in a breath.
5. Charming rather than creepy — a passing human smiles, not walks faster.

Each candidate scored 1–5 per criterion, in that order. All 12 lines are
original, written fresh for this competition (none copies a house text).

## Candidates

| # | Line (chars) | 1 | 2 | 3 | 4 | 5 | Total |
|---|---:|---|---|---|---|---|---:|
| 1 | Press B7. Warning: contents may cause butterflies. (50) | 5 | 5 | 4 | 5 | 5 | **24** |
| 2 | I'm out of order, and it's your fault — my coils haven't stopped spinning since you walked past. (96) | 5 | 4 | 5 | 4 | 4 | 22 |
| 3 | You pressed all my buttons before you even touched one. (55) | 5 | 5 | 4 | 5 | 4 | 23 |
| 4 | I dispense snacks all day, but you — I'd give away for free. (60) | 5 | 4 | 4 | 5 | 4 | 22 |
| 5 | My coils only spin for one thing, and right now it's you walking past. (70) | 4 | 5 | 3 | 4 | 4 | 20 |
| 6 | I've got exact change and a crush on you. Press B7 and keep both. (65) | 5 | 5 | 3 | 4 | 4 | 21 |
| 7 | I hum for everyone, but I only light up when you walk by. (57) | 4 | 4 | 3 | 5 | 4 | 20 |
| 8 | Take the last chocolate — I kept it warm for you. My coils don't lie. (69) | 4 | 4 | 3 | 4 | 4 | 19 |
| 9 | You dropped exact change in my slot and my heart got stuck in coil C4. (70) | 4 | 5 | 3 | 4 | 3 | 19 |
| 10 | I'm not broken, I'm just stuck on you. Press B7 and I'll drop the good stuff. (77) | 5 | 4 | 4 | 4 | 4 | 21 |
| 11 | Every coin you've fed me was worth it — you just made my coils do a little spin. (80) | 4 | 4 | 3 | 4 | 4 | 19 |
| 12 | My buttons light up for everyone, but only you make my coils turn twice. (72) | 4 | 4 | 3 | 4 | 4 | 19 |

## Elimination

Round 1 — cut every line scoring ≤ 20 (weak punch, flat ending, or generic
setup): #5, #7, #8, #9, #11, #12. Common flaw: the joke resolves mid-line
and the last words add nothing ("turn twice", "little spin", "coil C4").

Round 2 — pairwise duels among the survivors (#1, #2, #3, #4, #6, #10),
judged by the criteria in order:

- **#1 vs #3:** both perfect machine-voice and machine-world. #3's idiom flip
  ("pressed all my buttons") is a sharp laugh, but "before you even
  touched one" carries a faint suggestive edge that costs it on criterion 5
  (charming, not creepy); #1 is clean on 5 and 5 chars shorter. **#1 wins.**
- **#1 vs #2:** #2's turn ("coils haven't stopped spinning") is the bigger
  single laugh, but at 96 chars it is nearly twice as long — criterion 4
  favours #1 by much more than criterion 3 favours #2, and the judge's own
  rule says a later criterion decides only when it differs by much more.
  **#1 wins.**
- **#1 vs #4:** #4's logic muddles — the machine offering to "give away"
  the human confuses who is the product; the punch lands soft. **#1 wins.**
- **#1 vs #6:** #6's punch ("keep both") is mild and the line is a list of
  two facts, not a turn. **#1 wins.**
- **#1 vs #10:** #10 is solid, but "drop the good stuff" is a weaker final
  sting than "butterflies", and it is 27 chars longer. **#1 wins.**

## Winner

> **Press B7. Warning: contents may cause butterflies.** (50 chars)

Rationale: the densest machine-world in the shortest package. "Press B7" is
a selection code only a vending machine says (criterion 1); the button code
plus the warning-label format is the machine's own world twice over
(criterion 2); the punch is the very last word — "butterflies" reframes a
product warning as a feeling, so the joke needs no setup explained
afterwards (criterion 3); at 50 characters it is read in one breath and, as
a tie-break bonus, the smallest text wins exact ties on the leaderboard
(criterion 4, plus the Size tie-break); and it is warm, cheeky, and entirely
non-creepy — a human smiles and presses the button (criterion 5). The
runner-up, #3, stays the closest call: it lost only on criterion 5's
suggestive edge and 5 extra characters.

## Gate check on the winner

- 50 characters (1–200 required), single line, no trailing newline in the
  output file, UTF-8 ASCII, not whitespace-only — passes the sealed gate.
- All 12 candidates were written fresh for this competition; none reproduces
  a house anchor/rung text (byte-identical copies of those take no prize),
  and the winner shares no wording with any other candidate.
