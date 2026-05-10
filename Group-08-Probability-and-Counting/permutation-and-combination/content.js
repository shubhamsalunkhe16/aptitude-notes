module.exports = {
  title: "PERMUTATION & COMBINATION — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Factorial & Basics",
      color: "#1971c2", bg: "#d0ebff",
      text: "n! = n × (n-1) × ... × 1\n0! = 1,  1! = 1\n2!=2  3!=6  4!=24  5!=120  6!=720  7!=5040\n\nn!/k! = multiply top k terms\n10!/8! = 10×9 = 90" },
    { title: "Permutation (Order MATTERS)",
      color: "#2f9e44", bg: "#ebfbee",
      text: "nPr = n! / (n-r)!\nnPn = n!  (all items)\nWith repetition: n^r\nRepeated items: n! / (p1!×p2!×...)\nCircular: (n-1)!\nNecklace: (n-1)!/2" },
    { title: "Combination (Order does NOT matter)",
      color: "#e8590c", bg: "#fff4e6",
      text: "nCr = n! / [r!(n-r)!]\nnCr = nC(n-r)   nC0 = nCn = 1\nnCr = nPr / r!\nHandshakes = nC2 = n(n-1)/2\nDiagonals = n(n-3)/2" },
    { title: "Key Identities & Shortcuts",
      color: "#7048e8", bg: "#e5dbff",
      text: "At least 1 = Total - None\nAt most k = C(0)+C(1)+...+C(k)\nnC0+nC1+...+nCn = 2^n\nPascal: nCr + nC(r-1) = (n+1)Cr\nDerangement D(n): 0,1,2,9,44,265\nD(n) = (n-1)[D(n-1)+D(n-2)]" }
  ],

  types: [
    { num: "1", title: "Basic Factorial", color: "#2f9e44", bg: "#ebfbee",
      q: "Find the value of 8! / 6!",
      tree: "LOGIC:\nStep 1: 8!/6! = (8×7×6!)/6!\nStep 2: Cancel 6! → 8×7 = 56\n\nTRICK:\nn!/k! = product of top (n-k) terms\n8!/6! → top 2 terms = 8×7 = 56\n10!/8! = 10×9 = 90\n\nAnswer: 56 ✓" },

    { num: "2", title: "Basic Permutation nPr", color: "#1971c2", bg: "#d0ebff",
      q: "In how many ways can you arrange 3 letters chosen from the word LOGIC (5 distinct letters)?",
      tree: "LOGIC:\nStep 1: 5 letters, pick & arrange 3\nStep 2: 5P3 = 5!/(5-3)! = 120/2 = 60\n\nTRICK:\nSlot method: fill slots left to right\n  ┌───┐┌───┐┌───┐\n  │ 5 ││ 4 ││ 3 │ = 60\n  └───┘└───┘└───┘\n  1st  2nd  3rd\n\nAnswer: 60 ways ✓" },

    { num: "3", title: "Basic Combination nCr", color: "#e8590c", bg: "#fff4e6",
      q: "In how many ways can a committee of 3 members be formed from a group of 7 people?",
      tree: "LOGIC:\nStep 1: Select 3 from 7, order irrelevant\nStep 2: 7C3 = 7!/(3!×4!)\n  = (7×6×5)/(3×2×1) = 35\n\nTRICK:\nnCr = multiply top r terms / r!\n7C3 = (7×6×5)/6 = 35\nOR: 7C3 = 7C4 (complement)\n\nAnswer: 35 ways ✓" },

    { num: "4", title: "Perm vs Comb — Identify", color: "#7048e8", bg: "#e5dbff",
      q: "In how many ways can you select 4 books from 10? And in how many ways can you arrange 4 of those books on a shelf?",
      tree: "LOGIC:\nStep 1: SELECT → nCr, ARRANGE → nPr\n  10C4 = (10×9×8×7)/24 = 210\n  10P4 = 10×9×8×7 = 5040\n\nTRICK:\nnPr = nCr × r!\n5040 = 210 × 24 ✓\nJust check: does ORDER matter?\nYes→nPr  No→nCr\n\nAnswer: Select=210, Arrange=5040 ✓" },

    { num: "5", title: "Letters — All Distinct", color: "#e03131", bg: "#ffe3e3",
      q: "How many different words (arrangements) can be formed using all the letters of the word DESIGN (6 distinct letters)?",
      tree: "LOGIC:\nStep 1: 6 distinct letters → 6!\nStep 2: = 720\n\nTRICK:\n  ┌───┐┌───┐┌───┐┌───┐┌───┐┌───┐\n  │ 6 ││ 5 ││ 4 ││ 3 ││ 2 ││ 1 │= 720\n  └───┘└───┘└───┘└───┘└───┘└───┘\nStart with D: fix D → 5! = 120\nStart D, end N: fix both → 4! = 24\n\nAnswer: 720 ways ✓" },

    { num: "6", title: "Repeated Letters (MISSISSIPPI)", color: "#c92a2a", bg: "#fff5f5",
      q: "How many distinct arrangements can be made using all the letters of the word MISSISSIPPI?",
      tree: "LOGIC:\nStep 1: M=1, I=4, S=4, P=2 → 11 letters\nStep 2: 11!/(1!×4!×4!×2!)\n  = 39916800/1152 = 34650\n\nTRICK:\nn! / (repeat factorials)\nDivide by each repeated letter's factorial\nBALLOON: 7!/(2!×2!) = 1260\n\nAnswer: 34650 ways ✓" },

    { num: "7", title: "Circular Permutation", color: "#0c8599", bg: "#c3fae8",
      q: "In how many ways can 6 people be seated around a round table?",
      tree: "LOGIC:\nStep 1: Fix 1 person, arrange rest\nStep 2: (n-1)! = 5! = 120\n\nTRICK:\nCircular = (n-1)! always\nWHY: rotations are same\nABCDEF = BCDEFA = CDEFAB...\nLine: n! | Circle: (n-1)!\n\n     A\n   F   B\n   E   C\n     D\n\nAnswer: 120 ways ✓" },

    { num: "8", title: "Committee Selection", color: "#862e9c", bg: "#f3d9fa",
      q: "From a group of 8 men and 5 women, in how many ways can a committee of 3 men and 2 women be formed?",
      tree: "LOGIC:\nStep 1: Pick 3 from 8M AND 2 from 5W\nStep 2: 8C3 × 5C2 = 56 × 10 = 560\n\nTRICK:\nAND = MULTIPLY, OR = ADD\n8C3 = (8×7×6)/6 = 56\n5C2 = (5×4)/2 = 10\nTotal = 56 × 10 = 560\n\nAnswer: 560 ways ✓" },

    { num: "9", title: "At Least / At Most / Exactly", color: "#f08c00", bg: "#fff3bf",
      q: "From a group of 6 men and 4 women, in how many ways can a committee of 4 be formed that includes at least 1 woman?",
      tree: "LOGIC:\nStep 1: Total 10C4 = 210\n  No women = 6C4 = 15\nStep 2: At least 1W = 210-15 = 195\n\nTRICK:\nAt least 1 = Total - None\n(complement is always faster)\nDirect: 1W+2W+3W+4W = 195 (slower)\n\nAnswer: 195 ways ✓" },

    { num: "10", title: "Handshakes / Diagonals", color: "#2f9e44", bg: "#ebfbee",
      q: "If 12 people shake hands with each other exactly once, how many handshakes occur? Also, how many diagonals does a 10-sided polygon have?",
      tree: "LOGIC:\nStep 1: Handshakes = 12C2 = 12×11/2 = 66\nStep 2: Diagonals = 10C2 - 10\n  = 45-10 = 35\n\nTRICK:\nHandshakes = n(n-1)/2\nDiagonals = n(n-3)/2\n12 people: 12×11/2 = 66\n10-gon: 10×7/2 = 35\n\nAnswer: Handshakes=66, Diag=35 ✓" },

    { num: "11", title: "Distribution into Groups", color: "#1971c2", bg: "#d0ebff",
      q: "In how many ways can 12 books be divided equally among 3 children?",
      tree: "LOGIC:\nStep 1: 12 books → 3 children (4 each)\nStep 2: 12C4 × 8C4 × 4C4\n  = 495 × 70 × 1 = 34650\n\nTRICK:\nNamed groups: n!/(r!)^k\nUnnamed piles: n!/[(r!)^k × k!]\n→ 34650/3! = 5775 (unnamed)\nChildren are named → 34650\n\nAnswer: 34650 ways ✓" },

    { num: "12", title: "Always / Never Together", color: "#e8590c", bg: "#fff4e6",
      q: "In how many ways can the letters of the word ORANGE be arranged so that the vowels are always together? And in how many ways so that the vowels are never together?",
      tree: "LOGIC:\nStep 1: Vowels O,A,E → bundle [OAE]\n  Bundle + R,N,G = 4 units → 4!\n  Inside bundle → 3!\nStep 2: Always = 4!×3! = 144\n  Never = 6!-144 = 576\n\nTRICK:\nAlways: bundle them, n!×r!\nNever: Total - Always\n= 720 - 144 = 576\n\nAnswer: Always=144, Never=576 ✓" },

    { num: "13", title: "Fixed/Restricted Positions", color: "#7048e8", bg: "#e5dbff",
      q: "How many 4-digit odd numbers can be formed using the digits 1, 2, 3, 4, 5 without repetition?",
      tree: "LOGIC:\nStep 1: Odd → units = 1,3,5 (3 choices)\nStep 2: Fill restricted spot first!\n  Remaining 3 spots from 4 digits\n  = 3 × 4×3×2 = 72\n\nTRICK:\nFill restricted position FIRST\n  ┌───┐┌───┐┌───┐┌───┐\n  │ 4 ││ 3 ││ 2 ││ 3 │ = 72\n  └───┘└───┘└───┘└───┘\n              Units(odd)\n\nAnswer: 72 ways ✓" },

    { num: "14", title: "Rank of Word in Dictionary", color: "#e03131", bg: "#ffe3e3",
      q: "What is the rank of the word SUGAR when all arrangements of its letters are listed in dictionary (alphabetical) order?",
      tree: "LOGIC:\nStep 1: Alpha: A G R S U\n  Before S: A_=24, G_=24, R_=24 → 72\nStep 2: SA_:6, SG_:6, SR_:6 → 18\n  SUA_:2, then SUGAR → 1\n  Rank = 72+18+2+1 = 93\n\nTRICK:\nCount letters < current × (remaining)!\nA(24)+G(24)+R(24)+SA(6)+SG(6)\n+SR(6)+SUA(2)+SUGAR(1) = 93\n\nAnswer: Rank = 93rd ✓" },

    { num: "15", title: "Necklace / Garland", color: "#0c8599", bg: "#c3fae8",
      q: "In how many distinct ways can 8 different beads be arranged to form a necklace?",
      tree: "LOGIC:\nStep 1: Circular: (n-1)! = 7! = 5040\nStep 2: Necklace: flip = same\n  = 5040/2 = 2520\n\nTRICK:\nNecklace = (n-1)!/2\nLine: n! | Circle: (n-1)!\nNecklace: (n-1)!/2 (extra /2 for flip)\n= 7!/2 = 2520\n\nAnswer: 2520 ways ✓" },

    { num: "16", title: "Derangements", color: "#862e9c", bg: "#f3d9fa",
      q: "In how many ways can 4 letters be placed in 4 addressed envelopes such that every letter goes into the wrong envelope?",
      tree: "LOGIC:\nStep 1: All misplaced → Derangement\nStep 2: D(4) = 4![1-1+1/2-1/6+1/24]\n  = 24 × 3/8 = 9\n\nTRICK:\nMemorize: D(1)=0 D(2)=1 D(3)=2\nD(4)=9 D(5)=44 D(6)=265\nRecurrence: D(n) = (n-1)[D(n-1)+D(n-2)]\nD(4) = 3×(2+1) = 9\n\nAnswer: 9 ways ✓" }
  ]
};
