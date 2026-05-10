module.exports = {
  title: "BOATS AND STREAMS — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Core Definitions", color: "#1971c2", bg: "#d0ebff",
      text: "Boat speed in still water = B\nStream (current) speed = S\n\nDownstream speed = B + S  (current helps)\nUpstream speed   = B - S  (current opposes)\n\n──→ Boat ──→ Stream = DOWNSTREAM\n──→ Boat ←── Stream = UPSTREAM\n\nWHY: Current adds to boat's speed\n  going with it, subtracts against.\n\nEx: B=10, S=3 → Down=13, Up=7" },
    { title: "Deriving B & S", color: "#2f9e44", bg: "#ebfbee",
      text: "If Downstream = D, Upstream = U\n\nBoat speed  B = (D + U) / 2\nStream speed S = (D - U) / 2\n\nWHY: D=B+S, U=B-S\n  D+U=2B → B=(D+U)/2\n  D-U=2S → S=(D-U)/2\n\nEx: Down=14, Up=8 →\n  B=(14+8)/2=11, S=(14-8)/2=3" },
    { title: "Time & Distance", color: "#e8590c", bg: "#fff4e6",
      text: "Time downstream = D / (B+S)\nTime upstream   = D / (B-S)\n\nRound trip = D/(B+S) + D/(B-S)\n           = 2DB / (B²-S²)\n\nIf same dist: T_up/T_down = (B+S)/(B-S)\n\nWHY: T=D/Speed. Round trip combines\n  two fractions with common denominator\n  (B+S)(B-S) = B²-S².\n\nEx: B=8, S=2, D=30 → T=30/10+30/6\n  = 3+5 = 8 hrs" },
    { title: "Shortcut Formulas", color: "#7048e8", bg: "#e5dbff",
      text: "Avg speed (round trip):\n  = 2×Down×Up / (Down+Up)\n  = (B²-S²) / B\n\nT_up - T_down = 2DS / (B²-S²)\n→ D = T×(B²-S²) / (2S)\n\nBoat speed doubles:\n  T = D/(2B+S) + D/(2B-S)\n\nWHY: Avg=2D/total T. Simplify\n  2D/(D/(B+S)+D/(B-S)) = (B²-S²)/B.\n  Always < B since stream slows avg.\n\nEx: B=10, S=4 → Avg=(100-16)/10\n  = 8.4 km/h" }
  ],

  types: [
    { num: "1", title: "Find Boat Speed & Stream Speed", color: "#2f9e44", bg: "#ebfbee",
      q: "A man can row downstream at 13 km/h and upstream at 9 km/h. Find the speed of the man in still water and the speed of the stream.",
      tree: "LOGIC:\nStep 1: D=B+S=13, U=B-S=9\n  Add: 2B=22→B=11. Subtract: 2S=4→S=2\nStep 2: Verify: 11+2=13, 11-2=9 ✓\n\nTRICK (formula):\nB = (D+U)/2 = (13+9)/2 = 11\nS = (D-U)/2 = (13-9)/2 = 2\n\n  --> Boat --> Stream (down=13)\n  --> Boat <-- Stream (up=9)\n\nAnswer: Boat=11 km/h, Stream=2 km/h ✓" },

    { num: "2", title: "Find Upstream/Downstream Speed", color: "#1971c2", bg: "#d0ebff",
      q: "A boat has a speed of 10 km/h in still water and the stream flows at 3 km/h. Find the upstream and downstream speeds of the boat.",
      tree: "LOGIC:\nStep 1: Current helps downstream, opposes up\n  Down = B+S = 10+3 = 13 km/h\nStep 2: Up = B-S = 10-3 = 7 km/h\n\nTRICK (just add/subtract):\nDown = B+S (stream helps)\nUp = B-S (stream opposes)\n\n  --> Boat(10) --> Stream(3)  = 13\n  --> Boat(10) <-- Stream(3)  = 7\n\nAnswer: Down=13 km/h, Up=7 km/h ✓" },

    { num: "3", title: "Time for Round Trip", color: "#e8590c", bg: "#fff4e6",
      q: "A boat can travel at 8 km/h in still water. The speed of the stream is 4 km/h. How long does it take to go 24 km downstream and return?",
      tree: "LOGIC:\nStep 1: Down=B+S=12, Up=B-S=4\n  T_down=24/12=2h, T_up=24/4=6h\nStep 2: Total = 2+6 = 8 hours\n\nTRICK (round trip formula):\nT = 2DB/(B²-S²)\n= 2×24×8/(64-16) = 384/48 = 8 hrs\n\n  START <--- 24 km ---> PLACE\n  GO:   12 km/h → 2 hrs\n  BACK:  4 km/h → 6 hrs\n\nAnswer: Total = 8 hours ✓" },

    { num: "4", title: "Find Distance from Times", color: "#7048e8", bg: "#e5dbff",
      q: "A boat takes 3 hours to travel downstream and 5 hours to travel upstream over the same distance. If the boat speed in still water is 8 km/h and the stream speed is 2 km/h, find the distance.",
      tree: "LOGIC:\nStep 1: Down=B+S=10, Up=B-S=6\nStep 2: D=Down×T_down=10×3=30 km\n  Verify: D=Up×T_up=6×5=30 ✓\n\nTRICK:\nSame dist → (B+S)×T_down = (B-S)×T_up\nUse either side to find D:\nD = 10×3 = 30 km\n\n  --> down=10, 3hrs → 30km\n  --> up=6, 5hrs → 30km ✓\n\nAnswer: Distance = 30 km ✓" },

    { num: "5", title: "Man Rows Up & Down — Find Speeds", color: "#0c8599", bg: "#c3fae8",
      q: "A man rows 48 km downstream in 4 hours and 36 km upstream in 6 hours. Find the speed of the man in still water and the speed of the stream.",
      tree: "LOGIC:\nStep 1: Down=48/4=12, Up=36/6=6\n  D=B+S=12, U=B-S=6\nStep 2: 2B=18→B=9, 2S=6→S=3\n  Verify: 9+3=12, 9-3=6 ✓\n\nTRICK (formula):\nB=(D+U)/2=(12+6)/2=9\nS=(D-U)/2=(12-6)/2=3\n\n  ~~~ DOWN ~~~     ~~~ UP ~~~\n  48km / 4hrs      36km / 6hrs\n  =12 km/h         =6 km/h\n\nAnswer: B=9 km/h, S=3 km/h ✓" },

    { num: "6", title: "Stream Speed from Same Distance", color: "#862e9c", bg: "#f3d9fa",
      q: "A boat takes 2 hours to travel 20 km downstream and 4 hours to return the same distance upstream. Find the speed of the stream.",
      tree: "LOGIC:\nStep 1: Down=20/2=10, Up=20/4=5\n  B+S=10, B-S=5 → subtract: 2S=5\nStep 2: S=2.5 km/h\n\nTRICK (formula):\nS = (Down-Up)/2 = (10-5)/2 = 2.5\nB = (Down+Up)/2 = (10+5)/2 = 7.5\n\n  ~~~ DOWN ~~~     ~~~ UP ~~~\n  20km / 2hrs      20km / 4hrs\n  =10 km/h         =5 km/h\n\nAnswer: Stream speed = 2.5 km/h ✓" },

    { num: "7", title: "Average Speed for Round Trip", color: "#f08c00", bg: "#fff3bf",
      q: "A boat travels at 12 km/h in still water and the stream speed is 4 km/h. Find the average speed of the boat for a round trip.",
      tree: "LOGIC:\nStep 1: Down=16, Up=8. Let D=distance\n  Total=2D, Time=D/16+D/8=3D/16\nStep 2: Avg=2D/(3D/16)=32/3=10.67\n\nTRICK (Harmonic Mean):\nAvg = 2×Down×Up/(Down+Up)\n= 2×16×8/24 = 256/24 = 10.67\nALT: (B²-S²)/B = (144-16)/12 = 10.67\n\n  START ══════ D ══════ PLACE\n    GO:   B+S=16 ──→  T1=D/16\n    BACK: B-S=8  ←──  T2=D/8\n\nNOTE: Avg < B always! (stream slows)\n\nAnswer: Avg speed = 10.67 km/h ✓" },

    { num: "8", title: "Rows X km Up in Same Time as Y km Down — Find B:S", color: "#e03131", bg: "#ffe3e3",
      q: "A man can row 6 km upstream in the same time as he rows 10 km downstream. If the speed of the stream is 2 km/h, find the speed of the man in still water.",
      tree: "LOGIC:\nStep 1: Same time → D ∝ Speed\n  6:10 = (B-S):(B+S)\n  6(B+S)=10(B-S) → 16S=4B → B=4S\nStep 2: S=2 → B=8 km/h\n  Verify: Up=6, Down=10, 6/6=10/10=1h ✓\n\nTRICK (ratio):\nUp:Down dist = (B-S):(B+S)\n6:10 = 3:5. So B-S=3k, B+S=5k\nB=4k, S=k. Given S=2→k=2→B=8\n\n  ──→ 10 km (downstream) ──→\n  ←── 6 km  (upstream)   ←──\n       Same time T\n\nAnswer: Boat speed = 8 km/h ✓" },

    { num: "9", title: "Boat Speed Doubles — New Round Trip", color: "#c92a2a", bg: "#fff5f5",
      q: "A boat travels at 5 km/h in still water and the stream speed is 1 km/h. If the boat speed doubles, how long does it take to travel 24 km downstream and return?",
      tree: "LOGIC:\nStep 1: New B=10, S=1 (stream unchanged!)\n  Down=10+1=11, Up=10-1=9\nStep 2: T=24/11+24/9=2.18+2.67=4.85 hrs\n\nTRICK (TRAP alert!):\nOnly BOAT speed doubles, NOT stream!\nNew speeds: (2B+S) and (2B-S)\nNOT 2(B+S) and 2(B-S)!\n\n  --> Boat(10) --> Stream(1) = 11\n  --> Boat(10) <-- Stream(1) = 9\n\nT = 24/11 + 24/9 = 4.85 hrs\n\nAnswer: 4.85 hours ✓" },

    { num: "10", title: "Find Stream Speed Given B and Two Times", color: "#1971c2", bg: "#d0ebff",
      q: "A boat travels at 15 km/h in still water. It takes 4 hours to go downstream and 6 hours to return the same distance. Find the speed of the stream.",
      tree: "LOGIC:\nStep 1: Same dist → (15+S)×4=(15-S)×6\n  60+4S=90-6S → 10S=30 → S=3\nStep 2: Verify: 18×4=72, 12×6=72 ✓\n\nTRICK (ratio method):\nSame dist → T ∝ 1/Speed\nT1:T2=4:6=2:3 → Speed ratio=3:2\nDown:Up=3:2 → (B+S):(B-S)=3:2\n3(B-S)=2(B+S) → B=5S → S=15/5=3\n\n  START ═══════ D ═══════ PLACE\n    GO:   B+S=18 ──→  4 hrs\n    BACK: B-S=12 ←──  6 hrs\n\nAnswer: Stream speed = 3 km/h ✓" },

    { num: "11", title: "T_up Exceeds T_down by T hrs — Find Distance", color: "#e8590c", bg: "#fff4e6",
      q: "A boat travels at 10 km/h in still water and the stream speed is 2 km/h. If the upstream journey takes 2 hours more than the downstream journey, find the distance.",
      tree: "LOGIC:\nStep 1: Down=12, Up=8\n  D/8-D/12=2 → (3D-2D)/24=2 → D=48\nStep 2: Verify: 48/12=4h, 48/8=6h, diff=2 ✓\n\nTRICK (formula):\nD = ΔT×(B²-S²)/(2S)\n= 2×(100-4)/(2×2) = 2×96/4 = 48\n\nOr: D=ΔT×Down×Up/(Down-Up)\n= 2×12×8/(12-8) = 192/4 = 48\n\nAnswer: Distance = 48 km ✓" },

    { num: "12", title: "Swimming Upstream/Downstream", color: "#0c8599", bg: "#c3fae8",
      q: "A swimmer covers 30 km downstream in 3 hours and 18 km upstream in 3 hours. Find the speed of the swimmer in still water and the speed of the stream.",
      tree: "LOGIC:\nStep 1: Down=30/3=10, Up=18/3=6\n  Swimmer+S=10, Swimmer-S=6\nStep 2: 2×Swimmer=16→Swimmer=8, S=2\n\nTRICK (same formula as boats):\nB=(D+U)/2=(10+6)/2=8\nS=(D-U)/2=(10-6)/2=2\n\n  ~~~ DOWN ~~~     ~~~ UP ~~~\n  30km / 3hrs      18km / 3hrs\n  =10 km/h         =6 km/h\n\nSwimmer = boat. Same formulas apply!\n\nAnswer: Swimmer=8 km/h, Stream=2 km/h ✓" }
  ]
};
