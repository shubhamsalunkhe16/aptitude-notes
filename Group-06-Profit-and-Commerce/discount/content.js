module.exports = {
  title: "DISCOUNT — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Basic Discount Formulas", color: "#1971c2", bg: "#d0ebff",
      text: "Discount = Marked Price - Selling Price\nDiscount% = (Discount / MP) × 100\n\nSP = MP × (100 - D%) / 100\nMP = SP × 100 / (100 - D%)\n\nDiscount% is ALWAYS on Marked Price\nProfit% is ALWAYS on Cost Price\n\nRelation: CP → markup → MP → discount → SP" },
    { title: "Successive Discount Formulas", color: "#2f9e44", bg: "#ebfbee",
      text: "Two successive discounts d1% and d2%:\n  SP = MP × (100-d1)/100 × (100-d2)/100\n\nSingle equivalent discount:\n  = d1 + d2 - (d1 × d2)/100\n\nThree successive discounts d1, d2, d3:\n  SP = MP × (100-d1)/100 × (100-d2)/100 × (100-d3)/100\n\nOrder does NOT matter:\n  20% then 10% = 10% then 20% = 28%" },
    { title: "Markup & Profit After Discount", color: "#e8590c", bg: "#fff4e6",
      text: "To earn P% profit after D% discount:\n  MP = CP × (100 + P%) / (100 - D%)\n\nMarkup m%, Discount d%:\n  Net Profit% = [(100+m)(100-d)/100] - 100\n\nBuy X Get Y Free:\n  Effective Discount% = Y/(X+Y) × 100\n\nFalse weight w instead of W:\n  Gain% = (W-w)/w × 100" },
    { title: "True Discount & Banker's Discount", color: "#7048e8", bg: "#e5dbff",
      text: "True Discount (TD):\n  TD = (Amount × Rate × Time) / (100 + RT)\n  Present Worth = Amount - TD\n  PW = Amount × 100 / (100 + RT)\n\nBanker's Discount (BD):\n  BD = Simple Interest on Amount\n  BD = (Amount × Rate × Time) / 100\n\nRelation:\n  BD - TD = SI on TD\n  BD = TD × (100 + RT) / 100\n  TD² = PW × BD" }
  ],

  types: [
    { num: "1", title: "Find Discount Amount and SP from MP and D%", color: "#2f9e44", bg: "#ebfbee",
      q: "A shirt has a marked price of Rs.800. A discount of 15% is offered. Find the discount amount and selling price.",
      tree: "LOGIC:\nStep 1: Disc = 15% of 800 = Rs.120\nStep 2: SP = 800-120 = Rs.680\n\n  MP=800 ---15% off---> SP=680\n\nTRICK:\nSP = MP x (100-D%)/100\n= 800 x 85/100 = Rs.680\n(100-D%) gives SP as % of MP\n\nAnswer: Discount=Rs.120, SP=Rs.680 ✓" },

    { num: "2", title: "Find Discount% Given MP and SP", color: "#1971c2", bg: "#d0ebff",
      q: "A bag marked at Rs.1500 is sold for Rs.1200. Find the discount percentage.",
      tree: "LOGIC:\nStep 1: Discount = 1500-1200 = Rs.300\nStep 2: D% = (300/1500) x 100 = 20%\n\nTRICK:\nSP/MP = 1200/1500 = 4/5 = 80%\nDiscount = 100%-80% = 20%\nTRAP: D% is on MP, NOT on SP!\n\nAnswer: Discount = 20% ✓" },

    { num: "3", title: "Find Marked Price Given SP and D%", color: "#e8590c", bg: "#fff4e6",
      q: "After a 25% discount, an article is sold for Rs.600. Find the marked price.",
      tree: "LOGIC:\nStep 1: 600 = MP x 75/100\nStep 2: MP = 600 x 100/75 = Rs.800\nStep 3: Check: 25% of 800=200, SP=600 ✓\n\nTRICK:\nMP = SP x 100/(100-D%)\n= 600 x 100/75 = Rs.800\n75% of MP = SP → MP = SP/0.75\n\nAnswer: Marked Price = Rs.800 ✓" },

    { num: "4", title: "Successive Discounts (Two Discounts One After Another)", color: "#7048e8", bg: "#e5dbff",
      q: "A shopkeeper gives successive discounts of 20% and 10% on an article marked Rs.500. Find the final selling price.",
      tree: "LOGIC:\nStep 1: After 20%: 500x80/100 = 400\nStep 2: After 10%: 400x90/100 = 360\n\n  500 --20%--> 400 --10%--> 360\n\nTRICK:\nSP = MP x (80/100) x (90/100)\n= 500 x 0.72 = 360\nTotal disc = 500-360 = 140 (28%)\nTRAP: 20%+10% is NOT 30%!\n\nAnswer: SP = Rs.360 ✓" },

    { num: "5", title: "Single Equivalent Discount for Successive Discounts", color: "#e03131", bg: "#ffe3e3",
      q: "Find the single equivalent discount for two successive discounts of 25% and 20%.",
      tree: "LOGIC:\nStep 1: 100 --25%--> 75 --20%--> 60\nStep 2: Disc = 100-60 = 40 → 40%\n\nTRICK:\nd1+d2-(d1xd2)/100\n= 25+20-(25x20)/100 = 45-5 = 40%\n  10%+10%=19%  20%+10%=28%\n  25%+20%=40%  50%+50%=75%\nTRAP: sum always > actual!\n\nAnswer: Equivalent discount = 40% ✓" },

    { num: "6", title: "Marked Price to Get Desired Profit After Discount", color: "#0c8599", bg: "#c3fae8",
      q: "A trader wants 20% profit after giving 10% discount. If CP is Rs.500, what should be the marked price?",
      tree: "LOGIC:\nStep 1: SP needed = 500x120/100 = 600\nStep 2: 90% of MP = 600\n        MP = 600/0.9 = Rs.666.67\n\nTRICK:\nMP = CP x (100+P%)/(100-D%)\n= 500 x 120/90 = Rs.666.67\nMarkup = (666.67-500)/500 = 33.33%\n\nAnswer: MP = Rs.666.67 ✓" },

    { num: "7", title: "Buy X Get Y Free (Effective Discount%)", color: "#862e9c", bg: "#f3d9fa",
      q: "A shop offers 'Buy 2 Get 1 Free'. What is the effective discount percentage?",
      tree: "LOGIC:\nStep 1: Pays for 2, gets 3 items\nStep 2: Savings = 1 out of 3\nStep 3: D% = (1/3) x 100 = 33.33%\n\n  Pays: |===|===|   | 2 items\n  Gets: |===|===|===| 3 items\n\nTRICK:\nD% = Free/(Buy+Free) x 100\nB1G1=50%, B2G1=33%, B3G1=25%\nTRAP: denom = TOTAL items!\n\nAnswer: Effective discount = 33.33% ✓" },

    { num: "8", title: "Comparing Two Discount Offers", color: "#f08c00", bg: "#fff3bf",
      q: "Shop A offers 30% discount. Shop B offers successive discounts of 20% and 15%. Which is better for the buyer on same MP?",
      tree: "LOGIC:\nStep 1: Let MP=100\n  A: 30% flat → SP=70\n  B: 100→80→68 (SP=68)\nStep 2: B cheaper by Rs.2 per 100\n\nTRICK:\nB equiv = 20+15-(20x15)/100 = 32%\nA=30% vs B=32% → B is better!\n  A: pay 70, B: pay 68\nBuyer saves more at Shop B\n\nAnswer: Shop B is better (32% vs 30%) ✓" },

    { num: "9", title: "Discount on Discount vs Flat Discount Comparison", color: "#2f9e44", bg: "#ebfbee",
      q: "Which is better: a flat 40% discount OR two successive discounts of 25% and 20%? Compare for MP = Rs.1000.",
      tree: "LOGIC:\nStep 1: Flat 40%: SP = 1000x0.6 = 600\nStep 2: 25%+20%: 1000→750→600\n  Both give SP = Rs.600\n\nTRICK:\nEquiv = 25+20-(25x20)/100 = 40%\nSame as flat! Both equal here.\nRule: d1+d2 > flat always UNLESS\nd1+d2-(d1d2/100) = flat exactly\n\nAnswer: Both are equal at 40% ✓" },

    { num: "10", title: "True Discount vs Banker's Discount", color: "#1971c2", bg: "#d0ebff",
      q: "Find the true discount and banker's discount on Rs.1060 due in 1 year at 6% per annum.",
      tree: "LOGIC:\nStep 1: TD = (AxRxT)/(100+RT)\n  = (1060x6x1)/106 = Rs.60\nStep 2: BD = (AxRxT)/100\n  = 6360/100 = Rs.63.60\nStep 3: PW = 1060-60 = Rs.1000\n\nTRICK:\nPW = Amount x 100/(100+RT)\n= 1060x100/106 = 1000\nTD = Amount - PW = 60\nBD = SI on Amount, BD > TD always!\n\nAnswer: TD = Rs.60, BD = Rs.63.60 ✓" }
  ]
};
