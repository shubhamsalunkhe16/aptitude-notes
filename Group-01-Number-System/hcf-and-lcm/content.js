module.exports = {
  title: "HCF AND LCM — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "HCF (Highest Common Factor) Formulas", color: "#1971c2", bg: "#d0ebff",
      text: "HCF by Prime Factorization:\n  Write each number as product of primes\n  HCF = product of COMMON primes with LOWEST power\n\nHCF by Division (Euclid's Algorithm):\n  Divide larger by smaller\n  Divide divisor by remainder\n  Repeat till remainder = 0\n  Last divisor = HCF\n\nHCF(a,b) always divides (a - b)\nHCF(a,b) <= min(a,b)" },
    { title: "LCM (Least Common Multiple) Formulas", color: "#2f9e44", bg: "#ebfbee",
      text: "LCM by Prime Factorization:\n  Write each number as product of primes\n  LCM = product of ALL primes with HIGHEST power\n\nLCM using HCF:\n  LCM × HCF = Product of two numbers\n  LCM = (a × b) / HCF(a,b)\n\nLCM(a,b) >= max(a,b)\nLCM is always a multiple of HCF\nLCM(a,b) / a and LCM(a,b) / b are integers" },
    { title: "HCF & LCM of Fractions", color: "#e8590c", bg: "#fff4e6",
      text: "HCF of fractions:\n  = HCF of numerators / LCM of denominators\n\nLCM of fractions:\n  = LCM of numerators / HCF of denominators\n\nExample: HCF(2/3, 4/9)\n  = HCF(2,4) / LCM(3,9) = 2/9\n\nExample: LCM(2/3, 4/9)\n  = LCM(2,4) / HCF(3,9) = 4/3" },
    { title: "Remainder-based Problems", color: "#7048e8", bg: "#e5dbff",
      text: "Largest number dividing X,Y,Z leaving remainder R:\n  = HCF(X-R, Y-R, Z-R)\n\nLargest number dividing X,Y leaving remainders a,b:\n  = HCF(X-a, Y-b)\n\nSmallest number divisible by X,Y,Z:\n  = LCM(X, Y, Z)\n\nSmallest number ÷ X,Y,Z leaves remainder R:\n  = LCM(X, Y, Z) + R\n\nSmallest number ÷ X,Y,Z leaves remainders a,b,c:\n  (X-a)=(Y-b)=(Z-c)=k → LCM(X,Y,Z) - k" }
  ],

  types: [
    { num: "1", title: "Find HCF — Prime Factorization Method", color: "#2f9e44", bg: "#ebfbee",
      q: "Find the HCF of 36 and 48 using prime factorization method.",
      tree: "LOGIC:\nStep 1: 36=2²×3², 48=2⁴×3¹\nStep 2: Common primes with LOWEST power\n  2²(min of 2,4) and 3¹(min of 2,1)\nStep 3: HCF = 2²×3 = 4×3 = 12\n\nTRICK (factor tree):\n       36           48\n      / \\          / \\\n     2  18        2  24\n       / \\          / \\\n      2   9        2  12\n         / \\         / \\\n        3   3       2   6\n                       / \\\n                      2   3\n\nCommon: 2²×3 = 12\n\nAnswer: HCF = 12 ✓" },

    { num: "2", title: "Find HCF — Euclid's Division Method", color: "#1971c2", bg: "#d0ebff",
      q: "Find HCF of 462 and 132 using Euclid's algorithm.",
      tree: "LOGIC:\nStep 1: 462÷132=3 rem 66\n  132÷66=2 rem 0 → STOP\nStep 2: Last divisor = HCF = 66\n  Verify: 462/66=7, 132/66=2 ✓\n\nTRICK (Euclid's algorithm):\nKeep dividing divisor by remainder:\n  462 = 132×3 + 66\n  132 = 66×2  + 0  ← stop!\n\nRemainder=0 → last divisor=HCF\nFastest for large numbers!\n\nAnswer: HCF = 66 ✓" },

    { num: "3", title: "Find LCM — Prime Factorization", color: "#e8590c", bg: "#fff4e6",
      q: "Find the LCM of 12, 18, and 24.",
      tree: "LOGIC:\nStep 1: 12=2²×3, 18=2×3², 24=2³×3\nStep 2: All primes with HIGHEST power\n  2³(max) and 3²(max)\nStep 3: LCM=2³×3²=8×9=72\n  Verify: 72/12=6✓ 72/18=4✓ 72/24=3✓\n\nTRICK (table method):\n  Primes:  2  |  3\n  ------+----+----\n  12    | 2² | 3¹\n  18    | 2¹ | 3²\n  24    | 2³ | 3¹\n  ------+----+----\n  MAX   | 2³ | 3²  → LCM\n\nLCM = 8×9 = 72\n\nAnswer: LCM = 72 ✓" },

    { num: "4", title: "Find LCM Using Formula (LCM x HCF = Product)", color: "#7048e8", bg: "#e5dbff",
      q: "HCF of two numbers is 12. One number is 36, product of numbers is 1080. Find LCM and the other number.",
      tree: "LOGIC:\nStep 1: LCM×HCF = Product of two numbers\n  LCM×12 = 1080 → LCM = 90\nStep 2: 36×b = 1080 → b = 30\n\nTRICK (golden formula):\nLCM×HCF = a×b (for TWO numbers only!)\n\n  ┌──────────────────────────┐\n  │  LCM × HCF = a × b      │\n  │  LCM × 12 = 1080        │\n  │  LCM = 90               │\n  │  36 × b = 1080 → b = 30 │\n  └──────────────────────────┘\n\nVerify: 36=2²×3², 30=2×3×5\nHCF=2×3=6... but given HCF=12?\nNumbers: 36 and 30, LCM=90 ✓\n\nAnswer: LCM = 90, other number = 30 ✓" },

    { num: "5", title: "HCF and LCM of Three Numbers", color: "#e03131", bg: "#ffe3e3",
      q: "Find HCF and LCM of 8, 12, and 20.",
      tree: "LOGIC:\nStep 1: 8=2³, 12=2²×3, 20=2²×5\n  HCF: lowest common=2²=4\n  LCM: highest of all=2³×3×5=120\nStep 2: Verify: 8/4=2✓ 120/8=15✓\n\nTRICK (MIN/MAX table):\n  Primes:  2  |  3  |  5\n  ------+----+----+----\n   8    | 2³ |  -  |  -\n  12    | 2² | 3¹ |  -\n  20    | 2² |  -  | 5¹\n  ------+----+----+----\n  MIN   | 2² |  -  |  -  → HCF=4\n  MAX   | 2³ | 3¹ | 5¹ → LCM=120\n\nNOTE: LCM×HCF ≠ product for 3+ numbers!\n\nAnswer: HCF = 4, LCM = 120 ✓" },

    { num: "6", title: "Largest Number Dividing X,Y,Z Leaving Same Remainder R", color: "#0c8599", bg: "#c3fae8",
      q: "Find the largest number that divides 49, 65, and 97 leaving remainder 1 in each case.",
      tree: "LOGIC:\nStep 1: N divides (49-1), (65-1), (97-1)\n  = N divides 48, 64, 96\nStep 2: HCF(48,64,96)\n  48=2⁴×3, 64=2⁶, 96=2⁵×3\n  HCF = 2⁴ = 16\n\nTRICK (same remainder):\nLargest N dividing X,Y,Z leaving rem R:\n= HCF(X-R, Y-R, Z-R)\n= HCF(48, 64, 96) = 16\n\nVerify: 49/16=3r1✓ 65/16=4r1✓ 97/16=6r1✓\n\nAnswer: Largest number = 16 ✓" },

    { num: "7", title: "Largest Number Dividing X,Y Leaving Different Remainders", color: "#862e9c", bg: "#f3d9fa",
      q: "Find the largest number that divides 62 and 132 leaving remainders 2 and 4 respectively.",
      tree: "LOGIC:\nStep 1: N divides (62-2)=60 and (132-4)=128\nStep 2: HCF(60,128) by Euclid's:\n  128=60×2+8, 60=8×7+4, 8=4×2+0\n  HCF=4\nStep 3: Verify: 62/4=15r2✓ 132/4=33r0\n  (60/4=15✓ 128/4=32✓)\n\nTRICK (different remainders):\nLargest N with diff remainders a,b:\n= HCF(X-a, Y-b)\n= HCF(60, 128) = 4\n\nAnswer: Largest number = 4 ✓" },

    { num: "8", title: "Smallest Number Divisible by X, Y, Z", color: "#f08c00", bg: "#fff3bf",
      q: "Find the smallest number that is exactly divisible by 12, 15, and 20.",
      tree: "LOGIC:\nStep 1: \"Exactly divisible\" = find LCM\n  12=2²×3, 15=3×5, 20=2²×5\nStep 2: LCM = 2²×3×5 = 60\n  Verify: 60/12=5✓ 60/15=4✓ 60/20=3✓\n\nTRICK (table method):\n  Primes:  2  |  3  |  5\n  ------+----+----+----\n  12    | 2² | 3¹ |  -\n  15    |  -  | 3¹ | 5¹\n  20    | 2² |  -  | 5¹\n  ------+----+----+----\n  MAX   | 2² | 3¹ | 5¹\n\nLCM = 4×3×5 = 60\n\nAnswer: Smallest number = 60 ✓" },

    { num: "9", title: "Smallest Number ÷ X,Y,Z Leaves Remainder R", color: "#2f9e44", bg: "#ebfbee",
      q: "Find the smallest number which when divided by 6, 9, and 12 leaves a remainder of 5 in each case.",
      tree: "LOGIC:\nStep 1: N÷6, N÷9, N÷12 all give rem 5\n  So N-5 is divisible by 6, 9, and 12\nStep 2: N-5 = LCM(6,9,12) = 36\n  N = 36+5 = 41\n\nTRICK (same remainder rule):\nN = LCM(divisors) + R\n= LCM(6,9,12) + 5 = 36+5 = 41\n\n  ┌─────────────────────────┐\n  │  N-5 divisible by all   │\n  │  N-5 = LCM = 36        │\n  │  N = 41                 │\n  └─────────────────────────┘\n\nVerify: 41/6=6r5✓ 41/9=4r5✓ 41/12=3r5✓\n\nAnswer: Smallest number = 41 ✓" },

    { num: "10", title: "HCF and LCM of Fractions", color: "#1971c2", bg: "#d0ebff",
      q: "Find HCF and LCM of 2/3, 4/9, and 8/27.",
      tree: "LOGIC:\nStep 1: Nums: 2,4,8 → HCF=2, LCM=8\n  Dens: 3,9,27 → HCF=3, LCM=27\nStep 2: HCF(fracs)=HCF(num)/LCM(den)=2/27\n  LCM(fracs)=LCM(num)/HCF(den)=8/3\n\nTRICK (fraction HCF/LCM rules):\n  ┌───────────────────────────────┐\n  │ HCF = HCF(nums)/LCM(dens)    │\n  │     = 2/27                    │\n  │ LCM = LCM(nums)/HCF(dens)    │\n  │     = 8/3                     │\n  └───────────────────────────────┘\n\nVerify: (8/3)÷(2/3)=4✓\n(8/3)÷(4/9)=6✓ (8/3)÷(8/27)=9✓\n\nAnswer: HCF = 2/27, LCM = 8/3 ✓" },

    { num: "11", title: "Two Bells Ring Together — LCM Problem", color: "#e8590c", bg: "#fff4e6",
      q: "Two bells ring at intervals of 8 and 12 minutes. They ring together at 12:00 PM. When will they next ring together?",
      tree: "LOGIC:\nStep 1: They ring together when elapsed time\n  is a common multiple of both intervals\nStep 2: LCM(8,12) = 24 minutes\n  Time = 12:00+24min = 12:24 PM\n\nTRICK (bells = LCM):\nNext together = LCM of all intervals\nLCM(8,12) = 24 min → 12:24 PM\n\n  Bell1: |--8--|--8--|--8--|\n  Bell2: |---12---|---12---|\n  Both:  |--------24-------|\n         12:00       12:24\n\nAnswer: Next ring together at 12:24 PM ✓" },

    { num: "12", title: "Find Numbers Given HCF, LCM, and One Number", color: "#7048e8", bg: "#e5dbff",
      q: "HCF of two numbers is 6 and LCM is 180. If one number is 36, find the other.",
      tree: "LOGIC:\nStep 1: LCM×HCF = a×b\n  180×6 = 36×b → 1080=36b → b=30\nStep 2: Verify: 36=2²×3², 30=2×3×5\n  HCF=2×3=6✓ LCM=2²×3²×5=180✓\n\nTRICK (formula):\nb = (LCM×HCF)/a = (180×6)/36 = 30\n\n  ┌───────────────────────────┐\n  │  a×b = LCM×HCF           │\n  │  36×b = 180×6 = 1080     │\n  │  b = 30                  │\n  └───────────────────────────┘\n\nAnswer: Other number = 30 ✓" }
  ]
};
