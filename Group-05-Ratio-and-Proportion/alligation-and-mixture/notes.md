# Alligation and Mixture - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Alligation Rule (Cross Method)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Cheaper(C)         Dearer(D)                                       │
│       \               /                                             │
│         Mean(M)                                                     │
│       /               \                                             │
│    (D - M)          (M - C)                                         │
│                                                                     │
│  Ratio of Cheaper : Dearer = (D - M) : (M - C)                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Mean Price Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Mean Price = (C × Qc + D × Qd) / (Qc + Qd)                       │
│                                                                     │
│  Mean price always lies BETWEEN the cheaper and dearer prices       │
│                                                                     │
│  It is the weighted average of all components                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Remove and Replace Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  After n operations of removing x litres from V litres:             │
│                                                                     │
│  Final pure quantity = V × (1 - x/V)^n                              │
│                                                                     │
│  Concentration after n replacements:                                │
│  = (1 - x/V)^n × 100%                                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Repeated Dilution

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Quantity left after n operations:                                  │
│  = V × ((V - x) / V)^n                                             │
│                                                                     │
│  Ratio of pure to impure:                                           │
│  = ((V-x)/V)^n : (1 - ((V-x)/V)^n)                                 │
│                                                                     │
│  Each replacement reduces concentration by the same fraction        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Type 1: Alligation Rule (Basic)

**Q: In what ratio must rice at Rs 30/kg be mixed with rice at Rs 40/kg to get a mixture worth Rs 34/kg?**

```
  Cheaper = 30, Dearer = 40, Mean = 34

  Alligation cross:
  30          40
    \        /
      34
    /        \
  (40-34)  (34-30)
     6    :   4
     3    :   2

  Cheaper : Dearer = (D - M) : (M - C)
  = (40 - 34) : (34 - 30) = 6 : 4 = 3 : 2

  Answer: Ratio = 3:2 ✓
```

---

## Type 2: Mean Price

**Q: 5 kg of wheat at Rs 20/kg is mixed with 3 kg of wheat at Rs 30/kg. Find the price per kg of the mixture.**

```
  Mean = (C × Qc + D × Qd) / (Qc + Qd)
  = (20 × 5 + 30 × 3) / (5 + 3)
  = (100 + 90) / 8
  = 190 / 8 = Rs 23.75/kg

  5 kg × Rs 20 = Rs 100
  3 kg × Rs 30 = Rs  90
  ──────────────────────
  8 kg  total  = Rs 190
  Per kg = 190/8 = Rs 23.75

  Between 20 and 30 ✓
  Closer to 20 (larger quantity) ✓

  Answer: Rs 23.75/kg ✓
```

---

## Type 3: Finding Ratio from Mean

**Q: Two varieties of tea costing Rs 126/kg and Rs 135/kg are mixed. The mixture costs Rs 130/kg. Find the ratio of mixing.**

```
  C = 126, D = 135, M = 130

  Alligation cross:
  126         135
    \        /
      130
    /        \
  (135-130) (130-126)
     5     :    4

  Cheaper : Dearer = 5 : 4

  Verify: (126 × 5 + 135 × 4) / (5 + 4)
  = (630 + 540) / 9 = 1170 / 9 = 130 ✓

  Answer: Ratio = 5:4 ✓
```

---

## Type 4: Solution Mixing

**Q: How many litres of a 30% acid solution must be added to 40 litres of a 10% acid solution to get a 20% acid solution?**

```
  C = 10%, D = 30%, M = 20%

  Alligation:
  10%         30%
    \        /
      20%
    /        \
  (30-20)  (20-10)
    10   :   10 = 1 : 1

  Weaker : Stronger = 1 : 1
  40L of 10% → need 40L of 30%

  10% soln : 30% soln = 1 : 1
  40L      :   xL     = 1 : 1
  x = 40 litres

  Answer: 40 litres ✓
```

---

## Type 5: Remove and Replace

**Q: A container has 80 litres of milk. 8 litres is taken out and replaced with water. This is done twice. Find the milk remaining.**

```
  V = 80, x = 8, n = 2

  Milk left = V × (1 - x/V)^n
  = 80 × (1 - 8/80)^2
  = 80 × (72/80)^2
  = 80 × (9/10)^2
  = 80 × 81/100
  = 64.8 litres

  Start:  80L milk
  Op 1:   80 × (9/10) = 72L milk
  Op 2:   72 × (9/10) = 64.8L milk

  Each time: multiply by (1 - x/V)

  Answer: 64.8 litres of milk ✓
```

---

## Type 6: Repeated Dilution (n times)

**Q: A vessel contains 60 litres of milk. 12 litres is drawn out and replaced by water 3 times. How much milk remains?**

