module.exports = {
  title: "PROBABILITY — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Basic Probability",
      color: "#2f9e44", bg: "#ebfbee",
      text: "P(E) = Favorable outcomes / Total outcomes\n\n0 <= P(E) <= 1\nP(certain) = 1, P(impossible) = 0\nSample space S = set of all possible outcomes\n\nWHY: Probability = how many ways event\n  can happen out of all equally likely ways.\n\nEx: 1 die, P(even)=3/6=1/2 (2,4,6 of 6)" },
    { title: "Addition Rule (OR)",
      color: "#1971c2", bg: "#d0ebff",
      text: "P(A or B) = P(A) + P(B) - P(A and B)\nP(A ∪ B)  = P(A) + P(B) - P(A ∩ B)\n\nMutually Exclusive: P(A ∩ B) = 0\n  -> P(A ∪ B) = P(A) + P(B)\n\nWHY: Adding P(A)+P(B) double-counts the\n  overlap, so subtract P(A∩B) once.\n\nEx: P(K)=4/52, P(H)=13/52, P(K∩H)=1/52\n  P(K or H) = 4+13-1 = 16/52 = 4/13" },
    { title: "Multiplication Rule (AND)",
      color: "#e8590c", bg: "#fff4e6",
      text: "Independent: P(A ∩ B) = P(A) x P(B)\nDependent:   P(A ∩ B) = P(A) x P(B|A)\n\nIndependent = one event doesn't affect other\nDependent = outcome changes next probability\n\nWHY: For both A AND B to happen, A must\n  happen first, then B given A happened.\n\nEx: 2 coins, P(HH)=1/2 × 1/2 = 1/4" },
    { title: "Complement & Conditional",
      color: "#7048e8", bg: "#e5dbff",
      text: "P(not A) = 1 - P(A)\nP(at least 1) = 1 - P(none)\n\nConditional: P(A|B) = P(A ∩ B) / P(B)\nBayes: P(A|B) = P(B|A).P(A) / P(B)\n\nWHY: All outcomes sum to 1, so\n  P(not A) = 1 - P(A). Complement\n  avoids listing many cases.\n\nEx: P(at least 1H in 3 coins)\n  = 1 - P(TTT) = 1 - 1/8 = 7/8" },
    { title: "Sample Space Quick Reference",
      color: "#e03131", bg: "#ffe3e3",
      text: "1 Coin = 2    n Coins = 2^n\n1 Die  = 6    2 Dice  = 36\n1 Deck = 52 cards (4 suits x 13)\n\nnCr heads in n tosses: P = nCr / 2^n\n2 dice sum=7: 6 ways, sum=2 or 12: 1 way\n\nWHY: Each coin has 2 outcomes, each die 6.\n  n coins = 2×2×...n times = 2^n.\n\nEx: 3 coins → 2^3=8 total outcomes" },
    { title: "Odds & Expected Value",
      color: "#0c8599", bg: "#c3fae8",
      text: "Odds in favor  = P(E) : P(E') = a : b\nOdds against   = P(E') : P(E) = b : a\nIf odds = a:b -> P(E) = a/(a+b)\n\nExpected Value E(X) = Sum[x_i . P(x_i)]\n\nWHY: Odds compare success to failure,\n  not success to total. P converts via a/(a+b).\n\nEx: Odds 3:5 → P = 3/(3+5) = 3/8" }
  ],

  types: [
    { num: "1", title: "Basic Probability",
      color: "#2f9e44", bg: "#ebfbee",
      q: "A bag contains 4 red, 3 blue, and 5 green balls. If one ball is drawn at random, what is the probability that it is blue?",
      tree: "LOGIC:\nStep 1: Total = 4+3+5 = 12, Blue = 3\nStep 2: P = favorable/total = 3/12\n\nTRICK:\nP(blue) = blue/total = 3/12 = 1/4\n\n  ┌──── Bag (12 balls) ─────┐\n  │ ●●●●  ○○○  ◎◎◎◎◎       │\n  │ 4Red  3Blue 5Green      │\n  └─────────────────────────┘\n\nAnswer: P(blue) = 1/4 ✓" },

    { num: "2", title: "Coin Toss (n Coins)",
      color: "#1971c2", bg: "#d0ebff",
      q: "If 3 coins are tossed simultaneously, what is the probability of getting exactly 2 heads?",
      tree: "LOGIC:\nStep 1: Total = 2³ = 8\n  2H cases: HHT, HTH, THH = 3\nStep 2: P = 3/8\n\nTRICK:\nP(r heads in n tosses) = nCr / 2^n\n= 3C2/8 = 3/8\n(use nCr for any coin problem)\n\n        Coin1  Coin2  Coin3\n  HHT:   H      H      T  ✓\n  HTH:   H      T      H  ✓\n  THH:   T      H      H  ✓\n  3 of 8 outcomes → 3/8\n\nAnswer: P(exactly 2H) = 3/8 ✓" },

    { num: "3", title: "Dice (Sum of 2 Dice)",
      color: "#e8590c", bg: "#fff4e6",
      q: "Two dice are thrown simultaneously. What is the probability that the sum of the numbers on the dice equals 7?",
      tree: "LOGIC:\nStep 1: Total = 36\n  Sum=7: (1,6)(2,5)(3,4)(4,3)(5,2)(6,1)\n  = 6 favorable\nStep 2: P = 6/36 = 1/6\n\nTRICK:\nSum=7 always has 6 ways (maximum!)\nSum:  2  3  4  5  6  7  8  9 10 11 12\nWays: 1  2  3  4  5  6  5  4  3  2  1\n\nAnswer: P(sum=7) = 1/6 ✓" },

    { num: "4", title: "Card Problems (52 Deck)",
      color: "#7048e8", bg: "#e5dbff",
      q: "One card is drawn at random from a standard 52-card deck. What is the probability that it is either a King or a Heart?",
      tree: "LOGIC:\nStep 1: Kings=4, Hearts=13\n  Overlap = King of Hearts = 1\nStep 2: P = 4/52+13/52-1/52 = 16/52\n\nTRICK:\nP(A or B) = P(A)+P(B)-P(A∩B)\nAlways subtract overlap!\n16/52 = 4/13\n\nAnswer: P(King or Heart) = 4/13 ✓" },

    { num: "5", title: "P(A or B) Addition Rule",
      color: "#e03131", bg: "#ffe3e3",
      q: "The probability of passing Math is 0.7, English is 0.8, and both is 0.6. What is the probability of passing at least one subject?",
      tree: "LOGIC:\nStep 1: P(M∪E) = P(M)+P(E)-P(M∩E)\nStep 2: = 0.7+0.8-0.6 = 0.9\n\nTRICK:\nVenn: M only=0.1, Both=0.6, E only=0.2\nP(at least one) = 1-P(neither)\n= 1-0.1 = 0.9\n\n  |M only|Both|E only| Neither\n  | 0.1  |0.6 | 0.2  | = 0.1\n\nAnswer: P(at least one) = 0.9 ✓" },

    { num: "6", title: "P(A and B) Independent Events",
      color: "#c92a2a", bg: "#fff5f5",
      q: "A coin is tossed and a die is rolled simultaneously. What is the probability of getting a Head on the coin and a 6 on the die?",
      tree: "LOGIC:\nStep 1: Independent → multiply\n  P(H) = 1/2, P(6) = 1/6\nStep 2: P(H∩6) = 1/2 × 1/6 = 1/12\n\nTRICK:\nIndependent events → just multiply!\nP(A and B) = P(A) × P(B)\n= 1/2 × 1/6 = 1/12\n\n  Coin[H,T]  ×  Die[1-6]\n   1/2       ×   1/6\n   = 1/12 (total = 2×6=12)\n\nAnswer: P(Head and 6) = 1/12 ✓" },

    { num: "7", title: "Complement P(not A)",
      color: "#0c8599", bg: "#c3fae8",
      q: "A coin is tossed 3 times. What is the probability of getting at least one head?",
      tree: "LOGIC:\nStep 1: P(all tails) = (1/2)³ = 1/8\nStep 2: P(at least 1H) = 1-1/8 = 7/8\n\nTRICK:\nAt least 1 = 1 - P(none)\nP(none) = (1/2)^n for coins\n= 1 - (1/2)³ = 7/8\n(never calculate all cases directly!)\n\n  |▓▓▓▓▓▓▓▓▓▓▓▓▓▓|░░|\n  |  at least 1H  |TTT|\n  |    7/8        |1/8|\n\nAnswer: P(at least 1H) = 7/8 ✓" },

    { num: "8", title: "Conditional Probability P(A|B)",
      color: "#862e9c", bg: "#f3d9fa",
      q: "Two dice are thrown. Given that the sum is greater than 7, what is the probability that both dice show a number greater than or equal to 5?",
      tree: "LOGIC:\nStep 1: B=sum>7 → 15 outcomes of 36\n  A∩B = both>=5 AND sum>7\n  = (5,5)(5,6)(6,5)(6,6) = 4\nStep 2: P(A|B) = 4/15\n\nTRICK:\nP(A|B) = P(A∩B)/P(B)\nNew sample space = given condition\nJust count within reduced space\n= 4/15\n\n  Given: sum>7 (15 outcomes)\n  ┌──────────────────────┐\n  │ (5,5)(5,6)(6,5)(6,6) │ ← both>=5\n  │ + 11 other combos    │\n  └──────────────────────┘\n  P = 4/15\n\nAnswer: P(both>=5 | sum>7) = 4/15 ✓" },

    { num: "9", title: "Balls Without Replacement",
      color: "#f08c00", bg: "#fff3bf",
      q: "A bag contains 5 red and 3 blue balls. If 2 balls are drawn one after another without replacement, what is the probability that both are red?",
      tree: "LOGIC:\nStep 1: P(R1) = 5/8, P(R2|R1) = 4/7\nStep 2: P(both R) = 5/8 × 4/7 = 20/56\n\nTRICK:\nCombination method:\n5C2/8C2 = 10/28 = 5/14\n(often faster than sequential)\n\n  Without replacement → prob changes!\n  5/8 then 4/7, NOT 5/8 again\n\nAnswer: P(both red) = 5/14 ✓" },

    { num: "10", title: "At Least One / At Most One",
      color: "#2f9e44", bg: "#ebfbee",
      q: "A die is rolled 3 times. What is the probability of getting at least one 6?",
      tree: "LOGIC:\nStep 1: P(not 6) = 5/6 per roll\n  P(no 6 in 3) = (5/6)³ = 125/216\nStep 2: P(at least one) = 1-125/216\n  = 91/216\n\nTRICK:\nP(at least 1) = 1 - P(none)^n\n= 1 - (5/6)³ = 91/216\n(always use complement for 'at least')\n\nAnswer: P(at least one 6) = 91/216 ✓" },

    { num: "11", title: "All Same (Consecutive Events)",
      color: "#1971c2", bg: "#d0ebff",
      q: "A coin is tossed 5 times. What is the probability that all tosses show the same face?",
      tree: "LOGIC:\nStep 1: All H = (1/2)^5 = 1/32\n  All T = (1/2)^5 = 1/32\nStep 2: P = 1/32+1/32 = 2/32 = 1/16\n\nTRICK:\nP(all same) = 2/2^n = 1/2^(n-1)\n= 1/2^4 = 1/16\nFor dice: 6/6^k = 1/6^(k-1)\n\n  HHHHH → 1/32\n       OR (+)\n  TTTTT → 1/32\n  Total = 2/32 = 1/16\n\nAnswer: P(all same) = 1/16 ✓" },

    { num: "12", title: "Odds in Favor / Against",
      color: "#e8590c", bg: "#fff4e6",
      q: "If the probability of winning a game is 3/8, what are the odds in favor of winning and the odds against winning?",
      tree: "LOGIC:\nStep 1: P(win)=3/8, P(lose)=5/8\nStep 2: Favor = 3:5, Against = 5:3\n\nTRICK:\nP = p/q → Odds = p:(q-p)\n3/8 → 3:(8-3) = 3:5\nOdds a:b → P = a/(a+b)\n\n  |✓ ✓ ✓ | ✗ ✗ ✗ ✗ ✗|\n  |favor  | against  |\n\nAnswer: Favor 3:5, Against 5:3 ✓" },

    { num: "13", title: "Expected Value",
      color: "#7048e8", bg: "#e5dbff",
      q: "A game costs Rs.10 to play. You roll a die: if you get a 6 you win Rs.50, otherwise you win nothing. Is it worth playing based on expected value?",
      tree: "LOGIC:\nStep 1: E(X) = 50×(1/6) + 0×(5/6)\n  = 50/6 = Rs.8.33\nStep 2: Net = 8.33-10 = -1.67 (loss)\n\nTRICK:\nE(X) = Sum[value × probability]\nIf E(X) < cost → don't play!\n8.33 < 10 → expected loss\n\n  Outcome | Value | Prob\n  ────────┼───────┼──────\n  Roll 6  |  50   | 1/6\n  Others  |   0   | 5/6\n  E(X) = 8.33 < 10 cost\n\nAnswer: Net = -Rs.1.67 (loss) ✓" },

    { num: "14", title: "Birthday Problem",
      color: "#e03131", bg: "#ffe3e3",
      q: "In a group of 23 people, what is the probability that at least 2 people share the same birthday?",
      tree: "LOGIC:\nStep 1: P(all diff) for 23 people\n  = 365/365 × 364/365 × ... × 343/365\n  = 0.493\nStep 2: P(shared) = 1-0.493 = 0.507\n\nTRICK:\nBirthday Paradox: only 23 for >50%!\nn:  23→50.7%  30→70.6%  50→97%\nP(all diff) = 365!/(365^n × (365-n)!)\n\n  n  | P(shared)\n  ───┼──────────\n  23 |  50.7%\n  30 |  70.6%\n  50 |  97.0%\n  70 |  99.9%\n\nAnswer: P(shared bday) = 50.7% ✓" },

    { num: "15", title: "Geometric Probability (Area)",
      color: "#c92a2a", bg: "#fff5f5",
      q: "A square has side 10 cm with a circle of radius 3 cm drawn at its center. If a point is chosen at random inside the square, what is the probability that it lies inside the circle?",
      tree: "LOGIC:\nStep 1: Circle area = 9pi\n  Square area = 100\nStep 2: P = 9pi/100 = 0.2827\n\nTRICK:\nP = favorable area / total area\nInscribed circle (r=s/2): P = pi/4\n\n  ┌──────────────┐\n  │  (  . . .  ) │ Circle r=3\n  │              │\n  └──────────────┘ Square = 100\n\nAnswer: P = 9pi/100 ~ 0.283 ✓" }
  ],

  traps: "TRAP 1: OR means ADD, AND means MULTIPLY. Don't mix them up!\nTRAP 2: Without replacement changes denominator AND numerator! 5/8 then 4/7, NOT 5/8 again.\nTRAP 3: At least one = 1 - P(none), NOT just P(one).\nTRAP 4: King of Hearts is BOTH King AND Heart. Subtract overlap in P(K or H)!\nTRAP 5: For 2 dice: (3,4) and (4,3) are DIFFERENT. Total = 36, not 21.\nTRAP 6: Independent vs Dependent: use P(A).P(B) only when independent!\nTRAP 7: Odds 3:5 means P = 3/8, NOT 3/5! Odds a:b -> P = a/(a+b).\nTRAP 8: P(A|B) != P(B|A). Conditional probability is NOT symmetric.",

  qref: " #  | Type                           | Formula / Trick\n-----+--------------------------------+------------------------------------------\n  1  | Basic probability              | P(E) = favorable / total\n  2  | Coin toss (n coins)            | Total = 2^n, nCr for r heads\n  3  | Dice (sum of 2 dice)           | 36 outcomes, sum 7 = 6 ways\n  4  | Card problems (52 deck)        | 4 suits x 13, subtract overlap\n  5  | P(A or B) Addition Rule        | P(A) + P(B) - P(A ∩ B)\n  6  | P(A and B) Independent         | P(A) x P(B)\n  7  | Complement P(not A)            | 1 - P(A), at least 1 = 1 - P(none)\n  8  | Conditional P(A|B)             | P(A ∩ B) / P(B)\n  9  | Balls without replacement      | Prob changes: 5/8 then 4/7\n 10  | At least one / at most one     | 1 - P(none), use complement\n 11  | All same (consecutive)         | All H(n) = (1/2)^n\n 12  | Odds in favor / against        | a:b -> P = a/(a+b)\n 13  | Expected value                 | E(X) = Sum[x_i . P(x_i)]\n 14  | Birthday problem               | 23 people -> 50.7% same bday\n 15  | Geometric probability          | P = favorable area / total area"
};
