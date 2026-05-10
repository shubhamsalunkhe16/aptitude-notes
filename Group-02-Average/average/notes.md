# Average - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Basic Average Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Average = Sum of observations / Number of observations             │
│         Avg = S / n                                                 │
│                                                                     │
│  Sum = Average × Number of observations                             │
│         S = Avg × n                                                 │
│                                                                     │
│  If each value increases by x → New Avg = Old Avg + x              │
│  If each value decreases by x → New Avg = Old Avg - x              │
│  If each value multiplied by k → New Avg = Old Avg × k             │
│  If each value divided by k   → New Avg = Old Avg / k              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Consecutive Numbers / Series Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Average of first n natural numbers = (n + 1) / 2                   │
│                                                                     │
│  Average of first n even numbers (2,4,6...) = n + 1                 │
│                                                                     │
│  Average of first n odd numbers (1,3,5...) = n                      │
│                                                                     │
│  Average of consecutive numbers = (First + Last) / 2               │
│    (works for ANY arithmetic progression)                           │
│                                                                     │
│  Average of squares of first n natural nos = (n+1)(2n+1)/6         │
│                                                                     │
│  Average of cubes of first n natural nos = n(n+1)²/4               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Weighted Average & Combined Group Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Weighted Average = (w₁x₁ + w₂x₂ + ... + wₙxₙ) / (w₁+w₂+...+wₙ) │
│                   = Σwᵢxᵢ / Σwᵢ                                    │
│                                                                     │
│  Combined Avg of two groups:                                        │
│    Avg = (n₁×A₁ + n₂×A₂) / (n₁ + n₂)                              │
│                                                                     │
│  Alligation shortcut:                                               │
│    n₁ / n₂ = (A₂ - Avg) / (Avg - A₁)                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Add / Remove / Replace Member Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  When a new member is ADDED:                                        │
│    New member = New Avg + n × (New Avg - Old Avg)                   │
│    where n = original count                                         │
│                                                                     │
│  When a member is REMOVED:                                          │
│    Removed member = Old Avg - n × (New Avg - Old Avg)               │
│    where n = new count (after removal)                              │
│                                                                     │
│  When a member is REPLACED (old → new):                             │
│    New value - Old value = n × (New Avg - Old Avg)                  │
│    where n = total count (unchanged)                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Average Speed Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  SAME DISTANCE (d) at speeds a and b:                               │
│    Avg Speed = 2ab / (a + b)   ← Harmonic Mean                     │
│                                                                     │
│  SAME TIME (t) at speeds a and b:                                   │
│    Avg Speed = (a + b) / 2     ← Arithmetic Mean                   │
│                                                                     │
│  GENERAL: Avg Speed = Total Distance / Total Time                   │
│                                                                     │
│  NOTE: Average speed is NEVER the simple average of speeds          │
│        (unless time spent is equal)                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Median & Mode vs Average

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Mean (Average): Sum / Count                                        │
│  Median: Middle value when arranged in order                        │
│    Even count → avg of two middle values                            │
│  Mode: Most frequently occurring value                              │
│                                                                     │
│  Empirical relation:                                                │
│    Mode = 3 × Median - 2 × Mean                                    │
│                                                                     │
│  Mean is affected by extreme values (outliers)                      │
│  Median is NOT affected by outliers                                 │
│  Mode can be used for categorical data                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Average as a Balancing Point

```
         Average (Mean)
        /       |       \
       /        |        \
   "Equal      "Level    "Balancing
   Share"      Line"      Point"

   If 5 people have 10, 20, 30, 40, 50
   Avg = 150/5 = 30

   Think of it as REDISTRIBUTION:
   Everyone gets 30 each (total stays 150)

   10 ─── needs +20 ──┐
   20 ─── needs +10 ──┤
   30 ─── balanced ───┤── Avg = 30
   40 ─── gives -10 ──┤
   50 ─── gives -20 ──┘

   Surplus = Deficit (always!)
   (+20 + 10) = (10 + 20) → 30 = 30 ✓

   KEY INSIGHT:
   Sum = Avg × Count
   Change in Sum = Change in Avg × Count
   This one identity solves 80% of problems!
```

---

## Type 1: Basic Average (Direct Formula)

**Q: Find the average of 12, 15, 18, 21, 24.**

```
  Avg = Sum / n

  Sum = 12 + 15 + 18 + 21 + 24 = 90
  n = 5

  Avg = 90 / 5 = 18 ✓

  SHORTCUT (for AP / evenly spaced):
  These are in AP (common diff = 3)
  Avg = (First + Last) / 2
      = (12 + 24) / 2
      = 36 / 2 = 18 ✓

  OR: Avg = Middle term = 18 ✓
  (For odd count AP, average = middle term)

  |──12──15──18──21──24──|
                ↑
           Average = 18
```

