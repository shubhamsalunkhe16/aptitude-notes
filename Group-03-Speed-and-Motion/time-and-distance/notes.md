# Time and Distance - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Basic Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Speed = Distance / Time                                            │
│  Distance = Speed × Time                                            │
│  Time = Distance / Speed                                            │
│                                                                     │
│  Unit Conversion:                                                   │
│  km/h → m/s : × 5/18                                               │
│  m/s → km/h : × 18/5                                               │
│  km/h → m/min : × 1000/60 = × 50/3                                 │
│                                                                     │
│  Quick Table:                                                       │
│  36 km/h = 10 m/s    72 km/h = 20 m/s    108 km/h = 30 m/s        │
│  54 km/h = 15 m/s    90 km/h = 25 m/s                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Proportionality Rules

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Distance constant → Speed ∝ 1/Time   (inverse)                    │
│     S1/S2 = T2/T1                                                   │
│     Double speed = Half time                                        │
│                                                                     │
│  Time constant → Speed ∝ Distance   (direct)                       │
│     S1/S2 = D1/D2                                                   │
│     Double speed = Double distance                                  │
│                                                                     │
│  Speed constant → Distance ∝ Time   (direct)                       │
│     D1/D2 = T1/T2                                                   │
│     Double time = Double distance                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Average Speed Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Average Speed = Total Distance / Total Time                        │
│                                                                     │
│  Same distance at two speeds (S1 and S2):                           │
│     Avg Speed = 2 × S1 × S2 / (S1 + S2)                            │
│     (Harmonic mean — NOT simple average!)                           │
│                                                                     │
│  Same time at two speeds:                                           │
│     Avg Speed = (S1 + S2) / 2                                       │
│     (Simple average — only when time is same)                       │
│                                                                     │
│  Three speeds, same distance each:                                  │
│     Avg = 3×S1×S2×S3 / (S1×S2 + S2×S3 + S1×S3)                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Relative Speed

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Same direction:                                                    │
│     A ──→  B ──→                                                    │
│     Relative Speed = S_A - S_B                                      │
│     (closing gap slowly)                                            │
│                                                                     │
│  Opposite direction:                                                │
│     A ──→  B ←──                                                    │
│     Relative Speed = S_A + S_B                                      │
│     (closing gap fast)                                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Visual Guide

```
  ╔═══ THE SPEED-DISTANCE-TIME TRIANGLE ═══╗

              Distance
             /        \
            /          \
         Speed  ×  Time

  Cover any one → the other two give the formula:
    D = S × T
    S = D / T
    T = D / S


  ╔═══ PROPORTIONALITY — WHICH IS CONSTANT? ═══╗

  Same Distance (most common in exams):
    A ──────────────────→ D
    B ──────────────────→ D
    Faster person takes LESS time
    S1 × T1 = S2 × T2

  Same Time:
    A ──────────────→ D1
    B ──────────────────────→ D2
    Faster person covers MORE distance
    D1/S1 = D2/S2

  Same Speed:
    A ──────────────→ D1 (in T1)
    A ──────────────────────→ D2 (in T2)
    More time = more distance
    D1/T1 = D2/T2
```

---

## Type 1: Basic — Find Speed, Distance, or Time

**Q: A car travels 240 km in 4 hours. Find the speed.**

```
  A ═══════════ 240 km ═══════════ B
  ──────────────────────────────→
              4 hours

  Speed = Distance / Time
        = 240 / 4
        = 60 km/h ✓
```

---

## Type 2: Unit Conversion Problems

**Q: A man runs at 18 km/h. Express in m/s. How many meters does he cover in 30 seconds?**

```
  18 km/h = 18 × 5/18 = 5 m/s

  Distance in 30 sec = 5 × 30 = 150 m ✓

  CONVERSION TRICK:
  ┌────────────────────────────────┐
  │ km/h → m/s : DIVIDE by 3.6    │
  │ m/s → km/h : MULTIPLY by 3.6  │
  │                                │
  │ Or use: × 5/18 and × 18/5     │
  └────────────────────────────────┘
```

---

## Type 3: Average Speed — Same Distance, Two Speeds

**Q: A person goes from A to B at 40 km/h and returns at 60 km/h. Find average speed for the whole journey.**

```
  A ════════ D km ════════ B
     ──→ 40 km/h
     ←── 60 km/h

  SAME DISTANCE → use Harmonic Mean

  Avg Speed = 2 × S1 × S2 / (S1 + S2)
            = 2 × 40 × 60 / (40 + 60)
            = 4800 / 100
            = 48 km/h ✓

  NOT 50! (simple avg is WRONG here)

  WHY: More time spent at slower speed
       → average pulled towards slower speed
```

---

## Type 4: Average Speed — Same Time, Two Speeds

