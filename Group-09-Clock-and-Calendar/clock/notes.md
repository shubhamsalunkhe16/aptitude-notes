# Clock - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Hand Speeds

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Hour hand speed   = 0.5° per minute  =  30° per hour              │
│  Minute hand speed = 6° per minute    = 360° per hour              │
│                                                                     │
│  Relative speed    = 6 - 0.5 = 5.5° per minute                     │
│  (minute hand gains 5.5° every minute over hour hand)              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Master Angle Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Angle = |30H - 5.5M|                                               │
│                                                                     │
│  H = hour (use 12-hr format)                                        │
│  M = minutes                                                        │
│                                                                     │
│  If result > 180° → Angle = 360° - result                           │
│  (always take the SMALLER angle)                                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Hands at a Given Angle

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  For angle θ between H and (H+1) o'clock:                           │
│                                                                     │
│     30H - 5.5M = ±θ                                                 │
│                                                                     │
│     M = (30H ± θ) / 5.5                                             │
│       = (30H ± θ) × 2/11                                            │
│                                                                     │
│  Two solutions: one with +θ, one with -θ                            │
│  Reject if M < 0 or M ≥ 60                                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Overlap & Special Angles — Counts

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Hands OVERLAP (0°):                                                │
│     11 times in 12 hours  │  22 times in 24 hours                   │
│     (NOT 12 — skip between 11 and 1)                                │
│                                                                     │
│  Hands at RIGHT ANGLE (90°):                                        │
│     22 times in 12 hours  │  44 times in 24 hours                   │
│                                                                     │
│  Hands at STRAIGHT LINE (180°):                                     │
│     11 times in 12 hours  │  22 times in 24 hours                   │
│     (NOT 12 — skip between 5 and 7)                                 │
│                                                                     │
│  Hands at any angle θ (0 < θ < 180):                                │
│     22 times in 12 hours  │  44 times in 24 hours                   │
│                                                                     │
│  Time between two overlaps = 12/11 hrs                              │
│                            = 1 hr 5 min 27.27 sec                   │
│                            ≈ 65 min 27 sec                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Gaining / Losing Clock

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Gains x min/hr → FAST clock (shows MORE time)                      │
│     Clock shows = Actual + (x × hours elapsed)                      │
│                                                                     │
│  Loses x min/hr → SLOW clock (shows LESS time)                      │
│     Clock shows = Actual - (x × hours elapsed)                      │
│                                                                     │
│  Two clocks (one gains a, other loses b):                           │
│     Diff per hour = (a + b) minutes                                 │
│     Show same time again when diff = 12 hours = 720 min             │
│     Time = 720 / (a + b) hours                                      │
│                                                                     │
│  One clock gains/loses x min/hr:                                    │
│     Shows correct time again = 720 / x hours                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Mirror Image of Clock

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Mirror time = 11:60 - Actual time                                  │
│  (for hours < 12)                                                   │
│                                                                     │
│  If actual time is H:M →                                            │
│     Mirror shows = (11 - H) : (60 - M)                              │
│                                                                     │
│  Special: If M = 0 → Mirror = (12 - H) : 00                        │
│                                                                     │
│  Example: 3:20 → Mirror = 8:40                                      │
│           7:45 → Mirror = 4:15                                      │
│          12:00 → Mirror = 12:00 (same!)                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Clock Face Visual Guide

```
               12
           11  |  1
          10 \ | / 2
           9 ──+── 3
          8  / | \ 4
           7   |   5
               6

  Full circle  = 360°
  Each hour    = 360/12 = 30°
  Each minute  = 360/60 = 6° (minute hand)
  Each minute  = 30/60 = 0.5° (hour hand)

  AT 3:00           AT 6:00           AT 9:00
      12                12                12
   11 | 1           11  |  1          11  |  1
  10  | / 2        10   |    2       10   |    2
   9 ─+── 3►        9 ──+── 3        9◄──+── 3
  8   |   4        8    |    4       8    |    4
   7  |  5          7   |   5         7   |   5
      6                 6▼                6
   Angle=90°        Angle=180°        Angle=90°

  Hour hand position at H:M = 30H + 0.5M degrees from 12
  Minute hand position at M = 6M degrees from 12
  Angle between = |30H + 0.5M - 6M| = |30H - 5.5M|
```

---

## Type 1: Angle Between Hour and Minute Hand at a Given Time

**Q: Find the angle between the hands of a clock at 4:30.**

