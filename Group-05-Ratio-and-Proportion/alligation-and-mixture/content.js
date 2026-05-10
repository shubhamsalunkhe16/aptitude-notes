module.exports = {
  title: "ALLIGATION AND MIXTURE — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Alligation Rule (Cross Method)", color: "#2f9e44", bg: "#ebfbee",
      text: "Cheaper(C)    Dearer(D)\n     \\         /\n      Mean(M)\n     /         \\\n  (D-M)      (M-C)\n\nRatio = (D-M):(M-C)\nCheaper:Dearer = (D-M):(M-C)" },
    { title: "Mean Price Formula", color: "#1971c2", bg: "#d0ebff",
      text: "Mean = (C×Qc + D×Qd) / (Qc + Qd)\n\nMean price always lies BETWEEN\nthe cheaper and dearer prices\n\nWeighted average of all components" },
    { title: "Remove & Replace Formula", color: "#e8590c", bg: "#fff4e6",
      text: "After n operations of removing x litres\nfrom V litres:\n\nFinal pure = V × (1 - x/V)ⁿ\n\nConcentration after n replacements:\n= (1 - x/V)ⁿ × 100%" },
    { title: "Repeated Dilution", color: "#7048e8", bg: "#e5dbff",
      text: "Quantity left after n operations:\n= V × ((V-x)/V)ⁿ\n\nRatio of pure to impure:\n= ((V-x)/V)ⁿ : (1 - ((V-x)/V)ⁿ)\n\nEach replacement reduces by same fraction" }
  ],

  types: [
    { num: "1", title: "Alligation Rule (Basic)", color: "#2f9e44", bg: "#ebfbee",
      q: "In what ratio must rice at Rs 30/kg be mixed with rice at Rs 40/kg to get a mixture worth Rs 34/kg?",
      tree: "LOGIC:\nStep 1: C=30, D=40, M=34\nStep 2: Let ratio be x:y\n  (30x+40y)/(x+y) = 34\n  30x+40y = 34x+34y → 6y=4x\n  x:y = 6:4 = 3:2\n\nTRICK:\nAlligation cross:\n  30       40\n    \\     /\n      34\n    /     \\\n  (40-34):(34-30) = 6:4 = 3:2\n\nAnswer: Ratio = 3:2 ✓" },

    { num: "2", title: "Mean Price", color: "#1971c2", bg: "#d0ebff",
      q: "5 kg of wheat at Rs 20/kg is mixed with 3 kg of wheat at Rs 30/kg. Find the price per kg of the mixture.",
      tree: "LOGIC:\nStep 1: Total cost = 20x5 + 30x3\n        = 100 + 90 = 190\nStep 2: Total qty = 5+3 = 8 kg\nStep 3: Mean = 190/8 = Rs 23.75/kg\n\nTRICK:\nWeighted avg = (CxQc + DxQd)/(Qc+Qd)\n= (100+90)/8 = 23.75\nAlways between C and D,\ncloser to larger qty price ✓\n\nAnswer: Rs 23.75/kg ✓" },

    { num: "3", title: "Finding Ratio from Mean", color: "#e8590c", bg: "#fff4e6",
      q: "Two varieties of tea costing Rs 126/kg and Rs 135/kg are mixed. The mixture costs Rs 130/kg. Find the ratio of mixing.",
      tree: "LOGIC:\nStep 1: Let ratio be x:y\n  (126x+135y)/(x+y) = 130\n  126x+135y = 130x+130y\n  5y = 4x → x:y = 5:4\n\nTRICK:\nAlligation: (D-M):(M-C)\n= (135-130):(130-126) = 5:4\nVerify: (126x5+135x4)/9 = 130 ✓\n\nAnswer: Ratio = 5:4 ✓" },

    { num: "4", title: "Solution Mixing", color: "#7048e8", bg: "#e5dbff",
      q: "How many litres of a 30% acid solution must be added to 40 litres of a 10% acid solution to get a 20% acid solution?",
      tree: "LOGIC:\nStep 1: C=10%, D=30%, M=20%\nStep 2: Acid balance: 40x0.1+xx0.3\n  = (40+x)x0.2\n  4+0.3x = 8+0.2x → 0.1x=4 → x=40\n\nTRICK:\nAlligation: (D-M):(M-C)\n= (30-20):(20-10) = 10:10 = 1:1\n40L of 10% → need 40L of 30%\n\nAnswer: 40 litres ✓" },

    { num: "5", title: "Remove and Replace", color: "#e03131", bg: "#ffe3e3",
      q: "A container has 80 litres of milk. 8 litres is taken out and replaced with water. This is done twice. Find the milk remaining.",
      tree: "LOGIC:\nStep 1: Start: 80L milk\nStep 2: Op 1: remove 8L, add water\n  Milk = 80-8 = 72L\nStep 3: Op 2: remove 8L (has 72/80 milk)\n  Milk = 72 - 8x(72/80) = 64.8L\n\nTRICK:\nFormula: V x (1-x/V)^n\n= 80 x (1-8/80)^2 = 80 x (9/10)^2\n= 80 x 81/100 = 64.8L\n\nAnswer: 64.8 litres of milk ✓" },

    { num: "6", title: "Repeated Dilution (n times)", color: "#0c8599", bg: "#c3fae8",
      q: "A vessel contains 60 litres of milk. 12 litres is drawn out and replaced by water 3 times. How much milk remains?",
      tree: "LOGIC:\nStep 1: Op 1: 60x4/5 = 48L\nStep 2: Op 2: 48x4/5 = 38.4L\nStep 3: Op 3: 38.4x4/5 = 30.72L\n\nTRICK:\nFormula: V x (1-x/V)^n\n= 60 x (1-12/60)^3\n= 60 x (4/5)^3 = 60 x 64/125\n= 30.72L (51.2% left)\n\nAnswer: 30.72 litres ✓" },

    { num: "7", title: "Milk and Water", color: "#862e9c", bg: "#f3d9fa",
      q: "A mixture of 40 litres has milk and water in ratio 3:1. How much water must be added to make the ratio 3:2?",
      tree: "LOGIC:\nStep 1: Milk=40x3/4=30, Water=40x1/4=10\nStep 2: Add x L water: 30/(10+x)=3/2\n  60 = 30+3x → x = 10\n\n  Before: M=30, W=10 (3:1)\n  After:  M=30, W=20 (3:2) ✓\n\nTRICK:\nMilk stays 30. For 3:2 ratio:\nWater needed = 30x2/3 = 20\nAdd = 20-10 = 10 litres\n\nAnswer: 10 litres of water ✓" },

    { num: "8", title: "Profit by Mixing", color: "#f08c00", bg: "#fff3bf",
      q: "A shopkeeper mixes 2 varieties of tea, one at Rs 60/kg and another at Rs 90/kg in ratio 2:1, and sells at Rs 80/kg. Find profit percent.",
      tree: "LOGIC:\nStep 1: CP = (60x2+90x1)/3 = 210/3\n        = Rs 70/kg\nStep 2: SP = Rs 80, Profit = 10\nStep 3: P% = (10/70)x100 = 14.29%\n\nTRICK:\nWeighted avg for CP, then P%\nCP = (120+90)/3 = 70\nP% = (SP-CP)/CP x 100\n= 10/70 x 100 = 14.29%\n\nAnswer: Profit = 14.29% ✓" },

    { num: "9", title: "Three Items Mixing", color: "#2f9e44", bg: "#ebfbee",
      q: "Three types of rice at Rs 20, Rs 25, and Rs 30 per kg are mixed in ratio 2:3:5. Find the cost of the mixture per kg.",
      tree: "LOGIC:\nStep 1: Total cost:\n  20x2+25x3+30x5 = 40+75+150 = 265\nStep 2: Total qty = 2+3+5 = 10 kg\nStep 3: Mean = 265/10 = Rs 26.50/kg\n\nTRICK:\nWeighted avg formula:\n= (CxQ sum) / (Q sum)\n= 265/10 = 26.50\nCloser to 30 (largest qty) ✓\n\nAnswer: Rs 26.50/kg ✓" },

    { num: "10", title: "Container Problem", color: "#1971c2", bg: "#d0ebff",
      q: "Two containers have milk-water ratios 3:2 and 5:3. In what ratio should they be mixed to get a 7:4 ratio?",
      tree: "LOGIC:\nStep 1: Milk fractions:\n  C1=3/5, C2=5/8, Target=7/11\nStep 2: Let ratio = x:y\n  (3x/5+5y/8)/(x+y) = 7/11\n  Cross multiply and solve:\n  x:y = 16:5\n\nTRICK:\nAlligation on milk fractions:\n(D-M):(M-C)\n= (5/8-7/11):(7/11-3/5)\n= (55-56)/88 : (35-33)/55\n= 2/55 : 1/88 = 176:55 = 16:5\n\nAnswer: Ratio = 16:5 ✓" },

    { num: "11", title: "Cross Method (Detailed)", color: "#e8590c", bg: "#fff4e6",
      q: "Milk at Rs 15/litre is mixed with water (free) to get a mixture worth Rs 10/litre. Find the ratio of milk to water.",
      tree: "LOGIC:\nStep 1: Milk=15/L, Water=0/L, Mix=10/L\nStep 2: Let milk=x, water=y\n  15x/(x+y) = 10 → 15x=10x+10y\n  5x = 10y → x:y = 2:1\n\nTRICK:\nAlligation: water=0(cheaper), milk=15\n(D-M):(M-C) = (15-10):(10-0)\n= 5:10 = 1:2 (Water:Milk)\nMilk:Water = 2:1\n\nAnswer: Milk:Water = 2:1 ✓" },

    { num: "12", title: "Alloys Mixing", color: "#7048e8", bg: "#e5dbff",
      q: "Alloy A has copper and zinc in ratio 5:3. Alloy B has them in ratio 1:2. If 8 kg of A and 12 kg of B are melted, find copper percentage in new alloy.",
      tree: "LOGIC:\nStep 1: Cu in A = 8x5/8 = 5 kg\n        Cu in B = 12x1/3 = 4 kg\nStep 2: Total Cu = 9, Total = 20 kg\nStep 3: Cu% = (9/20)x100 = 45%\n\nTRICK:\nCu fractions: A=5/8, B=1/3\nWeighted: (5/8x8 + 1/3x12)/20\n= (5+4)/20 = 9/20 = 45%\n\nAnswer: Copper = 45% ✓" }
  ]
};
