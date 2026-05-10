# Problems on Numbers - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Two-Digit Number Representation

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Two-digit number with digits a (tens) and b (units):               │
│     Number = 10a + b                                                │
│     Reversed number = 10b + a                                       │
│     Sum of digits = a + b                                           │
│     Difference = (10a+b) - (10b+a) = 9(a-b)                        │
│                                                                     │
│  Three-digit number = 100a + 10b + c                                │
│     Reversed = 100c + 10b + a                                       │
│     Difference = 99(a-c)                                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Sum / Difference / Product Identities

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  If sum of two numbers = S and difference = D:                      │
│     Larger  = (S + D) / 2                                           │
│     Smaller = (S - D) / 2                                           │
│                                                                     │
│  (a+b)² = a² + b² + 2ab                                            │
│  (a-b)² = a² + b² - 2ab                                            │
│  a² - b² = (a+b)(a-b)                                               │
│                                                                     │
│  Sum of first n naturals = n(n+1)/2                                 │
│  Sum of first n even = n(n+1)                                       │
│  Sum of first n odd  = n²                                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Divisibility Rules

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  By 2  → Last digit is even (0,2,4,6,8)                            │
│  By 3  → Sum of digits divisible by 3                               │
│  By 4  → Last 2 digits divisible by 4                               │
│  By 5  → Last digit is 0 or 5                                       │
│  By 6  → Divisible by BOTH 2 and 3                                  │
│  By 7  → Double last digit, subtract from rest, check div by 7     │
│  By 8  → Last 3 digits divisible by 8                               │
│  By 9  → Sum of digits divisible by 9                               │
│  By 10 → Last digit is 0                                            │
│  By 11 → |Sum of odd-place digits - Sum of even-place digits|       │
│           is 0 or divisible by 11                                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### LCM and HCF Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  LCM × HCF = Product of two numbers                                │
│  LCM(a,b) = (a × b) / HCF(a,b)                                    │
│  HCF(a,b) = (a × b) / LCM(a,b)                                    │
│                                                                     │
│  LCM of fractions = LCM of numerators / HCF of denominators        │
│  HCF of fractions = HCF of numerators / LCM of denominators        │
│                                                                     │
│  HCF always divides LCM                                            │
│  HCF ≤ both numbers ≤ LCM                                          │
│  For co-prime numbers: HCF = 1, LCM = product                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Remainder and Division Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Dividend = Divisor × Quotient + Remainder                          │
│     N = D × Q + R    (where 0 ≤ R < D)                             │
│                                                                     │
│  If N leaves remainder R when divided by D:                         │
│     N = D × Q + R  (for some integer Q)                             │
│     Smallest such N = R (when Q = 0)                                │
│                                                                     │
│  If same remainder R when divided by D1 and D2:                     │
│     (N - R) is divisible by both D1 and D2                          │
│     N - R = LCM(D1, D2) × k                                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Unit Digit Cyclicity

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Digit │ Cycle of unit digits (power 1,2,3,...) │ Period            │
│  ──────┼────────────────────────────────────────┼────────           │
│    0   │ 0, 0, 0, 0, ...                        │   1              │
│    1   │ 1, 1, 1, 1, ...                        │   1              │
│    2   │ 2, 4, 8, 6, 2, 4, 8, 6, ...            │   4              │
│    3   │ 3, 9, 7, 1, 3, 9, 7, 1, ...            │   4              │
│    4   │ 4, 6, 4, 6, ...                        │   2              │
│    5   │ 5, 5, 5, 5, ...                        │   1              │
│    6   │ 6, 6, 6, 6, ...                        │   1              │
│    7   │ 7, 9, 3, 1, 7, 9, 3, 1, ...            │   4              │
│    8   │ 8, 4, 2, 6, 8, 4, 2, 6, ...            │   4              │
│    9   │ 9, 1, 9, 1, ...                        │   2              │
│                                                                     │
│  To find unit digit of a^n:                                         │
│    Step 1: Check cycle length of a's unit digit                     │
│    Step 2: Find n mod cycle_length = r                              │
│    Step 3: Unit digit = cycle[r]  (if r=0, take last in cycle)      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Number Representation and Relationships

