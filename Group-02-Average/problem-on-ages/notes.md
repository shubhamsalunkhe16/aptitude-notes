# Problem on Ages - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Basic Age Equations

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Present age = x                                                    │
│  Age t years ago = x - t                                            │
│  Age t years hence = x + t                                          │
│                                                                     │
│  If ratio of ages a:b → ages = ak, bk                               │
│  Difference of ages stays CONSTANT over time                        │
│  Sum of ages increases by 2t after t years                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Ratio & Difference Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  If A:B = m:n and difference = d                                    │
│    A = m × d / (m - n)                                              │
│    B = n × d / (m - n)                                              │
│                                                                     │
│  If ratio was m:n, becomes p:q after t years                        │
│    (mk + t) / (nk + t) = p / q → solve for k                       │
│                                                                     │
│  Product of ages = P                                                │
│    Use factorization + constraints to find ages                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Father-Son / Parent-Child Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Father = k × Son (k times the son's age now)                       │
│  Father + t = j × (Son + t) (j times after t years)                 │
│                                                                     │
│  Father - Son = constant (always, at any point in time)             │
│  Sum increases by 2 each year (both age by 1)                       │
│                                                                     │
│  Father's age when son was born = Difference of their ages          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Average Age of Group

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Average age of n people = A                                        │
│  After t years: Avg = A + t                                         │
│                                                                     │
│  New member joins: recalculate with n+1                             │
│  Member leaves: recalculate with n-1                                │
│                                                                     │
│  Sum of ages = Avg × Count                                          │
│  Birth/Death changes both count AND sum                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Type 1: Ratio + Difference

**Q: The ages of A and B are in the ratio 5:3. If the difference between their ages is 12 years, find their present ages.**

```
  Ratio A:B = 5:3
  Let ages = 5k and 3k

  Difference = 5k - 3k = 2k
  2k = 12 → k = 6

  A = 5 × 6 = 30 years
  B = 3 × 6 = 18 years

  A ──── 5k ────→ 30 yrs
  B ──── 3k ────→ 18 yrs
        diff = 2k = 12
             k = 6

  CHECK: 30:18 = 5:3 ✓
         30 - 18 = 12 ✓

  Answer: A = 30, B = 18 years ✓
```

---

## Type 2: X Years Ago / Hence

**Q: The ratio of ages of A and B, 4 years ago, was 3:2. After 4 years, the ratio will be 5:4. Find their present ages.**

```
  4 yrs ago → (A-4):(B-4) = 3:2
  Let A-4 = 3k, B-4 = 2k
  So A = 3k+4, B = 2k+4

  After 4 yrs → (A+4):(B+4) = 5:4
  (3k+8)/(2k+8) = 5/4
  4(3k+8) = 5(2k+8)
  12k + 32 = 10k + 40
  2k = 8 → k = 4

  A = 3(4) + 4 = 16
  B = 2(4) + 4 = 12

  Timeline:
  ──|──────|──────|──
  -4yr   NOW    +4yr
  3:2   16:12   5:4
  12:8         20:16

  CHECK: 12:8 = 3:2 ✓   20:16 = 5:4 ✓

  Answer: A = 16, B = 12 years ✓
```

---

## Type 3: Sum of Ages

**Q: The sum of ages of a father and son is 56 years. After 4 years, the father's age will be 3 times the son's age. Find their present ages.**

```
  F + S = 56  ...(1)

  After 4 years:
  F + 4 = 3(S + 4)
  F + 4 = 3S + 12
  F = 3S + 8  ...(2)

  Substitute (2) in (1):
  3S + 8 + S = 56
  4S = 48 → S = 12
  F = 56 - 12 = 44

  Father(44) + Son(12) = 56 ✓
  After 4 yrs: 48 = 3 × 16 ✓

  F ═══════════════ 44
  S ═══════ 12
  |────── 56 ──────|

  Answer: Father = 44, Son = 12 years ✓
```

---

## Type 4: Father-Son Ratio Change

**Q: A father is 4 times as old as his son. After 6 years, he will be 3 times as old. Find their present ages.**

```
  Now: F = 4S
  After 6 yrs: F + 6 = 3(S + 6)
  4S + 6 = 3S + 18
  S = 12
  F = 4 × 12 = 48

  NOW         AFTER 6 YRS
  F = 48      F = 54
  S = 12      S = 18
  4:1         3:1

  Diff = 36 (constant always)
  48 - 12 = 36, 54 - 18 = 36 ✓

  Answer: Father = 48, Son = 12 years ✓
```

---

## Type 5: Average Age of Family

**Q: The average age of a family of 4 members is 25 years. A baby is born and the average age drops to 21. Find the age of the baby.**

```
  4 members, Avg = 25
  Sum = 4 × 25 = 100

  Baby born, 5 members, Avg = 21
  New Sum = 5 × 21 = 105

  Baby's age = 105 - 100 = 5 years

  [4 members, avg=25] + [baby]
  ─────────────────────────────
  [5 members, avg=21]

  Sum: 100 + baby = 105
  Baby = 5 years

  Answer: Baby = 5 years old ✓
```

---

## Type 6: Product of Ages

**Q: The product of ages of two children is 72 and the difference between their ages is 1 year. Find their ages.**

```
  A × B = 72, A - B = 1

  Factor pairs of 72:
  1×72 → diff=71
  2×36 → diff=34
  3×24 → diff=21
  4×18 → diff=14
  6×12 → diff=6
  8×9  → diff=1  ← MATCH!

  A = 9, B = 8

  8 × 9 = 72 ✓
  9 - 8 = 1   ✓

  Answer: Ages = 9 and 8 years ✓
```

---

## Type 7: Ratio After N Years

**Q: Present ages of A and B are in ratio 5:4. After 10 years, ratio becomes 7:6. Find present ages.**

```
  A:B = 5:4 → A = 5k, B = 4k

  After 10 years:
  (5k + 10) / (4k + 10) = 7/6
  6(5k + 10) = 7(4k + 10)
  30k + 60 = 28k + 70
  2k = 10 → k = 5

  A = 5 × 5 = 25
  B = 4 × 5 = 20

  NOW       AFTER 10 YRS
  25:20     35:30
  = 5:4     = 7:6 ✓

  Diff = 5 (constant at all times)

  Answer: A = 25, B = 20 years ✓
```

---

## Type 8: X Times as Old, Y Years Ago

**Q: 6 years ago, a man was 3 times as old as his son. After 6 years, he will be twice as old. Find their present ages.**

```
  6 yrs ago: M - 6 = 3(S - 6)
  M - 6 = 3S - 18 → M = 3S - 12  ...(1)

  After 6 yrs: M + 6 = 2(S + 6)
  M + 6 = 2S + 12 → M = 2S + 6   ...(2)

  From (1) and (2):
  3S - 12 = 2S + 6
  S = 18
  M = 3(18) - 12 = 42

  Timeline:
  6 yrs ago  NOW   6 yrs hence
  M=36,S=12  42,18  48,24
  36=3×12 ✓        48=2×24 ✓

  Answer: Man = 42, Son = 18 years ✓
```

---

## Type 9: Difference Constant

**Q: The difference between the ages of two persons is 20 years. 5 years ago, the elder one was 3 times the younger. Find their present ages.**

```
  E - Y = 20  ...(1)

  5 yrs ago: E - 5 = 3(Y - 5)
  E - 5 = 3Y - 15
  E = 3Y - 10  ...(2)

  Substitute (2) in (1):
  3Y - 10 - Y = 20
  2Y = 30 → Y = 15
  E = 15 + 20 = 35

  5 yrs ago: 30 = 3 × 10 ✓
  Diff: 35 - 15 = 20 ✓

  E ═══════════════ 35
  Y ═════════ 15
  |── diff=20 ──|
  (constant at all times)

  Answer: Elder = 35, Younger = 15 years ✓
```

---

## Type 10: Three People Ages

**Q: The ages of A, B, and C are in the ratio 3:5:7. If the sum of their ages is 60 years, find each person's age.**

```
  A:B:C = 3:5:7
  Let ages = 3k, 5k, 7k

  Sum = 3k + 5k + 7k = 15k
  15k = 60 → k = 4

  A = 3 × 4 = 12
  B = 5 × 4 = 20
  C = 7 × 4 = 28

  A ═══ 12 (3×4)
  B ═══════ 20 (5×4)
  C ═══════════ 28 (7×4)
  |──── sum = 60 ────|

  CHECK: 12 + 20 + 28 = 60 ✓
         12:20:28 = 3:5:7 ✓

  Answer: A = 12, B = 20, C = 28 years ✓
```

---

## Type 11: Age When Child Was Born

**Q: A mother is 24 years older than her daughter. In 6 years, the mother's age will be twice the daughter's age. Find the present age of the daughter.**

```
  M = D + 24  ...(1)

  After 6 yrs: M + 6 = 2(D + 6)
  D + 24 + 6 = 2D + 12
  D + 30 = 2D + 12
  D = 18
  M = 18 + 24 = 42

  Mother was 24 when daughter was born
  (diff = 24 = mother's age at birth)

  NOW: M = 42, D = 18
  +6:  M = 48, D = 24 → 48 = 2 × 24 ✓

  Birth──────Now──────+6yr
  M=24       42       48
  D=0        18       24

  Answer: Daughter = 18 years ✓
```

---

## Type 12: Fraction of Ages

**Q: The age of a man is 1/3 more than his wife's age. The wife is 8 years older than her son aged 16. What is the man's age?**

```
  Son = 16
  Wife = 16 + 8 = 24

  Man = Wife + (1/3) × Wife
  Man = 24 + 24/3
  Man = 24 + 8 = 32

  Son ═══ 16
  Wife ═══════ 24 (son + 8)
  Man ══════════ 32 (wife × 4/3)

  IMPORTANT: "1/3 more" means multiply by 4/3
  (NOT 1/3 of wife's age!)
  24 × 4/3 = 32 ✓

  Answer: Man = 32 years ✓
```
