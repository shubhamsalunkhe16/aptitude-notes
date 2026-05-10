module.exports = {
  title: "PIPES AND CISTERNS — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Filling Pipe Rate", color: "#2f9e44", bg: "#ebfbee",
      text: "If pipe fills in n hours:\n  Rate = 1/n (per hour)\n\nTwo pipes A(a hrs) + B(b hrs):\n  Combined = 1/a + 1/b\n  Time = ab/(a+b)\n\nWHY: Each pipe fills a fraction per\n  hour. Combined rate = sum of rates.\n  Time = 1/(sum) = ab/(a+b).\n\nEx: A=6h, B=12h → Time=6×12/18=4h" },
    { title: "Leak / Outlet Pipe", color: "#1971c2", bg: "#d0ebff",
      text: "Inlet fills, Outlet empties\nInlet rate = +1/a\nOutlet rate = -1/b\n\nNet rate = 1/a - 1/b\nTime = ab/(b-a) if b>a (net fills)\nNever fills if outlet >= inlet\n\nWHY: Outlet works against inlet.\n  Net = 1/a - 1/b = (b-a)/ab.\n  Time = 1/net = ab/(b-a).\n\nEx: Inlet=10h, Outlet=15h →\n  Time = 10×15/(15-10) = 30h" },
    { title: "Leak Midway Formula", color: "#e8590c", bg: "#fff4e6",
      text: "Pipe fills in a hrs, leak empties in b hrs\nNet time = ab/(b-a)\n\nLeak starts after t hours:\nFilled by pipe in t hrs = t/a\nRemaining = 1 - t/a\nTime for rest = remaining/(1/a - 1/b)\n\nWHY: Before leak, pipe fills alone.\n  After leak, net rate drops to\n  1/a - 1/b. Remaining/net = time.\n\nEx: Pipe=6h, leak after 2h, leak=12h\n  Filled=2/6=1/3. Left=2/3.\n  Net=1/6-1/12=1/12 → 2/3÷1/12=8h" },
    { title: "Alternate / Interval Pipes", color: "#7048e8", bg: "#e5dbff",
      text: "Pipes work in alternate hours:\nWork in 2-hr cycle = 1/a + 1/b\n\nPipes work in intervals:\nNet work per cycle × number of cycles\nCheck for partial last cycle\n\nWHY: Each cycle contributes a fixed\n  fraction. Divide 1 by cycle-work\n  to find number of full cycles.\n\nEx: A=4h, B=6h, alternate hrs\n  Cycle=1/4+1/6=5/12. Full in\n  12/5=2.4 cycles ≈ 5 hrs" }
  ],

  types: [
    { num: "1", title: "Two Filling Pipes", color: "#2f9e44", bg: "#ebfbee",
      q: "Pipe A fills a tank in 12 hours and Pipe B fills it in 18 hours. If both are opened together, how long will it take to fill the tank?",
      tree: "LOGIC:\nStep 1: A=1/12 per hr, B=1/18 per hr\nStep 2: Combined = 1/12+1/18\n  = 3/36+2/36 = 5/36 per hr\nStep 3: Time = 1÷(5/36) = 36/5 = 7.2 hrs\n\nTRICK (formula):\nab/(a+b) = 12×18/(12+18) = 216/30 = 7.2\n\n  A ──→ 1/12/hr ──┐\n  B ──→ 1/18/hr ──┤──→ 5/36/hr\n                  └──→ 7.2 hrs\n\n7.2 hrs = 7 hrs 12 min\n\nAnswer: 7 hours 12 minutes ✓" },

    { num: "2", title: "Fill Pipe + Leak", color: "#1971c2", bg: "#d0ebff",
      q: "A pipe can fill a tank in 10 hours. A leak can empty it in 15 hours. If both work together, how long to fill the tank?",
      tree: "LOGIC:\nStep 1: Fill=+1/10, Leak=-1/15 per hr\nStep 2: Net = 1/10-1/15 = 3/30-2/30 = 1/30\nStep 3: Time = 1÷(1/30) = 30 hours\n\nTRICK (formula):\nab/(b-a) = 10×15/(15-10) = 150/5 = 30\n\n  Inlet ──→ +1/10/hr ──┐\n  Leak  ──→ -1/15/hr ──┤──→ 1/30/hr\n                       └──→ 30 hrs\n\nAnswer: 30 hours ✓" },

    { num: "3", title: "Find the Leak Rate", color: "#e8590c", bg: "#fff4e6",
      q: "A pipe fills a tank in 8 hours. Due to a leak, it takes 10 hours. In how many hours can the leak alone empty the full tank?",
      tree: "LOGIC:\nStep 1: Pipe=1/8, Pipe+Leak=1/10\nStep 2: Leak = 1/8 - 1/10\n  = 5/40-4/40 = 1/40 per hr\nStep 3: Leak alone empties in 40 hrs\n\nTRICK (formula):\nLeak time = ab/(b-a) = 8×10/(10-8)\n= 80/2 = 40 hours\n\n  Pipe alone:    1/8  → 8 hrs\n  Pipe + Leak:   1/10 → 10 hrs\n  Leak alone:    1/40 → 40 hrs\n\nAnswer: Leak empties in 40 hours ✓" },

    { num: "4", title: "Leak Starts Midway", color: "#7048e8", bg: "#e5dbff",
      q: "A pipe fills a tank in 6 hours. After 3 hours, a leak develops that can empty the tank in 12 hours. How much longer to fill?",
      tree: "LOGIC:\nStep 1: In 3 hrs, pipe fills 3/6=1/2\n  Remaining = 1/2\nStep 2: After leak: net = 1/6-1/12 = 1/12\nStep 3: Time = (1/2)÷(1/12) = 6 hrs more\n\nTRICK (timeline):\n  0──────3hr──────────9hr\n  |═pipe═|═pipe+leak══|\n  1/6/hr   1/12/hr\n  fills 1/2  fills rest 1/2\n\nRemaining/(net rate) = (1/2)/(1/12) = 6h\nTotal = 3+6 = 9 hrs\n\nAnswer: 6 more hours (total 9 hrs) ✓" },

    { num: "5", title: "Pipes Work in Intervals", color: "#e03131", bg: "#ffe3e3",
      q: "Pipe A fills 1/3 of a tank in 1 hour. Pipe B fills 1/4 in 1 hour. A works for 1 hour, then B for 1 hour, alternately. How long to fill?",
      tree: "LOGIC:\nStep 1: A=1/3/hr, B=1/4/hr\n  2-hr cycle: 1/3+1/4 = 7/12\nStep 2: 1 cycle(2h)=7/12, left=5/12\n  Hr3(A): 1/3=4/12, left=1/12\n  Hr4(B): (1/12)÷(1/4)=1/3 hr\n\nTRICK (LCM units):\nLCM tank=12 → A=4/hr, B=3/hr\n\n  |H1 |H2 |H3 |H4     |\n  | A | B | A | B(1/3) |\n  | 4 | 3 | 4 | 1      | =12\n  |cycle 1| cycle 2+   |\n\nAfter 2h:7 done. Hr3(A):4→left=1\nHr4(B):1/3 hr → Total=3h 20min\n\nAnswer: 3 hours 20 minutes ✓" },

    { num: "6", title: "Alternate Opening", color: "#0c8599", bg: "#c3fae8",
      q: "Two pipes A and B can fill a tank in 20 and 30 minutes. They are opened alternately for 1 minute each, starting with A. When will the tank be full?",
      tree: "LOGIC:\nStep 1: A=1/20/min, B=1/30/min\n  2-min cycle = 1/20+1/30 = 1/12\nStep 2: 11 cycles(22min) = 11/12\n  Left=1/12. Min23(A):1/20\n  After 23: 11/12+1/20=58/60, left=2/60=1/30\n  Min24(B): 1/30 at 1/30 rate = 1 min exact\n\nTRICK (LCM units):\nLCM(20,30)=60 → A=3/min, B=2/min\n\n  |M1|M2|M3|M4|...|M23|M24|\n  | A| B| A| B|...| A | B |\n  | 3| 2| 3| 2|...| 3 | 2 |\n  |cycle1|cycle2|  12 cycles=60\n\n12 cycles × 2min = 24 min exact\n\nAnswer: 24 minutes ✓" },

    { num: "7", title: "When to Close a Pipe", color: "#862e9c", bg: "#f3d9fa",
      q: "Two pipes A and B fill a tank in 10 and 15 hours. Both are opened but B is closed some time before the tank is full. Tank fills in 8 hours. When was B closed?",
      tree: "LOGIC:\nStep 1: A=1/10, B=1/15. A works all 8h\n  A's work = 8/10 = 4/5. Left for B = 1/5\nStep 2: B time = (1/5)÷(1/15) = 3 hrs\n  B closed after 3h (5h before end)\n\nTRICK (LCM units):\nLCM(10,15)=30 → A=3/hr, B=2/hr\nA does 8×3=24. B does 30-24=6 units\nB time = 6/2 = 3 hrs\n\n  0─────3hr────────────8hr\n  |═A+B═|═════A only═══|\n\nVerify: A(24)+B(6)=30 ✓\n\nAnswer: B was closed after 3 hours ✓" },

    { num: "8", title: "Tank Never Fills", color: "#f08c00", bg: "#fff3bf",
      q: "An inlet pipe fills at 5 litres/min. An outlet drains at 7 litres/min. If the tank has 200 litres, when will it be empty?",
      tree: "LOGIC:\nStep 1: Inlet=+5, Outlet=-7 L/min\n  Net = 5-7 = -2 L/min (draining!)\nStep 2: 200 litres at -2 L/min\n  Time = 200/2 = 100 minutes\n\nTRICK (sign check):\nOutlet > Inlet → NEVER fills, drains!\n\n  Inlet ──→ +5 L/min ──┐\n  Outlet ──→ -7 L/min ──┤ Net = -2\n                        └──→ draining!\n\nDrain time = Volume/|Net rate|\n= 200/2 = 100 min\n\nAnswer: Empty in 100 minutes ✓" },

    { num: "9", title: "Find Rate from Pairs", color: "#2f9e44", bg: "#ebfbee",
      q: "Pipes A+B fill in 6 hrs, B+C fill in 8 hrs, A+C fill in 12 hrs. How long for all three together?",
      tree: "LOGIC:\nStep 1: A+B=1/6, B+C=1/8, A+C=1/12\n  Add all: 2(A+B+C) = 1/6+1/8+1/12\n  = 4/24+3/24+2/24 = 9/24 = 3/8\nStep 2: A+B+C = 3/16 → Time = 16/3 hrs\n\nTRICK (LCM units):\nLCM(6,8,12)=24 → A+B=4, B+C=3, A+C=2\n2(A+B+C)=9 → A+B+C=4.5/hr\nTime = 24/4.5 = 16/3 = 5h 20m\n\n  A+B=4 ─┐\n  B+C=3 ─┤ sum=9, half=4.5\n  A+C=2 ─┘\n\nAnswer: 5 hours 20 minutes ✓" },

    { num: "10", title: "Three Pipes Together", color: "#1971c2", bg: "#d0ebff",
      q: "Pipe A fills in 12 hrs, B fills in 15 hrs, and C empties in 20 hrs. If all are opened, how long to fill?",
      tree: "LOGIC:\nStep 1: A=+1/12, B=+1/15, C=-1/20\nStep 2: Net = 1/12+1/15-1/20\n  = 5/60+4/60-3/60 = 6/60 = 1/10\nStep 3: Time = 1÷(1/10) = 10 hours\n\nTRICK (LCM units):\nLCM(12,15,20)=60 → A=5, B=4, C=-3\nNet = 5+4-3 = 6 units/hr\n\n  A ──→ +5  ──┐\n  B ──→ +4  ──┤──→ 6/hr\n  C ──→ -3  ──┘──→ 60/6 = 10 hrs\n\nAnswer: 10 hours ✓" }
  ]
};
