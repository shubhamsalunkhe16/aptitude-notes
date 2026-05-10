# Series Completion & Pattern Recognition - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Arithmetic Series (AP)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  nth term:  a(n) = a + (n-1)d                                       │
│  Sum of n:  S(n) = n/2 × [2a + (n-1)d]  OR  n/2 × (first + last)  │
│                                                                     │
│  Common difference d = a(2) - a(1) = a(3) - a(2) = constant        │
│                                                                     │
│  Missing term = average of neighbors  (prev + next) / 2            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Geometric Series (GP)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  nth term:  a(n) = a × r^(n-1)                                      │
│  Common ratio r = a(2)/a(1) = a(3)/a(2) = constant                 │
│                                                                     │
│  Sum of n:  S(n) = a(r^n - 1) / (r - 1)   when r > 1              │
│                    a(1 - r^n) / (1 - r)    when r < 1              │
│                                                                     │
│  Missing term = sqrt(prev × next)   [geometric mean]               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Difference Series Patterns

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Level 1 diff constant  -->  AP (linear)                            │
│  Level 2 diff constant  -->  Quadratic series                       │
│  Level 3 diff constant  -->  Cubic series                           │
│                                                                     │
│  Differences themselves form AP:  +2, +4, +6, +8 (d=2)             │
│  Differences themselves form GP:  ×2, ×4, ×8, ×16 (r=2)            │
│                                                                     │
│  TRICK: Keep taking differences until you get a constant row!       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Power-Based Series

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Perfect squares:  1, 4, 9, 16, 25, 36, 49, 64, 81, 100            │
│  Perfect cubes:    1, 8, 27, 64, 125, 216, 343, 512, 729, 1000     │
│                                                                     │
│  n^2 + 1:   2, 5, 10, 17, 26, 37, 50 ...                           │
│  n^2 - 1:   0, 3, 8, 15, 24, 35, 48 ...                            │
│  n^2 + n:   2, 6, 12, 20, 30, 42, 56 ...  (also n(n+1))           │
│  n^3 + 1:   2, 9, 28, 65, 126, 217 ...                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Prime Numbers Reference

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  First 20 primes:                                                   │
│  2, 3, 5, 7, 11, 13, 17, 19, 23, 29,                               │
│  31, 37, 41, 43, 47, 53, 59, 61, 67, 71                            │
│                                                                     │
│  Prime gaps:  1, 2, 2, 4, 2, 4, 2, 4, 6, 2, 6, 4, 2, 4 ...        │
│  (gaps themselves are irregular -- must memorize primes!)           │
│                                                                     │
│  Twin primes (gap=2): (3,5) (5,7) (11,13) (17,19) (29,31) (41,43) │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Fibonacci & Recursive Series

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Fibonacci:  F(n) = F(n-1) + F(n-2)                                │
│  Sequence:   1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...    │
│                                                                     │
│  Variants:                                                          │
│    Sum of prev 3:   F(n) = F(n-1) + F(n-2) + F(n-3)                │
│    Product rule:    F(n) = F(n-1) × F(n-2)                          │
│    Mixed:          F(n) = F(n-1) + F(n-2) + constant                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT -- Difference Table Method (Universal Solver)

```
STEP 1: Write the series
STEP 2: Find Level 1 differences (D1)
STEP 3: If D1 not constant, find Level 2 differences (D2)
STEP 4: Continue until constant row found OR pattern spotted

Example: 2, 5, 10, 17, 26, ?

Series:     2     5     10     17     26     ?
              \  /  \  /   \  /   \  /   \  /
D1:           3     5      7      9      ?
                \  /  \  /   \  /   \  /
D2:             2      2      2      ?

D2 is constant = 2
Next D1 = 9 + 2 = 11
Next term = 26 + 11 = 37

PATTERN DETECTION PRIORITY:
  1. Check if constant difference (AP)
  2. Check if constant ratio (GP)
  3. Check differences -- do THEY form AP/GP?
  4. Check if terms relate to n^2, n^3, primes
  5. Check if two series interleaved (alternating)
  6. Check if each term = f(previous terms)  [Fibonacci-like]
  7. Check if operations cycle: +, x, +, x ...
```

---

## Type 1: Arithmetic Series (Constant Difference)

**Q: Find the next number in the series: 5, 8, 11, 14, 17, ?**

```
Series:   5     8     11     14     17     ?
            +3    +3     +3     +3    +3
            ↑      ↑      ↑      ↑     ↑
         constant difference d = 3

This is a pure AP with a = 5, d = 3

Next term = 17 + 3 = 20

Verify: a(n) = 5 + (n-1)×3
        a(6) = 5 + 5×3 = 20 ✓
```

