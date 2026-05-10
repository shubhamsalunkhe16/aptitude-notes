# Compound Interest - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Core CI Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Amount:  A = P × (1 + R/100)^T                                    │
│                                                                     │
│  Compound Interest:  CI = A - P                                     │
│                          = P × [(1 + R/100)^T  - 1]                 │
│                                                                     │
│  When compounded half-yearly:                                       │
│     A = P × (1 + R/200)^(2T)                                       │
│                                                                     │
│  When compounded quarterly:                                         │
│     A = P × (1 + R/400)^(4T)                                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### CI vs SI Difference Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  For 2 years:                                                       │
│     CI - SI = P × (R/100)²                                         │
│                                                                     │
│  For 3 years:                                                       │
│     CI - SI = P × (R/100)² × (3 + R/100)                           │
│                                                                     │
│  SI for T years = P × R × T / 100                                  │
│                                                                     │
│  Difference is due to "interest on interest"                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Population, Depreciation & Growth Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Population Growth:                                                 │
│     P_after = P × (1 + R/100)^T                                    │
│                                                                     │
│  Depreciation (value decreases):                                    │
│     V_after = V × (1 - R/100)^T                                    │
│                                                                     │
│  Different rates each year (R1, R2, R3):                            │
│     A = P × (1 + R1/100) × (1 + R2/100) × (1 + R3/100)            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Doubling, Effective Rate & Installment Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Rule of 72 (approx time to double):                                │
│     T ≈ 72 / R  years                                              │
│                                                                     │
│  Effective Annual Rate (compounded n times/yr):                     │
│     E = (1 + R/(n×100))^n - 1   (expressed as fraction)            │
│     Effective % = E × 100                                           │
│                                                                     │
│  Installment (equal annual, CI):                                    │
│     P = X/(1+R/100) + X/(1+R/100)² + ... + X/(1+R/100)^n           │
│     where X = each installment amount                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Power Values to Memorize

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  (1.05)² = 1.1025      (1.05)³ = 1.157625                          │
│  (1.10)² = 1.21        (1.10)³ = 1.331                             │
│  (1.15)² = 1.3225      (1.15)³ = 1.520875                          │
│  (1.20)² = 1.44        (1.20)³ = 1.728                             │
│  (1.25)² = 1.5625      (1.25)³ = 1.953125                          │
│                                                                     │
│  (0.90)² = 0.81        (0.90)³ = 0.729                             │
│  (0.80)² = 0.64        (0.80)³ = 0.512                             │
│                                                                     │
│  Rule of 72:  at 6% → 12 yrs,  8% → 9 yrs,  10% → 7.2 yrs        │
│               12% → 6 yrs,  15% → 4.8 yrs,  20% → 3.6 yrs        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Compound Interest vs Simple Interest

```
        Simple Interest             Compound Interest
       ────────────────            ───────────────────
       Interest on PRINCIPAL       Interest on PRINCIPAL
       only, every year            + ACCUMULATED INTEREST

  Year 1:  SI₁ = P×R/100           CI₁ = P×R/100         (SAME)
  Year 2:  SI₂ = P×R/100           CI₂ = (P+CI₁)×R/100   (MORE)
  Year 3:  SI₃ = P×R/100           CI₃ = (P+CI₁+CI₂)×R/100 (EVEN MORE)

  Example: P = 1000, R = 10%, T = 3 years

  SI each year = 100, Total SI = 300

  CI Year 1 = 100    (on 1000)
  CI Year 2 = 110    (on 1100 = 1000+100)
  CI Year 3 = 121    (on 1210 = 1100+110)
  Total CI  = 331

  DIFFERENCE = CI - SI = 331 - 300 = 31
             = P×(R/100)²×(3 + R/100)
             = 1000×0.01×3.1 = 31 ✓

  KEY INSIGHT:
    CI > SI always (for T > 1)
    Difference = "interest earned on interest"
    For T = 1 year: CI = SI (no difference!)
```

---

## Type 1: Basic CI Calculation (Find CI Given P, R, T)

