# Discount - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Basic Discount Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Discount = Marked Price (MP) - Selling Price (SP)                 │
│  Discount% = (Discount / MP) × 100                                 │
│                                                                     │
│  SP = MP × (100 - D%) / 100                                        │
│  MP = SP × 100 / (100 - D%)                                        │
│                                                                     │
│  Discount% is ALWAYS calculated on Marked Price                    │
│  Profit% is ALWAYS calculated on Cost Price                        │
│                                                                     │
│  Relation: CP → (markup) → MP → (discount) → SP                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Successive Discount Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Two successive discounts d1% and d2%:                              │
│    SP = MP × (100-d1)/100 × (100-d2)/100                           │
│                                                                     │
│  Single equivalent discount:                                        │
│    = d1 + d2 - (d1 × d2)/100                                       │
│                                                                     │
│  Three successive discounts d1, d2, d3:                             │
│    SP = MP × (100-d1)/100 × (100-d2)/100 × (100-d3)/100           │
│                                                                     │
│  Order does NOT matter:                                             │
│    20% then 10% = 10% then 20% = 28%                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Markup & Profit After Discount

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  To earn P% profit after D% discount:                              │
│    MP = CP × (100 + P%) / (100 - D%)                               │
│                                                                     │
│  Markup m%, Discount d%:                                            │
│    Net Profit% = [(100+m)(100-d)/100] - 100                        │
│                                                                     │
│  Buy X Get Y Free:                                                  │
│    Effective Discount% = Y/(X+Y) × 100                             │
│                                                                     │
│  TRAP: 40% markup - 20% discount ≠ 20% profit!                    │
│        Apply formula: (140×80)/100 - 100 = 12%                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### True Discount & Banker's Discount

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  True Discount (TD):                                                │
│    TD = (Amount × Rate × Time) / (100 + RT)                       │
│    Present Worth (PW) = Amount - TD                                 │
│    PW = Amount × 100 / (100 + RT)                                  │
│                                                                     │
│  Banker's Discount (BD):                                            │
│    BD = Simple Interest on Amount                                   │
│    BD = (Amount × Rate × Time) / 100                               │
│                                                                     │
│  Relations:                                                         │
│    BD - TD = Simple Interest on TD                                  │
│    BD = TD × (100 + RT) / 100                                      │
│    TD² = PW × BD                                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Type 1: Find Discount Amount and SP from MP and D%

**Q: A shirt has a marked price of Rs.800. A discount of 15% is offered. Find the discount amount and selling price.**

```
  MP = 800, Discount% = 15%

  Discount = 15% of 800
           = (15/100) × 800
           = Rs.120

  SP = MP - Discount
     = 800 - 120
     = Rs.680

  ┌──────────┐  -15% discount  ┌──────────┐
  │ MP = 800 │ ──────────────► │ SP = 680 │
  └──────────┘                 └──────────┘

  Shortcut: SP = MP × (100 - D%) / 100
           = 800 × 85/100 = Rs.680

  TIP: (100 - D%) gives SP as a percentage of MP
       100 - 15 = 85% → SP is 85% of MP

  Discount = Rs.120, SP = Rs.680 ✓
```

---

## Type 2: Find Discount% Given MP and SP

**Q: A bag marked at Rs.1500 is sold for Rs.1200. Find the discount percentage.**

```
  MP = 1500, SP = 1200

  Discount = MP - SP = 1500 - 1200 = Rs.300

  Discount% = (Discount / MP) × 100
            = (300 / 1500) × 100
            = 20%

  ┌──────────────────────────────────────────┐
  │  MP = 1500                               │
  │  |████████████████████████████████| 100% │
  │  SP = 1200                               │
  │  |████████████████████████████|    80%   │
  │                               |───20%──| │
  └──────────────────────────────────────────┘

  Shortcut: SP/MP = 1200/1500 = 4/5 = 80%
            Discount = 100% - 80% = 20%

  TRAP: Discount% is on MP, NOT on SP or CP!

  Discount = 20% ✓
```

---

## Type 3: Find Marked Price Given SP and D%

**Q: After a 25% discount, an article is sold for Rs.600. Find the marked price.**