---

## Type 2: Weighted Average

**Q: A class has 30 boys with average marks 60 and 20 girls with average marks 70. Find the overall average marks of the class.**

```
  Weighted Avg = (w₁x₁ + w₂x₂) / (w₁ + w₂)

  Boys:  n₁ = 30, avg₁ = 60  → Sum₁ = 1800
  Girls: n₂ = 20, avg₂ = 70  → Sum₂ = 1400

  Overall Avg = (1800 + 1400) / (30 + 20)
              = 3200 / 50
              = 64 ✓

         (30) ← count     (20) ← count
           |                 |
          60                70
     Boys avg           Girls avg
           \               /
            \             /
         Overall Avg = 64

  ALLIGATION SHORTCUT:
  n₁/n₂ = (70 - 64)/(64 - 60) = 6/4 = 3/2
  → 30:20 = 3:2 ✓ (confirms answer)

  NOTE: Weighted avg is always BETWEEN
        the two individual averages
        and CLOSER to the larger group
```

---

## Type 3: Average of Consecutive Numbers (AP)

**Q: Find the average of all numbers from 11 to 50.**

```
  For consecutive numbers (or any AP):
  Average = (First + Last) / 2

  Avg = (11 + 50) / 2
      = 61 / 2
      = 30.5 ✓

  Count = Last - First + 1 = 50 - 11 + 1 = 40
  Sum = Avg × Count = 30.5 × 40 = 1220

  |──11──12──13─── ... ───49──50──|
     ↑                          ↑
   First                      Last
              Avg = 30.5

  FOR AP with common difference d:
  Avg = a + (n-1)d/2  (where a = first term)
  Or simply: (First + Last) / 2

  Example: 3, 7, 11, 15, 19, 23
  Avg = (3 + 23)/2 = 13 ✓
```

---

## Type 4: Average of First n Natural/Even/Odd Numbers

**Q: Find the average of first 50 natural numbers, first 30 even numbers, and first 40 odd numbers.**

```
  ┌──────────────────────────────────────────────────┐
  │  First n natural numbers: Avg = (n + 1) / 2     │
  │  First n even numbers:    Avg = n + 1            │
  │  First n odd numbers:     Avg = n                │
  └──────────────────────────────────────────────────┘

  (a) First 50 natural nos (1, 2, 3, ..., 50):
      Avg = (50 + 1)/2 = 51/2 = 25.5 ✓

  (b) First 30 even nos (2, 4, 6, ..., 60):
      Avg = 30 + 1 = 31 ✓
      Check: (2 + 60)/2 = 62/2 = 31 ✓

  (c) First 40 odd nos (1, 3, 5, ..., 79):
      Avg = 40 ✓
      Check: (1 + 79)/2 = 80/2 = 40 ✓

  MEMORY TRICK:
  Natural: (n+1)/2  ← divide by 2
  Even:     n+1     ← just add 1
  Odd:      n       ← simplest!
```

---

## Type 5: New Average When a Member is Added

**Q: The average age of 10 students is 15 years. When a new student joins, the average becomes 16. Find the age of the new student.**

```
  Old: n = 10, Avg = 15 → Sum = 150
  New: n = 11, Avg = 16 → Sum = 176

  New student's age = 176 - 150 = 26 years ✓

  FORMULA SHORTCUT:
  New member = New Avg + n × (New Avg - Old Avg)
             = 16 + 10 × (16 - 15)
             = 16 + 10 = 26 ✓

  ┌─────────────────────────────────────┐
  │  10 students    Avg = 15            │
  │  +1 student     Avg → 16           │
  │  ─────────────────────────          │
  │  Each of 10 gets +1 = 10 extra     │
  │  New person also gets 16            │
  │  New person = 16 + 10 = 26 ✓       │
  └─────────────────────────────────────┘

  INTUITION: New person brings enough to
  raise everyone's share by 1 AND keep 16
```

---

## Type 6: New Average When a Member is Removed

**Q: The average weight of 8 persons is 65 kg. If one person weighing 80 kg leaves, find the new average.**

