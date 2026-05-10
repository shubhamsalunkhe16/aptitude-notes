# Profit and Loss - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Basic Profit & Loss Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Profit = SP - CP       (when SP > CP)                              │
│  Loss   = CP - SP       (when CP > SP)                              │
│                                                                     │
│  Profit% = (Profit / CP) × 100                                     │
│  Loss%   = (Loss / CP)   × 100                                     │
│                                                                     │
│  SP = CP × (100 + P%) / 100     (when profit)                      │
│  SP = CP × (100 - L%) / 100     (when loss)                        │
│                                                                     │
│  CP = SP × 100 / (100 + P%)     (when profit)                      │
│  CP = SP × 100 / (100 - L%)     (when loss)                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Discount & Marked Price Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Marked Price (MP) = the listed/label price                         │
│  Discount = MP - SP                                                 │
│  Discount% = (Discount / MP) × 100                                 │
│                                                                     │
│  SP = MP × (100 - D%) / 100                                        │
│                                                                     │
│  Relation: CP → (markup) → MP → (discount) → SP → (profit/loss)   │
│                                                                     │
│  If markup = m% and discount = d%:                                  │
│     SP = CP × (100+m)/100 × (100-d)/100                            │
│     Profit% = [(100+m)(100-d)/100] - 100                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Successive Discount & Special Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Two successive discounts d1% and d2%:                              │
│     Single equiv = d1 + d2 - (d1×d2)/100  %                        │
│                                                                     │
│  Dishonest dealer (uses less weight):                               │
│     Gain% = [True weight - False weight] / False weight × 100      │
│     OR: Gain% = Error / (True - Error) × 100                       │
│                                                                     │
│  CP of X articles = SP of Y articles:                               │
│     Profit% = [(X-Y) / Y] × 100    (when X > Y → profit)          │
│     Loss%   = [(Y-X) / Y] × 100    (when Y > X → loss)            │
│                                                                     │
│  Buy X get Y free:                                                  │
│     Effective discount% = [Y / (X+Y)] × 100                        │
│                                                                     │
│  Sell 2 items at same SP, one at P% profit, one at P% loss:        │
│     Always a LOSS = P²/100  % on the whole deal                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Ratio-based & Chain Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  If CP : SP = a : b                                                 │
│     Profit% = [(b-a)/a] × 100   (when b > a)                       │
│     Loss%   = [(a-b)/a] × 100   (when a > b)                       │
│                                                                     │
│  Successive P% then L% (or vice versa):                             │
│     Net effect = P - L - (P×L)/100  %                               │
│     (negative → net loss)                                           │
│                                                                     │
│  Manufacturer → Wholesaler → Retailer → Customer:                   │
│     Final SP = CP × (100+P1)/100 × (100+P2)/100 × ...              │
│                                                                     │
│  Break-even: SP = CP (no profit, no loss)                           │
│     If sold N items at profit, how many at loss for break-even?     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Profit & Loss Flow

```
         PROFIT AND LOSS — Flow of Money

   Cost Price (CP)                Selling Price (SP)
        │                              │
        │   SP > CP → PROFIT           │
        │   SP < CP → LOSS             │
        │   SP = CP → NO P/L           │
        │                              │
        ▼                              ▼
  ┌──────────┐   markup    ┌──────────┐   discount   ┌──────────┐
  │    CP    │ ─────────► │    MP    │ ──────────►  │    SP    │
  └──────────┘             └──────────┘              └──────────┘
   (cost price)           (marked price)           (selling price)

  KEY RELATIONSHIPS:
     MP = CP × (100 + markup%) / 100
     SP = MP × (100 - discount%) / 100
     Profit = SP - CP
     Profit% is ALWAYS on CP (not SP or MP)

  GOLDEN RULE:
     Profit% and Loss% are ALWAYS calculated on CP
     Discount% is ALWAYS calculated on MP
     Never mix the bases!
```

---

## Type 1: Basic — Find CP, SP, Profit, Loss

**Q: An article is bought for Rs.500 and sold for Rs.620. Find profit and profit%.**

```
  CP = 500,  SP = 620

  ┌──────────┐              ┌──────────┐
  │ CP = 500 │ ──────────►  │ SP = 620 │
  └──────────┘              └──────────┘
              profit = 620 - 500

  Profit = SP - CP = 620 - 500 = Rs.120

  Profit% = (Profit / CP) × 100
          = (120 / 500) × 100
          = 24% ✓

  NOTE: If SP < CP, it's a LOSS
        Loss = CP - SP,  Loss% = (Loss/CP) × 100
```

