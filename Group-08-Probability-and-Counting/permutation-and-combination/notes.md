# Permutation and Combination - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Factorial & Basic Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  n! = n × (n-1) × (n-2) × ... × 2 × 1                              │
│  0! = 1,  1! = 1                                                    │
│                                                                     │
│  Quick Factorials:                                                  │
│  2!=2  3!=6  4!=24  5!=120  6!=720  7!=5040  8!=40320  10!=3628800  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Permutation Formulas (Order MATTERS)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  nPr = n! / (n-r)!       (Arrange r items from n)                   │
│                                                                     │
│  All n items: nPn = n!                                              │
│                                                                     │
│  With repetition: n^r    (each of r positions has n choices)        │
│                                                                     │
│  Repeated letters: n! / (p1! × p2! × ... × pk!)                    │
│     where p1, p2... are frequencies of repeated items               │
│                                                                     │
│  Circular: (n-1)!         (fix one, arrange rest)                   │
│  Necklace/Garland: (n-1)! / 2   (clockwise = anticlockwise)        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Combination Formulas (Order does NOT matter)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  nCr = n! / [r! × (n-r)!]                                          │
│                                                                     │
│  nCr = nC(n-r)           (Symmetry: 10C3 = 10C7)                   │
│  nC0 = nCn = 1                                                     │
│  nC1 = n                                                            │
│                                                                     │
│  nCr = nPr / r!          (Combination = Permutation / ordering)     │
│                                                                     │
│  Handshakes / Diagonals of polygon:                                 │
│     Handshakes = nC2 = n(n-1)/2                                     │
│     Diagonals  = nC2 - n = n(n-3)/2                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Identities & Shortcuts

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  nCr + nC(r-1) = (n+1)Cr          (Pascal's Rule)                  │
│  nC0 + nC1 + ... + nCn = 2^n      (Total subsets)                  │
│                                                                     │
│  At least 1 = Total - None                                         │
│  At most k  = C(0) + C(1) + ... + C(k)                             │
│  Exactly k  = Direct nCk                                           │
│                                                                     │
│  Derangements:                                                      │
│  D(n) = n! × [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n/n!]           │
│  D(1)=0  D(2)=1  D(3)=2  D(4)=9  D(5)=44  D(6)=265               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Permutation vs Combination Decision Flowchart

```
                    ┌─────────────────────┐
                    │   Does ORDER matter? │
                    └──────────┬──────────┘
                       ┌───────┴───────┐
                      YES              NO
                       │                │
                  ┌────▼─────┐   ┌─────▼──────┐
                  │PERMUTATION│   │COMBINATION │
                  │(Arrange)  │   │ (Select)   │
                  │  nPr      │   │   nCr      │
                  └────┬─────┘   └─────┬──────┘
                       │                │
              ┌────────┴───┐      ┌─────┴──────┐
              │            │      │            │
         Distinct?    Repeated?   From group   With conditions
              │            │      │            │
           n!         n!/(p!q!)  nCr        at least / at most
           nPr                               exactly k

    PERMUTATION keywords:        COMBINATION keywords:
    arrange, order, rank,        select, choose, committee,
    sequence, password, PIN,     team, group, handshake,
    word, first-second-third     subset, delegation

┌─────────────────────────┬───────────────────────────┐
│ PERMUTATION (nPr)       │ COMBINATION (nCr)         │
├─────────────────────────┼───────────────────────────┤
│ Order matters           │ Order does NOT matter     │
│ AB ≠ BA                 │ AB = BA                   │
│ Arranging on shelves    │ Picking from a basket     │
│ Forming numbers/words   │ Forming committees/teams  │
│ Ranking, passwords      │ Handshakes, diagonals     │
│ nPr = n!/(n-r)!         │ nCr = n!/[r!(n-r)!]      │
│ nPr = nCr × r!          │ nCr = nPr / r!            │
│ Always >= nCr            │ Always <= nPr             │
└─────────────────────────┴───────────────────────────┘
```

---

## Type 1: Basic Factorial (n!)

**Q: Find the value of 8! / 6!.**

```
        8! = 8 × 7 × 6!
       ────   ──────────
        6!       6!

  Cancel 6! from top and bottom:

  8! / 6! = 8 × 7 = 56 ✓

  TRICK: n! / (n-k)! = n × (n-1) × ... × (n-k+1)
         Just multiply the top k numbers!

  More examples:
  10!/8! = 10 × 9 = 90
  12!/10! = 12 × 11 = 132
  n!/(n-1)! = n
```

---

## Type 2: Basic Permutation (nPr)

**Q: In how many ways can 3 letters be arranged from the word LOGIC (5 letters, all distinct)?**

```
  L  O  G  I  C    (5 distinct letters, pick 3)
  ─  ─  ─  ─  ─

  nPr = n! / (n-r)!

  5P3 = 5! / (5-3)!
      = 5! / 2!
      = 120 / 2
      = 60 ways ✓

  Slot method (same result):
  ┌───┐ ┌───┐ ┌───┐
  │ 5 │ │ 4 │ │ 3 │  = 5 × 4 × 3 = 60
  └───┘ └───┘ └───┘
  1st    2nd   3rd
```

---

## Type 3: Basic Combination (nCr)

**Q: In how many ways can a committee of 3 be formed from 7 people?**

```
  7 people → choose 3 (order does NOT matter)

  nCr = n! / [r! × (n-r)!]

  7C3 = 7! / (3! × 4!)
      = (7 × 6 × 5) / (3 × 2 × 1)
      = 210 / 6
      = 35 ways ✓

  SHORTCUT: Write r terms from top / r!
  7C3 = (7×6×5)/(3×2×1) = 35

  Compare: 7P3 = 210 (arrangements)
           7C3 = 35  (selections)
           210 / 3! = 35  ← divide by ordering!
```

---

## Type 4: Permutation vs Combination — Identifying Which to Use

**Q: (a) How many ways to select 4 books from 10? (b) How many ways to arrange 4 books from 10 on a shelf?**

```
  ┌─────────────────────────────────────────────────┐
  │  Ask: Does the ORDER of items matter?           │
  │                                                 │
  │  (a) SELECT 4 books → order doesn't matter      │
  │      {A,B,C,D} same as {D,C,B,A}               │
  │      → COMBINATION: 10C4                        │
  │      = (10×9×8×7)/(4×3×2×1) = 210 ways ✓       │
  │                                                 │
  │  (b) ARRANGE on shelf → order matters            │
  │      A-B-C-D different from D-C-B-A             │
  │      → PERMUTATION: 10P4                        │
  │      = 10×9×8×7 = 5040 ways ✓                   │
  └─────────────────────────────────────────────────┘

  Note: 10P4 = 10C4 × 4! → 210 × 24 = 5040 ✓
```

---

## Type 5: Arrangement of Letters in a Word (All Distinct)

**Q: How many different words can be formed using all the letters of the word DESIGN?**

```
  D  E  S  I  G  N   → 6 distinct letters
  ─  ─  ─  ─  ─  ─

  All letters distinct → simply n!

  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐
  │ 6 │ │ 5 │ │ 4 │ │ 3 │ │ 2 │ │ 1 │
  └───┘ └───┘ └───┘ └───┘ └───┘ └───┘
  pos1  pos2  pos3  pos4  pos5  pos6

  Total arrangements = 6! = 720 ways ✓

  Starting with D:
  Fix D, arrange remaining 5 = 5! = 120

  Starting with D and ending with N:
  Fix D at start, N at end, arrange 4 = 4! = 24
```

---

## Type 6: Arrangement with Repeated Letters (MISSISSIPPI type)

**Q: How many distinct arrangements can be made from the letters of the word MISSISSIPPI?**

```
  M-I-S-S-I-S-S-I-P-P-I

  Count each letter:
  ┌─────┬───────────┐
  │  M  │  1 time   │
  │  I  │  4 times  │
  │  S  │  4 times  │
  │  P  │  2 times  │
  └─────┴───────────┘
  Total = 11 letters

  FORMULA:  n! / (p1! × p2! × p3! × ...)

  = 11! / (1! × 4! × 4! × 2!)
  = 39916800 / (1 × 24 × 24 × 2)
  = 39916800 / 1152
  = 34650 ways ✓

  Simpler example: BALLOON
  B=1, A=1, L=2, O=2, N=1 → total 7
  = 7! / (2! × 2!) = 5040/4 = 1260
```

---

## Type 7: Circular Permutation

**Q: In how many ways can 6 people sit around a round table?**

```
  Linear vs Circular:
  ┌─────────────────────────────────────┐
  │  Linear: A-B-C-D ≠ B-C-D-A         │
  │     → n! arrangements              │
  │                                     │
  │  Circular: Fix 1, rotate rest      │
  │     A                               │
  │   F   B       Fixing A's position,  │
  │   E   C       arrange rest = (n-1)! │
  │     D                               │
  └─────────────────────────────────────┘

  Circular arrangement = (n-1)!

  6 people around table = (6-1)! = 5!
                        = 120 ways ✓

  WHY (n-1)?
  In a circle, rotations are same arrangement.
  ABCDEF = BCDEFA = CDEFAB (all same seating)
  There are n such rotations, so divide by n:
  n! / n = (n-1)!
```

---

## Type 8: Committee/Team Selection from Group

**Q: From 8 men and 5 women, a committee of 5 is to be formed with exactly 3 men and 2 women. In how many ways?**

```
  8 Men       5 Women
  ┌───────┐   ┌──────┐
  │choose 3│   │choose 2│
  └───┬───┘   └───┬──┘
      │           │
    8C3    ×    5C2     ← AND = multiply
      │           │
   = 56    ×   = 10
      │           │
      └─────┬─────┘
            │
         56 × 10 = 560 ways ✓

  KEY RULE:
  AND (both conditions) → MULTIPLY
  OR  (either condition) → ADD

  8C3 = (8×7×6)/(3×2×1) = 56
  5C2 = (5×4)/(2×1)     = 10
```

---

## Type 9: Combination with Conditions (At Least / At Most / Exactly)

**Q: From 6 men and 4 women, form a committee of 4 with at least one woman. How many ways?**

```
  AT LEAST 1 woman = Total - NO women

  ┌──────────────────────────────────────────┐
  │  Total (any 4 from 10): 10C4 = 210       │
  │  No women (4 from 6 men): 6C4 = 15       │
  │                                          │
  │  At least 1 woman = 210 - 15 = 195 ✓    │
  └──────────────────────────────────────────┘

  Direct method (verify):
  1W + 3M = 4C1 × 6C3 = 4 × 20  =  80
  2W + 2M = 4C2 × 6C2 = 6 × 15  =  90
  3W + 1M = 4C3 × 6C1 = 4 × 6   =  24
  4W + 0M = 4C4 × 6C0 = 1 × 1   =   1
                           Total  = 195 ✓

  SHORTCUT PATTERNS:
  At least 1 = Total - None
  At most  k = sum from 0 to k
  Exactly  k = direct nCk
```

---

## Type 10: Handshakes / Diagonals in Polygon (nC2)

**Q: (a) 12 people in a room. Each shakes hands with everyone else once. Total handshakes? (b) How many diagonals does a 10-sided polygon have?**

```
  (a) HANDSHAKES:
  Each pair shakes hands once → select 2 from n

      Person A ──── Person B
      (order doesn't matter: A-B = B-A)

      Handshakes = nC2 = n(n-1)/2
                 = 12×11/2 = 66 ✓

  (b) DIAGONALS:
  Total lines joining any 2 vertices = nC2
  Subtract the n sides of polygon:

      ┌─────┐
     /  \ /  \     Diagonals = nC2 - n
    /    X    \              = n(n-1)/2 - n
    \  / \  /               = n(n-3)/2
     \─────/

      Diagonals = 10(10-3)/2 = 10×7/2 = 35 ✓
```

---

## Type 11: Distribution of Objects into Groups

**Q: In how many ways can 12 different books be divided equally among 3 children?**

```
  12 books → 3 groups of 4 each (to specific people)

  Child 1 picks 4: 12C4 = 495
  Child 2 picks 4:  8C4 =  70
  Child 3 gets rest: 4C4 =   1

  Total = 12C4 × 8C4 × 4C4
        = 495 × 70 × 1
        = 34650 ways ✓

  FORMULA: n! / [(n/k)!]^k  (to specific people)

  ┌────────────────────────────────────────────────┐
  │  Into NAMED groups (people): n!/(r1!×r2!×r3!) │
  │  Into UNNAMED groups: divide by k! extra       │
  │                                                │
  │  12 books to 3 CHILDREN = 34650                │
  │  12 books into 3 PILES  = 34650/3! = 5775     │
  └────────────────────────────────────────────────┘

  Identical objects into distinct groups:
  n identical into r groups = (n+r-1)C(r-1)
  (Stars and Bars theorem)
```

---

## Type 12: Arrangement with Restrictions (Always Together / Never Together)

**Q: In how many ways can the letters of ORANGE be arranged such that (a) the vowels are always together? (b) the vowels are never together?**

```
  O R A N G E → 6 letters
  Vowels: O, A, E (3)    Consonants: R, N, G (3)

  (a) ALWAYS TOGETHER: Treat group as 1 unit

  Bundle vowels: [OAE] R N G → 4 units
  Arrange 4 units = 4! = 24
  Arrange vowels inside bundle = 3! = 6
  Total = 4! × 3! = 24 × 6 = 144 ways ✓

  ┌─────────┐
  │[O A E]  │ R  N  G   → treat as 4 items
  └─────────┘

  (b) NEVER TOGETHER:
  Total - Always together
  = 6! - 144 = 720 - 144 = 576 ways ✓

  ALTERNATE (gap method for never together):
  Arrange consonants: R _ N _ G → 3! = 6
  Gaps: _R_N_G_ → 4 gaps
  Place 3 vowels in 4 gaps: 4P3 = 24
  Total = 6 × 24 = 144... wait, that gives never-adjacent

  Never-adjacent (no two vowels adjacent):
  = 3! × 4P3 = 6 × 24 = 144 ways

  Note: "Never together" = not ALL together = 576
        "Never adjacent" = no two next to each other = 144
```

---

## Type 13: Arrangement with Fixed Positions

**Q: How many 4-digit numbers can be formed using digits 1,2,3,4,5 (no repetition) such that the number is always odd?**

```
  4-digit number, must be ODD → last digit must be odd

  Odd digits available: 1, 3, 5 (3 choices)

  ┌───┐ ┌───┐ ┌───┐ ┌───┐
  │   │ │   │ │   │ │ODD│  ← Fix last digit first
  └───┘ └───┘ └───┘ └───┘
  Th    Hu    Te    Units

  Step 1: Units place = 3 choices (1, 3, or 5)
  Step 2: Remaining 3 positions from 4 remaining digits

  ┌───┐ ┌───┐ ┌───┐ ┌───┐
  │ 4 │ │ 3 │ │ 2 │ │ 3 │  = 4 × 3 × 2 × 3
  └───┘ └───┘ └───┘ └───┘

  Total = 3 × 4P3 = 3 × 24 = 72 ways ✓

  TRICK: Always fill the RESTRICTED position first!
```

---

## Type 14: Rank of a Word in Dictionary Order

**Q: Find the rank of the word SUGAR in the dictionary order of all arrangements of its letters.**

```
  S U G A R → 5 distinct letters
  Alphabetical order: A  G  R  S  U
                      1  2  3  4  5

  Words before SUGAR:
  ┌─────────────────────────────────────────┐
  │  Starting with A____: 4! = 24           │
  │  Starting with G____: 4! = 24           │
  │  Starting with R____: 4! = 24           │
  │                              Total = 72 │
  │                                         │
  │  Starting with SA___: 3! = 6            │
  │  Starting with SG___: 3! = 6            │
  │  Starting with SR___: 3! = 6            │
  │                              Total = 18 │
  │                                         │
  │  Starting with SUA__: 2! = 2            │
  │  Starting with SUA__ → after SU:        │
  │   Remaining: G, A, R                    │
  │   SUA__: 2! = 2                         │
  │                                         │
  │  Starting with SUGA_:                   │
  │   Remaining: R → only SUGAR             │
  │   SUGAR itself = 1                      │
  └─────────────────────────────────────────┘

  Rank = 72 + 18 + 2 + 1 = 93rd ✓

  METHOD: For each position (left to right),
  count letters smaller than current that are
  still available, multiply by (remaining)!
```

---

## Type 15: Necklace / Garland Problems

**Q: In how many ways can 8 different beads be arranged to form a necklace?**

```
  Necklace / Garland:
  ┌──────────────────────────────────────────────┐
  │  A necklace can be FLIPPED (turned over),    │
  │  so clockwise and anticlockwise are SAME.    │
  │                                              │
  │       1                                      │
  │    8     2       Clockwise: 1-2-3-4...       │
  │   7       3  =   Anticlockwise: 1-8-7-6...  │
  │    6     4       These are SAME for necklace! │
  │       5                                      │
  └──────────────────────────────────────────────┘

  Circular arrangement = (n-1)!
  Necklace (flipping allowed) = (n-1)! / 2

  = (8-1)! / 2
  = 7! / 2
  = 5040 / 2
  = 2520 ways ✓

  ┌─────────────────────┬───────────────────┐
  │ Type                │ Formula           │
  ├─────────────────────┼───────────────────┤
  │ Linear              │ n!                │
  │ Circular (table)    │ (n-1)!            │
  │ Necklace (garland)  │ (n-1)! / 2        │
  └─────────────────────┴───────────────────┘
```

---

## Type 16: Derangements (No Element in Original Position)

**Q: A postman has 4 letters and 4 addressed envelopes. In how many ways can he put all letters in wrong envelopes (no letter in its correct envelope)?**

```
  Derangement = arrangement where NO element
  is in its original position.

  FORMULA:
  D(n) = n! × [1 - 1/1! + 1/2! - 1/3! + ... + (-1)^n/n!]

  D(4) = 4! × [1 - 1 + 1/2 - 1/6 + 1/24]
       = 24 × [0 + 0.5 - 0.1667 + 0.0417]
       = 24 × [3/8]
       = 24 × 0.375
       = 9 ways ✓

  ┌────────────────────────────────────┐
  │  MEMORIZE these values:           │
  │  D(1) = 0                         │
  │  D(2) = 1                         │
  │  D(3) = 2                         │
  │  D(4) = 9                         │
  │  D(5) = 44                        │
  │  D(6) = 265                       │
  └────────────────────────────────────┘

  Recursive: D(n) = (n-1) × [D(n-1) + D(n-2)]
  D(3) = 2×(1+0) = 2
  D(4) = 3×(2+1) = 9
  D(5) = 4×(9+2) = 44
```
