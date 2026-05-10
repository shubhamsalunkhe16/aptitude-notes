# Ratio and Proportion - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Basic Ratio Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Ratio a:b = a/b (always in LOWEST terms)                          │
│                                                                     │
│  If A:B = a:b, then:                                               │
│     A = a/(a+b) × Total                                            │
│     B = b/(a+b) × Total                                            │
│                                                                     │
│  Duplicate ratio of a:b  → a²:b²                                   │
│  Sub-duplicate ratio     → √a:√b                                   │
│  Triplicate ratio        → a³:b³                                   │
│  Sub-triplicate ratio    → ³√a:³√b                                 │
│                                                                     │
│  Compounded ratio of a:b and c:d → ac:bd                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Proportion Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  a:b = c:d  ⟹  a×d = b×c  (cross multiply)                       │
│                                                                     │
│  Mean Proportional of a and c = √(a×c)                             │
│     a : x = x : c  →  x² = a×c  →  x = √(ac)                     │
│                                                                     │
│  Third Proportional of a and b = b²/a                              │
│     a : b = b : x  →  x = b²/a                                    │
│                                                                     │
│  Fourth Proportional of a, b, c = b×c/a                            │
│     a : b = c : x  →  x = b×c/a                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Direct & Inverse Proportion

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Direct Proportion:                                                 │
│     If A ↑ then B ↑ (same direction)                               │
│     A1/B1 = A2/B2                                                   │
│     More work → More time, More items → More cost                  │
│                                                                     │
│  Inverse Proportion:                                                │
│     If A ↑ then B ↓ (opposite direction)                           │
│     A1 × B1 = A2 × B2                                              │
│     More workers → Less time, More speed → Less time               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Mixture & Partnership

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Alligation (Mixture):                                              │
│                                                                     │
│     Cheaper      Dearer                                             │
│       c            d                                                │
│         \        /                                                  │
│          Mean(m)                                                    │
│         /        \                                                  │
│      (d-m)      (m-c)                                               │
│                                                                     │
│     Ratio = (d - m) : (m - c)                                      │
│                                                                     │
│  Partnership:                                                       │
│     Profit share ∝ Investment × Time                                │
│     A's share : B's share = (Ia × Ta) : (Ib × Tb)                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Visual Guide

```
  ╔═══ RATIO vs PROPORTION ═══╗

  RATIO  →  Comparison of TWO quantities (a:b)
  PROPORTION → Equality of TWO ratios (a:b = c:d)

  RATIO is a FRACTION:
    a : b  =  a/b
    3 : 5  means "for every 3 of A, there are 5 of B"

  PROPORTION is an EQUATION:
    a : b  =  c : d
    a,d = extremes    b,c = means
    Product of extremes = Product of means
    a × d = b × c


  ╔═══ DIVIDING IN A RATIO ═══╗

  Total = T,  Ratio = a : b : c

  A's share = [a / (a+b+c)] × T
  B's share = [b / (a+b+c)] × T
  C's share = [c / (a+b+c)] × T

  Example: Rs.120 in ratio 2:3:5
    Total parts = 10
    Shares = 24, 36, 60


  ╔═══ COMBINING RATIOS ═══╗

  A:B = 2:3  and  B:C = 4:5
  Make B same: LCM of 3,4 = 12
  A:B = 8:12  and  B:C = 12:15
  A:B:C = 8:12:15
```

---

## Type 1: Basic Ratio Simplification

**Q: Express 48:64 in simplest form.**

```
  48 : 64

  Step 1: Find GCD(48, 64)
    48 = 2⁴ × 3
    64 = 2⁶
    GCD = 2⁴ = 16

  Step 2: Divide both by GCD
    48/16 : 64/16
    =  3 : 4  ✓

  SHORTCUT: Keep halving if both even
    48:64 → 24:32 → 12:16 → 6:8 → 3:4 ✓
```

---

## Type 2: Dividing Amount in Given Ratio

**Q: Divide Rs.1500 among A, B, C in ratio 2:3:5.**

```
  Total = Rs.1500     Ratio = 2 : 3 : 5

  Total parts = 2 + 3 + 5 = 10

  A = (2/10) × 1500 = Rs.300
  B = (3/10) × 1500 = Rs.450
  C = (5/10) × 1500 = Rs.750

  Check: 300 + 450 + 750 = 1500 ✓

  ┌─────────────────────────────────┐
  │ Each share = (part/total) × Amt │
  │ Sum of shares = Original amount │
  └─────────────────────────────────┘
```

---

## Type 3: Finding the Ratio (A:B from Conditions)

