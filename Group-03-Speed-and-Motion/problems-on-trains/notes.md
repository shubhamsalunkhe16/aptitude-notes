# Problems on Trains - Aptitude Tricks Cheatsheet

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
│  km/h → m/s : multiply by 5/18                                     │
│  m/s → km/h : multiply by 18/5                                     │
│                                                                     │
│  Quick: 36 km/h = 10 m/s    72 km/h = 20 m/s                       │
│         54 km/h = 15 m/s    90 km/h = 25 m/s                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Speed-Time-Length Table

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  What is crossing what?    │  Distance to cover                     │
│  ─────────────────────────┼───────────────────────                  │
│  Train → Pole/Person       │  L (train length)                      │
│  Train → Platform/Bridge   │  L + P (train + platform)              │
│  Train → Another Train     │  L1 + L2 (both lengths)                │
│  Train → Tunnel            │  L + T (train + tunnel)                │
│                                                                     │
│  Speed to use?             │                                        │
│  ─────────────────────────┼───────────────────────                  │
│  Object is stationary      │  Speed of train                        │
│  Same direction            │  S1 - S2 (subtract)                    │
│  Opposite direction        │  S1 + S2 (add)                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Visual Guide

```
Every train problem = Time = Distance / Speed

Figure out 3 things:
  1. DISTANCE → What lengths to add?
  2. SPEED    → Relative or absolute?
  3. UNITS    → Convert km/h ↔ m/s


  ╔═══ WHAT IS THE TRAIN CROSSING? ═══╗

  ① POLE / PERSON (no length)
     ┌─────────────┐
     │  Train (L)   │──────→ S
     └─────────────┘
              |
     Distance = L only

  ② PLATFORM / BRIDGE (has length)
     ┌─────────────┐  ╠══════════════╣
     │  Train (L)   │──→  Platform (P)
     └─────────────┘  ╠══════════════╣
     |◄──────── L + P ────────►|
     Distance = L + P

  ③ ANOTHER TRAIN
     ┌─────────────┐    ┌──────────┐
     │  Train1 (L1) │──→ │Train2(L2)│
     └─────────────┘    └──────────┘
     |◄──────── L1 + L2 ─────────►|
     Distance = L1 + L2

  ④ TUNNEL
     ┌─────────────┐  ████████████████████
     │  Train (L)   │──→  Tunnel (T)
     └─────────────┘  ████████████████████
     Inside: Distance = T - L
     Exits:  Distance = T + L


  ╔═══ WHAT SPEED TO USE? ═══╗

  SAME DIRECTION (overtaking):
     ──→ S1        ──→ S2
     Relative = S1 - S2

  OPPOSITE DIRECTION (crossing):
     ──→ S1        ←── S2
     Relative = S1 + S2

  STATIONARY object:
     ──→ S         |  (pole/platform)
     Speed = S (train's own speed)
```

---

## Type 1: Train Crossing a Pole / Standing Person

**Q: A train 150m long passes a pole in 15 seconds. Find speed in km/h.**

```
     ┌─────────────────┐
     │  Train (150m)    │──────→ S = ?
     └─────────────────┘
              |
              pole

Distance = 150 m (pole has NO length)
Time = 15 sec

Speed = 150 / 15 = 10 m/s
      = 10 × 18/5 = 36 km/h ✓
```

---

## Type 2: Train Crossing a Platform / Bridge

**Q: A train 200m long crosses a 300m platform in 25 seconds. Find speed.**

```
     ┌──────────────┐  ╠═══════════════════╣
     │ Train (200m)  │──→  Platform (300m)
     └──────────────┘  ╠═══════════════════╣
     |◄────────── 500m ──────────────────►|

Distance = 200 + 300 = 500 m
Time = 25 sec

Speed = 500 / 25 = 20 m/s = 72 km/h ✓
```

---

## Type 3: Find Length of Train

**Q: A train at 72 km/h crosses a pole in 10 sec. Find train length.**

```
     ┌───────── ? m ──────────┐
     │       Train             │──────→ 72 km/h
     └────────────────────────┘
                  |
                 pole

Speed = 72 × 5/18 = 20 m/s

Length = Speed × Time = 20 × 10 = 200 m ✓
```

---

## Type 4: Find Length of Platform

**Q: A 250m train at 90 km/h crosses a platform in 30 sec. Platform length?**

```
     ┌──────────────┐  ╠════════ ? m ════════╣
     │ Train (250m)  │──→   Platform (?)
     └──────────────┘  ╠═════════════════════╣

Speed = 90 × 5/18 = 25 m/s
Total = 25 × 30 = 750 m

Platform = 750 - 250 = 500 m ✓
```

---

## Type 5: Find Time to Cross

**Q: A 300m train at 54 km/h crosses a 200m bridge. Time?**