---

## Type 2: Geometric Series (Constant Ratio)

**Q: Find the next number in the series: 3, 6, 12, 24, 48, ?**

```
Series:   3     6     12     24     48     ?
            ×2    ×2     ×2     ×2    ×2
            ↑      ↑      ↑      ↑     ↑
         constant ratio r = 2

This is a pure GP with a = 3, r = 2

Next term = 48 × 2 = 96

Verify: a(n) = 3 × 2^(n-1)
        a(6) = 3 × 32 = 96 ✓
```

---

## Type 3: Difference Series (Differences Form a Pattern)

**Q: Find the next number: 1, 2, 5, 10, 17, 26, ?**

```
Series:    1      2      5      10     17     26     ?
              \  /  \  /   \  /   \  /   \  /   \  /
D1:           1      3      5      7      9      ?
                +2     +2     +2     +2    +2
                 ↑      ↑      ↑      ↑     ↑
              D1 forms an AP with d = 2

Next D1 = 9 + 2 = 11
Next term = 26 + 11 = 37

INSIGHT: Series is n^2 - n + 1
         for n = 1,2,3,4,5,6,7
         = 1, 3-1=2, 9-2=5... doesn't match

Actually terms = 0^2+1, 1^2+1, 2^2+1, 3^2+1, 4^2+1, 5^2+1
               = 1, 2, 5, 10, 17, 26, 37 ✓
```

---

## Type 4: Two-Tier Difference Series

**Q: Find the next number: 2, 4, 10, 22, 42, ?**

```
Series:     2      4      10     22     42     ?
               \  /  \  /   \  /   \  /   \  /
D1:            2      6      12     20     ?
                  \  /  \  /   \  /   \  /
D2:               4      6      8      ?
                    +2     +2     +2
                     ↑      ↑      ↑
                  D2 forms AP (d = 2)

Build back up:
  Next D2 = 8 + 2 = 10
  Next D1 = 20 + 10 = 30
  Next term = 42 + 30 = 72

VERIFY:
  Series:  2, 4, 10, 22, 42, 72
  D1:      2, 6, 12, 20, 30
  D2:      4, 6, 8, 10      (AP, d=2)  ✓
```

---

## Type 5: Alternating Series (Two Patterns Interleaved)

**Q: Find the next number: 3, 5, 7, 10, 11, 15, 15, ?**

```
TRICK: Separate into ODD and EVEN positioned terms

Position:  1    2    3    4    5    6    7    8
Series:    3    5    7   10   11   15   15    ?
           ↓         ↓        ↓         ↓
Series A:  3 -- 7 -- 11 -- 15       (positions 1,3,5,7)
              +4   +4   +4           AP with d = 4

           ↓         ↓        ↓
Series B:  5 -- 10 -- 15 -- ?       (positions 2,4,6,8)
              +5    +5   +5          AP with d = 5

Next term (position 8, from Series B) = 15 + 5 = 20 ✓

SIGNS to look for alternating series:
  - Pattern breaks if read sequentially
  - But odd/even positions each form clean series
```

---

## Type 6: Square / Cube Based Series

**Q: Find the next number: 1, 4, 9, 16, 25, 36, ?**

```
Series:   1     4     9     16     25     36     ?
          ↓     ↓     ↓      ↓      ↓      ↓     ↓
         1^2   2^2   3^2   4^2    5^2    6^2   7^2

Answer = 7^2 = 49 ✓

COMMON SQUARE/CUBE VARIANTS:
┌──────────────────────────┬──────────────────────────┐
│  n^2       1,4,9,16,25   │  n^3    1,8,27,64,125    │
│  n^2+1     2,5,10,17,26  │  n^3-1  0,7,26,63,124    │
│  n^2-1     0,3,8,15,24   │  n^3+n  2,10,30,68,130   │
│  n(n+1)    2,6,12,20,30  │  (n+1)^2  4,9,16,25,36   │
│  (2n)^2    4,16,36,64    │  (2n-1)^2  1,9,25,49     │
└──────────────────────────┴──────────────────────────┘

TRICK: If differences form AP (3,5,7,9...) --> squares
       If D2 is constant = 2 --> squares
       If D1 forms pattern 7,19,37,61... --> cubes
```

---

## Type 7: Prime Number Series

**Q: Find the next number: 2, 3, 5, 7, 11, 13, ?**

