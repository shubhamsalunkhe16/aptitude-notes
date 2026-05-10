module.exports = {
  title: "CLOCK — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Hand Speeds", color: "#2f9e44", bg: "#ebfbee",
      text: "Hour hand   = 0.5° per min = 30° per hr\nMinute hand = 6° per min   = 360° per hr\n\nRelative speed = 6 - 0.5 = 5.5° per min\n(minute hand gains 5.5° every min over hour hand)" },
    { title: "Master Angle Formula", color: "#1971c2", bg: "#d0ebff",
      text: "Angle = |30H - 5.5M|\n\nH = hour (12-hr format)\nM = minutes\n\nIf result > 180 -> Angle = 360 - result\n(always take the SMALLER angle)" },
    { title: "Hands at Angle theta", color: "#e8590c", bg: "#fff4e6",
      text: "Between H and (H+1) o'clock:\n  M = (30H + theta) x 2/11\n  M = (30H - theta) x 2/11\n\nTwo solutions (reject if M<0 or M>=60)\nOverlap: theta=0  Right: theta=90  Straight: theta=180" },
    { title: "Overlap & Angle Counts", color: "#7048e8", bg: "#e5dbff",
      text: "             12 hrs | 24 hrs\nOverlap(0):    11   |   22   (NOT 12/24!)\nRight(90):     22   |   44\nStraight(180): 11   |   22   (NOT 12/24!)\nAny theta:     22   |   44\n\nTime between overlaps = 12/11 hr = 65min 27sec" },
    { title: "Gaining / Losing Clock", color: "#e03131", bg: "#ffe3e3",
      text: "Gains x min/hr -> FAST (shows MORE)\n  Clock = Actual + (x * hours)\n\nLoses x min/hr -> SLOW (shows LESS)\n  Clock = Actual - (x * hours)\n\nCorrect time again = 720/x hours\nTwo clocks: 720/(a+b) hours" },
    { title: "Mirror Image of Clock", color: "#0c8599", bg: "#c3fae8",
      text: "Mirror time = 11:60 - Actual time\n\nIf actual = H:M\n  Mirror = (11-H):(60-M)\n\nSpecial: 12:00 and 6:00 look same in mirror\n\nEx: 3:20 -> 8:40   7:45 -> 4:15" }
  ],

  types: [
    { num: "1", title: "Angle Between Hands at a Given Time", color: "#2f9e44", bg: "#ebfbee",
      q: "Find the angle between the hands of a clock at 4:30.",
      tree: "LOGIC:\nStep 1: Hr hand = 30×4 + 0.5×30 = 135°\n  Min hand = 6×30 = 180°\nStep 2: Angle = |135-180| = 45°\n\nTRICK:\nAngle = |30H - 5.5M|\n= |30(4) - 5.5(30)| = |120-165| = 45°\n\n     12\n  9   .    3\n  8  / 45°  4 ← hour\n     6 ← min\n\nAnswer: 45 degrees ✓" },

    { num: "2", title: "Hands at 90 deg (Right Angle)", color: "#1971c2", bg: "#d0ebff",
      q: "At what time between 3 and 4 are the hands at right angles?",
      tree: "LOGIC:\nStep 1: M = (30H ± 90) × 2/11, H=3\n  Case 1: (90+90)×2/11 = 32 8/11\n  Case 2: (90-90)×2/11 = 0\n\nTRICK:\nPlug H and theta into formula\nTwo answers (± gives 2 cases)\nReject if M<0 or M>=60\n\n  3:00 (90°) and 3:32 8/11 (90°)\n\nAnswer: 3:00 and 3:32 8/11 min ✓" },

    { num: "3", title: "Hands at 180 deg (Straight Line)", color: "#e8590c", bg: "#fff4e6",
      q: "At what time between 2 and 3 do the hands form a straight line?",
      tree: "LOGIC:\nStep 1: M = (30H ± 180) × 2/11, H=2\n  Case 1: (60+180)×2/11 = 43 7/11 OK\n  Case 2: (60-180)×2/11 = negative REJECT\n\nTRICK:\n180° usually gives only ONE solution\n(other case goes negative)\nOnly exception: 6 o'clock range\n\nAnswer: 2:43 7/11 min ✓" },

    { num: "4", title: "Hands Overlap (0 Degrees)", color: "#7048e8", bg: "#e5dbff",
      q: "At what time between 5 and 6 do the hands overlap?",
      tree: "LOGIC:\nStep 1: M = (30H+0) × 2/11, H=5\nStep 2: M = 150×2/11 = 300/11\n  = 27 3/11 min\n\nTRICK:\nOverlap: M = 30H × 2/11\nNo overlap between 11 and 12!\n11 overlaps in 12 hrs (NOT 12)\n\nAnswer: 5:27 3/11 min ✓" },

    { num: "5", title: "Overlaps in 12 Hours / 24 Hours", color: "#e03131", bg: "#ffe3e3",
      q: "How many times do the hands overlap in a day (24 hours)?",
      tree: "LOGIC:\nStep 1: 12 hours → 11 overlaps\n  (11→12 overlap IS next 12:00)\nStep 2: 24 hours → 22 overlaps\n\nTRICK:\nOverlaps: 11 per 12hr, 22 per 24hr\nGap = 12/11 hr = 65 min 27 sec\nNOT 12/24 because hands share 12:00!\n\nAnswer: 22 times in 24 hours ✓" },

    { num: "6", title: "Right Angles in 12 Hours", color: "#0c8599", bg: "#c3fae8",
      q: "How many times do hands make 90 degrees in 12 hours?",
      tree: "LOGIC:\nStep 1: Expected 12×2=24\n  But 2 merge at 3:00 and 9:00\nStep 2: Actual = 24-2 = 22 in 12hr\n\nTRICK:\n  Angle  | 12 hrs | 24 hrs\n  0°     |   11   |   22\n  90°    |   22   |   44\n  180°   |   11   |   22\n  any θ  |   22   |   44\n\nAnswer: 22 times (12h), 44 times (24h) ✓" },

    { num: "7", title: "Straight Lines in 12 Hours", color: "#862e9c", bg: "#f3d9fa",
      q: "How many times do hands form a straight line (180 deg) in 12 hours?",
      tree: "LOGIC:\nStep 1: Expected 12 (once per hour)\n  But 1 merges at 6:00\nStep 2: Actual = 12-1 = 11 in 12hr\n\nTRICK:\n180° count = same as overlap count = 11\n5→6 and 6→7 slots share the 6:00 event\nIn 24hr = 22\n\nAnswer: 11 times (12h), 22 times (24h) ✓" },

    { num: "8", title: "Angle at Specific Times (3:15, 7:20)", color: "#f08c00", bg: "#fff3bf",
      q: "Find the angle at (a) 3:15 and (b) 7:20.",
      tree: "LOGIC:\nStep 1: 3:15 → |30(3)-5.5(15)|\n  = |90-82.5| = 7.5°\nStep 2: 7:20 → |30(7)-5.5(20)|\n  = |210-110| = 100°\n\nTRICK:\nAngle = |30H - 5.5M|\nTRAP: 3:15 is NOT 0°!\nHour hand moves past 3 by 7.5°\n\nAnswer: (a) 7.5° (b) 100° ✓" },

    { num: "9", title: "Clock Gaining/Losing Time", color: "#c92a2a", bg: "#fff5f5",
      q: "Clock gains 5 min/hr. Set at 8AM. What does it show at 8PM?",
      tree: "LOGIC:\nStep 1: Elapsed = 12 hours\n  Gain = 5×12 = 60 min = 1 hr\nStep 2: Clock = 8PM + 1hr = 9PM\n\nTRICK:\nGains → FAST → shows MORE\nLoses → SLOW → shows LESS\nClock = actual ± (rate × hours)\n\nAnswer: 9:00 PM ✓" },

    { num: "10", title: "Two Clocks — When Same Time Again", color: "#2f9e44", bg: "#ebfbee",
      q: "Clock A gains 3 min/hr, Clock B loses 2 min/hr. When same time again?",
      tree: "LOGIC:\nStep 1: Diff/hr = 3+2 = 5 min/hr\n  Same time when diff = 720 min\nStep 2: Time = 720/5 = 144 hr = 6 days\n\nTRICK:\nTwo clocks: 720/(gain+loss) hours\nSingle clock: 720/rate hours\n720 = 12 hours in minutes\n\nAnswer: After 6 days (144 hours) ✓" },

    { num: "11", title: "Mirror Image of Clock", color: "#1971c2", bg: "#d0ebff",
      q: "A clock shows 3:20. What time does its mirror image show?",
      tree: "LOGIC:\nStep 1: Mirror = 11:60 - actual\n  = 11:60 - 3:20\nStep 2: = 8:40\n\nTRICK:\nMirror = (11-H):(60-M)\n3:20 → 8:40 | 1:50 → 10:10\n4:15 → 7:45 | 12:00 → 12:00\nSpecial: 12:00 and 6:00 same in mirror\n\nAnswer: 8:40 ✓" },

    { num: "12", title: "Hands at Angle theta Between X and Y", color: "#e8590c", bg: "#fff4e6",
      q: "Between 7 and 8, when will the hands be at 60 degrees?",
      tree: "LOGIC:\nStep 1: M = (30H ± θ)×2/11, H=7, θ=60\n  Case 1: (210+60)×2/11 = 49 1/11\n  Case 2: (210-60)×2/11 = 27 3/11\n  Both valid (0 ≤ M < 60)\n\nTRICK:\nPlug into formula, get 2 answers\n+θ = min hand ahead of hour hand\n-θ = min hand behind hour hand\n\nAnswer: 7:27 3/11 and 7:49 1/11 ✓" }
  ]
};
