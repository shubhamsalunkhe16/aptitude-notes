module.exports = {
  title: "PROBLEMS ON NUMBERS — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Two-Digit Number Representation", color: "#2f9e44", bg: "#ebfbee",
      text: "Number = 10a + b  (a=tens, b=units)\nReversed = 10b + a\nDifference = 9(a-b)\n\nThree-digit: 100a + 10b + c\nReversed: 100c + 10b + a\nDifference = 99(a-c)" },
    { title: "Sum & Difference Identity", color: "#1971c2", bg: "#d0ebff",
      text: "If Sum = S,  Difference = D:\n  Larger  = (S + D) / 2\n  Smaller = (S - D) / 2\n  Product = (S² - D²) / 4\n\n(a+b)² = a² + b² + 2ab\n(a-b)² = a² + b² - 2ab\na² - b² = (a+b)(a-b)" },
    { title: "Divisibility Rules", color: "#e8590c", bg: "#fff4e6",
      text: "By 2 → last digit even\nBy 3 → digit sum ÷ 3\nBy 4 → last 2 digits ÷ 4\nBy 5 → last digit 0 or 5\nBy 6 → div by 2 AND 3\nBy 8 → last 3 digits ÷ 8\nBy 9 → digit sum ÷ 9\nBy 11 → |odd-place sum - even-place sum| ÷ 11" },
    { title: "LCM and HCF", color: "#7048e8", bg: "#e5dbff",
      text: "LCM x HCF = Product of two numbers\nLCM = (a x b) / HCF\nHCF = (a x b) / LCM\n\nHCF = lowest powers of common primes\nLCM = highest powers of ALL primes\nHCF always divides LCM\nFor co-primes: HCF=1, LCM=a x b" },
    { title: "Remainder & Division", color: "#e03131", bg: "#ffe3e3",
      text: "N = D x Q + R  (0 <= R < D)\nDividend = Divisor x Quotient + Remainder\n\nSame remainder R with D1,D2:\n  N - R divisible by LCM(D1,D2)\n  N = LCM(D1,D2) x k + R" },
    { title: "Unit Digit Cyclicity", color: "#0c8599", bg: "#c3fae8",
      text: "Cycle period 4: digits 2,3,7,8\n  2: 2,4,8,6  |  3: 3,9,7,1\n  7: 7,9,3,1  |  8: 8,4,2,6\nCycle period 2: digits 4,9\n  4: 4,6      |  9: 9,1\nCycle period 1: 0,1,5,6 (always same)\n\nFind n mod period → pick from cycle\nIf mod=0, use LAST value in cycle" }
  ],

  types: [
    { num: "1", title: "Sum & Diff → Find Numbers", color: "#2f9e44", bg: "#ebfbee",
      q: "The sum of two numbers is 40 and their difference is 12. Find both numbers.",
      tree: "LOGIC:\nStep 1: Let L and S. L+S=40, L-S=12\n  Add: 2L=52→L=26. Sub: 2S=28→S=14\nStep 2: Check: 26+14=40✓ 26-14=12✓\n\nTRICK (formula):\nLarger = (Sum+Diff)/2 = (40+12)/2 = 26\nSmaller = (Sum-Diff)/2 = (40-12)/2 = 14\n\n  |◄──── 40 (sum) ────►|\n  |◄─ 14 ─►|◄── 26 ──►|\n\nAnswer: 26 and 14 ✓" },

    { num: "2", title: "Sum & Product of Digits", color: "#1971c2", bg: "#d0ebff",
      q: "A two-digit number has digits whose sum is 12 and whose product is 35. Find the number.",
      tree: "LOGIC:\nStep 1: a+b=12, a×b=35\n  b=12-a → a(12-a)=35 → a²-12a+35=0\nStep 2: (a-5)(a-7)=0 → a=5,b=7 or a=7,b=5\n  Numbers: 57 or 75. Check: 5+7=12✓ 5×7=35✓\n\nTRICK (quadratic shortcut):\nDigits are roots of: t²-(sum)t+(product)=0\nt²-12t+35=0 → t=5,7\nNumber = 57 or 75\n\nAnswer: 57 or 75 ✓" },

    { num: "3", title: "Reversed Digits", color: "#e8590c", bg: "#fff4e6",
      q: "A two-digit number exceeds the number formed by reversing its digits by 27, and the sum of the digits is 11. Find the number.",
      tree: "LOGIC:\nStep 1: Num-Rev=27 → 9(a-b)=27 → a-b=3\n  a+b=11. Add: 2a=14→a=7, b=4\nStep 2: Number=74, Rev=47. 74-47=27✓\n\nTRICK:\nDiff of 2-digit & reverse = 9|a-b|\n27/9=3 → digit diff=3\na-b=3, a+b=11 → a=7, b=4\n\n  [7|4]=74  [4|7]=47  74-47=27✓\n\nAnswer: 74 ✓" },

    { num: "4", title: "Consecutive Numbers Sum", color: "#7048e8", bg: "#e5dbff",
      q: "Sum of 3 consecutive odd numbers is 93. Find them.",
      tree: "LOGIC:\nStep 1: Let (a-2), a, (a+2)\n  Sum=3a=93 → a=31\nStep 2: Numbers: 29, 31, 33\n  Check: 29+31+33=93✓\n\nTRICK (middle number):\nMiddle = Sum/n = 93/3 = 31\nThen subtract/add the gap(2)\n\n  29 ── 31 ── 33\n    +2    +2\n\nNatural: gap=1 | Even/Odd: gap=2\n\nAnswer: 29, 31, 33 ✓" },

    { num: "5", title: "Divisibility Check", color: "#e03131", bg: "#ffe3e3",
      q: "Is 352836 divisible by 4, 9, and 11?",
      tree: "LOGIC:\nStep 1: 352836 → Digits: 3 5 2 8 3 6\n  By 4: last 2=36, 36/4=9 → YES\n  By 9: 3+5+2+8+3+6=27, 27/9=3 → YES\n  By 11: odd(6+8+5)=19, even(3+2+3)=8\n  |19-8|=11 → YES\n\nTRICK (divisibility rules):\nBy 4 → check last 2 digits only\nBy 9 → digit sum ÷ 9\nBy 11 → |odd pos sum - even pos sum| ÷ 11\nBy 6 = check 2 AND 3\nBy 12 = check 3 AND 4\n\nAnswer: Divisible by 4, 9, and 11 ✓" },

    { num: "6", title: "Remainder of Power", color: "#c92a2a", bg: "#fff5f5",
      q: "Remainder when 7^23 is divided by 4?",
      tree: "LOGIC:\nStep 1: Find cycle: 7¹→3, 7²→1, 7³→3...\n  Cycle period=2. 23 mod 2=1 → rem=3\n\nTRICK (-1 shortcut):\n7 mod 4 = 3 = -1 (mod 4)\n(-1)^odd = -1 = 4-1 = 3\n(-1)^even = 1\n\n7^23 = (-1)^23 = -1 ≡ 3 (mod 4)\n\nRule: If N≡-1(mod D):\n  odd power → D-1 | even power → 1\n\nAnswer: Remainder = 3 ✓" },

    { num: "7", title: "Largest/Smallest N-Digit ÷ X", color: "#f08c00", bg: "#fff3bf",
      q: "Find the largest 4-digit number divisible by 13.",
      tree: "LOGIC:\nStep 1: Largest 4-digit=9999\n  9999÷13=769 rem 2\nStep 2: Subtract remainder: 9999-2=9997\n  Check: 9997/13=769 exactly ✓\n\nTRICK (formula):\nLargest N-digit ÷ X = N - (N mod X)\n= 9999 - 2 = 9997\nSmallest: N + (X - N mod X)\n\n  9997  9998  9999\n   ✓           (rem 2→subtract)\n\nAnswer: 9997 ✓" },

    { num: "8", title: "Remainder with Multiple Divisors", color: "#2f9e44", bg: "#ebfbee",
      q: "A number N leaves a remainder of 3 when divided by 5 and a remainder of 4 when divided by 7. Find the smallest such N.",
      tree: "LOGIC:\nStep 1: List N mod 5=3: 3,8,13,18,23...\n  List N mod 7=4: 4,11,18,25...\n  First match = 18\nStep 2: Check: 18/5=3r3✓ 18/7=2r4✓\n\nTRICK (list & match):\nList shorter cycle, check other condition\nN mod 7=4: 4,11,18... check 18 mod 5=3✓\n\nGeneral: N = 18+LCM(5,7)k = 18+35k\nAll solutions: 18, 53, 88...\n\nAnswer: Smallest N = 18 ✓" },

    { num: "9", title: "Sum & Diff → Product", color: "#1971c2", bg: "#d0ebff",
      q: "The sum of two numbers is 50 and their difference is 16. Find their product.",
      tree: "LOGIC:\nStep 1: L=(50+16)/2=33, S=(50-16)/2=17\nStep 2: Product = 33×17 = 561\n\nTRICK (direct formula):\nProduct = (S²-D²)/4\n= (2500-256)/4 = 2244/4 = 561\nSkips finding the actual numbers!\n\n  |◄──── 50 (sum) ────►|\n  |◄─ 17 ─►|◄── 33 ──►|\n\nAnswer: Product = 561 ✓" },

    { num: "10", title: "Fraction Numerator/Denominator", color: "#e8590c", bg: "#fff4e6",
      q: "If 2 is added to the numerator and 3 to the denominator of a fraction it becomes 3/4. If 3 is subtracted from the numerator and 2 from the denominator it becomes 1/3. Find the fraction.",
      tree: "LOGIC:\nStep 1: (x+2)/(y+3)=3/4→4x-3y=1...(1)\n  (x-3)/(y-2)=1/3→3x-y=7...(2)\nStep 2: From(2):y=3x-7. In(1):4x-3(3x-7)=1\n  4x-9x+21=1→x=4, y=5\n  Check: 6/8=3/4✓ 1/3=1/3✓\n\nTRICK (substitution):\nGet y from simpler eq, plug into other\nFrom 3x-y=7→y=3x-7 (quick!)\nThen solve single variable\n\nAnswer: Fraction = 4/5 ✓" },

    { num: "11", title: "Number = X x Digit Sum", color: "#e03131", bg: "#ffe3e3",
      q: "A two-digit number is 4 times the sum of its digits. If 18 is added to the number, the digits are reversed. Find the number.",
      tree: "LOGIC:\nStep 1: 10a+b=4(a+b)→6a=3b→b=2a...(1)\n  10a+b+18=10b+a→9a-9b=-18→a-b=-2...(2)\nStep 2: From(1): b=2a. In(2): a-2a=-2→a=2\n  b=4, Number=24. Check: 4×6=24✓ 24+18=42✓\n\nTRICK (try values):\nb=2a and a-b=-2. Try a=2→b=4→24\n24=4×(2+4)✓, 24+18=42(reversed)✓\n\n  [2|4]=24  [4|2]=42  24+18=42✓\n\nAnswer: 24 ✓" },

    { num: "12", title: "Consecutive Even/Odd Squares", color: "#0c8599", bg: "#c3fae8",
      q: "Sum of squares of 3 consecutive even numbers = 440. Find them.",
      tree: "LOGIC:\nStep 1: Let (a-2), a, (a+2)\n  (a-2)²+a²+(a+2)²=440 → 3a²+8=440\n  a²=144 → a=12. Numbers: 10,12,14\nStep 2: Check: 100+144+196=440✓\n\nTRICK (expansion formula):\n3 consecutive (gap=d): 3a²+2d²=sum\nHere d=2: 3a²+8=440→a²=144→a=12\n\n  10 ── 12 ── 14\n    +2    +2\n\nAnswer: 10, 12, 14 ✓" }
  ]
};