**Q: A car travels at 40 km/h for 2 hours and then at 60 km/h for 2 hours. Average speed?**

```
  |◄──── 2 hrs ────►|◄──── 2 hrs ────►|
  |   40 km/h        |   60 km/h        |
  |   D1 = 80 km     |   D2 = 120 km    |

  SAME TIME → Simple Average works

  Avg = (S1 + S2) / 2
      = (40 + 60) / 2
      = 50 km/h ✓

  Verify: Total D = 80+120 = 200 km
          Total T = 2+2 = 4 hrs
          Avg = 200/4 = 50 ✓
```

---

## Type 5: Average Speed — Different Distances, Different Times

**Q: A car travels 120 km at 40 km/h, then 180 km at 60 km/h. Average speed?**

```
  |◄──── 120 km ────►|◄───── 180 km ─────►|
  |    40 km/h        |     60 km/h         |

  NO shortcut — use definition:

  T1 = 120/40 = 3 hrs
  T2 = 180/60 = 3 hrs

  Avg = Total D / Total T
      = (120+180) / (3+3)
      = 300 / 6
      = 50 km/h ✓
```

---

## Type 6: Ratio of Speed → Ratio of Time (Same Distance)

**Q: Speed ratio of A and B is 3:4. A takes 20 min more than B to cover the same distance. Find time taken by each.**

```
  Same Distance → S ∝ 1/T
  Speed ratio = 3 : 4
  Time ratio  = 4 : 3  (INVERSE!)

  Let times = 4x and 3x
  Difference = 4x - 3x = x = 20 min

  A's time = 4 × 20 = 80 min ✓
  B's time = 3 × 20 = 60 min ✓

  ┌─────────────────────────────────┐
  │ Speed ↑ → Time ↓ (inverse)     │
  │ Speed ratio a:b                 │
  │ Time ratio  b:a                 │
  │ Diff = (b-a) parts = given diff │
  └─────────────────────────────────┘
```

---

## Type 7: Ratio of Speed → Ratio of Distance (Same Time)

**Q: Two cars start at the same time. Speed ratio = 5:7. After 3 hours, find ratio of distances.**

```
  Same Time → S ∝ D
  Speed ratio = 5 : 7
  Distance ratio = 5 : 7 (SAME!)

  If one covered 150 km:
    5 parts = 150 → 1 part = 30
    Other = 7 × 30 = 210 km ✓

  ┌─────────────────────────────────┐
  │ Same time → Distance ratio      │
  │              = Speed ratio       │
  └─────────────────────────────────┘
```

---

## Type 8: Late/Early at Different Speeds — Find Distance

**Q: A person walks from home to office. At 4 km/h he arrives 10 min late. At 6 km/h he arrives 10 min early. Find the distance from home to office.**

```
  Home ──────── D km ──────── Office
  ──→ 4 km/h ... arrives 10 min LATE
  ──→ 6 km/h ... arrives 10 min EARLY

  DIRECT FORMULA:
         S1 × S2 × (T1 + T2)
  D  =  ─────────────────────
              S2 - S1

  late + early → ADD times
  T = 10+10 = 20 min = 1/3 hr

  D = 4 × 6 × (1/3) / (6 - 4)
    = 8 / 2
    = 4 km ✓

  ┌─────────────────────────────────────┐
  │ Both late (diff amounts) → T1 - T2  │
  │ Both early (diff amounts) → T1 - T2 │
  │ One late + one early → T1 + T2      │
  │ ALWAYS convert min → hours first!   │
  └─────────────────────────────────────┘
```

---

## Type 9: Meeting Point — Two People Start Towards Each Other

**Q: A starts from X and B starts from Y at the same time. Distance XY = 120 km. A's speed = 30 km/h, B's speed = 50 km/h. Where do they meet?**

```
  X ═══════════ 120 km ═══════════ Y
  A ──→ 30 km/h              50 km/h ←── B

  Relative Speed = 30 + 50 = 80 km/h (opposite)
  Time to meet = 120 / 80 = 1.5 hrs

  A covers = 30 × 1.5 = 45 km from X
  B covers = 50 × 1.5 = 75 km from Y

  Meeting point = 45 km from X ✓

  SHORTCUT: Distances in ratio of speeds
    A : B = 30 : 50 = 3 : 5
    A from X = (3/8) × 120 = 45 km ✓
```

---

## Type 10: Catch-Up / Chase Problem (Same Direction)

**Q: A thief starts running at 8 km/h. After 30 min, a police starts chasing at 12 km/h. How long for police to catch the thief?**

