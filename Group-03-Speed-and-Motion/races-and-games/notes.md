# Races and Games - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Race Basics

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  "A beats B by X meters in a Y-meter race"                          │
│  → When A finishes Y meters, B has covered (Y - X) meters          │
│                                                                     │
│  Speed of A   Y         Distance A                                  │
│  ────────── = ───── = ──────────────                                │
│  Speed of B   Y - X     Distance B                                  │
│                                                                     │
│  "A beats B by T seconds"                                           │
│  → B takes T seconds more than A to finish the same race            │
│  → T = Time_B - Time_A                                              │
│                                                                     │
│  "A gives B a head start of X meters"                               │
│  → B starts X meters ahead of the start line                        │
│  → A covers full distance, B covers (Distance - X)                  │
│                                                                     │
│  "A gives B a head start of T seconds"                              │
│  → B starts T seconds before A                                      │
│  → B has already covered (Speed_B × T) meters when A starts         │
│                                                                     │
│  Dead Heat = Both finish at the same time (tie)                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Combined / Transitive Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  A beats B by X m in Y-m race, B beats C by P m in Y-m race:       │
│                                                                     │
│  A beats C by = X + P - (X × P) / Y   meters (in Y-m race)         │
│                                                                     │
│  Shortcut: C's position when A finishes =                           │
│            (Y - X)(Y - P) / Y    meters from start                  │
│  A beats C by = Y - [(Y-X)(Y-P)/Y]                                 │
│                                                                     │
│  In a 100m race, this simplifies to:                                │
│  B at = (100 - X), C at = (100 - P) when respective winner finishes │
│  When A finishes: C is at (100-X)(100-P)/100 from start             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Speed Ratio & Circular Race Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Speed Ratio from Race Result:                                      │
│  A beats B by X m in Y-m race → Sa : Sb = Y : (Y - X)              │
│                                                                     │
│  Circular Race (same direction):                                    │
│  First meet after = Track Length / |S1 - S2|   (time)               │
│  They meet when faster gains exactly 1 full lap over slower         │
│                                                                     │
│  Circular Race (opposite direction):                                │
│  First meet after = Track Length / (S1 + S2)   (time)               │
│                                                                     │
│  Games (scoring):                                                   │
│  "A gives B 10 points in 100" means:                                │
│  When A scores 100, B scores 90                                     │
│  Scoring ratio = A : B = 100 : 90                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Quick Conversion Table

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Beat by meters  →  Speed ratio  →  Time ratio (inverse of speed)   │
│                                                                     │
│  Beat by  5m in 100m  →  100:95  = 20:19                            │
│  Beat by 10m in 100m  →  100:90  = 10:9                             │
│  Beat by 20m in 100m  →  100:80  =  5:4                             │
│  Beat by 25m in 100m  →  100:75  =  4:3                             │
│  Beat by 50m in 100m  →  100:50  =  2:1                             │
│                                                                     │
│  Time ratio = INVERSE of speed ratio                                │
│  If Sa:Sb = 10:9 → Ta:Tb = 9:10                                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Visual Guide

```
RACE TRACK VISUALIZATION:

When A beats B by 20m in a 100m race:

START                                                    FINISH (100m)
  |                                                          |
  A────────────────────────────────────────────────────────→ A (100m) ✓
  B──────────────────────────────────────────→ B (80m)       |
  |                                          ↑               |
  |                                    B is HERE when        |
  |                                    A finishes            |
  |◄──────────── 80m ──────────────────►|◄── 20m ──►|

  Speed of A     100     10    5
  ────────── = ───── = ──── = ───
  Speed of B      80      8    4

HEAD START VISUALIZATION:

A gives B a 20m head start in a 100m race:

START                                                    FINISH (100m)
  |    ↑ B starts here                                       |
  A────|─────────────────────────────────────────────────→ A (100m)
  |    B─────────────────────────────────────────────────→ B (80m only)
  |◄20m►|◄─────────── 80m (B runs this much) ──────────►|

  For dead heat: Speed_A / Speed_B = 100 / 80 = 5/4

CIRCULAR RACE (same direction):

         ╭──────────╮
        /    400m     \
       /    track      \
      |                 |
      | A──→    B──→    |    Same dir: faster LAPS slower
      |                 |    Meet when gap = full track
       \               /     Time = Track / (Sa - Sb)
        ╲             ╱
         ╰──────────╯
```