---

## Type 2: Find Profit% or Loss%

**Q: A shopkeeper buys a watch for Rs.800 and sells it for Rs.680. Find loss%.**

```
  CP = 800,  SP = 680

  Since SP < CP → it's a LOSS

  Loss = CP - SP = 800 - 680 = Rs.120

  Loss% = (Loss / CP) × 100
        = (120 / 800) × 100
        = 15% ✓

  ┌───────────────────────────────────────────┐
  │  CP = 800                                 │
  │  |████████████████████████████████| 100%   │
  │  SP = 680                                 │
  │  |███████████████████████████|     85%     │
  │                              |─15%─|       │
  └───────────────────────────────────────────┘

  SHORTCUT: Loss/CP = 120/800 = 12/80 = 3/20
            3/20 = 15%
```

---

## Type 3: Find SP Given CP and Profit%

**Q: An article costs Rs.1500. It is sold at 20% profit. Find the selling price.**

```
  CP = 1500,  Profit% = 20%

  SP = CP × (100 + P%) / 100
     = 1500 × (100 + 20) / 100
     = 1500 × 120 / 100
     = 1500 × 1.2
     = Rs.1800 ✓

  CP ──────────── +20% ──────────── SP
  1500 ──────────────────────────► 1800

  SHORTCUT: 20% of 1500 = 300
            SP = 1500 + 300 = 1800 ✓

  FOR LOSS: SP = CP × (100 - L%) / 100
            At 20% loss: SP = 1500 × 80/100 = 1200
```

---

## Type 4: Find CP Given SP and Profit%

**Q: An article is sold for Rs.540 at a profit of 8%. Find the cost price.**

```
  SP = 540,  Profit% = 8%

  CP = SP × 100 / (100 + P%)
     = 540 × 100 / (100 + 8)
     = 540 × 100 / 108
     = 54000 / 108
     = Rs.500 ✓

  Verify: SP = 500 × 108/100 = 540 ✓

  ┌──────────┐    +8%     ┌──────────┐
  │ CP = 500 │ ────────►  │ SP = 540 │
  └──────────┘            └──────────┘
    (find this)             (given)

  FOR LOSS: CP = SP × 100 / (100 - L%)
  e.g. SP=540, Loss=10%:
  CP = 540 × 100/90 = Rs.600
```

---

## Type 5: Discount — Find Discount%, SP After Discount

**Q: A shirt is marked at Rs.1200 and sold at Rs.960. Find the discount%.**

```
  MP = 1200,  SP = 960

  Discount = MP - SP = 1200 - 960 = Rs.240

  Discount% = (Discount / MP) × 100
            = (240 / 1200) × 100
            = 20% ✓

  ┌──────────┐  -20% discount  ┌──────────┐
  │ MP = 1200│ ──────────────► │ SP = 960 │
  └──────────┘                 └──────────┘

  NOTE: Discount% is on MP, NOT on CP!

  Given discount%: SP = MP × (100 - D%) / 100
  e.g. MP=1200, D=25%:
  SP = 1200 × 75/100 = Rs.900
```

---

## Type 6: Marked Price Problems (MP, Discount, SP, Profit)

**Q: A trader marks his goods 40% above CP and gives 20% discount. Find his profit%.**

```
  Let CP = 100

  MP = CP + 40% of CP = 100 + 40 = 140
  Discount = 20% of MP = 20% of 140 = 28
  SP = MP - Discount = 140 - 28 = 112

  ┌────────┐  +40%   ┌────────┐  -20%   ┌────────┐
  │ CP=100 │ ──────► │ MP=140 │ ──────► │ SP=112 │
  └────────┘         └────────┘         └────────┘

  Profit = SP - CP = 112 - 100 = 12
  Profit% = 12/100 × 100 = 12% ✓

  FORMULA: Net P% = [(100+m)(100-d)/100] - 100
         = (140 × 80)/100 - 100
         = 112 - 100 = 12% ✓

  TRAP: 40% markup - 20% discount ≠ 20% profit!
```

---

## Type 7: Successive Discounts

**Q: A shopkeeper gives two successive discounts of 20% and 10% on an article marked at Rs.500. Find the final SP and single equivalent discount.**

