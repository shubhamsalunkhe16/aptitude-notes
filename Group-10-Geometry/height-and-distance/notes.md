# Height and Distance - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Trigonometric Ratios

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  In a right triangle:                                               │
│                                                                     │
│         /|                sin θ = Opposite / Hypotenuse             │
│        / |                cos θ = Adjacent / Hypotenuse             │
│   H   /  | O             tan θ = Opposite / Adjacent               │
│      /   |                                                          │
│     / θ  |                Height problems mostly use:               │
│    /_____|                  tan θ = Perpendicular / Base            │
│       A                                                             │
│                                                                     │
│  H = Hypotenuse, O = Opposite, A = Adjacent                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Standard Trig Values Table

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   Angle │  sin θ    │  cos θ    │  tan θ    │  Decimal tan          │
│  ───────┼───────────┼───────────┼───────────┼──────────────         │
│   30°   │  1/2      │  √3/2     │  1/√3     │  0.577                │
│   45°   │  1/√2     │  1/√2     │  1        │  1.000                │
│   60°   │  √3/2     │  1/2      │  √3       │  1.732                │
│                                                                     │
│  Memory trick:                                                      │
│   sin → √1/2, √2/2, √3/2  (for 30°, 45°, 60°)                     │
│   cos → reverse of sin                                              │
│   tan 30° × tan 60° = 1    (complementary)                         │
│                                                                     │
│  Useful: √3 ≈ 1.732,  1/√3 ≈ 0.577,  √2 ≈ 1.414                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Height & Distance Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Angle of Elevation:                                                │
│     tan θ = Height / Distance                                       │
│     Height = Distance × tan θ                                       │
│     Distance = Height / tan θ                                       │
│                                                                     │
│  Angle of Depression:                                               │
│     Angle of depression = Angle of elevation (alternate angles)     │
│                                                                     │
│  Two angles from same point (tower on hill):                        │
│     Total Height = d × tan α  (α = angle to top)                   │
│     Partial Height = d × tan β  (β = angle to middle)              │
│     Remaining = d × (tan α - tan β)                                 │
│                                                                     │
│  Two observation points (same side):                                │
│     h = d × tan α × tan β / (tan α - tan β)                        │
│     where d = distance between two points                           │
│                                                                     │
│  Shadow formula:                                                    │
│     tan θ = Height of object / Length of shadow                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Angle of Elevation vs Depression

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ELEVATION — looking UP from horizontal                             │
│                                                                     │
│          * Top                                                      │
│         /|                                                          │
│        / |                                                          │
│       /  |  Height                                                  │
│      / θ |                                                          │
│  Eye/────┘                                                          │
│   ← Horizontal line                                                 │
│                                                                     │
│  DEPRESSION — looking DOWN from horizontal                          │
│                                                                     │
│  Eye────── Horizontal line                                          │
│      \ θ                                                            │
│       \                                                             │
│        \                                                            │
│         * Object below                                              │
│                                                                     │
│  NOTE: Angle of depression from top = Angle of elevation            │
│        from bottom (alternate interior angles, parallel lines)      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Visual Guide

```
  ╔═══ THE HEIGHT-DISTANCE RIGHT TRIANGLE ═══╗

               T (top)
               |\
               | \
               |  \   Line of Sight
     Height h  |   \
               |    \
               |  θ  \
               |______\
              B        O (Observer)
              ← dist d →

  tan θ = h / d     →  h = d × tan θ
                     →  d = h / tan θ
                     →  θ = arctan(h/d)


  ╔═══ STEP-BY-STEP APPROACH ═══╗

  Step 1: Draw the figure — mark right angle at base
  Step 2: Identify what is given (angle, height, or distance)
  Step 3: Identify what to find
  Step 4: Use tan θ = Perpendicular / Base
  Step 5: Substitute trig values and solve
  Step 6: Rationalize if needed (multiply by √3/√3 etc.)
```

---

## Type 1: Find Height Using Angle of Elevation (Basic tan)

**Q: A man standing 40m from the base of a tower observes the top at an angle of elevation of 60°. Find the height of the tower.**

```
               T
               |\
               | \
               |  \
     h = ?     |   \
               |    \
               | 60° \
               |______\
              B   40m   O (Man)

  tan 60° = h / 40
  √3 = h / 40
  h = 40√3
  h = 40 × 1.732
  h = 69.28 m ✓

  TRICK: tan 60° = √3 → height = base × √3
```

---

## Type 2: Find Distance from Base Using Angle

**Q: The angle of elevation of the top of a 50m tower from a point on the ground is 30°. Find the distance of the point from the base.**

```
               T
               |\
               | \
               |  \
     50 m      |   \
               |    \
               | 30° \
               |______\
              B  d=?   O

  tan 30° = 50 / d
  1/√3 = 50 / d
  d = 50√3
  d = 50 × 1.732
  d = 86.6 m ✓

  TRICK: tan 30° = 1/√3 → distance = height × √3
```

---