---

## Type 1: A Beats B by X Meters in a Y-Meter Race

**Q: In a 200m race, A beats B by 30m. Find the ratio of speeds of A and B.**

```
START                                                  FINISH (200m)
  |                                                        |
  A──────────────────────────────────────────────────────→ A (200m) ✓
  B────────────────────────────────────────→ B (170m)       |
  |                                        ↑                |
  |◄────────────── 170m ──────────────────►|◄── 30m ──►|

When A covers 200m, B covers only (200 - 30) = 170m

Speed ratio = Distance ratio (same time!)

  Sa     200     20
  ── = ───── = ────
  Sb     170     17

  Speed ratio = 20 : 17 ✓
```

---

## Type 2: A Beats B by T Seconds

**Q: In a 1 km race, A beats B by 20 seconds. A's time is 100 sec. Find B's speed.**

```
START                                              FINISH (1000m)
  |                                                      |
  A──────────────────────────────────────────────────→ 100 sec
  B──────────────────────────────────────────────────→ 120 sec
  |                                                      |
  |  B takes 20 sec MORE than A                          |

A's time = 100 sec
B's time = 100 + 20 = 120 sec   (beaten BY 20 sec means B is slower)

Both cover same distance = 1000m

Speed of A = 1000/100 = 10 m/s
Speed of B = 1000/120 = 25/3 m/s = 8.33 m/s ✓

Alternatively:
  Sa/Sb = Tb/Ta = 120/100 = 6/5
  Speed ratio = 6 : 5 ✓
```

---

## Type 3: A Gives B a Head Start of X Meters

**Q: In a 500m race, A gives B a head start of 100m and still wins. Find the ratio of speeds.**

```
START                                              FINISH (500m)
  |         ↑ B starts here                            |
  A─────────|──────────────────────────────────────→ A (500m) ✓
  |         B──────────────────────────────────────→ B (400m run)
  |◄─100m──►|◄────────── 400m ────────────────────►|

  A runs 500m, B runs only (500 - 100) = 400m
  Both finish at the same time (dead heat with head start)

  Sa     500     5
  ── = ───── = ───
  Sb     400     4

  Speed ratio = 5 : 4 ✓

  NOTE: "gives head start and STILL WINS" means A finishes first.
        "gives head start and DEAD HEAT" means both finish together.
```

---

## Type 4: A Gives B a Head Start of T Seconds

**Q: In a 1 km race, A gives B a head start of 10 seconds. Speed of A = 10 m/s, B = 8 m/s. Who wins?**

```
  B starts 10 sec early:
  B covers in 10 sec = 8 × 10 = 80m head start

START                                              FINISH (1000m)
  |              ↑ B is here when A starts             |
  A──────────────|─────────────────────────────────→ A
  |              B─────────────────────────────────→ B
  |◄───80m──────►|◄──── 920m (B needs this) ──────►|

  A needs to cover: 1000m at 10 m/s → Time = 100 sec
  B needs to cover: 920m  at  8 m/s → Time = 115 sec

  A finishes in 100 sec, B finishes in 115 sec
  A wins by 115 - 100 = 15 seconds ✓

  When A finishes (at t = 100 sec):
  B has covered = 80 + 8 × 100 = 880m
  A beats B by = 1000 - 880 = 120m ✓
```

---

## Type 5: Transitive — A Beats B, B Beats C

**Q: In a 1000m race, A beats B by 50m. In a 1000m race, B beats C by 40m. By how much does A beat C in a 1000m race?**

```
Race 1: A vs B (1000m)           Race 2: B vs C (1000m)
  A → 1000m                        B → 1000m
  B →  950m                        C →  960m

When A finishes 1000m:
  B is at 950m

Now scale B's race with C:
  When B covers 1000m → C covers 960m
  When B covers  950m → C covers ?

    C = 960 × 950 / 1000 = 912m

START                                              FINISH (1000m)
  |                                                      |
  A──────────────────────────────────────────────────→ 1000m ✓
  B──────────────────────────────────────────────→  950m |
  C──────────────────────────────────────────→  912m     |
  |                                          ↑           |
  |◄──────────── 912m ─────────────────────►|◄── 88m ──►|

  A beats C by = 1000 - 912 = 88m ✓

  FORMULA: A beats C by = X + Y - (X × Y) / D
         = 50 + 40 - (50 × 40)/1000
         = 90 - 2 = 88m ✓
```

