# Simple Interest - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Core SI Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  SI = (P x R x T) / 100                                            │
│                                                                     │
│  P = Principal (original sum)                                       │
│  R = Rate of interest per annum (%)                                 │
│  T = Time (in years)                                                │
│  SI = Simple Interest                                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Amount Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Amount = Principal + Simple Interest                               │
│  A = P + SI                                                         │
│  A = P + (P x R x T) / 100                                         │
│  A = P (1 + R x T / 100)                                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Find Unknown (P, R, T)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  P = (100 x SI) / (R x T)                                          │
│  R = (100 x SI) / (P x T)                                          │
│  T = (100 x SI) / (P x R)                                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Multiplier / Doubling Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  If sum becomes N times in T years:                                 │
│     (N - 1) x 100 = R x T                                          │
│                                                                     │
│  Doubles:  R x T = 100    (N = 2)                                   │
│  Triples:  R x T = 200    (N = 3)                                   │
│  n times:  R x T = (n-1) x 100                                     │
│                                                                     │
│  Time to double = 100 / R                                           │
│  Time to triple = 200 / R                                           │
│  Time for N times = (N - 1) x 100 / R                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Splitting Sum Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  If total sum S is divided into two parts at R1% for T1 years       │
│  and R2% for T2 years such that SI is equal:                        │
│                                                                     │
│  Part1 / Part2 = (R2 x T2) / (R1 x T1)                             │
│                                                                     │
│  If time is same:                                                   │
│  Part1 / Part2 = R2 / R1                                            │
│                                                                     │
│  If rate is same:                                                   │
│  Part1 / Part2 = T2 / T1                                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Simple Interest Visual Guide

```
          Principal (P)
               |
               |  lent/borrowed at R% per annum
               |
    ┌──────────┼──────────┐
    |          |          |
    Year 1     Year 2     Year 3 ...
    SI=PR/100  SI=PR/100  SI=PR/100
    |          |          |
    └──────────┼──────────┘
               |
        Total SI = P x R x T / 100
               |
        Amount = P + SI

  KEY INSIGHT: In SI, interest each year is SAME
  (unlike Compound Interest where it grows)

  Year 1 interest = Year 2 interest = ... = PR/100

  ┌──────────────────────────────────────────────────┐
  │  If A = P + SI, then:                            │
  │     SI = A - P                                   │
  │     P  = A - SI                                  │
  │                                                  │
  │  SI grows LINEARLY with time                     │
  │                                                  │
  │  SI |        /                                   │
  │    |      /      <- straight line (constant R)   │
  │    |    /                                        │
  │    |  /                                          │
  │    |/__________ Time                             │
  └──────────────────────────────────────────────────┘
```

---

## Type 1: Basic SI Calculation (Find SI Given P, R, T)

**Q: Find the Simple Interest on Rs. 5000 at 8% per annum for 3 years.**

```
  SI = P x R x T / 100

  P = 5000, R = 8%, T = 3 years

  ┌────────────────────────────────────┐
  │  P = 5000                          │
  │  R = 8%                            │
  │  T = 3 years                       │
  │                                    │
  │  SI = 5000 x 8 x 3 / 100          │
  │     = 120000 / 100                 │
  │     = 1200                         │
  └────────────────────────────────────┘

  Year 1: 5000 x 8/100 = 400
  Year 2: 5000 x 8/100 = 400
  Year 3: 5000 x 8/100 = 400
  Total SI = 400 x 3 = 1200

  = Rs. 1200 ✓
```

---

## Type 2: Find Principal Given SI, R, T

**Q: A sum of money at 10% per annum produces Rs. 600 as Simple Interest in 2 years. Find the principal.**

```
  P = 100 x SI / (R x T)

  SI = 600, R = 10%, T = 2 years

  ┌────────────────────────────────────┐
  │  SI = 600                          │
  │  R  = 10%                          │
  │  T  = 2 years                      │
  │                                    │
  │  P = 100 x 600 / (10 x 2)         │
  │    = 60000 / 20                    │
  │    = 3000                          │
  └────────────────────────────────────┘

  Verify: 3000 x 10 x 2 / 100 = 600 ✓

  = Rs. 3000 ✓
```

---

## Type 3: Find Rate Given SI, P, T

**Q: Rs. 800 amounts to Rs. 920 in 3 years at Simple Interest. Find the rate percent per annum.**