```
     ┌──────────────┐  ╠════════════════╣
     │ Train (300m)  │──→  Bridge (200m)
     └──────────────┘  ╠════════════════╣

Speed = 54 × 5/18 = 15 m/s
Distance = 300 + 200 = 500 m

Time = 500 / 15 = 33.33 sec ✓
```

---

## Type 6: Two Trains — Opposite Direction

**Q: Trains 150m & 200m at 40 & 32 km/h opposite. Time to cross?**

```
     ┌──────────────┐              ┌───────────────┐
     │ Train1 (150m) │ ────→  ←──── │ Train2 (200m)  │
     └──────────────┘    40    32   └───────────────┘
     |◄──────────── 350m ─────────────────────────►|

  Opposite → ADD speeds
  Relative = 40 + 32 = 72 km/h = 20 m/s

  Time = 350 / 20 = 17.5 sec ✓
```

---

## Type 7: Two Trains — Same Direction (Overtaking)

**Q: Trains 100m & 150m at 60 & 40 km/h same dir. Time to overtake?**

```
     ┌──────────────┐    ┌───────────────┐
     │ Train1 (100m) │──→ │ Train2 (150m)  │──→
     └──────────────┘ 60  └───────────────┘ 40
     |◄──────────── 250m ────────────────►|

  Same dir → SUBTRACT speeds
  Relative = 60 - 40 = 20 km/h = 50/9 m/s

  Time = 250 × 9/50 = 45 sec ✓
```

---

## Type 8: Train + Moving Person — Same Direction

**Q: 200m train at 60 km/h crosses man walking 6 km/h same dir. Time?**

```
     ┌──────────────────┐        🚶
     │  Train (200m)     │─────→  ──→
     └──────────────────┘  60     6

  Same dir → SUBTRACT
  Relative = 60 - 6 = 54 km/h = 15 m/s
  Distance = 200 m (person = NO length)

  Time = 200 / 15 = 13.33 sec ✓
```

---

## Type 9: Train + Moving Person — Opposite Direction

**Q: 180m train at 72 km/h crosses man running 18 km/h opposite. Time?**

```
     ┌──────────────────┐   🚶
     │  Train (180m)     │─→  ←─
     └──────────────────┘ 72  18

  Opposite → ADD
  Relative = 72 + 18 = 90 km/h = 25 m/s
  Distance = 180 m

  Time = 180 / 25 = 7.2 sec ✓
```

---

## Type 10: Two Trains — Find Speed of One

**Q: Trains 120m & 180m cross in 12 sec opposite. S1 = 50 km/h. S2 = ?**

```
  ──→ (120m)    (180m) ←──
   50 km/h       ? km/h

Distance = 120 + 180 = 300 m
RelSpeed = 300/12 = 25 m/s = 90 km/h

Opposite: S1 + S2 = 90
          50 + S2 = 90
              S2 = 40 km/h ✓
```

---

## Type 11: Two Trains — Find Length of One

**Q: Trains at 36 & 54 km/h opposite. L1 = 100m. Cross in 10 sec. L2 = ?**

```
  ──→ (100m)    (? m) ←──
   36 km/h     54 km/h

RelSpeed = 36+54 = 90 km/h = 25 m/s
Total = 25 × 10 = 250 m

L2 = 250 - 100 = 150 m ✓
```

---

## Type 12: Train Crosses Pole AND Platform — Find L & S

**Q: Train crosses pole in 12 sec, 240m platform in 24 sec. Find L and S.**

```
  Scenario 1:           Scenario 2:
  ┌───── L ─────┐       ┌───── L ─────┐ ╠═══ 240m ═══╣
  │   Train     │→|      │   Train     │→  Platform
  └─────────────┘        └─────────────┘
  Time = 12 sec          Time = 24 sec

TRICK: Subtract the two scenarios
  Extra distance = 240m (platform)
  Extra time = 24 - 12 = 12 sec

  Speed = 240 / 12 = 20 m/s = 72 km/h ✓
  L = 20 × 12 = 240 m ✓
```

---

## Type 13: Train and Man on Bridge

**Q: Man at end of 200m bridge. 300m train at 36 km/h approaching. Time for man to escape?**

```
                        ╠════ 200m ════╣
  ┌──────────────┐      ║   Bridge     ║🚶 (man at end)
  │ Train (300m)  │───→  ╠══════════════╣
  └──────────────┘ 10m/s

  Speed = 36 × 5/18 = 10 m/s

  Train must cross entire bridge to reach man
  Distance = 200 m (bridge length)
  Time = 200 / 10 = 20 sec ✓

  KEY: Man's position on bridge matters!
```

---

## Type 14: Train Crossing a Tunnel

**Q: 500m train at 108 km/h enters 2000m tunnel. Time to be fully inside? Time to fully exit?**