```
These are consecutive prime numbers:

  2 → 3 → 5 → 7 → 11 → 13 → 17
  ↑    ↑    ↑    ↑     ↑     ↑
  p1   p2   p3   p4    p5    p6   p7

Answer = 17 (next prime after 13) ✓

PRIME VARIANTS:
┌─────────────────────────────────────────────────────┐
│  Prime + 1:    3, 4, 6, 8, 12, 14, 18 ...          │
│  Prime - 1:    1, 2, 4, 6, 10, 12, 16 ...          │
│  Prime^2:      4, 9, 25, 49, 121, 169 ...           │
│  Sum of primes:  2, 5, 10, 17, 28, 41 ...           │
│  Product of consecutive primes: 6,15,35,77,143...   │
└─────────────────────────────────────────────────────┘

MUST MEMORIZE first 15 primes:
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
```

---

## Type 8: Fibonacci-Like Series

**Q: Find the next number: 2, 3, 5, 8, 13, 21, ?**

```
Rule: Each term = sum of previous two terms

  2   3   5   8   13   21   ?
  └─+─┘   │   │    │    │
    5 ─────┘   │    │    │
  └────+───┘   │    │    │
       8 ──────┘    │    │
  └────────+────┘   │    │
          13 ───────┘    │
  └────────────+─────┘   │
              21 ────────┘
  └────────────────+──┘
                  34

  3+2=5  5+3=8  8+5=13  13+8=21  21+13=34 ✓

FIBONACCI VARIANTS:
  Sum of prev 3:  1,1,1,3,5,9,17,31...
  Product rule:   2,3,6,18,108...  (each = prev two multiplied)
  Sum + constant: 1,2,4,7,12,20... (F(n)=F(n-1)+F(n-2)+1)
```

---

## Type 9: Letter Series (Alphabet Patterns)

**Q: Find the next letter: A, C, E, G, I, ?**

```
Convert to numbers (A=1, B=2, C=3...):

  A    C    E    G    I    ?
  1    3    5    7    9    ?
    +2   +2   +2   +2   +2

Next number = 11 = K

Answer: K ✓

COMMON LETTER PATTERNS:
┌────────────────────────────────────────────────────┐
│  Skip 1:   A,C,E,G,I     (+2)                     │
│  Skip 2:   A,D,G,J,M     (+3)                     │
│  Reverse:  Z,X,V,T,R     (-2)                     │
│  Double:   A,B,D,G,K     (+1,+2,+3,+4)            │
│  Groups:   AB,DE,GH,JK   (skip 1 letter between)  │
│  Mirror:   A,Z,B,Y,C,X   (alternating fwd/back)   │
└────────────────────────────────────────────────────┘

TRICK: Always convert letters to numbers first!
  A=1  B=2  C=3 ... M=13  N=14 ... Z=26
  Use mod 26 if values go past Z (wrap around)
```

---

## Type 10: Alpha-Numeric Series

**Q: Find the next term: A1, B2, C4, D8, E16, ?**

```
Split into LETTER part and NUMBER part:

Letters:  A    B    C    D     E     ?
          +1   +1   +1   +1   +1
          Consecutive letters --> F

Numbers:  1    2    4    8    16     ?
          ×2   ×2   ×2   ×2   ×2
          GP with r=2 --> 32

Answer: F32 ✓

COMMON PATTERNS:
┌─────────────────────────────────────────────────────┐
│  Letters + position:  A1,B2,C3,D4   (n,n)           │
│  Letters + squares:   A1,B4,C9,D16  (n,n^2)         │
│  Letters + primes:    A2,B3,C5,D7   (n,prime_n)     │
│  Skip letters + AP:   A3,C6,E9,G12 (+2,+3)          │
│  Reverse + pattern:   Z1,Y4,X9,W16 (-1,n^2)         │
└─────────────────────────────────────────────────────┘

TRICK: Always analyze letter and number parts SEPARATELY
```

---

## Type 11: Wrong Number in Series (Odd One Out)

**Q: Find the wrong number: 2, 5, 10, 17, 24, 37, 50**

```
Step 1: Find the differences (D1)

Series:   2     5     10     17     24     37     50
             \  /  \  /   \  /   \  /   \  /   \  /
D1:          3      5      7      7      13     13
                                  ↑
                          BREAK! Should be 9

Expected pattern: D1 = 3, 5, 7, 9, 11, 13  (AP, d=2)
                                 ↑
The 4th term (17+9=26) breaks at position 5
Actually 24 should be 26

WRONG NUMBER = 24 (should be 26)

Step 2: Verify corrected series
  2, 5, 10, 17, 26, 37, 50
  D1: 3, 5, 7, 9, 11, 13  (AP, d=2) ✓

APPROACH:
  1. Write differences
  2. Find where the pattern breaks
  3. The wrong number borders the break point
  4. Rebuild with correct pattern to confirm
```