```
  MP = 500,  d1 = 20%,  d2 = 10%

  After 1st discount: SP1 = 500 × 80/100 = 400
  After 2nd discount: SP  = 400 × 90/100 = 360

  500 ──-20%──► 400 ──-10%──► 360

  Total discount = 500 - 360 = 140
  Equiv D% = (140/500) × 100 = 28% ✓

  FORMULA: Single equiv = d1 + d2 - (d1×d2)/100
         = 20 + 10 - (20×10)/100
         = 30 - 2 = 28% ✓

  TRAP: 20% + 10% ≠ 30%!
        Two 50% discounts ≠ 100% (it's 75%)

  ORDER doesn't matter:
  20% then 10% = 10% then 20% = 28%
```

---

## Type 8: Profit/Loss on Selling Two Items at Same Price

**Q: A man sells two watches for Rs.1200 each. On one he gains 20% and on the other he loses 20%. Find overall gain or loss%.**

```
  SP of each = 1200

  Watch 1 (20% profit):
    CP1 = 1200 × 100/120 = 1000

  Watch 2 (20% loss):
    CP2 = 1200 × 100/80 = 1500

  Total CP = 1000 + 1500 = 2500
  Total SP = 1200 + 1200 = 2400

  Loss = 2500 - 2400 = Rs.100
  Loss% = (100/2500) × 100 = 4% ✓

  ┌──────────────────────────────────────────┐
  │  SHORTCUT: When same SP and same P%=L%  │
  │                                          │
  │  ALWAYS a LOSS = P²/100 %               │
  │  = 20²/100 = 400/100 = 4% loss ✓        │
  │                                          │
  │  NEVER a profit in this case!            │
  │  (CP for loss item is always higher)     │
  └──────────────────────────────────────────┘
```

---

## Type 9: Dishonest Dealer (Uses Wrong Weight)

**Q: A shopkeeper claims to sell at cost price but uses a weight of 900g instead of 1 kg. Find his gain%.**

```
  True weight = 1000g,  False weight = 900g

  Gain% = [(True - False) / False] × 100
        = [(1000 - 900) / 900] × 100
        = (100 / 900) × 100
        = 100/9
        = 11.11% ✓

  He pays for:  900g (his actual weight)
  He charges:   1000g (customer pays for 1 kg)
  Free gain:    100g on every kg

  ┌──────────────────────────────────────────┐
  │  Pays for 900g  │███████████████████░░│  │
  │  Charges 1000g  │████████████████████████│
  │                 |◄── gains 100g ──►|     │
  └──────────────────────────────────────────┘

  VARIATION: Also sells at x% above CP
    Total gain% = [(True/False) × (100+x)/100 - 1] × 100

  e.g. 900g weight + 10% above CP:
  = (1000/900 × 110/100 - 1) × 100
  = (1.2222 - 1) × 100 = 22.22%
```

---

## Type 10: CP of X Articles = SP of Y Articles

**Q: The cost price of 20 articles is equal to the selling price of 16 articles. Find the profit%.**

```
  CP of 20 = SP of 16

  Let CP of 1 article = Re.1
  CP of 20 articles = Rs.20

  SP of 16 articles = Rs.20
  SP of 1 article = 20/16 = Rs.1.25

  Profit per article = 1.25 - 1 = Re.0.25

  Profit% = (0.25/1) × 100 = 25% ✓

  SHORTCUT FORMULA:
  CP of X = SP of Y

  Profit% = [(X - Y) / Y] × 100
          = [(20 - 16) / 16] × 100
          = (4/16) × 100 = 25% ✓

  ┌───────────────────────────────────────┐
  │  X > Y → Profit (sells fewer for     │
  │           same money = higher SP)     │
  │  X < Y → Loss   (sells more for      │
  │           same money = lower SP)      │
  │  X = Y → No P/L (CP = SP)            │
  └───────────────────────────────────────┘
```

---

## Type 11: Buy X Get Y Free (Effective Discount)

**Q: A shopkeeper offers "Buy 3 Get 1 Free". What is the effective discount%?**

```
  Buy 3, Get 1 Free → Customer pays for 3, gets 4

  Effective discount% = [Free items / Total items] × 100
                      = [1 / (3+1)] × 100
                      = (1/4) × 100
                      = 25% ✓

  Customer pays for:  3 items  ███████████████
  Customer gets:      4 items  ████████████████████
  Free:               1 item               █████
                                           25%

  VARIATION with profit:
  Q: Buy 4 Get 1 Free. Shopkeeper still makes 10% profit.
     What is his markup% over CP?

  He sells 5 items for price of 4.
  Effective SP per item = (4/5) × MP
  SP = 1.1 × CP (10% profit)
  (4/5) × MP = 1.1 × CP
  MP = 1.1 × 5/4 × CP = 1.375 × CP
  Markup = 37.5%
```