```
  Thief ──→ 8 km/h (30 min head start)
  Police ──→ 12 km/h (starts 30 min later)

  Head start distance = 8 × 30/60 = 4 km

  |◄── 4 km gap ──►|
  P ──→              T ──→
  12 km/h            8 km/h

  Relative Speed = 12 - 8 = 4 km/h (same dir)
  Time to catch = Gap / Relative Speed
                = 4 / 4
                = 1 hour ✓

  Police catches after 1 hr (at 12 km from start)
  Total time from thief's start = 1.5 hrs
```

---

## Type 11: Head Start — Distance or Time

**Q: A and B run at 10 km/h and 8 km/h. A gives B a 2 km head start. How long will A take to catch B?**

```
  B starts here    A starts here
      |◄── 2 km ──►|
      B ──→ 8        A ──→ 10

  Relative Speed = 10 - 8 = 2 km/h
  Time = Gap / Relative = 2 / 2 = 1 hr ✓

  ALTERNATE: A gives B 15 min head start
    B's head start dist = 8 × 15/60 = 2 km
    Then same calculation → 1 hr ✓
```

---

## Type 12: Round Trip — Find Distance

**Q: A person goes upstream at 6 km/h and comes back downstream at 10 km/h. Total time = 4 hours. Find one-way distance.**

```
  A ═══════ D km ═══════ B
     ──→ 6 km/h (upstream)
     ←── 10 km/h (downstream)

  D/6 + D/10 = 4
  (5D + 3D) / 30 = 4
  8D = 120
  D = 15 km ✓

  SHORTCUT using avg speed:
    Avg = 2×6×10 / (6+10) = 120/16 = 7.5 km/h
    Total D = 7.5 × 4 = 30 km (round trip)
    One way = 30/2 = 15 km ✓
```

---

## Type 13: Speed Increased by x% — Time Decreases

**Q: If a person increases speed by 25%, by what % does time decrease for the same distance?**

```
  Same distance → S × T = constant

  Speed becomes 125% = 5/4 of original
  Time becomes 4/5 of original (inverse)

  Decrease = 1 - 4/5 = 1/5 = 20% ✓

  SHORTCUT TABLE:
  ┌──────────────────┬─────────────────┐
  │ Speed increase   │ Time decrease   │
  ├──────────────────┼─────────────────┤
  │ 10% (11/10)      │ 1/11 = 9.09%    │
  │ 20% (6/5)        │ 1/6 = 16.67%    │
  │ 25% (5/4)        │ 1/5 = 20%       │
  │ 33.3% (4/3)      │ 1/4 = 25%       │
  │ 50% (3/2)        │ 1/3 = 33.3%     │
  │ 100% (2/1)       │ 1/2 = 50%       │
  └──────────────────┴─────────────────┘

  Formula: If speed ↑ by x%
  Time ↓ by [x / (100+x)] × 100 %
```

---

## Type 14: Two People Walk — Find Distance Between Them After Time

**Q: A and B start from the same point. A walks North at 4 km/h, B walks East at 3 km/h. Distance between them after 2 hours?**

```
         A (North)
         ↑ 8 km
         |
         |
  Start──+──────→ B (East)
              6 km

  A covers = 4 × 2 = 8 km (North)
  B covers = 3 × 2 = 6 km (East)

  They form a RIGHT ANGLE triangle!
  Distance = √(8² + 6²)
           = √(64 + 36)
           = √100
           = 10 km ✓

  Common Pythagorean triplets:
  3,4,5 → 6,8,10 → 9,12,15 → 12,16,20
```

---

## Type 15: Staggered Start — Who Finishes First?

**Q: In a 1 km race, A beats B by 50m. In the same race, B beats C by 40m. By how much does A beat C?**

```
  When A finishes 1000m:
    B is at 1000-50 = 950m
    Ratio A:B = 1000:950 = 20:19

  When B finishes 1000m:
    C is at 1000-40 = 960m
    Ratio B:C = 1000:960 = 25:24

  Ratio A:C = (A/B) × (B/C)
            = (20/19) × (25/24)
            = 500/456 = 125/114

  When A runs 1000m, C runs:
    C = 1000 × 114/125 = 912m

  A beats C by = 1000 - 912 = 88m ✓
```

---

## Type 16: Relative Speed — Circular Track / Meeting

**Q: A and B start from the same point on a circular track of 600m. A runs at 5 m/s and B at 3 m/s. When do they meet for the first time?**

```
  ┌─────────────────────┐
  │    Circular Track    │
  │      600m            │
  │   ──→ A (5 m/s)      │
  │   ──→ B (3 m/s)      │
  └─────────────────────┘

  SAME direction:
    Relative = 5 - 3 = 2 m/s
    Meet when faster gains 1 full lap = 600m
    Time = 600 / 2 = 300 sec = 5 min ✓

  OPPOSITE direction:
    Relative = 5 + 3 = 8 m/s
    Meet when combined = 1 lap = 600m
    Time = 600 / 8 = 75 sec ✓

  ┌──────────────────────────────────────┐
  │ Same dir: Time = Track / (S1 - S2)   │
  │ Opp dir:  Time = Track / (S1 + S2)   │
  └──────────────────────────────────────┘
```