```
  V = 60, x = 12, n = 3

  Milk = V × (1 - x/V)^n
  = 60 × (1 - 12/60)^3
  = 60 × (48/60)^3
  = 60 × (4/5)^3
  = 60 × 64/125
  = 30.72 litres

  Op 1: 60 × 4/5   = 48L
  Op 2: 48 × 4/5   = 38.4L
  Op 3: 38.4 × 4/5 = 30.72L

  Fraction remaining = (4/5)^3 = 51.2%

  Answer: 30.72 litres ✓
```

---

## Type 7: Milk and Water

**Q: A mixture of 40 litres has milk and water in ratio 3:1. How much water must be added to make the ratio 3:2?**

```
  Milk = 40 × 3/4 = 30L
  Water = 40 × 1/4 = 10L

  Add x litres of water
  New ratio: 30 / (10 + x) = 3/2
  60 = 3(10 + x)
  60 = 30 + 3x
  3x = 30 → x = 10

  Before:  Milk = 30, Water = 10 (3:1)
  Add 10L water
  After:   Milk = 30, Water = 20 (3:2)

  30 : 20 = 3 : 2 ✓

  Answer: 10 litres of water ✓
```

---

## Type 8: Profit by Mixing

**Q: A shopkeeper mixes 2 varieties of tea, one at Rs 60/kg and another at Rs 90/kg in ratio 2:1, and sells at Rs 80/kg. Find profit percent.**

```
  Cost of mixture:
  = (60 × 2 + 90 × 1) / (2 + 1)
  = (120 + 90) / 3 = 210/3 = Rs 70/kg

  SP = Rs 80/kg
  Profit = 80 - 70 = Rs 10/kg
  Profit% = (10/70) × 100 = 14.29%

  60/kg × 2 parts = Rs 120
  90/kg × 1 part  = Rs  90
  ─────────────────────────
  3 parts total   = Rs 210
  CP per kg = Rs 70
  SP per kg = Rs 80
  Profit% = 10/70 × 100 ≈ 14.3%

  Answer: Profit = 14.29% ✓
```

---

## Type 9: Three Items Mixing

**Q: Three types of rice at Rs 20, Rs 25, and Rs 30 per kg are mixed in ratio 2:3:5. Find the cost of the mixture per kg.**

```
  Mean price (weighted average):
  = (20 × 2 + 25 × 3 + 30 × 5) / (2 + 3 + 5)
  = (40 + 75 + 150) / 10
  = 265 / 10 = Rs 26.50/kg

  20/kg × 2 = Rs  40
  25/kg × 3 = Rs  75
  30/kg × 5 = Rs 150
  ────────────────────
  10 kg     = Rs 265
  Per kg = Rs 26.50

  Between 20 and 30 ✓
  Weighted toward 30 (largest quantity) ✓

  Answer: Rs 26.50/kg ✓
```

---

## Type 10: Container Problem

**Q: Two containers have milk-water ratios 3:2 and 5:3. In what ratio should they be mixed to get a 7:4 ratio?**

```
  Milk fraction:
  Container 1: 3/5
  Container 2: 5/8
  Target: 7/11

  Alligation on milk fraction:
  3/5           5/8
    \           /
     7/11
    /           \
  (5/8 - 7/11) (7/11 - 3/5)
  (55-56)/88    (35-33)/55
   -1/88         2/55

  Wait — use absolute values:
  Ratio = |7/11 - 3/5| : |5/8 - 7/11|
        = 2/55 : 1/88
        = 2×88 : 1×55 = 176 : 55
        = 16 : 5

  Answer: Ratio = 16:5 ✓
```

---

## Type 11: Cross Method (Detailed)

**Q: Milk at Rs 15/litre is mixed with water (free) to get a mixture worth Rs 10/litre. Find the ratio of milk to water.**

```
  Milk = Rs 15, Water = Rs 0, Mean = Rs 10

  Alligation cross:
  15           0
    \         /
      10
    /         \
  (0-10)   (10-15)
    10    :    5
     2    :    1

  Cheaper(water) : Dearer(milk) = (D-M):(M-C)
  = (15-10) : (10-0) = 5 : 10

  But we want Milk : Water
  = 10 : 5 = 2 : 1

  Answer: Milk:Water = 2:1 ✓
```

---

## Type 12: Alloys Mixing

**Q: Alloy A has copper and zinc in ratio 5:3. Alloy B has them in ratio 1:2. If 8 kg of A and 12 kg of B are melted, find copper percentage in new alloy.**

```
  Copper in A = 8 × 5/8 = 5 kg
  Copper in B = 12 × 1/3 = 4 kg

  Total copper = 5 + 4 = 9 kg
  Total alloy = 8 + 12 = 20 kg

  Copper% = (9/20) × 100 = 45%

  Alloy A (8kg):  Cu = 5, Zn = 3
  Alloy B (12kg): Cu = 4, Zn = 8
  ─────────────────────────────────
  New (20kg):     Cu = 9, Zn = 11

  Cu% = 9/20 = 45%
  Zn% = 11/20 = 55%

  Answer: Copper = 45% ✓
```