---

## Type 12: Profit% When CP and SP Given in Ratio

**Q: The ratio of CP to SP of an article is 5:7. Find the profit%.**

```
  CP : SP = 5 : 7

  Let CP = 5x,  SP = 7x

  Profit = SP - CP = 7x - 5x = 2x

  Profit% = (Profit / CP) × 100
          = (2x / 5x) × 100
          = (2/5) × 100
          = 40% ✓

  SHORTCUT: CP:SP = a:b
    Profit% = [(b-a)/a] × 100
    = [(7-5)/5] × 100 = 40% ✓

  ┌───────────────────────────────────┐
  │  CP : SP = 5 : 7                 │
  │                                   │
  │  CP  |█████|           = 5 parts  │
  │  SP  |███████|         = 7 parts  │
  │            |██| profit = 2 parts  │
  │                                   │
  │  P% = 2/5 × 100 = 40%            │
  └───────────────────────────────────┘

  If ratio is a:b and a > b → Loss% = (a-b)/a × 100
  e.g. CP:SP = 7:5 → Loss% = 2/7 × 100 = 28.57%
```

---

## Type 13: Two Successive Profit/Loss Percentages

**Q: A sells an article to B at 20% profit. B sells it to C at 10% loss. If A's CP is Rs.1000, find C's CP (final SP).**

```
  A's CP = 1000

  A → B at 20% profit:
    B's CP = 1000 × 120/100 = 1200

  B → C at 10% loss:
    C's CP = 1200 × 90/100 = 1080

  1000 ──+20%──► 1200 ──-10%──► 1080

  Net effect on original CP:
  = (+20%) then (-10%)
  = 20 - 10 - (20×10)/100
  = 20 - 10 - 2
  = +8% net profit ✓

  Check: 1000 × 108/100 = 1080 ✓

  FORMULA for successive P% then L%:
  Net = P - L - (P×L)/100
  (negative result means net loss)

  e.g. +10% then -20%:
  Net = 10 - 20 - (10×20)/100 = -12% (net loss)
```

---

## Type 14: Selling at Profit/Loss — Break-Even

**Q: A shopkeeper sells 2/3 of his goods at 20% profit. At what loss% must he sell the remainder to have neither profit nor loss overall?**

```
  Let total CP = 300 (choose easy number)

  Part sold at profit: 2/3 of 300 = 200 (CP)
    SP1 = 200 × 120/100 = 240

  Remaining CP: 300 - 200 = 100

  For break-even: Total SP = Total CP = 300
    SP2 = 300 - 240 = 60

  Loss on remainder = 100 - 60 = 40
  Loss% = (40/100) × 100 = 40% ✓

  ┌────────────────────────────────────────────┐
  │  Total CP = 300                            │
  │  |████████████████████|██████████|          │
  │  |◄── 2/3 = 200 ────►|◄─ 1/3 ──►|         │
  │       SP = 240             SP = 60         │
  │      (+20% profit)        (-40% loss)      │
  │                                            │
  │  Total SP = 240 + 60 = 300 = CP            │
  │  Break-even achieved ✓                     │
  └────────────────────────────────────────────┘
```

---

## Type 15: Manufacturer to Wholesaler to Retailer Chain

**Q: A manufacturer sells to a wholesaler at 10% profit. Wholesaler sells to retailer at 20% profit. Retailer sells to customer at 25% profit. If manufacturer's CP is Rs.1000, find the customer's price.**

```
  Manufacturer CP = 1000

  Manufacturer → Wholesaler (10% profit):
    = 1000 × 110/100 = 1100

  Wholesaler → Retailer (20% profit):
    = 1100 × 120/100 = 1320

  Retailer → Customer (25% profit):
    = 1320 × 125/100 = 1650

  1000 ─+10%─► 1100 ─+20%─► 1320 ─+25%─► 1650

  FORMULA:
  Final Price = CP × (100+P1)/100 × (100+P2)/100 × (100+P3)/100
             = 1000 × 1.1 × 1.2 × 1.25
             = 1000 × 1.65
             = Rs.1650 ✓

  Overall profit on manufacturer's CP:
  = 1650 - 1000 = 650
  = (650/1000) × 100 = 65% ✓

  Net multiplier = 1.1 × 1.2 × 1.25 = 1.65
```