```
  Old: n = 8, Avg = 65 → Sum = 520
  Removed = 80
  New Sum = 520 - 80 = 440
  New n = 7

  New Avg = 440 / 7 = 62.86 kg ✓

  FORMULA SHORTCUT:
  Removed = Old Avg - n_new × (New Avg - Old Avg)

  REVERSE problem:
  Q: Avg of 8 is 65. One person leaves,
     avg becomes 63. Weight of person who left?

  Old Sum = 65 × 8 = 520
  New Sum = 63 × 7 = 441
  Left = 520 - 441 = 79 kg ✓

  ┌────────────────────────────────────────┐
  │  8 persons, Avg = 65, Sum = 520       │
  │  Remove 80 kg person                   │
  │  New: 7 persons, Sum = 440            │
  │  New Avg = 440/7 = 62.86 ✓           │
  └────────────────────────────────────────┘
```

---

## Type 7: New Average When a Member is Replaced

**Q: The average of 11 numbers is 36. If one number 45 is replaced by 27, find the new average.**

```
  Old Avg = 36, n = 11
  Old Sum = 36 × 11 = 396
  Change = 27 - 45 = -18

  New Sum = 396 + (-18) = 378
  New Avg = 378 / 11 ≈ 34.36 ✓

  FORMULA SHORTCUT:
  New Avg - Old Avg = (New value - Old value) / n
  Change in Avg = -18 / 11 = -1.636
  New Avg = 36 - 1.636 ≈ 34.36 ✓

  ┌───────────────────────────────────────────┐
  │  Replace 45 with 27 → decrease of 18     │
  │  Spread across 11 numbers                 │
  │  Each drops by 18/11 = 1.636              │
  │  New Avg = 36 - 1.636 = 34.36 ✓          │
  └───────────────────────────────────────────┘

  TRICK: No need to find sum!
  Just find: change / count → add to old avg
```

---

## Type 8: Average Age Problems (Group Joins/Leaves)

**Q: The average age of a family of 5 members is 30 years. A baby is born, and the average age of the family becomes 27 years. Find the age of the baby.**

```
  Old: n = 5, Avg = 30 → Sum = 150
  New: n = 6, Avg = 27 → Sum = 162

  Baby's age = 162 - 150 = 12 years

  WAIT — a newborn baby is 12?
  Actually in age problems, we account for
  the TIME ELAPSED too!

  If the question says "2 years ago avg was 30
  and now with baby avg is 27":

  After 2 years, 5 members age by 2 each
  Sum now (without baby) = 150 + 5×2 = 160
  Sum with baby = 27 × 6 = 162
  Baby's age = 162 - 160 = 2 years ✓

  ┌──────────────────────────────────────┐
  │  TIME PASSAGE in Age Problems:       │
  │  After t years, each person ages t   │
  │  Sum increases by n × t              │
  │  Avg increases by t                  │
  │                                      │
  │  TRAP: Check if time has passed!     │
  └──────────────────────────────────────┘
```

---

## Type 9: Average Speed

**Q: A car travels from A to B (120 km) at 40 km/h and returns at 60 km/h. Find the average speed for the entire journey.**

```
  SAME DISTANCE → Harmonic Mean
  Avg Speed = 2ab / (a + b)

  = 2 × 40 × 60 / (40 + 60)
  = 4800 / 100
  = 48 km/h ✓

       A ════════════════ B
       |◄──── 120 km ────►|
       ──── 40 km/h ────►
       ◄──── 60 km/h ────

  Total Distance = 120 + 120 = 240 km
  Time₁ = 120/40 = 3 hrs
  Time₂ = 120/60 = 2 hrs
  Total Time = 5 hrs

  Avg Speed = 240/5 = 48 km/h ✓

  NOTE: Simple avg = (40+60)/2 = 50 ≠ 48!

  SAME TIME at speeds a and b:
  Avg Speed = (a + b) / 2  (arithmetic mean)

  ┌─────────────────────────────────────────┐
  │  Same distance → 2ab/(a+b)  (< simple) │
  │  Same time     → (a+b)/2    (= simple) │
  │  General       → Total dist / Total t  │
  └─────────────────────────────────────────┘
```

---

## Type 10: Average of Combined Groups

**Q: Average of 20 numbers is 35 and average of 30 numbers is 45. Find the combined average of all 50 numbers.**

```
  Group 1: n₁ = 20, Avg₁ = 35 → Sum₁ = 700
  Group 2: n₂ = 30, Avg₂ = 45 → Sum₂ = 1350

  Combined Avg = (Sum₁ + Sum₂) / (n₁ + n₂)
               = (700 + 1350) / (20 + 30)
               = 2050 / 50
               = 41 ✓

       Group 1          Group 2
       n=20, A=35       n=30, A=45
          \               /
           \             /
        Combined: n=50, A=41

  ALLIGATION SHORTCUT:
  n₁/n₂ = (A₂ - Avg)/(Avg - A₁)
  20/30 = (45 - 41)/(41 - 35)
  2/3   = 4/6 = 2/3 ✓

  QUICK CHECK: Combined avg is always
  between A₁ and A₂, closer to the group
  with MORE members (here 45, since n₂=30)
```

