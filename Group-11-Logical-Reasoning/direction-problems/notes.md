# Direction Problems - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Compass Directions

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  8 Directions:                                                      │
│                                                                     │
│     NW    N    NE          Cardinal: N, S, E, W (90° apart)         │
│       \   |   /            Ordinal:  NE, NW, SE, SW (45° between)   │
│        \  |  /                                                      │
│    W ----+---- E           N = 0°/360°   E = 90°                    │
│        /  |  \             S = 180°       W = 270°                   │
│       /   |   \                                                     │
│     SW    S    SE          NE = 45°  SE = 135°  SW = 225°  NW = 315°│
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Turn Rules

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  RIGHT TURN = Clockwise 90°        LEFT TURN = Anti-clockwise 90°   │
│                                                                     │
│  Face N + Right = E                Face N + Left = W                │
│  Face E + Right = S                Face E + Left = N                │
│  Face S + Right = W                Face S + Left = E                │
│  Face W + Right = N                Face W + Left = S                │
│                                                                     │
│  Cycle (Right): N → E → S → W → N    (clockwise)                   │
│  Cycle (Left):  N → W → S → E → N    (anti-clockwise)              │
│                                                                     │
│  180° turn (about turn) = Opposite direction                        │
│  360° turn = Same direction (full circle)                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Opposite Directions

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  N  ↔  S          NE ↔ SW                                           │
│  E  ↔  W          NW ↔ SE                                           │
│                                                                     │
│  Trick: Flip both letters                                           │
│    N↔S, E↔W, NE↔SW, NW↔SE                                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Shadow Rules (Sun Direction)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  MORNING (Sunrise):  Sun in EAST  → Shadow falls WEST               │
│  EVENING (Sunset):   Sun in WEST  → Shadow falls EAST               │
│  NOON:               Sun overhead → NO shadow (or very short)       │
│                                                                     │
│  Shadow is ALWAYS opposite to the sun                               │
│  Shadow falls BEHIND you when you face the sun                      │
│                                                                     │
│  If shadow is to LEFT → you face SOUTH in morning                   │
│  If shadow is to RIGHT → you face NORTH in morning                  │
│  (Reverse for evening)                                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Pythagoras for Distance

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Distance from start = sqrt(x^2 + y^2)                              │
│                                                                     │
│  Where x = net East-West displacement                               │
│        y = net North-South displacement                             │
│                                                                     │
│  Common Pythagorean triplets (memorize!):                           │
│    3, 4, 5      5, 12, 13     8, 15, 17                             │
│    6, 8, 10     7, 24, 25     9, 40, 41                             │
│    5, 5, 5sqrt2 (45-45-90)                                          │
│                                                                     │
│  Displacement direction:                                            │
│    tan(angle) = opposite / adjacent                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Direction of Final Position

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  After finding (x, y) displacement from start:                      │
│                                                                     │
│  x > 0, y > 0 → North-East         x < 0, y > 0 → North-West      │
│  x > 0, y < 0 → South-East         x < 0, y < 0 → South-West      │
│  x = 0, y > 0 → North              x = 0, y < 0 → South           │
│  x > 0, y = 0 → East               x < 0, y = 0 → West            │
│                                                                     │
│  Convention: x = East(+)/West(-)    y = North(+)/South(-)           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Compass Rose & Turn Logic

```
THE COMPASS ROSE:

         N (0°)
         |
   NW    |    NE
    \    |    /
     \   |   /
      \  |  /
 W ----START---- E (90°)
      /  |  \
     /   |   \
    /    |    \
   SW    |    SE
         |
         S (180°)

HOW TURNS WORK:
  Right turn = rotate clockwise 90°
  Left turn  = rotate anti-clockwise 90°

TRACKING MOVEMENT:
  1. Start at origin (0, 0)
  2. Track current facing direction
  3. On "turn right/left" → update direction
  4. On "walk X km" → add to displacement
  5. Final position = (total_x, total_y)

  North → y += distance     South → y -= distance
  East  → x += distance     West  → x -= distance

FINAL DISTANCE FROM START:
  d = sqrt(x^2 + y^2)
```