```
  R = 100 x SI / (P x T)

  P = 800, A = 920, T = 3 years
  SI = A - P = 920 - 800 = 120

  ┌────────────────────────────────────┐
  │  P = 800, SI = 120, T = 3         │
  │                                    │
  │  R = 100 x 120 / (800 x 3)        │
  │    = 12000 / 2400                  │
  │    = 5%                            │
  └────────────────────────────────────┘

  |◄──── Rs. 800 (Principal) ────►|
  |████████████████████████████████|░░░| Rs. 920
  |◄──── P = 800 ────►|◄ SI=120 ►|
                        @ 5% for 3 yrs

  = 5% per annum ✓
```

---

## Type 4: Find Time Given SI, P, R

**Q: In how many years will Rs. 1500 yield Rs. 450 as Simple Interest at 6% per annum?**

```
  T = 100 x SI / (P x R)

  P = 1500, SI = 450, R = 6%

  ┌────────────────────────────────────┐
  │  P = 1500, SI = 450, R = 6%       │
  │                                    │
  │  T = 100 x 450 / (1500 x 6)       │
  │    = 45000 / 9000                  │
  │    = 5 years                       │
  └────────────────────────────────────┘

  |◄── Yr1 ──|── Yr2 ──|── Yr3 ──|── Yr4 ──|── Yr5 ──►|
  |   +90    |   +90   |   +90   |   +90   |   +90    |
  |◄────────────── Total SI = 450 ────────────────────►|

  Each year SI = 1500 x 6 / 100 = 90
  Total: 90 x 5 = 450 ✓

  = 5 years ✓
```

---

## Type 5: Find Amount (A = P + SI)

**Q: Find the amount when Rs. 12000 is invested at 9% per annum Simple Interest for 4 years.**

```
  A = P (1 + R x T / 100)

  P = 12000, R = 9%, T = 4 years

  ┌────────────────────────────────────┐
  │  SI = 12000 x 9 x 4 / 100         │
  │     = 432000 / 100                 │
  │     = 4320                         │
  │                                    │
  │  A = P + SI                        │
  │    = 12000 + 4320                  │
  │    = 16320                         │
  └────────────────────────────────────┘

  OR directly:
  A = 12000 (1 + 9 x 4 / 100)
    = 12000 (1 + 0.36)
    = 12000 x 1.36
    = 16320

  |████████████████████████████░░░░░░░░░| Amount
  |◄──── P = 12000 ────►|◄ SI = 4320 ►|
  |◄───────── A = 16320 ──────────────►|

  = Rs. 16320 ✓
```

---

## Type 6: SI Doubles/Triples — Find Time or Rate

**Q: At what rate percent per annum will a sum of money double itself in 8 years at Simple Interest?**

```
  If sum doubles: A = 2P
  So SI = A - P = 2P - P = P

  Formula: R x T = 100  (for doubling)

  ┌────────────────────────────────────┐
  │  SI = P  (since amount doubles)    │
  │                                    │
  │  P x R x T / 100 = P              │
  │  R x T = 100                       │
  │  R x 8 = 100                       │
  │  R = 100 / 8                       │
  │  R = 12.5%                         │
  └────────────────────────────────────┘

  |████████████████|░░░░░░░░░░░░░░░░| 2P
  |◄──── P ────────►|◄──── SI = P ──►|
  Doubles in 8 years at 12.5%

  Quick trick:
  ┌──────────────────────────────────────┐
  │  Doubles  -> R = 100/T  or T = 100/R│
  │  Triples  -> R = 200/T  or T = 200/R│
  │  N times  -> R = (N-1)x100/T        │
  └──────────────────────────────────────┘

  = 12.5% per annum ✓
```

---

## Type 7: Sum Becomes N Times in T Years — Find Rate

**Q: A sum of money becomes 5 times itself in 12 years at Simple Interest. What is the rate of interest?**

```
  N times formula: R x T = (N - 1) x 100

  N = 5, T = 12

  ┌────────────────────────────────────┐
  │  A = 5P  =>  SI = 5P - P = 4P     │
  │                                    │
  │  R x T = (N - 1) x 100            │
  │  R x 12 = (5 - 1) x 100           │
  │  R x 12 = 400                      │
  │  R = 400 / 12                      │
  │  R = 33.33% = 33 1/3 %            │
  └────────────────────────────────────┘

  |████|░░░░░░░░░░░░░░░░░░░░░| 5P
  |◄P ►|◄────── SI = 4P ─────►|
  | 1x |  becomes 5 times

  = 33 1/3 % per annum ✓
```

