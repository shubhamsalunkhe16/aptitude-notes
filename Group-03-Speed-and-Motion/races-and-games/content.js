module.exports = {
  title: "RACES AND GAMES — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Race Basics", color: "#2f9e44", bg: "#ebfbee",
      text: "A beats B by X m in D-m race:\n  When A runs D, B runs (D-X)\n  Sa : Sb = D : (D-X)\n\nWHY: Same time → Speed ∝ Distance covered.\n  A covers D, B covers (D-X) → ratio = D:(D-X)\n\nEx: 200m race, A beats B by 40m\n  Sa:Sb = 200:160 = 5:4\n\nA beats B by T sec:\n  B's time = A's time + T\n\nDead heat = Both finish together\nHead start Xm: B runs (D-X) only" },
    { title: "Speed Relationships", color: "#1971c2", bg: "#d0ebff",
      text: "\"k times AS FAST as B\":\n  Sa = k × Sb\n  Ex: 5/3 times as fast → Sa = 5/3 Sb\n\n\"k times FASTER than B\" (ambiguous!):\n  Some mean Sa = (1+k) × Sb\n  Ex: 5/3 times faster → Sa = 8/3 Sb\n\nAlways check which interpretation fits!" },
    { title: "Transitive & Combined", color: "#e8590c", bg: "#fff4e6",
      text: "A beats B by X, B beats C by Y (D-m race):\n\nA beats C = X + Y - (X×Y)/D\n\nWHY: When A finishes D, B is at (D-X).\n  Scale B→C: C = (D-X)(D-Y)/D from start.\n  A beats C = D - (D-X)(D-Y)/D = X+Y-XY/D\n\nEx: 100m race, A beats B by 10, B beats C by 20\n  A beats C = 10+20-200/100 = 28m\n\nWhen A finishes D:\n  C's position = (D-X)(D-Y)/D from start" },
    { title: "Games & Circular", color: "#7048e8", bg: "#e5dbff",
      text: "GAMES: Points = Distance\n  A gives B 20 pts in 100 → 100:80\n  Same formulas as races!\n\nCIRCULAR TRACK:\n  Same dir: Meet = Track/(S1-S2)\n  Opp dir: Meet = Track/(S1+S2)\n\nWHY: Same dir → faster gains 1 lap on slower.\n  Relative speed = S1-S2; time = Track/(S1-S2)\n\nEx: 400m track, 5 m/s & 3 m/s same dir\n  Meet = 400/(5-3) = 200s\n\n\"Beats by X m OR T sec\":\n  Sb = X/T (remaining dist ÷ extra time)" }
  ],

  types: [
    { num: "1", title: "A Beats B by X Meters", color: "#2f9e44", bg: "#ebfbee",
      q: "In a 200 metre race, A beats B by 30 metres. What is the ratio of their speeds?",
      tree: "LOGIC:\nStep 1: When A finishes 200m, B is at 170m\nStep 2: Same time → Speed ∝ Distance\n  Sa/Sb = 200/170 = 20/17\n\nTRICK:\nSa : Sb = D : (D-Lead) = 200:170 = 20:17\n\n  Start              Finish\n  |====================| A (200m)\n  |=================   | B (170m)\n                    30m behind\n\nAnswer: Speed ratio = 20:17 ✓" },

    { num: "2", title: "A Beats B by T Seconds", color: "#1971c2", bg: "#d0ebff",
      q: "In a 1 km race, A beats B by 20 seconds. If A's time for the race is 100 seconds, what is B's speed?",
      tree: "LOGIC:\nStep 1: B's time = A's time + 20 = 120s\nStep 2: B's speed = 1000/120 = 25/3 m/s\n\n  Time: |--100s--|---20s---|\n     A: |========| finish\n     B: |========|=========| finish\n        A done    B still running\n\nTRICK:\nBeaten by T sec → Tb = Ta + T\nSb = D / (Ta + T)\n= 1000/120 = 8.33 m/s\n\nAnswer: B's speed = 8.33 m/s ✓" },

    { num: "3", title: "Beats by X Metres OR T Seconds", color: "#e8590c", bg: "#fff4e6",
      q: "In a 200 metre race, A beats B by 35 metres or 7 seconds. Find A's time over the course.",
      tree: "LOGIC:\nStep 1: B was 35m behind when A finished\n  B covers 35m in 7 sec → Sb = 35/7 = 5 m/s\nStep 2: B's time = 200/5 = 40 sec\nStep 3: A's time = 40 - 7 = 33 sec\n\n  Start                  Finish\n  |========================| A (200m in 33s)\n  |====================    | B (165m when A done)\n                       35m |\n                       in 7s → Sb=5m/s\n\nTRICK:\nSb = Lead(m)/Lead(s) = 35/7 = 5 m/s\nTa = Tb - T = 40 - 7 = 33s\n\nAnswer: A's time = 33 seconds ✓" },

    { num: "4", title: "Head Start for Dead Heat", color: "#7048e8", bg: "#e5dbff",
      q: "A runs 5/3 times as fast as B. If A gives B a start of 80 metres, how far must the winning post be so that A and B reach it at the same time?",
      tree: "LOGIC:\nStep 1: Sa = (5/3)Sb, let D = course length\n  A runs D, B runs (D-80) in same time\nStep 2: D/Sa = (D-80)/Sb\n  D/(5/3 Sb) = (D-80)/Sb\n  3D/5 = D-80 → 3D = 5D-400\n  2D = 400 → D = 200m\n\n  B starts here      A starts here     Finish\n  |--80m head start--|=====120m========|\n  B runs 120m         A runs 200m (same time)\n\nTRICK:\nSa:Sb = 5:3, so Da:Db = 5:3\nD/(D-80) = 5/3 → D=200\n\nAnswer: Winning post at 200 metres ✓" },

    { num: "5", title: "k Times FASTER (Ambiguous)", color: "#e03131", bg: "#ffe3e3",
      q: "A runs 5/3 times faster than B. If A gives B a start of 80 metres, how far must the winning post be so that they reach it at the same time?",
      tree: "LOGIC:\nStep 1: \"5/3 times FASTER\" = Sa = (1+5/3)Sb\n  = (8/3)Sb (NOT same as 5/3 times as fast!)\nStep 2: D/(8/3 Sb) = (D-80)/Sb\n  3D/8 = D-80 → 3D = 8D-640\n  5D = 640 → D = 128m\n\n  \"AS FAST\":  Sa = k x Sb      (5/3 x Sb)\n  \"FASTER\":   Sa = (1+k) x Sb  (8/3 x Sb)\n              ^^^ TRAP: different meanings!\n\nTRICK:\nAlways check which interpretation fits!\nD/(D-80) = 8/3 → D=128\n\nAnswer: Winning post at 128 metres ✓" },

    { num: "6", title: "Transitive: A Beats B, B Beats C", color: "#0c8599", bg: "#c3fae8",
      q: "In a 1000 metre race, A beats B by 50 metres, and B beats C by 40 metres. By how many metres does A beat C in the same race?",
      tree: "LOGIC:\nStep 1: A=1000 → B=950. When B=1000 → C=960\nStep 2: Scale: when B=950, C=960×950/1000\n  C = 912m\nStep 3: A beats C by 1000-912 = 88m\n\n  Start                        Finish(1000m)\n  |================================| A\n  |=============================   | B (950m)\n  |==========================      | C (912m)\n  A beats C = 1000-912 = 88m\n\nTRICK (formula):\nA beats C = X+Y-XY/D = 50+40-2000/1000 = 88m\n\nAnswer: A beats C by 88 metres ✓" },

    { num: "7", title: "Dead Heat — Find Head Start", color: "#862e9c", bg: "#f3d9fa",
      q: "A runs at 10 m/s and B runs at 8 m/s. In a 100 meter race, how much of a head start should A give B so that they finish at the same time?",
      tree: "LOGIC:\nStep 1: A time = 100/10 = 10 sec\nStep 2: B covers in 10s = 8×10 = 80m\nStep 3: B needs only 80m → start = 20m\n\nTRICK:\nHead start = D × (1 - Sb/Sa)\n= 100 × (1 - 8/10) = 100 × 1/5 = 20m\n\n  B starts here    A starts here\n  |◄── 20m ──►|◄─── 80m ──────►|\n\nAnswer: Give B a 20 metre head start ✓" },

    { num: "8", title: "A Beats B by Xm, C by Ym → B Beats C?", color: "#f08c00", bg: "#fff3bf",
      q: "In a 100 meter race, A beats B by 10 meters and A beats C by 20 meters. By how many meters does B beat C in a 100 meter race?",
      tree: "LOGIC:\nStep 1: When A=100: B=90, C=80\nStep 2: Sb:Sc = 90:80 = 9:8\nStep 3: When B=100, C = 100×8/9 = 88.89\n  B beats C by 100-88.89 = 11.11m\n\n  When A=100: B=90, C=80\n  Scale to B=100: C = 80x100/90 = 88.89\n  TRAP: 20-10 = 10? NO! Answer = 11.11m\n\nTRICK:\nB beats C = D × (1 - Sc/Sb)\n= 100 × (1 - 80/90) = 100/9 = 11.11m\n\nAnswer: B beats C by 11.11 metres ✓" },

    { num: "9", title: "Games — Scoring Points", color: "#c92a2a", bg: "#fff5f5",
      q: "In a game of 100 points, A can give B 20 points and C 28 points. How many points can B give C in a game of 100 points?",
      tree: "LOGIC:\nStep 1: When A=100: B=80, C=72\n  Sb/Sa = 0.8, Sc/Sa = 0.72\nStep 2: Sc/Sb = 0.72/0.8 = 0.9\nStep 3: When B=100, C = 100×0.9 = 90\n  B gives C = 100-90 = 10 pts\n\n  A=100 pts: B=80, C=72 (given)\n  Scale B->100: C = 72x100/80 = 90\n  B gives C = 100-90 = 10 pts\n\nTRICK:\nGames = Races (pts = distance)\nC when B finishes = 100 × Sc/Sb\n\nAnswer: B can give C 10 points ✓" },

    { num: "10", title: "Race with Time Diff — Find Speeds", color: "#e8590c", bg: "#fff4e6",
      q: "In a 200 metre race, A beats B by 4 seconds. If A runs at 10 m/s, find B's speed.",
      tree: "LOGIC:\nStep 1: A's time = 200/10 = 20s\nStep 2: B's time = 20+4 = 24s\nStep 3: B's speed = 200/24 = 25/3 m/s\n\n  A: |===200m===| 20s   (Sa=10)\n  B: |===200m=======| 24s  (Sb=?)\n     Ta + 4s = Tb → Sb = 200/24 = 8.33\n\nTRICK:\nTb = Ta + T_beaten = 20+4 = 24s\nSb = D/Tb = 200/24 = 8.33 m/s\n\nAnswer: B's speed = 8.33 m/s ✓" },

    { num: "11", title: "Circular Race — First Meeting", color: "#2f9e44", bg: "#ebfbee",
      q: "A and B start running from the same point on a 400 metre circular track. A runs at 5 m/s and B at 3 m/s. When do they first meet in (a) same direction and (b) opposite directions?",
      tree: "LOGIC:\nStep 1: Same dir: faster gains 1 full lap\n  Rel = 5-3 = 2 m/s, T = 400/2 = 200s\nStep 2: Opp dir: they close gap together\n  Rel = 5+3 = 8 m/s, T = 400/8 = 50s\n\n  Same dir:     Opp dir:\n    A--->         A--->\n   /     \\       /     \\\n  |  400m |     |  400m |\n   \\     /       \\     /\n    B--->         <---B\n  Rel=5-3=2     Rel=5+3=8\n  T=400/2=200s  T=400/8=50s\n\nTRICK:\nSame dir: T = Track / |S1-S2|\nOpp dir:  T = Track / (S1+S2)\n\nAnswer: Same=200s, Opposite=50s ✓" },

    { num: "12", title: "Bill Sharing / Wages in Race Context", color: "#1971c2", bg: "#d0ebff",
      q: "A man, his wife and daughter worked in a garden. The man worked for 3 days, wife for 2 days and daughter for 4 days. Ratio of daily wages is Man:Wife:Daughter = 5:4:3. Total earning is Rs.105. Find the daughter's daily wage.",
      tree: "LOGIC:\nStep 1: Total earning by each:\n  Man: 3×5x = 15x\n  Wife: 2×4x = 8x\n  Daughter: 4×3x = 12x\nStep 2: 15x+8x+12x = 105\n  35x = 105 → x = 3\nStep 3: Daughter = 3×3 = Rs.9/day\n\n  Person   Days  Rate  Units\n  Man       3  x  5  =  15x\n  Wife      2  x  4  =   8x\n  Daughter  4  x  3  =  12x\n  Total = 35x = 105 → x=3\n\nTRICK:\nDaily wage = rate × x = 3×3 = Rs.9\n\nAnswer: Daughter's daily wage = Rs.9 ✓" }
  ]
};
