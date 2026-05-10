module.exports = {
  title: "COMPOUND INTEREST — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Core CI Formulas", color: "#1971c2", bg: "#d0ebff",
      text: "Amount:  A = P × (1 + R/100)^T\nCompound Interest:  CI = A - P\n\nHalf-yearly:  A = P × (1 + R/200)^(2T)\nQuarterly:    A = P × (1 + R/400)^(4T)" },
    { title: "CI vs SI Difference", color: "#2f9e44", bg: "#ebfbee",
      text: "For 2 years:\n  CI - SI = P × (R/100)²\n\nFor 3 years:\n  CI - SI = P × (R/100)² × (3 + R/100)\n\nFor T=1: CI = SI (no difference!)" },
    { title: "Growth & Depreciation", color: "#e8590c", bg: "#fff4e6",
      text: "Population growth: P × (1 + R/100)^T\nDepreciation:      P × (1 - R/100)^T\n\nDifferent rates each year:\n  A = P × (1+R1/100) × (1+R2/100) × (1+R3/100)" },
    { title: "Doubling & Effective Rate", color: "#7048e8", bg: "#e5dbff",
      text: "Rule of 72: T ≈ 72/R years to double\nDoubles in n yrs → 4× in 2n, 8× in 3n\n\nEffective rate (n times/yr):\n  E = (1 + R/(n×100))^n - 1" },
    { title: "Key Power Values", color: "#e03131", bg: "#ffe3e3",
      text: "(1.05)²=1.1025  (1.05)³=1.157625\n(1.10)²=1.21    (1.10)³=1.331\n(1.15)²=1.3225  (1.20)²=1.44\n(1.20)³=1.728   (1.25)²=1.5625\n(0.90)²=0.81    (0.80)³=0.512" }
  ],

  types: [
    { num: "1", title: "Basic CI Calculation", color: "#2f9e44", bg: "#ebfbee",
      q: "Find CI on Rs.10000 at 10% p.a. for 3 years.",
      tree: "LOGIC:\nStep 1: P=10000, R=10%, T=3\nStep 2: A = 10000×(1.1)³ = 10000×1.331\n  = 13310, CI = 13310-10000 = 3310\n\nTRICK:\nYear-by-year: 10000→11000→12100→13310\nCI each yr: 1000, 1100, 1210\n(each yr = prev + 10% of prev)\n\n  10000─[+10%]→11000─[+10%]→12100─[+10%]→13310\n\nAnswer: CI = Rs.3310 ✓" },

    { num: "2", title: "Find Amount with CI", color: "#1971c2", bg: "#d0ebff",
      q: "Rs.8000 at 15% CI p.a. for 2 years. Find amount.",
      tree: "LOGIC:\nStep 1: P=8000, R=15%, T=2\nStep 2: A = 8000×(1.15)²\n  = 8000×1.3225 = 10580\n\nTRICK:\nYr1: 8000 + 1200 = 9200\nYr2: 9200 + 1380 = 10580\n(15% of 8000=1200, 15% of 9200=1380)\n\n  8000─[×1.15]→9200─[×1.15]→10580\n  CI = 10580 - 8000 = 2580\n\nAnswer: Amount = Rs.10580 ✓" },

    { num: "3", title: "CI vs SI Diff (2 Years)", color: "#e8590c", bg: "#fff4e6",
      q: "Find the difference between compound interest and simple interest on Rs.5000 at 8% per annum for 2 years.",
      tree: "LOGIC:\nStep 1: SI = 5000×8×2/100 = 800\n  CI: A = 5000×(1.08)² = 5832\n  CI = 832\nStep 2: Diff = 832-800 = 32\n\nTRICK:\nFor 2 yrs: CI-SI = P×(R/100)²\n= 5000×(0.08)² = 5000×0.0064 = 32\n(interest on 1st year's interest)\n\nAnswer: Diff = Rs.32 ✓" },

    { num: "4", title: "CI vs SI Diff (3 Years)", color: "#7048e8", bg: "#e5dbff",
      q: "The difference between compound interest and simple interest on a certain sum at 10% per annum for 3 years is Rs.155. Find the sum.",
      tree: "LOGIC:\nStep 1: CI-SI for 3yr at 10%\n  155 = P×(0.1)²×(3+0.1)\n  155 = P×0.031\nStep 2: P = 155/0.031 = 5000\n\nTRICK:\nFormula: CI-SI = P×(R/100)²×(3+R/100)\nP = Diff / [(R/100)²×(3+R/100)]\n= 155/0.031 = 5000\n\n  Check: SI=1500, CI=1655, Diff=155 ✓\n\nAnswer: P = Rs.5000 ✓" },

    { num: "5", title: "Find Principal from CI", color: "#e03131", bg: "#ffe3e3",
      q: "CI on a sum for 2 yrs at 5% is Rs.1025. Find the sum.",
      tree: "LOGIC:\nStep 1: CI = P×[(1.05)²-1]\n  1025 = P×[1.1025-1]\n  1025 = P×0.1025\nStep 2: P = 1025/0.1025 = 10000\n\nTRICK:\nCI = P×[(1+R/100)^T - 1]\nP = CI / [(1+R/100)^T - 1]\n= 1025/0.1025 = 10000\n\n  Check: 10000×(1.05)²=11025, CI=1025 ✓\n\nAnswer: P = Rs.10000 ✓" },

    { num: "6", title: "Find Rate from CI", color: "#c92a2a", bg: "#fff5f5",
      q: "Rs.12500 becomes Rs.13520 in 2 yrs CI. Find rate.",
      tree: "LOGIC:\nStep 1: (1+R/100)² = 13520/12500\n  = 1.0816\nStep 2: 1+R/100 = √1.0816 = 1.04\n  R = 4%\n\nTRICK:\nA/P = 1.0816 → recognize (1.04)²\nMemorize: (1.04)²=1.0816\n(1.05)²=1.1025 (1.10)²=1.21\n\n  12500─[?%]→13000─[?%]→13520\n\nAnswer: R = 4% ✓" },

    { num: "7", title: "Find Time (Successive Powers)", color: "#0c8599", bg: "#c3fae8",
      q: "Rs.4000 becomes Rs.4840 at 10% CI. Find time.",
      tree: "LOGIC:\nStep 1: (1.1)^T = 4840/4000 = 1.21\nStep 2: Try powers of 1.1:\n  (1.1)¹=1.1  (1.1)²=1.21 ← match!\n  T = 2 years\n\nTRICK:\nA/P = 121/100 = (11/10)²\nExponent = 2 → T = 2\n\n  4000─[10%]→4400─[10%]→4840\n\nAnswer: T = 2 years ✓" },

    { num: "8", title: "CI Compounded Half-Yearly", color: "#862e9c", bg: "#f3d9fa",
      q: "Find the compound interest on Rs.20000 at 10% per annum for 1.5 years, compounded half-yearly.",
      tree: "LOGIC:\nStep 1: Rate/period = 5%, Periods = 3\nStep 2: A = 20000×(1.05)³\n  = 20000×1.157625 = 23152.50\n  CI = 3152.50\n\nTRICK:\nHalf-yearly: R→R/2, T→2T\n10%/2=5% per half, 1.5yr=3 halves\n20000─[5%]→21000─[5%]→22050─[5%]→23152.50\n\nAnswer: CI = Rs.3152.50 ✓" },

    { num: "9", title: "CI Compounded Quarterly", color: "#f08c00", bg: "#fff3bf",
      q: "Find the compound interest on Rs.16000 at 20% per annum for 9 months, compounded quarterly.",
      tree: "LOGIC:\nStep 1: Rate/qtr = 5%, Periods = 3\nStep 2: A = 16000×(1.05)³\n  = 16000×1.157625 = 18522\n  CI = 2522\n\nTRICK:\nQuarterly: R→R/4, T→4T\n20%/4=5% per qtr, 9mo=3 quarters\n16000─[5%]→16800─[5%]→17640─[5%]→18522\n\nAnswer: CI = Rs.2522 ✓" },

    { num: "10", title: "Population Growth", color: "#2f9e44", bg: "#ebfbee",
      q: "The population of a town is 200000. It grows at 10% in the first year, 15% in the second year, and 20% in the third year. Find the population after 3 years.",
      tree: "LOGIC:\nStep 1: Different rates each year\nStep 2: A = P×(1.10)×(1.15)×(1.20)\n  = 200000×1.518 = 303600\n\nTRICK:\nChain multiply: just cascade!\n200000→220000→253000→303600\n(×1.10, ×1.15, ×1.20)\n\n  200000─[+10%]→220000─[+15%]→253000─[+20%]→303600\n\nAnswer: Population = 303600 ✓" },

    { num: "11", title: "Depreciation (Compound Decrease)", color: "#1971c2", bg: "#d0ebff",
      q: "A machine worth Rs.150000 depreciates at 20% per year. What is its value after 3 years?",
      tree: "LOGIC:\nStep 1: V = P×(1-R/100)^T\n  = 150000×(0.80)³\nStep 2: = 150000×0.512 = 76800\n\nTRICK:\nMemorize: (0.80)³ = 0.512\n150000×0.512 = 76800\nTRAP: 20%×3=60%? NO! Actual=48.8%\n\n  150000─[-20%]→120000─[-20%]→96000─[-20%]→76800\n\nAnswer: Value = Rs.76800 ✓" },

    { num: "12", title: "Installment (EMI with CI)", color: "#e8590c", bg: "#fff4e6",
      q: "Rs.2000 at 10% CI, repaid in 2 equal installments. Find each.",
      tree: "LOGIC:\nStep 1: X/(1.1) + X/(1.1)² = 2000\n  X/1.1 + X/1.21 = 2000\nStep 2: 1.1X + X = 2420\n  2.1X = 2420 → X = 1152.38\n\nTRICK:\nEMI = P×r×(1+r)^n / [(1+r)^n - 1]\n= 2000×0.1×1.21 / 0.21\n= 242/0.21 = 1152.38\n\nAnswer: Installment = Rs.1152.38 ✓" },

    { num: "13", title: "Doubling Time (Rule of 72)", color: "#7048e8", bg: "#e5dbff",
      q: "At what rate does money double in 8 years (CI)?",
      tree: "LOGIC:\nStep 1: (1+R/100)^8 = 2\n  1+R/100 = 2^(1/8) = 1.0905\nStep 2: R = 9.05%\n\nTRICK:\nRule of 72: R = 72/T\n= 72/8 = 9% (close to exact 9.05%)\n\n  6%→12yr  10%→7.2yr  12%→6yr\n  2× in n yrs → 4× in 2n → 8× in 3n\n\nAnswer: R ≈ 9% ✓" },

    { num: "14", title: "Effective Rate of Interest", color: "#0c8599", bg: "#c3fae8",
      q: "What is the effective annual rate of interest if the nominal rate is 10% compounded half-yearly?",
      tree: "LOGIC:\nStep 1: E = (1+R/(n×100))^n - 1\n  = (1+10/200)² - 1\nStep 2: = (1.05)² - 1 = 0.1025 = 10.25%\n\nTRICK:\nFor half-yearly at R%:\nE = R + (R/2)²/100\n= 10 + 25/100 = 10.25%\nMore frequent → higher effective rate\n\nAnswer: Effective Rate = 10.25% ✓" },

    { num: "15", title: "Different Rates Each Year", color: "#862e9c", bg: "#f3d9fa",
      q: "Find the compound interest on Rs.25000 at rates of 4%, 5%, and 6% for 3 successive years.",
      tree: "LOGIC:\nStep 1: A = P×(1.04)×(1.05)×(1.06)\nStep 2: 25000→26000→27300→28938\n  CI = 28938-25000 = 3938\n\nTRICK:\nChain multiply step by step:\n25000×1.04=26000\n26000×1.05=27300\n27300×1.06=28938\nNote: order doesn't matter!\n\nAnswer: CI = Rs.3938 ✓" }
  ]
};
