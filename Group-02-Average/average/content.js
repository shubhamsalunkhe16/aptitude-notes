module.exports = {
  title: "AVERAGE — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Basic Average Formulas", color: "#1971c2", bg: "#d0ebff",
      text: "Average = Sum / n\nSum = Average × n\n\nIf each value +x → New Avg = Old Avg + x\nIf each value -x → New Avg = Old Avg - x\nIf each value ×k → New Avg = Old Avg × k\nIf each value /k → New Avg = Old Avg / k\n\nWHY: Average distributes total equally among all.\nIf you level out unequal items, average is that level.\n\nEx: 10,20,30 → Sum=60, Count=3\n  Avg = 60/3 = 20\n  Each +5 → New Avg = 20+5 = 25" },
    { title: "Consecutive / Series Formulas", color: "#2f9e44", bg: "#ebfbee",
      text: "First n natural nos: Avg = (n+1)/2\nFirst n even nos:    Avg = n+1\nFirst n odd nos:     Avg = n\n\nAny AP: Avg = (First + Last) / 2\nSquares of 1..n: Avg = (n+1)(2n+1)/6\n\nWHY: In any AP, values are symmetric around\nthe middle, so Avg = midpoint = (First+Last)/2.\n\nEx: First 5 natural: Avg=(5+1)/2=3\n  Check: (1+2+3+4+5)/5 = 15/5 = 3 ✓" },
    { title: "Weighted Avg & Combined Groups", color: "#e8590c", bg: "#fff4e6",
      text: "Weighted Avg = Σwᵢxᵢ / Σwᵢ\n\nCombined Avg of two groups:\n  = (n₁×A₁ + n₂×A₂) / (n₁ + n₂)\n\nAlligation: n₁/n₂ = (A₂-Avg)/(Avg-A₁)\n\nWHY: Larger groups pull average towards them.\nWeighted avg gives more influence to larger groups.\n\nEx: 3 items avg 10, 2 items avg 20\n  = (3×10+2×20)/(3+2) = 70/5 = 14" },
    { title: "Add / Remove / Replace Member", color: "#7048e8", bg: "#e5dbff",
      text: "ADDED: New = NewAvg + n×(NewAvg-OldAvg)\n  (n = original count)\n\nREMOVED: Removed = OldAvg - n×(NewAvg-OldAvg)\n  (n = new count after removal)\n\nREPLACED: New-Old = n×(NewAvg-OldAvg)\n  (n = total count, unchanged)\n\nWHY: New member must cover its own share\nPLUS compensate the avg rise for all old members.\n\nEx: 4 people avg 25, new joins, avg→27\n  New = 27 + 4×(27-25) = 27+8 = 35" },
    { title: "Average Speed Formulas", color: "#e03131", bg: "#ffe3e3",
      text: "Same distance: Avg = 2ab/(a+b)\n  (Harmonic Mean — always < simple avg)\n\nSame time: Avg = (a+b)/2\n  (Arithmetic Mean = simple average)\n\nGeneral: Total Distance / Total Time\nNEVER just average the speeds!\n\nWHY: Same distance → more time at slow speed,\nso avg is pulled towards the slower speed.\n\nEx: 60 km at 30 km/h, 60 km at 60 km/h\n  Avg = 2×30×60/90 = 3600/90 = 40 (NOT 45!)" },
    { title: "Median & Mode", color: "#0c8599", bg: "#c3fae8",
      text: "Mean: Sum/Count (affected by outliers)\nMedian: Middle value (robust to outliers)\n  Even count → avg of two middle values\nMode: Most frequent value\n\nEmpirical: Mode ≈ 3×Median - 2×Mean\n\nWHY: Mean uses all values (outlier-sensitive).\nMedian ignores magnitude. Mode = frequency peak.\n\nEx: 2,3,3,7,100 → Mean=23, Median=3, Mode=3\n  Outlier 100 skews mean but not median/mode." }
  ],

  types: [
    { num: "1", title: "Basic Average (Direct)", color: "#2f9e44", bg: "#ebfbee",
      q: "Find the average of 12, 15, 18, 21, 24.",
      tree: "LOGIC:\nStep 1: Sum = 12+15+18+21+24 = 90\nStep 2: Avg = 90/5 = 18\n\n  |──12──15──18──21──24──|\n               ↑ Avg=18\n\nTRICK:\nAP series → Avg = (First+Last)/2\n= (12+24)/2 = 18 (middle term!)\n\nAnswer: Avg = 18 ✓" },

    { num: "2", title: "Weighted Average", color: "#1971c2", bg: "#d0ebff",
      q: "In a class, 30 boys have an average score of 60 marks and 20 girls have an average score of 70 marks. What is the overall average of the class?",
      tree: "LOGIC:\nStep 1: Sum = 30x60+20x70 = 3200\nStep 2: Avg = 3200/50 = 64\n\n    (30)         (20)\n     |             |\n    60            70\n     \\           /\n    Avg = 64\n\nTRICK:\nAlligation: 30/20 = (70-Avg)/(Avg-60)\n3/2 = (70-Avg)/(Avg-60) → Avg=64\n\nAnswer: Overall Avg = 64 ✓" },

    { num: "3", title: "Average of Consecutive / AP", color: "#e8590c", bg: "#fff4e6",
      q: "Find the average of all numbers from 11 to 50.",
      tree: "LOGIC:\nStep 1: Count = 50-11+1 = 40 numbers\nStep 2: Sum = (11+50)x40/2 = 1220\nStep 3: Avg = 1220/40 = 30.5\n\nTRICK:\nAny AP: Avg = (First+Last)/2\n= (11+50)/2 = 30.5\nWorks for any consecutive/AP series!\n\nAnswer: Avg = 30.5 ✓" },

    { num: "4", title: "First n Natural/Even/Odd", color: "#7048e8", bg: "#e5dbff",
      q: "Find the average of the first 50 natural numbers, the first 30 even numbers, and the first 40 odd numbers.",
      tree: "LOGIC:\nStep 1: Natural 1..50: sum=1275, avg=25.5\nStep 2: Even 2..60: sum=930, avg=31\nStep 3: Odd 1..79: sum=1600, avg=40\n\nTRICK:\nNatural(n) → (n+1)/2 = 51/2 = 25.5\nEven(n) → n+1 = 31\nOdd(n) → n = 40\nDon't confuse with nth term!\n\nAnswer: 25.5, 31, 40 ✓" },

    { num: "5", title: "Member Added → New Avg", color: "#e03131", bg: "#ffe3e3",
      q: "The average age of 10 students is 15 years. A new student joins and the average becomes 16 years. What is the age of the new student?",
      tree: "LOGIC:\nStep 1: Old sum = 10x15 = 150\nStep 2: New sum = 11x16 = 176\nStep 3: New student = 176-150 = 26\n\nTRICK:\nNew = NewAvg + n x (NewAvg-OldAvg)\n= 16 + 10x(16-15) = 16+10 = 26\n(n = original count)\n\nAnswer: Age = 26 years ✓" },

    { num: "6", title: "Member Removed → New Avg", color: "#c92a2a", bg: "#fff5f5",
      q: "The average weight of 8 persons is 65 kg. One person weighing 80 kg leaves. What is the new average weight?",
      tree: "LOGIC:\nStep 1: Old sum = 8x65 = 520\nStep 2: New sum = 520-80 = 440\nStep 3: New avg = 440/7 = 62.86 kg\n\nTRICK:\nDrop from avg = (80-65)/7 = 15/7\nNew avg = 65 - 15/7 = 62.86\n(removed person was above avg)\n\nAnswer: New Avg = 62.86 kg ✓" },

    { num: "7", title: "Member Replaced → New Avg", color: "#0c8599", bg: "#c3fae8",
      q: "The average of 11 numbers is 36. If one of the numbers, 45, is replaced by 27, what is the new average?",
      tree: "LOGIC:\nStep 1: Old sum = 11x36 = 396\nStep 2: New sum = 396-45+27 = 378\nStep 3: New avg = 378/11 = 34.36\n\nTRICK:\nChange in avg = (New-Old)/n\n= (27-45)/11 = -18/11 = -1.64\nNew avg = 36-1.64 = 34.36\nNo need to find total sum!\n\nAnswer: New Avg = 34.36 ✓" },

    { num: "8", title: "Age Problem (Time Passage)", color: "#862e9c", bg: "#f3d9fa",
      q: "A family of 5 members has an average age of 30 years. Two years later a baby is born, and the new average age of the 6-member family becomes 27 years. What is the baby's age?",
      tree: "LOGIC:\nStep 1: Sum then = 5x30 = 150\nStep 2: Sum now (no baby) = 150+5x2=160\nStep 3: Sum now (with baby) = 6x27=162\n  Baby = 162-160 = 2 years\n\nTRICK:\nAfter t yrs, avg increases by t\nOld avg now = 30+2 = 32\nBaby = 6x27 - 5x32 = 162-160 = 2\n\nAnswer: Baby = 2 years old ✓" },

    { num: "9", title: "Average Speed", color: "#f08c00", bg: "#fff3bf",
      q: "A person travels from A to B, a distance of 120 km, at 40 km/h and returns at 60 km/h. What is the average speed for the entire journey?",
      tree: "LOGIC:\nStep 1: T1=120/40=3h, T2=120/60=2h\nStep 2: Total dist=240, Total time=5\nStep 3: Avg = 240/5 = 48 km/h\n\n  A ════════════ B\n  ──── 40 km/h ──>\n  <── 60 km/h ────\n\nTRICK:\nSame distance → 2ab/(a+b)\n= 2x40x60/100 = 48\nNOT 50! Never average speeds!\n\nAnswer: Avg Speed = 48 km/h ✓" },

    { num: "10", title: "Combined Groups Average", color: "#2f9e44", bg: "#ebfbee",
      q: "The average of 20 numbers is 35 and the average of another 30 numbers is 45. What is the combined average of all 50 numbers?",
      tree: "LOGIC:\nStep 1: Sum = 20x35+30x45 = 2050\nStep 2: Combined = 2050/50 = 41\n\n  Grp1(20,35)    Grp2(30,45)\n       \\            /\n     Combined: Avg=41\n\nTRICK:\nAlligation: n1/n2 = (A2-Avg)/(Avg-A1)\n20/30 = (45-41)/(41-35) = 4/6 ✓\nCloser to larger group's avg\n\nAnswer: Combined Avg = 41 ✓" },

    { num: "11", title: "Finding Missing Number", color: "#1971c2", bg: "#d0ebff",
      q: "The average of 5 numbers is 27. Four of the numbers are 24, 26, 30, and 32. Find the fifth number.",
      tree: "LOGIC:\nStep 1: Sum needed = 27x5 = 135\nStep 2: Known sum = 24+26+30+32 = 112\nStep 3: Missing = 135-112 = 23\n\nTRICK:\nMissing = Total sum - Known sum\n= (Avg x n) - sum of known values\n= 135-112 = 23\n\nAnswer: Missing number = 23 ✓" },

    { num: "12", title: "Runs/Marks to Raise Average", color: "#e8590c", bg: "#fff4e6",
      q: "A batsman has an average of 40 runs in 10 innings. How many runs must he score in the 11th inning to raise his average to 45?",
      tree: "LOGIC:\nStep 1: Old sum = 10x40 = 400\nStep 2: New sum = 11x45 = 495\nStep 3: Runs = 495-400 = 95\n\nTRICK:\nRuns = NewAvg + n x (NewAvg-OldAvg)\n= 45 + 10x(45-40) = 45+50 = 95\nNeeds 45 for self + 5x10 extra\n\nAnswer: Runs needed = 95 ✓" },

    { num: "13", title: "Each Value ± x, New Avg", color: "#7048e8", bg: "#e5dbff",
      q: "The average of 20 numbers is 45. What is the new average if 5 is added to each number? What if each number is multiplied by 3?",
      tree: "LOGIC:\nStep 1: Each +5: new sum = 900+100=1000\n  Avg = 1000/20 = 50\nStep 2: Each x3: new sum = 900x3=2700\n  Avg = 2700/20 = 135\n\nTRICK:\n+x → Avg+x=50  |  xk → Avgxk=135\nTRAP: if only 3 of 20 numbers +10\nAvg up by 3x10/20 = 1.5 (NOT 10!)\n\nAnswer: +5 → 50, x3 → 135 ✓" },

    { num: "14", title: "Mean vs Median vs Mode", color: "#0c8599", bg: "#c3fae8",
      q: "Find mean, median, mode of: 3,7,7,2,9,7,4,5,1.",
      tree: "LOGIC:\nStep 1: Sum=45, n=9 → Mean=5\nStep 2: Sorted: 1,2,3,4,5,7,7,7,9\n  Median = 5th value = 5\nStep 3: Mode = 7 (appears 3 times)\n\n  1,2,3,4,[5],7,7,7,9\n           ↑ Median\n\nTRICK:\nMean=sum/n, Median=middle value\nMode=most frequent\nMode ~ 3xMedian - 2xMean\n\nAnswer: Mean=5, Median=5, Mode=7 ✓" }
  ]
};