---

## Type 8: Difference Between Two SIs (Different Rates or Times)

**Q: The difference between SI on Rs. 2000 for 3 years at 8% and at 6% per annum is how much?**

```
  Diff = P x T x (R1 - R2) / 100

  P = 2000, T = 3, R1 = 8%, R2 = 6%

  ┌────────────────────────────────────┐
  │  SI1 = 2000 x 8 x 3 / 100 = 480   │
  │  SI2 = 2000 x 6 x 3 / 100 = 360   │
  │                                    │
  │  Difference = 480 - 360 = 120      │
  │                                    │
  │  Shortcut:                         │
  │  = 2000 x 3 x (8 - 6) / 100       │
  │  = 2000 x 3 x 2 / 100             │
  │  = 120                             │
  └────────────────────────────────────┘

  At 8%: |████████████████████| 480
  At 6%: |███████████████|      360
         |               |░░░░| Diff = 120

  Trick: Same P and T? Just use (R1 - R2)
         Same P and R? Just use (T1 - T2)

  = Rs. 120 ✓
```

---

## Type 9: Sum Divided Into Two Parts at Different Rates

**Q: Rs. 4000 is divided into two parts such that if one part is lent at 5% and the other at 9%, the total annual interest is Rs. 220. Find the two parts.**

```
  Let Part 1 = x at R1, Part 2 = (S - x) at R2

  S = 4000, R1 = 5%, R2 = 9%, Total SI = 220, T = 1

  ┌────────────────────────────────────────┐
  │  SI1 + SI2 = 220                       │
  │  x x 5 x 1/100 + (4000-x) x 9 x 1/100│
  │                                = 220   │
  │  5x/100 + 9(4000-x)/100 = 220         │
  │  5x + 36000 - 9x = 22000              │
  │  -4x = -14000                          │
  │  x = 3500                              │
  └────────────────────────────────────────┘

  |◄──────── Rs. 4000 ─────────────────►|
  |◄── 3500 @ 5% ──►|◄── 500 @ 9% ────►|
  |   SI = 175       |   SI = 45        |
  |◄───── Total SI = 175 + 45 = 220 ───►|

  Verify: 3500 x 5/100 + 500 x 9/100
        = 175 + 45 = 220 ✓

  = Rs. 3500 and Rs. 500 ✓
```

---

## Type 10: Equal Installments (Paying Back Loan with SI)

**Q: A man borrows Rs. 3000 at 10% SI and pays back in 3 equal annual installments. Find the installment amount.**

```
  Equal installment formula:
  Installment = (P x 100) / [T x 100 + (T(T-1)/2) x R]

  P = 3000, R = 10%, T = 3

  ┌────────────────────────────────────────────┐
  │  x = (3000 x 100)                         │
  │      / [3x100 + (3x2/2) x 10]             │
  │    = 300000 / [300 + 30]                   │
  │    = 300000 / 330                          │
  │    = 909.09                                │
  │    ≈ Rs. 909.09                            │
  └────────────────────────────────────────────┘

  |◄── Year 1 ──|── Year 2 ──|── Year 3 ──►|
  |  Pay x      |  Pay x      | Pay x       |
  |  SI on full |  SI on 2/3  | SI on 1/3   |
  |  remaining  |  remaining  | remaining   |

  Logic: Each installment covers some principal + SI
  on the remaining outstanding balance.

  = Rs. 909.09 (approx) ✓
```

---

## Type 11: SI and Amount Relationship

**Q: A sum of money at Simple Interest amounts to Rs. 1380 in 3 years and Rs. 1500 in 5 years. Find the principal and rate.**