## Type 3: Two Angles of Elevation from Two Points (Same Side)

**Q: The angles of elevation of the top of a tower from two points on the ground at distances 'a' and 'b' from the base (same side) are 60° and 30° respectively. Find the height of the tower.**

```
               T
               |\
               | \
               |  \ \
     h = ?     |   \  \
               |    \   \
               | 60° \ 30°\
               |______\____\
              B   a    P  b  Q
                  ◄─────────►

  From P: tan 60° = h/a → √3 = h/a → a = h/√3
  From Q: tan 30° = h/(a+b) ... OR

  SHORTCUT (two angles, same side):
  From P: tan 60° = h/a → h = a√3
  From Q: tan 30° = h/b → h = b/√3

  Wait — let distance from B to P = d1, B to Q = d2
  tan 60° = h/d1 → d1 = h/√3
  tan 30° = h/d2 → d2 = h√3
  d2 - d1 = distance between P and Q

  Example: If dist between P and Q = 40m:
  h√3 - h/√3 = 40
  h(√3 - 1/√3) = 40
  h(3-1)/√3 = 40
  h × 2/√3 = 40
  h = 20√3 = 34.64 m ✓
```

---

## Type 4: Height of Tower on a Hill

**Q: From a point on the ground, the angles of elevation of the bottom and top of a tower on a hill are 30° and 60° respectively. If the height of the hill is 20m, find the height of the tower.**

```
               T (top of tower)
               |
               | tower = ?
               |
               H (top of hill / bottom of tower)
              /|
             / |
            /  |
           /   | 20 m (hill)
          / 60°|
         / 30° |
        /______|
       O       B
         d

  tan 30° = 20/d → 1/√3 = 20/d → d = 20√3

  tan 60° = (20 + tower)/d
  √3 = (20 + tower)/(20√3)
  √3 × 20√3 = 20 + tower
  20 × 3 = 20 + tower
  60 = 20 + tower
  tower = 40 m ✓

  TRICK: Total height / hill height = tan α / tan β
  (20+t)/20 = tan60°/tan30° = √3/(1/√3) = 3
  20+t = 60 → t = 40 ✓
```

---

## Type 5: Two Towers — Find Distance Between Them

**Q: Two towers of heights 20m and 30m stand on level ground. From the top of the shorter tower, the angle of elevation of the top of the taller tower is 30°. Find the distance between the towers.**

```
         T2 (30m)
         |
   10m   | ← (30-20 = 10m difference)
         |
  T1─────+──── (horizontal line from T1)
  (20m)  |
  |      |
  |      |
  |______|
  A  d=?  B

  From top of shorter tower:
  Difference in height = 30 - 20 = 10 m
  Angle of elevation to top of taller = 30°

  tan 30° = 10 / d
  1/√3 = 10 / d
  d = 10√3
  d = 17.32 m ✓

  KEY: Draw horizontal from top of shorter tower
       Use DIFFERENCE in heights as opposite side
```

---

## Type 6: Shadow Problems (Sun's Angle)

**Q: When the sun's elevation is 45°, the shadow of a pole is 12m. When the elevation becomes 60°, find the length of the shadow.**

```
  When sun's angle = 45°:          When sun's angle = 60°:

       T                                T
       |\                               |\
       | \                              | \
    h  |  \ sun rays              h     |  \ sun rays
       |   \                            |   \
       | 45°\                           | 60°\
       |_____\                          |____\
      B  12m  S1                       B s=? S2

  tan 45° = h/12 → 1 = h/12 → h = 12 m

  tan 60° = h/s → √3 = 12/s → s = 12/√3

  s = 12/√3 × √3/√3 = 12√3/3 = 4√3

  s = 4 × 1.732 = 6.93 m ✓

  TRICK: Shadow = h/tan(angle)
  As sun rises (angle ↑) → shadow gets shorter
  As sun sets (angle ↓) → shadow gets longer
```

---

## Type 7: Angle of Depression

**Q: From the top of a 60m building, the angle of depression of a car on the ground is 30°. Find the distance of the car from the base of the building.**

```
        Horizontal line
   Eye──────────────────
     |\ 30° (depression)
     | \
     |  \
  60m|   \  Line of sight
     |    \
     |     \
     | 30°  \    ← Angle of elevation = 30°
     |_______\      (alternate interior angles)
    B   d=?    C (Car)

  Angle of depression from top = Angle of elevation from ground
  (Alternate interior angles with horizontal parallel lines)

  tan 30° = 60 / d
  1/√3 = 60 / d
  d = 60√3
  d = 60 × 1.732
  d = 103.92 m ✓

  KEY: Depression angle from top = Elevation angle from bottom
```

---

## Type 8: Man on Building Sees Car Approaching

**Q: From the top of a 100m building, a man observes a car approaching. The angle of depression changes from 30° to 60°. Find the distance the car traveled.**

