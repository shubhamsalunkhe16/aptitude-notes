# Powers and Roots - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Laws of Exponents

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  a^m × a^n = a^(m+n)          Product of same base                 │
│  a^m ÷ a^n = a^(m-n)          Division of same base                │
│  (a^m)^n   = a^(m×n)          Power of a power                     │
│  (ab)^n    = a^n × b^n        Power of a product                   │
│  (a/b)^n   = a^n / b^n        Power of a quotient                  │
│                                                                     │
│  a^0 = 1  (a ≠ 0)             Zero exponent                        │
│  a^(-n) = 1/a^n               Negative exponent                    │
│  a^(1/n) = ⁿ√a                Fractional exponent                  │
│  a^(m/n) = ⁿ√(a^m) = (ⁿ√a)^m                                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Squares (1 to 30) Reference Table

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   1²=1      2²=4      3²=9      4²=16     5²=25     6²=36         │
│   7²=49     8²=64     9²=81    10²=100   11²=121   12²=144        │
│  13²=169   14²=196   15²=225   16²=256   17²=289   18²=324        │
│  19²=361   20²=400   21²=441   22²=484   23²=529   24²=576        │
│  25²=625   26²=676   27²=729   28²=784   29²=841   30²=900        │
│                                                                     │
│  TRICK: (a5)² = a(a+1) followed by 25                              │
│         25²=625, 35²=1225, 45²=2025, 55²=3025, 65²=4225           │
│                                                                     │
│  TRICK: n² - (n-1)² = 2n - 1 (difference of consecutive squares)  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Cubes (1 to 15) Reference Table

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   1³=1       2³=8       3³=27      4³=64      5³=125               │
│   6³=216     7³=343     8³=512     9³=729    10³=1000              │
│  11³=1331   12³=1728   13³=2197   14³=2744   15³=3375              │
│                                                                     │
│  TRICK: Unit digit of cube = specific pattern                       │
│    1→1  2→8  3→7  4→4  5→5  6→6  7→3  8→2  9→9  0→0              │
│    (1,4,5,6,0 keep same; 2↔8, 3↔7 swap)                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Square Root and Cube Root Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  √(a × b) = √a × √b           Product rule                        │
│  √(a / b) = √a / √b           Quotient rule                       │
│  √(a²)    = |a|                Always positive                     │
│  ³√(a × b) = ³√a × ³√b                                             │
│                                                                     │
│  Rationalizing: a/(√b) = a√b / b                                   │
│  Rationalizing: 1/(√a+√b) = (√a-√b)/(a-b)                         │
│  Rationalizing: 1/(√a-√b) = (√a+√b)/(a-b)                         │
│                                                                     │
│  √(√a) = a^(1/4) = ⁴√a        Nested root                         │
│  ³√(√a) = a^(1/6) = ⁶√a       Nested cube-square root             │
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
│    4   │ 4, 6, 4, 6, ...                         │   2              │
│    5   │ 5, 5, 5, 5, ...                         │   1              │
│    6   │ 6, 6, 6, 6, ...                         │   1              │
│    7   │ 7, 9, 3, 1, 7, 9, 3, 1, ...            │   4              │
│    8   │ 8, 4, 2, 6, 8, 4, 2, 6, ...            │   4              │
│    9   │ 9, 1, 9, 1, ...                         │   2              │
│                                                                     │
│  To find unit digit of a^n:                                         │
│    Step 1: Check cycle length of a's unit digit                     │
│    Step 2: Find n mod cycle_length = r                              │
│    Step 3: Unit digit = cycle[r]  (if r=0, take last in cycle)      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Useful Identities for Comparison and Estimation

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Number of digits in a^n = floor(n × log₁₀(a)) + 1                │
│                                                                     │
│  Common log values:                                                 │
│    log₁₀(2) ≈ 0.3010    log₁₀(3) ≈ 0.4771                         │
│    log₁₀(5) ≈ 0.6990    log₁₀(7) ≈ 0.8451                         │
│                                                                     │
│  Square root estimation:                                            │
│    √N ≈ √(nearest perfect square) + (difference)/(2×√perfect sq)   │
│    Example: √50 ≈ √49 + (50-49)/(2×7) = 7 + 1/14 ≈ 7.07          │
│                                                                     │
│  Perfect square test: unit digit must be 0,1,4,5,6,9               │
│    (never 2, 3, 7, or 8)                                            │
│  Perfect square: digital root must be 1, 4, 7, or 9                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Powers and Roots Visual Guide

