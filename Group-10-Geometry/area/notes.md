# Area (Mensuration - 2D) - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Rectangle & Square Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  RECTANGLE (L × B):                                                │
│    Area = L × B                                                     │
│    Perimeter = 2(L + B)                                             │
│    Diagonal = √(L² + B²)                                           │
│                                                                     │
│  SQUARE (side a):                                                   │
│    Area = a²                                                        │
│    Perimeter = 4a                                                   │
│    Diagonal = a√2                                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Triangle Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  TRIANGLE (general):                                                │
│    Area = (1/2) × base × height                                    │
│                                                                     │
│  HERON'S FORMULA (sides a, b, c):                                  │
│    s = (a + b + c) / 2   (semi-perimeter)                          │
│    Area = √[s(s-a)(s-b)(s-c)]                                      │
│                                                                     │
│  EQUILATERAL TRIANGLE (side a):                                     │
│    Area = (√3/4) × a²                                              │
│    Height = (√3/2) × a                                             │
│    Perimeter = 3a                                                   │
│                                                                     │
│  RIGHT TRIANGLE:                                                    │
│    Area = (1/2) × leg₁ × leg₂                                     │
│    Hypotenuse = √(leg₁² + leg₂²)                                  │
│                                                                     │
│  ISOSCELES TRIANGLE (equal sides a, base b):                       │
│    Area = (b/4) × √(4a² - b²)                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Circle, Semicircle & Quadrant Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  CIRCLE (radius r):                                                 │
│    Area = πr²                                                       │
│    Circumference = 2πr = πd                                        │
│                                                                     │
│  SEMICIRCLE (radius r):                                             │
│    Area = πr²/2                                                     │
│    Perimeter = πr + 2r = r(π + 2)                                  │
│                                                                     │
│  QUADRANT (radius r):                                               │
│    Area = πr²/4                                                     │
│    Perimeter = πr/2 + 2r = r(π/2 + 2)                              │
│                                                                     │
│  RING / ANNULUS (outer R, inner r):                                 │
│    Area = π(R² - r²)                                               │
│    Width of ring = R - r                                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Parallelogram, Rhombus & Trapezium Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  PARALLELOGRAM (base b, height h):                                 │
│    Area = b × h                                                     │
│    Perimeter = 2(a + b)   (a, b = sides)                           │
│                                                                     │
│  RHOMBUS (diagonals d₁, d₂):                                      │
│    Area = (1/2) × d₁ × d₂                                         │
│    Side = (1/2) × √(d₁² + d₂²)                                    │
│    Perimeter = 4 × side                                            │
│                                                                     │
│  TRAPEZIUM (parallel sides a, b; height h):                        │
│    Area = (1/2) × (a + b) × h                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Sector, Arc & Path Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  SECTOR (angle θ°, radius r):                                      │
│    Area = (θ/360) × πr²                                            │
│    Arc Length = (θ/360) × 2πr                                      │
│    Perimeter of sector = arc + 2r                                  │
│                                                                     │
│  PATH / BORDER AROUND RECTANGLE (width w):                         │
│    OUTER PATH: Area = 2w(L + B + 2w)                               │
│    INNER PATH: Area = 2w(L + B - 2w)                               │
│    PATH ALL AROUND: Area = 2w(L + B) if w << L,B (approx)         │
│                                                                     │
│  CIRCULAR PATH (outer R, inner r):                                  │
│    Area = π(R² - r²) = π(R+r)(R-r)                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Quick Conversion & Special Values

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  π ≈ 22/7 ≈ 3.1416                                                │
│  √2 ≈ 1.414       √3 ≈ 1.732       √5 ≈ 2.236                    │
│                                                                     │
│  1 m² = 10000 cm²                                                  │
│  1 km² = 10⁶ m²                                                   │
│  1 hectare = 10000 m²                                              │
│  1 acre = 4840 sq yards                                            │
│                                                                     │
│  Square inscribed in circle (radius r):                            │
│    Side of square = r√2,  Area = 2r²                               │
│                                                                     │
│  Circle inscribed in square (side a):                              │
│    Radius = a/2,  Area of circle = πa²/4                           │
│                                                                     │
│  Circle circumscribed around square (side a):                      │
│    Radius = a√2/2 = a/√2,  Diagonal = a√2                         │
│                                                                     │
│  Max area for given perimeter → CIRCLE                              │
│  Max rectangular area for given perimeter → SQUARE                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Area and Perimeter Fundamentals