---

## Type 12: Missing Number in Middle of Series

**Q: Find the missing number: 3, 7, 15, ?, 63, 127**

```
Step 1: Try differences
  3    7    15    ?    63    127
    +4   +8   +?   +?    +64

D1 jumps: 4, 8, ?, ?, 64
Looks like GP: 4, 8, 16, 32, 64  (×2)

Step 2: Fill from both sides
  Left:   15 + 16 = 31
  Right:  63 - 32 = 31  ✓  (consistent!)

Answer: 31

ALTERNATIVE VIEW:  2^n - 1 pattern
  2^2-1=3, 2^3-1=7, 2^4-1=15, 2^5-1=31, 2^6-1=63, 2^7-1=127 ✓

STRATEGY for missing middle terms:
  1. Use surrounding terms to guess pattern
  2. Verify from BOTH sides (left and right)
  3. If both give same answer --> confirmed
```

---

## Type 13: Pattern with Mixed Operations

**Q: Find the next number: 2, 3, 5, 9, 17, 33, ?**

```
Look at operations between consecutive terms:

  2    3    5    9    17    33    ?
   ×2-1 ×2-1 ×2-1  ×2-1  ×2-1  ×2-1

  2×2-1=3  3×2-1=5  5×2-1=9  9×2-1=17  17×2-1=33

Next = 33 × 2 - 1 = 65 ✓

COMMON MIXED OPERATION PATTERNS:
┌──────────────────────────────────────────────────┐
│  ×2+1:   1,3,7,15,31   (2^n - 1)                │
│  ×2-1:   2,3,5,9,17    (as above)                │
│  ×n+1:   1,2,5,16,65   (×1+1,×2+1,×3+1,×4+1)   │
│  +1,×2:  1,2,4,5,10,11,22  (alternate +1,×2)    │
│  ^2+1:   1,2,5,26,677  (each term squared + 1)   │
│  +n^2:   1,2,6,15,31   (+1,+4,+9,+16)           │
└──────────────────────────────────────────────────┘

DETECTION: If differences aren't clean, try:
  term(n) / term(n-1) --> check for ratio + adjustment
  term(n) - term(n-1) --> check if diffs form known pattern
```

---

## Type 14: Number Analogy

**Q: 2 : 8 :: 3 : ?**

```
Find the relationship between 2 and 8:

  2 : 8    -->  2^3 = 8  (cube)

Apply same to 3:
  3 : ?    -->  3^3 = 27

Answer: 27 ✓

COMMON ANALOGY PATTERNS:
┌───────────────────────────────────────────────────┐
│  n : n^2      2:4    3:9    5:25    7:49          │
│  n : n^3      2:8    3:27   4:64    5:125         │
│  n : 2n       3:6    7:14   11:22   15:30         │
│  n : n^2+1    2:5    3:10   4:17    5:26          │
│  n : n(n+1)   2:6    3:12   4:20    5:30          │
│  n : n^2-1    2:3    3:8    4:15    5:24          │
│  n : reverse  12:21  34:43  56:65   89:98         │
└───────────────────────────────────────────────────┘

STRATEGY:
  1. Try basic operations: ×2, ×3, ^2, ^3
  2. Try n^2+k or n^2-k
  3. Try n(n+1) or n(n-1)
  4. Check digit manipulation (reverse, sum of digits)
```

---

## Type 15: Mirror / Reverse Patterns

**Q: Find the next number: 12, 21, 34, 43, 56, ?**

```
Split into pairs and check:

  12    21    34    43    56    ?
  ↓      ↓     ↓     ↓     ↓
  12  → 21   34  → 43   56  → ?
    reverse    reverse    reverse

Pattern: number, its reverse, number, its reverse...

  Pair 1:  12 → 21  (reverse)
  Pair 2:  34 → 43  (reverse)
  Pair 3:  56 → 65  (reverse)

Answer: 65 ✓

Also note: 12, 34, 56  (+22 each) --> base numbers
           21, 43, 65  (their reverses)

OTHER MIRROR PATTERNS:
  Palindrome:  121, 131, 141, 151  (middle changes)
  Digit reverse + rule:  123,321,234,432  (fwd,bwd,fwd,bwd)
  Complement (sum=9):  18,81,27,72,36,63  (digit pairs sum to 9)
```
