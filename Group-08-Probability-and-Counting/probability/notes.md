# Probability - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Basic Probability

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  P(E) = Number of favorable outcomes / Total outcomes               │
│                                                                     │
│  0 <= P(E) <= 1                                                     │
│  P(certain event) = 1                                               │
│  P(impossible event) = 0                                            │
│                                                                     │
│  Sample space S = set of all possible outcomes                      │
│  Event E = subset of S                                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Addition Rule (OR)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  P(A or B) = P(A) + P(B) - P(A and B)                              │
│  P(A ∪ B) = P(A) + P(B) - P(A ∩ B)                                │
│                                                                     │
│  If A and B are MUTUALLY EXCLUSIVE (can't happen together):         │
│     P(A ∩ B) = 0                                                    │
│     P(A ∪ B) = P(A) + P(B)                                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Multiplication Rule (AND)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  P(A and B) = P(A) x P(B)           (if INDEPENDENT)               │
│  P(A ∩ B) = P(A) x P(B|A)           (if DEPENDENT)                 │
│                                                                     │
│  Independent: outcome of A does NOT affect B                        │
│  Dependent: outcome of A CHANGES B's probability                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Complement Rule

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  P(not A) = 1 - P(A)                                                │
│  P(A') = 1 - P(A)                                                  │
│                                                                     │
│  "At least one" = 1 - P(none)                                      │
│  P(at least 1 success) = 1 - P(all failures)                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Conditional Probability

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  P(A|B) = P(A ∩ B) / P(B)                                          │
│                                                                     │
│  "Probability of A GIVEN that B has occurred"                       │
│  The sample space shrinks to B                                      │
│                                                                     │
│  Bayes' Theorem:                                                    │
│  P(A|B) = P(B|A) x P(A) / P(B)                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Odds & Expected Value

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Odds in favor  = favorable : unfavorable = P(E) : P(E')           │
│  Odds against   = unfavorable : favorable = P(E') : P(E)           │
│                                                                     │
│  If odds in favor = a : b → P(E) = a/(a+b)                         │
│                                                                     │
│  Expected Value = Sum of [outcome x probability]                    │
│  E(X) = x1.P(x1) + x2.P(x2) + ... + xn.P(xn)                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Probability Visual Guide

```
                    ALL OUTCOMES (Sample Space S)
              ┌──────────────────────────────────────┐
              │                                      │
              │    ┌───────┐     ┌───────┐           │
              │    │       │     │       │           │
              │    │   A   │     │   B   │           │
              │    │       │     │       │           │
              │    └───────┘     └───────┘           │
              │   Mutually Exclusive: P(A∩B)=0       │
              └──────────────────────────────────────┘

              ┌──────────────────────────────────────┐
              │                                      │
              │    ┌───────┬──┬───────┐              │
              │    │       │AB│       │              │
              │    │   A   │∩ │   B   │              │
              │    │       │  │       │              │
              │    └───────┴──┴───────┘              │
              │   Overlapping: P(A∪B)=P(A)+P(B)-P(A∩B)│
              └──────────────────────────────────────┘

  Key Sample Spaces:
  ┌──────────────────────────────────────────────┐
  │ 1 Coin  = {H, T}              → 2 outcomes  │
  │ 2 Coins = {HH,HT,TH,TT}      → 4 outcomes  │
  │ n Coins                        → 2^n outcomes│
  │ 1 Die   = {1,2,3,4,5,6}       → 6 outcomes  │
  │ 2 Dice                         → 36 outcomes │
  │ 1 Deck  = 52 cards (13x4)     → 52 outcomes │
  └──────────────────────────────────────────────┘

  Core Decision Tree:
  ┌─────────────────────────────────────────┐
  │ A AND B? → MULTIPLY probabilities      │
  │ A OR B?  → ADD (then subtract overlap) │
  │ NOT A?   → 1 - P(A)                    │
  │ AT LEAST ONE? → 1 - P(none)            │
  │ With replacement? → same prob each time│
  │ Without replacement? → prob changes!   │
  └─────────────────────────────────────────┘
```

---

## Type 1: Basic Probability (Favorable / Total Outcomes)

**Q: A bag has 4 red, 3 blue, and 5 green balls. What is the probability of drawing a blue ball?**

```
  Total balls = 4 + 3 + 5 = 12
  Favorable (blue) = 3

  ┌─────────── Bag (12 balls) ──────────┐
  │  ● ● ● ●   ○ ○ ○   ◎ ◎ ◎ ◎ ◎      │
  │  (4 Red)   (3 Blue) (5 Green)       │
  └─────────────────────────────────────┘

  P(blue) = favorable / total
          = 3/12
          = 1/4

  Answer: 1/4 ✓
```

---

## Type 2: Coin Toss Problems (1 Coin, 2 Coins, n Coins)

**Q: Three coins are tossed simultaneously. What is the probability of getting exactly 2 heads?**

```
  Total outcomes for n coins = 2^n = 2^3 = 8

  Sample Space (3 coins):
  ┌──────────────────────────────────────┐
  │ HHH  HHT  HTH  HTT                  │
  │ THH  THT  TTH  TTT                  │
  │                                      │
  │ Total = 8 outcomes                   │
  └──────────────────────────────────────┘

  Exactly 2 heads: HHT, HTH, THH = 3 outcomes

  P(exactly 2 heads) = 3/8

  ──── Shortcut using nCr ────
  P(r heads in n tosses) = nCr / 2^n
  P(2 heads in 3 tosses) = 3C2 / 2^3 = 3/8 ✓

  Answer: 3/8 ✓
```

---

## Type 3: Dice Problems (1 Die, 2 Dice — Sum, Specific Numbers)

**Q: Two dice are thrown. What is the probability that the sum is 7?**

```
  Total outcomes for 2 dice = 6 x 6 = 36

  Pairs that give sum = 7:
  ┌──────────────────────────────────────┐
  │ (1,6) (2,5) (3,4) (4,3) (5,2) (6,1)│
  │                                      │
  │ = 6 pairs                            │
  └──────────────────────────────────────┘

       Die 2
       1  2  3  4  5  6
  D  1 2  3  4  5  6  ★7
  i  2 3  4  5  6  ★7  8
  e  3 4  5  6  ★7  8  9
  1  4 5  6  ★7  8  9 10
     5 6  ★7  8  9 10 11
     6 ★7  8  9 10 11 12

  ★ marks sum = 7 (diagonal line!)

  P(sum = 7) = 6/36 = 1/6

  ──── Quick reference for 2 dice sums ────
  Sum:   2  3  4  5  6  7  8  9 10 11 12
  Ways:  1  2  3  4  5  6  5  4  3  2  1

  Answer: 1/6 ✓
```

---

## Type 4: Card Problems (from Deck of 52)

**Q: One card is drawn from a standard deck of 52 cards. What is the probability it is a King or a Heart?**

```
  Standard Deck Structure:
  ┌──────────────────────────────────────────────┐
  │ 4 Suits: ♠(13) ♥(13) ♦(13) ♣(13) = 52     │
  │ Face cards: J, Q, K = 3 x 4 = 12            │
  │ Aces: 4    Number cards(2-10): 36            │
  │ Red: ♥(13) + ♦(13) = 26                     │
  │ Black: ♠(13) + ♣(13) = 26                   │
  └──────────────────────────────────────────────┘

  P(King or Heart) = P(King) + P(Heart) - P(King AND Heart)
                   = 4/52 + 13/52 - 1/52
                   = 16/52 = 4/13

  Why subtract 1? King of Hearts is counted TWICE!

  |████ Kings ████|
  |♠K  ♥K  ♦K  ♣K|    4 kings
       ↕ overlap
  |♥A ♥2 ... ♥K  |   13 hearts
  |███ Hearts ████|

  P(King ∩ Heart) = 1/52 (King of Hearts)

  Answer: 4/13 ✓
```

---

## Type 5: P(A or B) — Addition Rule

**Q: In a class, probability of passing Math is 0.7, English is 0.8, and both is 0.6. What is the probability of passing at least one subject?**

```
  P(Math) = 0.7, P(English) = 0.8, P(both) = 0.6

  P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

  P(at least one) = 0.7 + 0.8 - 0.6
                   = 0.9

  ┌─────────────────────────────────────────┐
  │           TOTAL = 1.0                   │
  │   ┌───────┬──────┬───────┐              │
  │   │ Math  │ Both │English│              │
  │   │ only  │      │ only  │              │
  │   │ 0.1   │ 0.6  │ 0.2   │   P(neither)│
  │   └───────┴──────┴───────┘   = 0.1     │
  │   |◄── 0.7 ──►|                         │
  │          |◄── 0.8 ────►|                │
  └─────────────────────────────────────────┘

  Math only  = 0.7 - 0.6 = 0.1
  English only = 0.8 - 0.6 = 0.2
  Both = 0.6
  Total = 0.1 + 0.2 + 0.6 = 0.9 ✓

  Answer: 0.9 ✓
```

---

## Type 6: P(A and B) — Independent Events (Multiplication Rule)

**Q: A coin is tossed and a die is rolled. What is the probability of getting a Head and a 6?**

```
  Events are INDEPENDENT (coin doesn't affect die)

  P(Head) = 1/2
  P(six)  = 1/6

  P(Head AND six) = P(Head) x P(six)
                  = 1/2 x 1/6
                  = 1/12

  ──── Tree Diagram ────

             Toss
           /      \
         H(1/2)   T(1/2)
        / | \      / | \
       1  2..6    1  2..6
      (each 1/6)

  P(H and 6) = 1/2 x 1/6 = 1/12

  ──── Independent vs Dependent ────
  ┌───────────────────────────────────────────┐
  │ INDEPENDENT: P(A∩B) = P(A) x P(B)        │
  │  - Coin + Die (separate experiments)      │
  │  - Drawing WITH replacement               │
  │                                           │
  │ DEPENDENT: P(A∩B) = P(A) x P(B|A)        │
  │  - Drawing WITHOUT replacement            │
  │  - Cards drawn one after another          │
  └───────────────────────────────────────────┘

  Answer: 1/12 ✓
```

---

## Type 7: Complement Rule — P(not A) = 1 - P(A)

**Q: A die is rolled. What is the probability of NOT getting a 4?**

```
  P(getting 4) = 1/6

  P(NOT getting 4) = 1 - P(getting 4)
                   = 1 - 1/6
                   = 5/6

  ┌───────── Die Outcomes ────────┐
  │  1   2   3  [4]  5   6       │
  │  ✓   ✓   ✓   ✗   ✓   ✓       │
  │ |◄── NOT 4 ──►| |◄─►|        │
  │     5 outcomes   1 outcome    │
  └──────────────────────────────┘

  ──── When to use complement ────
  Use P(not A) = 1 - P(A) when:
   - "at least one" problems
   - "at most" problems
   - Counting NOT-happening is easier

  Example: P(at least 1 head in 3 tosses)
         = 1 - P(no heads)
         = 1 - P(all tails)
         = 1 - (1/2)^3
         = 1 - 1/8 = 7/8

  Answer: 5/6 ✓
```

---

## Type 8: Conditional Probability P(A|B)

**Q: Two dice are thrown. Given that the sum is greater than 7, what is the probability that both show 5 or more?**

```
  P(A|B) = P(A ∩ B) / P(B)

  B = sum > 7 (i.e., sum = 8, 9, 10, 11, 12)
  A = both dice >= 5

  Pairs with sum > 7:
  Sum 8:  (2,6)(3,5)(4,4)(5,3)(6,2)   = 5
  Sum 9:  (3,6)(4,5)(5,4)(6,3)        = 4
  Sum 10: (4,6)(5,5)(6,4)             = 3
  Sum 11: (5,6)(6,5)                  = 2
  Sum 12: (6,6)                       = 1
                              Total B = 15

  Pairs where BOTH >= 5 AND sum > 7:
  (5,5)(5,6)(6,5)(6,6) = 4 pairs

  ┌──── Conditional Probability ────┐
  │                                 │
  │  Given sum > 7:                 │
  │  Sample space SHRINKS to 15     │
  │                                 │
  │  Among those 15:                │
  │  Both >= 5 → 4 pairs           │
  │                                 │
  │  P(A|B) = 4/15                  │
  │                                 │
  └─────────────────────────────────┘

  Or by formula: P(A∩B)/P(B) = (4/36)/(15/36) = 4/15

  Answer: 4/15 ✓
```

---

## Type 9: Drawing Balls — With and Without Replacement

**Q: A bag has 5 red and 3 blue balls. Two balls are drawn without replacement. What is the probability both are red?**

```
  Without Replacement (dependent events):

  1st draw: P(Red) = 5/8   (5 red out of 8 total)
  2nd draw: P(Red) = 4/7   (4 red left out of 7 total)

  P(both red) = 5/8 x 4/7 = 20/56 = 5/14

  ──── Tree Diagram ────
            Draw 1
          /        \
      R(5/8)      B(3/8)
       /   \       /   \
   R(4/7) B(3/7) R(5/7) B(2/7)
   20/56  15/56  15/56   6/56

  ──── With vs Without Replacement ────
  ┌──────────────────────────────────────────┐
  │                                          │
  │  WITH replacement:                       │
  │    P(both red) = 5/8 x 5/8 = 25/64      │
  │    (put ball back → same probabilities)  │
  │                                          │
  │  WITHOUT replacement:                    │
  │    P(both red) = 5/8 x 4/7 = 5/14       │
  │    (don't put back → total & fav change) │
  │                                          │
  │  Using combinations (without repl.):     │
  │    P = 5C2 / 8C2 = 10/28 = 5/14         │
  │                                          │
  └──────────────────────────────────────────┘

  Answer: 5/14 ✓
```

---

## Type 10: At Least One / At Most One Type Problems

**Q: A die is rolled 3 times. What is the probability of getting at least one 6?**

```
  "At least one" = complement of "none"

  P(NOT 6 in single roll) = 5/6
  P(no 6 in 3 rolls) = (5/6)^3 = 125/216

  P(at least one 6) = 1 - P(no 6)
                    = 1 - 125/216
                    = 91/216

  ┌──────────── Strategy ───────────────┐
  │                                     │
  │  AT LEAST 1 = 1 - P(none)          │
  │  AT LEAST 2 = 1 - P(0) - P(1)     │
  │  AT MOST 1  = P(0) + P(1)         │
  │  AT MOST 2  = P(0) + P(1) + P(2)  │
  │  EXACTLY r  = nCr . p^r . q^(n-r) │
  │                                     │
  └─────────────────────────────────────┘

  Roll 1    Roll 2    Roll 3
  ┌───┐     ┌───┐     ┌───┐
  │5/6│ x   │5/6│ x   │5/6│ = 125/216 (NO sixes)
  └───┘     └───┘     └───┘
  1 - 125/216 = 91/216 (at least one 6)

  Answer: 91/216 ✓
```

---

## Type 11: Probability of Consecutive Events (All Same)

**Q: A coin is tossed 5 times. What is the probability that all tosses show the same face?**

```
  All heads: P = (1/2)^5 = 1/32
  All tails: P = (1/2)^5 = 1/32

  P(all same) = P(all H) + P(all T)
              = 1/32 + 1/32
              = 2/32 = 1/16

  Toss 1  Toss 2  Toss 3  Toss 4  Toss 5
  ┌───┐   ┌───┐   ┌───┐   ┌───┐   ┌───┐
  │ H │ x │ H │ x │ H │ x │ H │ x │ H │ = 1/32
  └───┘   └───┘   └───┘   └───┘   └───┘
  ┌───┐   ┌───┐   ┌───┐   ┌───┐   ┌───┐
  │ T │ x │ T │ x │ T │ x │ T │ x │ T │ = 1/32
  └───┘   └───┘   └───┘   └───┘   └───┘
                                     Total = 1/16

  ──── General Formulas ────
  ┌──────────────────────────────────────────┐
  │ All heads in n tosses = (1/2)^n          │
  │ All same face in n tosses = 2 x (1/2)^n │
  │                           = (1/2)^(n-1)  │
  │ All 6's on k dice = (1/6)^k             │
  │ All same number on k dice = 6 x (1/6)^k │
  │                            = (1/6)^(k-1) │
  └──────────────────────────────────────────┘

  Answer: 1/16 ✓
```

---

## Type 12: Odds in Favor / Odds Against

**Q: The probability of winning a game is 3/8. Find the odds in favor and odds against winning.**

```
  P(win) = 3/8
  P(lose) = 1 - 3/8 = 5/8

  Odds in favor  = P(win) : P(lose) = 3/8 : 5/8 = 3 : 5
  Odds against   = P(lose) : P(win) = 5/8 : 3/8 = 5 : 3

  ┌──────────── 8 total outcomes ────────────┐
  │ ✓  ✓  ✓  |  ✗  ✗  ✗  ✗  ✗               │
  │ Win (3)  |  Lose (5)                      │
  │◄─ favor ─►|◄──── against ────►│           │
  └───────────────────────────────────────────┘

  ──── Conversion Formulas ────
  ┌──────────────────────────────────────────┐
  │ If odds in favor = a : b                 │
  │    P(E) = a / (a + b)                    │
  │    P(E') = b / (a + b)                   │
  │                                          │
  │ If P(E) = p/q                            │
  │    Odds in favor  = p : (q - p)          │
  │    Odds against   = (q - p) : p          │
  │                                          │
  │ Example: Odds 2:3 in favor               │
  │    P(E) = 2/(2+3) = 2/5                  │
  └──────────────────────────────────────────┘

  Answer: Odds in favor = 3:5, Odds against = 5:3 ✓
```

---

## Type 13: Expected Value Problems

**Q: A game costs Rs. 10 to play. You roll a die: if 6 appears you win Rs. 50, otherwise you win nothing. Should you play?**

```
  P(win Rs. 50) = 1/6
  P(win Rs. 0)  = 5/6

  E(winnings) = 50 x (1/6) + 0 x (5/6)
              = 50/6
              = Rs. 8.33

  Net expected gain = E(winnings) - Cost
                    = 8.33 - 10
                    = -Rs. 1.67 (LOSS!)

  ┌──── Expected Value Calculation ────┐
  │                                    │
  │   Outcome    Prob    Value         │
  │   Roll 6     1/6     +50          │
  │   Roll 1-5   5/6      0           │
  │                                    │
  │   E(X) = (1/6)(50) + (5/6)(0)     │
  │        = 8.33                      │
  │                                    │
  │   Cost = 10 > Expected = 8.33     │
  │   → NOT worth playing!            │
  │                                    │
  └────────────────────────────────────┘

  E(X) = Σ [x_i x P(x_i)]

  If E(X) > Cost → Play (long-run profit)
  If E(X) < Cost → Don't play (long-run loss)

  Answer: E(X) = Rs. 8.33, Net = -Rs. 1.67 → Don't play ✓
```

---

## Type 14: Birthday Problem (Same Birthday)

**Q: In a group of 3 people, what is the probability that at least two share the same birthday? (Assume 365 days in a year.)**

```
  Use complement: P(at least 2 same) = 1 - P(all different)

  P(all different):
    Person 1: any day      = 365/365
    Person 2: different    = 364/365
    Person 3: different    = 363/365

  P(all different) = 365/365 x 364/365 x 363/365
                   = (365 x 364 x 363) / 365^3
                   = 0.9918

  P(at least 2 same) = 1 - 0.9918 = 0.0082 (0.82%)

  ──── General Formula for n people ────
  P(all diff) = 365/365 x 364/365 x ... x (365-n+1)/365
              = 365! / [(365-n)! x 365^n]

  ┌──── Surprising Results ────────────┐
  │                                    │
  │  People    P(same bday)            │
  │    2         0.27%                 │
  │   10         11.7%                 │
  │   23         50.7%  ← just 23!    │
  │   30         70.6%                 │
  │   50         97.0%                 │
  │   70         99.9%                 │
  │                                    │
  │  Only 23 people needed for >50%!   │
  │  This is the Birthday Paradox.     │
  └────────────────────────────────────┘

  Answer: 0.0082 or approximately 0.82% ✓
```

---

## Type 15: Geometric Probability (Area-Based)

**Q: A square has side 10 cm. A circle of radius 3 cm is inscribed at the center. A point is thrown randomly inside the square. What is the probability it lands inside the circle?**

```
  P = Favorable area / Total area

  Total area = side^2 = 10^2 = 100 cm^2
  Circle area = pi x r^2 = pi x 9 = 9pi cm^2

  P(inside circle) = 9pi / 100
                   = 28.27 / 100
                   = 0.2827

  ┌──────────────────┐
  │                  │
  │     ┌─────┐     │
  │    /       \    │
  │   │    .    │   │  ● = center
  │    \       /    │  Circle r=3
  │     └─────┘     │
  │                  │  Square side=10
  └──────────────────┘

  ──── Common Geometric Probability ────
  ┌───────────────────────────────────────────┐
  │ Circle in square:                         │
  │   P = pi.r^2 / s^2                        │
  │                                           │
  │ Inscribed circle (r = s/2):               │
  │   P = pi/4 = 0.785                        │
  │                                           │
  │ Triangle in rectangle:                    │
  │   P = area of triangle / area of rect     │
  │                                           │
  │ Point on line segment:                    │
  │   P = favorable length / total length     │
  └───────────────────────────────────────────┘

  Answer: 9pi/100 ≈ 0.2827 ✓
```
