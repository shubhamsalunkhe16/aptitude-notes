# HCF and LCM - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### HCF (Highest Common Factor) Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  HCF by Prime Factorization:                                       │
│    Write each number as product of primes                           │
│    HCF = product of COMMON primes with LOWEST power                │
│                                                                     │
│  HCF by Division (Euclid's Algorithm):                             │
│    Divide larger by smaller                                         │
│    Divide divisor by remainder                                      │
│    Repeat till remainder = 0                                        │
│    Last divisor = HCF                                               │
│                                                                     │
│  HCF(a,b) always divides (a - b)                                   │
│  HCF(a,b) <= min(a,b)                                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### LCM (Least Common Multiple) Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  LCM by Prime Factorization:                                       │
│    Write each number as product of primes                           │
│    LCM = product of ALL primes with HIGHEST power                   │
│                                                                     │
│  LCM using HCF:                                                    │
│    LCM × HCF = Product of two numbers                              │
│    LCM = (a × b) / HCF(a,b)                                       │
│                                                                     │
│  LCM(a,b) >= max(a,b)                                              │
│  LCM is always a multiple of HCF                                   │
│  LCM(a,b) / a and LCM(a,b) / b are integers                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### HCF & LCM of Fractions

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  HCF of fractions:                                                  │
│    = HCF of numerators / LCM of denominators                       │
│                                                                     │
│  LCM of fractions:                                                  │
│    = LCM of numerators / HCF of denominators                       │
│                                                                     │
│  Example: HCF(2/3, 4/9)                                            │
│    = HCF(2,4) / LCM(3,9) = 2/9                                    │
│                                                                     │
│  Example: LCM(2/3, 4/9)                                            │
│    = LCM(2,4) / HCF(3,9) = 4/3                                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Remainder-based Problems

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Largest number dividing X,Y,Z leaving remainder R:                 │
│    = HCF(X-R, Y-R, Z-R)                                            │
│                                                                     │
│  Largest number dividing X,Y leaving remainders a,b:               │
│    = HCF(X-a, Y-b)                                                 │
│                                                                     │
│  Smallest number divisible by X,Y,Z:                                │
│    = LCM(X, Y, Z)                                                  │
│                                                                     │
│  Smallest number ÷ X,Y,Z leaves remainder R:                       │
│    = LCM(X, Y, Z) + R                                              │
│                                                                     │
│  Smallest number ÷ X,Y,Z leaves remainders a,b,c:                  │
│    If (X-a)=(Y-b)=(Z-c)=k then answer = LCM(X,Y,Z) - k            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Type 1: Find HCF — Prime Factorization Method

**Q: Find the HCF of 36 and 48 using prime factorization method.**

```
  36 = 2 × 2 × 3 × 3 = 2² × 3²
  48 = 2 × 2 × 2 × 2 × 3 = 2⁴ × 3¹

       36           48
      / \          / \
     2  18        2  24
       / \          / \
      2   9        2  12
         / \         / \
        3   3       2   6
                       / \
                      2   3

  Pick COMMON primes with LOWEST power:
    Common primes: 2 and 3
    Lowest powers: 2² and 3¹

  HCF = 2² × 3 = 4 × 3 = 12 ✓

  Verify: 36/12 = 3 ✓  48/12 = 4 ✓
```

---

## Type 2: Find HCF — Euclid's Division Method

**Q: Find HCF of 462 and 132 using Euclid's algorithm.**

```
  Divide larger by smaller repeatedly:

  462 = 132 × 3 + 66
  132 = 66 × 2  + 0    ← remainder = 0, STOP

  ┌────────────────────────────────────┐
  │  462 ÷ 132 = 3  remainder 66      │
  │  132 ÷  66 = 2  remainder  0      │
  │                                    │
  │  Remainder = 0 → STOP             │
  │  Last divisor = 66 = HCF          │
  └────────────────────────────────────┘

  Verify: 462 ÷ 66 = 7 ✓
          132 ÷ 66 = 2 ✓

  TIP: This method is fastest for large numbers
       No need to find prime factors!

  HCF = 66 ✓
```

---

## Type 3: Find LCM — Prime Factorization

**Q: Find the LCM of 12, 18, and 24.**

```
  12 = 2² × 3¹
  18 = 2¹ × 3²
  24 = 2³ × 3¹

  Primes:  2  |  3
  ------+----+----
  12    | 2² | 3¹
  18    | 2¹ | 3²
  24    | 2³ | 3¹
  ------+----+----
  MAX   | 2³ | 3²    ← pick highest power

  LCM = 2³ × 3² = 8 × 9 = 72

  Verify:
    72 ÷ 12 = 6 ✓
    72 ÷ 18 = 4 ✓
    72 ÷ 24 = 3 ✓

  KEY: HCF → LOWEST power of COMMON primes
       LCM → HIGHEST power of ALL primes

  LCM = 72 ✓
```

---

## Type 4: Find LCM Using Formula (LCM x HCF = Product)

**Q: HCF of two numbers is 12. One number is 36, product of numbers is 1080. Find LCM and the other number.**

```
  Given: HCF = 12, a = 36, a × b = 1080

  Golden Formula: LCM × HCF = a × b

  ┌──────────────────────────────────────┐
  │  LCM × 12 = 1080                    │
  │  LCM = 1080 ÷ 12 = 90              │
  │                                      │
  │  Other number = 1080 ÷ 36 = 30      │
  └──────────────────────────────────────┘

  Verify:
    36 = 2² × 3²
    30 = 2 × 3 × 5
    HCF = 2 × 3 = 6 ... 

  NOTE: This formula works ONLY for two numbers
        For 3+ numbers: LCM × HCF ≠ product

  LCM = 90, other number = 30 ✓
```

---

## Type 5: HCF and LCM of Three Numbers

**Q: Find HCF and LCM of 8, 12, and 20.**

```
  8  = 2³
  12 = 2² × 3
  20 = 2² × 5

  Primes:  2  |  3  |  5
  ------+----+----+----
   8    | 2³ |  -  |  -
  12    | 2² | 3¹ |  -
  20    | 2² |  -  | 5¹
  ------+----+----+----
  MIN   | 2² |  -  |  -   → HCF (common only)
  MAX   | 2³ | 3¹ | 5¹  → LCM (all primes)

  HCF = 2² = 4
  LCM = 2³ × 3 × 5 = 8 × 15 = 120

  Verify HCF:  8÷4=2 ✓  12÷4=3 ✓  20÷4=5 ✓
  Verify LCM:  120÷8=15 ✓  120÷12=10 ✓  120÷20=6 ✓

  IMPORTANT: LCM × HCF ≠ product for 3+ numbers!
    4 × 120 = 480 ≠ 8 × 12 × 20 = 1920

  HCF = 4, LCM = 120 ✓
```

---

## Type 6: Largest Number Dividing X,Y,Z Leaving Same Remainder R

**Q: Find the largest number that divides 49, 65, and 97 leaving remainder 1 in each case.**

```
  If N divides each number leaving remainder 1:
    N divides (49-1), (65-1), (97-1) exactly

  49 - 1 = 48
  65 - 1 = 64
  97 - 1 = 96

  ┌────────────────────────────────────────┐
  │  N divides 48, 64, and 96 exactly     │
  │  Largest such N = HCF(48, 64, 96)    │
  └────────────────────────────────────────┘

  48 = 2⁴ × 3
  64 = 2⁶
  96 = 2⁵ × 3

  HCF = 2⁴ = 16

  Verify:
    49 ÷ 16 = 3 remainder 1 ✓
    65 ÷ 16 = 4 remainder 1 ✓
    97 ÷ 16 = 6 remainder 1 ✓

  Largest number = 16 ✓
```

---

## Type 7: Largest Number Dividing X,Y Leaving Different Remainders

**Q: Find the largest number that divides 62 and 132 leaving remainders 2 and 4 respectively.**

```
  N divides 62 leaving remainder 2 → N divides (62-2) = 60
  N divides 132 leaving remainder 4 → N divides (132-4) = 128

  ┌─────────────────────────────────────────┐
  │  Largest N = HCF(60, 128)              │
  │                                         │
  │  Euclid's method:                       │
  │    128 = 60 × 2 + 8                    │
  │     60 =  8 × 7 + 4                    │
  │      8 =  4 × 2 + 0  ← stop           │
  │                                         │
  │  HCF = 4                                │
  └─────────────────────────────────────────┘

  Verify:
    62 ÷ 4 = 15 remainder 2 ✓
    132 ÷ 4 = 33 remainder 0 ... 
    Actually: 132-4=128, and 128÷4=32 ✓

  Largest number = 4 ✓
```

---

## Type 8: Smallest Number Divisible by X, Y, Z

**Q: Find the smallest number that is exactly divisible by 12, 15, and 20.**

```
  "Exactly divisible by all" = LCM

  12 = 2² × 3
  15 = 3 × 5
  20 = 2² × 5

  Primes:  2  |  3  |  5
  ------+----+----+----
  12    | 2² | 3¹ |  -
  15    |  -  | 3¹ | 5¹
  20    | 2² |  -  | 5¹
  ------+----+----+----
  MAX   | 2² | 3¹ | 5¹

  LCM = 4 × 3 × 5 = 60

  Verify:
    60 ÷ 12 = 5 ✓
    60 ÷ 15 = 4 ✓
    60 ÷ 20 = 3 ✓
    No smaller number is divisible by all three.

  Smallest number = 60 ✓
```

---

## Type 9: Smallest Number ÷ X,Y,Z Leaves Remainder R

**Q: Find the smallest number which when divided by 6, 9, and 12 leaves a remainder of 5 in each case.**

```
  N ÷ 6  → remainder 5
  N ÷ 9  → remainder 5
  N ÷ 12 → remainder 5

  So (N - 5) is exactly divisible by 6, 9, 12
  N - 5 = LCM(6, 9, 12)

  ┌───────────────────────────────────────┐
  │  6  = 2 × 3                          │
  │  9  = 3²                              │
  │  12 = 2² × 3                          │
  │                                       │
  │  LCM = 2² × 3² = 36                  │
  │                                       │
  │  N = LCM + R = 36 + 5 = 41           │
  └───────────────────────────────────────┘

  Verify:
    41 ÷ 6  = 6 remainder 5 ✓
    41 ÷ 9  = 4 remainder 5 ✓
    41 ÷ 12 = 3 remainder 5 ✓

  NOTE: R must be < all divisors!
        If R >= any divisor, problem is invalid.

  Smallest number = 41 ✓
```

---

## Type 10: HCF and LCM of Fractions

**Q: Find HCF and LCM of 2/3, 4/9, and 8/27.**

```
  HCF of fractions = HCF of numerators / LCM of denominators
  LCM of fractions = LCM of numerators / HCF of denominators

  Numerators: 2, 4, 8
    HCF(2, 4, 8) = 2
    LCM(2, 4, 8) = 8

  Denominators: 3, 9, 27
    HCF(3, 9, 27) = 3
    LCM(3, 9, 27) = 27

  ┌─────────────────────────────────────────┐
  │  HCF = HCF(num) / LCM(den)            │
  │      = 2 / 27                           │
  │                                         │
  │  LCM = LCM(num) / HCF(den)            │
  │      = 8 / 3                            │
  └─────────────────────────────────────────┘

  Verify LCM:
    (8/3) ÷ (2/3) = 4  (whole number ✓)
    (8/3) ÷ (4/9) = 6  (whole number ✓)
    (8/3) ÷ (8/27) = 9 (whole number ✓)

  HCF = 2/27, LCM = 8/3 ✓
```

---

## Type 11: Two Bells Ring Together — LCM Problem

**Q: Two bells ring at intervals of 8 and 12 minutes. They ring together at 12:00 PM. When will they next ring together?**

```
  Bell 1 rings every 8 minutes:  8, 16, 24, 32, ...
  Bell 2 rings every 12 minutes: 12, 24, 36, ...

  They ring together at common multiples = LCM

  8  = 2³
  12 = 2² × 3
  LCM = 2³ × 3 = 24 minutes

  Bell 1 (8 min):  |--8--|--8--|--8--|
  Bell 2 (12 min): |---12---|---12---|
  Together:        |--------24-------|
                   12:00       12:24 PM

  ┌───────────────────────────────────────┐
  │  Next ring together = 24 min later   │
  │  12:00 PM + 24 min = 12:24 PM       │
  │                                       │
  │  For 3 bells at a, b, c intervals:   │
  │    They ring together = LCM(a,b,c)  │
  └───────────────────────────────────────┘

  Next ring together at 12:24 PM ✓
```

---

## Type 12: Find Numbers Given HCF, LCM, and One Number

**Q: HCF of two numbers is 6 and LCM is 180. If one number is 36, find the other.**

```
  HCF = 6, LCM = 180, a = 36, b = ?

  Formula: LCM × HCF = a × b

  180 × 6 = 36 × b
  1080 = 36 × b
  b = 1080 ÷ 36 = 30

  ┌──────────────────────────────────────┐
  │  a × b = LCM × HCF                 │
  │  36 × b = 180 × 6                   │
  │  b = 1080 / 36 = 30                 │
  └──────────────────────────────────────┘

  Verify:
    36 = 2² × 3²
    30 = 2 × 3 × 5
    HCF = 2 × 3 = 6 ✓
    LCM = 2² × 3² × 5 = 180 ✓

  TRAP: Always verify that HCF actually divides
        both numbers. If it doesn't, the given
        data is inconsistent.

  Other number = 30 ✓
```