**Q: A is 2/3 of B. Find A:B.**

```
  A = (2/3) × B

  A/B = 2/3

  A : B = 2 : 3  ✓

  OTHER PATTERNS:
  ┌─────────────────────────────────────┐
  │ "A is 40% of B"  → A/B = 2/5       │
  │   A : B = 2 : 5                     │
  │                                     │
  │ "A is 1.5 times B" → A/B = 3/2     │
  │   A : B = 3 : 2                     │
  │                                     │
  │ "A/3 = B/4" → A:B = 3:4            │
  │   Cross multiply: same value = k    │
  └─────────────────────────────────────┘
```

---

## Type 4: Combining Ratios (A:B and B:C to A:B:C)

**Q: A:B = 3:4 and B:C = 2:5. Find A:B:C.**

```
  A : B = 3 : 4
  B : C = 2 : 5

  Make B equal → LCM(4, 2) = 4

  A : B = 3 : 4  →  3 : 4  (already 4)
  B : C = 2 : 5  →  4 : 10 (× 2)

  A : B : C = 3 : 4 : 10  ✓

  TRICK:
  ┌───────────────────────────────────────┐
  │ Step 1: Find LCM of the two B values │
  │ Step 2: Scale both ratios            │
  │ Step 3: Merge on common B            │
  └───────────────────────────────────────┘
```

---

## Type 5: Proportion — Find Missing Value (a:b = c:d)

**Q: If 3:5 = x:25, find x.**

```
  3 : 5  =  x : 25

  Cross multiply:
  3 × 25 = 5 × x
  75 = 5x
  x = 15  ✓

  VERIFY: 3/5 = 15/25 = 3/5 ✓

  ┌─────────────────────────────────┐
  │  a : b = c : d                  │
  │  a × d = b × c                 │
  │  (product of extremes =        │
  │   product of means)            │
  └─────────────────────────────────┘
```

---

## Type 6: Mean Proportional

**Q: Find the mean proportional between 4 and 25.**

```
  Mean proportional of a and c:
    a : x = x : c
    x² = a × c

  x² = 4 × 25 = 100
  x  = √100
  x  = 10  ✓

  VERIFY: 4:10 = 10:25
          2:5  = 2:5 ✓

  ┌─────────────────────────────────┐
  │ Mean Proportional = √(a × c)   │
  │ It's the geometric mean!       │
  └─────────────────────────────────┘
```

---

## Type 7: Third Proportional

**Q: Find the third proportional to 4 and 12.**

```
  Third proportional of a and b:
    a : b = b : x
    x = b²/a

  x = 12² / 4
  x = 144 / 4
  x = 36  ✓

  VERIFY: 4:12 = 12:36
          1:3  = 1:3 ✓

  ┌─────────────────────────────────┐
  │ Third Proportional = b² / a    │
  │ a : b = b : ?                  │
  │ ? = b squared / a              │
  └─────────────────────────────────┘
```

---

## Type 8: Direct Proportion Problems

**Q: If 5 pens cost Rs.60, how much do 8 pens cost?**

```
  More pens → More cost  (DIRECT)

  5 pens  →  Rs.60
  8 pens  →  Rs.?

  5/60 = 8/x     (direct: same ratio)
  x = 60 × 8 / 5
  x = Rs.96  ✓

  OR: Cost per pen = 60/5 = Rs.12
      8 pens = 8 × 12 = Rs.96 ✓

  ┌─────────────────────────────────┐
  │ Direct: A1/B1 = A2/B2          │
  │ Both increase or both decrease │
  └─────────────────────────────────┘
```

---

## Type 9: Inverse Proportion Problems

**Q: 12 workers finish a job in 10 days. How many days for 15 workers?**

```
  More workers → Less days  (INVERSE)

  12 workers → 10 days
  15 workers → ? days

  12 × 10 = 15 × x    (inverse: product same)
  120 = 15x
  x = 8 days  ✓

  ┌─────────────────────────────────┐
  │ Inverse: A1 × B1 = A2 × B2    │
  │ One increases, other decreases │
  │ Product stays constant         │
  └─────────────────────────────────┘
```

---

## Type 10: Mixture Ratio (Alligation)

**Q: Mix Rs.40/kg rice with Rs.60/kg rice to get Rs.45/kg mix. Ratio?**