```
  Formula: Angle = |30H - 5.5M|

  H = 4, M = 30

  Angle = |30(4) - 5.5(30)|
        = |120 - 165|
        = |-45|
        = 45°

       12
    11  |  1
   10   |    2
    9 ──+── 3           Hour hand: 30×4 + 0.5×30 = 135°
   8   /|    4           (between 4 and 5)
    7 / |   5
     6◄              Minute hand: 6×30 = 180° (at 6)
   [hour at 4.5]
   [min  at 6]        Angle = |135 - 180| = 45° ✓

  Since 45° < 180°, no need to subtract from 360°
```

---

## Type 2: At What Time Are Hands at 90 Degrees (Right Angle)

**Q: At what time between 3 and 4 o'clock are the hands at right angles?**

```
  Formula: M = (30H ± θ) × 2/11

  H = 3, θ = 90°

  Case 1: M = (30×3 + 90) × 2/11
            = (90 + 90) × 2/11
            = 180 × 2/11
            = 360/11
            = 32  8/11 min

  Case 2: M = (30×3 - 90) × 2/11
            = (90 - 90) × 2/11
            = 0 × 2/11
            = 0 min

       12                       12
    11  |  1                 11  |  1
   10   |    2              10   |    2
    9 ──+── 3◄               9 ──+─►3
   8    |    4              8    |  / 4
    7   |   5                7   |/  5
        6                       6
   At 3:00 → 90°           At 3:32 8/11 → 90°
   (hands already            (hands again
    at right angle)           at right angle)

  Answer: 3:00 and 3:32  8/11 minutes ✓
```

---

## Type 3: At What Time Are Hands at 180 Degrees (Straight Line)

**Q: At what time between 2 and 3 o'clock do the hands form a straight line?**

```
  Formula: M = (30H ± θ) × 2/11

  H = 2, θ = 180°

  Case 1: M = (30×2 + 180) × 2/11
            = (60 + 180) × 2/11
            = 240 × 2/11
            = 480/11
            = 43  7/11 min  ✓ (valid: 0 ≤ M < 60)

  Case 2: M = (30×2 - 180) × 2/11
            = (60 - 180) × 2/11
            = -120 × 2/11
            = -240/11 → NEGATIVE → reject ✗

       12
    11  |  1
   10   |  / 2              Hour at ~2.7 (between 2 & 3)
    9 ──+── 3               Minute at ~8.7 (near 9)
   8  ◄─── 4               Straight line = 180°
    7   |   5
        6

  Answer: 2:43  7/11 minutes ✓
  (Only ONE valid solution between 2 and 3)
```

---

## Type 4: At What Time Do Hands Overlap (0 Degrees)

**Q: At what time between 5 and 6 o'clock do the hands overlap?**

```
  Formula: M = (30H ± θ) × 2/11

  H = 5, θ = 0° (overlap)

  M = (30×5 + 0) × 2/11
    = 150 × 2/11
    = 300/11
    = 27  3/11 min

       12
    11  |  1
   10   |    2
    9 ──+── 3              Both hands pointing
   8    |    4              to same position
    7   | \  5              between 5 and 6
        6  ◄ (both here)

  At 5:27  3/11  → both hands overlap ✓

  General overlap times (12-hr cycle):
  ┌────────────────────────────────┐
  │ 12:00:00    3:16:21.8         │
  │  1:05:27.3  4:21:49.1         │
  │  2:10:54.5  5:27:16.4         │
  │  6:32:43.6  9:49:05.5         │
  │  7:38:10.9 10:54:32.7         │
  │  8:43:38.2                    │
  │ = 11 times (NOT 12!)          │
  └────────────────────────────────┘
  No overlap between 11:XX and 12:XX
  (next one IS 12:00:00)
```

---

## Type 5: How Many Times Hands Overlap in 12 Hours / 24 Hours

**Q: How many times do the hands of a clock overlap in a day (24 hours)?**

```
  In 12 hours → 11 overlaps (NOT 12!)
  In 24 hours → 22 overlaps (NOT 24!)

  WHY NOT 12?
  ┌──────────────────────────────────────────────┐
  │ From 12:00 to 1:00 → overlap at 12:00       │
  │ From  1:00 to 2:00 → overlap at ~1:05       │
  │ From  2:00 to 3:00 → overlap at ~2:10       │
  │ ...                                          │
  │ From 10:00 to 11:00 → overlap at ~10:54     │
  │ From 11:00 to 12:00 → overlap at 12:00      │
  │                       ↑ This is NEXT cycle!  │
  │                                              │
  │ The 11→12 overlap IS the 12:00 of next       │
  │ cycle, so we count it only ONCE.             │
  └──────────────────────────────────────────────┘

  Time between consecutive overlaps:
  = 12/11 hours
  = 1 hour 5 min 27.27 sec
  ≈ 65 min 27 sec

  Answer: 22 times in 24 hours ✓
```

