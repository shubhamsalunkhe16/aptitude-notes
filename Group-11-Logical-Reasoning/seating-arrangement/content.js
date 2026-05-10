module.exports = {
  title: "SEATING ARRANGEMENT — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Linear Arrangement Basics", color: "#2f9e44", bg: "#ebfbee",
      text: "N persons in a line = N! arrangements\nPositions: LEFT to RIGHT = 1, 2, 3 ... N\n\nNth from right = position (Total - N + 1)\n\"Immediately left of B\" = position (B - 1)\n\"2nd to the left of B\" = position (B - 2)\n\nWHY: Each of N slots is filled left to right;\n  N choices for slot 1, N-1 for slot 2, ...\n  Total = N! = N*(N-1)*...*1\n\nEx: 4 persons → 4! = 24 arrangements\n  3rd from right in 6 = 6-3+1 = pos 4" },
    { title: "Circular Arrangement Basics", color: "#1971c2", bg: "#d0ebff",
      text: "N persons in circle = (N-1)! arrangements\nFix one person, arrange rest relative\n\nFacing CENTER:  Left = CW,  Right = Anti-CW\nFacing OUTSIDE: Left = Anti-CW, Right = CW\n\nOpposite seat = current + N/2 (N must be even)\n\nWHY: In a circle, rotations are identical.\n  N! total ÷ N rotations = (N-1)!\n\nEx: 5 persons in circle = 4! = 24 ways\n  Opposite in 8-seat circle: pos 3 → 3+4 = pos 7" },
    { title: "Two-Row & Rectangular", color: "#e8590c", bg: "#fff4e6",
      text: "Two rows facing each other:\n  Opposite = directly facing in other row\n  Left/Right depends on person's own facing\n\nRectangular table:\n  Number seats clockwise\n  Opposite = across the table\n\nWHY: Two-row is like a mirror; left/right\n  flips when facing direction reverses.\n\nEx: Row1 faces S, Row2 faces N, 4 per row\n  R1-pos3 faces R2-pos3 (same column)" },
    { title: "Key Direction Rules", color: "#7048e8", bg: "#e5dbff",
      text: "FACING CENTER:  Left=Clockwise  Right=Anti-CW\nFACING OUTSIDE: Left=Anti-CW   Right=Clockwise\n  (REVERSED from facing center!)\n\nLINEAR same dir: use normal left/right\nLINEAR two rows: each person's OWN perspective\n\"Xth to left of B\" = start at B, go left X times\n\nWHY: Looking at center, your left hand\n  traces CW arc. Facing out, it reverses\n  because you turned 180°.\n\nEx: 6 in circle facing center, A at pos 1\n  2nd left of A = 2 CW = pos 3" }
  ],

  types: [
    { num: "1", title: "Linear -- Same Direction", color: "#2f9e44", bg: "#ebfbee",
      q: "6 persons in a row facing North. B is 3rd from left. A is immediately right of B. C is at extreme left. Who is 3rd from right?",
      tree: "LOGIC:\nStep 1: B at pos 3, A right of B at pos 4\nStep 2: C at extreme left = pos 1\nStep 3: 3rd from right = (6-3+1) = pos 4\n\n  C  _  B  A  _  _\n  1  2  3  4  5  6\n\nTRICK:\nNth from right = (Total - N + 1)\n3rd from right = 6-3+1 = pos 4 = A\n\nAnswer: A is 3rd from the right ✓" },

    { num: "2", title: "Linear -- Opposite Directions", color: "#1971c2", bg: "#d0ebff",
      q: "5 persons in a row, some face N, some S. R faces S in middle. P is immediately left of R, faces N. Who is at Pos 4?",
      tree: "LOGIC:\nStep 1: R at pos 3 faces South\nStep 2: P left of R = pos 2, faces North\nStep 3: Pos 4 is to R's right\n\n  _  P(N) R(S)  _   _\n  1   2    3    4   5\n       ^    v\n\nTRICK:\nFix definite positions first (R=3, P=2).\nFor mixed directions, use POSITION numbers\nnot personal perspective.\n\nAnswer: Need more clues for Pos 4 ✓" },

    { num: "3", title: "Two Rows Facing Each Other", color: "#e8590c", bg: "#fff4e6",
      q: "Row 1 faces South, Row 2 faces North. B faces Q. A is to B's right. P is opposite C. Who is opposite A?",
      tree: "LOGIC:\nStep 1: B faces Q -> same column pos 3\nStep 2: A to B's right (facing S=leftward)\nStep 3: A at R1-P2\n\n  Row1(S): _ A B _  (face South)\n           1 2 3 4\n  Row2(N): _ ? Q _  (face North)\n\nTRICK:\nOpposite = same column, other row.\nRight/Left depends on FACING direction.\nFacing S: right appears as left on diagram.\n\nAnswer: Person at R2-P2 is opposite A ✓" },

    { num: "4", title: "Circular -- Facing Center", color: "#7048e8", bg: "#e5dbff",
      q: "8 persons in circle facing center. A is 3rd to left of D. B is opposite A. C is immediately right of B. Who is opposite D?",
      tree: "LOGIC:\nStep 1: A is 3 left(CW) of D -> pos 4\nStep 2: B opposite A -> pos 4+4 = pos 8\nStep 3: C right(Anti-CW) of B -> pos 7\nStep 4: Opposite D(1) = 1+4 = pos 5\n\n       D(1)\n    B(8)   (2)\n   C(7)  o  (3)\n    (6)    A(4)\n       (5)\n\nTRICK:\nOpposite = current + N/2\nFacing center: Left=CW, Right=Anti-CW\n\nAnswer: Person at Pos 5 is opposite D ✓" },

    { num: "5", title: "Circular -- Facing Outside", color: "#e03131", bg: "#ffe3e3",
      q: "6 persons face OUTSIDE in a circle. P is 2nd to right of Q. R is opposite P. Who is immediately left of R?",
      tree: "LOGIC:\nStep 1: Facing OUT: Right=CW, Left=Anti-CW\nStep 2: P 2nd right(CW) of Q -> pos 3\nStep 3: R opposite P(3) -> pos 6\nStep 4: Left of R(Anti-CW) -> pos 5\n\n     Q(1)\n  R(6)   (2)\n  (5)    P(3)\n     (4)\n\nTRICK:\nFacing OUT reverses L/R from facing IN.\nOUT: Left=Anti-CW, Right=CW\n\nAnswer: Person at Pos 5 ✓" },

    { num: "6", title: "Rectangular Table", color: "#c92a2a", bg: "#fff5f5",
      q: "8 persons at rectangular table (3+3+1+1). A at short side. B is 2nd to left of A. E is opposite A. Who is opposite B?",
      tree: "LOGIC:\nStep 1: A at short side = P1\nStep 2: B 2nd left(CW) of A -> P3\nStep 3: E opposite A -> P5\nStep 4: P3 opposite -> P7\n\n     B -- P3 -- P4\nA   |             |  E\n     P8 -- P7 -- P6\n\nTRICK:\nNumber seats CW. Opposite = across table.\nFor 8 seats: opposite = pos + 4 (mod 8)\n\nAnswer: Person at P7 is opposite B ✓" },

    { num: "7", title: "\"Left of B\" / \"Adjacent\"", color: "#0c8599", bg: "#c3fae8",
      q: "7 in a row facing N. A is left of B (not immediately). C is immediately right of A. C and D are adjacent. Find order.",
      tree: "LOGIC:\nStep 1: A left of B (gap >= 1)\nStep 2: C immediately right of A\nStep 3: C,D adjacent -> chain: A,C,D\nStep 4: B must be after the chain\n\n  _  A  C  D  _  _  B\n  1  2  3  4  5  6  7\n\nTRICK:\nBuild chains from \"immediately\" clues first.\nThen place chains using \"left/right\" clues.\n\nAnswer: A at 2, C at 3, D at 4, B at 7 ✓" },

    { num: "8", title: "\"NOT Adjacent\" / \"Opposite\"", color: "#862e9c", bg: "#f3d9fa",
      q: "6 in circle facing center. A and B are NOT adjacent. C is opposite A. D is immediately left of C. Where is B?",
      tree: "LOGIC:\nStep 1: C opposite A -> pos 4 (A at 1)\nStep 2: D left(CW) of C -> pos 5\nStep 3: B NOT adjacent to A -> not 2,6\nStep 4: B not at 4(C) or 5(D) -> B at 3\n\n     A(1)\n  (6)    (2)\n  D(5)   B(3)\n     C(4)\n\nTRICK:\nEliminate: adjacent(2,6), occupied(4,5)\nOnly pos 3 left for B.\n\nAnswer: B is at Pos 3 ✓" },

    { num: "9", title: "\"3rd to the Left of B\"", color: "#f08c00", bg: "#fff3bf",
      q: "8 in circle facing center. A is 3rd to left of B. C is 2nd to right of A. D is opposite C. Find D's position.",
      tree: "LOGIC:\nStep 1: A 3rd left(CW) of B -> pos 4\nStep 2: C 2nd right(Anti-CW) of A -> pos 2\nStep 3: D opposite C(2) = 2+4 = pos 6\n\n     B(1)\n  (8)    C(2)\n (7)  o   (3)\n  D(6)   A(4)\n     (5)\n\nTRICK:\nOpposite in circle of N = pos + N/2\nFor 8: opposite = pos + 4\nC(2) + 4 = pos 6\n\nAnswer: D is at Pos 6 ✓" },

    { num: "10", title: "Multiple Clues -> Full Seating", color: "#2f9e44", bg: "#ebfbee",
      q: "5 in a row facing N. C not at ends. D right of C, left of E. B at right end. A left of C. Find arrangement.",
      tree: "LOGIC:\nStep 1: B at pos 5 (right end)\nStep 2: C not at ends -> pos 2,3,4\nStep 3: A < C < D < E < B (chain)\nStep 4: A=1, C=2, D=3, E=4, B=5\n\n  A  C  D  E  B\n  1  2  3  4  5\n\nTRICK:\nFix endpoints first (B=5).\nChain inequalities to order the rest.\n\nAnswer: A, C, D, E, B ✓" },

    { num: "11", title: "Relative Position (Between A and B)", color: "#1971c2", bg: "#d0ebff",
      q: "8 in circle facing center. A is 4th left of B. C is 2nd right of B. How many persons between A and C clockwise from A?",
      tree: "LOGIC:\nStep 1: A 4th CW from B -> pos 5\nStep 2: C 2nd Anti-CW from B -> pos 7\nStep 3: CW from A(5): 6, 7(=C)\nStep 4: 1 person between them\n\n     B(1)\n  (8)    (2)\n C(7)  o  (3)\n  (6)    (4)\n     A(5)\n\nTRICK:\nCount seats between (exclusive both ends).\nCW from A to C: 5->6->7, between=1\n\nAnswer: 1 person between A and C ✓" },

    { num: "12", title: "Mixed Facing (In + Out)", color: "#e8590c", bg: "#fff4e6",
      q: "6 in circle. A,B,C face center. D,E,F face outside. A is 2nd left of D. B opposite E. Who is immediately right of D?",
      tree: "LOGIC:\nStep 1: A 2nd left of D: D faces OUT\n  -> left = Anti-CW -> A at pos 3\nStep 2: B opp E: B at 2, E at 5\nStep 3: Right of D: faces OUT -> R=CW\n  D(1) CW -> pos 2 = B\n\n     D(1)out\n F(6)out  B(2)in\n E(5)out  A(3)in\n     C(4)in\n\nTRICK:\nFacing OUT: Left=Anti-CW, Right=CW\nFacing IN:  Left=CW, Right=Anti-CW\nAlways check WHOSE perspective!\n\nAnswer: B is immediately right of D ✓" }
  ]
};
