module.exports = {
  title: "RATIO AND PROPORTION — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Types of Ratios", color: "#2f9e44", bg: "#ebfbee",
      text: "Simple ratio: a : b = a/b\nDuplicate ratio: a² : b²\nSub-duplicate: √a : √b\nTriplicate ratio: a³ : b³\nSub-triplicate: ³√a : ³√b\nCompounded: (a:b)×(c:d) = ac:bd\nInverse ratio: b : a\n\nWHY: Ratios are just fractions. Duplicate\nmeans squaring both terms, sub-duplicate\nmeans square-rooting both terms.\n\nEx: Duplicate of 3:5 = 9:25\n    Inverse of 3:5 = 5:3" },
    { title: "Proportion Formulas", color: "#1971c2", bg: "#d0ebff",
      text: "a:b = c:d → a×d = b×c\n(extremes product = means product)\n\nMean Proportional = √(a×c)\nThird Proportional = b²/a\nFourth Proportional = b×c/a\n\na:b :: c:d → a,d=extremes, b,c=means\n\nWHY: a/b = c/d, cross-multiply gives\na×d = b×c. Mean prop x satisfies\na/x = x/c, so x² = ac.\n\nEx: Mean prop of 4,9 = √(4×9) = 6\n    Check: 4:6 = 6:9 = 2:3 ✓" },
    { title: "Dividing in a Ratio", color: "#e8590c", bg: "#fff4e6",
      text: "Total T divided in ratio a:b:c\n\nA's share = [a/(a+b+c)] × T\nB's share = [b/(a+b+c)] × T\n\nFraction ratios 1/2 : 1/3 : 1/4\n→ LCM of 2,3,4 = 12\n→ 6 : 4 : 3\n\nWHY: Each part is a fraction of the\nwhole. Multiply fraction-ratios by\nLCM of denominators to clear fractions.\n\nEx: Rs.1300 in 2:3:8\n  1 part=1300/13=100\n  Shares: 200, 300, 800" },
    { title: "Combining Ratios", color: "#7048e8", bg: "#e5dbff",
      text: "A:B = p:q and B:C = r:s\nA:B:C → LCM of q and r\n\nExample: A:B=2:3, B:C=4:5\nLCM(3,4)=12\nA:B=8:12, B:C=12:15\nA:B:C = 8:12:15\n\n4+ ratios: abc : xbc : xyc : xyz\n\nWHY: The common term (B) must be the\nsame number in both ratios. LCM makes\nB equal, then simply merge.\n\nEx: A:B=3:4, B:C=2:5 → LCM(4,2)=4\n  A:B=3:4, B:C=4:10 → 3:4:10" },
    { title: "Direct & Inverse", color: "#0c8599", bg: "#c3fae8",
      text: "Direct: A↑ then B↑ (same dir)\n  A1/B1 = A2/B2\n  More items → More cost\n\nInverse: A↑ then B↓ (opposite)\n  A1 × B1 = A2 × B2\n  More workers → Less time\n\nWHY: Direct means constant ratio (k=A/B).\nInverse means constant product (k=A×B).\n\nEx: 5 pens cost Rs.60 (direct)\n  8 pens cost 60×8/5 = Rs.96" }
  ],

  types: [
    { num: "1", title: "Basic Ratio Simplification", color: "#2f9e44", bg: "#ebfbee",
      q: "Express 48:64 in its simplest form.",
      tree: "LOGIC:\nStep 1: GCD(48, 64) = 16\nStep 2: 48/16 : 64/16 = 3 : 4\n\n  48 : 64\n  ÷16  ÷16\n   3 :  4\n\nTRICK:\nKeep halving both sides:\n48:64 → 24:32 → 12:16 → 6:8 → 3:4\n\nAnswer: 3 : 4 ✓" },

    { num: "2", title: "Dividing Amount in Given Ratio", color: "#1971c2", bg: "#d0ebff",
      q: "Divide Rs.1500 among A, B, and C in the ratio 2:3:5.",
      tree: "LOGIC:\nStep 1: Total parts = 2+3+5 = 10\nStep 2: A=(2/10)x1500=300\n        B=(3/10)x1500=450\n        C=(5/10)x1500=750\n\n  |██ A ██|███ B ███|█████ C █████|\n  |◄─ 2 ──►|◄── 3 ──►|◄──── 5 ────►|\n\nTRICK:\n1 part = 1500/10 = 150\nA=2x150=300, B=3x150=450, C=5x150=750\n\nAnswer: A=300, B=450, C=750 ✓" },

    { num: "3", title: "Dividing in Fraction Ratio", color: "#e8590c", bg: "#fff4e6",
      q: "Suresh distributes pens among A, B, C, D in the ratio 1/2 : 1/4 : 1/5 : 1/7. Find the minimum total pens needed.",
      tree: "LOGIC:\nStep 1: 1/2 : 1/4 : 1/5 : 1/7\nStep 2: LCM(2,4,5,7)=140, multiply each:\n  70 : 35 : 28 : 20\nStep 3: Min = 70+35+28+20 = 153\n\n  ×140→ |███ 70 ███|██ 35 ██|█ 28 █|█ 20 █|\n\nTRICK:\nMultiply all fractions by LCM of denoms\nto instantly clear fractions.\nMin pens = sum of ratio parts\n\nAnswer: 153 pens ✓" },

    { num: "4", title: "Combining Ratios (A:B:C)", color: "#7048e8", bg: "#e5dbff",
      q: "If A:B = 2:3 and B:C = 5:7, find A:B:C.",
      tree: "LOGIC:\nStep 1: Make B same → LCM(3,5)=15\n  A:B = 2:3 → x5 → 10:15\n  B:C = 5:7 → x3 → 15:21\nStep 2: A:B:C = 10:15:21\n\n  A:B = 10:15\n        B:C = 15:21\n  A : B : C = 10:15:21\n\nTRICK:\nB common term: LCM(3,5)=15\nMultiply each ratio to equalize B\nFor 4+ ratios: abc : xbc : xyc : xyz\n\nAnswer: 10 : 15 : 21 ✓" },

    { num: "5", title: "Proportion — Find Missing Value", color: "#e03131", bg: "#ffe3e3",
      q: "If 3:5 = x:25, find the value of x.",
      tree: "LOGIC:\nStep 1: 3:5 = x:25\nStep 2: Cross multiply: 3x25 = 5x\n        75 = 5x → x = 15\n\n  3 : 5  =  x : 25\n  3×25   =  5×x\n   75    =  5x  → x=15\n\nTRICK:\nMultiplier = 25/5 = 5\nx = 3 x 5 = 15\nVerify: 3/5 = 15/25 ✓\n\nAnswer: x = 15 ✓" },

    { num: "6", title: "Mean Proportional", color: "#0c8599", bg: "#c3fae8",
      q: "Find the mean proportional between 4 and 25.",
      tree: "LOGIC:\nStep 1: a:x = x:c → x^2 = a x c\nStep 2: x^2 = 4 x 25 = 100\nStep 3: x = sqrt(100) = 10\n\n  4 : [10] : 25\n  4/10 = 10/25 = 2/5 ✓\n\nTRICK:\nMean Proportional = sqrt(a x c)\n= sqrt(4 x 25) = sqrt(100) = 10\nVerify: 4:10 = 10:25 ✓\n\nAnswer: 10 ✓" },

    { num: "7", title: "Third Proportional", color: "#862e9c", bg: "#f3d9fa",
      q: "Find the third proportional to 4 and 12.",
      tree: "LOGIC:\nStep 1: a:b = b:x → x = b^2/a\nStep 2: x = 12^2/4 = 144/4 = 36\n\n  4 : 12 = 12 : [36]\n  ratio = 1:3 = 1:3 ✓\n\nTRICK:\nThird Proportional = b^2/a\n= 144/4 = 36\nVerify: 4:12 = 12:36 → 1:3 = 1:3 ✓\n\nAnswer: 36 ✓" },

    { num: "8", title: "Fourth Proportional", color: "#f08c00", bg: "#fff3bf",
      q: "Find the fourth proportional to 3, 7, and 9.",
      tree: "LOGIC:\nStep 1: 3:7 = 9:x, cross multiply\nStep 2: 3x = 7x9 = 63 → x = 21\n\n  3 : 7 = 9 : [21]\n  3×21 = 63 = 7×9 ✓\n\nTRICK:\nFourth Proportional = b x c / a\n= 7 x 9 / 3 = 21\nVerify: 3:7 = 9:21 ✓\n\nAnswer: 21 ✓" },

    { num: "9", title: "Ratio of Compound Expression (A/B : B/C : C/A)", color: "#2f9e44", bg: "#ebfbee",
      q: "If A:B:C = 3:4:7, find the ratio of (A/B) : (B/C) : (C/A).",
      tree: "LOGIC:\nStep 1: A=3k, B=4k, C=7k\n  A/B=3/4, B/C=4/7, C/A=7/3\nStep 2: LCM(4,7,3)=84, multiply each:\n  63 : 48 : 196\n\n  3/4 : 4/7 : 7/3\n  ×84→ 63 : 48 : 196\n\nTRICK:\nPlug ratios as fractions, then\nmultiply all by LCM of denominators\nto clear fractions instantly.\n\nAnswer: 63 : 48 : 196 ✓" },

    { num: "10", title: "Direct Proportion", color: "#1971c2", bg: "#d0ebff",
      q: "If 5 pens cost Rs.60, how much do 8 pens cost?",
      tree: "LOGIC:\nStep 1: More pens → More cost (DIRECT)\nStep 2: 5/60 = 8/x\nStep 3: x = 60 x 8/5 = Rs.96\n\n  5 pens ──→ Rs.60\n  8 pens ──→ Rs.??\n  ? = 60 × 8/5 = 96\n\nTRICK:\nUnit price = 60/5 = Rs.12/pen\n8 pens = 8 x 12 = Rs.96\n\nAnswer: Rs.96 ✓" },

    { num: "11", title: "Inverse Proportion", color: "#e8590c", bg: "#fff4e6",
      q: "If 12 workers finish a job in 10 days, how many days will 15 workers take?",
      tree: "LOGIC:\nStep 1: More workers → Less days (INVERSE)\nStep 2: 12 x 10 = 15 x ?\n        ? = 120/15 = 8 days\n\n  12 workers × 10 days = 120\n  15 workers × ?  days = 120\n  ? = 120/15 = 8 days\n\nTRICK:\nInverse: multiply and divide\n? = old_days x old_workers/new_workers\n= 10 x 12/15 = 8 days\n\nAnswer: 8 days ✓" },

    { num: "12", title: "Mixture — Replace and Find New Ratio", color: "#7048e8", bg: "#e5dbff",
      q: "In 13 litres of mixture, milk and water are in ratio 3:2. If 3 litres of mixture is replaced by 3 litres of milk, find the new ratio.",
      tree: "LOGIC:\nStep 1: 13L mixture (M:W=3:2)\n  Remove 3L: 10L left\n  Milk=10x3/5=6, Water=10x2/5=4\nStep 2: Add 3L milk: Milk=9, Water=4\n\n  [M=7.8 W=5.2] -3L→ [M=6 W=4] +3M→ [M=9 W=4]\n  Ratio: 3:2  →  3:2  →  9:4\n\nTRICK:\nRemoved 3L has same ratio 3:2\nMilk left=13x3/5-3x3/5=6, +3=9\nWater left=13x2/5-3x2/5=4\n\nAnswer: New ratio = 9 : 4 ✓" },

    { num: "13", title: "Income/Expenditure — Find Salary", color: "#0c8599", bg: "#c3fae8",
      q: "Salaries of Ram and Sham are in ratio 4:5. If each salary is increased by Rs.5000, the new ratio becomes 50:60. Find Sham's present salary.",
      tree: "LOGIC:\nStep 1: Let salaries = 4x and 5x\nStep 2: (4x+5000)/(5x+5000) = 50/60\n  Cross: 240x+300000=250x+250000\n  10x=50000 → x=5000\nStep 3: Sham = 5(5000)+5000 = 30000\n\n  Before: 4x : 5x     = 4:5\n  After:  4x+5k : 5x+5k = 5:6\n  Solve → x=5000\n\nTRICK:\n50:60 = 5:6, so new ratio = 5:6\nDiff increased from x to 1000+x\nSolve: 5x+5000 and 6x+6000 pattern\n\nAnswer: Sham's salary = Rs.30,000 ✓" },

    { num: "14", title: "Ratio Change — Members Join/Leave", color: "#862e9c", bg: "#f3d9fa",
      q: "The ratio of boys to girls in a class is 3:2. If 5 boys leave and 5 girls join, the ratio becomes 1:1. Find the total students.",
      tree: "LOGIC:\nStep 1: Boys=3x, Girls=2x\nStep 2: (3x-5)/(2x+5) = 1/1\n  3x-5 = 2x+5 → x=10\nStep 3: Boys=30, Girls=20, Total=50\n\n  Before: Boys=30 Girls=20 (3:2)\n  Change: -5       +5\n  After:  Boys=25 Girls=25 (1:1)\n\nTRICK:\nFor 1:1 ratio, boys=girls after change\nBoys-5 = Girls+5 → diff closes by 10\nOriginal diff=x, so x=10, Total=5x=50\n\nAnswer: Total = 50 students ✓" },

    { num: "15", title: "Compounded Ratio", color: "#f08c00", bg: "#fff3bf",
      q: "Find the compounded ratio of 2:3, 4:5, and 6:7.",
      tree: "LOGIC:\nStep 1: Multiply antecedents: 2x4x6=48\nStep 2: Multiply consequents: 3x5x7=105\nStep 3: GCD(48,105)=3 → 16:35\n\n  (2:3) × (4:5) × (6:7)\n  = (2×4×6) : (3×5×7)\n  = 48 : 105 = 16 : 35\n\nTRICK:\nCompounded ratio = product/product\nSimplify before multiplying:\n2x4x6 : 3x5x7 = 48:105 = 16:35\n\nAnswer: 16 : 35 ✓" },

    { num: "16", title: "Duplicate and Sub-Duplicate Ratio", color: "#e03131", bg: "#ffe3e3",
      q: "Find the duplicate ratio and sub-duplicate ratio of 3:5.",
      tree: "LOGIC:\nStep 1: Duplicate = square both\n  3^2 : 5^2 = 9 : 25\nStep 2: Sub-duplicate = sqrt both\n  sqrt(3) : sqrt(5)\n\n  3 : 5\n  Dup:     3² : 5²   = 9 : 25\n  Sub-dup: √3 : √5\n  Trip:    3³ : 5³   = 27 : 125\n\nTRICK:\nDuplicate: a^2 : b^2\nSub-duplicate: sqrt(a) : sqrt(b)\nTriplicate: a^3 : b^3\n\nAnswer: Dup=9:25, Sub-dup=sqrt3:sqrt5 ✓" },

    { num: "17", title: "Bill Sharing in Proportion", color: "#1971c2", bg: "#d0ebff",
      q: "Amit, Raju and Ram agree to split their electricity bill in ratio 3:4:5. Amit pays Rs.50, Raju Rs.55, Ram Rs.75. How much should Amit pay to settle?",
      tree: "LOGIC:\nStep 1: Total = 50+55+75 = Rs.180\nStep 2: Ratio 3:4:5, parts=12\n  Amit=(3/12)x180=45, Raju=60, Ram=75\nStep 3: Amit paid 50, should pay 45\n  Amit overpaid by Rs.5\n\n  Fair:  |█ 45 █|██ 60 ██|███ 75 ███|\n  Paid:  |█ 50 █|█ 55 ██|███ 75 ███|\n  Diff:    +5     -5        0\n\nTRICK:\n1 part = 180/12 = 15\nFair: 45, 60, 75\nDiff: 50-45=+5 (overpaid)\n\nAnswer: Amit gets back Rs.5 ✓" }
  ]
};