**Q: Find the compound interest on Rs.10000 at 10% per annum for 3 years.**

```
  P = 10000,  R = 10%,  T = 3 years

  A = P × (1 + R/100)^T
    = 10000 × (1 + 10/100)³
    = 10000 × (1.1)³
    = 10000 × 1.331
    = 13310

  CI = A - P = 13310 - 10000 = 3310 ✓

  Year-by-year breakdown:
  ┌──────┬──────────┬──────────┬──────────┐
  │ Year │ Principal│ Interest │  Amount  │
  ├──────┼──────────┼──────────┼──────────┤
  │  1   │  10000   │  1000    │  11000   │
  │  2   │  11000   │  1100    │  12100   │
  │  3   │  12100   │  1210    │  13310   │
  └──────┴──────────┴──────────┴──────────┘
  Total CI = 1000 + 1100 + 1210 = 3310 ✓
```

---

## Type 2: Find Amount with CI (A = P(1+R/100)^T)

**Q: What amount will Rs.8000 become in 2 years at 15% compound interest per annum?**

```
  P = 8000,  R = 15%,  T = 2 years

  A = P × (1 + R/100)^T
    = 8000 × (1.15)²
    = 8000 × 1.3225
    = 10580 ✓

  Step-by-step:
  Yr 0: 8000
       ↓  × 1.15
  Yr 1: 9200
       ↓  × 1.15
  Yr 2: 10580 ✓

  SHORTCUT for 2 years:
  A = P + 2×(P×R/100) + P×(R/100)²
    = 8000 + 2×1200 + 8000×0.0225
    = 8000 + 2400 + 180 = 10580 ✓
```

---

## Type 3: CI vs SI Difference for 2 Years

**Q: Find the difference between CI and SI on Rs.5000 at 8% per annum for 2 years.**

```
  Formula: CI - SI = P × (R/100)²

  P = 5000,  R = 8%

  CI - SI = 5000 × (8/100)²
          = 5000 × (0.08)²
          = 5000 × 0.0064
          = 32 ✓

  Verification:
  SI = P×R×T/100 = 5000×8×2/100 = 800

  CI: A = 5000 × (1.08)² = 5000 × 1.1664 = 5832
      CI = 5832 - 5000 = 832

  Diff = 832 - 800 = 32 ✓

  WHY this formula works:
  ┌─────────────────────────────────────────┐
  │ SI yr1 = P×R/100    CI yr1 = P×R/100   │
  │ SI yr2 = P×R/100    CI yr2 = P×R/100   │
  │                      + (P×R/100)×R/100  │
  │                        ↑                │
  │                  interest on yr1 interest│
  │ Diff = P × (R/100)² ← this extra piece │
  └─────────────────────────────────────────┘
```

---

## Type 4: CI vs SI Difference for 3 Years

**Q: The difference between CI and SI on a sum at 10% per annum for 3 years is Rs.155. Find the sum.**

```
  Formula: CI - SI = P × (R/100)² × (3 + R/100)

  R = 10%,  CI - SI = 155

  155 = P × (10/100)² × (3 + 10/100)
  155 = P × (0.1)² × 3.1
  155 = P × 0.01 × 3.1
  155 = P × 0.031

  P = 155 / 0.031 = 5000 ✓

  Verification:
  SI = 5000×10×3/100 = 1500
  CI: A = 5000×(1.1)³ = 5000×1.331 = 6655
      CI = 6655 - 5000 = 1655
  Diff = 1655 - 1500 = 155 ✓

  Breakdown of 3-year difference:
  ┌────────────────────────────────────────┐
  │ Year 2 extra = P×(R/100)²             │
  │ Year 3 extra = 2×P×(R/100)²           │
  │              + P×(R/100)³              │
  │ Total = P×(R/100)² × (3 + R/100)      │
  └────────────────────────────────────────┘
```

---

## Type 5: Find Principal Given CI and Rate

**Q: The compound interest on a certain sum for 2 years at 5% per annum is Rs.1025. Find the sum.**