```
        Horizontal
  Eye──────────────────────
    |\  30°     60° |
    |  \           \|
    |    \          \
100m|     \          \
    |      \          \
    |       \          \
    |________\__________\
   B         C2    d     C1
    ◄── d2 ──►◄── dist ──►
    ◄──────── d1 ─────────►

  Position C1 (initial, angle = 30°):
  tan 30° = 100/d1 → 1/√3 = 100/d1 → d1 = 100√3

  Position C2 (final, angle = 60°):
  tan 60° = 100/d2 → √3 = 100/d2 → d2 = 100/√3

  Distance traveled = d1 - d2
    = 100√3 - 100/√3
    = 100(√3 - 1/√3)
    = 100 × (3-1)/√3
    = 100 × 2/√3
    = 200/√3
    = 200√3/3
    = 115.47 m ✓

  TRICK: Car approaches → angle of depression INCREASES
         Car moves away → angle of depression DECREASES
```

---

## Type 9: Ladder Against Wall

**Q: A 10m ladder leans against a wall making an angle of 60° with the ground. Find (a) the height reached on the wall, and (b) the distance of the foot of ladder from the wall.**

```
              W (wall top)
              |
              | h = ?
              |
   Ladder 10m |
             \|
              \
               \  60°
                \_______
                   d=?

  sin 60° = h / 10 (opposite / hypotenuse)
  √3/2 = h / 10
  h = 10 × √3/2 = 5√3 = 8.66 m ✓

  cos 60° = d / 10 (adjacent / hypotenuse)
  1/2 = d / 10
  d = 10 × 1/2 = 5 m ✓

  NOTE: Ladder problems use sin and cos (not just tan)
        because the ladder = HYPOTENUSE

  Verify: h² + d² = (5√3)² + 5² = 75 + 25 = 100 = 10² ✓
```

---

## Type 10: Height Using Two Angles from Same Side

**Q: The angle of elevation of the top of a tower from a point A is 45°. From point B, 30m farther from A (same side), the angle is 30°. Find the height of the tower.**

```
               T (top)
               |\
               | \ \
               |  \  \
     h = ?     |   \   \
               |    \    \
               | 45° \ 30° \
               |______\______\
              Base  A  30m  B
               ◄─d──►
               ◄──d+30──────►

  From A: tan 45° = h/d → 1 = h/d → d = h

  From B: tan 30° = h/(d+30)
          1/√3 = h/(h+30)       [since d = h]
          h + 30 = h√3
          h√3 - h = 30
          h(√3 - 1) = 30
          h = 30/(√3 - 1)

  Rationalize: × (√3+1)/(√3+1)
          h = 30(√3+1) / (3-1)
          h = 30(√3+1) / 2
          h = 15(√3+1)
          h = 15(1.732+1)
          h = 15 × 2.732
          h = 40.98 m ✓

  FORMULA (two angles α, β from same side, gap = d):
  h = d × tan α × tan β / (tan α - tan β)
  h = 30 × 1 × (1/√3) / (1 - 1/√3)
  h = 15(√3+1) ✓
```

---

## Type 11: Flying Kite Problem (String Length + Angle)

**Q: A kite is flying at a height of 75m. The string attached to the kite makes an angle of 60° with the ground. Find the length of the string.**

```
               K (Kite)
              /|
             / |
    string  /  | 75 m
     L = ? /   |
          /    |
         / 60° |
        /______|
       O       B

  sin 60° = 75 / L  (opposite / hypotenuse)
  √3/2 = 75 / L
  L = 75 × 2/√3
  L = 150/√3
  L = 150√3/3
  L = 50√3
  L = 86.6 m ✓

  NOTE: String = HYPOTENUSE → use sin or cos
        If angle + height given → sin θ = h/L → L = h/sin θ
        If angle + ground dist → cos θ = d/L → L = d/cos θ

  EXTRA: Horizontal distance of kite from boy:
  cos 60° = d/L → 1/2 = d/86.6 → d = 43.3 m
  OR: d = 75/tan60° = 75/√3 = 25√3 = 43.3 m
```

---

## Type 12: Lighthouse and Ship Problem

**Q: From the top of a 100m lighthouse, the angles of depression of two ships on opposite sides are 30° and 45°. Find the distance between the ships.**

```
                    Horizontal
          ──────────L──────────
         30° /     |     \ 45°
            /      |      \
           /       |       \
          /   100m |        \
         /         |         \
        /  30°     |    45°   \
       /___________│___________\
      S1     d1    B    d2     S2
      ◄─────────────────────────►
              Total = d1 + d2

  Ship S1 (angle of depression = 30°):
  tan 30° = 100/d1 → 1/√3 = 100/d1 → d1 = 100√3

  Ship S2 (angle of depression = 45°):
  tan 45° = 100/d2 → 1 = 100/d2 → d2 = 100

  Distance between ships = d1 + d2
    = 100√3 + 100
    = 100(√3 + 1)
    = 100(1.732 + 1)
    = 273.2 m ✓

  NOTE: Ships on OPPOSITE sides → ADD distances
        Ships on SAME side → SUBTRACT distances
```
