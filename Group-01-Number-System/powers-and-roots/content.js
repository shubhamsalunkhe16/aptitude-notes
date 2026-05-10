module.exports = {
  title: "POWERS AND ROOTS — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Laws of Exponents", color: "#2f9e44", bg: "#ebfbee",
      text: "a^m x a^n = a^(m+n)    Product rule\na^m / a^n = a^(m-n)    Division rule\n(a^m)^n   = a^(m x n)  Power of power\n(ab)^n    = a^n x b^n   Power of product\na^0 = 1    a^(-n) = 1/a^n    a^(1/n) = nth root of a\n\nWHY: a^m × a^n = (a×...m)(a×...n) = a repeated m+n times\n  Division removes n copies → m-n remain\n\nEx: 2^3 × 2^4 = 8×16 = 128 = 2^7 (3+4=7) ✓" },
    { title: "Squares (1-30) Table", color: "#1971c2", bg: "#d0ebff",
      text: "1=1   2=4   3=9   4=16   5=25   6=36\n7=49  8=64  9=81  10=100 11=121 12=144\n13=169 14=196 15=225 16=256 17=289 18=324\n19=361 20=400 21=441 22=484 23=529 24=576\n25=625 26=676 27=729 28=784 29=841 30=900\nTRICK: (a5)^2 = a(a+1) followed by 25\n\nWHY: (10a+5)^2 = 100a^2+100a+25 = 100a(a+1)+25\n  So prefix=a(a+1), suffix=25\n\nEx: 35^2 → 3×4=12, append 25 → 1225 ✓\n  65^2 → 6×7=42, append 25 → 4225 ✓" },
    { title: "Cubes (1-15) Table", color: "#e8590c", bg: "#fff4e6",
      text: "1=1     2=8     3=27    4=64    5=125\n6=216   7=343   8=512   9=729   10=1000\n11=1331  12=1728  13=2197  14=2744  15=3375\n\nCube unit digit: 1->1 2->8 3->7 4->4 5->5\n  6->6 7->3 8->2 9->9 0->0 (2<->8, 3<->7 swap)\n\nWHY: Cube unit digits follow from (d^3 mod 10)\n  2 and 8 swap, 3 and 7 swap, rest stay same\n\nEx: Cube root of 4913 → unit digit 3→answer ends in 7\n  Remove last 3 digits: 4→nearest cube 1^3=1, tens=1\n  Answer=17. 17^3=4913 ✓" },
    { title: "Square/Cube Root Rules", color: "#7048e8", bg: "#e5dbff",
      text: "sqrt(a x b) = sqrt(a) x sqrt(b)\nsqrt(a / b) = sqrt(a) / sqrt(b)\nRationalize: 1/(sqrt(a)+sqrt(b)) = (sqrt(a)-sqrt(b))/(a-b)\nNested: sqrt(sqrt(x)) = x^(1/4) = 4th root\n  cube_root(sqrt(x)) = x^(1/6) = 6th root\n\nWHY: (sqrt(a)×sqrt(b))^2 = a×b, so sqrt(a×b)=sqrt(a)×sqrt(b)\n  Rationalize uses (x+y)(x-y)=x^2-y^2 to clear surds\n\nEx: sqrt(50)=sqrt(25×2)=5sqrt(2)\n  1/(sqrt(5)+sqrt(3))=(sqrt(5)-sqrt(3))/(5-3)=(sqrt(5)-sqrt(3))/2 ✓" },
    { title: "Unit Digit Cyclicity", color: "#e03131", bg: "#ffe3e3",
      text: "Period 4: 2(2,4,8,6) 3(3,9,7,1) 7(7,9,3,1) 8(8,4,2,6)\nPeriod 2: 4(4,6)  9(9,1)\nPeriod 1: 0,1,5,6 always same\n\nFind unit digit of a^n:\n  n mod period = r -> pick r-th in cycle\n  If r=0, use LAST value in cycle!\n\nWHY: Multiplying by same digit repeats unit digits\n  in a fixed cycle (mod 10 arithmetic)\n\nEx: 8^15 → period=4, 15 mod 4=3 → 3rd in (8,4,2,6) → 2 ✓\n  Verify: 8^3=512, unit digit=2 ✓" },
    { title: "Digits & Estimation", color: "#0c8599", bg: "#c3fae8",
      text: "Digits in a^n = floor(n x log10(a)) + 1\nlog(2)=0.301 log(3)=0.477 log(5)=0.699 log(7)=0.845\n\nSqrt estimation: sqrt(N) ~ p + (N-p^2)/(2p)\n  where p^2 is nearest perfect square <= N\n\nPerfect square: unit digit 0,1,4,5,6,9 only\n  digital root must be 1,4,7,9\n\nWHY: A number with d digits satisfies 10^(d-1)<=a^n<10^d\n  Taking log: d-1<=n×log(a)<d → d=floor(n×log(a))+1\n\nEx: Digits in 5^20 = floor(20×0.699)+1 = floor(13.98)+1 = 14 ✓" }
  ],

  types: [
    { num: "1", title: "Laws of Exponents", color: "#2f9e44", bg: "#ebfbee",
      q: "Simplify the expression (2^5 x 2^3) / 2^4 using the laws of exponents.",
      tree: "LOGIC:\nStep 1: Numerator: 2^5 × 2^3 = 2^8\nStep 2: 2^8 / 2^4 = 2^(8-4) = 2^4 = 16\n\nTRICK:\nSame base → add/subtract exponents\nNum: 5+3=8, then 8-4=4\n2^4 = 16\n\n  2^5 × 2^3     2^8\n  ────────── = ───── = 2^(8-4) = 2^4 = 16\n     2^4        2^4\n\nAnswer: 16 ✓" },

    { num: "2", title: "Simplify Power Expressions", color: "#1971c2", bg: "#d0ebff",
      q: "Simplify: (3^4 x 3^(-2) x 3) / (3^2 x 3^(-1)).",
      tree: "LOGIC:\nStep 1: Num exponent: 4+(-2)+1 = 3\n  Den exponent: 2+(-1) = 1\nStep 2: 3^3/3^1 = 3^2 = 9\n\nTRICK:\nCollect all exponents, subtract\nNum total - Den total = 3-1 = 2\n3^2 = 9\n\n  Num: +4 -2 +1 = 3\n  Den: +2 -1     = 1\n  ─────────────────\n  Net: 3-1 = 2 → 3^2 = 9\n\nAnswer: 9 ✓" },

    { num: "3", title: "Solve Exponential Equation", color: "#e8590c", bg: "#fff4e6",
      q: "If 4 raised to the power x equals 32, find the value of x.",
      tree: "LOGIC:\nStep 1: 4^x = 32\n  (2^2)^x = 2^5 → 2^(2x) = 2^5\nStep 2: 2x = 5 → x = 2.5\n\nTRICK:\nConvert to same base (usually 2 or 3)\n4=2², 32=2⁵ → equate exponents\n2x=5 → x=2.5\n\n  4^x = 32\n  (2^2)^x = 2^5\n   2^2x   = 2^5  → 2x=5 → x=2.5\n\nAnswer: x = 2.5 ✓" },

    { num: "4", title: "Compare Two Powers", color: "#7048e8", bg: "#e5dbff",
      q: "Which is larger: 2^30 or 3^20?",
      tree: "LOGIC:\nStep 1: Make exponents equal\n  2^30 = (2^3)^10 = 8^10\n  3^20 = (3^2)^10 = 9^10\nStep 2: 9>8 → 9^10 > 8^10\n\nTRICK:\nLCM of exponents, then compare bases\nOr use logs: 30×0.301=9.03 vs 20×0.477=9.54\n3^20 wins!\n\n  2^30 = 8^10 ─┐\n                ├─ 8 < 9 → 3^20 wins\n  3^20 = 9^10 ─┘\n\nAnswer: 3^20 is larger ✓" },

    { num: "5", title: "Square Root Simplification", color: "#e03131", bg: "#ffe3e3",
      q: "Simplify the square root of 288 into its simplest surd form.",
      tree: "LOGIC:\nStep 1: 288 = 144×2 = 12²×2\nStep 2: √288 = √(144×2) = 12√2\n\nTRICK:\nFind largest perfect square factor\n288/4=72, 72/4=18, 18/9=2\n144×2 → 12√2\n\n  288 = 2⁵ × 3²\n      = (2² × 3)² × 2\n      = 12² × 2  → √288 = 12√2\n\nAnswer: 12√2 ✓" },

    { num: "6", title: "Cube Root Simplification", color: "#c92a2a", bg: "#fff5f5",
      q: "Find the cube root of 5832.",
      tree: "LOGIC:\nStep 1: 5832 = 2³×3⁶ = (2×9)³ = 18³\nStep 2: ∛5832 = 18\n\nTRICK:\nLast digit 2 → answer ends in 8\nRemove last 3 digits: 5 → nearest\ncube below = 1³=1, so tens=1\nAnswer = 18\n\n  5832 → unit=2 → cube root ends in 8\n  5    → 1³=1 < 5 < 2³=8 → tens=1\n  ∛5832 = 18\n\nAnswer: 18 ✓" },

    { num: "7", title: "Rationalize the Denominator", color: "#0c8599", bg: "#c3fae8",
      q: "Rationalize: 5 / (sqrt(3) + sqrt(2)).",
      tree: "LOGIC:\nStep 1: Multiply by conjugate\n  5(√3-√2) / (√3+√2)(√3-√2)\nStep 2: = 5(√3-√2) / (3-2) = 5(√3-√2)\n\nTRICK:\n(√a+√b)(√a-√b) = a-b\nMultiply top & bottom by conjugate\nDenominator becomes rational integer\n\n     5         5(√3-√2)     5(√3-√2)\n  ─────── × conjugate = ─────── = ───────\n  √3+√2                  3-2        1\n\nAnswer: 5(√3-√2) ✓" },

    { num: "8", title: "Add/Subtract Surds", color: "#862e9c", bg: "#f3d9fa",
      q: "Simplify: 3*sqrt(50) + 2*sqrt(18) - sqrt(72).",
      tree: "LOGIC:\nStep 1: Simplify each surd\n  √50=5√2, √18=3√2, √72=6√2\nStep 2: 3(5√2)+2(3√2)-6√2\n  = 15√2+6√2-6√2 = 15√2\n\nTRICK:\nSimplify all to same surd first\nThen add/subtract like terms\nOnly LIKE surds can combine!\n\n  3×5√2 + 2×3√2 - 6√2\n  = (15 + 6 - 6)√2 = 15√2\n\nAnswer: 15√2 ✓" },

    { num: "9", title: "Unit Digit of Large Power", color: "#f08c00", bg: "#fff3bf",
      q: "Find the unit digit of 7^245.",
      tree: "LOGIC:\nStep 1: 7's cycle: 7,9,3,1 (period=4)\nStep 2: 245%4 = 1 → 1st in cycle = 7\n\nTRICK:\nPeriod-4 digits: 2,3,7,8\nn mod 4 → pick from cycle\nIf remainder=0 → use LAST in cycle\n\n  7^1=7  7^2=9  7^3=3  7^4=1\n   [1]    [2]    [3]    [4]\n  245 mod 4 = 1 → pick [1] = 7\n\nAnswer: Unit digit = 7 ✓" },

    { num: "10", title: "Remainder of Large Power", color: "#2f9e44", bg: "#ebfbee",
      q: "What is the remainder when 3^50 is divided by 5?",
      tree: "LOGIC:\nStep 1: 3^n mod 5 cycle: 3,4,2,1 (period=4)\nStep 2: 50%4=2 → 2nd in cycle = 4\n\nTRICK:\nFermat's: 3^4≡1(mod 5)\n3^50 = (3^4)^12 × 3^2 = 1×9 = 4(mod 5)\nFind cycle mod divisor, then use it\n\n  3^1≡3  3^2≡4  3^3≡2  3^4≡1 (mod 5)\n   [1]    [2]    [3]    [4]\n  50 mod 4 = 2 → pick [2] = 4\n\nAnswer: Remainder = 4 ✓" },

    { num: "11", title: "Square Root Estimation", color: "#1971c2", bg: "#d0ebff",
      q: "Estimate sqrt(68) without a calculator.",
      tree: "LOGIC:\nStep 1: Nearest square: 64=8²\n  d = 68-64 = 4\nStep 2: √68 ≈ 8 + 4/(2×8) = 8.25\n  Actual: 8.246\n\nTRICK:\n√N ≈ p + (N-p²)/(2p)\nwhere p² is nearest perfect square\nWorks great for quick estimation!\n\n  64 ── 68 ── 81\n  8²         9²\n  √68 ≈ 8 + (68-64)/(2×8) = 8.25\n\nAnswer: √68 ≈ 8.25 ✓" },

    { num: "12", title: "Perfect Square/Cube Check", color: "#e8590c", bg: "#fff4e6",
      q: "Is 7056 a perfect square? Is 2744 a perfect cube?",
      tree: "LOGIC:\nStep 1: 7056 = 2⁴×3²×7²\n  All even powers → perfect square\n  √7056 = 84\nStep 2: 2744 = 2³×7³ = 14³\n  All powers ÷3 → perfect cube\n\nTRICK:\nSquare: all prime powers even\nCube: all prime powers divisible by 3\nUnit digit check first (quick filter)\n\n  7056 = 2⁴ × 3² × 7²  (all even → ✓ square)\n  2744 = 2³ × 7³        (all ÷3  → ✓ cube)\n\nAnswer: √7056=84, ∛2744=14 ✓" },

    { num: "13", title: "Number of Digits in a^n", color: "#7048e8", bg: "#e5dbff",
      q: "How many digits are there in 2^100?",
      tree: "LOGIC:\nStep 1: Digits = floor(n×log10(a)) + 1\n  = floor(100×0.3010) + 1\nStep 2: = floor(30.10) + 1 = 31\n\nTRICK:\nDigits = floor(n×log(a)) + 1\nlog(2)=0.301 log(3)=0.477\nlog(5)=0.699 log(7)=0.845\n\n  Digits = floor(100 × 0.301) + 1\n         = floor(30.1) + 1\n         = 30 + 1 = 31\n\nAnswer: 2^100 has 31 digits ✓" },

    { num: "14", title: "Simplify Nested Roots", color: "#e03131", bg: "#ffe3e3",
      q: "Simplify sqrt(sqrt(256)) and cbrt(sqrt(729)).",
      tree: "LOGIC:\nStep 1: √(√256) = 256^(1/4)\n  256=4⁴ → 4th root = 4\nStep 2: ∛(√729) = 729^(1/6)\n  729=3⁶ → 6th root = 3\n\nTRICK:\nNested roots → MULTIPLY exponents\n√ then √ = 4th root (1/2×1/2=1/4)\n√ then ∛ = 6th root (1/2×1/3=1/6)\n\n  √(√256) = (256)^(1/2×1/2) = 256^(1/4)\n  256 = 4⁴ → (4⁴)^(1/4) = 4\n\n  ∛(√729) = (729)^(1/2×1/3) = 729^(1/6)\n  729 = 3⁶ → (3⁶)^(1/6) = 3\n\nAnswer: 4 and 3 ✓" },

    { num: "15", title: "Indices Comparison", color: "#0c8599", bg: "#c3fae8",
      q: "Arrange: 2^(1/2), 3^(1/3), 4^(1/4) in ascending order.",
      tree: "LOGIC:\nStep 1: LCM(2,3,4)=12, raise all\n  2^(1/2)=(2⁶)^(1/12)=64^(1/12)\n  3^(1/3)=(3⁴)^(1/12)=81^(1/12)\n  4^(1/4)=(4³)^(1/12)=64^(1/12)\nStep 2: 64=64<81\n\nTRICK:\nLCM the exponent denominators\nRaise to make same root\nThen compare the bases inside\n\n  All → 12th root:\n  2^(1/2) → 64^(1/12)\n  3^(1/3) → 81^(1/12)  ← largest\n  4^(1/4) → 64^(1/12)\n  64 = 64 < 81\n\nAnswer: 2^(1/2) = 4^(1/4) < 3^(1/3) ✓" }
  ]
};