```
  SP = 600, D% = 25%

  SP = MP × (100 - D%) / 100
  600 = MP × 75/100

  MP = 600 × 100/75
     = 60000/75
     = Rs.800

  ┌────────┐  -25%   ┌────────┐
  │ MP=800 │ ──────► │ SP=600 │
  └────────┘         └────────┘
   (find this)        (given)

  75% of MP = 600
  MP = 600 / 0.75 = Rs.800

  Verify: 25% of 800 = 200
          SP = 800 - 200 = 600 ✓

  Marked Price = Rs.800 ✓
```

---

## Type 4: Successive Discounts (Two Discounts One After Another)

**Q: A shopkeeper gives successive discounts of 20% and 10% on an article marked Rs.500. Find the final selling price.**

```
  MP = 500, d1 = 20%, d2 = 10%

  After 1st discount:
    SP1 = 500 × (100-20)/100 = 500 × 80/100 = 400

  After 2nd discount (on new price 400):
    SP = 400 × (100-10)/100 = 400 × 90/100 = 360

  500 ──-20%──► 400 ──-10%──► 360

  ┌──────────────────────────────────────┐
  │  |████████████████████| 500 (MP)     │
  │  |████████████████    | 400 (-20%)   │
  │  |██████████████      | 360 (-10%)   │
  │                                      │
  │  Total discount = 500-360 = Rs.140  │
  │  = 28% of MP (not 30%!)             │
  └──────────────────────────────────────┘

  TRAP: 2nd discount applies on REDUCED price
        20% + 10% ≠ 30% discount!
        Actual = 28%

  SP = Rs.360 ✓
```

---

## Type 5: Single Equivalent Discount for Successive Discounts

**Q: Find the single equivalent discount for two successive discounts of 25% and 20%.**

```
  d1 = 25%, d2 = 20%

  Formula: Equiv D% = d1 + d2 - (d1 × d2)/100

  = 25 + 20 - (25 × 20)/100
  = 45 - 500/100
  = 45 - 5
  = 40%

  Verify with MP = 100:
    100 ──25%──► 75 ──20%──► 60
    Discount = 100 - 60 = 40 → 40% ✓

  ┌──────────────────────────────────────┐
  │  Common equivalents:                 │
  │                                      │
  │  10% + 10% = 19%  (not 20%)         │
  │  20% + 10% = 28%  (not 30%)         │
  │  25% + 20% = 40%  (not 45%)         │
  │  30% + 20% = 44%  (not 50%)         │
  │  50% + 50% = 75%  (not 100%!)       │
  └──────────────────────────────────────┘

  For 3 discounts: combine first two, then with third.
  Sum of discounts is ALWAYS more than equivalent!

  Equivalent discount = 40% ✓
```

---

## Type 6: Marked Price to Get Desired Profit After Discount

**Q: A trader wants 20% profit after giving 10% discount. If CP is Rs.500, what should be the marked price?**

```
  CP = 500, desired profit = 20%, discount = 10%

  Required SP = CP × (100 + P%) / 100
              = 500 × 120/100 = Rs.600

  SP = MP × (100 - D%) / 100
  600 = MP × 90/100
  MP = 600 × 100/90 = Rs.666.67

  CP=500 ──+20%──► SP=600 ◄──-10%── MP=666.67

  ┌───────────────────────────────────────────┐
  │  Direct Formula:                          │
  │  MP = CP × (100+P%) / (100-D%)           │
  │     = 500 × 120/90                        │
  │     = Rs.666.67                           │
  │                                           │
  │  Markup% = (166.67/500) × 100 = 33.33%  │
  └───────────────────────────────────────────┘

  Verify: 10% of 666.67 = 66.67
          SP = 666.67 - 66.67 = 600
          Profit = 600 - 500 = 100 = 20% of 500 ✓

  MP = Rs.666.67 ✓
```

---

## Type 7: Buy X Get Y Free (Effective Discount%)

**Q: A shop offers 'Buy 2 Get 1 Free'. What is the effective discount percentage?**