```
EXPONENT LAWS AT A GLANCE:

     a^m × a^n           a^m ÷ a^n           (a^m)^n
         │                    │                   │
    ┌────┴────┐          ┌────┴────┐         ┌────┴────┐
    │ a^(m+n) │          │ a^(m-n) │         │ a^(m×n) │
    └─────────┘          └─────────┘         └─────────┘
     ADD powers          SUBTRACT powers     MULTIPLY powers

SPECIAL EXPONENTS:
    a^0 = 1       a^(-n) = 1/a^n       a^(1/n) = ⁿ√a

SQUARE ROOT ESTIMATION (Linear Approximation):
    ┌──────────────────────────────────────────────┐
    │  Want: √N                                    │
    │  Find nearest perfect square p² ≤ N          │
    │  √N ≈ p + (N - p²) / (2p)                   │
    │                                              │
    │  Example: √52                                │
    │  Nearest: 49 = 7²                            │
    │  √52 ≈ 7 + (52-49)/(14) = 7 + 3/14 ≈ 7.21  │
    │  Actual: 7.211...  ✓ Very close!             │
    └──────────────────────────────────────────────┘

COMPARISON TRICK (bring to same exponent or same base):
    Compare 2^30 vs 3^20
    2^30 = (2³)^10 = 8^10
    3^20 = (3²)^10 = 9^10
    Since 9 > 8 → 3^20 > 2^30 ✓

NESTED ROOTS:
    √(√x) = x^(1/2 × 1/2) = x^(1/4) = ⁴√x
    ³√(³√x) = x^(1/3 × 1/3) = x^(1/9) = ⁹√x
    Multiply the root indices!
```

---

## Type 1: Basic Laws of Exponents (Simplify)

**Q: Simplify: (2^5 × 2^3) ÷ 2^4. What is the value?**

```
  Apply exponent laws step by step:

  ┌──────────────────────────────────────────┐
  │  (2^5 × 2^3) ÷ 2^4                      │
  │  = 2^(5+3) ÷ 2^4     ← add powers      │
  │  = 2^8 ÷ 2^4         ← subtract powers  │
  │  = 2^(8-4)                               │
  │  = 2^4                                   │
  │  = 16 ✓                                  │
  └──────────────────────────────────────────┘

  KEY RULES USED:
  a^m × a^n = a^(m+n)
  a^m ÷ a^n = a^(m-n)
```

---

## Type 2: Simplify Expressions with Powers

**Q: Simplify: (3^4 × 3^(-2) × 3) / (3^2 × 3^(-1)).**

```
  Combine all powers of 3:

  ┌──────────────────────────────────────────────┐
  │  Numerator:   3^4 × 3^(-2) × 3^1            │
  │             = 3^(4 + (-2) + 1) = 3^3 = 27    │
  │                                              │
  │  Denominator: 3^2 × 3^(-1)                   │
  │             = 3^(2 + (-1)) = 3^1 = 3          │
  │                                              │
  │  Result = 3^3 / 3^1 = 3^(3-1) = 3^2 = 9 ✓   │
  └──────────────────────────────────────────────┘

  TRICK: Collect all exponents in num & den,
  then subtract: total_num - total_den
  = (4-2+1) - (2-1) = 3 - 1 = 2 → 3^2 = 9
```

---

## Type 3: Find Value of x in Exponential Equations

**Q: If 2^x = 128, find the value of x.**