```
           MENSURATION 2D
          /       |        \
         /        |         \
   Perimeter    Area      Diagonal
   (boundary)  (surface)  (corner to
    length      covered     corner)

  Perimeter = total length around shape (unit: m, cm)
  Area = surface enclosed (unit: m², cm²)

  KEY INSIGHT:
  Same perimeter does NOT mean same area!
  Among all shapes with same perimeter:
    Circle has MAXIMUM area
    Among rectangles → Square has max area

  DIMENSION CHANGE RULE:
  ┌─────────────────────────────────────────────────┐
  │ If all lengths scale by factor k:               │
  │   Perimeter scales by k                         │
  │   Area scales by k²                             │
  │                                                 │
  │ If L changes by a%, B changes by b%:            │
  │   % change in area = a + b + (a×b)/100          │
  │   (successive percentage change formula!)       │
  │   Use -ve for decrease                          │
  └─────────────────────────────────────────────────┘

  COMMON SHAPES — AREA ORDER:
    Circle > Square > Equilateral △
    (for same perimeter)
```

---

## Type 1: Area and Perimeter of Rectangle

**Q: A rectangular field is 120 m long and 80 m wide. Find its area, perimeter, and the cost of fencing at Rs.15 per metre.**

```
  ┌──────────── 120 m ────────────┐
  │                                │
  │                                │ 80 m
  │          RECTANGLE             │
  │                                │
  └──────────── 120 m ────────────┘

  Area = L × B = 120 × 80 = 9600 m² ✓

  Perimeter = 2(L + B)
            = 2(120 + 80)
            = 2 × 200 = 400 m ✓

  Cost of fencing = Perimeter × Rate
                  = 400 × 15
                  = Rs.6000 ✓

  TRICK: If area & perimeter given, find L, B:
    L + B = P/2,  L × B = Area
    → Solve quadratic or use:
    L - B = √[(L+B)² - 4LB]
```

---

## Type 2: Area and Perimeter of Square

**Q: The area of a square field is 5625 m². Find the side, perimeter, and cost of fencing at Rs.12 per metre.**

```
  ┌──────── a ────────┐
  │                    │
  │       SQUARE       │ a
  │     Area = a²      │
  │                    │
  └──────── a ────────┘

  Area = a² = 5625
  Side a = √5625 = 75 m ✓

  Perimeter = 4a = 4 × 75 = 300 m ✓

  Cost = 300 × 12 = Rs.3600 ✓

  SHORTCUT for perfect squares:
    √5625: ends in 5 → answer ends in 5
    56 lies between 7²=49 and 8²=64
    → answer is 75 ✓

  RELATION: For same perimeter P:
    Square side = P/4
    Square area = P²/16
```

---

## Type 3: Area of Triangle (base-height and Heron's Formula)

**Q: Find the area of a triangle with sides 13 cm, 14 cm, and 15 cm.**

```
           A
          /\
    13   /  \   15
        /    \
       /      \
      B────────C
          14

  Using HERON'S FORMULA:
  s = (a+b+c)/2 = (13+14+15)/2 = 42/2 = 21

  Area = √[s(s-a)(s-b)(s-c)]
       = √[21 × (21-13) × (21-14) × (21-15)]
       = √[21 × 8 × 7 × 6]
       = √[7056]
       = 84 cm² ✓

  SHORTCUT: Factor inside root
    21 × 8 × 7 × 6
    = (21 × 8) × (7 × 6)
    = 168 × 42 = 7056
    = 84² ✓

  BASE-HEIGHT METHOD:
  If height to base 14 = h:
    Area = (1/2) × 14 × h = 84
    → h = 12 cm
```

---

## Type 4: Area of Circle, Semicircle, and Quadrant

**Q: Find the area and perimeter of a semicircle of diameter 28 cm.**

