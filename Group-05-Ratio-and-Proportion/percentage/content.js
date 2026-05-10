module.exports = {
  title: "PERCENTAGE — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Basic Percentage Formulas", color: "#1971c2", bg: "#d0ebff",
      text: "x% of y = (x/100) × y\nWhat % is X of Y = (X/Y) × 100\n\n% Increase = [(New-Old)/Old] × 100\n% Decrease = [(Old-New)/Old] × 100\n\nNew Value = Old × (1 ± %/100)" },
    { title: "Successive & Compound Change", color: "#2f9e44", bg: "#ebfbee",
      text: "Successive a% and b%:\n  Net = a + b + (a×b)/100 %\n\nPopulation growth (n yrs):\n  P × (1 + r/100)^n\n\nDepreciation (n yrs):\n  P × (1 - r/100)^n\n\n+x% then -x% = -(x²/100)% LOSS" },
    { title: "Reverse Percentage Change", color: "#e03131", bg: "#ffe3e3",
      text: "A is x% more than B:\n  B less than A by x/(100+x)×100%\n\nA is x% less than B:\n  B more than A by x/(100-x)×100%\n\nPrice ↑x%, keep spending same:\n  ↓ consumption by x/(100+x)×100%" },
    { title: "Discounts & Area Change", color: "#7048e8", bg: "#e5dbff",
      text: "Two discounts a% and b%:\n  Single = a + b - (a×b)/100 %\n  (minus, NOT plus!)\n\nL ↑ a%, B ↑ b% → Area change:\n  = a + b + (a×b)/100 %\n  (same as successive change!)\n  Use -ve for decrease" },
    { title: "Election & Exam Formulas", color: "#e8590c", bg: "#fff4e6",
      text: "Election (2 candidates):\n  Margin% = 2×Winner% - 100\n  Margin = Margin% × Total/100\n  Check for invalid votes!\n\nExam pass marks:\n  Pass = obtained + shortfall\n  Pass = Total × pass%/100" },
    { title: "Fraction ↔ Percentage Table", color: "#0c8599", bg: "#c3fae8",
      text: "1/2=50%  1/3=33.33%  1/4=25%\n1/5=20%  1/6=16.67%  1/7=14.28%\n1/8=12.5% 1/9=11.11% 1/10=10%\n1/11=9.09% 1/12=8.33% 1/15=6.67%\n\nx% of y = y% of x (commutative!)\n8% of 50 = 50% of 8 = 4" }
  ],

  types: [
    { num: "1", title: "Basic Percentage (x% of y)", color: "#2f9e44", bg: "#ebfbee",
      q: "What is 15% of 840?",
      tree: "LOGIC:\nStep 1: 15% of 840 = (15/100) x 840\nStep 2: = 15 x 8.4 = 126\n\nTRICK:\nSplit: 10% of 840 = 84\n       5% of 840 = 42 (half of 10%)\n       15% = 84 + 42 = 126\n\nAnswer: 126 ✓" },

    { num: "2", title: "What % is X of Y", color: "#1971c2", bg: "#d0ebff",
      q: "45 is what percent of 180?",
      tree: "LOGIC:\nStep 1: Formula = (X/Y) x 100\nStep 2: = (45/180) x 100 = 25%\n\n  |████████░░░░░░░░░░░░░░░░░░░░|\n  |◄─ 45 ─►|◄──── 135 ────────►|\n     25%           75%\n\nTRICK:\n45/180 = 1/4 → know 1/4 = 25%\n\nAnswer: 25% ✓" },

    { num: "3", title: "Percentage Increase / Decrease", color: "#e8590c", bg: "#fff4e6",
      q: "A person's salary rises from Rs.25000 to Rs.30000. Find the percentage increase.",
      tree: "LOGIC:\nStep 1: Increase = 30000-25000 = 5000\nStep 2: %Inc = (5000/25000) x 100 = 20%\n\n  25000 ────+20%────> 30000\n\nTRICK:\nChange/Original x 100\n= 5000/25000 x 100 = 1/5 x 100 = 20%\nTRAP: reverse 30000→25000 = 16.67%!\n\nAnswer: 20% increase ✓" },

    { num: "4", title: "Successive Percentage Change", color: "#7048e8", bg: "#e5dbff",
      q: "The price of an item rises by 10% and then by another 20%. Find the net percentage increase.",
      tree: "LOGIC:\nStep 1: 100 →+10%→ 110 →+20%→ 132\nStep 2: Net change = 32/100 = 32%\n\nTRICK:\nFormula: a + b + (a x b)/100\n= 10 + 20 + (10x20)/100 = 32%\nSPECIAL: +x% then -x% = -(x^2/100)%\n\nAnswer: 32% increase ✓" },

    { num: "5", title: "Population Growth / Depreciation", color: "#e03131", bg: "#ffe3e3",
      q: "The population of a town is 50000 and it grows at 10% per year. What will the population be after 3 years?",
      tree: "LOGIC:\nStep 1: Year-by-year:\n  Yr 0: 50000\n  Yr 1: 55000 (x1.1)\n  Yr 2: 60500 (x1.1)\n  Yr 3: 66550 (x1.1)\n\nTRICK:\nFormula: P = P0 x (1 + r/100)^n\n= 50000 x (1.1)^3 = 50000 x 1.331\n= 66550\n\nAnswer: 66550 ✓" },

    { num: "6", title: "Price ↑ x%, Reduce Consumption", color: "#0c8599", bg: "#c3fae8",
      q: "If the price of sugar rises by 25%, by what percentage must consumption be reduced to keep the total expenditure the same?",
      tree: "LOGIC:\nStep 1: Let price=100, qty=100, spend=10000\nStep 2: New price=125, new qty=10000/125=80\nStep 3: Reduction = (100-80)/100 x 100 = 20%\n\nTRICK:\nFormula: x/(100+x) x 100%\n= 25/125 x 100 = 20%\nMemorize: +25%→-20%, +50%→-33.33%\n\nAnswer: Reduce by 20% ✓" },

    { num: "7", title: "Area Change (Length + Breadth)", color: "#f08c00", bg: "#fff3bf",
      q: "If the length of a rectangle increases by 20% and the breadth decreases by 10%, what is the percentage change in its area?",
      tree: "LOGIC:\nStep 1: L=100→120, B=100→90\nStep 2: Old area=10000, New=10800\nStep 3: Change = 800/10000 x 100 = +8%\n\nTRICK:\nFormula: a + b + (a x b)/100\n= 20 + (-10) + (20 x -10)/100\n= 20 - 10 - 2 = +8%\n\nAnswer: Area increases 8% ✓" },

    { num: "8", title: "Pass Marks Problem", color: "#c92a2a", bg: "#fff5f5",
      q: "A student gets 40% and fails by 30 marks. Another student gets 60% and exceeds the pass marks by 20. Find the total marks.",
      tree: "LOGIC:\nStep 1: 40% of T = Pass - 30 ...(i)\n        60% of T = Pass + 20 ...(ii)\nStep 2: (ii)-(i): 20% of T = 50\n        T = 250 marks\n\nTRICK:\nDifference in marks / Difference in %\n= (30+20) / (60%-40%) = 50/20% = 250\n\n  0%   40%  Pass  60%   100%\n  |─────|─30─|─────|──────|\n  0    100  130   150    250\n\nAnswer: Total = 250 marks ✓" },

    { num: "9", title: "Salary: A earns x% more than B", color: "#1971c2", bg: "#d0ebff",
      q: "A's salary is 20% more than B's. B is what % less than A?",
      tree: "LOGIC:\nStep 1: Let B=100, A=120 (20% more)\nStep 2: Diff=20, Base=A=120\nStep 3: B less by (20/120)x100 = 16.67%\n\nTRICK:\nFormula: x/(100+x) x 100%\n= 20/120 x 100 = 16.67%\nPairs: +10%→-9.09%, +25%→-20%\n\nAnswer: B is 16.67% less than A ✓" },

    { num: "10", title: "Expenditure on Items (Pie Chart)", color: "#2f9e44", bg: "#ebfbee",
      q: "A person spends 30% on rent, 20% on food, and 10% on transport, saving Rs.4800. Find the salary.",
      tree: "LOGIC:\nStep 1: Spent = 30+20+10 = 60%\nStep 2: Savings = 100%-60% = 40%\nStep 3: 40% of Salary = 4800\n        Salary = 4800/0.40 = 12000\n\nTRICK:\nSalary = Savings x 100/Savings%\n= 4800 x 100/40 = Rs.12000\n\n  ┌──────────────────────┐\n  │ Rent 30%=3600        │\n  │ Food 20%=2400        │\n  │ Save 40%=4800        │\n  │ Total 100%=12000     │\n  └──────────────────────┘\n\nAnswer: Salary = Rs.12000 ✓" },

    { num: "11", title: "Fraction ↔ Percentage Conversion", color: "#e8590c", bg: "#fff4e6",
      q: "Convert 5/8 to %. Express 62.5% as fraction.",
      tree: "LOGIC:\nStep 1: 5/8 = (5/8) x 100 = 62.5%\nStep 2: 62.5% = 625/1000 = 5/8\n\nTRICK:\nMemorize: 1/8=12.5%, so 5/8=5x12.5=62.5%\n  1/2=50%   1/3=33.33%  1/4=25%\n  1/5=20%   1/8=12.5%   3/8=37.5%\n  5/8=62.5% 3/4=75%     7/8=87.5%\n\nAnswer: 5/8 = 62.5% ✓" },

    { num: "12", title: "Percentage to Fraction Shortcut", color: "#7048e8", bg: "#e5dbff",
      q: "Find 37.5% of 480 using fraction shortcut.",
      tree: "LOGIC:\nStep 1: 37.5% of 480\nStep 2: = (37.5/100) x 480\n        = 0.375 x 480 = 180\n\nTRICK:\n37.5% = 3/8, so (3/8) x 480 = 180\nCOMMUTATIVE: x% of y = y% of x\n8% of 25 = 25% of 8 = 2\n\nAnswer: 180 ✓" },

    { num: "13", title: "A is x% More, B is ?% Less", color: "#0c8599", bg: "#c3fae8",
      q: "A is 25% more than B. B is what % less than A?",
      tree: "LOGIC:\nStep 1: Let B=100, A=125 (25% more)\nStep 2: B < A by 25, base = A = 125\nStep 3: (25/125) x 100 = 20%\n\nTRICK:\nFormula: x/(100+x) x 100%\n= 25/125 x 100 = 20%\nREVERSE: -20% → +20/(100-20)x100 = 25%\n\nAnswer: B is 20% less than A ✓" },

    { num: "14", title: "Election / Voting Problems", color: "#862e9c", bg: "#f3d9fa",
      q: "In an election, candidate A gets 60% of the votes and wins by 8000 votes. Find the total number of votes.",
      tree: "LOGIC:\nStep 1: A=60%, B=40%, Margin=20%\nStep 2: 20% of Total = 8000\nStep 3: Total = 8000/0.20 = 40000\n  A=24000, B=16000, diff=8000 ✓\n\nTRICK:\nFormula: Total = Margin/(Winner%-50%)x50\nMargin% = 2xWinner% - 100 = 20%\nTotal = 8000 x 100/20 = 40000\n\nAnswer: 40000 votes ✓" }
  ]
};