```
TWO-DIGIT NUMBER ANATOMY:
                    ┌──────────────────┐
                    │  Number = 10a + b │
                    └────────┬─────────┘
                             │
                    ┌────────┴─────────┐
                    │                   │
              Tens digit (a)      Units digit (b)
               (1 ≤ a ≤ 9)        (0 ≤ b ≤ 9)

    Original:   10a + b        Example: a=5, b=3 → 53
    Reversed:   10b + a        Reversed → 35
    Difference: 9(a - b)       53 - 35 = 18 = 9(5-3) ✓

GIVEN SUM AND DIFFERENCE — FIND TWO NUMBERS:
    ┌─────────────────────────────────────────────┐
    │  Sum = S,   Diff = D                        │
    │                                             │
    │  Larger  = (S + D) / 2                      │
    │  Smaller = (S - D) / 2                      │
    │                                             │
    │  CHECK: S and D must have same parity       │
    │  (both even or both odd), else no solution   │
    └─────────────────────────────────────────────┘

CONSECUTIVE NUMBERS:
    n consecutive naturals: x, x+1, x+2, ..., x+(n-1)
    n consecutive even:     x, x+2, x+4, ...
    n consecutive odd:      x, x+2, x+4, ...
    Sum of n consecutive from x = n × (middle term)
    For 3 consecutive: let them be (a-d), a, (a+d) → sum = 3a

DIVISION ALGORITHM:
    ┌──────────────────────────────────────────────┐
    │  Dividend = Divisor × Quotient + Remainder   │
    │       N   =    D    ×    Q     +     R       │
    │  where 0 ≤ R < D                             │
    └──────────────────────────────────────────────┘
```

---

## Type 1: Find the Number Given Sum, Difference, Product

**Q: The sum of two numbers is 40 and their difference is 12. Find the two numbers.**

```
  Given: Sum = 40, Diff = 12

  ┌──────────────────────────────────┐
  │  Larger  = (Sum + Diff) / 2     │
  │         = (40 + 12) / 2 = 26    │
  │                                  │
  │  Smaller = (Sum - Diff) / 2     │
  │         = (40 - 12) / 2 = 14    │
  └──────────────────────────────────┘

  Check: 26 + 14 = 40 ✓   26 - 14 = 12 ✓

  Numbers are 26 and 14 ✓
```

---

## Type 2: Sum of Digits / Product of Digits

**Q: A two-digit number is such that the sum of its digits is 12 and the product of its digits is 35. Find the number.**

```
  Let digits be a (tens) and b (units)
  Number = 10a + b

  a + b = 12  ...(1)
  a × b = 35  ...(2)

  From (1): b = 12 - a
  Sub in (2): a(12-a) = 35
              12a - a² = 35
              a² - 12a + 35 = 0
              (a-5)(a-7) = 0
              a = 5 or a = 7

  ┌──────────────────────────────┐
  │  a=5, b=7 → Number = 57     │
  │  a=7, b=5 → Number = 75     │
  └──────────────────────────────┘

  Both 57 and 75 are valid ✓
  (Check question for "greater than 60" etc.)
```

---

## Type 3: Number with Reversed Digits

**Q: A two-digit number is 27 more than the number obtained by reversing its digits. If the sum of the digits is 11, find the number.**

```
  Let number = 10a + b
  Reversed   = 10b + a

  (10a+b) - (10b+a) = 27
  9a - 9b = 27
  a - b = 3   ...(1)

  a + b = 11  ...(2)

  ┌───────────────────────────┐
  │  Adding (1) and (2):      │
  │  2a = 14 → a = 7         │
  │  b = 11 - 7 = 4          │
  │                           │
  │  Number = 74              │
  │  Reversed = 47            │
  │  74 - 47 = 27 ✓           │
  └───────────────────────────┘

  TRICK: Difference of number and reverse
         is ALWAYS 9 × |a-b|
```

---

## Type 4: Consecutive Numbers (Sum, Product)

**Q: The sum of three consecutive odd numbers is 93. Find the numbers.**

```
  Let the numbers be (a-2), a, (a+2)
  (For odd/even consecutive, gap = 2)

  ┌──────────────────────────────────────┐
  │  (a-2) + a + (a+2) = 93             │
  │  3a = 93                             │
  │  a = 31                              │
  │                                      │
  │  Numbers: 29, 31, 33                 │
  └──────────────────────────────────────┘

  Check: 29 + 31 + 33 = 93 ✓

  PATTERNS:
  3 consecutive:       (a-1), a, (a+1) → sum = 3a
  3 consecutive even/odd: (a-2), a, (a+2) → sum = 3a
  Middle term = Average = Sum/3
```

---

## Type 5: Divisibility Rules (Testing a Number)

**Q: Is 3,52,836 divisible by 4, by 9, and by 11?**

```
  Number: 3,52,836

  ┌─── By 4: Last 2 digits = 36 ────────────────┐
  │   36 ÷ 4 = 9 → YES, divisible by 4 ✓        │
  └──────────────────────────────────────────────┘

  ┌─── By 9: Sum of digits ──────────────────────┐
  │   3+5+2+8+3+6 = 27 → 27÷9 = 3 → YES ✓      │
  └──────────────────────────────────────────────┘

  ┌─── By 11: Alternating sum ───────────────────┐
  │   Odd positions (R→L): 6+8+5 = 19            │
  │   Even positions:      3+2+3 = 8             │
  │   Difference = |19-8| = 11 → YES ✓           │
  └──────────────────────────────────────────────┘

  QUICK CHECK: Div by 6 = div by 2 AND 3
               Div by 12 = div by 3 AND 4
               Div by 15 = div by 3 AND 5
```

