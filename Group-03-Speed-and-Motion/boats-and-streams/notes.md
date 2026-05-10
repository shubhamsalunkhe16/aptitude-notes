# Boats and Streams - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Core Definitions

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Let boat speed in still water = B km/h                             │
│  Let speed of stream (current) = S km/h                             │
│                                                                     │
│  Downstream speed = B + S   (boat & stream same dir)                │
│  Upstream speed   = B - S   (boat & stream opposite dir)            │
│                                                                     │
│  ──→ Boat  ──→ Stream   =  DOWNSTREAM (FASTER)                     │
│  ──→ Boat  ←── Stream   =  UPSTREAM   (SLOWER)                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Deriving Boat & Stream Speed

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  If Downstream speed = D,  Upstream speed = U                       │
│                                                                     │
│  Speed of boat in still water = (D + U) / 2                        │
│  Speed of stream              = (D - U) / 2                        │
│                                                                     │
│  WHY:  D = B + S,  U = B - S                                       │
│        D + U = 2B  →  B = (D+U)/2                                  │
│        D - U = 2S  →  S = (D-U)/2                                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Time & Distance Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Time downstream = D / (B + S)                                      │
│  Time upstream   = D / (B - S)                                      │
│                                                                     │
│  Round trip time = D/(B+S) + D/(B-S)                                │
│                  = 2DB / (B^2 - S^2)                                │
│                                                                     │
│  Average speed (round trip) = (B^2 - S^2) / B                      │
│    OR = (D+U)^2 / (4 × ((D+U)/2))  simplifies to:                 │
│       = (Downstream × Upstream) / Boat speed                       │
│                                                                     │
│  If same distance, T_up/T_down = (B+S)/(B-S)                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Shortcut Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Distance when T_up and T_down given (same distance):               │
│    Stream speed = Distance × (1/T_down - 1/T_up) / 2               │
│                                                                     │
│  T_up - T_down = 2DS / (B^2 - S^2)                                 │
│                                                                     │
│  If boat speed doubled (B' = 2B):                                   │
│    New round trip = D/(2B+S) + D/(2B-S)                             │
│                   = 4BD / (4B^2 - S^2)                              │
│                                                                     │
│  If T_up exceeds T_down by T hours for distance D:                  │
│    D = T × (B^2 - S^2) / (2S)                                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Visual Guide

```
Every boat-and-stream problem = adjusting speed for current

Figure out 2 things:
  1. DIRECTION → Upstream or Downstream?
  2. EFFECTIVE SPEED → Add or Subtract stream speed?


  ╔═══ DOWNSTREAM (with the current) ═══╗

  ~~~~~~~~~~~~ RIVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~                                          ~~
  ~~    ──→ Boat (B)     ──→ Stream (S)       ~~
  ~~                                          ~~
  ~~    Effective Speed = B + S               ~~
  ~~    (current HELPS the boat)              ~~
  ~~                                          ~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       BANK ================================ BANK


  ╔═══ UPSTREAM (against the current) ═══╗

  ~~~~~~~~~~~~ RIVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~                                          ~~
  ~~    ──→ Boat (B)     ←── Stream (S)       ~~
  ~~                                          ~~
  ~~    Effective Speed = B - S               ~~
  ~~    (current OPPOSES the boat)            ~~
  ~~                                          ~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       BANK ================================ BANK


  ╔═══ STILL WATER (no current) ═══╗

  ─── ─── ─── CALM WATER ─── ─── ───
  ──                               ──
  ──    ──→ Boat (B)   Stream = 0  ──
  ──                               ──
  ──    Effective Speed = B        ──
  ──                               ──
  ─── ─── ─── ─── ─── ─── ─── ─── ──


  ╔═══ ROUND TRIP ═══╗

       START ◄────── D km ──────► PLACE
  ~~~~~~~~~~~~ RIVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~                                          ~~
  ~~  GO (downstream):  ──→ ──→  Speed= B+S  ~~
  ~~  .............. turn around ..........    ~~
  ~~  RETURN (upstream): ──→ ←── Speed= B-S   ~~
  ~~                                          ~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Total Time = D/(B+S) + D/(B-S)
```

---

## Type 1: Find Speed of Boat in Still Water and Stream Speed

**Q: A man rows downstream 13 km/h and upstream 9 km/h. Find boat speed in still water and stream speed.**

```
  ~~~~~~~~~~~~ RIVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~  Downstream: ──→ ──→  D = 13 km/h       ~~
  ~~  Upstream:   ──→ ←──  U = 9 km/h        ~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  D = B + S = 13
  U = B - S = 9

  Boat speed (still water) = (D + U) / 2
                           = (13 + 9) / 2
                           = 22 / 2
                           = 11 km/h  ✓

  Stream speed = (D - U) / 2
               = (13 - 9) / 2
               = 4 / 2
               = 2 km/h  ✓

  VERIFY: 11+2 = 13 (downstream) ✓
          11-2 = 9  (upstream)   ✓
```

---

## Type 2: Find Upstream/Downstream Speed

**Q: Boat speed in still water is 10 km/h. Stream speed is 3 km/h. Find upstream and downstream speeds.**

```
  B = 10 km/h,  S = 3 km/h

  ~~~~~~~~~~~~ RIVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~  ──→ Boat(10)  ──→ Stream(3)             ~~
  ~~  Downstream = B + S = 10 + 3 = 13 km/h  ~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  ~~~~~~~~~~~~ RIVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~  ──→ Boat(10)  ←── Stream(3)             ~~
  ~~  Upstream   = B - S = 10 - 3 = 7 km/h   ~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Downstream = 13 km/h ✓
  Upstream   = 7 km/h  ✓
```

---

## Type 3: Find Time for Round Trip

**Q: A boat travels 24 km downstream and returns. Boat speed = 8 km/h, stream = 4 km/h. Total time?**

```
       START ◄────── 24 km ──────► PLACE
  ~~~~~~~~~~~~ RIVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~  GO:     ──→ ──→  B+S = 8+4 = 12 km/h   ~~
  ~~  RETURN: ──→ ←──  B-S = 8-4 = 4 km/h    ~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Time downstream = 24 / 12 = 2 hours
  Time upstream   = 24 / 4  = 6 hours

  Total time = 2 + 6 = 8 hours ✓

  FORMULA:  T = D/(B+S) + D/(B-S)
            T = 2DB / (B^2 - S^2)
              = 2×24×8 / (64-16)
              = 384 / 48
              = 8 hours ✓
```

---

## Type 4: Find Distance Given Upstream/Downstream Times

**Q: A boat takes 3 hours to go downstream and 5 hours to come back upstream. Boat = 8 km/h, stream = 2 km/h. Distance?**

```
  B = 8, S = 2
  Downstream = B + S = 10 km/h
  Upstream   = B - S = 6 km/h

  Since distance is same both ways:

  D = Downstream speed × T_down
    = 10 × 3
    = 30 km ✓

  VERIFY:
  Time upstream = 30 / 6 = 5 hours ✓

  NOTE: D_down must equal D_up (same distance)
  If T_down and T_up given, also:
    (B+S) × T_down = (B-S) × T_up
    D = either side
```

---

## Type 5: Man Rows Upstream and Downstream — Find Distance

**Q: A man rows 48 km downstream in 4 hours and 36 km upstream in 6 hours. Find boat and stream speed.**

```
  ~~~~~~~~~~~~ RIVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~  Downstream: 48 km in 4 hrs              ~~
  ~~    ──→ ──→  D = 48/4 = 12 km/h           ~~
  ~~                                          ~~
  ~~  Upstream: 36 km in 6 hrs                ~~
  ~~    ──→ ←──  U = 36/6 = 6 km/h            ~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Step 1: Find effective speeds
    Downstream speed = 48/4 = 12 km/h
    Upstream speed   = 36/6 = 6 km/h

  Step 2: Find boat & stream
    Boat speed  = (12 + 6) / 2 = 9 km/h ✓
    Stream speed = (12 - 6) / 2 = 3 km/h ✓

  VERIFY: 9+3=12 (down) ✓  9-3=6 (up) ✓
```

---

## Type 6: Speed of Stream Given Upstream and Downstream Times for Same Distance

**Q: A boat takes 2 hours to go 20 km downstream and 4 hours to return upstream. Find stream speed.**

```
  Distance = 20 km (same both ways)

  ~~~ DOWNSTREAM ~~~      ~~~ UPSTREAM ~~~
  ──→ ──→                 ──→ ←──
  20 km in 2 hrs          20 km in 4 hrs

  Downstream speed = 20/2 = 10 km/h
  Upstream speed   = 20/4 = 5 km/h

  Stream speed = (D - U) / 2
               = (10 - 5) / 2
               = 5 / 2
               = 2.5 km/h ✓

  Boat speed = (10+5)/2 = 7.5 km/h ✓
```

---

## Type 7: Average Speed for Round Trip

**Q: Boat speed = 12 km/h, stream = 4 km/h. Find average speed for a round trip.**

```
       START ◄────── D km ──────► PLACE
  ~~~~~~~~~~~~ RIVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~  DOWN: B+S = 12+4 = 16 km/h              ~~
  ~~  UP:   B-S = 12-4 = 8 km/h               ~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Average speed = 2 × S_down × S_up / (S_down + S_up)
                = 2 × 16 × 8 / (16 + 8)
                = 256 / 24
                = 32/3
                = 10.67 km/h ✓

  ALT FORMULA:
  Avg speed = (B^2 - S^2) / B
            = (144 - 16) / 12
            = 128 / 12
            = 32/3 = 10.67 km/h ✓

  NOTE: Average speed for round trip is ALWAYS
        less than still water speed!
        (upstream slows you down more than
         downstream speeds you up)
```

---

## Type 8: Time to Row to a Place and Come Back

**Q: A man can row 6 km/h in still water. Stream = 2 km/h. Time to row 16 km and come back?**

```
       HOME ◄────── 16 km ──────► PLACE
  ~~~~~~~~~~~~ RIVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~  DOWN: B+S = 6+2 = 8 km/h                ~~
  ~~  UP:   B-S = 6-2 = 4 km/h                ~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Time downstream = 16 / 8 = 2 hours
  Time upstream   = 16 / 4 = 4 hours

  Total time = 2 + 4 = 6 hours ✓

  SHORTCUT:
  T = 2DB / (B^2 - S^2)
    = 2 × 16 × 6 / (36 - 4)
    = 192 / 32
    = 6 hours ✓
```

---

## Type 9: If Boat Speed Doubles, New Time for Round Trip

**Q: Boat = 5 km/h, stream = 1 km/h, distance = 24 km. If boat speed doubles, new round trip time?**

```
  ORIGINAL: B = 5, S = 1
  ~~~ DOWN: 5+1 = 6 km/h ~~~
  ~~~ UP:   5-1 = 4 km/h ~~~
  T_old = 24/6 + 24/4 = 4 + 6 = 10 hrs

  DOUBLED: B' = 10, S = 1
  ~~~ DOWN: 10+1 = 11 km/h ~~~
  ~~~ UP:   10-1 = 9 km/h  ~~~

  New time = 24/11 + 24/9
           = 2.18 + 2.67
           = 4.85 hours ✓

  FORMULA:
  T_new = D/(2B+S) + D/(2B-S)
        = 24/11 + 24/9
        = (24×9 + 24×11) / (11×9)
        = (216 + 264) / 99
        = 480/99
        = 160/33
        = 4.85 hours ✓

  KEY: Stream speed does NOT change!
       Only boat speed doubles.
```

---

## Type 10: Man Rows X km/h Still Water, Stream Y km/h — Time to Go D km and Return

**Q: Man rows 8 km/h in still water. Stream 2 km/h. Time to go 30 km and return?**

```
       HOME ◄────── 30 km ──────► DEST
  ~~~~~~~~~~~~ RIVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~  B = 8 km/h,  S = 2 km/h                 ~~
  ~~  DOWN = 8+2 = 10 km/h                    ~~
  ~~  UP   = 8-2 = 6 km/h                     ~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Time down = 30/10 = 3 hours
  Time up   = 30/6  = 5 hours
  Total     = 3 + 5 = 8 hours ✓

  SHORTCUT:
  T = 2DB / (B^2 - S^2)
    = 2 × 30 × 8 / (64 - 4)
    = 480 / 60
    = 8 hours ✓
```

---

## Type 11: Boat Takes T1 hrs More Upstream than Downstream — Find Distance

**Q: Boat speed = 10 km/h, stream = 2 km/h. Takes 2 hours more upstream than downstream. Distance?**

```
  B = 10, S = 2
  DOWN = 10+2 = 12 km/h
  UP   = 10-2 = 8 km/h

  Let distance = D

  Time upstream - Time downstream = 2
  D/8 - D/12 = 2

  LCM(8,12) = 24
  3D/24 - 2D/24 = 2
  D/24 = 2
  D = 48 km ✓

  FORMULA:
  T_up - T_down = 2DS / (B^2 - S^2)
  2 = 2 × D × 2 / (100 - 4)
  2 = 4D / 96
  D = 2 × 96 / 4 = 48 km ✓

  VERIFY:
  T_down = 48/12 = 4 hrs
  T_up   = 48/8  = 6 hrs
  Diff = 6 - 4 = 2 hrs ✓
```

---

## Type 12: Swimming Upstream/Downstream (Same as Boat)

**Q: A swimmer swims downstream 30 km in 3 hours and upstream 18 km in 3 hours. Find swimmer speed in still water and stream speed.**

```
  ~~~~~~~~~~~~ RIVER ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ~~  DOWNSTREAM:                              ~~
  ~~  🏊 ──→  ──→ Stream                       ~~
  ~~  30 km in 3 hrs → D = 10 km/h            ~~
  ~~                                          ~~
  ~~  UPSTREAM:                                ~~
  ~~  🏊 ──→  ←── Stream                       ~~
  ~~  18 km in 3 hrs → U = 6 km/h             ~~
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  Swimmer speed (still water) = (D + U) / 2
                              = (10 + 6) / 2
                              = 8 km/h ✓

  Stream speed = (D - U) / 2
               = (10 - 6) / 2
               = 2 km/h ✓

  SAME formulas as boats!
  Replace "boat" with "swimmer" — everything works.

  VERIFY: 8+2=10 (down) ✓  8-2=6 (up) ✓
```