---

## Type 17: Boats and Streams

**Q: A boat goes 24 km upstream in 6 hours and 24 km downstream in 4 hours. Find speed of boat in still water and speed of stream.**

```
  UPSTREAM (against current):
  ──→ Boat    ←── Stream
  Effective speed = Boat - Stream

  DOWNSTREAM (with current):
  ──→ Boat    ──→ Stream
  Effective speed = Boat + Stream

  Upstream speed = 24/6 = 4 km/h = B - S
  Downstream speed = 24/4 = 6 km/h = B + S

  B + S = 6
  B - S = 4
  ─────────
  2B = 10 → B = 5 km/h ✓
  2S = 2  → S = 1 km/h ✓

  FORMULAS:
  ┌──────────────────────────────────────┐
  │ Boat speed = (Down + Up) / 2         │
  │ Stream speed = (Down - Up) / 2       │
  │                                      │
  │ Downstream = B + S                   │
  │ Upstream = B - S                     │
  └──────────────────────────────────────┘
```

---

## Type 18: Boats — Find Distance / Time

**Q: Speed of boat = 10 km/h, stream = 2 km/h. Time to go 36 km upstream and come back?**

```
  Upstream = B - S = 10 - 2 = 8 km/h
  Downstream = B + S = 10 + 2 = 12 km/h

  A ═══════ 36 km ═══════ B
     ──→ 8 km/h (up)
     ←── 12 km/h (down)

  T_up = 36/8 = 4.5 hrs
  T_down = 36/12 = 3 hrs

  Total = 4.5 + 3 = 7.5 hrs ✓

  SHORTCUT (same distance, two speeds):
    Avg = 2×8×12/(8+12) = 192/20 = 9.6 km/h
    Total dist = 72 km (round trip)
    Time = 72/9.6 = 7.5 hrs ✓
```

---

## Type 19: Man Covers Same Distance — Walks & Rides

**Q: A man covers half distance at 20 km/h (walking) and half at 40 km/h (riding). Average speed?**

```
  |◄──── D/2 ────►|◄──── D/2 ────►|
  |   Walk 20km/h  |  Ride 40km/h   |

  Same distance each half → Harmonic Mean

  Avg = 2 × 20 × 40 / (20 + 40)
      = 1600 / 60
      = 26.67 km/h ✓

  NOT 30! (simple avg is WRONG)
```

---

## Type 20: Clock Gaining/Losing Time

**Q: A clock gains 5 minutes every hour. It was set right at 8 AM. What will it show at 8 PM the same day?**

```
  Duration = 8 AM to 8 PM = 12 hours

  Gains 5 min per hour
  Total gain = 5 × 12 = 60 min = 1 hour

  Actual time = 8 PM
  Clock shows = 8 PM + 1 hr = 9 PM ✓

  ┌──────────────────────────────────────────┐
  │ Gains → clock runs FAST (shows more)     │
  │ Loses → clock runs SLOW (shows less)     │
  │                                          │
  │ Gain per hour × total hours = total gain │
  └──────────────────────────────────────────┘
```

---

## Type 21: Partial Journey at Different Speeds

**Q: A person covers 1/3 of journey at 20 km/h, 1/3 at 30 km/h, and 1/3 at 60 km/h. Average speed?**

```
  |◄─ D/3 ─►|◄─ D/3 ─►|◄─ D/3 ─►|
  |  20km/h  |  30km/h  |  60km/h  |

  Same distance each part → use formula:

  Avg = 3 / (1/S1 + 1/S2 + 1/S3)
      = 3 / (1/20 + 1/30 + 1/60)
      = 3 / (3/60 + 2/60 + 1/60)
      = 3 / (6/60)
      = 3 / (1/10)
      = 30 km/h ✓

  For 3 equal parts:
  Avg = 3×S1×S2×S3 / (S1×S2 + S2×S3 + S1×S3)
```

---

## Type 22: Walking and Waiting / Start-Stop Problems

**Q: A man walks 1 km at 5 km/h, rests 10 min, then walks 2 km at 4 km/h. Total time?**

```
  |◄── 1 km ──►|  REST  |◄──── 2 km ────►|
  |  5 km/h     | 10 min |   4 km/h        |

  T1 = 1/5 hr = 12 min
  Rest = 10 min
  T2 = 2/4 hr = 30 min

  Total = 12 + 10 + 30 = 52 min ✓

  KEY: Don't forget rest/waiting time!
       Avg speed = Total dist / Total time
       = 3 km / (52/60) hr = 3.46 km/h
```
