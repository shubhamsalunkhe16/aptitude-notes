# Fractions and Decimals - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Fraction Basics

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Proper fraction: numerator < denominator (3/7)                    │
│  Improper fraction: numerator >= denominator (7/3)                 │
│  Mixed fraction: whole + proper (2 1/3)                             │
│                                                                     │
│  Improper to Mixed: divide num by den                               │
│    7/3 = 2 remainder 1 = 2 1/3                                     │
│                                                                     │
│  Mixed to Improper: (whole × den + num) / den                      │
│    2 1/3 = (2×3+1)/3 = 7/3                                         │
│                                                                     │
│  Equivalent fractions: a/b = (a×k)/(b×k)                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Operations on Fractions

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Addition/Subtraction: Take LCM of denominators                    │
│    a/b + c/d = (ad + bc) / bd                                      │
│    a/b - c/d = (ad - bc) / bd                                      │
│                                                                     │
│  Multiplication: num × num / den × den                             │
│    a/b × c/d = ac / bd                                              │
│                                                                     │
│  Division: Multiply by reciprocal                                   │
│    a/b ÷ c/d = a/b × d/c = ad / bc                                │
│                                                                     │
│  Comparing: a/b vs c/d → cross multiply                            │
│    If ad > bc then a/b > c/d                                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Decimal to Fraction Conversion

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Decimal to Fraction:                                               │
│    0.25 = 25/100 = 1/4                                              │
│    0.125 = 125/1000 = 1/8                                           │
│    Count decimal places → that many zeros in denominator            │
│                                                                     │
│  Fraction to Decimal: divide numerator by denominator               │
│    3/8 = 0.375 (terminating)                                        │
│    1/3 = 0.333... (recurring)                                       │
│                                                                     │
│  Terminating: denominator has only 2s and 5s as factors             │
│  Recurring: denominator has factors other than 2 and 5              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Recurring Decimal to Fraction

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Pure recurring (0.xxx...):                                         │
│    0.ababab... = ab / 99                                            │
│    0.abcabc... = abc / 999                                          │
│    Denominator = as many 9s as repeating digits                     │
│                                                                     │
│  Mixed recurring (0.x_yyy...):                                      │
│    0.1666... = (16-1)/90 = 15/90 = 1/6                             │
│    Formula: (entire - non-repeating) /                              │
│             (9s for repeating, 0s for non-repeating)               │
│                                                                     │
│    0.123... (3 repeats) = (123-12)/900 = 111/900 = 37/300          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Type 1: Convert Improper Fraction to Mixed and Vice Versa

**Q: Convert 23/5 to a mixed fraction and convert 4 3/7 back to an improper fraction.**

```
  Improper to Mixed → divide:
    23 ÷ 5 = 4 remainder 3
    23/5 = 4 3/5

    5 ) 23
        20  (5 × 4)
       ---
         3  remainder → numerator
    Quotient = 4 → whole part
    23/5 = 4 3/5

  Mixed to Improper → (whole × den + num) / den:
    4 3/7 = (4 × 7 + 3) / 7
          = (28 + 3) / 7
          = 31/7

  Verify: 31 ÷ 7 = 4 remainder 3 = 4 3/7 ✓

  23/5 = 4 3/5 and 4 3/7 = 31/7 ✓
```

---

## Type 2: Compare Fractions (Cross Multiply or LCM)

**Q: Which is greater: 3/7 or 5/11?**

```
  Method 1: Cross Multiply
    3/7  vs  5/11
    3 × 11 = 33  vs  5 × 7 = 35

    3/7    vs    5/11
     \          /
      cross multiply
     /          \
    3×11=33  <  5×7=35

    Since 33 < 35 → 3/7 < 5/11

  Method 2: LCM of denominators
    LCM(7, 11) = 77
    3/7 = 33/77
    5/11 = 35/77
    33/77 < 35/77 → 3/7 < 5/11

  TIP: Cross multiply is faster for 2 fractions
       LCM method is better for 3+ fractions

  5/11 is greater ✓
```

