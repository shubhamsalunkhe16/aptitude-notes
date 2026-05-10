# Seating Arrangement - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Linear Arrangement Basics

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  N persons in a line = N! total arrangements                        │
│  Positions numbered LEFT to RIGHT: 1, 2, 3, ... N                  │
│                                                                     │
│  "Immediately left of B"  = position (B - 1) [same row facing]     │
│  "Immediately right of B" = position (B + 1) [same row facing]     │
│  "2nd to the left of B"   = position (B - 2)                       │
│  "3rd to the right of B"  = position (B + 3)                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Circular Arrangement Basics

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  N persons in a circle = (N-1)! total arrangements                  │
│  Fix one person, arrange rest relative to them                      │
│                                                                     │
│  "Immediately left" = CLOCKWISE neighbor                            │
│  "Immediately right" = ANTI-CLOCKWISE neighbor                      │
│  (when all face CENTER)                                             │
│                                                                     │
│  "Opposite" in circle of N = N/2 positions away (N must be even)   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Two-Row & Rectangular Basics

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Two rows facing each other:                                        │
│    "Opposite" = directly facing person in other row                 │
│    LEFT/RIGHT flips between rows (mirror effect)                    │
│                                                                     │
│  Rectangular table (4/6/8 seats):                                   │
│    Longer sides + shorter sides (or corners)                        │
│    "Opposite" = person across the table                             │
│    "Adjacent" = next seat (could be same side or corner)            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Direction Rules

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  LINEAR (all face same direction, e.g., NORTH):                     │
│    YOUR left = actual LEFT of the person                            │
│                                                                     │
│  LINEAR (facing you / facing south):                                │
│    Left/Right appears REVERSED from your perspective                │
│    Always use the PERSON's own left/right                           │
│                                                                     │
│  CIRCULAR (facing center):                                          │
│    Left of X = CLOCKWISE from X                                     │
│    Right of X = ANTI-CLOCKWISE from X                               │
│                                                                     │
│  CIRCULAR (facing outside):                                         │
│    Left of X = ANTI-CLOCKWISE from X                                │
│    Right of X = CLOCKWISE from X                                    │
│    (REVERSED compared to facing center!)                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Arrangement Visual Guide

```
  === LINEAR (Single Row, All Face North ↑) ===

     ↑     ↑     ↑     ↑     ↑
    P1    P2    P3    P4    P5
    ←LEFT                RIGHT→
  (Positions numbered left to right from observer's view)

  P2 is "immediately to the right of P1"
  P2 is "immediately to the left of P3"


  === CIRCULAR (Facing Center) ===

           P1
        /      \
      P8        P2
      |          |        Facing CENTER:
      P7    o    P3         Left = Clockwise
      |          |          Right = Anti-clockwise
      P6        P4
        \      /          P2's left = P3 (clockwise)
           P5             P2's right = P1 (anti-clockwise)


  === TWO ROWS FACING EACH OTHER ===

  Row 1 (facing South ↓):  A1   A2   A3   A4   A5
                            |    |    |    |    |
  Row 2 (facing North ↑):  B1   B2   B3   B4   B5

  A1 faces B1 (opposite)
  A1's right (from A1's perspective) = A2
  B1's right (from B1's perspective) = B2
  NOTE: A1's right and B1's right are on SAME side!


  === RECTANGULAR TABLE (8 seats) ===

         P1   P2   P3
     P8 ┌─────────────┐ P4
         │             │
     P7 └─────────────┘ P5
         P6   (none)  (none)

  (Longer sides: 3 seats, shorter sides: 1 seat each)
  Adjust based on problem — could be 6, 8, or 10 seats
```

---

## Type 1: Linear Arrangement — Single Row, Same Direction

**Q: Six persons A, B, C, D, E, F sit in a row facing North. B sits 3rd from the left. A sits immediately to the right of B. C sits at the extreme left. Who sits 3rd from the right?**

