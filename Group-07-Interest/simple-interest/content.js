module.exports = {
  title: "SIMPLE INTEREST — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Core SI Formula", color: "#2f9e44", bg: "#ebfbee",
      text: "SI = (P x R x T) / 100\n\nP = Principal (original sum)\nR = Rate of interest per annum (%)\nT = Time (in years)\nSI = Simple Interest" },
    { title: "Amount Formula", color: "#1971c2", bg: "#d0ebff",
      text: "Amount = Principal + Simple Interest\nA = P + SI\nA = P + (P x R x T) / 100\nA = P (1 + R x T / 100)" },
    { title: "Find Unknown (P, R, T)", color: "#e8590c", bg: "#fff4e6",
      text: "P = (100 x SI) / (R x T)\nR = (100 x SI) / (P x T)\nT = (100 x SI) / (P x R)" },
    { title: "Multiplier / Doubling Formula", color: "#7048e8", bg: "#e5dbff",
      text: "Sum becomes N times in T years:\n  (N - 1) x 100 = R x T\n\nDoubles:  R x T = 100\nTriples:  R x T = 200\nN times:  R x T = (N-1) x 100\n\nTime to double = 100/R\nTime to N times = (N-1) x 100/R" },
    { title: "Splitting Sum Formula", color: "#e03131", bg: "#ffe3e3",
      text: "Total S split into Part1 at R1% for T1\nand Part2 at R2% for T2 (equal SI):\n\nPart1/Part2 = (R2 x T2)/(R1 x T1)\n\nSame time: Part1/Part2 = R2/R1\nSame rate: Part1/Part2 = T2/T1" }
  ],

  types: [
    { num: "1", title: "Basic SI Calculation", color: "#2f9e44", bg: "#ebfbee",
      q: "Find the simple interest on a principal of Rs.5000 at a rate of 8% per annum for 3 years.",
      tree: "LOGIC:\nStep 1: P=5000, R=8%, T=3 years\nStep 2: SI = P×R×T / 100\n  = 5000 × 8 × 3 / 100 = 1200\n  Yr1: +400 | Yr2: +400 | Yr3: +400\n\nTRICK:\n8% of 5000 = 400/yr × 3 = 1200\n(find 1yr interest, multiply by T)\n\n  P=5000 ──[8%×3yr]──→ SI=1200\n  Amount = 5000 + 1200 = 6200\n\nAnswer: SI = Rs.1200 ✓" },

    { num: "2", title: "Find Principal", color: "#1971c2", bg: "#d0ebff",
      q: "The simple interest on a certain sum at 10% per annum for 2 years is Rs.600. Find the principal.",
      tree: "LOGIC:\nStep 1: SI=600, R=10%, T=2 years\nStep 2: P = 100×SI / (R×T)\n  = 100×600 / (10×2) = 3000\n\nTRICK:\n10% for 2yr = 20% total SI\nSI=600 is 20% of P → P = 600×100/20\n= 3000\n\n  P=? ──[10%×2yr]──→ SI=600\n  Verify: 3000×10×2/100 = 600 ✓\n\nAnswer: P = Rs.3000 ✓" },

    { num: "3", title: "Find Rate", color: "#e8590c", bg: "#fff4e6",
      q: "A principal of Rs.800 amounts to Rs.920 in 3 years at simple interest. Find the rate of interest per annum.",
      tree: "LOGIC:\nStep 1: SI = 920-800 = 120, T=3\nStep 2: R = 100×SI/(P×T)\n  = 100×120/(800×3) = 5%\n\nTRICK:\nSI/yr = 120/3 = 40\nR = (40/800)×100 = 5%\n(yearly interest as % of principal)\n\n  |████████████████|░░░| Rs.920\n  |◄── P=800 ────►|120|\n\nAnswer: R = 5% per annum ✓" },

    { num: "4", title: "Find Time", color: "#7048e8", bg: "#e5dbff",
      q: "In how many years will a principal of Rs.1500 yield Rs.450 as simple interest at 6% per annum?",
      tree: "LOGIC:\nStep 1: P=1500, SI=450, R=6%\nStep 2: T = 100×SI/(P×R)\n  = 100×450/(1500×6) = 5\n\nTRICK:\nSI/yr = 1500×6/100 = 90\nT = 450/90 = 5 years\n\n  |--Yr1--|--Yr2--|--Yr3--|--Yr4--|--Yr5--|\n  | +90   | +90   | +90   | +90   | +90  |\n  |◄────────── SI = 450 ──────────────►|\n\nAnswer: T = 5 years ✓" },

    { num: "5", title: "Find Amount (A = P + SI)", color: "#e03131", bg: "#ffe3e3",
      q: "Find the total amount when Rs.12000 is invested at 9% simple interest per annum for 4 years.",
      tree: "LOGIC:\nStep 1: P=12000, R=9%, T=4\nStep 2: SI = 12000×9×4/100 = 4320\nStep 3: A = 12000+4320 = 16320\n\nTRICK:\nA = P(1 + RT/100)\n= 12000(1 + 36/100) = 12000×1.36\n= 16320\n\n  |██████████████|░░░░░░| Amount\n  |◄── P=12000 ─►|SI=4320|\n  |◄──── A = 16320 ────►|\n\nAnswer: Amount = Rs.16320 ✓" },

    { num: "6", title: "Doubles/Triples - Find Time or Rate", color: "#c92a2a", bg: "#fff5f5",
      q: "At what rate will a sum double itself in 8 years at SI?",
      tree: "LOGIC:\nStep 1: Doubles → SI = P\n  P×R×8/100 = P → R×8 = 100\nStep 2: R = 100/8 = 12.5%\n\nTRICK:\nFormula: R×T = (N-1)×100\n2× → R = 100/T = 100/8 = 12.5%\n3× → R = 200/T | N× → (N-1)×100/T\n\n  |████████████|░░░░░░░░░░| 2P\n  |◄── P ─────►|◄─ SI=P ─►|\n\nAnswer: R = 12.5% per annum ✓" },

    { num: "7", title: "N Times in T Years - Find Rate", color: "#0c8599", bg: "#c3fae8",
      q: "A sum of money becomes 5 times itself in 12 years at simple interest. Find the rate of interest per annum.",
      tree: "LOGIC:\nStep 1: 5 times → SI = 4P\n  P×R×12/100 = 4P → R×12 = 400\nStep 2: R = 400/12 = 33 1/3 %\n\nTRICK:\nFormula: R = (N-1)×100/T\n= (5-1)×100/12 = 400/12 = 33 1/3 %\n\n  |██|░░░░░░░░░░░░░░░░| 5P\n  |P |◄── SI = 4P ───►|\n\nAnswer: R = 33 1/3 % per annum ✓" },

    { num: "8", title: "Difference Between Two SIs", color: "#862e9c", bg: "#f3d9fa",
      q: "Find the difference between the simple interest on Rs.2000 for 3 years at 8% per annum and at 6% per annum.",
      tree: "LOGIC:\nStep 1: SI1 = 2000×8×3/100 = 480\n  SI2 = 2000×6×3/100 = 360\nStep 2: Diff = 480-360 = 120\n\nTRICK:\nDiff = P×T×(R1-R2)/100\n= 2000×3×2/100 = 120\n\n  At 8%: |████████████████████| 480\n  At 6%: |███████████████|      360\n         |               |░░░░| 120\n\nAnswer: Diff = Rs.120 ✓" },

    { num: "9", title: "Split Sum at Different Rates", color: "#f08c00", bg: "#fff3bf",
      q: "A sum of Rs.4000 is split into two parts, one invested at 5% and the rest at 9% simple interest. If the total interest per year is Rs.220, find the two parts.",
      tree: "LOGIC:\nStep 1: x at 5%, (4000-x) at 9%\n  5x/100 + 9(4000-x)/100 = 220\nStep 2: 5x+36000-9x = 22000\n  -4x = -14000 → x = 3500\n\nTRICK:\nAvg rate = 220×100/4000 = 5.5%\nAlligation: (9-5.5):(5.5-5) = 7:1\nParts = 4000×7/8 : 4000×1/8 = 3500:500\n\n  |◄─ 3500@5% ─►|◄ 500@9% ►|\n\nAnswer: Rs.3500 and Rs.500 ✓" },

    { num: "10", title: "Equal Installments (Loan Repayment)", color: "#2f9e44", bg: "#ebfbee",
      q: "A loan of Rs.3000 is borrowed at 10% simple interest per annum and repaid in 3 equal annual installments. Find the value of each installment.",
      tree: "LOGIC:\nStep 1: P=3000, R=10%, n=3 installments\nStep 2: x = P×100/[n×100 + n(n-1)/2 × R]\n  = 300000/[300 + 3×10] = 300000/330\n  = 909.09\n\nTRICK:\nDenom = n×100 + n(n-1)×R/2\n= 300 + 30 = 330\nx = 300000/330 = 909.09\n\n  3000 ──→ Pay 909.09 × 3 installments\n\nAnswer: Installment = Rs.909.09 ✓" },

    { num: "11", title: "SI & Amount Relationship", color: "#1971c2", bg: "#d0ebff",
      q: "A sum of money amounts to Rs.1380 in 3 years and Rs.1500 in 5 years at simple interest. Find the principal and the rate of interest.",
      tree: "LOGIC:\nStep 1: SI(2yr) = 1500-1380 = 120\n  SI/yr = 60, SI(3yr) = 180\nStep 2: P = 1380-180 = 1200\n  R = 100×180/(1200×3) = 5%\n\nTRICK:\nSI/yr = (A2-A1)/(T2-T1)\n= (1500-1380)/2 = 60\nP = A1 - SI/yr × T1 = 1380-180 = 1200\n\n  P=1200 ──→ 1380(3yr) ──→ 1500(5yr)\n\nAnswer: P = Rs.1200, R = 5% ✓" },

    { num: "12", title: "Rate Changed - New SI / Difference", color: "#e8590c", bg: "#fff4e6",
      q: "The simple interest on a certain sum is Rs.50 per year. If the rate of interest is increased by 2%, the simple interest increases by Rs.40 per year. Find the principal.",
      tree: "LOGIC:\nStep 1: Extra SI from 2% rate increase\n  P × 2 / 100 = 40\nStep 2: P = 40 × 100/2 = 2000\n\nTRICK:\nP = (Extra SI × 100) / Rate change\n= 40 × 100/2 = 2000\n\n  At R%:     |██████████| SI=50/yr\n  At (R+2)%: |██████████|░░░| SI=90/yr\n                        |◄40►|\n\nAnswer: P = Rs.2000 ✓" },

    { num: "13", title: "Borrow & Lend - Gain Per Year", color: "#7048e8", bg: "#e5dbff",
      q: "A person borrows Rs.5000 at 4% simple interest per annum and lends it at 6% per annum. Find the gain per year.",
      tree: "LOGIC:\nStep 1: Pays = 5000×4/100 = 200/yr\n  Earns = 5000×6/100 = 300/yr\nStep 2: Gain = 300-200 = 100/yr\n\nTRICK:\nGain = P × (Lend%-Borrow%) / 100\n= 5000 × (6-4)/100 = 100/yr\n\n  Borrows@4%: ──→ Pays Rs.200/yr\n  Lends@6%:   ◄── Gets Rs.300/yr\n  Net Gain = Rs.100/yr\n\nAnswer: Gain = Rs.100 per year ✓" },

    { num: "14", title: "Amounts to X in T1 and Y in T2", color: "#e03131", bg: "#ffe3e3",
      q: "A sum of money amounts to Rs.2200 in 2 years and Rs.2800 in 5 years at simple interest. Find the principal and the rate of interest.",
      tree: "LOGIC:\nStep 1: SI(3yr) = 2800-2200 = 600\n  SI/yr = 200, SI(2yr) = 400\nStep 2: P = 2200-400 = 1800\n  R = 100×400/(1800×2) = 11 1/9 %\n\nTRICK:\nSI/yr = (A2-A1)/(T2-T1)\n= 600/3 = 200\nP = A1 - SI/yr×T1 = 2200-400 = 1800\n\n  P=1800──→2200(2yr)──→2800(5yr)\n\nAnswer: P = Rs.1800, R = 11 1/9 % ✓" }
  ]
};