---

## Type 6: Remainder Problems

**Q: What is the remainder when 7^23 is divided by 4?**

```
  Find remainder of 7^23 ÷ 4

  7 mod 4 = 3 (or -1)

  ┌──────────────────────────────────────┐
  │  7 ≡ -1 (mod 4)                     │
  │  7^23 ≡ (-1)^23 = -1 ≡ 3 (mod 4)   │
  │                                      │
  │  Remainder = 3 ✓                     │
  └──────────────────────────────────────┘

  TRICK: If N ≡ -1 (mod D):
    N^odd  → remainder = D-1
    N^even → remainder = 1

  Other approach — find cycle:
  7^1 mod 4 = 3
  7^2 mod 4 = 1   ← cycle length = 2
  23 mod 2 = 1 → same as 7^1 mod 4 = 3 ✓
```

---

## Type 7: LCM and HCF Problems

**Q: Find the LCM and HCF of 12, 18, and 24.**

```
  Prime factorization:
  12 = 2² × 3
  18 = 2  × 3²
  24 = 2³ × 3

  ┌──────────────────────────────────────────┐
  │  HCF = lowest powers of common primes   │
  │      = 2¹ × 3¹ = 6                      │
  │                                          │
  │  LCM = highest powers of all primes     │
  │      = 2³ × 3² = 72                     │
  └──────────────────────────────────────────┘

  Verify: HCF divides LCM → 72/6 = 12 ✓

  SHORTCUT for 2 numbers:
  LCM = (a × b) / HCF
  72 = (12 × 18) / HCF → HCF = 216/72 ... wait
  For 12,18: LCM(12,18) = 36, HCF = 6
  12 × 18 = 216 = 36 × 6 ✓
```

---

## Type 8: LCM x HCF = Product of Two Numbers

**Q: The HCF of two numbers is 8 and their LCM is 96. If one number is 32, find the other.**

```
  Formula: LCM × HCF = a × b

  ┌──────────────────────────────────┐
  │  96 × 8 = 32 × b                │
  │  768 = 32 × b                    │
  │  b = 768 / 32                    │
  │  b = 24 ✓                        │
  └──────────────────────────────────┘

  Check: HCF(32,24) = 8 ✓
         LCM(32,24) = 96 ✓
         32 × 24 = 768 = 96 × 8 ✓

  NOTE: This formula works ONLY for
        TWO numbers, not three or more!
```

---

## Type 9: Largest/Smallest N-Digit Number Divisible by X

**Q: Find the largest 4-digit number divisible by 13.**

```
  Largest 4-digit number = 9999

  ┌──────────────────────────────────────────┐
  │  9999 ÷ 13 = 769 remainder 2             │
  │                                          │
  │  Largest = 9999 - remainder              │
  │          = 9999 - 2                       │
  │          = 9997 ✓                         │
  └──────────────────────────────────────────┘

  Check: 9997 ÷ 13 = 769 exactly ✓

  RULES:
  Largest N-digit div by X:
    = Largest_N_digit - (Largest_N_digit mod X)

  Smallest N-digit div by X:
    = Smallest_N_digit + (X - Smallest_N_digit mod X)
    (if mod = 0, answer = Smallest_N_digit itself)

  Smallest 4-digit div by 13:
    1000 ÷ 13 = 76 rem 12
    1000 + (13-12) = 1001
    Check: 1001 ÷ 13 = 77 ✓
```

---

## Type 10: Number Leaves Remainder R When Divided by D

**Q: A number when divided by 5 gives remainder 3, and when divided by 7 gives remainder 4. Find the smallest such number.**

```
  N = 5Q₁ + 3  →  N ∈ {3, 8, 13, 18, 23, 28, 33, 38, ...}
  N = 7Q₂ + 4  →  N ∈ {4, 11, 18, 25, 32, 39, ...}

  ┌──────────────────────────────────────────┐
  │  Common value: N = 18                    │
  │                                          │
  │  Check: 18 ÷ 5 = 3 rem 3 ✓              │
  │         18 ÷ 7 = 2 rem 4 ✓              │
  │                                          │
  │  General: N = 18 + LCM(5,7) × k         │
  │         = 18 + 35k  (k = 0,1,2,...)      │
  │         = 18, 53, 88, 123, ...           │
  └──────────────────────────────────────────┘

  SHORTCUT (same remainder):
  If N mod 5 = 3 and N mod 7 = 3 (SAME R),
  then N - 3 is divisible by LCM(5,7) = 35
  → N = 35k + 3
```