```
  All face North (↑), numbered left to right:

    Pos:  1     2     3     4     5     6
          ↑     ↑     ↑     ↑     ↑     ↑

  Clue 1: B sits 3rd from left → B at Pos 3
  Clue 2: A immediately right of B → A at Pos 4
  Clue 3: C at extreme left → C at Pos 1

    Pos:  1     2     3     4     5     6
          C     ?     B     A     ?     ?

  3rd from right = position (6 - 3 + 1) = Pos 4

  Answer: A sits 3rd from the right ✓

  TRICK: Nth from right = position (Total - N + 1)
         Nth from left  = position N
```

---

## Type 2: Linear Arrangement — Single Row, Facing Opposite Directions

**Q: Five persons P, Q, R, S, T sit in a row. Some face North, some face South. R faces South and sits in the middle. P sits to the immediate left of R and faces North. Q sits at the right end facing North. Who sits to the immediate right of R?**

```
  Positions (left to right from bird's eye view):

    Pos:  1     2     3     4     5
          ?     ?     ?     ?     ?

  Clue 1: R in middle → R at Pos 3, faces South (↓)
  Clue 2: P immediately left of R → P at Pos 2, faces North (↑)
  Clue 3: Q at right end → Q at Pos 5, faces North (↑)

    Pos:  1     2     3     4     5
          ?     P↑    R↓    ?     Q↑

  CAREFUL: "Left of R" — since we describe positions
  from bird's eye view, left = lower position number.

  R faces South. R's RIGHT (from R's perspective when
  facing South) = Pos 2 direction. But problem says
  "immediate left of R" = Pos 2.

  Immediately RIGHT of R = Pos 4 (from layout view)

  Answer: Position 4 (S or T — needs more clues) ✓

  KEY: In mixed-facing problems, use POSITION NUMBERS
       not person's perspective, unless stated otherwise.
```

---

## Type 3: Linear Arrangement — Two Rows Facing Each Other