```
  Cheaper = 40     Dearer = 60     Mean = 45

      40            60
        \          /
         \   45   /
          \ /  \ /
         (60-45) (45-40)
          = 15    = 5

  Ratio (Cheaper : Dearer) = 15 : 5
                            = 3  : 1  ✓

  ALLIGATION RULE:
  ┌─────────────────────────────────────┐
  │   Cheap ──────── Mean ──────── Dear │
  │     c              m             d  │
  │                                     │
  │   Cheap : Dear = (d-m) : (m-c)     │
  │                                     │
  │   Cross-difference from the mean!   │
  └─────────────────────────────────────┘
```

---

## Type 11: Income and Expenditure Ratio

**Q: Incomes of A and B are 5:4. Expenses are 3:2. Each saves Rs.1000. Find incomes.**

```
  Income   A : B = 5 : 4  → 5x, 4x
  Expense  A : B = 3 : 2  → 3y, 2y
  Savings = Income - Expense = Rs.1000

  A: 5x - 3y = 1000  ... (1)
  B: 4x - 2y = 1000  ... (2)

  From (2): 2x - y = 500 → y = 2x - 500
  Sub in (1): 5x - 3(2x - 500) = 1000
              5x - 6x + 1500 = 1000
              -x = -500
              x = 500

  A's income = 5 × 500 = Rs.2500 ✓
  B's income = 4 × 500 = Rs.2000 ✓

  y = 2(500) - 500 = 500
  A's expense = 1500, B's expense = 1000
  Savings: 2500-1500=1000 ✓  2000-1000=1000 ✓
```

---

## Type 12: Ages in Ratio (Present, Past, Future)

**Q: Present ages of A and B are in ratio 5:3. After 6 years, ratio becomes 3:2. Find ages.**

```
  Present → A : B = 5 : 3  → 5x, 3x

  After 6 years:
  (5x + 6) / (3x + 6) = 3/2

  Cross multiply:
  2(5x + 6) = 3(3x + 6)
  10x + 12  = 9x + 18
  x = 6

  A = 5 × 6 = 30 years ✓
  B = 3 × 6 = 18 years ✓

  Check: After 6 yrs → 36:24 = 3:2 ✓

  ┌─────────────────────────────────────┐
  │ Let ratio = kx : ky                │
  │ After n yrs: (kx+n)/(ky+n) = p/q  │
  │ Before n yrs: (kx-n)/(ky-n) = p/q │
  │ Cross multiply and solve for x     │
  └─────────────────────────────────────┘
```

---

## Type 13: Partnership Ratio (Investment x Time)

**Q: A invests Rs.5000 for 12 months, B invests Rs.6000 for 10 months. Share in Rs.9300 profit?**

```
  Profit ∝ Investment × Time

  A = 5000 × 12 = 60000
  B = 6000 × 10 = 60000

  Ratio = 60000 : 60000 = 1 : 1

  Total profit = Rs.9300
  A's share = (1/2) × 9300 = Rs.4650 ✓
  B's share = (1/2) × 9300 = Rs.4650 ✓

  ┌─────────────────────────────────────────┐
  │ Capital × Time = "Investment-months"    │
  │ Profit shared in ratio of inv-months   │
  │                                         │
  │ Joining late? Count from joining date   │
  │ Leaving early? Count till leaving date  │
  └─────────────────────────────────────────┘
```

---

## Type 14: Ratio of Increase/Decrease

**Q: Ratio of boys to girls is 3:2. If 5 boys leave and 5 girls join, ratio becomes 1:1. Total students?**

```
  Boys : Girls = 3 : 2  →  3x, 2x

  After change:
  (3x - 5) / (2x + 5) = 1/1

  3x - 5 = 2x + 5
  x = 10

  Boys = 3 × 10 = 30
  Girls = 2 × 10 = 20
  Total = 50  ✓

  Check: 30-5=25, 20+5=25 → 25:25=1:1 ✓

  ┌─────────────────────────────────────┐
  │ Set up ratio as kx : ky            │
  │ Apply additions/subtractions       │
  │ Set new ratio and cross multiply   │
  └─────────────────────────────────────┘
```

---

## Type 15: Compounded Ratio

**Q: Find the compounded ratio of 2:3, 4:5, and 6:7.**

```
  Compounded ratio = product of all antecedents
                   : product of all consequents

  = (2 × 4 × 6) : (3 × 5 × 7)
  = 48 : 105
  = 16 : 35  ✓  (divide by GCD = 3)

  ┌─────────────────────────────────────┐
  │ a:b, c:d, e:f                      │
  │ Compounded = (a×c×e) : (b×d×f)    │
  │                                     │
  │ Used in: multi-step comparisons,   │
  │ chain ratios, race problems        │
  └─────────────────────────────────────┘
```