```
  Express 128 as a power of 2:

  ┌──────────────────────────────────────────┐
  │  2^x = 128                               │
  │                                          │
  │  2^1=2, 2^2=4, 2^3=8, 2^4=16            │
  │  2^5=32, 2^6=64, 2^7=128 ✓              │
  │                                          │
  │  2^x = 2^7                               │
  │  x = 7 ✓                                 │
  └──────────────────────────────────────────┘

  METHOD: Express both sides with same base,
  then equate exponents.

  HARDER: 4^x = 32 → (2²)^x = 2^5
          → 2^(2x) = 2^5 → 2x=5 → x=5/2
```

---

## Type 4: Compare Two Powers (Which is Larger?)

**Q: Which is larger: 2^30 or 3^20?**

```
  Bring both to the SAME exponent:

  ┌──────────────────────────────────────────┐
  │  2^30 = (2^3)^10 = 8^10                  │
  │  3^20 = (3^2)^10 = 9^10                  │
  │                                          │
  │  Compare: 8^10 vs 9^10                    │
  │  Since 9 > 8 and exponent is same:       │
  │  9^10 > 8^10                              │
  │                                          │
  │  Therefore 3^20 > 2^30 ✓                  │
  └──────────────────────────────────────────┘

  TRICKS:
  1. Make exponents equal → compare bases
  2. Make bases equal → compare exponents
  3. Use logs: compare n×log(a) vs m×log(b)
     30×0.301=9.03 vs 20×0.477=9.54
     → 3^20 larger ✓
```

---

## Type 5: Square Roots — Basic Simplification

**Q: Simplify √(288).**

```
  Factor out perfect squares:

  ┌──────────────────────────────────────────┐
  │  288 = 144 × 2                           │
  │      = 12² × 2                            │
  │                                          │
  │  √288 = √(144 × 2)                       │
  │       = √144 × √2                        │
  │       = 12√2 ✓                            │
  └──────────────────────────────────────────┘

  STEP-BY-STEP FACTORING:
  288 = 2 × 144
      = 2 × 12²
  OR: 288 = 2^5 × 3^2
      √288 = 2^(5/2) × 3 = 4√2 × 3 = 12√2

  RULE: √(a²×b) = a√b
  Pull out pairs of prime factors!
```

---

## Type 6: Cube Roots — Basic Simplification

**Q: Find the cube root of 5832.**

```
  Factor into perfect cube components:

  ┌──────────────────────────────────────────────┐
  │  5832 ÷ 2 = 2916                             │
  │  2916 ÷ 2 = 1458                             │
  │  1458 ÷ 2 = 729                              │
  │   729 = 9³ = 3^6                              │
  │                                              │
  │  5832 = 2³ × 3^6 = 2³ × (3²)³ = (2×9)³      │
  │  ³√5832 = 2 × 9 = 18 ✓                       │
  └──────────────────────────────────────────────┘

  SHORTCUT for ³√N (N up to 6 digits):
  1. Last digit → unit digit of answer
     (1→1, 8→2, 7→3, 4→4, 5→5, 6→6, 3→7, 2→8, 9→9)
  2. Remove last 3 digits, find nearest cube
     5832 → last digit 2 → ans ends in 8
     Remove 832 → 5 → nearest cube 1³=1
     ³√5832 = 18 ✓
```

---

## Type 7: Surds — Rationalizing the Denominator

**Q: Rationalize: 5 / (√3 + √2).**

```
  Multiply by conjugate:

  ┌──────────────────────────────────────────────┐
  │      5           (√3 - √2)                    │
  │  ───────── × ─────────────                    │
  │  (√3 + √2)   (√3 - √2)                       │
  │                                              │
  │        5(√3 - √2)                             │
  │  = ─────────────────                          │
  │    (√3)² - (√2)²                              │
  │                                              │
  │        5(√3 - √2)                             │
  │  = ─────────────── = 5(√3 - √2) ✓            │
  │         3 - 2                                 │
  └──────────────────────────────────────────────┘

  RULE: Multiply by conjugate
  (√a + √b) → use (√a - √b)
  (√a - √b) → use (√a + √b)
  Denominator becomes: a - b (rational!)
```

---

## Type 8: Surds — Addition and Subtraction

**Q: Simplify: 3√50 + 2√18 - √72.**