---

## Type 6: Dead Heat (Both Finish Together)

**Q: A and B run a 100m race. A runs at 10 m/s, B at 8 m/s. How much head start should A give B so the race ends in a dead heat?**

```
  For dead heat: both must finish at the SAME TIME

  A covers 100m in = 100/10 = 10 sec
  In 10 sec, B covers = 8 × 10 = 80m

  So B must only need to run 80m → head start = 100 - 80 = 20m

START                                              FINISH (100m)
  |                   ↑ B starts here                  |
  A───────────────────|────────────────────────────→ 100m (10 sec)
  |                   B────────────────────────────→  80m (10 sec)
  |◄─── 20m start ──►|◄──────── 80m ─────────────►|

  Head start = 100 × (1 - Sb/Sa) = 100 × (1 - 8/10) = 100 × 1/5 = 20m ✓

  FORMULA:  Head start = D × (1 - Sb/Sa)
            or = D × (Sa - Sb) / Sa
```

---

## Type 7: Find Ratio of Speeds from Race Result

**Q: In a 200m race, A beats B by 20m and 5 seconds. Find the speeds of A and B.**

```
START                                              FINISH (200m)
  |                                                     |
  A──────────────────────────────────────────────────→ 200m
  B────────────────────────────────────────→ 180m        |
  |◄──────────── 180m ────────────────────►|◄─ 20m ─►|

When A finishes: B is at 180m, B needs 20m more
B takes 5 sec for these 20m

  Speed of B = 20 / 5 = 4 m/s

  Speed ratio = 200 : 180 = 10 : 9
  Sa/Sb = 10/9
  Speed of A = (10/9) × 4 = 40/9 m/s ≈ 4.44 m/s ✓

  Verify: A's time = 200 / (40/9) = 45 sec
          B's time = 200 / 4 = 50 sec
          Diff = 50 - 45 = 5 sec ✓
```

---

## Type 8: A Beats B by Xm and C by Ym — Find B Beats C

**Q: In a 100m race, A beats B by 10m and C by 20m. By how much does B beat C in a 100m race?**

```
When A finishes 100m:
  B is at 90m (beaten by 10m)
  C is at 80m (beaten by 20m)

  Speed ratios (from A's race):
  Sa : Sb : Sc = 100 : 90 : 80 = 10 : 9 : 8

Now B vs C in a 100m race:
  Sb : Sc = 9 : 8
  When B covers 100m → C covers = 100 × 8/9 = 800/9 = 88.89m

START                                              FINISH (100m)
  |                                                     |
  B──────────────────────────────────────────────────→ 100m ✓
  C───────────────────────────────────────────→ 88.89m  |
  |◄──────── 88.89m ────────────────────────►|◄11.11m►|

  B beats C by = 100 - 800/9 = 100/9 = 11.11m ✓

  SHORTCUT: B beats C in 100m race = 100 × (Diff_AC - Diff_AB) / (100 - Diff_AB)
          ... OR just use ratio method: Sb:Sc then scale to 100
```

---

## Type 9: A Gives B Xm and C Ym — B Gives C How Much?

**Q: A can give B 20m and C 40m in a 200m race. How much can B give C in a 200m race?**

```
  A gives B 20m → when A runs 200m, B runs 180m
  A gives C 40m → when A runs 200m, C runs 160m

  Sa : Sb : Sc = 200 : 180 : 160 = 10 : 9 : 8

  B vs C in 200m:
  When B runs 200m, C runs = 200 × 8/9 = 1600/9 ≈ 177.78m

START                                              FINISH (200m)
  |                                                     |
  B──────────────────────────────────────────────────→ 200m ✓
  C──────────────────────────────────────────→ 177.78m  |
  |◄─────── 177.78m ───────────────────────►|◄22.22m►|

  B can give C = 200 - 1600/9 = 200/9 = 22.22m ✓

  KEY TRICK:
    Sb/Sc = 9/8
    C covers = 200 × (Sc/Sb) = 200 × 8/9
    B gives C = 200 - 200×(8/9) = 200 × (1/9) = 22.22m
```