```
  Speed = 108 × 5/18 = 30 m/s

  FULLY INSIDE (hidden):
  ┌──────┐
  │Train │  ████████████████████████████
  └──────┘  ██   Tunnel (2000m)      ██
            ████████████████████████████
  |◄─── T - L = 2000-500 = 1500m ──►|
  Time = 1500/30 = 50 sec ✓

  FULLY EXITS (passes through):
            ████████████████████████████
            ██   Tunnel (2000m)      ██  ┌──────┐
            ████████████████████████████  │Train │
                                         └──────┘
  |◄──── T + L = 2000+500 = 2500m ────►|
  Time = 2500/30 = 83.33 sec ✓

  Inside: T - L    Exits: T + L
```

---

## Type 15: Two Trains from Distance Apart — When They Meet

**Q: Trains start from A & B, 450 km apart, towards each other at 60 & 90 km/h. When do they meet?**

```
  A ─────────── 450 km ──────────── B
  ──→ 60 km/h              90 km/h ←──

  Relative Speed = 60 + 90 = 150 km/h

  Time = 450 / 150 = 3 hours ✓

  Where they meet (from A):
    Distance from A = 60 × 3 = 180 km
    Distance from B = 90 × 3 = 270 km
    Check: 180 + 270 = 450 ✓
```

---

## Type 16: Speed Change — Same Train, Different Speeds

**Q: Train crosses pole in 20 sec at 54 km/h. At 72 km/h, time = ?**

```
  Scenario 1: 54 km/h, 20 sec
  Scenario 2: 72 km/h, ? sec

  Method 1 (calculate L):
    S = 54 × 5/18 = 15 m/s
    L = 15 × 20 = 300 m
    New S = 72 × 5/18 = 20 m/s
    T = 300/20 = 15 sec ✓

  SHORTCUT (ratio):
    Speed ratio = 54:72 = 3:4
    Time ratio = 4:3 (INVERSE!)
    New time = 20 × 3/4 = 15 sec ✓

  Speed ↑ → Time ↓ (inverse proportion)
```

---

## Type 17: Man in Moving Train Sees Another Train

**Q: Man in train at 50 km/h sees goods train (opposite, 40 km/h) pass in 9 sec. Goods train length?**

```
  ──→ Man's train (50)    ←── Goods train (40)
       man = point              L = ?

  Relative = 50 + 40 = 90 km/h = 25 m/s
  Distance = L (goods train only, man is a point)

  L = 25 × 9 = 225 m ✓
```

---

## Type 18: Crosses a Man IN Another Train

**Q: 150m train crosses a man sitting in 100m train (same dir). Takes 10 sec. Second train = 36 km/h. First train speed?**

```
  ┌──────────────┐     ┌───────────┐
  │ Train1 (150m) │──→  │Train2 🚶  │──→
  └──────────────┘ S1   └───────────┘ 36

  Distance = 150 m ONLY (man is a point!)
  NOT 150 + 100!

  RelSpeed = 150/10 = 15 m/s = 54 km/h
  Same dir: S1 - 36 = 54
  S1 = 90 km/h ✓

  TRAP: "man IN train" → first train length only
        "crosses the train" → both lengths
```

---

## Type 19: Both Cross Pole — Find Time to Cross Each Other

**Q: Train A crosses pole in 20 sec, Train B in 30 sec. Equal length. Cross each other (opposite)?**

```
  ──→ A (L m)        (L m) ←──
  pole: 20 sec      pole: 30 sec

  SHORTCUT (equal length only):

  Opposite: T = 2 × T1 × T2 / (T1 + T2)
          = 2 × 20 × 30 / (20 + 30)
          = 1200 / 50
          = 24 sec ✓

  Same dir: T = 2 × T1 × T2 / (T1 - T2)
          = 2 × 20 × 30 / (30 - 20)
          = 1200 / 10
          = 120 sec ✓

  WHY: Speeds = L/T1, L/T2. Dist = 2L.
       Formula cancels out L.
```

---

## Type 20: Late/Early at Different Speeds — Find Distance

**Q: A train travels from city A to city B. If it runs at 40 km/h, it arrives 10 minutes late. If it runs at 60 km/h, it arrives 10 minutes early. Find the distance between A and B.**

```
  ──→ 40 km/h ... arrives 10 min LATE
  ──→ 60 km/h ... arrives 10 min EARLY

  DIRECT FORMULA:

          S1 × S2 × (T1 + T2)
  D  =  ─────────────────────
              S2 - S1

  T1+T2 = 10+10 = 20 min = 1/3 hr
  (one late + one early → ADD)

  D = 40 × 60 × (1/3) / (60-40)
    = 800 / 20
    = 40 km ✓

  ┌─────────────────────────────────────┐
  │ Both late   → use T1 - T2 (diff)   │
  │ Both early  → use T1 - T2 (diff)   │
  │ Late+Early  → use T1 + T2 (add)    │
  │ ALWAYS convert min → hrs first!    │
  └─────────────────────────────────────┘
```