**Q: Eight persons A-D sit in Row 1 facing South, and P-S sit in Row 2 facing North. B faces Q. A sits to the right of B (from A's perspective). P sits opposite C. S sits at one of the extreme ends of Row 2. Who sits opposite A?**

```
  Row 1 (facing South ↓): ←Right    Left→ (from their perspective)
                            A1  A2  A3  A4

  Row 2 (facing North ↑): Left→    ←Right (from their perspective)
                            B1  B2  B3  B4

  People face each other: A1↔B1, A2↔B2, A3↔B3, A4↔B4

  Clue 1: B faces Q → place B and Q opposite
  Clue 2: A to the RIGHT of B (A's perspective, A faces South)
          A faces South → A's right = toward lower position
          So A is to the LEFT of B in layout

  Say B at Row1-Pos3, Q at Row2-Pos3
  A at Row1-Pos2 (left of B in layout = right of B for person facing South)

  Clue 3: P opposite C → P in Row2, C in Row1
  Clue 4: S at extreme end of Row 2

  Row 1 (↓): ?    A    B    C
  Row 2 (↑): S    ?    Q    P

  A is at Row1-Pos2, opposite is Row2-Pos2

  Answer: The person at Row2-Pos2 sits opposite A ✓

  TRAP: "Right of B" depends on which way B faces!
  Person facing South: their RIGHT = leftward in layout.
```

---

## Type 4: Circular Arrangement — All Facing Center

**Q: Eight persons A-H sit around a circular table facing the center. A sits 3rd to the left of D. B sits opposite A. C sits immediately to the right of B. Find who sits opposite D.**

```
  Circle with 8 seats, all facing CENTER:
  Left = Clockwise, Right = Anti-clockwise

           1
        8     2
       7   o   3       Number positions 1-8 clockwise
        6     4
           5

  Clue 1: A sits 3rd to the LEFT of D
          Left = clockwise, so A is 3 seats clockwise from D
          If D at Pos 1 → A at Pos 4

  Clue 2: B opposite A
          Opposite in 8-seat circle = 4 positions away
          A at Pos 4 → B at Pos 8

  Clue 3: C immediately to RIGHT of B
          Right = anti-clockwise
          B at Pos 8 → C at Pos 7

           D(1)
       (8)B    (2)
      C(7)  o   (3)       D at 1, A at 4 → opposite = 5
       (6)     A(4)
          (5)

  Opposite of D (Pos 1) = Pos 5

  Answer: Person at Pos 5 sits opposite D ✓

  FORMULA: Opposite seat = current + (N/2), mod N
           (N = total seats, must be even)
```

---

## Type 5: Circular Arrangement — All Facing Outside

**Q: Six persons P, Q, R, S, T, U sit in a circle facing OUTSIDE. P sits 2nd to the right of Q. R sits opposite P. T is not adjacent to P. Who is to the immediate left of R?**

```
  Circle with 6 seats, all facing OUTSIDE:
  Left = ANTI-clockwise, Right = CLOCKWISE
  (REVERSED from facing center!)

         1
       6   2
       5   3         Positions numbered clockwise
         4

  WHY REVERSED?
  Facing out: person at Pos 1 looks away from center.
  Their LEFT hand points anti-clockwise.
  Their RIGHT hand points clockwise.

  Clue 1: P is 2nd to RIGHT of Q
          Right = clockwise when facing outside
          If Q at Pos 1 → P at Pos 3

  Clue 2: R opposite P → R at Pos 6 (3 + 3 = 6)

  Clue 3: T not adjacent to P (Pos 3)
          Adjacent to Pos 3 = Pos 2 and Pos 4
          T is NOT at Pos 2 or 4 → T at Pos 4 or 5
          Since T not at Pos 4 → T at Pos 5

       Q(1)
    R(6)   (2)         Facing OUTSIDE:
    T(5)   P(3)        Immediate LEFT of R (Pos 6)
       (4)             = anti-clockwise = Pos 5 = T

  Answer: T is to the immediate left of R ✓

  RULE: Facing outside flips left/right vs facing center!
```

---

## Type 6: Rectangular / Square Table Arrangement

**Q: Eight persons A-H sit around a rectangular table. Three on each longer side, one on each shorter side. A sits at a shorter side. B sits second to the left of A. E sits opposite A. C is adjacent to E. Find who sits opposite B.**

```
  Rectangular table (8 seats):

       Pos2   Pos3   Pos4
  Pos1 ┌─────────────────┐ Pos5
       │                 │
  Pos8 └─────────────────┘ Pos6
       Pos7   (none)  (none)

  Wait — 3 per long side + 1 per short side = 3+3+1+1 = 8 ✓

       P2    P3    P4
  P1  ┌──────────────┐  P5
      │              │
  P8  └──────────────┘  P6
       P7    (none)  (none)

  Hmm, let me redo: 2 short sides (1 each), 2 long sides (3 each)

       ┌── P2 ── P3 ── P4 ──┐
  P1   │                     │   P5
       └── P8 ── P7 ── P6 ──┘

  Clue 1: A at short side → A at P1 or P5. Say A at P1.
  Clue 2: B is 2nd to left of A (clockwise) → B at P3
  Clue 3: E opposite A → E at P5
  Clue 4: C adjacent to E → C at P4 or P6

       ┌── (2) ── B(3) ── C?(4) ──┐
  A(1) │                           │ E(5)
       └── (8) ── (7)  ── C?(6) ──┘

  Opposite of B (P3) = P7

  Answer: Person at P7 sits opposite B ✓

  TIP: In rectangular arrangement, draw and number
  seats clockwise. "Opposite" = across the table.
```

---

## Type 7: Condition — "A Sits to the Left of B" / "A and B Are Adjacent"

**Q: Seven persons sit in a row facing North. A sits to the left of B but not immediately. C and D are adjacent to each other. C is to the immediate right of A. Where does D sit relative to B?**

```
  Row facing North, 7 positions:
    1    2    3    4    5    6    7
    ↑    ↑    ↑    ↑    ↑    ↑    ↑

  Clue 1: A is to the LEFT of B (but not immediately)
          → A at lower position, gap ≥ 1 between A and B
          → A...?...B (at least one person between them)

  Clue 2: C and D are adjacent (next to each other)

  Clue 3: C is immediately to the RIGHT of A
          → Arrangement: A, C, ... (A then C next)

  Combining Clue 1 + Clue 3:
          A, C, ..., B  (C immediately after A, B later)

  Clue 2: C and D adjacent → D must be next to C
          Since A is to left of C, D must be to right of C
          → A, C, D, ..., B

  Let's place: A at Pos 2, C at Pos 3, D at Pos 4

    1    2    3    4    5    6    7
    ?    A    C    D    ?    B?   ?

  D is to the LEFT of B (D at 4, B at 6 → 2 seats left)

  Answer: D sits to the left of B ✓

  APPROACH:
  1. Start with strongest clue (immediate adjacency)
  2. Build partial arrangement
  3. Place remaining using constraints
```

---

## Type 8: Condition — "A and B Are NOT Adjacent" / "A Sits Opposite B"

**Q: Six persons sit in a circle facing center. A and B are NOT adjacent. C sits opposite A. D sits to the immediate left of C. Where can B sit?**

```
  6-seat circle, facing center:
  Left = Clockwise

         1
       6   2
       5   3
         4

  Clue 1: Place A at Pos 1 (fix one person in circle)
  Clue 2: C opposite A → C at Pos 4 (1 + 3)
  Clue 3: D immediately left of C → D at Pos 5 (clockwise from C)

         A(1)
      (6)    (2)
      D(5)   (3)
         C(4)

  Clue 4: B NOT adjacent to A
          Adjacent to A(Pos1) = Pos 2 and Pos 6
          So B is NOT at Pos 2 or 6
          B can be at Pos 3 only (Pos 4 = C, Pos 5 = D)

         A(1)
      (6)    (2)
      D(5)   B(3)
         C(4)

  Answer: B must sit at Pos 3 ✓

  KEY INSIGHT: "NOT adjacent" eliminates the 2 neighbors.
  In a circle of N, each person has exactly 2 neighbors.
  "Not adjacent" removes those 2 options.
```

---

## Type 9: Condition — "A Sits 3rd to the Left of B"

**Q: Eight persons sit in a circle facing center. A sits 3rd to the left of B. C sits 2nd to the right of A. D sits opposite C. Find who is between A and D (counting clockwise from A).**

```
  8-seat circle, facing center:
  Left = Clockwise, Right = Anti-clockwise

           1
        8     2
       7   o   3
        6     4
           5

  Clue 1: A is 3rd to the LEFT of B
          Left = clockwise → count 3 clockwise from B
          If B at Pos 1 → A at Pos 4

  Clue 2: C is 2nd to the RIGHT of A
          Right = anti-clockwise → count 2 anti-CW from A
          A at Pos 4 → Pos 3 → Pos 2 → C at Pos 2

  Clue 3: D opposite C → C at Pos 2, D at Pos 6

         B(1)
      (8)    C(2)
     (7)  o   (3)
      D(6)   A(4)
         (5)

  Clockwise from A: Pos 5, Pos 6(=D)
  Between A and D clockwise: person at Pos 5

  Answer: Person at Pos 5 sits between A and D ✓

  DECODE SHORTCUT:
  "Xth to the LEFT" = X seats CLOCKWISE (facing center)
  "Xth to the RIGHT" = X seats ANTI-CLOCKWISE (facing center)

  For facing OUTSIDE: directions REVERSE!
  "Xth to the LEFT" = X seats ANTI-CLOCKWISE
  "Xth to the RIGHT" = X seats CLOCKWISE
```

---

## Type 10: Finding Who Sits Where From Multiple Clues

**Q: Five persons A, B, C, D, E sit in a row facing North. C is not at any end. D is to the right of C but to the left of E. B is at the right end. A is to the left of C. Find the complete arrangement.**

```
  5 positions, all face North (↑):
    1    2    3    4    5

  Step 1: List all clues
    (i)   C is NOT at Pos 1 or 5
    (ii)  D is to the RIGHT of C → D's pos > C's pos
    (iii) D is to the LEFT of E → D's pos < E's pos
    (iv)  B is at right end → B at Pos 5
    (v)   A is to the LEFT of C → A's pos < C's pos

  Step 2: From (ii) and (iii): C ... D ... E (left to right)
          From (v): A ... C ... D ... E
          From (iv): B at Pos 5

  Step 3: Order is A, C, D, E with B at end
          A(1), C(2), D(3), E(4), B(5)? → C at Pos 2 (not end ✓)
          Check: A < C ✓, C < D ✓, D < E ✓, B at 5 ✓, C not end ✓

    1    2    3    4    5
    A    C    D    E    B
    ↑    ↑    ↑    ↑    ↑

  Answer: A, C, D, E, B (left to right) ✓

  STRATEGY:
  1. Fix absolute positions first (ends, middle)
  2. Chain relative clues: A < C < D < E
  3. Fill remaining slots
  4. Verify ALL clues satisfied
```

---

## Type 11: Relative Position Problems (Who Is Between A and B)

**Q: Eight persons sit in a circle facing center. A sits 4th to the left of B. C sits 2nd to the right of B. D sits opposite A. How many persons sit between C and D (counting clockwise from C)?**

```
  8-seat circle, facing center:
  Left = Clockwise

           1
        8     2
       7   o   3
        6     4
           5

  Clue 1: A is 4th to LEFT of B (= 4 clockwise from B)
          B at Pos 1 → A at Pos 5

  Clue 2: C is 2nd to RIGHT of B (= 2 anti-clockwise from B)
          B at Pos 1 → Pos 8 → Pos 7 → C at Pos 7

  Clue 3: D opposite A → A at Pos 5, D at Pos 1 = B!
          Wait — D is at B's position? That's impossible.
          Re-read: D opposite A. A at 5, opposite = 5-4=1.
          Pos 1 = B. So D ≠ B, let me adjust.
          Place B at Pos 2 instead.
          A at Pos 6, C at Pos 8, D opposite A(6) = Pos 2 = B again.
          Place B at Pos 3: A at Pos 7, C at Pos 1, D opp A(7) = Pos 3 = B.
          Place B at Pos 4: A at Pos 8, C at Pos 2, D opp A(8) = Pos 4 = B.

  Better example: D sits 3rd to left of A.
  B at 1, A at 5, C at 7, D 3 clockwise from A(5) = Pos 8

         B(1)
      D(8)   (2)
     C(7)  o  (3)
      (6)    (4)
         A(5)

  Clockwise from C(7): Pos 8(D), that's it before D.
  Persons between C and D clockwise = 0 (they are adjacent)

  Answer: 0 persons between C and D (they are adjacent) ✓

  METHOD for "between X and Y":
  1. Place both X and Y on diagram
  2. Count seats between them in specified direction
  3. Don't count X or Y themselves
```

---

## Type 12: Mixed Arrangement (Some Face In, Some Face Out)

**Q: Six persons sit in a circle. A, B, C face center. D, E, F face outside. A sits 2nd to the left of D. B sits opposite E. C is adjacent to A. Find who sits to the immediate right of D.**

```
  6-seat circle, MIXED facing:

  CRITICAL RULE:
  Facing CENTER:  Left = Clockwise,  Right = Anti-CW
  Facing OUTSIDE: Left = Anti-CW,    Right = Clockwise

         1
       6   2
       5   3
         4

  Clue 1: A is 2nd to LEFT of D
          A faces CENTER → A's left = clockwise
          So A is 2 seats clockwise from D
          If D at Pos 1 → A at Pos 3

  Clue 2: B opposite E → 3 positions apart
          (in 6-seat circle, opposite = +3)

  Clue 3: C adjacent to A (Pos 3) → C at Pos 2 or 4

  D(1) faces OUT       A(3) faces IN
         D(1)↑OUT
      (6)      (2)
      (5)      A(3)↓IN
         (4)

  Clue: B opposite E. B faces IN, E faces OUT.
  If B at Pos 2, E at Pos 5. C at Pos 4 (adj to A).
  F at Pos 6.

         D(1)↑
     F(6)↑    B(2)↓
     E(5)↑    A(3)↓
         C(4)↓

  Immediate RIGHT of D:
  D faces OUTSIDE → Right = CLOCKWISE → Pos 2 = B

  Answer: B sits to the immediate right of D ✓

  MIXED FACING CHEAT:
  ┌──────────────────────────────────────────────┐
  │  Person faces CENTER:                        │
  │    Left = CW,     Right = Anti-CW            │
  │                                              │
  │  Person faces OUTSIDE:                       │
  │    Left = Anti-CW, Right = CW               │
  │                                              │
  │  Always ask: "Which way does THIS person     │
  │  face?" before deciding left/right.          │
  └──────────────────────────────────────────────┘
```