```
       ___________
      /     |     \
     /      | r    \
    /       |       \
   /________|________\
   |◄──── 28 cm ────►|
         diameter

  Radius r = 28/2 = 14 cm

  SEMICIRCLE:
  Area = πr²/2 = (22/7) × 14² / 2
       = (22/7) × 196/2
       = (22 × 196) / (7 × 2)
       = 22 × 14 = 308 cm² ✓

  Perimeter = πr + 2r  (curved part + diameter)
            = (22/7) × 14 + 2 × 14
            = 44 + 28 = 72 cm ✓

  FULL CIRCLE:     Area = πr² = 616 cm²
  SEMICIRCLE:      Area = πr²/2 = 308 cm²
  QUADRANT:        Area = πr²/4 = 154 cm²

  QUADRANT PERIMETER = πr/2 + 2r
    = 22 + 28 = 50 cm
```

---

## Type 5: Area of Parallelogram, Rhombus, and Trapezium

**Q: The parallel sides of a trapezium are 25 cm and 15 cm, and the distance between them is 12 cm. Find the area.**

```
      ┌──── 15 cm ────┐
     /                  \
    /                    \  12 cm
   /                      \ (height)
  └──────── 25 cm ────────┘

  TRAPEZIUM:
  Area = (1/2) × (sum of parallel sides) × height
       = (1/2) × (25 + 15) × 12
       = (1/2) × 40 × 12
       = 240 cm² ✓

  ┌─────────────────────────────────────────────┐
  │  PARALLELOGRAM:                             │
  │    ┌──────────────┐                         │
  │   /              / h                        │
  │  /──────────────/                           │
  │       base b                                │
  │  Area = b × h                               │
  │                                             │
  │  RHOMBUS (d₁ and d₂ are diagonals):        │
  │     ◇  d₁ = horizontal, d₂ = vertical      │
  │  Area = (1/2) × d₁ × d₂                    │
  │  Side = (1/2) × √(d₁² + d₂²)              │
  │                                             │
  │  e.g. d₁=16, d₂=12:                        │
  │  Area = (1/2)×16×12 = 96 cm²               │
  │  Side = (1/2)×√(256+144) = (1/2)×20 = 10   │
  └─────────────────────────────────────────────┘
```

---

## Type 6: Area of Ring (Annulus) and Circumference

**Q: A circular garden of radius 21 m has a path of width 3.5 m around it. Find the area of the path.**

```
      ┌────────────────────────┐
     ╱  ┌──────────────────┐    ╲
    │   │                  │     │
    │   │    Garden (r)    │     │ ← path
    │   │    r = 21 m      │     │   width
    │   │                  │     │   = 3.5 m
     ╲  └──────────────────┘    ╱
      └────────────────────────┘
            R = 21 + 3.5 = 24.5 m

  Area of path = π(R² - r²)
               = π(R + r)(R - r)
               = (22/7) × (24.5 + 21) × (24.5 - 21)
               = (22/7) × 45.5 × 3.5
               = (22/7) × 159.25
               = 22 × 22.75
               = 500.5 m² ✓

  SHORTCUT: Use π(R+r)(R-r) when R-r is simple

  CIRCUMFERENCE:
    Outer = 2πR = 2 × (22/7) × 24.5 = 154 m
    Inner = 2πr = 2 × (22/7) × 21 = 132 m
```

---

## Type 7: Area of Sector and Arc Length

**Q: Find the area of a sector with radius 21 cm and central angle 120 degrees. Also find arc length.**

```
           ╱  |
         ╱  120°|
       ╱________|
      r = 21 cm

  The sector is a "pizza slice" of the circle.

  Arc Length = (θ/360) × 2πr
             = (120/360) × 2 × (22/7) × 21
             = (1/3) × 132
             = 44 cm ✓

  Area of Sector = (θ/360) × πr²
                 = (120/360) × (22/7) × 21²
                 = (1/3) × (22/7) × 441
                 = (1/3) × 1386
                 = 462 cm² ✓

  ALTERNATIVELY:
  Area = (1/2) × arc length × r
       = (1/2) × 44 × 21
       = 462 cm² ✓

  ┌────────────────────────────────────────┐
  │ COMMON SECTORS:                       │
  │  90° (quadrant) → 1/4 of circle      │
  │ 120°            → 1/3 of circle      │
  │ 180° (semicircle) → 1/2 of circle    │
  │  60°            → 1/6 of circle      │
  └────────────────────────────────────────┘
```

---

## Type 8: Path/Border Around Rectangle (Inner/Outer)

**Q: A rectangular park 80 m by 60 m has a path 5 m wide running outside it. Find the area of the path.**

