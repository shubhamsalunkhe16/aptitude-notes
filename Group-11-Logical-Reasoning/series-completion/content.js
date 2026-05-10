module.exports = {
  title: "SERIES COMPLETION & PATTERN RECOGNITION — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Arithmetic Series (AP)",
      color: "#2f9e44", bg: "#ebfbee",
      text: "nth term:  a(n) = a + (n-1)d\nSum of n:  S(n) = n/2 x [2a + (n-1)d]\n\nCommon diff d = a(2)-a(1) = constant\nMissing term = (prev + next) / 2" },
    { title: "Geometric Series (GP)",
      color: "#1971c2", bg: "#d0ebff",
      text: "nth term:  a(n) = a x r^(n-1)\nCommon ratio r = a(2)/a(1) = constant\n\nSum of n:  S(n) = a(r^n - 1)/(r - 1)\nMissing term = sqrt(prev x next)" },
    { title: "Power-Based Series",
      color: "#e8590c", bg: "#fff4e6",
      text: "Squares: 1,4,9,16,25,36,49,64,81,100\nCubes:   1,8,27,64,125,216,343,512\n\nn^2+1: 2,5,10,17,26   n^2-1: 0,3,8,15,24\nn(n+1): 2,6,12,20,30  n^3+1: 2,9,28,65" },
    { title: "Prime Numbers (first 15)",
      color: "#7048e8", bg: "#e5dbff",
      text: "2, 3, 5, 7, 11, 13, 17, 19, 23,\n29, 31, 37, 41, 43, 47\n\nGaps: 1,2,2,4,2,4,2,4,6,2,6,4,2,4\nTwin primes(gap=2): (3,5)(5,7)(11,13)(17,19)" },
    { title: "Fibonacci & Recursive",
      color: "#e03131", bg: "#ffe3e3",
      text: "F(n) = F(n-1) + F(n-2)\n1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89\n\nVariants: sum of prev 3, product rule,\n          sum + constant, any starting pair" },
    { title: "Difference Table Method",
      color: "#0c8599", bg: "#c3fae8",
      text: "D1 constant -> AP (linear)\nD2 constant -> Quadratic (squares)\nD3 constant -> Cubic\n\nD1 forms GP -> geometric-diff series\nKeep taking diffs until constant row!" }
  ],

  types: [
    { num: "1", title: "Arithmetic Series (Constant Diff)",
      color: "#2f9e44", bg: "#ebfbee",
      q: "Find the next number in the series: 5, 8, 11, 14, 17, ?",
      tree: "LOGIC:\nStep 1: Diffs: 8-5=3, 11-8=3, 14-11=3, 17-14=3\nStep 2: Constant diff d=3 -> AP\nStep 3: Next = 17+3 = 20\n\nTRICK:\na(n) = a + (n-1)d = 5 + 5x3 = 20\nOr just: last + d = 17+3 = 20\n\nAnswer: 20 ✓" },

    { num: "2", title: "Geometric Series (Constant Ratio)",
      color: "#1971c2", bg: "#d0ebff",
      q: "Find the next number in the series: 3, 6, 12, 24, 48, ?",
      tree: "LOGIC:\nStep 1: Ratios: 6/3=2, 12/6=2, 24/12=2, 48/24=2\nStep 2: Constant ratio r=2 -> GP\nStep 3: Next = 48x2 = 96\n\nTRICK:\na(n) = a x r^(n-1) = 3 x 2^5 = 96\nOr just: last x r = 48x2 = 96\n\nAnswer: 96 ✓" },

    { num: "3", title: "Difference Series (Diffs Form AP)",
      color: "#e8590c", bg: "#fff4e6",
      q: "Find the next number in the series: 1, 2, 5, 10, 17, 26, ?",
      tree: "LOGIC:\nStep 1: D1: 1,3,5,7,9 -> AP with d=2\nStep 2: Next D1 = 9+2 = 11\nStep 3: Next term = 26+11 = 37\n\nTRICK:\nPattern: n^2 + 1 for n=0,1,2,3,4,5,6\n6^2 + 1 = 37\nD2 constant -> square-based series!\n\nAnswer: 37 ✓" },

    { num: "4", title: "Two-Tier Difference Series",
      color: "#7048e8", bg: "#e5dbff",
      q: "Find the next number in the series: 2, 4, 10, 22, 42, ?",
      tree: "LOGIC:\nStep 1: D1: 2, 6, 12, 20\nStep 2: D2: 4, 6, 8 -> AP with d=2\nStep 3: Next D2=10, D1=20+10=30\nStep 4: Next = 42+30 = 72\n\nTRICK:\nD2 constant = quadratic series.\nKeep taking diffs until constant row.\nThen work back up to find next term.\n\nAnswer: 72 ✓" },

    { num: "5", title: "Alternating Series (Interleaved)",
      color: "#e03131", bg: "#ffe3e3",
      q: "Find the next number in the series: 3, 5, 7, 10, 11, 15, 15, ?",
      tree: "LOGIC:\nStep 1: Odd positions:  3,7,11,15 -> AP d=4\nStep 2: Even positions: 5,10,15,? -> AP d=5\nStep 3: Next is pos 8 (even) = 15+5 = 20\n\nTRICK:\nNo single pattern? Split odd/even positions!\nTwo interleaved series, solve each.\nNext even-pos term: 15+5 = 20\n\nAnswer: 20 ✓" },

    { num: "6", title: "Square / Cube Based Series",
      color: "#c92a2a", bg: "#fff5f5",
      q: "Find the next number in the series: 2, 5, 10, 17, 26, 37, ?",
      tree: "LOGIC:\nStep 1: D1: 3,5,7,9,11 -> AP d=2\nStep 2: D2: 2,2,2,2 -> constant!\nStep 3: Next D1 = 13, next = 37+13 = 50\n\nTRICK:\nPattern: n^2 + 1\n7^2 + 1 = 49+1 = 50\nD2 constant = always a square-based series.\n\nAnswer: 50 ✓" },

    { num: "7", title: "Prime Number Series",
      color: "#0c8599", bg: "#c3fae8",
      q: "Find the next number in the series: 2, 3, 5, 7, 11, 13, ?",
      tree: "LOGIC:\nStep 1: Check if all are primes: YES\nStep 2: Consecutive primes in order\nStep 3: Next prime after 13 = 17\n\nTRICK:\nIrregular gaps (1,2,2,4,2...)? Check primes!\nMemorize: 2,3,5,7,11,13,17,19,23,29\nPrime = divisible only by 1 and itself.\n\nAnswer: 17 ✓" },

    { num: "8", title: "Fibonacci-Like Series",
      color: "#862e9c", bg: "#f3d9fa",
      q: "Find the next number in the series: 2, 3, 5, 8, 13, 21, ?",
      tree: "LOGIC:\nStep 1: 2+3=5, 3+5=8, 5+8=13, 8+13=21\nStep 2: Each term = sum of previous two\nStep 3: Next = 21+13 = 34\n\nTRICK:\nEach = prev + prev-prev? Fibonacci!\nWorks with ANY starting pair.\nF(n) = F(n-1) + F(n-2)\n\nAnswer: 34 ✓" },

    { num: "9", title: "Letter Series (Alphabet)",
      color: "#f08c00", bg: "#fff3bf",
      q: "Find the next letter in the series: A, C, E, G, I, ?",
      tree: "LOGIC:\nStep 1: Convert: A=1, C=3, E=5, G=7, I=9\nStep 2: Diffs: +2, +2, +2, +2 -> AP\nStep 3: Next = 9+2 = 11 = K\n\nTRICK:\nAlways convert letters to numbers first!\nSolve as number series, convert back.\nWrap: after Z(26) -> A(1) [mod 26]\n\nAnswer: K ✓" },

    { num: "10", title: "Alpha-Numeric Series",
      color: "#2f9e44", bg: "#ebfbee",
      q: "Find the next term in the series: A1, B2, C4, D8, E16, ?",
      tree: "LOGIC:\nStep 1: Letters: A,B,C,D,E -> +1 each = F\nStep 2: Numbers: 1,2,4,8,16 -> x2 each = 32\nStep 3: Combine: F32\n\nTRICK:\nSplit letter and number parts separately!\nSolve each as independent series.\nLetters: AP +1. Numbers: GP x2.\n\nAnswer: F32 ✓" },

    { num: "11", title: "Wrong Number (Odd One Out)",
      color: "#1971c2", bg: "#d0ebff",
      q: "Find the wrong number in the series: 2, 5, 10, 17, 24, 37, 50",
      tree: "LOGIC:\nStep 1: D1: 3,5,7,7,13,13\nStep 2: Expected D1: 3,5,7,9,11,13 (AP d=2)\nStep 3: 7 repeats at pos 4-5 -> pos 5 wrong\nStep 4: 24 should be 17+9 = 26\n\nTRICK:\nFind the pattern break in D1.\nReplace wrong term to restore the AP.\nCorrected: 2,5,10,17,26,37,50\n\nAnswer: 24 is wrong, should be 26 ✓" },

    { num: "12", title: "Missing Number in Middle",
      color: "#e8590c", bg: "#fff4e6",
      q: "Find the missing number in the series: 3, 7, 15, ?, 63, 127",
      tree: "LOGIC:\nStep 1: D1: 4, 8, ?, ?, 64\nStep 2: D1 looks like GP: 4,8,16,32,64 (x2)\nStep 3: 15+16 = 31. Verify: 63-32 = 31 ✓\n\nTRICK:\nPattern: 2^n - 1 for n=2,3,4,5,6,7\n2^5 - 1 = 31\nOr check from both sides to verify.\n\nAnswer: 31 ✓" },

    { num: "13", title: "Mixed Operations Pattern",
      color: "#7048e8", bg: "#e5dbff",
      q: "Find the next number in the series: 2, 3, 5, 9, 17, 33, ?",
      tree: "LOGIC:\nStep 1: 2x2-1=3, 3x2-1=5, 5x2-1=9\nStep 2: 9x2-1=17, 17x2-1=33\nStep 3: Pattern: each = prev x 2 - 1\n\nTRICK:\nRatio ~2? Try x2+1 or x2-1.\nNext = 33x2-1 = 65\nCommon patterns: xN+C, xN-C\n\nAnswer: 65 ✓" },

    { num: "14", title: "Number Analogy (a:b :: c:?)",
      color: "#e03131", bg: "#ffe3e3",
      q: "In the analogy 2 : 8 :: 3 : ?, find the missing number.",
      tree: "LOGIC:\nStep 1: Find relation: 2 -> 8\nStep 2: 2^3 = 8 (cube)\nStep 3: Apply same: 3^3 = 27\n\nTRICK:\nCheck common rules in order:\nn^2, n^3, 2n, n^2+1, n(n+1), n^2-1\n2^3=8 matches -> 3^3=27\n\nAnswer: 27 ✓" },

    { num: "15", title: "Mirror / Reverse Patterns",
      color: "#0c8599", bg: "#c3fae8",
      q: "Find the next number in the series: 12, 21, 34, 43, 56, ?",
      tree: "LOGIC:\nStep 1: Pairs: (12,21) (34,43) (56,?)\nStep 2: Each pair: number + its reverse\nStep 3: Base: 12,34,56 (+22 each)\n  Next = reverse of 56 = 65\n\nTRICK:\nAlternating: normal, reversed, normal...\nBase series +22: 12,34,56,78...\nOdd pos=normal, even pos=reversed digits.\n\nAnswer: 65 ✓" }
  ]
};
