module.exports = {
  title: "AREA (MENSURATION 2D) — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Rectangle & Square", color: "#1971c2", bg: "#d0ebff",
      text: "RECTANGLE (L × B):\n  Area = L × B\n  Perimeter = 2(L + B)\n  Diagonal = √(L² + B²)\n\nSQUARE (side a):\n  Area = a²\n  Perimeter = 4a\n  Diagonal = a√2,  Area = d²/2\n\nWHY: Rectangle = L rows of B unit squares.\n  Square diagonal splits into two 45-45-90 triangles.\n\nEx: L=8, B=5 → Area=40, Peri=26, Diag=√89" },
    { title: "Triangle Formulas", color: "#2f9e44", bg: "#ebfbee",
      text: "Area = (1/2) × base × height\n\nHeron's: s=(a+b+c)/2\n  Area = √[s(s-a)(s-b)(s-c)]\n\nEquilateral (side a):\n  Area = (√3/4) × a²\n  Height = (√3/2) × a\n\nRight △: Area = (1/2) × leg₁ × leg₂\n\nWHY: Triangle = half of rectangle with\n  same base and height (b×h / 2).\n\nEx: b=10, h=6 → Area=1/2×10×6=30" },
    { title: "Circle, Semicircle, Quadrant", color: "#e8590c", bg: "#fff4e6",
      text: "Circle: Area = πr², Circum = 2πr\nSemicircle: Area = πr²/2\n  Perimeter = πr + 2r\nQuadrant: Area = πr²/4\n  Perimeter = πr/2 + 2r\n\nRing: Area = π(R² - r²)\n    = π(R+r)(R-r)\n\nWHY: Circle area = sum of infinite thin\n  rings from center to edge, giving πr².\n\nEx: r=7 → Area=22/7×49=154, C=44" },
    { title: "Parallelogram, Rhombus, Trapezium", color: "#7048e8", bg: "#e5dbff",
      text: "Parallelogram: Area = base × height\n\nRhombus (diagonals d₁, d₂):\n  Area = (1/2) × d₁ × d₂\n  Side = (1/2)√(d₁² + d₂²)\n\nTrapezium (parallel sides a,b):\n  Area = (1/2)(a + b) × h\n\nWHY: Rhombus diagonals split it into 4\n  right triangles → total = d₁×d₂/2.\n\nEx: d₁=12, d₂=16 → Area=1/2×12×16=96" },
    { title: "Sector, Arc & Path", color: "#e03131", bg: "#ffe3e3",
      text: "Sector: Area = (θ/360) × πr²\nArc = (θ/360) × 2πr\nArea = (1/2) × arc × r\n\nPath around rectangle (width w):\n  Outer: 2w(L + B + 2w)\n  Inner: 2w(L + B - 2w)\n\nWHY: Sector is θ/360 fraction of the\n  full circle, so area = fraction × πr².\n\nEx: θ=90, r=14 → Area=1/4×π×196=154" },
    { title: "Special Values & Inscribed", color: "#0c8599", bg: "#c3fae8",
      text: "π≈22/7  √2≈1.414  √3≈1.732\n\nSq in circle: diag=2r, Area=2r²\nCircle in sq: r=a/2, Area=πa²/4\n\nMax area (same perimeter):\n  Circle > Square > Eq.Triangle\n\nSame P: Circle:Square area = 14:11\n\nWHY: Square in circle has diagonal = diameter.\n  Area = d²/2 = (2r)²/2 = 2r².\n\nEx: r=7, sq area=2×49=98, circ=154" }
  ],

  types: [
    { num: "1", title: "Rectangle Area & Perimeter", color: "#2f9e44", bg: "#ebfbee",
      q: "Rectangle 120m × 80m. Find area, perimeter, fencing cost at Rs.15/m.",
      tree: "LOGIC:\nStep 1: Area = 120×80 = 9600 m²\n  Peri = 2(120+80) = 400 m\nStep 2: Cost = 400×15 = Rs.6000\n\nTRICK:\nArea = L×B, Peri = 2(L+B)\nFencing = perimeter × rate\n\n  ┌──── 120 m ────┐\n  │               │ 80 m\n  └───────────────┘\n\nAnswer: Area=9600m², Peri=400m ✓" },

    { num: "2", title: "Square Area & Perimeter", color: "#1971c2", bg: "#d0ebff",
      q: "Area of square = 5625 m². Find side, perimeter, fencing cost at Rs.12/m.",
      tree: "LOGIC:\nStep 1: a = √5625 = 75 m\nStep 2: P = 4×75 = 300 m\n  Cost = 300×12 = Rs.3600\n\nTRICK:\n√5625: ends in 5, try 75²\n75² = 5625 ✓ (use (a5)² = a(a+1)|25)\n\n  ┌──── 75 ────┐\n  │  A = 5625  │ 75\n  └────────────┘\n\nAnswer: Side=75m, P=300m ✓" },

    { num: "3", title: "Triangle Area (Heron's Formula)", color: "#e8590c", bg: "#fff4e6",
      q: "Triangle with sides 13, 14, 15 cm. Find area.",
      tree: "LOGIC:\nStep 1: s = (13+14+15)/2 = 21\nStep 2: Area = √(21×8×7×6)\n  = √7056 = 84 cm²\n\nTRICK:\nHeron's: √(s(s-a)(s-b)(s-c))\n21×8=168, 7×6=42, 168×42=7056\n√7056 = 84 (memorize: 84²=7056)\n\n       /\\\n   15 /  \\ 13\n     /____\\\n       14\n\nAnswer: Area = 84 cm² ✓" },

    { num: "4", title: "Circle, Semicircle, Quadrant", color: "#7048e8", bg: "#e5dbff",
      q: "Find area and perimeter of semicircle with diameter 28 cm.",
      tree: "LOGIC:\nStep 1: r = 14 cm\nStep 2: Area = πr²/2 = 22/7×196/2 = 308\n  Peri = πr+2r = 44+28 = 72\n\nTRICK:\nSemicircle peri = πr + 2r (NOT πr + d)\nInclude the flat diameter edge!\n\n     _________\n    /    |    \\\n   /     |r=14 \\\n  /______|______\\\n\nAnswer: Area=308cm², Peri=72cm ✓" },

    { num: "5", title: "Parallelogram, Rhombus, Trapezium", color: "#e03131", bg: "#ffe3e3",
      q: "Trapezium: parallel sides 25cm & 15cm, height 12cm. Find area.",
      tree: "LOGIC:\nStep 1: a=25, b=15, h=12\nStep 2: A = (1/2)(a+b)×h\n  = (1/2)(40)×12 = 240\n\nTRICK:\nTrapezium = avg of parallel sides × height\n= (25+15)/2 × 12 = 20×12 = 240\n\n    ┌── 15 ──┐\n   /    12    \\\n  └──── 25 ───┘\n\nAnswer: Area = 240 cm² ✓" },

    { num: "6", title: "Ring / Annulus Area", color: "#0c8599", bg: "#c3fae8",
      q: "Circular garden r=21m has 3.5m wide path outside. Area of path?",
      tree: "LOGIC:\nStep 1: R = 21+3.5 = 24.5m\nStep 2: Path = π(R²-r²)\n  = 22/7 × (600.25-441) = 500.5\n\nTRICK:\nUse: π(R+r)(R-r) = π×45.5×3.5\n= 22/7 × 159.25 = 500.5\nTRAP: π(R²-r²) ≠ π(R-r)²\n\n  ┌──────────────────┐\n  │  ╱ ○ R=24.5 ╲   │\n  │ │  ○ r=21    │  │ path=3.5\n  │  ╲          ╱   │\n  └──────────────────┘\n\nAnswer: Path area = 500.5 m² ✓" },

    { num: "7", title: "Sector Area & Arc Length", color: "#862e9c", bg: "#f3d9fa",
      q: "Sector: radius 21cm, angle 120°. Find area and arc length.",
      tree: "LOGIC:\nStep 1: Arc = (120/360)×2πr\n  = (1/3)×132 = 44 cm\nStep 2: Area = (120/360)×πr²\n  = (1/3)×1386 = 462 cm²\n\nTRICK:\nFraction = θ/360 (of full circle)\nArc = fraction × 2πr\nArea = fraction × πr²\nAlso: Area = (1/2)×arc×r\n\n      /|\n     / |\n  r / 120° r=21\n   /___|\n   arc=44\n\nAnswer: Arc=44cm, Area=462cm² ✓" },

    { num: "8", title: "Path/Border Around Rectangle", color: "#f08c00", bg: "#fff3bf",
      q: "Park 80m×60m has 5m wide outer path. Find path area.",
      tree: "LOGIC:\nStep 1: Outer = (80+10)×(60+10) = 6300\n  Inner = 80×60 = 4800\nStep 2: Path = 6300-4800 = 1500\n\nTRICK:\nOuter path = 2w(L+B+2w)\n= 2×5×(80+60+10) = 1500\nInner path = 2w(L+B-2w)\n\n  ┌──── 90 ────┐\n  │ ┌── 80 ──┐ │ 70\n  │ │ PARK   │ │\n  │ └────────┘ │\n  └────────────┘\n\nAnswer: Path area = 1500 m² ✓" },

    { num: "9", title: "Diagonal of Rectangle & Square", color: "#c92a2a", bg: "#fff5f5",
      q: "Rectangle diagonal=25cm, one side=7cm. Find other side & area.",
      tree: "LOGIC:\nStep 1: d²=L²+B² → 625=L²+49\nStep 2: L²=576 → L=24\n  Area = 24×7 = 168\n\nTRICK:\nPythagorean triplet: 7,24,25\nMemorize common triplets!\n3,4,5 | 5,12,13 | 7,24,25 | 8,15,17\n\n  ┌──── 24 ────┐\n  │    ╱  d=25 │ 7\n  └────────────┘\n  7² + 24² = 25² ✓\n\nAnswer: L=24cm, Area=168cm² ✓" },

    { num: "10", title: "Inscribed / Circumscribed Shapes", color: "#2f9e44", bg: "#ebfbee",
      q: "Square inscribed in circle of radius 7cm. Find square area & remaining area.",
      tree: "LOGIC:\nStep 1: Diag = 2r = 14\n  Sq area = d²/2 = 196/2 = 98\nStep 2: Circle = πr² = 154\n  Remaining = 154-98 = 56\n\nTRICK:\nSq in circle: area = 2r²\nCircle in sq: area = πa²/4\n\n    ┌────────┐\n   ╱│ SQUARE │╲\n   ╲│ in ○   │╱\n    └────────┘\n\nAnswer: Remaining = 56 cm² ✓" },

    { num: "11", title: "Equilateral Triangle Area", color: "#1971c2", bg: "#d0ebff",
      q: "Equilateral triangle side 14cm. Find area and height.",
      tree: "LOGIC:\nStep 1: Area = (√3/4)×14² = 49√3\n  = 84.87 cm²\nStep 2: h = (√3/2)×14 = 7√3 = 12.12\n\nTRICK:\nArea = (√3/4)a² = (a/2)²×√3\nHeight = (√3/2)×a\n√3 ≈ 1.732\n\n       /\\\n   14 / h \\ 14\n     /____\\\n       14\n\nAnswer: Area=84.87cm², h=12.12cm ✓" },

    { num: "12", title: "% Change in Area (Dimension Change)", color: "#e8590c", bg: "#fff4e6",
      q: "Length ↑20%, Breadth ↓10%. Find % change in area.",
      tree: "LOGIC:\nStep 1: New area = 1.20 × 0.90 = 1.08\nStep 2: Change = 8% increase\n\nTRICK:\nNet% = a + b + ab/100\n= 20 + (-10) + (20×-10)/100\n= 10 - 2 = +8%\nBoth ↑x%: area ↑(2x+x²/100)%\n\n  L×1.20  B×0.90\n  ┌────────┐\n  │New area│ = 1.08 × old\n  └────────┘\n  Net change = +8%\n\nAnswer: Area increases by 8% ✓" },

    { num: "13", title: "Wire Bent (Perimeter Constant)", color: "#7048e8", bg: "#e5dbff",
      q: "Wire as circle r=21cm bent into square. Find side & area difference.",
      tree: "LOGIC:\nStep 1: Wire = 2πr = 132 cm\nStep 2: Side = 132/4 = 33 cm\n  Circle = 1386, Square = 1089\n  Diff = 297 cm²\n\nTRICK:\nSame perimeter: circle > square (area)\nRatio ≈ 14:11\nCircle always wins for max area!\n\n  ○ r=21 ───bent──> □ s=33\n  P=132            P=132\n  A=1386           A=1089\n  Diff = 297\n\nAnswer: Diff = 297 cm² ✓" },

    { num: "14", title: "Maximum Area for Given Perimeter", color: "#e03131", bg: "#ffe3e3",
      q: "100m fencing. Max rectangular area?",
      tree: "LOGIC:\nStep 1: P=100, L+B=50\nStep 2: Max when L=B (SQUARE!)\n  L=B=25, Area=625\n\nTRICK:\nMax rectangle area = (P/4)²\n= (100/4)² = 25² = 625\nCircle max: P²/(4π) ≈ 795.8\n\n  ┌──── 25 ────┐\n  │  Max Area  │ 25\n  └────────────┘\n\nAnswer: Max Area = 625 m² ✓" },

    { num: "15", title: "Carpet / Tiling Problems", color: "#0c8599", bg: "#c3fae8",
      q: "Room 15m×8m, tiles 50cm side. How many tiles? Cost at Rs.25/tile?",
      tree: "LOGIC:\nStep 1: Room=120m², Tile=0.25m²\nStep 2: Tiles = 120/0.25 = 480\n  Cost = 480×25 = Rs.12000\n\nTRICK:\nCount tiles per side:\n15/0.5 × 8/0.5 = 30×16 = 480\n(convert units first!)\n\n  ┌──── 15m ────┐\n  │ □□□□□□...   │ 8m\n  │ 30 × 16     │\n  └─────────────┘\n  Tile=0.5m → 480 tiles\n\nAnswer: 480 tiles, Rs.12000 ✓" },

    { num: "16", title: "Shaded Region Problems", color: "#862e9c", bg: "#f3d9fa",
      q: "Square side 14cm, 4 quadrants at corners. Find shaded area.",
      tree: "LOGIC:\nStep 1: Square = 14² = 196\n  4 quadrants = πr² = 22/7×49 = 154\nStep 2: Shaded = 196-154 = 42\n\nTRICK:\nShaded = total - unshaded\n4 quadrants (r=7) = 1 full circle\n= π×7² = 154\n196-154 = 42\n\n  ┌──────────────┐\n  │╲  shaded   ╱ │ s=14\n  │  ╲       ╱   │\n  │   (○○○○)     │ 4 quadrants\n  │  ╱       ╲   │ r=7 each\n  │╱  shaded   ╲ │\n  └──────────────┘\n\nAnswer: Shaded = 42 cm² ✓" }
  ]
};