```
  OUTER PATH:
  ┌──────────────────────── 90 ────────────────────────┐
  │  5m  ┌──────────── 80 ────────────┐  5m            │
  │      │                            │                │ 70
  │  5m  │         PARK               │  5m            │
  │      │        80 × 60             │                │
  │      │                            │                │
  │      └──────────── 80 ────────────┘                │
  │  5m                                5m              │
  └────────────────────────────────────────────────────┘

  Outer dimensions: (80+2×5) × (60+2×5) = 90 × 70

  Area of path = Outer area - Inner area
               = 90 × 70 - 80 × 60
               = 6300 - 4800
               = 1500 m² ✓

  FORMULA (Outer path, width w):
    Area = 2w(L + B + 2w)
         = 2×5×(80 + 60 + 10)
         = 10 × 150 = 1500 m² ✓

  INNER PATH (path inside rectangle):
  ┌──────────── 80 ────────────┐
  │  ┌────────── 70 ─────────┐ │
  │  │                       │ │ 60
  │  │    USABLE AREA        │ │
  │  │     70 × 50           │ │ 50
  │  │                       │ │
  │  └───────────────────────┘ │
  └────────────────────────────┘

    Inner dimensions: (80-2×5) × (60-2×5) = 70 × 50
    Area of path = 80×60 - 70×50 = 4800-3500 = 1300 m²

  FORMULA (Inner path, width w):
    Area = 2w(L + B - 2w)
         = 2×5×(80 + 60 - 10) = 10 × 130 = 1300 m² ✓
```

---

## Type 9: Diagonal of Rectangle and Square

**Q: The diagonal of a rectangle is 25 cm and one side is 7 cm. Find the other side, area, and perimeter.**

```
  ┌─────────── ? ──────────┐
  │                      ╱ │
  │                    ╱   │ 7
  │                  ╱  25 │
  │                ╱       │
  │              ╱         │
  └────────────────────────┘

  By Pythagoras: d² = L² + B²
  25² = L² + 7²
  625 = L² + 49
  L² = 576
  L = 24 cm ✓

  Area = 24 × 7 = 168 cm² ✓
  Perimeter = 2(24 + 7) = 62 cm ✓

  TRIPLETS TO REMEMBER:
  ┌───────────────────────────────────┐
  │  3, 4, 5    →  5, 12, 13         │
  │  6, 8, 10   →  7, 24, 25         │
  │  8, 15, 17  →  9, 40, 41         │
  │  20, 21, 29 →  11, 60, 61        │
  │  (and all multiples of these)     │
  └───────────────────────────────────┘

  SQUARE DIAGONAL:
    d = a√2 → a = d/√2 = d×√2/2
    If diagonal = 14√2, side = 14
    Area from diagonal: Area = d²/2
      e.g. d=14√2 → Area = (14√2)²/2 = 392/2 = 196
```

---

## Type 10: Square Inscribed in Circle / Circle Inscribed in Square

**Q: A square is inscribed in a circle of radius 7 cm. Find the area of the square and the remaining area inside the circle.**

```
  SQUARE INSCRIBED IN CIRCLE:
      ┌──────────┐
     ╱│          │╲
    ╱  │          │ ╲
   │   │  SQUARE  │  │
   │   │          │  │
    ╲  │          │ ╱
     ╲ │          │╱
      └──────────┘
  Diagonal of square = Diameter of circle = 2r

  Diagonal = 2 × 7 = 14 cm
  Side = Diagonal/√2 = 14/√2 = 7√2 cm
  Area of square = Side² = (7√2)² = 98 cm²
  OR: Area = d²/2 = 14²/2 = 196/2 = 98 cm² ✓

  Area of circle = πr² = (22/7) × 49 = 154 cm²

  Remaining area = 154 - 98 = 56 cm² ✓

  ─────────────────────────────────────────────

  CIRCLE INSCRIBED IN SQUARE:
  ┌──────────────────┐
  │    ╱────────╲    │
  │   │          │   │
  │   │  CIRCLE  │   │  side a
  │   │  r=a/2   │   │
  │    ╲────────╱    │
  └──────────────────┘
  Diameter = Side of square → r = a/2

  If side = 14: r = 7
  Area of circle = πr² = 154 cm²
  Area of square = 14² = 196 cm²
  Area between = 196 - 154 = 42 cm²

  RATIO: Area of inscribed circle / Area of square
       = π/4 ≈ 0.785 ≈ 78.5%
```

