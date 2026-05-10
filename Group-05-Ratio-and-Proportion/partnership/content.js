module.exports = {
  title: "PARTNERSHIP — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Simple Partnership", color: "#2f9e44", bg: "#ebfbee",
      text: "All invest for SAME duration\nProfit ratio = Capital ratio\n\nA:B = Cₐ : Cᵦ\nA's share = Profit × Cₐ/(Cₐ+Cᵦ)\n\nWHY: Same time means money is the only\ndifference. More capital = more risk\n= more profit share.\n\nEx: A=3000, B=5000, Profit=1600\n  Ratio=3:5, A=1600×3/8=600" },
    { title: "Compound Partnership", color: "#1971c2", bg: "#d0ebff",
      text: "Invest for DIFFERENT durations\nProfit ratio = Capital × Time ratio\n\nA:B = Cₐ×Tₐ : Cᵦ×Tᵦ\nA's share = Profit × (Cₐ×Tₐ)/Σ(C×T)\n\nWHY: Both capital AND time matter.\nRs.1000 for 6 months = Rs.6000 of\n\"capital-months\" of contribution.\n\nEx: A=4000×12=48k, B=6000×8=48k\n  Equal contribution → equal split" },
    { title: "Working Partner", color: "#e8590c", bg: "#fff4e6",
      text: "Working partner gets SALARY first\nRemaining profit split by capital ratio\n\nNet profit = Total - Salary\nThen divide net profit as per ratio\n\nWHY: Salary compensates for labor.\nAfter paying salary, remaining profit\nis purely return on capital.\n\nEx: Profit=2000, Salary=1200\n  Remaining=800, split by ratio" },
    { title: "Capital Changes Mid-Year", color: "#7048e8", bg: "#e5dbff",
      text: "Split into periods at each change\nEffective capital = Σ(Cᵢ × Tᵢ)\n\nA invests C₁ for t₁, then C₂ for t₂\nA's effective = C₁×t₁ + C₂×t₂\nCompare effective capitals for ratio\n\nWHY: Different amounts for different\ndurations = sum of each segment.\n\nEx: 10k for 6mo + 15k for 6mo\n  Effective = 60k + 90k = 150k" }
  ],

  types: [
    { num: "1", title: "Simple Partnership", color: "#2f9e44", bg: "#ebfbee",
      q: "A and B invest Rs 3000 and Rs 5000 respectively for a year. If the total profit is Rs 1600, find each person's share.",
      tree: "LOGIC:\nStep 1: Same duration → ratio = 3000:5000\nStep 2: = 3:5, total = 8 parts\nStep 3: A=1600x3/8=600, B=1600x5/8=1000\n\n  A |███ 3000 ███|  → 3 parts → Rs.600\n  B |█████ 5000 █████| → 5 parts → Rs.1000\n\nTRICK:\n1 part = 1600/8 = 200\nA = 3x200=600, B = 5x200=1000\nCHECK: 600+1000 = 1600 ✓\n\nAnswer: A = Rs 600, B = Rs 1000 ✓" },

    { num: "2", title: "Compound Partnership", color: "#1971c2", bg: "#d0ebff",
      q: "A invests Rs 4000 for 12 months and B invests Rs 6000 for 8 months. If the total profit is Rs 2400, find their shares.",
      tree: "LOGIC:\nStep 1: A = 4000x12 = 48000\n        B = 6000x8 = 48000\nStep 2: Ratio = 48000:48000 = 1:1\nStep 3: Each = 2400/2 = Rs 1200\n\n  A: 4000 × 12mo = 48000\n  B: 6000 ×  8mo = 48000\n  Equal → 1:1 split\n\nTRICK:\nCapital x Time ratio decides split\n4000x12 = 6000x8 (equal!)\nSo equal split: 1200 each\n\nAnswer: A = Rs 1200, B = Rs 1200 ✓" },

    { num: "3", title: "Two Partners (Find Profit)", color: "#e8590c", bg: "#fff4e6",
      q: "A and B start a business with Rs 20000 and Rs 25000. At the end of the year, the total profit is Rs 9000. Find B's share.",
      tree: "LOGIC:\nStep 1: A:B = 20000:25000 = 4:5\nStep 2: Total = 9 parts\nStep 3: B = 9000 x 5/9 = Rs 5000\n\n  A |████ 20k ████| → 4 parts → Rs.4000\n  B |█████ 25k █████| → 5 parts → Rs.5000\n\nTRICK:\n1 part = 9000/9 = 1000\nB = 5 x 1000 = Rs 5000\nA = 4 x 1000 = Rs 4000\n\nAnswer: B's share = Rs 5000 ✓" },

    { num: "4", title: "Three Partners", color: "#7048e8", bg: "#e5dbff",
      q: "A, B, and C invest Rs 10000, Rs 15000, and Rs 20000 for the same period. Total profit is Rs 9000. Find each share.",
      tree: "LOGIC:\nStep 1: A:B:C = 10k:15k:20k = 2:3:4\nStep 2: Total = 9 parts\nStep 3: A=9000x2/9=2000, B=3000, C=4000\n\n  A |██ 10k ██|         → 2 parts\n  B |███ 15k ███|       → 3 parts\n  C |████ 20k ████|     → 4 parts\n\nTRICK:\n1 part = 9000/9 = 1000\nA=2x1000, B=3x1000, C=4x1000\nCHECK: 2000+3000+4000=9000 ✓\n\nAnswer: A=2000, B=3000, C=4000 ✓" },

    { num: "5", title: "Working Partner with Salary", color: "#e03131", bg: "#ffe3e3",
      q: "A and B invest Rs 5000 each. A is working partner and gets Rs 100/month as salary. Annual profit is Rs 2000. Find their shares.",
      tree: "LOGIC:\nStep 1: A salary = 100x12 = Rs 1200/yr\nStep 2: Remaining = 2000-1200 = 800\n  Capital 1:1 → each gets 400\nStep 3: A=1200+400=1600, B=400\n\n  Profit ═══ 2000\n  ├─ Salary ── 1200 (A only)\n  └─ Rest ──── 800 → 1:1 split\n  A=1600, B=400\n\nTRICK:\nDeduct salary first, split rest by ratio\nA total = salary + capital share\nB total = capital share only\n\nAnswer: A = Rs 1600, B = Rs 400 ✓" },

    { num: "6", title: "Partner Joins Late", color: "#0c8599", bg: "#c3fae8",
      q: "A starts a business with Rs 8000. After 4 months, B joins with Rs 12000. At the end of the year, profit is Rs 5400. Find their shares.",
      tree: "LOGIC:\nStep 1: A=12mo, B=12-4=8mo\nStep 2: A=8000x12=96k, B=12000x8=96k\nStep 3: Ratio=1:1, each=5400/2=2700\n\n  Month: 1────4──────────12\n  A:     |════════════════| 8kx12\n  B:         |════════════| 12kx8\n\nTRICK:\nCxT products equal → equal split\n8000x12 = 12000x8 = 96000\n\nAnswer: A = Rs 2700, B = Rs 2700 ✓" },

    { num: "7", title: "Partner Leaves Early", color: "#862e9c", bg: "#f3d9fa",
      q: "A and B invest Rs 6000 and Rs 8000. A withdraws after 8 months. Annual profit is Rs 2380. Find their shares.",
      tree: "LOGIC:\nStep 1: A=6000x8=48k, B=8000x12=96k\nStep 2: Ratio = 48:96 = 1:2\nStep 3: A=2380x1/3=793, B=2380x2/3=1587\n\n  Month: 1──────8──────────12\n  A:     |═══════| 6kx8=48k\n  B:     |════════════════| 8kx12=96k\n\nTRICK:\nCxT ratio = 48:96 = 1:2\n1 part = 2380/3 = 793.33\n\nAnswer: A = Rs 793, B = Rs 1587 ✓" },

    { num: "8", title: "Capital Changes Mid-Year", color: "#f08c00", bg: "#fff3bf",
      q: "A starts with Rs 10000. After 6 months, A adds Rs 5000 more. B invests Rs 15000 for the whole year. Profit is Rs 3500. Find shares.",
      tree: "LOGIC:\nStep 1: A = 10kx6 + 15kx6 = 150k\n        B = 15kx12 = 180k\nStep 2: Ratio = 150:180 = 5:6\nStep 3: A=3500x5/11=1591, B=1909\n\n  Month: 1────6──────────12\n  A:     |=10k=|===15k====|\n  B:     |======15k=======|\n\nTRICK:\nSplit periods at capital change\nEffective = sum(Capital x Time)\nRatio 5:6 → 1 part = 3500/11\n\nAnswer: A = Rs 1591, B = Rs 1909 ✓" },

    { num: "9", title: "Find Investment Amount", color: "#2f9e44", bg: "#ebfbee",
      q: "A invests Rs 6000. B's profit share from a total profit of Rs 1500 is Rs 900. How much did B invest if both invested for the same period?",
      tree: "LOGIC:\nStep 1: A profit=600, B profit=900\nStep 2: Ratio = 600:900 = 2:3\nStep 3: Same time → capital = 2:3\n  6000/B = 2/3 → B = 9000\n\n  Profit: A=600 (2) : B=900 (3)\n  Capital: A=6000(2) : B=?(3)\n  B = 6000 × 3/2 = 9000\n\nTRICK:\nB/A profit = 900/600 = 3/2\nB capital = A capital x 3/2\n= 6000 x 3/2 = Rs 9000\n\nAnswer: B invested Rs 9000 ✓" },

    { num: "10", title: "Monthly vs Annual Investment", color: "#1971c2", bg: "#d0ebff",
      q: "A invests Rs 500 per month for 12 months. B invests Rs 3000 at the start for the whole year. Profit is Rs 1200. Find shares.",
      tree: "LOGIC:\nStep 1: A = 500x(12+11+...+1)\n  = 500x78 = 39000\nStep 2: B = 3000x12 = 36000\nStep 3: Ratio = 39:36 = 13:12\n  A=1200x13/25=624, B=576\n\n  A: Mo1=500x12, Mo2=500x11,...Mo12=500x1\n     Sum = 500 × 78 = 39000\n  B: 3000 × 12 = 36000\n  Ratio = 13:12\n\nTRICK:\nMonthly invest: sum = nx(n+1)/2\nA = 500 x 12x13/2 = 39000\nRatio 13:12, 1 part = 1200/25 = 48\n\nAnswer: A = Rs 624, B = Rs 576 ✓" }
  ]
};