```
  CI = P × [(1 + R/100)^T - 1]

  1025 = P × [(1.05)² - 1]
  1025 = P × [1.1025 - 1]
  1025 = P × 0.1025

  P = 1025 / 0.1025 = 10000 ✓

  Verification:
  A = 10000 × (1.05)² = 10000 × 1.1025 = 11025
  CI = 11025 - 10000 = 1025 ✓

  SHORTCUT for 2 years at R%:
  ┌──────────────────────────────────────────┐
  │ CI for 2 yrs = P × R/100 × (2 + R/100)  │
  │                                          │
  │ 1025 = P × 0.05 × 2.05                  │
  │ 1025 = P × 0.1025                       │
  │ P = 10000 ✓                              │
  └──────────────────────────────────────────┘
```

---

## Type 6: Find Rate Given CI, P, T

**Q: A sum of Rs.12500 amounts to Rs.13520 in 2 years at CI. Find the rate per annum.**

```
  A = P × (1 + R/100)^T

  13520 = 12500 × (1 + R/100)²

  (1 + R/100)² = 13520/12500 = 1.0816

  1 + R/100 = √1.0816 = 1.04

  R/100 = 0.04
  R = 4% per annum ✓

  Verification:
  A = 12500 × (1.04)² = 12500 × 1.0816 = 13520 ✓

  TRICK: Recognize perfect squares
  ┌──────────────────────────────────────┐
  │ (1.04)² = 1.0816                    │
  │ (1.05)² = 1.1025                    │
  │ (1.08)² = 1.1664                    │
  │ (1.10)² = 1.21                      │
  │ (1.12)² = 1.2544                    │
  │ (1.15)² = 1.3225                    │
  │ (1.20)² = 1.44                      │
  └──────────────────────────────────────┘
```

---

## Type 7: Find Time Given CI, P, R (Successive Values)

**Q: In what time will Rs.4000 amount to Rs.4840 at 10% CI per annum?**

```
  A = P × (1 + R/100)^T

  4840 = 4000 × (1.1)^T

  (1.1)^T = 4840/4000 = 1.21

  We know (1.1)² = 1.21

  T = 2 years ✓

  METHOD: Try successive powers
  ┌────────────────────────────────┐
  │ (1.1)¹ = 1.1                  │
  │ (1.1)² = 1.21    ← match!    │
  │ (1.1)³ = 1.331               │
  │ (1.1)⁴ = 1.4641              │
  └────────────────────────────────┘

  RATIO METHOD (alternative):
  A/P = 4840/4000 = 121/100 = (11/10)²
  Since (1 + R/100) = 11/10
  Power = 2 → T = 2 years ✓
```

---

## Type 8: CI Compounded Half-Yearly

**Q: Find CI on Rs.20000 at 10% per annum for 1.5 years, compounded half-yearly.**

```
  Compounded half-yearly:
    Rate per period = R/2 = 10/2 = 5%
    Number of periods = 2T = 2 × 1.5 = 3

  A = P × (1 + R/200)^(2T)
    = 20000 × (1 + 5/100)³
    = 20000 × (1.05)³
    = 20000 × 1.157625
    = 23152.50

  CI = 23152.50 - 20000 = 3152.50 ✓

  Period breakdown:
  ┌──────────┬──────────┬──────────┬──────────┐
  │ Half-yr  │ Principal│ Interest │  Amount  │
  ├──────────┼──────────┼──────────┼──────────┤
  │   1st    │ 20000.00 │ 1000.00  │ 21000.00 │
  │   2nd    │ 21000.00 │ 1050.00  │ 22050.00 │
  │   3rd    │ 22050.00 │ 1102.50  │ 23152.50 │
  └──────────┴──────────┴──────────┴──────────┘

  KEY: Half-yearly CI > Annual CI
  Annual CI for 1.5 yrs not possible directly!
```

---

## Type 9: CI Compounded Quarterly

**Q: Find the amount on Rs.16000 at 20% per annum for 9 months, compounded quarterly.**