---

## Type 10: Race with Time Difference — Find Speeds

**Q: A and B run a 1 km race. A wins by 1 minute. If A's speed is reduced by 2 km/h, then B wins by 1 minute. Find speeds of A and B.**

```
  Let Sa = a km/h,  Sb = b km/h
  Distance = 1 km

  Case 1: A wins by 1 min = 1/60 hr
    1/b - 1/a = 1/60  ... (i)   (B takes 1 min more)

  Case 2: A's speed = (a - 2), B wins by 1 min
    1/(a-2) - 1/b = 1/60  ... (ii)   (A takes 1 min more now)

  Add (i) + (ii):
    1/(a-2) - 1/a = 2/60 = 1/30

    [a - (a-2)] / [a(a-2)] = 1/30
    2 / [a(a-2)] = 1/30
    a(a-2) = 60
    a² - 2a - 60 = 0
    (a - 8.7...)(a + 6.7...) → try a(a-2) = 60

    a = ? → Let's solve: a² - 2a = 60
    By trial: a = 8.7 (approx) or use quadratic

    If a = 8: 8 × 6 = 48 (not 60)
    If a = 10: 10 × 8 = 80 (not 60)

    Exact: a = 1 + sqrt(61) ≈ 8.81 km/h

  For CLEAN numbers (typical exam version):
  A wins by 60 sec, D = 1km, speed reduced by 1 km/h:
    a(a-1) = 120 → a = 11.4... (still messy!)

  EXAM TIP: Most exam questions give nice integers.
            Use options and back-substitute to save time!
```

---

## Type 11: Circular Race — When They Meet First Time

**Q: A and B start from the same point on a circular track of 400m. A runs at 5 m/s and B at 3 m/s. When do they first meet if (a) same direction (b) opposite direction?**

```
SAME DIRECTION:
         ╭──────────╮
        /   400m      \         A is FASTER → A laps B
       /    track      \        Relative speed = 5 - 3 = 2 m/s
      |       ↑         |
      |    Start         |      A gains 2m every second on B
      | A──→    B──→     |      To gain full lap (400m):
       \               /
        ╲             ╱         Time = 400 / 2 = 200 sec ✓
         ╰──────────╯

OPPOSITE DIRECTION:
         ╭──────────╮
        /   400m      \         They run TOWARDS each other
       /    track      \        Relative speed = 5 + 3 = 8 m/s
      |       ↑         |
      |    Start         |      Combined they cover 8m/sec
      | A──→    ←──B     |      To cover full track (400m):
       \               /
        ╲             ╱         Time = 400 / 8 = 50 sec ✓
         ╰──────────╯

  FORMULAS:
  Same direction:     T = Track / (S1 - S2)
  Opposite direction: T = Track / (S1 + S2)

  Number of meeting points:
  Same dir:     Speed ratio Sa:Sb = 5:3 → meet (5-3) = 2 distinct points
  Opposite dir: Speed ratio Sa:Sb = 5:3 → meet (5+3) = 8 distinct points
```

---

## Type 12: Games — Scoring (A Gives B Points)

**Q: In a game of 100 points, A can give B 10 points and C 20 points. How many points can B give C in a game of 100?**

```
  "A gives B 10 points in 100" means:
  When A scores 100, B scores 90

  "A gives C 20 points in 100" means:
  When A scores 100, C scores 80

  Scoring rates:
  Rate_A : Rate_B : Rate_C = 100 : 90 : 80 = 10 : 9 : 8

  B vs C in a game of 100:
  When B scores 100 → C scores = 100 × 8/9 = 800/9 ≈ 88.89

  B can give C = 100 - 88.89 = 100/9 ≈ 11.11 points ✓

GAME SCOREBOARD:
  ┌───────────────────────────────────────┐
  │  When A = 100  │  B = 90  │  C = 80   │
  ├───────────────────────────────────────┤
  │  Scale for B's game of 100:           │
  │  B = 100  → C = 100 × (8/9) = 88.89  │
  │  B gives C ≈ 11.11 points             │
  └───────────────────────────────────────┘

  NOTE: This is EXACTLY the same as race problems!
        Points = Distance, Game = Race
        "give 10 points in 100" = "beat by 10m in 100m race"
```
