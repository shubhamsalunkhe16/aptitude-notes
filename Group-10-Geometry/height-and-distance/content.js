module.exports = {
  title: "HEIGHT AND DISTANCE — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Trigonometric Ratios", color: "#1971c2", bg: "#d0ebff",
      text: "In a right triangle:\n  sin θ = Opposite / Hypotenuse\n  cos θ = Adjacent / Hypotenuse\n  tan θ = Opposite / Adjacent\n\nHeight & Distance → mostly tan θ\n  tan θ = Height / Distance\n  h = d × tan θ\n  d = h / tan θ" },
    { title: "Standard Trig Values", color: "#2f9e44", bg: "#ebfbee",
      text: "Angle │ sin    │ cos    │ tan\n──────┼────────┼────────┼────────\n 30°  │ 1/2    │ √3/2   │ 1/√3\n 45°  │ 1/√2   │ 1/√2   │ 1\n 60°  │ √3/2   │ 1/2    │ √3\n\n√3 ≈ 1.732   1/√3 ≈ 0.577\n√2 ≈ 1.414   1/√2 ≈ 0.707" },
    { title: "Elevation & Depression", color: "#e8590c", bg: "#fff4e6",
      text: "Angle of ELEVATION → looking UP\n  from horizontal to higher object\n\nAngle of DEPRESSION → looking DOWN\n  from horizontal to lower object\n\nKey: Depression from top\n   = Elevation from bottom\n   (alternate interior angles)" },
    { title: "Two Angles Formula", color: "#7048e8", bg: "#e5dbff",
      text: "Two points, same side, gap = d:\n  h = d×tanα×tanβ / (tanα - tanβ)\n  (α > β, α is closer angle)\n\nTower on hill (angles α, β):\n  tower = d × (tan α - tan β)\n  hill  = d × tan β" },
    { title: "Shadow & Sun", color: "#e03131", bg: "#ffe3e3",
      text: "tan(sun's angle) = Height / Shadow\n  Shadow = Height / tan θ\n  Height = Shadow × tan θ\n\nSun rises → angle ↑ → shadow ↓\nSun sets  → angle ↓ → shadow ↑\n\nAt 45° → shadow = height" },
    { title: "Ladder / Kite / String", color: "#0c8599", bg: "#c3fae8",
      text: "Ladder/String = HYPOTENUSE\n  sin θ = height / L\n  cos θ = distance / L\n  L = h / sin θ = d / cos θ\n\nKite height: h = L × sin θ\nWall height: h = L × sin θ\nFoot from wall: d = L × cos θ" }
  ],

  types: [
    { num: "1", title: "Height from Angle of Elevation (Basic tan)", color: "#2f9e44", bg: "#ebfbee",
      q: "A man standing 40m from a tower observes the top at 60° elevation. Find the height.",
      tree: "LOGIC:\nStep 1: tan60° = h/40\nStep 2: √3 = h/40 → h = 40√3\n  = 40×1.732 = 69.28 m\n\nTRICK:\n60° → multiply base by √3\n30° → divide base by √3\n45° → height = base\n\n         T\n   h=?   |\\ 60°\n         |__\\\n        B 40m O\n\nAnswer: 69.28 m ✓" },

    { num: "2", title: "Distance from Base Using Angle", color: "#1971c2", bg: "#d0ebff",
      q: "Angle of elevation of a 50m tower from a point is 30°. Find the distance from the base.",
      tree: "LOGIC:\nStep 1: tan30° = 50/d\nStep 2: 1/√3 = 50/d → d = 50√3\n  = 86.6 m\n\nTRICK:\n30° → d = h×√3\n60° → d = h/√3\n45° → d = h\n\n         T\n   50m   |\\ 30°\n         |____\\\n        B d=?  O\n\nAnswer: 86.6 m ✓" },

    { num: "3", title: "Two Angles from Two Points (Same Side)", color: "#e8590c", bg: "#fff4e6",
      q: "Angles of elevation of a tower from points P and Q (same side) are 60° and 30°. PQ = 40m. Height?",
      tree: "LOGIC:\nStep 1: d₁=h/√3, d₂=h√3\n  d₂-d₁ = 40\nStep 2: h√3-h/√3 = 40\n  2h/√3 = 40 → h = 20√3\n\nTRICK:\nh = d×tanα×tanβ/(tanα-tanβ)\n= 40×√3×(1/√3)/(√3-1/√3)\n= 40×1/(2/√3) = 20√3 = 34.64\n\nAnswer: 34.64 m ✓" },

    { num: "4", title: "Tower on a Hill", color: "#7048e8", bg: "#e5dbff",
      q: "From ground, angles to bottom and top of tower on a hill are 30° and 60°. Hill = 20m. Tower height?",
      tree: "LOGIC:\nStep 1: tan30°=20/d → d=20√3\nStep 2: tan60°=(20+t)/d\n  √3=(20+t)/20√3\n  60=20+t → t=40\n\nTRICK:\nTotal/Hill = tanα/tanβ\n= tan60°/tan30° = √3/(1/√3) = 3\nTotal = 3×20 = 60, Tower = 60-20 = 40\n\nAnswer: Tower = 40 m ✓" },

    { num: "5", title: "Two Towers — Find Distance", color: "#e03131", bg: "#ffe3e3",
      q: "Towers 20m and 30m tall. From top of shorter, angle of elevation to top of taller is 30°. Distance?",
      tree: "LOGIC:\nStep 1: Height diff = 30-20 = 10m\nStep 2: tan30° = 10/d\n  1/√3 = 10/d → d = 10√3\n\nTRICK:\nDraw horizontal from shorter top\nUse height DIFFERENCE only\nd = diff/tan(angle) = 10√3 = 17.32\n\n  T2(30)─10m─above─T1(20)\n\nAnswer: 17.32 m ✓" },

    { num: "6", title: "Shadow Problems (Sun's Angle)", color: "#f08c00", bg: "#fff3bf",
      q: "Shadow of pole is 12m when sun's elevation is 45°. Find shadow when elevation becomes 60°.",
      tree: "LOGIC:\nStep 1: tan45°=h/12 → h=12m\nStep 2: tan60°=12/s → s=12/√3\n  = 4√3 = 6.93m\n\nTRICK:\nAt 45°: shadow = height (always!)\nSo h=12, then at 60°: s=h/√3\n= 12/√3 = 4√3\nSun rises → shadow shrinks\n\nAnswer: 6.93 m ✓" },

    { num: "7", title: "Angle of Depression", color: "#862e9c", bg: "#f3d9fa",
      q: "From top of a 60m building, angle of depression to a car is 30°. Distance of car from base?",
      tree: "LOGIC:\nStep 1: Depression = Elevation (alt angles)\nStep 2: tan30° = 60/d\n  d = 60√3 = 103.92m\n\nTRICK:\nDepression from top = Elevation from bottom\nJust use tan(angle) = height/distance\nd = 60/tan30° = 60√3\n\nAnswer: 103.92 m ✓" },

    { num: "8", title: "Man on Building — Car Approaching", color: "#0c8599", bg: "#c3fae8",
      q: "From top of 100m building, angle of depression of car changes from 30° to 60°. Distance traveled?",
      tree: "LOGIC:\nStep 1: d1=100√3 (at 30°)\n  d2=100/√3 (at 60°)\nStep 2: dist = d1-d2\n  = 100√3-100/√3 = 200/√3\n\nTRICK:\nDist = h(cotα - cotβ)\n= 100(√3 - 1/√3) = 100×2/√3\n= 200√3/3 = 115.47\n\nAnswer: 115.47 m ✓" },

    { num: "9", title: "Ladder Against Wall", color: "#c92a2a", bg: "#fff5f5",
      q: "A 10m ladder makes 60° with ground. Find height on wall and distance of foot from wall.",
      tree: "LOGIC:\nStep 1: Ladder = hypotenuse = 10m\n  sin60°=h/10 → h=5√3=8.66\nStep 2: cos60°=d/10 → d=5\n\nTRICK:\nLadder problems: use sin & cos\nsin = height/ladder\ncos = foot-dist/ladder\nVerify: (5√3)²+5²=75+25=100=10² ✓\n\nAnswer: h=8.66m, d=5m ✓" },

    { num: "10", title: "Two Angles from Same Side (Find Height)", color: "#e8590c", bg: "#fff4e6",
      q: "Angle of elevation from A is 45°, from B (30m farther, same side) is 30°. Find height of tower.",
      tree: "LOGIC:\nStep 1: tan45°=h/d → d=h\n  tan30°=h/(h+30)\nStep 2: h+30=h√3 → h(√3-1)=30\n  h = 30/(√3-1) = 15(√3+1)\n\nTRICK:\nRationalize: multiply by (√3+1)/(√3+1)\n= 30(√3+1)/2 = 15×2.732 = 40.98\n\nAnswer: 40.98 m ✓" },

    { num: "11", title: "Flying Kite Problem", color: "#2f9e44", bg: "#ebfbee",
      q: "Kite flies at 75m height. String makes 60° with ground. Find string length.",
      tree: "LOGIC:\nStep 1: String = hypotenuse\n  sin60° = 75/L\nStep 2: √3/2 = 75/L → L = 150/√3\n  = 50√3 = 86.6\n\nTRICK:\nString/Ladder = hypotenuse → use sin\nL = height/sin(angle)\n= 75/sin60° = 75×2/√3 = 50√3\n\nAnswer: 86.6 m ✓" },

    { num: "12", title: "Lighthouse and Ship Problem", color: "#1971c2", bg: "#d0ebff",
      q: "From 100m lighthouse, depression angles to two ships on opposite sides are 30° and 45°. Distance between ships?",
      tree: "LOGIC:\nStep 1: d1=100√3 (30° side)\n  d2=100 (45° side)\nStep 2: Opposite sides → ADD\n  = 100√3+100 = 100(√3+1)\n\nTRICK:\nSame side → subtract distances\nOpposite sides → add distances\n= 100(1.732+1) = 273.2\n\nAnswer: 273.2 m ✓" }
  ]
};
