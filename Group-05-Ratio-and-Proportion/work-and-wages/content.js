module.exports = {
  title: "WORK AND WAGES — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Golden Rule", color: "#2f9e44", bg: "#ebfbee",
      text: "Wages ∝ Work Done (Efficiency)\nWages are ALWAYS split by EFFICIENCY ratio\nNOT by number of days worked!\n\nMore work done = More pay\nShare = (Your eff / Total eff) × Total Wage" },
    { title: "LCM Method for Wages", color: "#1971c2", bg: "#d0ebff",
      text: "Step 1: LCM of days = Total Work\nStep 2: Eff = Total Work / days\nStep 3: Ratio of wages = Ratio of eff\nStep 4: Split total wage by eff ratio\n\nIf someone works fewer days:\n  Actual work = eff × days worked\n  Share = (actual work / total work) × wage" },
    { title: "Daily Wage & Piece Rate", color: "#e8590c", bg: "#fff4e6",
      text: "Daily wage = Total payment / Days worked\n\nPiece rate = Payment per unit produced\nTotal pay = Units × Rate per unit\n\nContractor pay:\n  Total cost = Σ(workers × rate × days)" },
    { title: "Overtime Formula", color: "#7048e8", bg: "#e5dbff",
      text: "Overtime rate = Normal rate × multiplier\nCommon: 1.5× or 2× normal rate\n\nTotal pay = (Normal hrs × Normal rate)\n          + (OT hrs × OT rate)\n\nIf daily wage given:\n  Hourly rate = Daily wage / Normal hrs" }
  ],

  types: [
    { num: "1", title: "Basic Wages Split by Efficiency Ratio", color: "#2f9e44", bg: "#ebfbee",
      q: "A can do a work in 10 days and B can do it in 15 days. They work together and earn Rs.5000. What is the share of each?",
      tree: "LOGIC:\nStep 1: LCM(10,15)=30 (Total Work)\n  A eff=30/10=3, B eff=30/15=2\nStep 2: Wages split by efficiency\n  A = (3/5)x5000=3000\n  B = (2/5)x5000=2000\n\nTRICK:\nEff ratio = 1/10 : 1/15 = 3:2\n1 part = 5000/5 = 1000\nA=3000, B=2000\n\nAnswer: A = Rs.3000, B = Rs.2000 ✓" },

    { num: "2", title: "One Person Works More Days — Share of Wages", color: "#1971c2", bg: "#d0ebff",
      q: "A can do a work in 10 days and B in 15 days. A works for 4 days and B works for 9 days to complete the work. If the total wage is Rs.3000, what is each person's share?",
      tree: "LOGIC:\nStep 1: LCM(10,15)=30, A eff=3, B eff=2\nStep 2: A work=4x3=12, B work=9x2=18\nStep 3: Wage ratio = 12:18 = 2:3\n  A=3000x2/5=1200, B=1800\n\nTRICK:\nWages split by WORK DONE, not days!\nWork = efficiency x days worked\nA:B = 12:18 = 2:3\n1 part = 3000/5 = 600\n\nAnswer: A = Rs.1200, B = Rs.1800 ✓" },

    { num: "3", title: "Wages for Partial Work Done", color: "#e8590c", bg: "#fff4e6",
      q: "A can do a piece of work in 20 days. He works for 8 days and leaves. B finishes the remaining work in 9 days. If the total contract amount is Rs.4000, how much should B get?",
      tree: "LOGIC:\nStep 1: A does 8/20 work in 8 days\nStep 2: B does remaining 12/20\nStep 3: Ratio = 8:12 = 2:3\n  B = 4000x3/5 = Rs.2400\n\nTRICK:\nWages by work done (not time!)\nA:B = 8:12 = 2:3\n1 part = 4000/5 = 800\nA=1600, B=2400\n\nAnswer: B gets Rs.2400 ✓" },

    { num: "4", title: "Find Daily Wage from Total Work and Payment", color: "#7048e8", bg: "#e5dbff",
      q: "15 men can complete a work in 12 days and are paid Rs.54000 in total. What is the daily wage of each man?",
      tree: "LOGIC:\nStep 1: Man-days = 15 x 12 = 180\nStep 2: Daily wage = 54000/180 = Rs.300\n\n  ┌─────────────────────┐\n  │ 15 men x 12 days    │\n  │ = 180 man-days      │\n  │ 54000/180 = Rs.300  │\n  └─────────────────────┘\n\nTRICK:\nDaily wage = Total/(Men x Days)\n= 54000/(15x12) = Rs.300\n\nAnswer: Rs.300 per day ✓" },

    { num: "5", title: "Contractor Hires Workers at Different Rates", color: "#0c8599", bg: "#c3fae8",
      q: "A contractor hires 10 workers at Rs.500/day and 8 workers at Rs.400/day. If the work takes 6 days, what is the total labor cost?",
      tree: "LOGIC:\nStep 1: G1=10x500=5000/day\n        G2=8x400=3200/day\nStep 2: Daily total = 5000+3200 = 8200\nStep 3: 6 days = 8200x6 = Rs.49,200\n\nTRICK:\nTotal = (w1xr1 + w2xr2) x days\n= (10x500 + 8x400) x 6\n= 8200 x 6 = Rs.49,200\n\nAnswer: Rs.49,200 ✓" },

    { num: "6", title: "Men and Women at Different Daily Wages", color: "#862e9c", bg: "#f3d9fa",
      q: "5 men and 4 women can complete a work in 8 days. Daily wage of a man is Rs.600 and a woman is Rs.400. If 2 men = 3 women in efficiency, what is the total labor cost?",
      tree: "LOGIC:\nStep 1: Men: 5x600x8 = Rs.24,000\nStep 2: Women: 4x400x8 = Rs.12,800\nStep 3: Total = 24000+12800 = Rs.36,800\n\nTRICK:\nTotal = sum(workers x rate x days)\nEfficiency info is irrelevant here!\nWages = actual persons x their rate\n= (5x600 + 4x400) x 8 = Rs.36,800\n\nAnswer: Rs.36,800 ✓" },

    { num: "7", title: "Piece-Rate Work (Payment per Unit)", color: "#f08c00", bg: "#fff3bf",
      q: "A worker is paid Rs.15 for each finished item and Rs.5 is deducted for each rejected item. In a day he produces 50 items, out of which 8 are rejected. What is his daily earning?",
      tree: "LOGIC:\nStep 1: Accepted = 50-8 = 42\nStep 2: Earned = 42x15 = Rs.630\n        Deducted = 8x5 = Rs.40\nStep 3: Net = 630-40 = Rs.590\n\nTRICK:\nNet = (Accepted x rate) - (Rejected x penalty)\n= 42x15 - 8x5 = 630-40 = Rs.590\nEach rejected costs 15+5=20 vs accepted\n\nAnswer: Rs.590 ✓" },

    { num: "8", title: "Overtime Pay Calculation", color: "#e03131", bg: "#ffe3e3",
      q: "A worker earns Rs.480 for an 8-hour day. Overtime is paid at 1.5 times the normal hourly rate. If he works 11 hours in a day, what is his total earning for that day?",
      tree: "LOGIC:\nStep 1: Normal rate = 480/8 = Rs.60/hr\n  OT rate = 1.5x60 = Rs.90/hr\nStep 2: OT hours = 11-8 = 3\nStep 3: Total = 480 + 3x90 = Rs.750\n\nTRICK:\nTotal = Base + OT_hrs x OT_rate\n= 480 + 3x(1.5x60)\n= 480 + 270 = Rs.750\n\nAnswer: Rs.750 ✓" }
  ]
};