```
  First simplify each surd to like terms:

  ┌──────────────────────────────────────────────┐
  │  √50 = √(25×2) = 5√2                        │
  │  √18 = √(9×2)  = 3√2                        │
  │  √72 = √(36×2) = 6√2                        │
  │                                              │
  │  3√50 + 2√18 - √72                           │
  │  = 3(5√2) + 2(3√2) - 6√2                    │
  │  = 15√2 + 6√2 - 6√2                          │
  │  = 15√2 ✓                                    │
  └──────────────────────────────────────────────┘

  RULE: Can add/subtract surds ONLY if
  the number under root is the same.
  Always simplify surds first, then combine.
  √50 + √18 ≠ √68  (WRONG!)
```

---

## Type 9: Find Unit Digit of Large Powers (Cyclicity)

**Q: Find the unit digit of 7^245.**

```
  Unit digit of 7 follows cycle: 7, 9, 3, 1  (period = 4)

  ┌─────────────────────────────────────────────┐
  │  7^1 → 7                                    │
  │  7^2 → 9                                    │
  │  7^3 → 3                                    │
  │  7^4 → 1  ← cycle repeats from here        │
  │                                              │
  │  245 ÷ 4 = 61 remainder 1                   │
  │  r = 1 → 1st in cycle = 7                   │
  │                                              │
  │  Unit digit of 7^245 = 7 ✓                   │
  └─────────────────────────────────────────────┘

  STEPS: 1. Find cycle for unit digit (see table)
         2. Divide power by cycle length
         3. r=1→1st, r=2→2nd, r=3→3rd, r=0→LAST
  If remainder = 0, use LAST value in cycle!
```

---

## Type 10: Find Remainder of Large Powers (Mod Arithmetic)

**Q: What is the remainder when 3^50 is divided by 5?**

```
  Find pattern of 3^n mod 5:

  ┌──────────────────────────────────────────────┐
  │  3^1 mod 5 = 3                               │
  │  3^2 mod 5 = 4                               │
  │  3^3 mod 5 = 2                               │
  │  3^4 mod 5 = 1  ← cycle length = 4           │
  │                                              │
  │  50 ÷ 4 = 12 remainder 2                     │
  │  r = 2 → same as 3^2 mod 5 = 4              │
  │                                              │
  │  Remainder = 4 ✓                              │
  └──────────────────────────────────────────────┘

  SHORTCUTS:
  If a ≡ -1 (mod d): a^even=1, a^odd=d-1
    e.g. 4 ≡ -1 (mod 5): 4^50 mod 5 = 1

  Fermat's Little Theorem (p prime):
    a^(p-1) ≡ 1 (mod p) when gcd(a,p)=1
    3^4 ≡ 1 (mod 5) → 3^50 = 3^(4×12+2) ≡ 3^2 = 4
```

---

## Type 11: Square Root by Approximation / Estimation

**Q: Estimate √68 without a calculator.**

```
  Linear approximation method:

  ┌──────────────────────────────────────────────┐
  │  Nearest perfect square ≤ 68: 64 = 8²        │
  │                                              │
  │  √N ≈ p + (N - p²) / (2p)                   │
  │                                              │
  │  √68 ≈ 8 + (68 - 64) / (2 × 8)             │
  │       = 8 + 4/16                              │
  │       = 8 + 0.25                              │
  │       = 8.25 ✓                                │
  │                                              │
  │  Actual: √68 = 8.246...  (very close!)       │
  └──────────────────────────────────────────────┘

  FORMULA: √N ≈ p + d/(2p)
    where p² is nearest perfect square ≤ N
    and d = N - p²

  For better accuracy (2nd iteration):
    √68 ≈ 8.25 → check 8.25² = 68.0625
    Too high by 0.0625 → adjust slightly down
```

---

## Type 12: Perfect Squares and Perfect Cubes Identification

**Q: Is 7056 a perfect square? Is 2744 a perfect cube?**