---

## Type 6: How Many Times Hands Are at Right Angle in 12 Hours

**Q: How many times do the hands of a clock make a right angle (90 degrees) in 12 hours?**

```
  In 12 hours → 22 times
  In 24 hours → 44 times

  Each hour, hands are at 90° TWICE
  (once when minute hand approaches, once when it moves away)

  BUT between 2→4 and 8→10:
  ┌───────────────────────────────────────────────┐
  │  3 o'clock: hands are already at 90°          │
  │  Just before 3: minute hand approaches 90°    │
  │  → This counts as the "2-3" slot's 2nd hit    │
  │  → AND the "3-4" slot's 1st hit               │
  │  → They MERGE into one!                       │
  │                                               │
  │  Same thing happens near 9 o'clock            │
  └───────────────────────────────────────────────┘

  Expected: 12 hours × 2 = 24 times
  Lost:     2 times (at 3 and 9 overlap)
  Actual:   24 - 2 = 22 times in 12 hrs ✓
            44 times in 24 hrs ✓
```

---

## Type 7: How Many Times Hands Are at Straight Line in 12 Hours

**Q: How many times do the hands form a straight line (180 degrees) in 12 hours?**

```
  In 12 hours → 11 times
  In 24 hours → 22 times

  Each hour, hands form 180° ONCE (generally)

  BUT between 5→7:
  ┌───────────────────────────────────────────────┐
  │  6 o'clock: hands are already at 180°         │
  │  The 180° between 5→6 and between 6→7         │
  │  MERGE at exactly 6:00                        │
  │                                               │
  │  So instead of 12, we get 11 in 12 hours      │
  └───────────────────────────────────────────────┘

  Expected: 12 times (once per hour)
  Lost:     1 time (at 6 o'clock merge)
  Actual:   12 - 1 = 11 times in 12 hrs ✓
            22 times in 24 hrs ✓

  Summary Table:
  ┌──────────────┬──────────┬──────────┐
  │ Condition    │ In 12 hr │ In 24 hr │
  ├──────────────┼──────────┼──────────┤
  │ Overlap (0°) │    11    │    22    │
  │ Right (90°)  │    22    │    44    │
  │ Straight(180)│    11    │    22    │
  │ Any θ (0<θ<  │    22    │    44    │
  │       180)   │          │          │
  └──────────────┴──────────┴──────────┘
```

---

## Type 8: Angle at Specific Times (like 3:15, 7:20)

**Q: Find the angle between the hands at (a) 3:15 and (b) 7:20.**

```
  Formula: Angle = |30H - 5.5M|
  If > 180° → subtract from 360°

  ──── (a) 3:15 ────

  Angle = |30(3) - 5.5(15)|
        = |90 - 82.5|
        = 7.5°

       12
    11  |  1
   10   |    2
    9 ──+──►3             Min at 3 (= 90°)
   8    |  ◄ 4             Hr slightly past 3 (= 97.5°)
    7   |   5              Diff = 7.5° ✓
        6
  TRAP: At 3:15 the angle is NOT 0°!
  The hour hand has moved past 3!

  ──── (b) 7:20 ────

  Angle = |30(7) - 5.5(20)|
        = |210 - 110|
        = 100°

       12
    11  |  1
   10   |    2
    9 ──+── 3             Min at 4 (= 120°)
   8  ◄─── 4              Hr between 7-8 (= 220°)
    7 ◄  |  5              Diff = 100° ✓
        6

  Answer: (a) 7.5°  (b) 100° ✓
```

---

## Type 9: Clock Gaining/Losing Time — What Time Does It Show

**Q: A clock gains 5 minutes every hour. It is set right at 8:00 AM. What time will it show at 8:00 PM on the same day?**

```
  Actual time elapsed = 8 AM to 8 PM = 12 hours

  Clock gains 5 min per hour
  Total gain = 5 × 12 = 60 minutes = 1 hour

  Actual time  = 8:00 PM
  Clock shows  = 8:00 PM + 1 hour = 9:00 PM ✓

  ──── Timeline ────
  8AM        2PM        8PM
   |─────────|──────────|  ← Actual
   |─────────|──────────|──|  ← Clock (runs ahead)
  8AM       2:30PM     9PM

  RULE:
  ┌────────────────────────────────────────┐
  │  Gains → clock is FAST → shows MORE   │
  │  Loses → clock is SLOW → shows LESS   │
  │                                        │
  │  Clock time = Actual ± total gain/loss │
  └────────────────────────────────────────┘
```