```
  A = P(1 + RT/100)

  A1 = 1380 at T1 = 3 years
  A2 = 1500 at T2 = 5 years

  ┌────────────────────────────────────────┐
  │  A2 - A1 = SI for (T2 - T1) years     │
  │  1500 - 1380 = 120 = SI for 2 years   │
  │                                        │
  │  SI per year = 120 / 2 = 60            │
  │                                        │
  │  SI for 3 years = 60 x 3 = 180        │
  │  P = A1 - SI(3 yrs) = 1380 - 180      │
  │  P = 1200                              │
  │                                        │
  │  R = 100 x SI / (P x T)               │
  │    = 100 x 180 / (1200 x 3)           │
  │    = 5%                                │
  └────────────────────────────────────────┘

  |◄──── 3 yrs ────►|◄── 2 yrs ──►|
  P──────────── 1380 ──────── 1500
  1200         +180           +120
  |◄─ SI=60/yr ─►|◄─ SI=60/yr ──►|

  Trick: Difference in amounts / Difference in time
         = SI per year

  = P = Rs. 1200, R = 5% ✓
```

---

## Type 12: If Rate Is Changed — Find New SI or Difference

**Q: The SI on a sum of money is Rs. 50 per year. If the rate increases by 2%, the SI increases by Rs. 40 per year. Find the principal.**

```
  SI increases by Rs. 40 when R increases by 2%

  ┌────────────────────────────────────────┐
  │  Original: SI = P x R x 1 / 100 = 50  │
  │  New:      SI = P x (R+2) x 1 / 100   │
  │                = 50 + 40 = 90          │
  │                                        │
  │  Difference in SI = P x 2 / 100 = 40  │
  │  P = 40 x 100 / 2                     │
  │  P = 2000                              │
  │                                        │
  │  Also: R = 50 x 100 / (2000 x 1)      │
  │       R = 2.5%                         │
  └────────────────────────────────────────┘

  At R%:     |██████████| SI = 50/yr
  At (R+2)%: |██████████|░░░░| SI = 90/yr
                         |◄40►| extra due to +2%

  Shortcut: P = (Difference in SI x 100)
                / (Change in Rate x T)

  = Rs. 2000 ✓
```

---

## Type 13: Borrow at One Rate, Lend at Another — Find Gain Per Year

**Q: A person borrows Rs. 5000 at 4% SI per annum and lends it at 6% per annum. Find his gain per year.**

```
  Gain per year = P x (R2 - R1) / 100

  P = 5000, R1 = 4% (borrows), R2 = 6% (lends)

  ┌────────────────────────────────────────┐
  │  Interest paid  = 5000 x 4 / 100      │
  │                 = 200/year             │
  │                                        │
  │  Interest earned = 5000 x 6 / 100     │
  │                  = 300/year            │
  │                                        │
  │  Gain = 300 - 200 = 100/year          │
  │                                        │
  │  Shortcut:                             │
  │  Gain = 5000 x (6 - 4) / 100          │
  │       = 5000 x 2 / 100 = 100          │
  └────────────────────────────────────────┘

  Borrows at 4%: ──► Pays Rs. 200/yr
  Lends at 6%:   ◄── Gets Rs. 300/yr
                      ─────────────
                 Net Gain = Rs. 100/yr

  = Rs. 100 per year ✓
```

---

## Type 14: Sum Amounts to X in T1 Years and Y in T2 Years — Find P and R

**Q: A sum amounts to Rs. 2200 in 2 years and Rs. 2800 in 5 years at Simple Interest. Find the sum and the rate of interest.**

```
  Given: A1 = 2200 at T1 = 2,  A2 = 2800 at T2 = 5

  ┌────────────────────────────────────────┐
  │  SI for (T2 - T1) years               │
  │  = A2 - A1                            │
  │  = 2800 - 2200 = 600 for 3 years      │
  │                                        │
  │  SI per year = 600 / 3 = 200           │
  │                                        │
  │  SI for 2 years = 200 x 2 = 400       │
  │  P = A1 - SI(2 yrs) = 2200 - 400      │
  │  P = 1800                              │
  │                                        │
  │  R = 100 x SI / (P x T)               │
  │    = 100 x 400 / (1800 x 2)           │
  │    = 40000 / 3600                      │
  │    = 11.11% = 11 1/9 %                │
  └────────────────────────────────────────┘

  Timeline:
  |◄── 2 yrs ──►|◄── 3 yrs ──────────►|
  P──────── 2200 ─────────────── 2800
  1800      +400                 +600
  |◄SI=200/yr►|◄── SI = 200/yr ──────►|

  Steps:
  1. Diff in amounts / Diff in time = SI/year
  2. P = Amount - (SI/year x that time)
  3. R = 100 x SI / (P x T)

  = P = Rs. 1800, R = 11 1/9 % ✓
```