---

## Type 3: Arrange Fractions in Ascending/Descending Order

**Q: Arrange 2/3, 3/5, 4/7, and 5/8 in ascending order.**

```
  LCM of denominators (3, 5, 7, 8) = 840

  Convert all fractions:
    2/3 = (2 × 280)/840 = 560/840
    3/5 = (3 × 168)/840 = 504/840
    4/7 = (4 × 120)/840 = 480/840
    5/8 = (5 × 105)/840 = 525/840

  Fraction | Equivalent | Decimal
  ---------|------------|--------
    4/7    |  480/840   |  0.571
    3/5    |  504/840   |  0.600
    5/8    |  525/840   |  0.625
    2/3    |  560/840   |  0.667

  Ascending: 480 < 504 < 525 < 560
           = 4/7 < 3/5 < 5/8 < 2/3

  4/7 < 3/5 < 5/8 < 2/3 ✓
```

---

## Type 4: Addition and Subtraction of Fractions

**Q: Find 2/3 + 3/4 - 1/6.**

```
  LCM of denominators (3, 4, 6) = 12

  Convert to common denominator:
    2/3 = 8/12
    3/4 = 9/12
    1/6 = 2/12

  2/3  +  3/4  -  1/6
  = 8/12 + 9/12 - 2/12
  = (8 + 9 - 2) / 12
  = 15/12

  Simplify: 15/12 = 5/4 = 1 1/4

  ┌──────────────────────────────────┐
  │  8/12  |████████|               │
  │  9/12  |█████████|              │
  │  2/12  |██|                     │
  │                                  │
  │  8 + 9 - 2 = 15                 │
  │  15/12 = 5/4 = 1 1/4           │
  └──────────────────────────────────┘

  5/4 or 1 1/4 ✓
```

---

## Type 5: Multiplication and Division of Fractions

**Q: Find (3/5 x 10/9) and (4/7 ÷ 2/3).**

```
  Multiplication → num × num / den × den
    3/5 × 10/9

    Cancel common factors FIRST:
    3/5 × 10/9 = (3×10)/(5×9)
    3 and 9 share factor 3: 1 and 3
    10 and 5 share factor 5: 2 and 1

    = (1 × 2) / (1 × 3) = 2/3

  Division → multiply by reciprocal
    4/7 ÷ 2/3 = 4/7 × 3/2
              = (4 × 3) / (7 × 2)
              = 12/14 = 6/7

  ┌──────────────────────────────────┐
  │  Multiply: straight across      │
  │  Divide: flip and multiply      │
  │  Cancel BEFORE multiplying!     │
  └──────────────────────────────────┘

  2/3 and 6/7 ✓
```

---

## Type 6: Decimal to Fraction Conversion

**Q: Convert 0.125, 0.375, and 0.04 to fractions.**

```
  Rule: count decimal places → that many zeros

  0.125 = 125/1000
    3 decimal places → 1000
    GCD(125, 1000) = 125
    125/1000 = 1/8

  0.375 = 375/1000
    GCD(375, 1000) = 125
    375/1000 = 3/8

  0.04 = 4/100
    GCD(4, 100) = 4
    4/100 = 1/25

  ┌──────────────────────────────────┐
  │  Quick reference:                │
  │  0.5 = 1/2    0.25 = 1/4        │
  │  0.2 = 1/5    0.125 = 1/8       │
  │  0.1 = 1/10   0.04 = 1/25       │
  │  0.05 = 1/20  0.008 = 1/125     │
  └──────────────────────────────────┘

  0.125 = 1/8, 0.375 = 3/8, 0.04 = 1/25 ✓
```

---

## Type 7: Fraction to Decimal (Recurring Decimals)

**Q: Convert 1/3, 5/6, and 7/11 to decimals.**