```
  Buy 2, Get 1 Free
  Customer pays for: 2 items
  Customer receives: 2 + 1 = 3 items

  Effective D% = (Free items / Total items) × 100
               = (1 / 3) × 100
               = 33.33%

  Pays: |███|███|   | 2 items
  Gets: |███|███|███| 3 items
  Free:         |███| 1 item = 1/3 of total

  ┌──────────────────────────────────────┐
  │  Common offers → effective discount: │
  │                                      │
  │  Buy 1 Get 1 Free → 1/2 = 50%      │
  │  Buy 2 Get 1 Free → 1/3 = 33.33%   │
  │  Buy 3 Get 1 Free → 1/4 = 25%      │
  │  Buy 4 Get 1 Free → 1/5 = 20%      │
  │  Buy 5 Get 2 Free → 2/7 = 28.57%   │
  └──────────────────────────────────────┘

  TRAP: Denominator = TOTAL items received
        NOT the number of items bought!
        Buy 3 Get 1 Free = 1/4 = 25% (not 1/3)

  Effective discount = 33.33% ✓
```

---

## Type 8: Comparing Two Discount Offers

**Q: Shop A offers 30% discount. Shop B offers successive discounts of 20% and 15%. Which is better for the buyer on same MP?**

```
  Let MP = Rs.100 for both shops

  Shop A: 30% flat discount
    SP = 100 × 70/100 = Rs.70

  Shop B: 20% then 15% successive
    Equivalent = 20 + 15 - (20×15)/100
               = 35 - 3 = 32%
    SP = 100 × 68/100 = Rs.68

  ┌──────────────────────────────────────┐
  │  Shop A: SP = Rs.70  (30% off)      │
  │  Shop B: SP = Rs.68  (32% off)      │
  │                                      │
  │  |████████████████████████| 100      │
  │  |██████████████████████  | 70 (A)   │
  │  |████████████████████    | 68 (B)   │
  │                                      │
  │  Shop B saves Rs.2 more per Rs.100  │
  └──────────────────────────────────────┘

  Shop B gives MORE total discount (32% > 30%)
  Buyer pays LESS at Shop B → Shop B is better

  Shop B is the better deal (32% vs 30%) ✓
```

---

## Type 9: Discount on Discount vs Flat Discount

**Q: Which is better: a flat 40% discount OR two successive discounts of 25% and 20%? Compare for MP = Rs.1000.**

```
  Flat discount: 40%
    SP = 1000 × 60/100 = Rs.600

  Successive: 25% then 20%
    Equivalent = 25 + 20 - (25×20)/100
               = 45 - 5 = 40%
    SP = 1000 × 60/100 = Rs.600

  ┌──────────────────────────────────────────┐
  │  Flat 40%:      SP = Rs.600             │
  │  25% + 20%:     SP = Rs.600             │
  │                                          │
  │  BOTH ARE EQUAL! Same 40% off.          │
  │                                          │
  │  GENERAL RULE:                           │
  │  If d1+d2-(d1×d2/100) = flat%           │
  │  then both offers are identical.        │
  │                                          │
  │  30% flat vs 20%+10%=28% → flat better  │
  │  30% flat vs 20%+15%=32% → succ better │
  └──────────────────────────────────────────┘

  TIP: Successive discounts where d1+d2 = flat
       are ALWAYS worse than the flat discount
       (because d1×d2/100 > 0)

  Both are equal at 40% ✓
```

---

## Type 10: True Discount vs Banker's Discount

**Q: Find the true discount and banker's discount on Rs.1060 due in 1 year at 6% per annum.**

```
  Amount (A) = Rs.1060, Rate (R) = 6%, Time (T) = 1 year

  True Discount:
    TD = (A × R × T) / (100 + RT)
       = (1060 × 6 × 1) / (100 + 6)
       = 6360 / 106
       = Rs.60

  Banker's Discount:
    BD = (A × R × T) / 100
       = (1060 × 6 × 1) / 100
       = 6360 / 100
       = Rs.63.60

  Present Worth = A - TD = 1060 - 60 = Rs.1000

  ┌───────────────────────────────────────────────┐
  │  TD = Rs.60      (fair discount)              │
  │  BD = Rs.63.60   (bank charges more)          │
  │                                               │
  │  BD - TD = SI on TD                           │
  │  = 60 × 6 × 1/100 = Rs.3.60 ✓               │
  │                                               │
  │  BD > TD always (bank gains extra)            │
  │  TD² = PW × BD                               │
  │  60² = 1000 × 3.6 = 3600 ✓                  │
  └───────────────────────────────────────────────┘

  Verify: SI on PW = 1000 × 6/100 = 60 = TD ✓

  TD = Rs.60, BD = Rs.63.60 ✓
```
