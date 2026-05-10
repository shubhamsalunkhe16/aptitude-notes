# Simplification (BODMAS, Fractions, Decimals) - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### BODMAS Order of Operations

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  B — Brackets     (first: (), {}, [])                               │
│  O — Orders       (powers, roots, exponents)                        │
│  D — Division     (left to right)                                   │
│  M — Multiplication (left to right)                                 │
│  A — Addition     (left to right)                                   │
│  S — Subtraction  (left to right)                                   │
│                                                                     │
│  Bracket order:  ( )  →  { }  →  [ ]  (innermost first)            │
│                                                                     │
│  NOTE: Division & Multiplication have EQUAL precedence (L to R)    │
│        Addition & Subtraction have EQUAL precedence (L to R)       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Fraction & Decimal Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Addition: a/b + c/d = (ad + bc) / bd                               │
│  Subtraction: a/b - c/d = (ad - bc) / bd                           │
│  Multiplication: a/b x c/d = ac / bd                                │
│  Division: a/b / c/d = a/b x d/c = ad / bc                         │
│                                                                     │
│  Decimal to Fraction:                                                │
│    0.5 = 5/10 = 1/2                                                 │
│    0.125 = 125/1000 = 1/8                                           │
│    0.333... = 1/3                                                    │
│                                                                     │
│  Fraction to Decimal: divide numerator by denominator               │
│    3/8 = 0.375,  5/6 = 0.8333...                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Algebraic Identities

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  (a + b)^2 = a^2 + 2ab + b^2                                       │
│  (a - b)^2 = a^2 - 2ab + b^2                                       │
│  a^2 - b^2 = (a + b)(a - b)                                        │
│                                                                     │
│  (a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3                             │
│  (a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3                             │
│  a^3 + b^3 = (a + b)(a^2 - ab + b^2)                               │
│  a^3 - b^3 = (a - b)(a^2 + ab + b^2)                               │
│                                                                     │
│  Surds: a/sqrt(b) = a x sqrt(b) / b   (rationalize)                │
│  sqrt(a) x sqrt(b) = sqrt(ab)                                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Approximation & Percentage Shortcuts

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Approximation: Round to nearest easy number                        │
│    4.97 x 3.02 ~ 5 x 3 = 15                                        │
│    999 x 12 = (1000-1) x 12 = 12000-12 = 11988                     │
│                                                                     │
│  Percentage shortcuts:                                               │
│    10% of X = X/10                                                   │
│    5% of X = X/20                                                    │
│    12.5% = 1/8,  33.33% = 1/3,  66.67% = 2/3                       │
│    25% = 1/4,  75% = 3/4,  20% = 1/5                                │
│                                                                     │
│  x% of y = y% of x  (commutative trick)                             │
│    4% of 75 = 75% of 4 = 3                                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — BODMAS Visual Guide

```
         BODMAS — ORDER OF OPERATIONS

   Expression: 12 + 8 x (6 - 2)^2 / 4

   Step 1: BRACKETS     (6 - 2) = 4
   Step 2: ORDERS       4^2 = 16
   Step 3: MULTIPLY     8 x 16 = 128
   Step 4: DIVIDE       128 / 4 = 32
   Step 5: ADD          12 + 32 = 44

   ┌─────────────────────────────────────┐
   │  B → O → D/M (left→right)          │
   │       → A/S (left→right)           │
   │                                     │
   │  Innermost bracket first            │
   │  D and M: equal priority, go L→R   │
   │  A and S: equal priority, go L→R   │
   └─────────────────────────────────────┘
```

---

## Type 1: BODMAS Order of Operations

**Q: Simplify: 18 + 12 / 4 x 3 - 2**

```
   Expression: 18 + 12 / 4 x 3 - 2

   Step 1: No brackets, no orders
   Step 2: Division first (L→R): 12/4 = 3
     = 18 + 3 x 3 - 2
   Step 3: Multiplication: 3 x 3 = 9
     = 18 + 9 - 2
   Step 4: Addition: 18 + 9 = 27
     = 27 - 2
   Step 5: Subtraction: 27 - 2 = 25

   ┌─────────────────────────────────────┐
   │  18 + 12/4 x 3 - 2                 │
   │  = 18 + [3] x 3 - 2    (D first)  │
   │  = 18 + [9] - 2        (M next)   │
   │  = [27] - 2             (A next)   │
   │  = 25                   (S last)   │
   └─────────────────────────────────────┘

   Answer: 25 ✓
```

---

## Type 2: Fraction Addition/Subtraction (LCM of Denominators)

**Q: Simplify: 3/4 + 5/6 - 1/3**

```
   Find LCM of denominators: LCM(4, 6, 3) = 12

   3/4 = 9/12
   5/6 = 10/12
   1/3 = 4/12

   = 9/12 + 10/12 - 4/12
   = (9 + 10 - 4) / 12
   = 15/12
   = 5/4

   ┌─────────────────────────────────────┐
   │  3/4  →  9/12                       │
   │  5/6  → 10/12    LCM = 12          │
   │  1/3  →  4/12                       │
   │  = (9+10-4)/12 = 15/12 = 5/4       │
   └─────────────────────────────────────┘

   Answer: 5/4 (or 1 1/4) ✓
```

---

## Type 3: Fraction Multiplication/Division

**Q: Simplify: (2/3) x (9/4) / (3/2)**

```
   Step 1: Multiply first two fractions
     2/3 x 9/4 = 18/12 = 3/2

   Step 2: Divide by 3/2
     3/2 / 3/2 = 3/2 x 2/3 = 6/6 = 1

   ┌─────────────────────────────────────┐
   │  (2/3) x (9/4) = 18/12 = 3/2      │
   │  (3/2) / (3/2) = (3/2) x (2/3)    │
   │                = 1                  │
   │                                     │
   │  TIP: Cancel before multiplying     │
   │  2/3 x 9/4 = (2x9)/(3x4) cancel   │
   │  = 1x3/1x2 = 3/2                   │
   └─────────────────────────────────────┘

   Answer: 1 ✓
```

---

## Type 4: Decimal to Fraction Conversion

**Q: Convert 0.375 to a fraction in simplest form.**

```
   0.375 = 375/1000

   Step 1: Find GCD(375, 1000)
     375 = 3 x 5^3
     1000 = 2^3 x 5^3
     GCD = 5^3 = 125

   Step 2: 375/1000 = (375/125)/(1000/125)
     = 3/8

   ┌─────────────────────────────────────┐
   │  0.375 → 375/1000                  │
   │  Divide both by 125                 │
   │  = 3/8                              │
   │                                     │
   │  Quick: 0.125=1/8, 0.375=3/8       │
   │  0.625=5/8, 0.875=7/8              │
   └─────────────────────────────────────┘

   Answer: 3/8 ✓
```

---

## Type 5: Fraction to Decimal Conversion

**Q: Convert 7/16 to a decimal.**

```
   7 / 16 = ?

   Step 1: 7.0000 / 16
     16 x 0.4 = 6.4   → 7.0 - 6.4 = 0.60
     16 x 0.03 = 0.48 → 0.60 - 0.48 = 0.120
     16 x 0.007 = 0.112 → 0.120 - 0.112 = 0.0080
     16 x 0.0005 = 0.0080

   = 0.4375

   ┌─────────────────────────────────────┐
   │  7/16 = 0.4375                      │
   │                                     │
   │  Shortcut: 7/16 = 7 x (1/16)       │
   │  1/16 = 0.0625                      │
   │  7 x 0.0625 = 0.4375               │
   └─────────────────────────────────────┘

   Answer: 0.4375 ✓
```

---

## Type 6: Simplify Complex Expressions (Nested Brackets)

**Q: Simplify: 2[3 + {4 - (5 - 3)} x 2]**

```
   Start from innermost bracket:

   Step 1: (5 - 3) = 2
     = 2[3 + {4 - 2} x 2]

   Step 2: {4 - 2} = 2
     = 2[3 + 2 x 2]

   Step 3: Multiply: 2 x 2 = 4
     = 2[3 + 4]

   Step 4: Square bracket: [3 + 4] = 7
     = 2 x 7 = 14

   ┌─────────────────────────────────────┐
   │  ( ) → { } → [ ] innermost first   │
   │  2[3 + {4 - (5-3)} x 2]            │
   │  = 2[3 + {4-2} x 2]               │
   │  = 2[3 + 2x2]                      │
   │  = 2[3 + 4] = 2 x 7 = 14          │
   └─────────────────────────────────────┘

   Answer: 14 ✓
```

---

## Type 7: Square of a Number Using (a+b)^2 and (a-b)^2

**Q: Find 47^2 using algebraic identity.**

```
   47 = 50 - 3,  use (a - b)^2 = a^2 - 2ab + b^2

   47^2 = (50 - 3)^2
        = 50^2 - 2(50)(3) + 3^2
        = 2500 - 300 + 9
        = 2209

   ┌─────────────────────────────────────┐
   │  (a-b)^2 = a^2 - 2ab + b^2        │
   │  47^2 = (50-3)^2                   │
   │  = 2500 - 300 + 9 = 2209           │
   │                                     │
   │  Similarly: 53^2 = (50+3)^2        │
   │  = 2500 + 300 + 9 = 2809           │
   └─────────────────────────────────────┘

   Answer: 2209 ✓
```

---

## Type 8: Difference of Squares a^2 - b^2 = (a+b)(a-b)

**Q: Find the value of 78^2 - 22^2.**

```
   Using a^2 - b^2 = (a+b)(a-b)

   78^2 - 22^2 = (78+22)(78-22)
               = 100 x 56
               = 5600

   ┌─────────────────────────────────────┐
   │  a^2 - b^2 = (a+b)(a-b)           │
   │  78^2 - 22^2 = (78+22)(78-22)     │
   │             = 100 x 56 = 5600      │
   │                                     │
   │  TIP: Much faster than computing   │
   │  each square separately!            │
   │  78^2=6084, 22^2=484               │
   │  6084-484=5600 (same but slower)   │
   └─────────────────────────────────────┘

   Answer: 5600 ✓
```

---

## Type 9: Cube Formulas (a+b)^3 and (a-b)^3

**Q: Find 21^3 using algebraic identity.**

```
   21 = 20 + 1,  use (a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3

   21^3 = (20 + 1)^3
        = 20^3 + 3(20^2)(1) + 3(20)(1^2) + 1^3
        = 8000 + 3(400) + 3(20) + 1
        = 8000 + 1200 + 60 + 1
        = 9261

   ┌─────────────────────────────────────┐
   │  (a+b)^3 = a^3+3a^2b+3ab^2+b^3    │
   │  21^3 = (20+1)^3                   │
   │  = 8000+1200+60+1 = 9261           │
   │                                     │
   │  Shortcut: (a+b)^3                  │
   │  = a^3 + b^3 + 3ab(a+b)            │
   │  = 8000+1+3(20)(1)(21)             │
   │  = 8001+1260 = 9261                │
   └─────────────────────────────────────┘

   Answer: 9261 ✓
```

---

## Type 10: Surds Simplification (Rationalize Denominator)

**Q: Simplify: 5 / (3 + sqrt(2))**

```
   Rationalize: multiply by conjugate

   5 / (3 + sqrt(2))
   = 5(3 - sqrt(2)) / (3 + sqrt(2))(3 - sqrt(2))
   = 5(3 - sqrt(2)) / (9 - 2)
   = 5(3 - sqrt(2)) / 7
   = (15 - 5*sqrt(2)) / 7

   ┌─────────────────────────────────────┐
   │  Conjugate of (a+sqrt(b))           │
   │           is (a-sqrt(b))            │
   │                                     │
   │  (a+sqrt(b))(a-sqrt(b))            │
   │  = a^2 - b  (removes surd)         │
   │                                     │
   │  5/(3+sqrt2) x (3-sqrt2)/(3-sqrt2) │
   │  = 5(3-sqrt2) / 7                  │
   └─────────────────────────────────────┘

   Answer: (15 - 5*sqrt(2)) / 7 ✓
```

---

## Type 11: Approximation Tricks for Large Calculations

**Q: Approximate: 4.98 x 6.03 + 2.97 x 3.04**

```
   Round to nearest integers:
   4.98 ~ 5,  6.03 ~ 6
   2.97 ~ 3,  3.04 ~ 3

   Approx = 5 x 6 + 3 x 3
          = 30 + 9 = 39

   Exact: 4.98 x 6.03 = 30.0294
          2.97 x 3.04 = 9.0288
          Total = 39.0582

   ┌─────────────────────────────────────┐
   │  TRICK: Round to nearest whole      │
   │  4.98~5, 6.03~6, 2.97~3, 3.04~3   │
   │  5x6 + 3x3 = 30+9 = 39            │
   │                                     │
   │  Also: 999x45 = (1000-1)x45        │
   │  = 45000 - 45 = 44955              │
   └─────────────────────────────────────┘

   Answer: ~39 (exact: 39.06) ✓
```

---

## Type 12: Percentage-Based Simplification Shortcuts

**Q: Find 37.5% of 480.**

```
   37.5% = 3/8

   37.5% of 480 = 3/8 x 480 = 3 x 60 = 180

   ┌─────────────────────────────────────┐
   │  % to Fraction shortcuts:           │
   │  12.5% = 1/8    37.5% = 3/8        │
   │  62.5% = 5/8    87.5% = 7/8        │
   │  16.67% = 1/6   33.33% = 1/3       │
   │  66.67% = 2/3   25% = 1/4          │
   │  20% = 1/5      40% = 2/5          │
   │                                     │
   │  TIP: x% of y = y% of x            │
   │  37.5% of 480 = 480% of 37.5 (=180)│
   └─────────────────────────────────────┘

   Answer: 180 ✓
```
