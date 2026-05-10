module.exports = {
  title: "TIME AND DISTANCE — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Basic Formulas", color: "#1971c2", bg: "#d0ebff",
      text: "       D\n      / \\\n     /   \\\n    S  ×  T\n\nCover D → S × T\nCover S → D / T\nCover T → D / S\n\nkm/h → m/s : × 5/18\nm/s → km/h : × 18/5\n\nWHY: 1 km=1000m, 1 hr=3600s\n  1 km/h = 1000/3600 = 5/18 m/s\n\nEx: 72 km/h = 72×5/18 = 20 m/s" },
    { title: "Proportionality", color: "#2f9e44", bg: "#d8f5a2",
      text: "Same Distance → S ∝ 1/T (inverse)\n  S1/S2 = T2/T1\n  Double speed = Half time\n\nSame Time → S ∝ D (direct)\n  Double speed = Double distance\n\nSame Speed → D ∝ T (direct)\n\nWHY: D=S×T. Fix one variable,\n  the other two relate directly\n  or inversely.\n\nEx: S=3:5, same D → T=5:3" },
    { title: "Average Speed", color: "#e03131", bg: "#ffe3e3",
      text: "SAME DISTANCE (go & return):\n  Avg = 2×S1×S2 / (S1+S2)\n  Ex: 40 & 60 → 2×40×60/100 = 48\n  NOT 50! (more time at slow speed)\n\nSAME TIME (drive 2hrs each):\n  Avg = (S1+S2) / 2\n  Ex: 40 & 60 → (40+60)/2 = 50\n\n1/3 EACH at 3 speeds:\n  Avg = 3/(1/S1 + 1/S2 + 1/S3)\n\nWHY: Avg=Total D / Total T.\n  Same D: T=D/S1+D/S2 → harmonic mean.\n  Same T: D=S1×T+S2×T → arithmetic mean." },
    { title: "Relative Speed", color: "#7048e8", bg: "#e5dbff",
      text: "Same dir (chase/overtake):\n  ──→  ──→  Rel = S1 - S2\n\nOpposite dir (meeting):\n  ──→  ←──  Rel = S1 + S2\n\nCatch-up time = Gap / Rel speed\n\nWHY: Objects approach each other;\n  gap closes at combined rate (opp)\n  or difference rate (same dir).\n\nEx: S1=60, S2=40 → Rel_opp=100,\n  Rel_same=20 km/h" },
    { title: "Special Formulas", color: "#0c8599", bg: "#c3fae8",
      text: "Late/Early → find distance:\n  D = S1 × S2 × T / (S2 - S1)\n\n  T = time difference:\n  Late+Early → T = late + early\n  Both late  → T = late1 - late2\n  Convert minutes to hours first!\n\nWHY: D/S1 - D/S2 = ΔT\n  D(S2-S1)/(S1×S2) = ΔT → solve for D.\n\nEx: 40km/h→10min late, 60km/h→10min early\n  T = 10+10 = 20min = 1/3 hr\n  D = 40×60×(1/3) / (60-40) = 40 km" }
  ],

  types: [
    { num: "1", title: "Basic — Find S, D, or T", color: "#2f9e44", bg: "#ebfbee",
      q: "A car travels 240 km in 4 hours. Find the speed of the car.",
      tree: "LOGIC:\nStep 1: Distance=240 km, Time=4 hrs\nStep 2: Speed = Distance/Time = 240/4 = 60\n\nTRICK (D-S-T triangle):\n  D=S×T → S=D/T → T=D/S\n\n  A ════════ 240 km ════════ B\n  ──────────────────────────→\n              4 hours\n\n  S = 240/4 = 60 km/h\n\nAnswer: 60 km/h ✓" },

    { num: "2", title: "Unit Conversion", color: "#1971c2", bg: "#d0ebff",
      q: "A man runs at 18 km/h. Express his speed in m/s and find the distance he covers in 30 seconds.",
      tree: "LOGIC:\nStep 1: 18 km/h = 18×1000/3600 = 5 m/s\nStep 2: Dist = Speed×Time = 5×30 = 150 m\n\nTRICK (×5/18 shortcut):\nkm/h → m/s: multiply by 5/18\n18 × 5/18 = 5 m/s\nm/s → km/h: multiply by 18/5\nOr: km/h ÷ 3.6 = m/s\n\nDist = 5×30 = 150 m\n\nAnswer: 5 m/s, 150 m ✓" },

    { num: "3", title: "Avg Speed — Same Distance", color: "#e03131", bg: "#ffe3e3",
      q: "A person goes from city A to city B at 40 km/h and returns at 60 km/h. Find the average speed for the whole journey.",
      tree: "LOGIC:\nStep 1: Let D=distance. T1=D/40, T2=D/60\n  Total dist=2D, Total time=D/40+D/60\n  = 3D/120+2D/120 = 5D/120\nStep 2: Avg = 2D/(5D/120) = 240/5 = 48\n\nTRICK (Harmonic Mean):\nSame dist → Avg = 2×S1×S2/(S1+S2)\n= 2×40×60/100 = 4800/100 = 48\n\n  A ════ D ════ B\n    ──→ 40   ←── 60\n\nNOT 50! More time at slow speed\n\nAnswer: 48 km/h ✓" },

    { num: "4", title: "Avg Speed — Same Time", color: "#c92a2a", bg: "#fff5f5",
      q: "A car travels at 40 km/h for 2 hours, then at 60 km/h for 2 hours. Find the average speed.",
      tree: "LOGIC:\nStep 1: D1=40×2=80, D2=60×2=120\n  Total=200km, Total time=4hrs\nStep 2: Avg = 200/4 = 50 km/h\n\nTRICK (same time → simple avg):\nAvg = (S1+S2)/2 = (40+60)/2 = 50\n\n  |◄── 2 hrs ──►|◄── 2 hrs ──►|\n  |  40 km/h     |  60 km/h     |\n  |  80 km       |  120 km      |\n\nSame time = arithmetic mean works!\n\nAnswer: 50 km/h ✓" },

    { num: "5", title: "Avg Speed — Diff D, Diff T", color: "#e8590c", bg: "#fff4e6",
      q: "A person covers 120 km at 40 km/h and then 180 km at 60 km/h. Find the average speed for the entire journey.",
      tree: "LOGIC:\nStep 1: T1=120/40=3h, T2=180/60=3h\nStep 2: Total D=300, Total T=6\n  Avg = 300/6 = 50 km/h\n\nTRICK (check if shortcut applies):\nDiff dist + diff time → NO formula shortcut\nMust use: Avg = Total D / Total T\n\n  |◄─ 120 km ─►|◄── 180 km ──►|\n  |   40 km/h   |   60 km/h    |\n\nHere T1=T2=3h (coincidence!) → 300/6=50\n\nAnswer: 50 km/h ✓" },

    { num: "6", title: "Speed Ratio → Time Ratio", color: "#7048e8", bg: "#e5dbff",
      q: "The speeds of A and B are in the ratio 3:4. A takes 20 minutes more than B to cover the same distance. Find the time taken by each.",
      tree: "LOGIC:\nStep 1: Speed A:B=3:4, same dist → Time=4:3\n  Let A=4x, B=3x. Diff: 4x-3x=20 → x=20\nStep 2: A=80 min, B=60 min\n  Check: 80-60=20 ✓\n\nTRICK (inverse ratio):\nSame dist → Time ratio = inverse of Speed\nS=3:4 → T=4:3, diff=1 part=20 min\nA=4×20=80, B=3×20=60\n\nSlower speed = more time (INVERSE!)\n\nAnswer: A = 80 min, B = 60 min ✓" },

    { num: "7", title: "Speed Ratio → Dist Ratio", color: "#862e9c", bg: "#f3d9fa",
      q: "Two cars have speeds in the ratio 5:7. If they travel for the same amount of time, find the ratio of the distances they cover.",
      tree: "LOGIC:\nStep 1: D=S×T. Same T → D directly ∝ S\n  S=5:7 → D=5:7\nStep 2: If one=150: 5 parts=150→1 part=30\n  Other = 7×30 = 210 km\n\nTRICK (proportionality):\nSame time → Dist ratio = Speed ratio\nSame dist → Time ratio = inverse Speed\nSame speed → Dist ratio = Time ratio\n\nHere: S=5:7, same T → D=5:7\n\nAnswer: Distance ratio = 5:7 ✓" },

    { num: "8", title: "Late/Early → Find Distance", color: "#0c8599", bg: "#c3fae8",
      q: "A person walking at 4 km/h reaches the office 10 minutes late, but walking at 6 km/h reaches 10 minutes early. Find the distance to the office.",
      tree: "LOGIC:\nStep 1: Let D=dist, T=actual time\n  D/4 = T+10/60 and D/6 = T-10/60\n  Subtract: D/4-D/6 = 20/60 = 1/3\nStep 2: D(3-2)/12 = 1/3 → D/12=1/3 → D=4\n\nTRICK (formula):\nD = S1×S2×ΔT/(S2-S1)\nΔT = late+early = 10+10 = 20min = 1/3hr\nD = 4×6×(1/3)/(6-4) = 8/2 = 4 km\n\n  Home ────── D ────── Office\n  ──→ 4km/h ... 10 min LATE\n  ──→ 6km/h ... 10 min EARLY\n\nAnswer: 4 km ✓" },

    { num: "9", title: "Meeting Point — Opposite Dir", color: "#2f9e44", bg: "#ebfbee",
      q: "A starts from X at 30 km/h and B starts from Y at 50 km/h towards each other. If the distance between X and Y is 120 km, where will they meet?",
      tree: "LOGIC:\nStep 1: Opposite → Rel=30+50=80 km/h\n  Meet in = 120/80 = 1.5 hrs\nStep 2: From X: 30×1.5 = 45 km\n\nTRICK (ratio shortcut):\nA:B = 30:50 = 3:5\nDist from X = (3/8)×120 = 45 km\n\n  X ═══════ 120 km ═══════ Y\n  A──→ 30              50 ←──B\n       meet at 45km from X\n\nAnswer: Meet at 45 km from X ✓" },

    { num: "10", title: "Chase / Catch-Up Problem", color: "#1971c2", bg: "#d0ebff",
      q: "A thief runs at 8 km/h. A policeman starts chasing him 30 minutes later at 12 km/h. How long will it take the policeman to catch the thief?",
      tree: "LOGIC:\nStep 1: Thief runs 30min head start\n  Gap = 8×(30/60) = 4 km\nStep 2: Same dir → Rel = 12-8 = 4 km/h\n  Catch-up time = 4/4 = 1 hour\n\nTRICK (formula):\nTime = Gap / Relative speed\n= (8×0.5) / (12-8) = 4/4 = 1 hr\n\n  |◄─ 4km ─►|\n  P──→12     T──→8\n\nPolice catches 12×1 = 12 km from start\n\nAnswer: 1 hour ✓" },

    { num: "11", title: "Head Start — Distance/Time", color: "#e8590c", bg: "#fff4e6",
      q: "A runs at 10 km/h and gives B, who runs at 8 km/h, a head start of 2 km. How long will A take to catch B?",
      tree: "LOGIC:\nStep 1: B has 2 km head start\n  Same dir → Rel = 10-8 = 2 km/h\nStep 2: Time = Gap/Rel = 2/2 = 1 hr\n\nTRICK (catch-up formula):\nTime = Head start dist / (S_fast - S_slow)\n= 2/(10-8) = 1 hr\n\n  B──→8          A──→10\n     |◄── 2 km ──►|\n\nAnswer: 1 hr ✓" },

    { num: "12", title: "Round Trip → Find Distance", color: "#7048e8", bg: "#e5dbff",
      q: "A person goes from A to B at 6 km/h and returns at 10 km/h. If the total round trip takes 4 hours, find the one-way distance.",
      tree: "LOGIC:\nStep 1: D/6 + D/10 = 4 hours\n  (5D+3D)/30 = 4 → 8D = 120 → D = 15\n\nTRICK (avg speed shortcut):\nAvg = 2×6×10/(6+10) = 120/16 = 7.5\nTotal dist = 7.5×4 = 30 → D = 15 km\n\n  A ═══ D km ═══ B\n    ──→ 6 km/h  ←── 10 km/h\n\nAnswer: 15 km ✓" },

    { num: "13", title: "Speed ↑ x% → Time ↓ ?%", color: "#0c8599", bg: "#c3fae8",
      q: "If the speed is increased by 25%, by what percentage does the time taken to cover the same distance decrease?",
      tree: "LOGIC:\nStep 1: S×T=constant. New S=1.25×old\n  New T = old/1.25 = 0.8×old = 80%\nStep 2: Decrease = 100%-80% = 20%\n\nTRICK (% formula):\nSpeed ↑x% → Time ↓ by x/(100+x)×100\n= 25/125 × 100 = 20%\n\nQuick reference:\n↑10%→↓9.09%  ↑25%→↓20%\n↑50%→↓33.3%  ↑100%→↓50%\n\nAnswer: Time decreases by 20% ✓" },

    { num: "14", title: "Right Angle Paths", color: "#862e9c", bg: "#f3d9fa",
      q: "A walks north at 4 km/h and B walks east at 3 km/h. Find the distance between them after 2 hours.",
      tree: "LOGIC:\nStep 1: A goes N: 4×2=8km. B goes E: 3×2=6km\nStep 2: Right angle → Pythagoras\n  Dist = √(8²+6²) = √(64+36) = √100 = 10\n\nTRICK (Pythagorean triplets):\n3,4,5 → ×2 → 6,8,10\nRecognize triplet instantly!\n\n       A (North)\n       ↑ 8 km\n       |\n  Start+────→ B (East)\n          6 km\n\nAnswer: 10 km ✓" },

    { num: "15", title: "Half Walk, Half Ride", color: "#f08c00", bg: "#fff3bf",
      q: "A person covers half the distance walking at 20 km/h and the other half riding at 40 km/h. Find the average speed for the whole journey.",
      tree: "LOGIC:\nStep 1: Let total D. T1=(D/2)/20, T2=(D/2)/40\n  Total T = D/40+D/80 = 3D/80\nStep 2: Avg = D/(3D/80) = 80/3 = 26.67\n\nTRICK (Harmonic Mean):\nSame dist → Avg = 2×S1×S2/(S1+S2)\n= 2×20×40/60 = 1600/60 = 26.67\n\n  |◄── D/2 ──►|◄── D/2 ──►|\n  |  Walk 20   |  Ride 40   |\n\nNOT 30! Simple avg is WRONG here\n\nAnswer: 26.67 km/h ✓" },

    { num: "16", title: "1/3 Each at 3 Speeds", color: "#0c8599", bg: "#c3fae8",
      q: "A person covers one-third of a journey at 20 km/h, one-third at 30 km/h, and the rest at 60 km/h. Find the average speed.",
      tree: "LOGIC:\nStep 1: Let D=total. Each part=D/3\n  T = D/(3×20)+D/(3×30)+D/(3×60)\n  = D/60+D/90+D/180 = (3D+2D+D)/180 = 6D/180\nStep 2: Avg = D/(6D/180) = 180/6 = 30\n\nTRICK (equal parts formula):\nAvg = 3/(1/S1+1/S2+1/S3)\n= 3/(1/20+1/30+1/60)\n= 3/(6/60) = 3/(1/10) = 30\n\n  |◄─D/3─►|◄─D/3─►|◄─D/3─►|\n  | 20km/h | 30km/h | 60km/h |\n\nAnswer: 30 km/h ✓" },

    { num: "17", title: "Walk + Rest + Walk", color: "#862e9c", bg: "#f3d9fa",
      q: "A person walks 1 km at 5 km/h, rests for 10 minutes, then walks 2 km at 4 km/h. Find the total time taken.",
      tree: "LOGIC:\nStep 1: T1=1/5 hr=12min, Rest=10min\n  T2=2/4 hr=30min\nStep 2: Total = 12+10+30 = 52 min\n\nTRICK (segment addition):\nBreak into parts, add all times\nDon't forget REST time!\n\n  |◄─1km──►| REST |◄──2km──►|\n  | 5km/h   |10min | 4km/h   |\n  | 12min   |      | 30min   |\n\n12+10+30 = 52 min\n\nAnswer: 52 min ✓" }
  ]
};