```
  1/3: 1 ÷ 3 = 0.333... = 0.3 recurring

  5/6: 5 ÷ 6 = 0.8333... = 0.83 recurring

  7/11: 7 ÷ 11 = 0.636363... = 0.63 recurring

  ┌──────────────────────────────────────────┐
  │  Terminating: den has ONLY 2s and 5s    │
  │    1/4 = 0.25   (4 = 2²)               │
  │    3/8 = 0.375  (8 = 2³)               │
  │    7/20 = 0.35  (20 = 2² × 5)          │
  │                                          │
  │  Recurring: den has OTHER prime factors │
  │    1/3 = 0.333...  (3)                  │
  │    1/7 = 0.142857... (7)                │
  │    1/11 = 0.0909... (11)                │
  └──────────────────────────────────────────┘

  Key recurring decimals to remember:
  1/3 = 0.333...   1/6 = 0.1666...
  1/7 = 0.142857...  1/9 = 0.111...

  1/3 = 0.3..., 5/6 = 0.83..., 7/11 = 0.6363... ✓
```

---

## Type 8: Recurring Decimal to Fraction

**Q: Convert 0.666..., 0.454545..., and 0.1666... to fractions.**

```
  Pure recurring → repeating digits / as many 9s

  0.666... → 1 repeating digit (6)
    = 6/9 = 2/3

  0.454545... → 2 repeating digits (45)
    = 45/99 = 5/11

  Mixed recurring 0.1666...
    Non-repeating: 1 (one digit)
    Repeating: 6 (one digit)

    Formula: (all digits - non-repeating part)
             divided by (9s for repeating, 0s for non-repeating)

    = (16 - 1) / 90 = 15/90 = 1/6

  ┌──────────────────────────────────────┐
  │  0.aaa...   = a/9                    │
  │  0.ababab... = ab/99                 │
  │  0.abcabc... = abc/999               │
  │                                      │
  │  0.x_yyy... = (xy - x) / 90         │
  │  0.xy_zzz... = (xyz - xy) / 900     │
  └──────────────────────────────────────┘

  Verify: 2/3 = 0.666... ✓
          5/11 = 0.4545... ✓
          1/6 = 0.1666... ✓

  2/3, 5/11, 1/6 ✓
```

---

## Type 9: Simplify Complex Fractions

**Q: Simplify: (2/3 of 9/4) ÷ (3/2 of 4/5).**

```
  "of" means multiplication

  Numerator: 2/3 of 9/4
    = 2/3 × 9/4
    = (2 × 9) / (3 × 4)
    = 18/12 = 3/2

  Denominator: 3/2 of 4/5
    = 3/2 × 4/5
    = (3 × 4) / (2 × 5)
    = 12/10 = 6/5

  Now divide:
    (3/2) ÷ (6/5)
    = 3/2 × 5/6
    = 15/12
    = 5/4

  ┌──────────────────────────────────┐
  │  Step 1: of → multiply          │
  │  Step 2: ÷ → flip & multiply   │
  │  Step 3: simplify               │
  │                                  │
  │  BODMAS order:                   │
  │  Brackets → Of → Div → Mul     │
  │  → Add → Sub                    │
  └──────────────────────────────────┘

  5/4 or 1 1/4 ✓
```

---

## Type 10: Word Problems on Fractions

**Q: A has 1/3 of total money. B has 1/4 of total. C has the remaining Rs.500. Find the total.**

```
  A's share = 1/3 of total
  B's share = 1/4 of total

  A + B = 1/3 + 1/4
        = 4/12 + 3/12
        = 7/12

  C's share = 1 - 7/12 = 5/12 of total

  Total |████████████████████████| = 12 parts
  A     |████████|                 = 4 parts (1/3)
  B     |██████|                   = 3 parts (1/4)
  C     |██████████|               = 5 parts (5/12)

  C's fraction = Rs.500
    5/12 × Total = 500
    Total = 500 × 12/5
    Total = Rs.1200

  Verify:
    A = 1200 × 1/3 = 400
    B = 1200 × 1/4 = 300
    C = 1200 - 400 - 300 = 500 ✓

  Total = Rs.1200 ✓
```