---

## Type 1: Basic Directions — Identify Position

**Q: A person is facing North. He walks 5 km straight. Where is he now relative to his starting point?**

```
         N
         |
    5 km |  (walks North)
         |
       START

He walks 5 km North → displacement = (0, +5)

Position: 5 km NORTH of starting point ✓

KEY: Walking in a direction = moving along
     that compass direction
```

---

## Type 2: Left Turn / Right Turn from a Direction

**Q: A man is facing East. He turns right. Which direction is he facing now?**

```
         N
         |
    W ---+--- E  (initially facing East)
         |
         S

RIGHT turn = Clockwise 90°

         N
         |
    W ---+--- E
         |
         S  ← Now facing South

Face East + Right turn = Face South ✓

FULL TABLE (Right Turns):
  N → E → S → W → N  (clockwise)

FULL TABLE (Left Turns):
  N → W → S → E → N  (anti-clockwise)
```

---

## Type 3: Opposite Direction

**Q: A girl is walking towards North-East. What is the direction exactly behind her?**

```
     NW    N    NE  ← She faces this way
       \   |   /
        \  |  /
    W ---+--- E
        /  |  \
       /   |   \
     SW    S    SE

Opposite of NE = SW

Rule: Flip both letters
  N ↔ S,  E ↔ W
  NE → SW,  NW → SE

Direction behind her = South-West ✓
```

---

## Type 4: Starting Point & Final Position After Multiple Turns

**Q: A man starts facing North. He walks 5 km, turns right, walks 3 km, turns right, walks 5 km. Where is he relative to start?**

```
  Step 1: Face N, walk 5 km North
  Step 2: Turn right → face E, walk 3 km East
  Step 3: Turn right → face S, walk 5 km South

       START ──────────── B
         |    3 km (East)  |
   5 km  |                 | 5 km
  (North)|                 | (South)
         A ──────────── FINAL

  North: +5, South: -5 → net y = 0
  East: +3             → net x = +3

  Final position: 3 km EAST of start ✓
```

---

## Type 5: Distance from Starting Point (Pythagoras)

**Q: Rohan walks 4 km North, then turns right and walks 3 km East. How far is he from the starting point?**

```
         B ──────── FINAL
         |    3 km    |
   4 km  |            |
         |            |
       START          |
         |◄── 3 km ──►|

  Displacement: x = 3 (East), y = 4 (North)

         FINAL
        /|
       / |
    d /  | 4 km (North)
     /   |
    /    |
  START── 
    3 km (East)

  d = sqrt(3^2 + 4^2)
    = sqrt(9 + 16)
    = sqrt(25)
    = 5 km ✓

  Pythagorean triplet: 3, 4, 5
```

---

## Type 6: Direction of Final Position from Start

**Q: A man walks 6 km South and then 8 km East. In which direction is he from the starting point?**

```
  START ─────────────────
    |                    \
    | 6 km               \  ← direction from
    | (South)             \    start to final
    |                      \
    └──────────────── FINAL
         8 km (East)

  Displacement: x = +8 (East), y = -6 (South)

  x > 0, y < 0 → South-East direction

  He is in the SOUTH-EAST of the start ✓

  Exact angle: tan(θ) = 6/8 = 3/4
  θ = arctan(0.75) ≈ 36.87° from East toward South
```

---

## Type 7: Shadow-Based Direction Problems

**Q: One morning Suresh was walking. His shadow fell to his left. Which direction was he facing?**

```
  MORNING → Sun rises in EAST
  Shadow falls OPPOSITE to sun → shadow falls WEST

         N
         |
  (shadow) W ---+--- E (sun)
         |
         S

  Shadow to his LEFT → West is on his left

  If West is on LEFT, he faces NORTH

       LEFT = W    FRONT = N    RIGHT = E
              ↑
         He faces North ✓

  TRICK:
    Morning + shadow LEFT  → facing NORTH
    Morning + shadow RIGHT → facing SOUTH
    Morning + shadow FRONT → facing WEST
    Morning + shadow BACK  → facing EAST

    Evening → all rules REVERSE!
```

