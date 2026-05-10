module.exports = {
  title: "PROBLEMS ON TRAINS — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Basic Formulas", color: "#1971c2", bg: "#d0ebff",
      text: "       D\n      / \\\n     /   \\\n    S  ×  T\n\nCover D → S × T\nCover S → D / T\nCover T → D / S\n\nkm/h → m/s : × 5/18\nm/s → km/h : × 18/5\n\nWHY: 1 km/h = 1000m/3600s = 5/18 m/s\n\nEx: 54 km/h = 54×5/18 = 15 m/s" },
    { title: "Distance to Cover", color: "#2f9e44", bg: "#d8f5a2",
      text: "Train → Pole/Person:  L\nTrain → Platform:     L + P\nTrain → Another Train: L1 + L2\nTrain → Tunnel Exit:  L + T\nTrain → Tunnel Inside: T - L\n\nWHY: Train's nose travels until its\n  tail clears the object. So add both\n  lengths. Pole/person = zero length.\n\nEx: Train=200m, Platform=300m\n  D = 200+300 = 500m" },
    { title: "Relative Speed", color: "#e03131", bg: "#ffe3e3",
      text: "Same direction (overtaking):\n  Relative = S1 - S2\n  ──→  ──→\n\nOpposite direction (crossing):\n  Relative = S1 + S2\n  ──→  ←──\n\nWHY: Gap between trains closes at\n  combined rate (opp) or difference\n  rate (same dir).\n\nEx: 60 & 40 km/h → Opp=100,\n  Same=20 km/h" },
    { title: "Shortcut Formulas", color: "#7048e8", bg: "#e5dbff",
      text: "Speed change → inverse time ratio\nS1:S2 = a:b → T1:T2 = b:a\n\nEqual trains cross pole T1,T2:\n  Opp: 2×T1×T2/(T1+T2)\n  Same: 2×T1×T2/(T1-T2)\n\nLate/Early → D=S1×S2×ΔT/(S2-S1)\n\nWHY (equal trains): L=S1×T1=S2×T2,\n  D=2L. Opp: T=2L/(S1+S2). Substitute\n  S=L/T to get harmonic mean formula.\n\nEx: T1=20s, T2=30s → Opp=\n  2×20×30/50 = 24s" }
  ],

  types: [
    { num: "1", title: "Train → Pole / Person", color: "#2f9e44", bg: "#ebfbee",
      q: "A train 150 meters long passes a pole in 15 seconds. Find the speed of the train in km/h.",
      tree: "LOGIC:\nStep 1: Pole has no length → D=train length\n  Speed = 150/15 = 10 m/s\nStep 2: Convert: 10 × 18/5 = 36 km/h\n\nTRICK:\nTrain→Pole: D=L only (pole=point)\nSpeed = L/T, then ×18/5 for km/h\n\n  ┌─────────────────┐\n  │  Train (150m)    │───→ S=?\n  └─────────────────┘\n           |  pole\n\nAnswer: 36 km/h ✓" },

    { num: "2", title: "Train → Platform / Bridge", color: "#1971c2", bg: "#d0ebff",
      q: "A train 200 meters long crosses a 300 meter platform in 25 seconds. Find the speed of the train.",
      tree: "LOGIC:\nStep 1: Train must cover own length + platform\n  D = 200+300 = 500m in 25s\nStep 2: S = 500/25 = 20 m/s = 20×18/5 = 72\n\nTRICK:\nTrain→Platform: D = L+P always\nS = (L+P)/T\n\n  ┌────────────┐ ╠════════════╣\n  │Train (200m) │→ Platform(300m)\n  └────────────┘ ╠════════════╣\n  |◄──────── 500m ──────────►|\n\nAnswer: 72 km/h ✓" },

    { num: "3", title: "Find Length of Train", color: "#e8590c", bg: "#fff4e6",
      q: "A train running at 72 km/h crosses a pole in 10 seconds. Find the length of the train.",
      tree: "LOGIC:\nStep 1: S = 72×5/18 = 20 m/s\nStep 2: L = S×T = 20×10 = 200m\n\nTRICK:\nL = S(m/s) × T(sec)\nConvert km/h first: ×5/18\n\n  ┌──────── ? m ────────┐\n  │      Train          │───→ 72 km/h\n  └─────────────────────┘\n              | pole\n\n72×5/18=20 m/s, L=20×10=200m\n\nAnswer: 200m ✓" },

    { num: "4", title: "Find Length of Platform", color: "#7048e8", bg: "#e5dbff",
      q: "A 250 meter long train running at 90 km/h crosses a platform in 30 seconds. Find the length of the platform.",
      tree: "LOGIC:\nStep 1: S=90×5/18=25 m/s\n  Total dist covered = 25×30 = 750m\nStep 2: Platform = Total-Train = 750-250\n\nTRICK:\nP = S×T - L = 25×30 - 250 = 500m\n\n  ┌────────────┐ ╠═══ ? m ═══╣\n  │Train (250m) │→ Platform(?)\n  └────────────┘ ╠══════════╣\n\nAnswer: 500m ✓" },

    { num: "5", title: "Find Time to Cross", color: "#0c8599", bg: "#c3fae8",
      q: "A 300 meter long train running at 54 km/h crosses a 200 meter bridge. Find the time taken.",
      tree: "LOGIC:\nStep 1: D = Train+Bridge = 300+200 = 500m\n  S = 54×5/18 = 15 m/s\nStep 2: T = D/S = 500/15 = 33.33 sec\n\nTRICK:\nT = (L+P)/S = (300+200)/(54×5/18)\n= 500/15 = 33.33s\n\n  ┌────────────┐ ╠════════════╣\n  │Train (300m) │→ Bridge(200m)\n  └────────────┘ ╠════════════╣\n\nAnswer: 33.33 sec ✓" },

    { num: "6", title: "Two Trains — Opposite", color: "#e03131", bg: "#ffe3e3",
      q: "Two trains 150 meters and 200 meters long are running at 40 km/h and 32 km/h in opposite directions. Find the time they take to cross each other.",
      tree: "LOGIC:\nStep 1: Opposite→Rel=40+32=72 km/h=20 m/s\n  D = L1+L2 = 150+200 = 350m\nStep 2: T = 350/20 = 17.5 sec\n\nTRICK:\nT = (L1+L2)/(S1+S2) in m/s\n= 350/20 = 17.5s\n\n  ┌──────────┐         ┌───────────┐\n  │T1 (150m) │──→  ←──│ T2 (200m) │\n  └──────────┘ 40  32  └───────────┘\n\nAnswer: 17.5 sec ✓" },

    { num: "7", title: "Two Trains — Same Dir", color: "#c92a2a", bg: "#fff5f5",
      q: "Two trains 100 meters and 150 meters long are running at 60 km/h and 40 km/h in the same direction. How long will the faster train take to overtake the slower one?",
      tree: "LOGIC:\nStep 1: Same dir→Rel=60-40=20 km/h=50/9 m/s\n  D = L1+L2 = 100+150 = 250m\nStep 2: T = 250/(50/9) = 250×9/50 = 45s\n\nTRICK:\nT = (L1+L2)/(S1-S2) in m/s\n= 250/(50/9) = 45s\n\n  ┌──────────┐  ┌───────────┐\n  │T1 (100m) │→ │ T2 (150m) │→\n  └──────────┘60 └───────────┘40\n\nAnswer: 45 sec ✓" },

    { num: "8", title: "Moving Person — Same Dir", color: "#2f9e44", bg: "#ebfbee",
      q: "A 200 meter long train running at 60 km/h passes a man walking at 6 km/h in the same direction. How long does the train take to pass him?",
      tree: "LOGIC:\nStep 1: Same dir → Rel=60-6=54 km/h=15 m/s\n  Person=point → D=200m only\nStep 2: T = 200/15 = 13.33 sec\n\nTRICK:\nPerson has NO length → D=train L only\nT = L/(S_train-S_man) in m/s\n\n  ┌──────────────┐     🚶\n  │ Train (200m)  │──→  ──→\n  └──────────────┘ 60    6\n\n= 200/15 = 13.33s\n\nAnswer: 13.33 sec ✓" },

    { num: "9", title: "Moving Person — Opposite", color: "#1971c2", bg: "#d0ebff",
      q: "A 180 meter long train running at 72 km/h passes a man running at 18 km/h in the opposite direction. How long does the train take to pass him?",
      tree: "LOGIC:\nStep 1: Opposite→Rel=72+18=90 km/h=25 m/s\n  D=180m (person=point)\nStep 2: T = 180/25 = 7.2 sec\n\nTRICK:\nT = L/(S_train+S_man) in m/s\n= 180/(90×5/18) = 180/25 = 7.2s\n\n  ┌──────────────┐   🚶\n  │ Train (180m)  │─→ ←─\n  └──────────────┘ 72  18\n\nAnswer: 7.2 sec ✓" },

    { num: "10", title: "Find Speed of One Train", color: "#e8590c", bg: "#fff4e6",
      q: "Two trains 120 meters and 180 meters long cross each other in 12 seconds while running in opposite directions. If one train is running at 50 km/h, find the speed of the other train.",
      tree: "LOGIC:\nStep 1: D=120+180=300m, T=12s\n  Rel = 300/12 = 25 m/s = 90 km/h\nStep 2: Opposite: S1+S2=90 → S2=90-50=40\n\nTRICK:\nRel = (L1+L2)/T → convert to km/h\nThen: S2 = Rel-S1 (opposite dir)\n\n  ──→ (120m)    (180m) ←──\n   50 km/h       ? km/h\n\n25 m/s×18/5=90 → S2=90-50=40\n\nAnswer: S2 = 40 km/h ✓" },

    { num: "11", title: "Find Length of One Train", color: "#7048e8", bg: "#e5dbff",
      q: "Two trains running at 36 km/h and 54 km/h in opposite directions cross each other in 10 seconds. If the first train is 100 meters long, find the length of the second train.",
      tree: "LOGIC:\nStep 1: Opposite→Rel=36+54=90 km/h=25 m/s\n  Total dist=25×10=250m\nStep 2: L2 = 250-L1 = 250-100 = 150m\n\nTRICK:\nL2 = Rel(m/s)×T - L1\n= 25×10 - 100 = 150m\n\n  ──→ (100m)    (? m) ←──\n   36 km/h     54 km/h\n\nAnswer: 150m ✓" },

    { num: "12", title: "Pole + Platform → Find L & S", color: "#0c8599", bg: "#c3fae8",
      q: "A train crosses a pole in 12 seconds and a 240 meter platform in 24 seconds. Find the length and speed of the train.",
      tree: "LOGIC:\nStep 1: Pole: L=S×12. Platform: L+240=S×24\n  Subtract: 240=S×12 → S=20 m/s\nStep 2: L=20×12=240m. S=20×18/5=72 km/h\n\nTRICK (subtract scenarios):\nExtra dist=240m, Extra time=24-12=12s\nS = 240/12 = 20 m/s\nL = S×T_pole = 20×12 = 240m\n\nPole:12s → L=S×12\nPlatform:24s → L+P=S×24\nSubtract → P=S×12\n\nAnswer: L=240m, S=72 km/h ✓" },

    { num: "13", title: "Man on Bridge", color: "#862e9c", bg: "#f3d9fa",
      q: "A man is standing at the end of a 200 meter bridge. A 300 meter long train is approaching at 36 km/h. How long will it take for the train to reach the man?",
      tree: "LOGIC:\nStep 1: Man at END of bridge\n  Train nose must travel 200m to reach him\nStep 2: S=36×5/18=10 m/s, T=200/10=20s\n\nTRICK:\nKEY: man's position matters!\nD = distance to the man, NOT L+bridge\n\n           ╠══ 200m ══╣\n  ┌──────┐ ║  Bridge  ║🚶\n  │Train  │→╠═════════╣\n   10 m/s\n\nT = 200/10 = 20 sec\n\nAnswer: 20 sec ✓" },

    { num: "14", title: "Train in Tunnel", color: "#1864ab", bg: "#d0ebff",
      q: "A 500 meter long train running at 108 km/h enters a 2000 meter tunnel. Find the time for the train to be completely inside the tunnel and the time to completely exit it.",
      tree: "LOGIC:\nStep 1: S=108×5/18=30 m/s\n  Inside: rear enters→nose exits=T-L\n  Exit: nose enters→rear exits=T+L\nStep 2: Inside=2000-500=1500→1500/30=50s\n  Exit=2000+500=2500→2500/30=83.3s\n\nTRICK:\nInside (hidden): D=Tunnel-Train=T-L\nThrough (exit): D=Tunnel+Train=T+L\n\n  ████ Tunnel 2000m ████\n   ┌──500m──┐\n\nInside=1500/30=50s, Exit=2500/30=83.3s\n\nAnswer: Inside=50s, Exit=83.3s ✓" },

    { num: "15", title: "Trains from Distance Apart", color: "#f08c00", bg: "#fff3bf",
      q: "Two trains start from stations A and B, 450 km apart, heading towards each other at 60 km/h and 90 km/h. When and where will they meet?",
      tree: "LOGIC:\nStep 1: Opposite→Rel=60+90=150 km/h\n  T=450/150=3 hrs. From A: 60×3=180km\n\nTRICK (ratio shortcut):\nSpeed ratio=60:90=2:3\nFrom A = (2/5)×450 = 180 km\nNo need to find time!\n\n  A ────── 450 km ────── B\n  ──→ 60            90 ←──\n       meet 180km from A\n\nAnswer: Meet in 3 hrs, 180km from A ✓" },

    { num: "16", title: "Speed Change → Time Change", color: "#e03131", bg: "#ffe3e3",
      q: "A train crosses a pole in 20 seconds at 54 km/h. How long will it take to cross the pole if the speed is increased to 72 km/h?",
      tree: "LOGIC:\nStep 1: L=S×T→same L, so S1×T1=S2×T2\n  54×20 = 72×T2 → T2 = 1080/72 = 15s\n\nTRICK (inverse ratio):\nSame dist → Speed:Time are INVERSE\nS=54:72=3:4 → T=4:3\nNew T = 20×(3/4) = 15 sec\n\n  ┌──────── L m ────────┐\n  │      Train          │───→\n  └─────────────────────┘\n  Case1: 54 km/h → 20s  |pole\n  Case2: 72 km/h → 15s  |pole\n\nSpeed ↑ → Time ↓ (always inverse!)\n\nAnswer: 15 sec ✓" },

    { num: "17", title: "Man in Train Sees Another", color: "#2f9e44", bg: "#ebfbee",
      q: "A man sitting in a train running at 50 km/h sees a goods train running in the opposite direction at 40 km/h pass him in 9 seconds. Find the length of the goods train.",
      tree: "LOGIC:\nStep 1: Man sees goods train pass him\n  Man=point, Opposite→Rel=50+40=90=25 m/s\nStep 2: L = Rel×T = 25×9 = 225m\n\nTRICK:\nMan in train = moving point observer\nL = (S1+S2)×T in m/s\n= (90×5/18)×9 = 25×9 = 225m\n\n  ──→ Man's train     ←── Goods train\n       50 km/h            40 km/h\n\nAnswer: 225m ✓" },

    { num: "18", title: "Crosses Man IN Another Train", color: "#c92a2a", bg: "#fff5f5",
      q: "A 150 meter long train crosses a man sitting in another 100 meter long train moving in the same direction in 10 seconds. If the second train runs at 36 km/h, find the speed of the first train.",
      tree: "LOGIC:\nStep 1: Train crosses MAN (not train!)\n  Man=point → D=150m only (NOT 150+100!)\nStep 2: Rel=150/10=15 m/s=54 km/h\n  Same dir: S1-36=54 → S1=90\n\nTRICK (TRAP alert!):\nCrosses man IN another train:\nD=crossing train's length ONLY\nNOT sum of both trains!\n\n  ┌──────────┐  ┌─────────┐\n  │T1 (150m) │→ │T2 🚶100m│→\n  └──────────┘S1 └─────────┘36\n\nAnswer: S1 = 90 km/h ✓" },

    { num: "19", title: "Both Cross Pole → Cross Each Other", color: "#7048e8", bg: "#e5dbff",
      q: "Two trains of equal length cross a pole in 20 seconds and 30 seconds respectively. How long will they take to cross each other when running in opposite directions?",
      tree: "LOGIC:\nStep 1: L=S1×20=S2×30. D=2L\n  Opp: T=2L/(S1+S2)=2L/(L/20+L/30)\n  =2/(1/20+1/30)=2/(50/600)=2400/50=24s\n\nTRICK (equal length formula):\nOpp: 2×T1×T2/(T1+T2) = 2×20×30/50 = 24s\nSame: 2×T1×T2/(T1-T2) = 1200/10 = 120s\n\n  ──→ A (L)      (L) ←──\n  pole:20s     pole:30s\n\nAnswer: Opp=24s, Same=120s ✓" }
  ]
};