```
  PERFECT SQUARE TEST (7056):

  ┌──────────────────────────────────────────────┐
  │  Step 1: Unit digit = 6 (0,1,4,5,6,9 OK) ✓  │
  │  Step 2: Digital root = 7+0+5+6 = 18 → 9    │
  │          (must be 1,4,7,9) → 9 ✓             │
  │  Step 3: Factorize:                           │
  │    7056 = 2^4 × 3^2 × 7^2                    │
  │    All even powers → YES, perfect square ✓    │
  │    √7056 = 2² × 3 × 7 = 84                   │
  └──────────────────────────────────────────────┘

  PERFECT CUBE TEST (2744):

  ┌──────────────────────────────────────────────┐
  │  2744 = 2^3 × 7^3 = (2×7)^3 = 14^3          │
  │  All powers multiples of 3 → perfect cube ✓   │
  │  ³√2744 = 14                                  │
  └──────────────────────────────────────────────┘

  QUICK CHECKS:
  Perfect square → unit digit: 0,1,4,5,6,9 ONLY
  Never a perfect square if ends in 2,3,7,8
  Perfect square → digital root: 1,4,7,9 ONLY
```

---

## Type 13: Number of Digits in a Power (Using Log)

**Q: How many digits are in 2^100?**

```
  Use the formula: digits = floor(n × log₁₀(a)) + 1

  ┌──────────────────────────────────────────────┐
  │  Number of digits in 2^100                    │
  │                                              │
  │  = floor(100 × log₁₀(2)) + 1                │
  │  = floor(100 × 0.3010) + 1                   │
  │  = floor(30.10) + 1                           │
  │  = 30 + 1                                     │
  │  = 31 digits ✓                                │
  └──────────────────────────────────────────────┘

  MEMORIZE these log values:
  log₁₀(2) = 0.3010    log₁₀(3) = 0.4771
  log₁₀(5) = 0.6990    log₁₀(7) = 0.8451

  Example: digits in 3^50
  = floor(50 × 0.4771) + 1
  = floor(23.855) + 1 = 24 digits
```

---

## Type 14: Simplify Nested Roots

**Q: Simplify √(√(256)) and ³√(√(729)).**

```
  Convert to fractional exponents:

  ┌──────────────────────────────────────────────┐
  │  √(√256)                                     │
  │  = (256)^(1/2 × 1/2)                         │
  │  = 256^(1/4) = ⁴√256                         │
  │  = ⁴√(4^4) = 4 ✓                             │
  └──────────────────────────────────────────────┘

  ┌──────────────────────────────────────────────┐
  │  ³√(√729)                                    │
  │  = 729^(1/2 × 1/3)                           │
  │  = 729^(1/6) = ⁶√729                         │
  │  = ⁶√(3^6) = 3 ✓                             │
  └──────────────────────────────────────────────┘

  RULE: √(ⁿ√x) = ⁿ√(√x) = x^(1/(2n))
  Nested roots → MULTIPLY the root indices
  √(√x) = ⁴√x    √(³√x) = ⁶√x    ³√(³√x) = ⁹√x
```

---

## Type 15: Indices Comparison (Arrange in Order)

**Q: Arrange in ascending order: 2^(1/2), 3^(1/3), 4^(1/4).**

```
  Make all exponents have same denominator (LCM):

  ┌──────────────────────────────────────────────┐
  │  LCM of 2, 3, 4 = 12                         │
  │                                              │
  │  2^(1/2) = 2^(6/12) = (2^6)^(1/12)           │
  │          = 64^(1/12)                           │
  │                                              │
  │  3^(1/3) = 3^(4/12) = (3^4)^(1/12)           │
  │          = 81^(1/12)                           │
  │                                              │
  │  4^(1/4) = 4^(3/12) = (4^3)^(1/12)           │
  │          = 64^(1/12)                           │
  │                                              │
  │  Compare: 64, 81, 64 under same root          │
  │  64 = 64 < 81                                 │
  │  2^(1/2) = 4^(1/4) < 3^(1/3) ✓               │
  └──────────────────────────────────────────────┘

  METHOD: Raise all to LCM power,
  then compare the resulting integers.
  Ascending: 2^(1/2) = 4^(1/4) < 3^(1/3)
```
