module.exports = {
  title: "CHAIN RULE — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Direct Proportion", color: "#2f9e44", bg: "#ebfbee",
      text: "If A increases → B increases (same direction)\nA₁/A₂ = B₁/B₂\n\nMore goods → More cost\nMore men → More work done\nMore speed → More distance\n\nWHY: The ratio stays constant. If 1 pen\ncosts Rs.10, 2 pens cost Rs.20 — the\ncost/pen ratio never changes.\n\nEx: 5 pens=Rs.60 → 8 pens=?\n  5/8 = 60/x → x = 60×8/5 = Rs.96" },
    { title: "Inverse Proportion", color: "#1971c2", bg: "#d0ebff",
      text: "If A increases → B decreases (opposite)\nA₁/A₂ = B₂/B₁  (flip right side)\n\nMore men → Less days\nMore speed → Less time\nMore pipes → Less time to fill\n\nWHY: The product stays constant. Total\nwork = men × days. If men↑, days↓ to\nkeep product the same.\n\nEx: 12 men×10 days = 120 man-days\n  15 men × ? = 120 → ? = 8 days" },
    { title: "Chain Rule (Mixed)", color: "#e8590c", bg: "#fff4e6",
      text: "Step 1: Identify each variable\nStep 2: Mark Direct (D) or Inverse (I)\nStep 3: Set up proportion chain\n  Direct → same order ratio\n  Inverse → flipped ratio\nStep 4: Multiply all ratios = answer ratio\n\nWHY: Each variable contributes its own\nratio. Multiply them all to combine.\n\nEx: 8 men, 6 hrs → 6 men, 8 hrs\n  ? = 12 × (8/6) × (6/8) = 12 days" },
    { title: "Man-Days-Hours Formula", color: "#7048e8", bg: "#e5dbff",
      text: "M₁ × D₁ × H₁ = M₂ × D₂ × H₂\n(when work is same)\n\nM₁×D₁×H₁/W₁ = M₂×D₂×H₂/W₂\n(when work differs)\n\nTotal work = Men × Days × Hours\n\nWHY: Work is the product of all effort\nvariables. Equal work means equal products.\n\nEx: 10 men × 8 hrs × 5 days = 400\n  ? men × 10 hrs × 4 days = 400\n  ? = 400/40 = 10 men" }
  ],

  types: [
    { num: "1", title: "Direct Chain", color: "#2f9e44", bg: "#ebfbee",
      q: "If 15 books cost Rs 750, what is the cost of 25 books?",
      tree: "LOGIC:\nStep 1: More books → More cost (Direct)\nStep 2: 15/25 = 750/x\nStep 3: x = 750 x 25/15 = 1250\n\n  15 books ──→ Rs.750\n  25 books ──→ Rs.???\n  More books → More cost (DIR)\n  ? = 750 × 25/15 = 1250\n\nTRICK:\nUnit price = 750/15 = Rs 50/book\n25 books = 25 x 50 = Rs 1250\n\nAnswer: Cost = Rs 1250 ✓" },

    { num: "2", title: "Inverse Chain", color: "#1971c2", bg: "#d0ebff",
      q: "If 12 men can finish a job in 20 days, how many days will 15 men take?",
      tree: "LOGIC:\nStep 1: More men → Less days (Inverse)\nStep 2: Total work = 12 x 20 = 240\nStep 3: Days = 240/15 = 16\n\n  12 men × 20 days = 240 man-days\n  15 men × ?  days = 240 man-days\n  ? = 240/15 = 16\n\nTRICK:\nInverse: flip and multiply\n? = 20 x (12/15) = 16 days\nA1xB1 = A2xB2 (constant product)\n\nAnswer: 16 days ✓" },

    { num: "3", title: "Mixed (Direct + Inverse)", color: "#e8590c", bg: "#fff4e6",
      q: "If 8 men working 6 hours a day can finish a task in 12 days, how many days will 6 men working 8 hours a day take?",
      tree: "LOGIC:\nStep 1: Men:8→6(INV), Hrs:6→8(INV)\nStep 2: M1xD1xH1 = M2xD2xH2\n  8x12x6 = 6xD2x8\n  576 = 48xD2 → D2 = 12\n\n  Variable   Change     Type\n  Men        8→6        INV → 8/6\n  Hours      6→8        INV → 6/8\n  ? = 12 × (8/6) × (6/8) = 12\n\nTRICK:\n? = 12 x (8/6) x (6/8) = 12\nINV ratios cancel out here!\nSame total man-hours = same days\n\nAnswer: 12 days ✓" },

    { num: "4", title: "Men-Days-Hours", color: "#7048e8", bg: "#e5dbff",
      q: "If 20 men can build a wall 56 m long in 6 days, how many men are needed to build a 72 m wall in 8 days?",
      tree: "LOGIC:\nStep 1: Wall:56→72(DIR), Days:6→8(INV)\nStep 2: M1xD1/W1 = M2xD2/W2\n  20x6/56 = M2x8/72\n  M2 = 20x6x72/(56x8) = 19.3\n\n  Variable   Change     Type\n  Wall       56→72      DIR → 72/56\n  Days       6→8        INV →  6/8\n  ? = 20 × (72/56) × (6/8) = 19.3\n\nTRICK:\n? = 20 x (72/56) x (6/8)\n= 20 x 9/7 x 3/4 = 19.3 → 20 men\nDIR: same order, INV: flip ratio\n\nAnswer: 20 men (rounded up) ✓" },

    { num: "5", title: "Cost-Weight Chain", color: "#e03131", bg: "#ffe3e3",
      q: "If 36 kg of rice costs Rs 1080, what will 54 kg of rice cost?",
      tree: "LOGIC:\nStep 1: More rice → More cost (Direct)\nStep 2: 36/54 = 1080/x\nStep 3: x = 1080 x 54/36 = 1620\n\n  36 kg ──→ Rs.1080\n  54 kg ──→ Rs.????\n  ? = 1080 × 54/36 = 1620\n\nTRICK:\nRate = 1080/36 = Rs 30/kg\nCost = 30 x 54 = Rs 1620\nSimplify: 54/36 = 3/2 → 1080x3/2\n\nAnswer: Rs 1620 ✓" },

    { num: "6", title: "Machines Chain", color: "#0c8599", bg: "#c3fae8",
      q: "5 machines produce 500 units in 10 hours. How many machines are needed to produce 800 units in 8 hours?",
      tree: "LOGIC:\nStep 1: Units:500→800(DIR)\n        Hours:10→8(INV)\nStep 2: Total capacity = 5x500/10 = 250/hr\n  Need 800/8=100/hr per machine\n  Machines = 800/(8x250/5x10)... = 10\n\n  Variable   Change      Type\n  Units      500→800     DIR → 800/500\n  Hours      10→8        INV →  10/8\n  ? = 5 × (800/500) × (10/8) = 10\n\nTRICK:\n? = 5 x (800/500) x (10/8)\n= 5 x 8/5 x 5/4 = 10 machines\nDIR: same order, INV: flip\n\nAnswer: 10 machines ✓" },

    { num: "7", title: "Rations Chain", color: "#862e9c", bg: "#f3d9fa",
      q: "A garrison of 500 men has provisions for 27 days. After 3 days, 200 men leave. How many more days will the food last?",
      tree: "LOGIC:\nStep 1: After 3 days: food for 24 days\n        Men left = 500-200 = 300\nStep 2: Food units = 500x24 = 12000\nStep 3: Days = 12000/300 = 40\n\n  Day 0──3──────────27\n  500 men eat for 3 days → 24 days left\n  200 leave → 300 men\n  300 × ? = 500 × 24 → ? = 40 days\n\nTRICK:\nInverse: ? = 24 x 500/300\n= 24 x 5/3 = 40 days\nMore men leave → food lasts longer\n\nAnswer: 40 more days ✓" },

    { num: "8", title: "Wages Chain", color: "#f08c00", bg: "#fff3bf",
      q: "If 18 workers earn Rs 5400 in 6 days, how much will 12 workers earn in 9 days?",
      tree: "LOGIC:\nStep 1: Workers:18→12(DIR for wages)\n        Days:6→9(DIR for wages)\nStep 2: Man-days: 18x6=108, 12x9=108\n  Same man-days → same wages!\n\n  Variable   Change     Type\n  Workers    18→12      DIR → 12/18\n  Days       6→9        DIR →  9/6\n  ? = 5400 × (12/18) × (9/6) = 5400\n\nTRICK:\n? = 5400 x (12/18) x (9/6)\n= 5400 x 2/3 x 3/2 = 5400\nRatios cancel → equal wages\n\nAnswer: Rs 5400 ✓" },

    { num: "9", title: "3-Variable Chain", color: "#2f9e44", bg: "#ebfbee",
      q: "If 10 men working 8 hours/day can make 20 shirts in 4 days, how many shirts can 15 men working 10 hours/day make in 6 days?",
      tree: "LOGIC:\nStep 1: All DIR (more→more shirts)\nStep 2: Man-hrs-days:\n  Old=10x8x4=320, New=15x10x6=900\nStep 3: Shirts=20x900/320=56.25→56\n\n  Variable   Change     Type\n  Men        10→15      DIR → 15/10\n  Hours      8→10       DIR → 10/8\n  Days       4→6        DIR →  6/4\n  ? = 20 × 3/2 × 5/4 × 3/2 = 56\n\nTRICK:\n? = 20 x (15/10) x (10/8) x (6/4)\n= 20 x 3/2 x 5/4 x 3/2\n= 20 x 45/16 = 56 shirts\n\nAnswer: 56 shirts ✓" },

    { num: "10", title: "Speed-Time Chain", color: "#1971c2", bg: "#d0ebff",
      q: "A train running at 60 km/h crosses a pole in 12 seconds. How long will it take at 40 km/h?",
      tree: "LOGIC:\nStep 1: More speed → Less time (INV)\nStep 2: Distance = 60x5/18x12 = 200m\nStep 3: Time = 200/(40x5/18) = 18 sec\n\n  60 km/h × 12 sec = distance\n  40 km/h × ?  sec = same distance\n  ? = 12 × (60/40) = 18 sec\n\nTRICK:\nInverse: ? = 12 x (60/40)\n= 12 x 3/2 = 18 seconds\nSame distance → speed x time = const\n\nAnswer: 18 seconds ✓" }
  ]
};
