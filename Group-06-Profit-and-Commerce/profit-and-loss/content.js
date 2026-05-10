module.exports = {
  title: "PROFIT AND LOSS — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Basic Profit & Loss Formulas", color: "#1971c2", bg: "#d0ebff",
      text: "Profit = SP - CP  (when SP > CP)\nLoss = CP - SP  (when CP > SP)\n\nProfit% = (Profit / CP) × 100\nLoss% = (Loss / CP) × 100\n\nSP = CP × (100 + P%) / 100\nSP = CP × (100 - L%) / 100\n\nCP = SP × 100 / (100 + P%)\nCP = SP × 100 / (100 - L%)" },
    { title: "Discount & Marked Price Formulas", color: "#2f9e44", bg: "#ebfbee",
      text: "Discount = MP - SP\nDiscount% = (Discount / MP) × 100\n\nSP = MP × (100 - D%) / 100\n\nMarkup m%, Discount d%:\n  SP = CP × (100+m)/100 × (100-d)/100\n  Net P% = [(100+m)(100-d)/100] - 100\n\nSuccessive discounts d1%, d2%:\n  Single = d1 + d2 - (d1×d2)/100 %" },
    { title: "Special Formulas", color: "#e8590c", bg: "#fff4e6",
      text: "Dishonest dealer (wrong weight):\n  Gain% = (True-False)/False × 100\n\nCP of X = SP of Y:\n  P% = (X-Y)/Y × 100  (X>Y → profit)\n\nBuy X Get Y Free:\n  Discount% = Y/(X+Y) × 100\n\nTwo items same SP, same P%=L%:\n  Always LOSS = P²/100 %" },
    { title: "Ratio & Chain Formulas", color: "#7048e8", bg: "#e5dbff",
      text: "CP:SP = a:b\n  Profit% = (b-a)/a × 100  (b>a)\n  Loss% = (a-b)/a × 100  (a>b)\n\nSuccessive P% then L%:\n  Net = P - L - (P×L)/100\n\nChain: Manuf → Whole → Retail\n  Final = CP × (100+P1)/100 × (100+P2)/100 × ...\n\nBreak-even: Total SP = Total CP" }
  ],

  types: [
    { num: "1", title: "Basic — Find CP, SP, Profit, Loss", color: "#2f9e44", bg: "#ebfbee",
      q: "Article bought for Rs.500, sold for Rs.620. Find profit and profit%.",
      tree: "LOGIC:\nStep 1: Profit = SP-CP = 620-500 = 120\nStep 2: P% = (120/500) x 100 = 24%\n\n  CP=500 ---+120---> SP=620\n\nTRICK:\nSP/CP = 620/500 = 1.24 → 24% profit\nOr: 120/500 = 24/100 instantly\n\nAnswer: Profit = 24% ✓" },

    { num: "2", title: "Find Profit% or Loss%", color: "#1971c2", bg: "#d0ebff",
      q: "Watch bought for Rs.800, sold for Rs.680. Find loss%.",
      tree: "LOGIC:\nStep 1: Loss = CP-SP = 800-680 = 120\nStep 2: L% = (120/800) x 100 = 15%\n\n  CP |████████████████████| 100%\n  SP |█████████████████   |  85%\n\nTRICK:\n120/800 = 3/20 = 15%\nOr: SP/CP = 680/800 = 0.85 → 15% loss\n\nAnswer: Loss = 15% ✓" },

    { num: "3", title: "Find SP Given CP and Profit%", color: "#e8590c", bg: "#fff4e6",
      q: "Article costs Rs.1500, sold at 20% profit. Find SP.",
      tree: "LOGIC:\nStep 1: SP = CP x (100+P%)/100\nStep 2: = 1500 x 120/100 = Rs.1800\n\n  1500 ----+20%----> 1800\n\nTRICK:\n20% of 1500 = 300\nSP = 1500+300 = 1800\nFor LOSS: SP = CP x (100-L%)/100\n\nAnswer: SP = Rs.1800 ✓" },

    { num: "4", title: "Find CP Given SP and Profit%", color: "#7048e8", bg: "#e5dbff",
      q: "Article sold for Rs.540 at 8% profit. Find CP.",
      tree: "LOGIC:\nStep 1: CP = SP x 100/(100+P%)\nStep 2: = 540 x 100/108 = Rs.500\n\n  CP=500 --+8%--> SP=540\n\nTRICK:\n108% of CP = 540\nCP = 540/1.08 = Rs.500\nFor LOSS: CP = SP x 100/(100-L%)\n\nAnswer: CP = Rs.500 ✓" },

    { num: "5", title: "Two Items Same SP, One P% One L%", color: "#862e9c", bg: "#f3d9fa",
      q: "Two watches sold at Rs.1200 each. One at 20% profit, one at 20% loss. Overall?",
      tree: "LOGIC:\nStep 1: CP1=1200x100/120=1000 (profit)\n  CP2=1200x100/80=1500 (loss)\nStep 2: Total CP=2500, SP=2400\n  Loss = 100/2500 x 100 = 4%\n\nTRICK:\nSame P%=L% → Always LOSS!\nLoss% = P^2/100 = 20^2/100 = 4%\nNEVER a profit in this case!\n\nAnswer: 4% loss ✓" },

    { num: "6", title: "Dishonest Dealer (Wrong Weight)", color: "#f08c00", bg: "#fff3bf",
      q: "A dishonest dealer sells goods at cost price but uses a 900g weight instead of 1 kg. Find his gain percentage.",
      tree: "LOGIC:\nStep 1: Charges for 1000g, gives 900g\nStep 2: Extra = 1000-900 = 100g\nStep 3: Gain% = (100/900) x 100 = 11.11%\n\nTRICK:\nFormula: (True-False)/False x 100\n= (1000-900)/900 x 100 = 11.11%\nBase is always FALSE weight!\n\nAnswer: Gain = 11.11% ✓" },

    { num: "7", title: "CP of X Articles = SP of Y Articles", color: "#2f9e44", bg: "#ebfbee",
      q: "CP of 20 articles = SP of 16 articles. Find profit%.",
      tree: "LOGIC:\nStep 1: Let CP per item = 1\n  CP of 20 = 20, SP of 16 = 20\nStep 2: SP per item = 20/16 = 1.25\nStep 3: P% = 0.25/1 x 100 = 25%\n\nTRICK:\nP% = (X-Y)/Y x 100\n= (20-16)/16 x 100 = 25%\nX>Y=Profit, X<Y=Loss\n\nAnswer: Profit = 25% ✓" },

    { num: "8", title: "Buy X Get Y Free", color: "#1971c2", bg: "#d0ebff",
      q: "Buy 3 Get 1 Free offer. What is effective discount%?",
      tree: "LOGIC:\nStep 1: Pays for 3, Gets 4 items\nStep 2: Saves 1 out of 4 items\nStep 3: D% = (1/4) x 100 = 25%\n\n  Pays: |===|===|===|   | 3\n  Gets: |===|===|===|===| 4\n\nTRICK:\nD% = Free/(Buy+Free) x 100\n= 1/4 x 100 = 25%\nTRAP: NOT 1/3=33%!\n\nAnswer: Effective discount = 25% ✓" },

    { num: "9", title: "Profit% When CP:SP in Ratio", color: "#e8590c", bg: "#fff4e6",
      q: "The cost price to selling price ratio of an article is 5:7. Find the profit percentage.",
      tree: "LOGIC:\nStep 1: CP=5x, SP=7x, Profit=2x\nStep 2: P% = (2x/5x) x 100 = 40%\n\n  CP |=====|       = 5 parts\n  SP |=======|     = 7 parts\n\nTRICK:\nP% = (b-a)/a x 100 = (7-5)/5 x 100\n= 2/5 x 100 = 40%\nIf a>b → Loss% = (a-b)/a x 100\n\nAnswer: Profit = 40% ✓" },

    { num: "10", title: "Successive Profit/Loss %", color: "#7048e8", bg: "#e5dbff",
      q: "A sells to B at 20% profit. B sells to C at 10% loss. A's CP=1000. Find C's price.",
      tree: "LOGIC:\nStep 1: A→B: 1000x120/100 = 1200\nStep 2: B→C: 1200x90/100 = 1080\n\n  1000 --+20%--> 1200 --10%--> 1080\n\nTRICK:\nNet% = P-L-(PxL)/100\n= 20-10-200/100 = +8%\nC = 1000 x 108/100 = Rs.1080\n\nAnswer: C's price = Rs.1080 ✓" },

    { num: "11", title: "Break-Even (Partial P, Partial L)", color: "#e03131", bg: "#ffe3e3",
      q: "A merchant sells 2/3 of his goods at 20% profit. At what percentage loss must he sell the remaining goods to break even overall?",
      tree: "LOGIC:\nStep 1: Let CP=300. Part1 CP=200\n  SP1 = 200x1.2 = 240\nStep 2: Break-even: SP2=300-240=60\nStep 3: Loss on 100 = 40 → 40%\n\nTRICK:\n2/3 at +20% earns 2/3x20=13.33% on total\nRemaining 1/3 must lose 13.33%\nLoss on 1/3 = 13.33/(1/3) = 40%\n\nAnswer: Sell rest at 40% loss ✓" },

    { num: "12", title: "Manufacturer → Wholesaler → Retailer", color: "#0c8599", bg: "#c3fae8",
      q: "A manufacturer's cost price is Rs.1000. The goods are sold through a chain at 10%, 20%, and 25% profit margins respectively. What does the customer pay?",
      tree: "LOGIC:\nStep 1: 1000→+10%→1100→+20%→1320→+25%→1650\nStep 2: Each stage: SP = CP x (1+P%/100)\n\nTRICK:\nMultiply all multipliers:\n1000 x 1.1 x 1.2 x 1.25 = 1650\n= 1000 x 1.65 = Rs.1650\nOverall P% = 65%\n\nAnswer: Customer price = Rs.1650 ✓" }
  ]
};