---

## Type 10: Two Clocks Gaining/Losing — When Do They Show Same Time Again

**Q: A clock gains 3 minutes per hour. Another clock loses 2 minutes per hour. Both set right at noon. When will they show the same time again?**

```
  Clock A gains 3 min/hr → runs FAST
  Clock B loses 2 min/hr → runs SLOW

  Difference per hour = 3 + 2 = 5 min/hr

  For both to show the SAME TIME again,
  the difference must = 12 hours = 720 minutes

  Time = 720 / 5 = 144 hours = 6 days

  ──── Verification ────
  After 144 hours:
    Clock A ahead by = 3 × 144 = 432 min = 7 hr 12 min
    Clock B behind by = 2 × 144 = 288 min = 4 hr 48 min
    Total diff = 432 + 288 = 720 min = 12 hrs

  12 hours diff on a 12-hr clock = same position ✓

  Answer: After 6 days (144 hours) from noon ✓

  ┌──────────────────────────────────────────────┐
  │  Same type of clock (only gains OR loses):   │
  │  Time to show correct time again:            │
  │  = 720 / (gain or loss per hour) hours       │
  │                                              │
  │  Two diff clocks:                            │
  │  = 720 / (combined diff per hour) hours      │
  └──────────────────────────────────────────────┘
```

---

## Type 11: Mirror Image of Clock (What Time Shows in Mirror)

**Q: A clock shows 3:20. What time does its mirror image show?**

```
  Formula: Mirror time = 11:60 - Actual time

  Actual  = 3:20
  Mirror  = 11:60 - 3:20
          = (11-3) : (60-20)
          = 8:40

  ──── Visual ────

  ACTUAL CLOCK          MIRROR IMAGE
       12                    12
    11  |  1              1  |  11
   10   |    2          2    |   10
    9 ──+── 3          3 ──+── 9
   8    | /  4          4  \ |    8
    7   |   5            5   |   7
        6                    6
  Hr near 3, Min at 4   Hr near 9, Min at 8
  Shows 3:20             Shows 8:40

  More examples:
  ┌──────────────┬─────────────────┐
  │ Actual Time  │ Mirror Image    │
  ├──────────────┼─────────────────┤
  │  1:50        │ 10:10           │
  │  4:15        │  7:45           │
  │  6:30        │  5:30           │
  │  9:00        │  3:00           │
  │ 12:00        │ 12:00 (same!)   │
  │  6:00        │  6:00 (same!)   │
  └──────────────┴─────────────────┘

  SPECIAL: 12:00 and 6:00 look the same in mirror!

  Answer: 8:40 ✓
```

---

## Type 12: At What Time Between X and Y o'clock Are Hands at Angle theta

**Q: At what time between 7 and 8 o'clock will the hands be at 60 degrees?**

```
  Formula: M = (30H ± θ) × 2/11

  H = 7, θ = 60°

  Case 1: M = (30×7 + 60) × 2/11
            = (210 + 60) × 2/11
            = 270 × 2/11
            = 540/11
            = 49  1/11 min  ✓ (valid)

  Case 2: M = (30×7 - 60) × 2/11
            = (210 - 60) × 2/11
            = 150 × 2/11
            = 300/11
            = 27  3/11 min  ✓ (valid)

       12                        12
    11  |  1                  11  |  1
   10   |    2               10   |    2
    9 ──+── 3                 9 ──+── 3
   8  ◄ |    4               8    | \  4
    7 ◄ |   5                 7 ◄─|   5
        6                         6

  At 7:27  3/11          At 7:49  1/11
  (hr ≈ 7.5, min ≈ 5.5)  (hr ≈ 7.8, min ≈ 9.8)
  60° apart               60° apart

  Answer: 7:27  3/11 and 7:49  1/11 ✓

  ──── General Pattern ────
  ┌──────────────────────────────────────────────┐
  │ Between H and (H+1), for angle θ:           │
  │                                              │
  │ M = (30H + θ) × 2/11  → minute hand AHEAD   │
  │ M = (30H - θ) × 2/11  → minute hand BEHIND  │
  │                                              │
  │ Check: 0 ≤ M < 60 for valid answer           │
  │ Possibly 0, 1, or 2 valid answers            │
  └──────────────────────────────────────────────┘
```