---

## Type 11: Finding Missing Number Given Average

**Q: The average of 5 numbers is 27. Four of them are 24, 26, 30, and 32. Find the fifth number.**

```
  Avg = 27, n = 5
  Sum = 27 × 5 = 135

  Sum of known 4 = 24 + 26 + 30 + 32 = 112

  Missing number = 135 - 112 = 23 ✓

  ┌───────────────────────────────────┐
  │  Sum needed    = Avg × n = 135   │
  │  Sum we have   = 112             │
  │  Missing value = 135 - 112 = 23  │
  └───────────────────────────────────┘

  VARIATION: Average of 9 numbers is 50.
  Average of first 5 is 54, last 5 is 52.
  Find the 5th number (common to both groups).

  Total Sum = 50 × 9 = 450
  First 5 Sum = 54 × 5 = 270
  Last 5 Sum = 52 × 5 = 260
  5th number = 270 + 260 - 450 = 80 ✓
  (it's counted in BOTH groups → subtract total)
```

---

## Type 12: Runs Scored / Marks Average Problems

**Q: A batsman has an average of 40 runs in 10 innings. How many runs must he score in the 11th inning to raise his average to 45?**

```
  Old: n = 10, Avg = 40 → Total runs = 400
  New: n = 11, Avg = 45 → Total needed = 495

  Runs in 11th inning = 495 - 400 = 95 ✓

  FORMULA SHORTCUT:
  Runs needed = New Avg + n × (New Avg - Old Avg)
              = 45 + 10 × (45 - 40)
              = 45 + 50
              = 95 ✓

  ┌────────────────────────────────────────┐
  │  10 innings: Avg = 40, Sum = 400      │
  │  Target: Avg = 45 for 11 innings      │
  │                                        │
  │  He needs 45 for himself PLUS          │
  │  +5 extra for each of 10 innings      │
  │  = 45 + 50 = 95 runs ✓               │
  └────────────────────────────────────────┘

  VARIATION: Avg drops from 40 to 38
  after 11th inning → scored how many?
  = 38 + 10 × (38 - 40) = 38 - 20 = 18 runs
```

---

## Type 13: If Each Value Increases/Decreases by x

**Q: The average of 20 numbers is 45. If each number is increased by 5, find the new average. If each is multiplied by 3, find the new average.**

```
  Original Avg = 45, n = 20

  (a) Each increased by 5:
      New Avg = Old Avg + 5 = 45 + 5 = 50 ✓

  (b) Each multiplied by 3:
      New Avg = Old Avg × 3 = 45 × 3 = 135 ✓

  ┌───────────────────────────────────────────────┐
  │  OPERATION ON EACH VALUE → EFFECT ON AVERAGE  │
  │                                                │
  │  Add x to each      → Avg increases by x      │
  │  Subtract x from each → Avg decreases by x    │
  │  Multiply each by k → Avg multiplied by k     │
  │  Divide each by k   → Avg divided by k        │
  └───────────────────────────────────────────────┘

  WHY? Because Avg = Sum/n
  New Sum = (each + x) summed = Sum + n×x
  New Avg = (Sum + n×x)/n = Avg + x

  TRAP: If only SOME values change:
  3 of 20 numbers increased by 10
  Avg increases by 3×10/20 = 1.5 (NOT 10!)
```

---

## Type 14: Median and Mode vs Average

**Q: Find the mean, median, and mode of: 3, 7, 7, 2, 9, 7, 4, 5, 1.**

```
  MEAN (Average):
  Sum = 3+7+7+2+9+7+4+5+1 = 45
  Mean = 45/9 = 5 ✓

  MEDIAN (Middle value):
  Arrange: 1, 2, 3, 4, 5, 7, 7, 7, 9
                       ↑
               Middle (5th of 9) = 5 ✓

  MODE (Most frequent):
  7 appears 3 times (most frequent)
  Mode = 7 ✓

  ┌─────────────────────────────────────────┐
  │  Mean = 5, Median = 5, Mode = 7        │
  │                                         │
  │  Empirical relation:                    │
  │  Mode = 3×Median - 2×Mean              │
  │       = 3×5 - 2×5 = 15-10 = 5          │
  │  (approximate, works for moderate skew) │
  │                                         │
  │  For EVEN count (e.g., 8 values):       │
  │  Median = avg of 4th and 5th values     │
  └─────────────────────────────────────────┘

  Mean → affected by outliers (extreme values)
  Median → robust, not affected by outliers
  Mode → can be used for non-numeric data
```