```
  Compounded quarterly:
    Rate per quarter = R/4 = 20/4 = 5%
    Number of quarters = 4T = 4 × (9/12) = 3

  A = P × (1 + R/400)^(4T)
    = 16000 × (1 + 5/100)³
    = 16000 × (1.05)³
    = 16000 × 1.157625
    = 18522 ✓

  Quarter-by-quarter:
  ┌─────────┬──────────┬──────────┬──────────┐
  │ Quarter │ Principal│ Interest │  Amount  │
  ├─────────┼──────────┼──────────┼──────────┤
  │  Q1     │  16000   │   800    │  16800   │
  │  Q2     │  16800   │   840    │  17640   │
  │  Q3     │  17640   │   882    │  18522   │
  └─────────┴──────────┴──────────┴──────────┘

  COMPARISON:
  ┌───────────────────────────────────────────┐
  │ More frequent compounding → More interest │
  │                                           │
  │ Annual    < Half-yearly < Quarterly       │
  │           < Monthly     < Daily           │
  └───────────────────────────────────────────┘
```

---

## Type 10: Population Growth (Compound Increase)

**Q: Population of a city is 200000. It increases by 10% in 1st year, 15% in 2nd year, and 20% in 3rd year. Population after 3 years?**

```
  Different rates each year:
  A = P × (1 + R1/100) × (1 + R2/100) × (1 + R3/100)

  = 200000 × (1.10) × (1.15) × (1.20)
  = 200000 × 1.518
  = 303600 ✓

  Year-by-year:
  Yr 0: 200000
       ↓ × 1.10 (+10%)
  Yr 1: 220000
       ↓ × 1.15 (+15%)
  Yr 2: 253000
       ↓ × 1.20 (+20%)
  Yr 3: 303600 ✓

  SAME RATE EACH YEAR: A = P × (1 + R/100)^T
  If 10% for all 3 years:
  = 200000 × (1.1)³ = 200000 × 1.331 = 266200

  BIRTHS & DEATHS:
  Net growth rate = birth rate - death rate
  Then apply compound formula
```

---

## Type 11: Depreciation (Compound Decrease)

**Q: A machine costing Rs.150000 depreciates at 20% per annum. Find its value after 3 years.**

```
  Depreciation formula:
  V = P × (1 - R/100)^T

  = 150000 × (1 - 20/100)³
  = 150000 × (0.80)³
  = 150000 × 0.512
  = 76800 ✓

  Year-by-year:
  Yr 0: 150000
       ↓ × 0.80 (-20%)
  Yr 1: 120000
       ↓ × 0.80
  Yr 2: 96000
       ↓ × 0.80
  Yr 3: 76800 ✓

  Total depreciation = 150000 - 76800 = 73200

  ┌──────────────────────────────────────────┐
  │ GROWTH:  multiply by (1 + R/100)         │
  │ DECAY:   multiply by (1 - R/100)         │
  │                                          │
  │ 20% depreciation over 3 yrs ≠ 60% loss! │
  │ Actual loss = 48.8% (compound effect)    │
  └──────────────────────────────────────────┘
```

---

## Type 12: Installment Problems (EMI with CI)

**Q: A sum of Rs.2000 is borrowed at 10% CI per annum, to be repaid in 2 equal annual installments. Find each installment.**

```
  Let each installment = X

  Present value of installments = Principal

  X/(1+R/100) + X/(1+R/100)² = P

  X/(1.1) + X/(1.1)² = 2000
  X/1.1 + X/1.21 = 2000

  Multiply by 1.21:
  1.1X + X = 2000 × 1.21
  2.1X = 2420
  X = 2420/2.1 = 1152.38 (approx)

  EXACT:  X = P × R% × (1+R%)^n / [(1+R%)^n - 1]
  where R% = R/100

  = 2000 × 0.1 × (1.1)² / [(1.1)² - 1]
  = 2000 × 0.1 × 1.21 / 0.21
  = 242 / 0.21 = 1152.38 ✓

  ┌──────────────────────────────────────────┐
  │ 3 installments at R%:                    │
  │ X/(1+R%) + X/(1+R%)² + X/(1+R%)³ = P    │
  │                                          │
  │ General: sum of GP with ratio 1/(1+R%)   │
  └──────────────────────────────────────────┘
```