---

## Type 11: Area of Equilateral Triangle

**Q: Find the area and height of an equilateral triangle with side 14 cm.**

```
           A
          /\
    14   /  \   14
        /    \
       / h=?  \
      /________\
     B    14    C

  EQUILATERAL TRIANGLE (side a):

  Area = (√3/4) × a²
       = (√3/4) × 14²
       = (√3/4) × 196
       = 49√3
       = 49 × 1.732
       = 84.87 cm² ✓

  Height = (√3/2) × a
         = (√3/2) × 14
         = 7√3
         = 12.12 cm ✓

  Perimeter = 3a = 42 cm ✓

  ┌─────────────────────────────────────────────┐
  │ QUICK VALUES (memorize!):                   │
  │  Side    Area         Height                │
  │   2     √3            √3                    │
  │   4     4√3           2√3                   │
  │   6     9√3           3√3                   │
  │   8     16√3          4√3                   │
  │  10     25√3          5√3                   │
  │                                             │
  │  Pattern: Area = (a/2)² × √3               │
  │           Height = (a/2) × √3              │
  └─────────────────────────────────────────────┘
```

---

## Type 12: Area Changes When Dimensions Change (% Change in Area)

**Q: If the length of a rectangle is increased by 20% and breadth is decreased by 10%, what is the percentage change in area?**

```
  Area = L × B → Product of two quantities
  Use SUCCESSIVE CHANGE formula!

  % change = a + b + (a×b)/100

  a = +20% (increase), b = -10% (decrease)

  = 20 + (-10) + (20 × (-10))/100
  = 20 - 10 - 200/100
  = 10 - 2
  = +8% (area INCREASES by 8%) ✓

  ┌──────────────────┐    ┌───────────────────────┐
  │                  │    │                       │
  │  L × B = 100%    │ →  │  1.2L × 0.9B = 108%  │
  │  (original)      │    │  (+8% area)           │
  │                  │    │                       │
  └──────────────────┘    └───────────────────────┘

  Verify: L=100, B=100 → Area = 10000
          L=120, B=90  → Area = 10800 (+8%) ✓

  SPECIAL CASES:
  ┌───────────────────────────────────────────────┐
  │ Both sides ↑ x%:  Area ↑ (2x + x²/100)%      │
  │   Side ↑10% → Area ↑21%                      │
  │   Side ↑20% → Area ↑44%                      │
  │                                               │
  │ Side of square ↑ x%:                          │
  │   Area ↑ (2x + x²/100)% (same formula)       │
  │                                               │
  │ Radius ↑ x%:                                  │
  │   Area ↑ (2x + x²/100)% (circle too!)        │
  └───────────────────────────────────────────────┘
```

---

## Type 13: Wire Bent into Different Shapes (Perimeter Constant)

**Q: A wire is in the form of a circle of radius 21 cm. It is bent into a square. Find the side of the square and difference in areas.**

```
  Wire length = Perimeter = constant

  Circle perimeter = 2πr = 2 × (22/7) × 21 = 132 cm

  BENT INTO SQUARE:
  ○ (r=21) → □ (side=?)

  Perimeter of square = 132
  Side = 132/4 = 33 cm ✓

  Area of circle = πr² = (22/7) × 441 = 1386 cm²
  Area of square = 33² = 1089 cm²

  Difference = 1386 - 1089 = 297 cm² ✓

  CIRCLE HAS MORE AREA! (always, for same perimeter)

  ┌─────────────────────────────────────────────────┐
  │ WIRE BENT COMPARISON (same perimeter P):        │
  │                                                 │
  │  Shape              Area                        │
  │  Circle             P²/(4π) = P²/12.57         │
  │  Square             P²/16                       │
  │  Equilateral △      P²√3/36 = P²/20.78         │
  │                                                 │
  │  Circle > Square > Equilateral △                │
  │                                                 │
  │  RATIO of areas (same perimeter):               │
  │  Circle : Square = 14 : 11 (approx)            │
  └─────────────────────────────────────────────────┘
```

---

## Type 14: Maximum Area for Given Perimeter

**Q: A farmer has 100 m of fencing. What should be the dimensions to enclose the maximum rectangular area?**