---

## Type 8: Shortest Distance Between Two Points

**Q: A walks 3 km North, 4 km East. B walks 1 km North, 8 km East from the same start. Shortest distance between A and B?**

```
  A's position: x = 4, y = 3
  B's position: x = 8, y = 1

         B(8,1)
  A(4,3) ─────────────── 
    |          4 (East)  |
    | 2 (South)          |
    └────────────────────

  Diff: dx = 8 - 4 = 4,  dy = 1 - 3 = -2

  Distance = sqrt(4^2 + 2^2)
           = sqrt(16 + 4)
           = sqrt(20)
           = 2*sqrt(5)
           ≈ 4.47 km ✓
```

---

## Type 9: Multiple People Moving — Relative Position

**Q: A and B start from the same point. A walks 5 km North. B walks 5 km East. In which direction is A from B?**

```
              A (0, 5)
              |
        5 km  |
              |
  START ─────────── B (5, 0)
              5 km

  A relative to B:
    dx = 0 - 5 = -5 (West)
    dy = 5 - 0 = +5 (North)

  x < 0, y > 0 → North-West

  A is in the NORTH-WEST of B ✓

  CAUTION: "A from B" = look from B toward A
  So calculate A's position MINUS B's position
```

---

## Type 10: Clockwise and Anti-Clockwise Turns

**Q: A person facing North makes 3 clockwise 90-degree turns and then 1 anti-clockwise 90-degree turn. Which direction is he facing?**

```
  Start: facing NORTH

  Clockwise (right) turns:
    1st: N → E
    2nd: E → S
    3rd: S → W
  Now facing: WEST

  Anti-clockwise (left) turn:
    W → S
  Now facing: SOUTH ✓

  SHORTCUT:
    Net rotation = (3 × 90°CW) + (1 × 90°CCW)
                 = 270° CW - 90° CW
                 = 180° CW
    N + 180° = S ✓

    Or: Net right turns = 3 - 1 = 2
    2 right turns from N:
      N → E → S ✓
```

---

## Type 11: Chain Walk Problem (Classic)

**Q: A walks 5 km North, turns right and walks 3 km, turns right and walks 2 km, turns left and walks 4 km. How far and in which direction is he from the start?**

```
  Step 1: Face N, walk 5 km North     → (0, 5)
  Step 2: Turn R → face E, walk 3 km  → (3, 5)
  Step 3: Turn R → face S, walk 2 km  → (3, 3)
  Step 4: Turn L → face E, walk 4 km  → (7, 3)

  START (0,0)
    |
    | 5 km N            C(3,3)───4km E───FINAL(7,3)
    |                   |
    A(0,5)──3km E──B(3,5)

  Displacement: x = 7 (East), y = 3 (North)

  Distance = sqrt(7^2 + 3^2)
           = sqrt(49 + 9) = sqrt(58) ≈ 7.62 km

  Direction: x > 0, y > 0 → NORTH-EAST ✓
```

---

## Type 12: Direction After Multiple 90°/180° Turns

**Q: A person facing South turns 90° clockwise, then 180°, then 90° anti-clockwise. Which direction is he now facing?**

```
  Start: facing SOUTH

  Turn 1: 90° CW (right)  → S → W
  Turn 2: 180°             → W → E  (opposite)
  Turn 3: 90° CCW (left)   → E → N

  Final direction: NORTH ✓

  SHORTCUT:
    Total CW rotation = 90° + 180° - 90° = 180°
    S + 180° CW = N ✓

    Each 90° CW = 1 step right in N→E→S→W cycle
    Each 90° CCW = 1 step left
    180° = 2 steps right (or opposite)
    360° = full circle (same direction)
```
