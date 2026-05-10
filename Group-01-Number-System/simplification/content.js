module.exports = {
  title: "SIMPLIFICATION (BODMAS, FRACTIONS, DECIMALS) — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "BODMAS Order of Operations",
      color: "#1971c2", bg: "#d0ebff",
      text: "B — Brackets ( ), { }, [ ]  (innermost first)\nO — Orders (powers, roots)\nD — Division  (left to right)\nM — Multiplication (left to right)\nA — Addition  (left to right)\nS — Subtraction (left to right)\n\nD & M have EQUAL precedence (L to R)\nA & S have EQUAL precedence (L to R)\n\nWHY: Without a fixed order, 2+3×4 could be 20 or 14.\n  Convention: multiply first → 2+12=14 is correct.\n\nEx: 6+8÷4×3 → 6+2×3 → 6+6 = 12 ✓" },
    { title: "Fraction & Decimal Rules",
      color: "#2f9e44", bg: "#ebfbee",
      text: "a/b + c/d = (ad + bc) / bd\na/b - c/d = (ad - bc) / bd\na/b x c/d = ac / bd\na/b / c/d = a/b x d/c = ad/bc\n\nDecimal to Fraction: 0.375 = 375/1000 = 3/8\nFraction to Decimal: 3/8 = 0.375\n\nCommon: 1/8=0.125, 1/6=0.1667, 1/3=0.333\n\nWHY: a/b+c/d → common den bd, so ad/bd+bc/bd=(ad+bc)/bd\n  Division by fraction=multiply by its reciprocal\n\nEx: 2/3+1/4 = (8+3)/12 = 11/12 ✓\n  2/3÷1/4 = 2/3×4/1 = 8/3 ✓" },
    { title: "Algebraic Identities",
      color: "#e8590c", bg: "#fff4e6",
      text: "(a+b)^2 = a^2 + 2ab + b^2\n(a-b)^2 = a^2 - 2ab + b^2\na^2-b^2 = (a+b)(a-b)\n\n(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3\n(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3\n\nSurds: a/sqrt(b) = a*sqrt(b)/b (rationalize)\n\nWHY: (a+b)^2 = (a+b)(a+b) = a^2+ab+ba+b^2 = a^2+2ab+b^2\n  a^2-b^2 = (a+b)(a-b) by expanding right side\n\nEx: 52^2 = (50+2)^2 = 2500+200+4 = 2704 ✓\n  99^2-1^2 = (100)(98) = 9800 ✓" },
    { title: "Approximation & % Shortcuts",
      color: "#7048e8", bg: "#e5dbff",
      text: "Round to nearest easy number:\n  4.97 x 3.02 ~ 5 x 3 = 15\n  999 x 12 = (1000-1) x 12 = 11988\n\n% to Fraction shortcuts:\n  12.5%=1/8, 25%=1/4, 33.33%=1/3\n  37.5%=3/8, 66.67%=2/3, 75%=3/4\n\nx% of y = y% of x (commutative)\n\nWHY: x% of y = xy/100 = y% of x (multiplication commutes)\n  Rounding works because small errors cancel out\n\nEx: 8% of 50 = 50% of 8 = 4 (much easier!) ✓\n  998×7 = (1000-2)×7 = 7000-14 = 6986 ✓" }
  ],

  types: [
    { num: "1", title: "BODMAS Order of Operations",
      color: "#2f9e44", bg: "#ebfbee",
      q: "Simplify: 18 + 12 / 4 x 3 - 2",
      tree: "LOGIC:\nStep 1: Division first: 12/4=3\n  = 18+3×3-2\nStep 2: Multiply: 3×3=9\n  = 18+9-2 = 25\n\nTRICK:\nBODMAS: D and M left to right first\nThen A and S left to right\n\n  18 + 12/4 × 3 - 2\n       ───\n  18 +  3  × 3 - 2\n        ─────\n  18 +    9    - 2  = 25\n\nAnswer: 25 ✓" },

    { num: "2", title: "Nested Brackets (Complex Expression)",
      color: "#c92a2a", bg: "#fff5f5",
      q: "Simplify: 2[3 + {4 - (5 - 3)} x 2]",
      tree: "LOGIC:\nStep 1: Innermost (): (5-3)=2\n  = 2[3+{4-2}×2]\nStep 2: {}: {4-2}=2\n  = 2[3+2×2] = 2[3+4] = 14\n\nTRICK:\nAlways inside-out: ()→{}→[]\nSolve innermost bracket first\nThen apply BODMAS within each level\n\n  2[ 3 + { 4 - (5-3) } × 2 ]\n               ─────\n  2[ 3 + {  4 - 2  } × 2 ]\n          ─────────\n  2[ 3 +     2     × 2 ]\n  2[ 3 +       4        ] = 2×7 = 14\n\nAnswer: 14 ✓" },

    { num: "3", title: "Square Using (a+b)^2 / (a-b)^2",
      color: "#0c8599", bg: "#c3fae8",
      q: "Find 47^2 using algebraic identity.",
      tree: "LOGIC:\nStep 1: 47 = 50-3\n  (50-3)² = 2500-300+9\nStep 2: = 2209\n\nTRICK:\n(a-b)² = a²-2ab+b²\n47² = 50²-2(50)(3)+3² = 2209\n53² = 50²+300+9 = 2809\nPick nearest round number!\n\n  47² = (50-3)²\n      = 50² - 2×50×3 + 3²\n      = 2500 - 300   + 9  = 2209\n\nAnswer: 2209 ✓" },

    { num: "4", title: "Difference of Squares a^2-b^2",
      color: "#862e9c", bg: "#f3d9fa",
      q: "Find the value of 78^2 - 22^2.",
      tree: "LOGIC:\nStep 1: a²-b² = (a+b)(a-b)\nStep 2: = (78+22)(78-22)\n  = 100×56 = 5600\n\nTRICK:\na²-b² = (a+b)(a-b)\nLook for sum/diff that are round numbers!\n78+22=100, 78-22=56 → easy!\n\n  78²-22² = (78+22) × (78-22)\n          =  100    ×   56\n          = 5600\n\nAnswer: 5600 ✓" },

    { num: "5", title: "Cube Formulas (a+b)^3",
      color: "#f08c00", bg: "#fff3bf",
      q: "Find 21^3 using algebraic identity.",
      tree: "LOGIC:\nStep 1: 21 = 20+1\n  (20+1)³ = 8000+1200+60+1\nStep 2: = 9261\n\nTRICK:\n(a+b)³ = a³+3a²b+3ab²+b³\nOR: a³+b³+3ab(a+b)\n= 8000+1+3(20)(1)(21) = 8001+1260\n= 9261\n\n  21³ = 20³ + 3×20²×1 + 3×20×1² + 1³\n      = 8000 +  1200   +   60    +  1\n      = 9261\n\nAnswer: 9261 ✓" },

    { num: "6", title: "Approximation Tricks",
      color: "#1971c2", bg: "#d0ebff",
      q: "Approximate: 4.98 x 6.03 + 2.97 x 3.04",
      tree: "LOGIC:\nStep 1: Round: 5×6+3×3\nStep 2: = 30+9 = 39\n  Exact = 39.06 (very close!)\n\nTRICK:\nRound to nearest integer\n999×45 = (1000-1)×45 = 44955\nUse (a±small) for quick estimates\n\n  4.98×6.03 + 2.97×3.04\n  ~ 5×6     + 3×3\n  =  30     +  9  = 39 (exact: 39.06)\n\nAnswer: ~39 ✓" },

    { num: "7", title: "Percentage-Based Simplification",
      color: "#e8590c", bg: "#fff4e6",
      q: "Find 37.5% of 480.",
      tree: "LOGIC:\nStep 1: 37.5% = 3/8\nStep 2: 3/8 × 480 = 3×60 = 180\n\nTRICK:\nMemorize % to fraction:\n12.5%=1/8, 25%=1/4, 33.3%=1/3\n37.5%=3/8, 62.5%=5/8, 75%=3/4\nTIP: x% of y = y% of x\n\n  |████ 37.5% ████|░░░ 62.5% ░░░|\n  37.5% = 3/8\n  3/8 × 480 = 180\n\nAnswer: 180 ✓" }
  ]
};