```
  Perimeter = 2(L + B) = 100
  → L + B = 50

  Area = L × B = L × (50 - L) = 50L - L²

  For maximum area: L = B (square!)
  L = B = 50/2 = 25 m

  Maximum Area = 25 × 25 = 625 m² ✓

  ┌──────────────────────────────────────────────┐
  │ Dimensions   │ Area      │ Compare to max    │
  ├──────────────┼───────────┼───────────────────┤
  │ 45 × 5       │ 225 m²    │ Much less         │
  │ 40 × 10      │ 400 m²    │ Less              │
  │ 30 × 20      │ 600 m²    │ Close             │
  │ 25 × 25 ★    │ 625 m²    │ MAXIMUM           │
  └──────────────┴───────────┴───────────────────┘

  RULE: For MAXIMUM area with given perimeter:
    Among rectangles → make it a SQUARE
    Among all shapes → make it a CIRCLE

  If fencing = 100 m, circular area:
    2πr = 100 → r = 50/π ≈ 15.91 m
    Area = πr² = 100²/(4π) ≈ 795.8 m²
    (More than square's 625 m²!)
```

---

## Type 15: Carpet / Tiling Problems

**Q: A room 15 m long and 8 m wide is to be paved with square tiles of side 50 cm. Find the number of tiles required and total cost at Rs.25 per tile.**

```
  ┌──────────── 15 m ────────────┐
  │ ┌───┬───┬───┬───┬───┐       │
  │ │   │   │   │   │   │ ...   │
  │ ├───┼───┼───┼───┼───┤       │ 8 m
  │ │   │   │   │   │   │       │
  │ ├───┼───┼───┼───┼───┤       │
  │ │   │   │   │   │   │       │
  │ └───┴───┴───┴───┴───┘       │
  └─────────────────────────────┘
        50 cm tiles

  Room area = 15 × 8 = 120 m²

  Tile side = 50 cm = 0.5 m
  Tile area = 0.5 × 0.5 = 0.25 m²

  Number of tiles = Room area / Tile area
                  = 120 / 0.25
                  = 480 tiles ✓

  Total cost = 480 × 25 = Rs.12000 ✓

  ALTERNATIVE: Count tiles along each dimension
    Along length = 15/0.5 = 30 tiles
    Along width  = 8/0.5  = 16 tiles
    Total = 30 × 16 = 480 tiles ✓

  NOTE: Convert units first! Both must be in
  same unit (either all m or all cm).

  CARPET PROBLEM:
    Carpet width = 75 cm = 0.75 m
    Length needed = Room area / Carpet width
                  = 120 / 0.75 = 160 m
    Cost = 160 × rate per metre
```

---

## Type 16: Area of Shaded Region Problems

**Q: A square of side 14 cm has four quadrants drawn at each corner. Find the area of the shaded region (area of square minus the four quadrants).**

```
  ┌──────────────────┐
  │╲                ╱│
  │  ╲            ╱  │
  │    ╲        ╱    │  14 cm
  │      ╲    ╱      │
  │        ╲╱        │
  │        ╱╲        │
  │      ╱    ╲      │
  │    ╱        ╲    │
  │  ╱            ╲  │
  │╱                ╲│
  └──────────────────┘

  Side = 14 cm, radius of each quadrant = 14/2 = 7 cm

  4 quadrants at corners = 4 × (πr²/4) = πr²
                        = (22/7) × 49
                        = 154 cm²

  Area of square = 14² = 196 cm²

  Shaded area = 196 - 154 = 42 cm² ✓

  ┌─────────────────────────────────────────────────┐
  │ COMMON SHADED REGION PATTERNS:                  │
  │                                                 │
  │ 1. Square - inscribed circle                    │
  │    = a² - πa²/4 = a²(1 - π/4)                 │
  │                                                 │
  │ 2. Circle - inscribed square                    │
  │    = πr² - 2r² = r²(π - 2)                    │
  │                                                 │
  │ 3. Square - 4 quadrants (r = a/2)              │
  │    = a² - πa²/4 = a²(1 - π/4)                 │
  │    (same as square minus inscribed circle!)     │
  │                                                 │
  │ 4. Two overlapping circles: use symmetry        │
  │    Overlap = 2 × sector - 2 × triangle         │
  └─────────────────────────────────────────────────┘
```