---

## Type 11: Two Numbers — Given Sum and Difference

**Q: The sum of two numbers is 50 and their difference is 16. Find the product of the two numbers.**

```
  ┌──────────────────────────────────────────┐
  │  Sum = 50,  Diff = 16                    │
  │                                          │
  │  Larger  = (50 + 16) / 2 = 33            │
  │  Smaller = (50 - 16) / 2 = 17            │
  │                                          │
  │  Product = 33 × 17 = 561 ✓               │
  └──────────────────────────────────────────┘

  DERIVED FORMULA (if only product asked):
  a² - b² = (a+b)(a-b)
  a + b = 50, a - b = 16
  a² - b² = 50 × 16 = 800

  Also: Product = (S² - D²) / 4
        = (2500 - 256) / 4 = 561 ✓
```

---

## Type 12: Fraction Problems (Numerator/Denominator)

**Q: If 2 is added to the numerator and 3 to the denominator of a fraction, it becomes 3/4. If 3 is subtracted from the numerator and 2 from the denominator, it becomes 1/3. Find the fraction.**

```
  Let fraction = x/y

  (x+2)/(y+3) = 3/4  →  4(x+2) = 3(y+3)
                         4x+8 = 3y+9
                         4x - 3y = 1   ...(1)

  (x-3)/(y-2) = 1/3  →  3(x-3) = y-2
                         3x-9 = y-2
                         3x - y = 7    ...(2)

  ┌──────────────────────────────────────────┐
  │  From (2): y = 3x - 7                   │
  │  Sub in (1): 4x - 3(3x-7) = 1           │
  │              4x - 9x + 21 = 1            │
  │              -5x = -20 → x = 4           │
  │              y = 3(4) - 7 = 5            │
  │                                          │
  │  Fraction = 4/5 ✓                        │
  └──────────────────────────────────────────┘

  Check: (4+2)/(5+3) = 6/8 = 3/4 ✓
         (4-3)/(5-2) = 1/3 ✓
```

---

## Type 13: Unit Digit of Power (Cyclicity)

**Q: Find the unit digit of 7^253.**

```
  Unit digit of 7 follows cycle: 7, 9, 3, 1  (period = 4)

  ┌─────────────────────────────────────────────┐
  │  7^1 = 7                                    │
  │  7^2 = ...9                                 │
  │  7^3 = ...3                                 │
  │  7^4 = ...1  ← cycle repeats               │
  │                                              │
  │  253 ÷ 4 = 63 remainder 1                   │
  │  r = 1 → same as 7^1                        │
  │                                              │
  │  Unit digit = 7 ✓                            │
  └─────────────────────────────────────────────┘

  QUICK TABLE:
  r=1 → 7    r=2 → 9    r=3 → 3    r=0 → 1

  If remainder = 0, use LAST value in cycle!
```

---

## Type 14: Number is X Times Sum of Its Digits

**Q: A two-digit number is 4 times the sum of its digits. If 18 is added to the number, the digits get reversed. Find the number.**

```
  Let number = 10a + b

  10a + b = 4(a + b)
  10a + b = 4a + 4b
  6a = 3b → b = 2a   ...(1)

  10a + b + 18 = 10b + a  (reverse on adding 18)
  9a - 9b = -18
  a - b = -2 → b = a + 2  ...(2)

  ┌──────────────────────────────────────────┐
  │  From (1) and (2): 2a = a + 2            │
  │  a = 2,  b = 4                           │
  │                                          │
  │  Number = 24 ✓                           │
  └──────────────────────────────────────────┘

  Check: 4 × (2+4) = 4 × 6 = 24 ✓
         24 + 18 = 42 (reversed) ✓
```

---

## Type 15: Three Consecutive Even/Odd Numbers

**Q: The sum of squares of three consecutive even numbers is 440. Find the numbers.**

```
  Let numbers be (a-2), a, (a+2)  [consecutive even]

  (a-2)² + a² + (a+2)² = 440

  ┌──────────────────────────────────────────────┐
  │  a² - 4a + 4 + a² + a² + 4a + 4 = 440       │
  │  3a² + 8 = 440                               │
  │  3a² = 432                                    │
  │  a² = 144                                     │
  │  a = 12  (positive value)                     │
  │                                               │
  │  Numbers: 10, 12, 14 ✓                        │
  └──────────────────────────────────────────────┘

  Check: 100 + 144 + 196 = 440 ✓

  NOTE: (a-2)² + (a+2)² = 2a² + 8
  So total = 3a² + 8 (shortcut to expand)
```