---

## Type 13: Amount Doubles/Triples — Find Time (Rule of 72)

**Q: At what rate of CI per annum will Rs.5000 double in 8 years? Also, when will it become 4 times?**

```
  Rule of 72 (approximation):
  R ≈ 72 / T

  To double in 8 years:
  R ≈ 72/8 = 9% per annum ✓

  EXACT method:
  2P = P × (1 + R/100)^8
  2 = (1 + R/100)^8
  (1 + R/100) = 2^(1/8) ≈ 1.0905
  R ≈ 9.05%

  DOUBLING AND BEYOND:
  ┌─────────────────────────────────────────────┐
  │ If sum DOUBLES in n years, then:            │
  │                                             │
  │ It becomes 4× (=2²) in 2n years            │
  │ It becomes 8× (=2³) in 3n years            │
  │ It becomes 16× (=2⁴) in 4n years           │
  │                                             │
  │ Example: doubles in 5 yrs at some rate      │
  │   → 4× in 10 yrs, 8× in 15 yrs            │
  └─────────────────────────────────────────────┘

  Rule of 72 quick table:
  ┌────────┬──────────────────┐
  │  Rate  │ Time to double   │
  ├────────┼──────────────────┤
  │   6%   │  12 years        │
  │   8%   │   9 years        │
  │  10%   │   7.2 years      │
  │  12%   │   6 years        │
  │  15%   │   4.8 years      │
  │  20%   │   3.6 years      │
  └────────┴──────────────────┘
```

---

## Type 14: Effective Rate of Interest (Annual Equivalent)

**Q: Find the effective annual rate of interest when nominal rate is 10% compounded half-yearly.**

```
  Effective rate = (1 + R/(n×100))^n - 1
  where n = compounding periods per year

  Half-yearly: n = 2, R = 10%

  E = (1 + 10/200)² - 1
    = (1 + 0.05)² - 1
    = (1.05)² - 1
    = 1.1025 - 1
    = 0.1025

  Effective rate = 10.25% ✓

  (Nominal 10% half-yearly = 10.25% annually)

  COMPARISON TABLE:
  ┌──────────────────────────────────────────────┐
  │ Nominal 12% compounded:                      │
  │                                              │
  │ Annually     → Effective = 12%               │
  │ Half-yearly  → Effective = 12.36%            │
  │ Quarterly    → Effective = 12.55%            │
  │ Monthly      → Effective = 12.68%            │
  │                                              │
  │ More frequent → higher effective rate        │
  └──────────────────────────────────────────────┘

  TRICK: For half-yearly, quick formula:
  Effective = R + (R/2)²/100
  = 10 + (5)²/100 = 10 + 0.25 = 10.25% ✓
```

---

## Type 15: CI When Rates Are Different Each Year

**Q: Find CI on Rs.25000 at 4% for 1st year, 5% for 2nd year, and 6% for 3rd year.**

```
  A = P × (1 + R1/100) × (1 + R2/100) × (1 + R3/100)

  = 25000 × (1.04) × (1.05) × (1.06)
  = 25000 × 1.04 × 1.05 × 1.06

  Step by step:
  After yr 1: 25000 × 1.04 = 26000
  After yr 2: 26000 × 1.05 = 27300
  After yr 3: 27300 × 1.06 = 28938

  CI = 28938 - 25000 = 3938 ✓

  VISUAL TIMELINE:
  |◄── 4% ──►|◄── 5% ──►|◄── 6% ──►|
  25000      26000      27300      28938
  yr 0       yr 1       yr 2       yr 3

  COMPARE with uniform 5% for 3 yrs:
  A = 25000 × (1.05)³ = 25000 × 1.157625 = 28940.63
  Almost same! (avg rate ≈ 5%)

  NOTE: Order doesn't matter!
  4%, 5%, 6% gives same A as 6%, 4%, 5%
  (Multiplication is commutative)
```
