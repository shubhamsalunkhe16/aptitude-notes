module.exports = {
  title: "FRACTIONS AND DECIMALS — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Fraction Basics", color: "#1971c2", bg: "#d0ebff",
      text: "Proper fraction: numerator < denominator (3/7)\nImproper fraction: numerator >= denominator (7/3)\nMixed fraction: whole + proper (2 1/3)\n\nImproper to Mixed: divide num by den\n  7/3 = 2 remainder 1 = 2⅓\n\nMixed to Improper: (whole x den + num) / den\n  2⅓ = (2x3+1)/3 = 7/3\n\nEquivalent fractions: a/b = (a×k)/(b×k)" },
    { title: "Operations on Fractions", color: "#2f9e44", bg: "#ebfbee",
      text: "Addition/Subtraction: Take LCM of denominators\n  a/b + c/d = (ad + bc) / bd\n  a/b - c/d = (ad - bc) / bd\n\nMultiplication: num × num / den × den\n  a/b × c/d = ac / bd\n\nDivision: Multiply by reciprocal\n  a/b ÷ c/d = a/b × d/c = ad / bc\n\nComparing: a/b vs c/d → cross multiply\n  If ad > bc then a/b > c/d" },
    { title: "Decimal ↔ Fraction Conversion", color: "#e8590c", bg: "#fff4e6",
      text: "Decimal to Fraction:\n  0.25 = 25/100 = 1/4\n  0.125 = 125/1000 = 1/8\n  Count decimal places → that many zeros in den\n\nFraction to Decimal: divide num by den\n  3/8 = 0.375 (terminating)\n  1/3 = 0.333... (recurring)\n\nTerminating: den has only 2s and 5s as factors\nRecurring: den has factors other than 2 and 5" },
    { title: "Recurring Decimal to Fraction", color: "#7048e8", bg: "#e5dbff",
      text: "Pure recurring (0.xxx...):\n  0.ababab... = ab / 99\n  0.abcabc... = abc / 999\n  Denominator = as many 9s as repeating digits\n\nMixed recurring (0.x_yyy...):\n  0.1666... = (16-1)/90 = 15/90 = 1/6\n  Formula: (entire - non-repeating) /\n           (9s for repeating, 0s for non-repeating)\n\n  0.16̄ = (16-1)/90 = 1/6\n  0.123̄ = (123-12)/900 = 111/900 = 37/300" }
  ],

  types: [
    { num: "1", title: "Convert Improper Fraction to Mixed and Vice Versa", color: "#2f9e44", bg: "#ebfbee",
      q: "Convert 23/5 to a mixed fraction and convert 4 3/7 back to an improper fraction.",
      tree: "LOGIC:\nStep 1: 23÷5=4 rem 3 → 23/5=4 3/5\nStep 2: 4 3/7=(4×7+3)/7=31/7\n  Verify: 31÷7=4 rem 3=4 3/7 ✓\n\nTRICK (quick rules):\nImproper→Mixed: divide, quotient=whole\n  remainder stays as numerator\nMixed→Improper: (whole×den+num)/den\n\n  23/5: 5)23 → 4 rem 3 → 4 3/5\n  4 3/7: (28+3)/7 = 31/7\n\nAnswer: 23/5 = 4 3/5 and 4 3/7 = 31/7 ✓" },

    { num: "2", title: "Compare Fractions (Cross Multiply or LCM)", color: "#1971c2", bg: "#d0ebff",
      q: "Which is greater: 3/7 or 5/11?",
      tree: "LOGIC:\nStep 1: LCM(7,11)=77\n  3/7=33/77, 5/11=35/77\nStep 2: 33/77 < 35/77 → 3/7 < 5/11\n\nTRICK (cross multiply):\n3/7 vs 5/11 → 3×11=33 vs 5×7=35\n33<35 → 3/7 < 5/11\n\n  3/7    vs    5/11\n   \\          /\n    cross multiply\n  3×11=33 < 5×7=35\n\nCross multiply for 2 fracs (fast!)\nLCM method for 3+ fracs\n\nAnswer: 5/11 is greater ✓" },

    { num: "3", title: "Arrange Fractions in Ascending/Descending Order", color: "#e8590c", bg: "#fff4e6",
      q: "Arrange 2/3, 3/5, 4/7, and 5/8 in ascending order.",
      tree: "LOGIC:\nStep 1: LCM(3,5,7,8)=840\nStep 2: 2/3=560, 3/5=504, 4/7=480, 5/8=525\n  Sort: 480<504<525<560\n  = 4/7 < 3/5 < 5/8 < 2/3\n\nTRICK (decimal conversion):\nConvert to decimals for quick compare:\n  4/7=0.571, 3/5=0.600\n  5/8=0.625, 2/3=0.667\nSort decimals → done!\n\n  4/7 < 3/5 < 5/8 < 2/3\n  .571  .600  .625  .667\n\nAnswer: 4/7 < 3/5 < 5/8 < 2/3 ✓" },

    { num: "4", title: "Addition and Subtraction of Fractions", color: "#7048e8", bg: "#e5dbff",
      q: "Find 2/3 + 3/4 - 1/6.",
      tree: "LOGIC:\nStep 1: LCM(3,4,6)=12\n  2/3=8/12, 3/4=9/12, 1/6=2/12\nStep 2: 8/12+9/12-2/12 = 15/12 = 5/4\n\nTRICK (cross multiply for 2):\nDo 2/3+3/4 first = (8+9)/12 = 17/12\nThen 17/12-1/6 = (17-2)/12 = 15/12 = 5/4\n\n  2/3 + 3/4 - 1/6\n  = 8/12+9/12-2/12\n  = 15/12 = 5/4 = 1 1/4\n\nAnswer: 5/4 or 1 1/4 ✓" },

    { num: "5", title: "Multiplication and Division of Fractions", color: "#e03131", bg: "#ffe3e3",
      q: "Find (3/5 x 10/9) and (4/7 ÷ 2/3).",
      tree: "LOGIC:\nStep 1: 3/5×10/9 = 30/45 = 2/3\n  4/7÷2/3 = 4/7×3/2 = 12/14 = 6/7\n\nTRICK (cancel before multiply):\n3/5 × 10/9: cancel 3↔9(÷3), 5↔10(÷5)\n= (1×2)/(1×3) = 2/3 (small numbers!)\n\nDivision: flip & multiply\n4/7 ÷ 2/3 → 4/7 × 3/2\nCancel 4↔2: = 2×3/(7×1) = 6/7\n\nTIP: Always cancel BEFORE multiplying\n\nAnswer: 2/3 and 6/7 ✓" },

    { num: "6", title: "Decimal to Fraction Conversion", color: "#0c8599", bg: "#c3fae8",
      q: "Convert 0.125, 0.375, and 0.04 to fractions.",
      tree: "LOGIC:\nStep 1: Count decimal places→zeros in den\n  0.125=125/1000, 0.375=375/1000, 0.04=4/100\nStep 2: Simplify by GCD\n  125/1000÷125=1/8, 375/1000÷125=3/8\n  4/100÷4=1/25\n\nTRICK (memorize common ones):\n0.5=1/2  0.25=1/4  0.125=1/8\n0.2=1/5  0.04=1/25 0.008=1/125\n\n  0.125→1/8, 0.375→3/8, 0.04→1/25\n\nPattern: 0.125=125/1000=1/8 (1/2³)\n\nAnswer: 1/8, 3/8, 1/25 ✓" },

    { num: "7", title: "Fraction to Decimal (Recurring Decimals)", color: "#862e9c", bg: "#f3d9fa",
      q: "Convert 1/3, 5/6, and 7/11 to decimals.",
      tree: "LOGIC:\nStep 1: Divide: 1/3=0.333..., 5/6=0.8333...\n  7/11=0.636363...\nStep 2: Check den for terminating vs recurring\n  Only 2s and 5s→terminates, else→recurs\n\nTRICK (quick check):\nDen has only 2,5 factors→terminates\nDen has 3,7,11 etc→recurring\n\n  Terminating: 1/4=0.25, 3/8=0.375\n  Recurring:   1/3=0.3..., 1/7=0.142857...\n\nKey: 1/3=0.3, 1/6=0.16, 1/7=0.142857\n     1/9=0.1, 1/11=0.09, 7/11=0.63\n\nAnswer: 0.3, 0.83, 0.63 (all recurring) ✓" },

    { num: "8", title: "Recurring Decimal to Fraction", color: "#f08c00", bg: "#fff3bf",
      q: "Convert 0.666..., 0.454545..., and 0.1666... to fractions.",
      tree: "LOGIC:\nStep 1: Let x=0.666... 10x=6.666...\n  10x-x=6→x=6/9=2/3\nStep 2: 0.4545...=45/99=5/11\n  0.1666...: x=0.1666, 10x=1.666\n  10x-x=1.5→x=1.5/9=15/90=1/6\n\nTRICK (9s rule):\nPure: repeating/9s → 6/9, 45/99\nMixed: (all-nonrep)/(9s+0s)\n0.1666→(16-1)/90=15/90=1/6\n  1 rep digit→9, 1 nonrep→0 → den=90\n\nVerify: 2/3=0.666✓ 5/11=0.4545✓\n\nAnswer: 2/3, 5/11, 1/6 ✓" },

    { num: "9", title: "Simplify Complex Fractions", color: "#2f9e44", bg: "#ebfbee",
      q: "Simplify: (2/3 of 9/4) ÷ (3/2 of 4/5).",
      tree: "LOGIC:\nStep 1: 'of'=multiply\n  Num: 2/3×9/4=18/12=3/2\n  Den: 3/2×4/5=12/10=6/5\nStep 2: (3/2)÷(6/5)=3/2×5/6=15/12=5/4\n\nTRICK (cancel early):\n2/3×9/4: cancel 2↔4, 3↔9 → 1×3/1×2=3/2\n3/2×4/5: cancel 2↔4 → 3×2/1×5=6/5\nThen: 3/2×5/6: cancel 3↔6 → 1×5/2×2=5/4\n\n  ┌───────────────────────┐\n  │  (3/2) ÷ (6/5)       │\n  │  = 3/2 × 5/6 = 5/4   │\n  └───────────────────────┘\n\nAnswer: 5/4 or 1 1/4 ✓" },

    { num: "10", title: "Word Problems on Fractions", color: "#1971c2", bg: "#d0ebff",
      q: "A has 1/3 of total money. B has 1/4 of total. C has the remaining Rs.500. Find the total.",
      tree: "LOGIC:\nStep 1: A+B = 1/3+1/4 = 7/12\n  C = 1-7/12 = 5/12\nStep 2: 5/12 of Total=500\n  Total = 500×12/5 = Rs.1200\n  Verify: A=400, B=300, C=500✓\n\nTRICK (LCM parts):\nLCM(3,4)=12. A=4 parts, B=3 parts\nC=12-4-3=5 parts = Rs.500\n1 part=100 → Total=12×100=Rs.1200\n\n  Total |████████████| = 12 parts\n  A     |████|         = 4 parts\n  B     |███|          = 3 parts\n  C     |█████|        = 5 parts=500\n\nAnswer: Total = Rs.1200 ✓" }
  ]
};
