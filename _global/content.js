module.exports = {
  title: "MASTER FORMULA CHEATSHEET — ALL TOPICS",

  formulas: [
    { title: "Speed-Distance-Time", color: "#1971c2", bg: "#d0ebff",
      text: "       D\n      / \\\n     /   \\\n    S  ×  T\n\nCover D → S × T\nCover S → D / T\nCover T → D / S\n\nkm/h → m/s : × 5/18\nm/s → km/h : × 18/5" },
    { title: "Work & Efficiency (LCM)", color: "#2f9e44", bg: "#d8f5a2",
      text: "Total Work = LCM of all days\nEfficiency = Total Work / Days\nTime = Total Work / Combined Eff\n\n     (LCM)\n       |\n  -----+-----\n Eff(A)    Eff(B)\n = LCM/a   = LCM/b\n\nWages → split by efficiency ratio" },
    { title: "Percentage", color: "#e03131", bg: "#ffe3e3",
      text: "x% of y = (x/100) × y\n% change = (change/original) × 100\n\nSuccessive: a% then b%\n= a + b + ab/100\n\nIf A is x% more than B:\nB is [x/(100+x)]×100 % less than A" },
    { title: "Profit & Loss", color: "#7048e8", bg: "#e5dbff",
      text: "Profit = SP - CP\nLoss = CP - SP\nP% = (Profit/CP) × 100\nSP = CP × (100+P%) / 100\n\nDiscount% = (Discount/MP) × 100\nSP = MP × (100-D%) / 100" },
    { title: "Simple & Compound Interest", color: "#e8590c", bg: "#fff4e6",
      text: "SI = P × R × T / 100\nA = P + SI = P(1 + RT/100)\n\nCI: A = P(1 + R/100)^T\nCI = A - P\n\nCI - SI (2 yrs) = P(R/100)²\nRule of 72: doubles in 72/R yrs" },
    { title: "Ratio & Proportion", color: "#0c8599", bg: "#c3fae8",
      text: "a:b = c:d → ad = bc\nMean proportional = √(a×b)\nThird proportional = b²/a\n\nDirect: more→more (×)\nInverse: more→less (÷)\n\nAlligation: (d₂-m)/(m-d₁) = q₁/q₂" },
    { title: "Average", color: "#862e9c", bg: "#f3d9fa",
      text: "Avg = Sum / n\nSum = Avg × n\n\nAvg of 1 to n = (n+1)/2\nAvg of first n even = (n+1)\nAvg of first n odd = n\n\nWeighted Avg = Σwᵢxᵢ / Σwᵢ" },
    { title: "Boats & Streams", color: "#f08c00", bg: "#fff3bf",
      text: "Downstream = B + S (with current)\nUpstream = B - S (against current)\n\nB = (Down + Up) / 2\nS = (Down - Up) / 2\n\nAvg round trip = (B²-S²)/B" },
    { title: "Trains", color: "#c92a2a", bg: "#fff5f5",
      text: "Train → Pole: Dist = L\nTrain → Platform: Dist = L+P\nTwo trains: Dist = L1+L2\n\nSame dir: Rel = S1-S2\nOpp dir: Rel = S1+S2\n\nTunnel inside: T-L\nTunnel exit: T+L" },
    { title: "Pipes & Cisterns", color: "#1971c2", bg: "#d0ebff",
      text: "Fill pipe = POSITIVE (+)\nLeak pipe = NEGATIVE (-)\nNet = sum of all (with signs)\n\nLeak rate = (a×b)/(b-a)\na = fill time without leak\nb = fill time with leak" },
    { title: "Geometry (Area)", color: "#2f9e44", bg: "#d8f5a2",
      text: "Rectangle: A=l×b  P=2(l+b)\nSquare: A=s²  P=4s\nTriangle: A=½×b×h\nHeron: √s(s-a)(s-b)(s-c)\nCircle: A=πr²  C=2πr\nTrapezium: ½(a+b)×h" },
    { title: "Volume & Surface Area", color: "#e03131", bg: "#ffe3e3",
      text: "Cube: V=a³  SA=6a²\nCuboid: V=lbh  SA=2(lb+bh+lh)\nCylinder: V=πr²h  SA=2πr(r+h)\nCone: V=⅓πr²h  SA=πr(r+l)\nSphere: V=⁴⁄₃πr³  SA=4πr²" },
    { title: "P&C and Probability", color: "#7048e8", bg: "#e5dbff",
      text: "nPr = n!/(n-r)!  (order matters)\nnCr = n!/r!(n-r)! (order doesn't)\n\nP(E) = favorable / total\nP(A∪B) = P(A)+P(B)-P(A∩B)\nP(not A) = 1 - P(A)" },
    { title: "Clock & Calendar", color: "#e8590c", bg: "#fff4e6",
      text: "Clock angle = |30H - 5.5M|\nHands overlap 22 times/24hrs\nRight angle 44 times/24hrs\n\nOdd days: Ordinary yr=1, Leap=2\nCentury pattern: 0,5,3,1\nDay codes: Sun=0..Sat=6" },
    { title: "Number System", color: "#0c8599", bg: "#c3fae8",
      text: "HCF × LCM = Product of 2 numbers\nLCM of fracs = LCM(num)/HCF(den)\n\nUnit digit cycles: period 4\n2→2,4,8,6  3→3,9,7,1\n7→7,9,3,1  8→8,4,2,6\n\nDivisibility: 3→digit sum, 4→last 2" }
  ],

  types: []
};
