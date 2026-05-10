module.exports = {
  title: "MASTER FORMULA CHEATSHEET — ALL TOPICS",

  formulas: [
    // 1. Numbers, HCF/LCM, Powers (Topics: problems-on-numbers, powers-and-roots, hcf-and-lcm)
    { title: "Numbers, HCF & LCM", color: "#1971c2", bg: "#d0ebff",
      text: "Number = 10a+b, Reversed = 10b+a, Diff = 9(a-b)\nLarger = (S+D)/2, Smaller = (S-D)/2\n\nHCF = lowest powers of common primes\nLCM = highest powers of ALL primes\nHCF x LCM = Product of two numbers\n\nHCF of fracs = HCF(num)/LCM(den)\nLCM of fracs = LCM(num)/HCF(den)\n\nLargest N dividing X,Y leaving rem R = HCF(X-R, Y-R)\nSmallest N div by X,Y leaving rem R = LCM(X,Y) + R" },

    // 2. Divisibility & Unit Digits (Topics: problems-on-numbers, powers-and-roots)
    { title: "Divisibility & Unit Digits", color: "#2f9e44", bg: "#ebfbee",
      text: "Div by 3,9 -> digit sum | by 4 -> last 2 digits\nDiv by 8 -> last 3 | by 11 -> |odd-even pos sum|\nDiv by 6 = 2 AND 3 | by 12 = 3 AND 4\n\nUnit digit cycle (period 4): 2->2,4,8,6  3->3,9,7,1\n7->7,9,3,1  8->8,4,2,6 | Period 2: 4->4,6  9->9,1\nPeriod 1: 0,1,5,6 (always same)\nFind n mod period -> pick from cycle (0 = last)\n\nDigits in a^n = floor(n x log10(a)) + 1\n(a5)^2 = a(a+1) followed by 25  e.g. 35^2=1225" },

    // 3. Simplification & Fractions (Topics: simplification, fractions-and-decimals)
    { title: "Simplification & Fractions", color: "#e8590c", bg: "#fff4e6",
      text: "BODMAS: Brackets, Orders, Div/Mul (L-R), Add/Sub (L-R)\n\n(a+b)^2 = a^2+2ab+b^2 | (a-b)^2 = a^2-2ab+b^2\na^2-b^2 = (a+b)(a-b)\n\na/b + c/d = (ad+bc)/bd | a/b / c/d = ad/bc\n\nRecurring: 0.ababab... = ab/99\nMixed: 0.1666... = (16-1)/90 = 1/6\nTerminating: den has only 2s and 5s as factors\n\n% shortcuts: 12.5%=1/8, 25%=1/4, 33.3%=1/3\nx% of y = y% of x (commutative)" },

    // 4. Average (Topic: average)
    { title: "Average", color: "#7048e8", bg: "#e5dbff",
      text: "Avg = Sum/n | Sum = Avg x n\nFirst n natural: (n+1)/2 | Even: n+1 | Odd: n\nAny AP: Avg = (First + Last) / 2\n\nWeighted Avg = (n1.A1 + n2.A2) / (n1+n2)\n\nADDED: New = NewAvg + n(NewAvg-OldAvg)\nREMOVED: Removed = OldAvg - n'(NewAvg-OldAvg)\nREPLACED: New-Old = n(NewAvg-OldAvg)\n\nAvg Speed same dist = 2ab/(a+b) (Harmonic Mean)\nAvg Speed same time = (a+b)/2 (Arithmetic Mean)" },

    // 5. Problems on Ages (Topic: problem-on-ages)
    { title: "Problems on Ages", color: "#e03131", bg: "#ffe3e3",
      text: "Age difference stays CONSTANT always\nSum of ages increases by 2t after t years\n\nIf ratio A:B = m:n, diff = d:\n  A = m.d/(m-n), B = n.d/(m-n)\n\nRatio was m:n, becomes p:q after t yrs:\n  (mk+t)/(nk+t) = p/q -> solve for k\n\nFather age when son born = their age difference\n\"1/3 more\" means multiply by 4/3 (NOT 1/3 of)" },

    // 6. Time & Distance (Topic: time-and-distance)
    { title: "Time & Distance", color: "#0c8599", bg: "#c3fae8",
      text: "D = S x T | S = D/T | T = D/S\nkm/h -> m/s: x 5/18 | m/s -> km/h: x 18/5\n\nSame D -> S inversely prop to T: S1/S2 = T2/T1\nRelative: same dir = S1-S2 | opp dir = S1+S2\nCatch-up time = Gap / Relative speed\n\nLate/Early -> D = S1.S2.dT / (S2-S1)\n  dT = late+early (convert min to hrs)\n\nSpeed up x% -> time down by x/(100+x) x 100%\nAvg speed (same dist) = 2ab/(a+b)" },

    // 7. Trains (Topic: problems-on-trains)
    { title: "Problems on Trains", color: "#862e9c", bg: "#f3d9fa",
      text: "Train -> Pole/Person: D = L (train length)\nTrain -> Platform: D = L + P\nTwo trains crossing: D = L1 + L2\nTrain inside tunnel: D = Tunnel - L\nTrain exit tunnel: D = Tunnel + L\n\nSame dir (overtake): Rel = S1 - S2\nOpposite dir (cross): Rel = S1 + S2\n\nEqual trains cross pole in T1,T2:\n  Opp crossing = 2.T1.T2/(T1+T2)\n  Same crossing = 2.T1.T2/(T1-T2)" },

    // 8. Boats & Streams (Topic: boats-and-streams)
    { title: "Boats & Streams", color: "#f08c00", bg: "#fff3bf",
      text: "Downstream = B + S | Upstream = B - S\nB = (Down+Up)/2 | S = (Down-Up)/2\n\nRound trip time = D/(B+S) + D/(B-S) = 2DB/(B^2-S^2)\nAvg speed round trip = (B^2-S^2)/B\n\nSame dist, diff times:\n  T_up/T_down = (B+S)/(B-S)\n\nBoat speed doubles -> new speeds = (2B+S) & (2B-S)\n  NOT 2(B+S) and 2(B-S)!" },

    // 9. Time & Work (Topic: time-and-work)
    { title: "Time & Work", color: "#c92a2a", bg: "#fff5f5",
      text: "Work = Efficiency x Time\nIf A does in n days -> rate = 1/n per day\nTotal Work = LCM of all given days\nEff = LCM / days | Together = LCM / (sum of eff)\n\nMDH: M1.D1.H1/W1 = M2.D2.H2/W2\nEff ratio = inverse of time ratio\nWages split by EFFICIENCY ratio (not days!)\n\nn days -> (100/n)% per day\nAlternate days: find 2-day cycle work, then count\nx Men = y Women = z Children -> convert to one unit" },

    // 10. Pipes & Cisterns (Topic: pipes-and-cisterns)
    { title: "Pipes & Cisterns", color: "#1864ab", bg: "#d0ebff",
      text: "Fill pipe = +1/a | Leak/outlet = -1/b\nNet rate = 1/a - 1/b | Time = ab/(b-a)\n\nTwo fill pipes: Time = ab/(a+b)\nLeak rate = ab/(b-a) [a=without, b=with leak]\n\nPipe A+B fill in 6h, B+C in 8h, A+C in 12h:\n  2(A+B+C) = 1/6+1/8+1/12 -> solve\n\nAlternate pipes: work per cycle, count cycles\nNet > 0 -> fills | Net < 0 -> empties/never fills" },

    // 11. Percentage (Topic: percentage)
    { title: "Percentage", color: "#1971c2", bg: "#d0ebff",
      text: "x% of y = xy/100 | What % is X of Y = (X/Y) x 100\n% Inc = (New-Old)/Old x 100\n\nSuccessive a% then b%: Net = a+b+ab/100\n+x% then -x% = -(x^2/100)% LOSS always\n\nA is x% more than B: B less by x/(100+x) x 100%\nPrice up x% -> reduce consumption x/(100+x) x 100%\n\nPopulation: P(1+r/100)^n | Depreciation: P(1-r/100)^n\nElection margin% = 2 x Winner% - 100\n1/2=50% 1/3=33.3% 1/4=25% 1/5=20% 1/8=12.5%" },

    // 12. Ratio & Proportion (Topic: ratio-and-proportion)
    { title: "Ratio & Proportion", color: "#2f9e44", bg: "#ebfbee",
      text: "a:b = c:d -> ad = bc (extremes = means product)\nMean Proportional = sqrt(a x c)\nThird Proportional = b^2/a\nFourth Proportional = b.c/a\n\nDivide T in a:b:c -> A's share = a/(a+b+c) x T\nFrac ratios 1/2:1/3:1/4 -> LCM dens -> 6:4:3\n\nCombine: A:B=p:q, B:C=r:s -> LCM(q,r) to merge\nDuplicate ratio = a^2:b^2 | Inverse = b:a\nDirect: A up->B up | Inverse: A up->B down" },

    // 13. Chain Rule (Topic: chain-rule)
    { title: "Chain Rule", color: "#e8590c", bg: "#fff4e6",
      text: "Direct prop: A1/A2 = B1/B2 (same order)\nInverse prop: A1/A2 = B2/B1 (flip right side)\n\nMixed chain: identify each variable as D or I\n  Direct -> same order ratio\n  Inverse -> flipped ratio\n  Multiply all ratios for answer\n\nMDH: M1.D1.H1 = M2.D2.H2 (same work)\nMore men -> fewer days (inverse)\nMore work -> more days (direct)" },

    // 14. Partnership (Topic: partnership)
    { title: "Partnership", color: "#7048e8", bg: "#e5dbff",
      text: "Simple (same time): Profit ratio = Capital ratio\nCompound (diff time): Ratio = C1.T1 : C2.T2\n\nWorking partner: deduct salary first, split rest\nPartner joins late: T = months remaining\nCapital changes: Effective = C1.t1 + C2.t2\n\nA's share = Profit x (A's C.T) / Total(C.T)\nMonthly invest: sum = n(n+1)/2 x monthly amount" },

    // 15. Alligation & Mixture (Topic: alligation-and-mixture)
    { title: "Alligation & Mixture", color: "#e03131", bg: "#ffe3e3",
      text: "Cheaper(C) -- Mean(M) -- Dearer(D)\nRatio C:D = (D-M) : (M-C)\n\nMean price = (C.Qc + D.Qd) / (Qc+Qd)\n\nRemove & Replace (n times):\n  Final pure = V x (1 - x/V)^n\n  x = amount removed, V = total volume\n\nMilk:Water ratio change -> only water changes\nKeep milk constant, find new water needed" },

    // 16. Work & Wages (Topic: work-and-wages)
    { title: "Work & Wages", color: "#0c8599", bg: "#c3fae8",
      text: "Wages split by EFFICIENCY, not days worked\nIf different days worked: split by actual work done\n  Work done = efficiency x days worked\n\nDaily wage = Total / (Men x Days)\nPiece rate: Net = accepted x rate - rejected x penalty\nOvertime: OT rate = normal rate x multiplier\n  Total = base pay + OT hrs x OT rate" },

    // 17. Profit & Loss (Topic: profit-and-loss)
    { title: "Profit & Loss", color: "#862e9c", bg: "#f3d9fa",
      text: "P% = (SP-CP)/CP x 100 | SP = CP x (100+P%)/100\nCP = SP x 100/(100+P%) | L%: use (100-L%)\n\nMP -> Disc -> SP -> compare with CP for P/L%\nMarkup m%, Disc d%: Net P% = (100+m)(100-d)/100 - 100\n\nDishonest dealer: Gain% = (True-False)/False x 100\nCP of X = SP of Y: P% = (X-Y)/Y x 100\nBuy X Get Y Free: D% = Y/(X+Y) x 100\nSame SP, same P%=L%: Always LOSS = P^2/100 %" },

    // 18. Discount (Topic: discount)
    { title: "Discount", color: "#f08c00", bg: "#fff3bf",
      text: "Disc = MP - SP | D% = (Disc/MP) x 100\nSP = MP x (100-D%)/100 | MP = SP x 100/(100-D%)\n\nSuccessive disc d1%, d2%:\n  Equiv = d1 + d2 - d1.d2/100\n  (always LESS than d1+d2)\n\nTo earn P% after D% discount:\n  MP = CP x (100+P%) / (100-D%)\n\nTrue Discount: TD = A.R.T/(100+RT)\nBanker's Disc: BD = A.R.T/100 | BD > TD always" },

    // 19. Simple Interest (Topic: simple-interest)
    { title: "Simple Interest", color: "#c92a2a", bg: "#fff5f5",
      text: "SI = P.R.T/100 | A = P + SI = P(1 + RT/100)\nP = 100.SI/(R.T) | R = 100.SI/(P.T) | T = 100.SI/(P.R)\n\nDoubles: R.T = 100 | N times: R.T = (N-1) x 100\nTime to double = 100/R\n\nTwo amounts A1(T1), A2(T2):\n  SI/yr = (A2-A1)/(T2-T1), P = A1 - SI/yr x T1\n\nSplit sum equal SI: P1/P2 = R2.T2/(R1.T1)\nBorrow & Lend gain = P x (Lend% - Borrow%)/100" },

    // 20. Compound Interest (Topic: compound-interest)
    { title: "Compound Interest", color: "#1971c2", bg: "#d0ebff",
      text: "A = P(1+R/100)^T | CI = A - P\nHalf-yearly: R/2, 2T periods\nQuarterly: R/4, 4T periods\n\nCI-SI (2yr) = P(R/100)^2\nCI-SI (3yr) = P(R/100)^2 x (3+R/100)\n\nRule of 72: doubles in ~72/R years\nDoubles in n yrs -> 4x in 2n, 8x in 3n\n\nDiff rates: A = P(1+R1/100)(1+R2/100)(1+R3/100)\nKey: (1.1)^2=1.21 (1.1)^3=1.331 (0.8)^3=0.512" },

    // 21. Permutation & Combination (Topic: permutation-and-combination)
    { title: "Permutation & Combination", color: "#2f9e44", bg: "#ebfbee",
      text: "n! = n(n-1)...1 | 0!=1 | 5!=120 6!=720 7!=5040\nnPr = n!/(n-r)! (order matters)\nnCr = n!/[r!(n-r)!] (order doesn't) | nCr = nC(n-r)\n\nRepeated letters: n!/(p1!.p2!...)\nCircular: (n-1)! | Necklace: (n-1)!/2\n\nHandshakes = nC2 = n(n-1)/2\nDiagonals = n(n-3)/2\nAt least 1 = Total - None | AND = x | OR = +\nDerangements D(4)=9, D(5)=44" },

    // 22. Probability (Topic: probability)
    { title: "Probability", color: "#e8590c", bg: "#fff4e6",
      text: "P(E) = favorable / total | 0 <= P(E) <= 1\nP(A or B) = P(A)+P(B)-P(A and B)\nP(A and B) = P(A) x P(B) [independent]\nP(not A) = 1-P(A) | P(at least 1) = 1-P(none)\n\n1 coin=2, n coins=2^n | 1 die=6, 2 dice=36\n52 cards: 4 suits x 13 values\n\nOdds a:b -> P = a/(a+b)\nE(X) = Sum[value x probability]\nWithout replacement: prob changes each draw" },

    // 23. Calendar (Topic: calendar)
    { title: "Calendar", color: "#7048e8", bg: "#e5dbff",
      text: "Odd days = total days mod 7\nOrdinary yr = 1 odd day | Leap yr = 2 odd days\n\nCentury odd days: 100->5, 200->3, 300->1, 400->0\nDay codes: 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat\n\nLeap: div4 YES, div100 NO -> Leap\n  div100 YES -> must div400 for Leap\n  1900=Not, 2000=Leap\n\nDay = (century + years + months + day) mod 7\nSame calendar: ordinary +6/+11/+11, leap every 28yr" },

    // 24. Clock (Topic: clock)
    { title: "Clock", color: "#e03131", bg: "#ffe3e3",
      text: "Angle = |30H - 5.5M| (take smaller if >180)\nHour = 0.5 deg/min | Minute = 6 deg/min\n\nHands at angle theta between H and H+1:\n  M = (30H +/- theta) x 2/11\n\n12hr: Overlaps=11, Right angles=22, Straight=11\n24hr: double above | Gap between overlaps = 65m 27s\n\nMirror time = (11-H):(60-M)\nGains x min/hr -> correct again in 720/x hours" },

    // 25. Area (2D Mensuration) (Topic: area)
    { title: "Area (2D Mensuration)", color: "#0c8599", bg: "#c3fae8",
      text: "Rect: A=LB, P=2(L+B) | Sq: A=s^2, diag=s*sqrt2\nTriangle: A=1/2.b.h | Heron: sqrt[s(s-a)(s-b)(s-c)]\nEquilateral: A=(sqrt3/4).a^2, h=(sqrt3/2).a\nCircle: A=pi.r^2, C=2.pi.r | Ring: pi(R^2-r^2)\n\nTrap: 1/2(a+b).h | Rhombus: 1/2.d1.d2\nSector: (theta/360).pi.r^2 | Arc: (theta/360).2.pi.r\n\nPath around rect (width w): outer = 2w(L+B+2w)\nMax rect area for given P: square = (P/4)^2" },

    // 26. Height & Distance (Topic: height-and-distance)
    { title: "Height & Distance", color: "#862e9c", bg: "#f3d9fa",
      text: "tan(theta) = Height/Distance -> h = d.tan(theta)\nsin30=1/2  cos30=sqrt3/2  tan30=1/sqrt3\nsin45=1/sqrt2  cos45=1/sqrt2  tan45=1\nsin60=sqrt3/2  cos60=1/2  tan60=sqrt3\n\nDepression from top = Elevation from bottom\nTwo angles same side: h = d.tanA.tanB/(tanA-tanB)\nShadow: at 45 deg, shadow = height\nLadder/String = hypotenuse -> use sin & cos" },

    // 27. Volume & Surface Area (Topic: volume-and-surface-area)
    { title: "Volume & Surface Area", color: "#f08c00", bg: "#fff3bf",
      text: "Cube: V=a^3, TSA=6a^2, diag=a.sqrt3\nCuboid: V=lbh, TSA=2(lb+bh+lh)\nCylinder: V=pi.r^2.h, CSA=2.pi.r.h, TSA=2.pi.r(r+h)\nCone: V=1/3.pi.r^2.h, l=sqrt(r^2+h^2), CSA=pi.r.l\nSphere: V=4/3.pi.r^3, SA=4.pi.r^2\nHemisphere: V=2/3.pi.r^3, TSA=3.pi.r^2\n\nFrustum: V=(pi.h/3)(R^2+r^2+Rr)\nScale by k: V->k^3, SA->k^2 | Melting: V stays same" },

    // 28. Races & Games (Topic: races-and-games)
    { title: "Races & Games", color: "#c92a2a", bg: "#fff5f5",
      text: "A beats B by Xm in Dm race: Sa:Sb = D:(D-X)\nA beats B by Xm OR Ts: Sb = X/T\nHead start Xm for dead heat: D/(D-X) = Sa/Sb\n\nTransitive: A beats B by X, B beats C by Y\n  A beats C = X + Y - XY/D\n\nCircular track: same dir meet = Track/(S1-S2)\n  Opp dir meet = Track/(S1+S2)\nGames: points = distance, same formulas" },

    // 29. Series Completion (Topic: series-completion)
    { title: "Series & Patterns", color: "#1971c2", bg: "#d0ebff",
      text: "AP: a(n) = a+(n-1)d | S(n) = n/2[2a+(n-1)d]\nGP: a(n) = a.r^(n-1) | Missing = sqrt(prev x next)\n\nDiff table: D1 constant->AP, D2 constant->quadratic\nPower series: n^2, n^2+1, n(n+1), n^3+1\nPrimes: 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47\n\nFibonacci: F(n) = F(n-1)+F(n-2)\n  1,1,2,3,5,8,13,21,34,55,89\nAlternating: two interleaved sub-series" },

    // 30. Coding-Decoding (Topic: coding-decoding)
    { title: "Coding-Decoding", color: "#2f9e44", bg: "#ebfbee",
      text: "EJOTY anchors: E=5 J=10 O=15 T=20 Y=25\nReverse: A=26 B=25...M=14 N=13...Z=1\nMirror pairs (sum=27): A-Z B-Y C-X...M-N\n\nDetect pattern: write positions, find diffs\nConstant diff -> uniform shift (Caesar cipher)\nSum = 27 each pair -> mirror/opposite coding\nNew pos = (Old + shift - 1) mod 26 + 1\n\nNumber coding: digit operations or position-based\nCondition-based: vowels vs consonants differ" },

    // 31. Blood Relations (Topic: blood-relations)
    { title: "Blood Relations", color: "#e8590c", bg: "#fff4e6",
      text: "Draw family tree: + Male, - Female, === Marriage\nSimplify chains right-to-left:\n  Mother's husband = Father\n  Brother's son = Nephew | Sister's daughter = Niece\n  Son's wife = Daughter-in-law\n\nGeneration levels: +2=Grand, +1=Parent, 0=Self, -1=Child\n\n\"Only son of my mother\" = myself (male)\n\"Only daughter of my father\" = myself (female)\nhe/him/father/son = Male | she/her/mother/daughter = Female" },

    // 32. Seating Arrangement (Topic: seating-arrangement)
    { title: "Seating Arrangement", color: "#7048e8", bg: "#e5dbff",
      text: "Linear: Nth from right = Total - N + 1\nCircular: (N-1)! arrangements, fix 1 then arrange rest\nOpposite seat = current + N/2 (N must be even)\n\nFacing CENTER: Left = Clockwise, Right = Anti-CW\nFacing OUTSIDE: Left = Anti-CW, Right = Clockwise\n  (REVERSED from facing center!)\n\nTwo rows facing each other: left/right = own perspective\nFix definite clues first, then apply constraints" },

    // 33. Syllogisms (Topic: syllogisms)
    { title: "Syllogisms", color: "#e03131", bg: "#ffe3e3",
      text: "4 types: A(All) E(No) I(Some) O(Some-not)\nAll A are B -> A inside B | No A are B -> separate\n\nChains: A+A=A | A+E=E | I+A=I | I+E=O\nAll+Some = NO conclusion | Some+Some = NO conclusion\n\nConversion: All->Some(reverse) | No->No(reverse)\nSome->Some(reverse) | Some-not -> NO conversion\nTRAP: All A are B does NOT mean All B are A\n\n\"Only A are B\" = All B are A\n\"Not all A are B\" = Some A are not B" },

    // 34. Direction Problems (Topic: direction-problems)
    { title: "Direction Problems", color: "#0c8599", bg: "#c3fae8",
      text: "8 dirs: N NE E SE S SW W NW (45 deg apart)\nRight = CW 90 deg: N->E->S->W->N\nLeft = Anti-CW 90 deg: N->W->S->E->N\nOpposite: flip N<->S, E<->W (NE<->SW)\n\nDistance = sqrt(x^2 + y^2)\n  x = net East(+)/West(-), y = net North(+)/South(-)\nTriplets: 3,4,5 | 5,12,13 | 8,15,17\n\nShadows: Morning sun=E, shadow=W | Evening reversed\nMorning shadow left -> facing North" },

    // 35. Logical Puzzles (Topic: logical-puzzles)
    { title: "Logical Puzzles", color: "#862e9c", bg: "#f3d9fa",
      text: "Elimination table: cross off impossible, one per row/col\nContrapositive: If A->B then NOT B->NOT A (VALID)\nInverse: NOT A->NOT B (INVALID)\n\nOrdering: chain comparisons through linking elements\n  A>B, B>C -> A>B>C (need N-1 links for N items)\n\nSelection: \"If A then B\" -> pick A -> must pick B\n  Contrapositive: drop B -> must drop A\n\"At least one\" = OR | \"At most one\" = not both\n\"Exactly one\" = XOR (one in, one out)" },

    // Bonus summary box
    { title: "Quick Conversion & Constants", color: "#1864ab", bg: "#d0ebff",
      text: "pi = 22/7 = 3.14159 | sqrt2 = 1.414 | sqrt3 = 1.732\n1 km = 1000m | 1 hr = 3600s | 1 km/h = 5/18 m/s\nlog2=0.301 log3=0.477 log5=0.699 log7=0.845\n\nCommon Pythagorean triplets:\n  3,4,5 | 5,12,13 | 7,24,25 | 8,15,17\n\nSquare tricks: (a5)^2 = a(a+1)|25\nCubes: 1,8,27,64,125,216,343,512,729,1000" }
  ],

  types: []
};
