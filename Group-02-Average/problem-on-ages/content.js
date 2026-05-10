module.exports = {
  title: "PROBLEM ON AGES — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Basic Age Equations", color: "#1971c2", bg: "#d0ebff",
      text: "Present age = x\nAge t years ago = x - t\nAge t years hence = x + t\n\nIf ratio of ages a:b → ages = ak, bk\nDifference of ages stays CONSTANT\nSum of ages increases by 2t after t yrs" },
    { title: "Ratio & Difference Formulas", color: "#2f9e44", bg: "#ebfbee",
      text: "If A:B = m:n and diff = d\n  A = m×d/(m-n), B = n×d/(m-n)\n\nIf ratio was m:n, becomes p:q after t yrs\n  (mk+t)/(nk+t) = p/q → solve for k\n\nProduct of ages = P\n  Use factorization + constraints" },
    { title: "Father-Son / Parent-Child", color: "#e8590c", bg: "#fff4e6",
      text: "Father = k × Son (k times now)\nFather + t = j × (Son + t) (j times after t yrs)\n\nFather - Son = constant always\nSum increases by 2 each year\n\nFather age when son born = Diff of ages" },
    { title: "Average Age of Group", color: "#7048e8", bg: "#e5dbff",
      text: "Avg age of n people = A\nAfter t years: Avg = A + t\n\nNew member joins: new avg changes\nMember leaves: recalculate with n-1\n\nSum of ages = Avg × Count\nBirth/Death changes count AND sum" }
  ],

  types: [
    { num: "1", title: "Ratio + Difference", color: "#2f9e44", bg: "#ebfbee",
      q: "The ages of A and B are in the ratio 5:3. If the difference between their ages is 12 years, find their present ages.",
      tree: "LOGIC:\nStep 1: A=5k, B=3k, Diff=2k\nStep 2: 2k=12 → k=6\nStep 3: A=30, B=18\n\nTRICK:\nk = Diff/(ratio diff)\n= 12/(5-3) = 6\nA=5x6=30, B=3x6=18\nCHECK: 30:18=5:3, 30-18=12 ✓\n\nAnswer: A = 30, B = 18 years ✓" },

    { num: "2", title: "X Years Ago / Hence", color: "#1971c2", bg: "#d0ebff",
      q: "The ratio of ages of A and B, 4 years ago, was 3:2. After 4 years, the ratio will be 5:4. Find their present ages.",
      tree: "LOGIC:\nStep 1: 4 yrs ago: A-4=3k, B-4=2k\nStep 2: After 4 yrs: (3k+8)/(2k+8)=5/4\n  12k+32=10k+40 → k=4\nStep 3: A=3(4)+4=16, B=2(4)+4=12\n\n  -4yr   NOW    +4yr\n  3:2   16:12   5:4\n\nTRICK:\nDiff is constant: 5k-3k=4 always\nUse two equations with k, solve\n\nAnswer: A = 16, B = 12 years ✓" },

    { num: "3", title: "Sum of Ages", color: "#e8590c", bg: "#fff4e6",
      q: "The sum of ages of a father and son is 56 years. After 4 years, the father's age will be 3 times the son's age. Find their present ages.",
      tree: "LOGIC:\nStep 1: F+S=56, F+4=3(S+4)\nStep 2: F=3S+8, substitute: 3S+8+S=56\nStep 3: 4S=48 → S=12, F=44\n\nTRICK:\nFrom F+4=3(S+4): F=3S+8\nF+S=56 → 4S+8=56 → S=12\nCheck: 48=3x16 ✓\n\nAnswer: Father = 44, Son = 12 years ✓" },

    { num: "4", title: "Father-Son Ratio Change", color: "#7048e8", bg: "#e5dbff",
      q: "A father is 4 times as old as his son. After 6 years, he will be 3 times as old. Find their present ages.",
      tree: "LOGIC:\nStep 1: F=4S, F+6=3(S+6)\nStep 2: 4S+6=3S+18 → S=12\nStep 3: F=4x12=48\n\n  NOW: 48,12(4:1)  +6yr: 54,18(3:1)\n\nTRICK:\nDiff = F-S = 3S (constant)\nAfter 6: F-S still=36\nF+6=3(S+6) → S=12, F=48\n\nAnswer: Father = 48, Son = 12 years ✓" },

    { num: "5", title: "Average Age of Family", color: "#e03131", bg: "#ffe3e3",
      q: "The average age of a family of 4 members is 25 years. A baby is born and the average age drops to 21. Find the age of the baby.",
      tree: "LOGIC:\nStep 1: Old sum = 4x25 = 100\nStep 2: New sum = 5x21 = 105\nStep 3: Baby = 105-100 = 5 years\n\nTRICK:\nBaby = NewAvg + n x (NewAvg-OldAvg)\n= 21 + 4x(21-25) = 21-16 = 5\n(n=original count)\n\nAnswer: Baby = 5 years old ✓" },

    { num: "6", title: "Product of Ages", color: "#0c8599", bg: "#c3fae8",
      q: "The product of ages of two children is 72 and the difference between their ages is 1 year. Find their ages.",
      tree: "LOGIC:\nStep 1: AxB=72, A-B=1\nStep 2: Factor pairs of 72:\n  1x72, 2x36, 4x18, 6x12, 8x9\nStep 3: Diff=1 → (8,9)\n\nTRICK:\nFor diff=1, find consecutive factors\nsqrt(72)=8.49 → try 8,9\n8x9=72 ✓, 9-8=1 ✓\n\nAnswer: Ages = 9 and 8 years ✓" },

    { num: "7", title: "Ratio After N Years", color: "#862e9c", bg: "#f3d9fa",
      q: "Present ages of A and B are in ratio 5:4. After 10 years, ratio becomes 7:6. Find present ages.",
      tree: "LOGIC:\nStep 1: A=5k, B=4k\nStep 2: (5k+10)/(4k+10)=7/6\n  30k+60=28k+70 → k=5\nStep 3: A=25, B=20\n\nTRICK:\nDiff=k (constant), after 10 yrs:\n(5k+10)/(4k+10)=7/6 → k=5\nNOW: 25:20=5:4 ✓ +10: 35:30=7:6 ✓\n\nAnswer: A = 25, B = 20 years ✓" },

    { num: "8", title: "X Times as Old, Y Years Ago", color: "#f08c00", bg: "#fff3bf",
      q: "6 years ago, a man was 3 times as old as his son. After 6 years, he will be twice as old. Find their present ages.",
      tree: "LOGIC:\nStep 1: M=3S-12 (from 6 yrs ago)\nStep 2: M=2S+6 (from 6 yrs hence)\nStep 3: 3S-12=2S+6 → S=18, M=42\n\nTRICK:\nTwo equations, eliminate M:\n3S-12 = 2S+6 → S=18\nCheck: 36=3x12 ✓, 48=2x24 ✓\n\nAnswer: Man = 42, Son = 18 years ✓" },

    { num: "9", title: "Difference Constant", color: "#2f9e44", bg: "#ebfbee",
      q: "The difference between the ages of two persons is 20 years. 5 years ago, the elder one was 3 times the younger. Find their present ages.",
      tree: "LOGIC:\nStep 1: E-Y=20, E-5=3(Y-5)\nStep 2: E=3Y-10, substitute:\n  3Y-10-Y=20 → Y=15, E=35\n\nTRICK:\nDiff always=20 (constant)\nE=Y+20, substitute in 2nd eqn:\nY+20-5=3(Y-5) → Y=15, E=35\nCheck: 30=3x10 ✓\n\nAnswer: Elder=35, Younger=15 years ✓" },

    { num: "10", title: "Three People Ages", color: "#1971c2", bg: "#d0ebff",
      q: "The ages of A, B, and C are in the ratio 3:5:7. If the sum of their ages is 60 years, find each person's age.",
      tree: "LOGIC:\nStep 1: A=3k, B=5k, C=7k\nStep 2: 15k=60 → k=4\nStep 3: A=12, B=20, C=28\n\nTRICK:\nk = Sum / (ratio sum)\n= 60/15 = 4\nA=3x4=12, B=5x4=20, C=7x4=28\nCHECK: 12+20+28=60 ✓\n\nAnswer: A=12, B=20, C=28 years ✓" },

    { num: "11", title: "Age When Child Was Born", color: "#e8590c", bg: "#fff4e6",
      q: "A mother is 24 years older than her daughter. In 6 years, the mother's age will be twice the daughter's age. Find the present age of the daughter.",
      tree: "LOGIC:\nStep 1: M=D+24\nStep 2: M+6=2(D+6) → D+30=2D+12\nStep 3: D=18, M=42\n\nTRICK:\nDiff=24 (constant)\nAfter 6: M+6=2(D+6)\nD+24+6=2D+12 → D=18\nMother was 24 at daughter's birth\nCheck: 48=2x24 ✓\n\nAnswer: Daughter = 18 years ✓" },

    { num: "12", title: "Fraction of Ages", color: "#7048e8", bg: "#e5dbff",
      q: "The age of a man is 1/3 more than his wife's age. The wife is 8 years older than her son aged 16. What is the man's age?",
      tree: "LOGIC:\nStep 1: Son=16, Wife=16+8=24\nStep 2: Man = 24 + 24/3 = 24+8 = 32\n\nTRICK:\n1/3 MORE means x(4/3)\nMan = 24 x 4/3 = 32\nTRAP: 1/3 more ≠ 1/3 of!\n1/3 more = multiply by 4/3\n\nAnswer: Man = 32 years ✓" }
  ]
};
