module.exports = {
  title: "LOGICAL PUZZLES — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Core Logical Reasoning Rules", color: "#2f9e44", bg: "#ebfbee",
      text: "Elimination Table: Cross off impossible cells row-by-row\nMatrix/Grid: One cell per row/col = TRUE (Sudoku rule)\n\nContrapositive: If A → B, then NOT B → NOT A (VALID)\nInverse Fallacy: If A → B, NOT A → NOT B (INVALID!)\nConverse Fallacy: If A → B, B → A (INVALID!)\n\nIf exactly one lies → N-1 statements are consistent\nIf exactly one is true → N-1 statements are false\n\nWHY: Contrapositive preserves the logical chain;\n  reversing without negating breaks it.\n  If A→B→C, then ~C→~B→~A.\n\nEx: If rain→wet, then ~wet→~rain ✓\n  But ~rain→~wet ✗ (sprinkler could cause wet)" },
    { title: "Ordering & Comparison Rules", color: "#1971c2", bg: "#d0ebff",
      text: "A > B, B > C  →  A > B > C  (Transitive chain)\n\"A is taller than B\" → A > B\n\"A is not the tallest\" → someone > A\n\nFor N items: Need at least N-1 comparisons\nDefinite rank only if chain is unbroken\nFloor numbering: Bottom=1, Top=N (unless stated)\n\nWHY: Transitivity links pairs through a shared\n  element. N items need N-1 links to form a\n  complete chain with no gaps.\n\nEx: P>Q, Q>R, R>S → P>Q>R>S (3 links, 4 items)\n  Rank: P=1st, Q=2nd, R=3rd, S=4th" },
    { title: "Selection & Constraint Rules", color: "#e8590c", bg: "#fff4e6",
      text: "\"At least one of A,B\" → A or B or both\n\"At most one of A,B\" → not both; 0 or 1\n\"Exactly one of A,B\" → XOR (one in, one out)\n\"If A then B\" → A selected → B must be selected\n\"A and B not together\" → pick A → drop B\n\"A only if B\" → A → B (A requires B)\n\nTRICK: Convert all rules to IF-THEN + contrapositive\n\nWHY: IF-THEN chains let you derive forced picks\n  and eliminations. Contrapositive doubles each\n  rule's power (~B → ~A).\n\nEx: If A→B and B→C: pick A → must pick B,C\n  Contrapositive: drop C → must drop B,A" },
    { title: "Argument & Cause-Effect Rules", color: "#7048e8", bg: "#e5dbff",
      text: "Strong Argument: Directly related, logical, realistic\nWeak Argument: Vague, emotional, personal, extreme\n\nCause-Effect types:\n  A causes B | B causes A | Independent\n  Common cause (3rd factor) | Both are effects\n\nTEST: \"Does A necessarily lead to B?\"\nCorrelation ≠ Causation!\n\nWHY: Strong arguments stand on evidence and\n  logic; weak ones rely on feelings or extremes.\n  Causation requires a mechanism, not just timing.\n\nEx: \"Umbrellas sold ↑ and floods ↑\" → NOT cause;\n  common cause = rain. Correlation ≠ Causation." },
    { title: "Input-Output Machine Rules", color: "#e03131", bg: "#ffe3e3",
      text: "Step 1: Compare Input → Step I → what changed?\nStep 2: Compare Step I → Step II → what changed?\nStep 3: Identify PATTERN (sort, swap, rotate, etc.)\n\nCommon: smallest to front (selection sort),\n  swap adjacent (bubble sort), alternating ends\n\nTRICK: Count how many elements change per step\n  If only 1 moves → find which and where\n\nWHY: Each step applies the SAME rule. Identify\n  the rule from 2 consecutive steps, then apply\n  it forward to predict any future step.\n\nEx: Input: 7 3 5 1 → Step I: 1 7 3 5\n  Pattern: smallest moves to front (selection sort)" }
  ],

  types: [
    { num: "1", title: "Floor/Building Puzzle", color: "#2f9e44", bg: "#ebfbee",
      q: "Four people P, Q, R, S live on floors 1 to 4 (one on each floor). P is not on the 1st or 4th floor. Q lives above P. S lives on the 1st floor. Who lives on which floor?",
      tree: "LOGIC:\nStep 1: S=F1 (given)\nStep 2: P not 1,4 -> P=F2 or F3\nStep 3: Q above P -> if P=F2, Q=F3 or F4\nStep 4: R fills remaining -> R=F4\n\n  F4: R\n  F3: Q\n  F2: P\n  F1: S\n\nTRICK:\nFix definite clues first (S=F1).\nApply constraints to narrow remaining.\n\nAnswer: S=F1, P=F2, Q=F3, R=F4 ✓" },

    { num: "2", title: "Scheduling Puzzle", color: "#1971c2", bg: "#d0ebff",
      q: "Five people A, B, C, D, E each play a sport on a different day from Monday to Friday. A plays on Wednesday, E on Friday. B plays before A but after C. D does not play on Thursday. Who plays on which day?",
      tree: "LOGIC:\nStep 1: A=Wed, E=Fri (fixed)\nStep 2: C < B < A(Wed) -> C,B in Mon,Tue\nStep 3: C before B -> C=Mon, B=Tue\nStep 4: D=Thu (only slot left)\n\n  Mon  Tue  Wed  Thu  Fri\n  ─┬────┬────┬────┬────┬─\n   C    B    A    D    E\n\nTRICK:\nFix known positions first.\nChain inequalities to order the rest.\nC < B < Wed -> C,B = Mon,Tue\n\nAnswer: C,B,A,D,E = Mon-Fri ✓" },

    { num: "3", title: "Ordering/Ranking Puzzle", color: "#e8590c", bg: "#fff4e6",
      q: "Five students P, Q, R, S, T have different heights. P is taller than Q, T is taller than R who is taller than S, and Q is taller than T. Arrange them from tallest to shortest.",
      tree: "LOGIC:\nStep 1: P>Q and Q>T -> P>Q>T\nStep 2: T>R>S (given)\nStep 3: Merge: P>Q>T>R>S\n\n  P--→Q--→T--→R--→S\n  1st 2nd 3rd 4th 5th\n\nTRICK:\nFind the linking element (Q,T appear twice).\nChain through links to build full order.\n\nAnswer: P, Q, T, R, S ✓" },

    { num: "4", title: "Comparison Puzzle", color: "#7048e8", bg: "#e5dbff",
      q: "Among six people, B is taller than A who is taller than C, D is the tallest, and C is taller than E who is taller than F. Who is the 3rd tallest?",
      tree: "LOGIC:\nStep 1: B>A>C and C>E>F -> B>A>C>E>F\nStep 2: D is tallest -> D first\nStep 3: Full: D>B>A>C>E>F\n\n  D──→B──→A──→C──→E──→F\n  1st 2nd 3rd 4th 5th 6th\n      (tallest → shortest)\n\nTRICK:\nPlace the absolute clue first (D=tallest).\nMerge chains via common element (C).\n3rd position = A.\n\nAnswer: 3rd tallest = A ✓" },

    { num: "5", title: "Grid/Matrix Puzzle", color: "#e03131", bg: "#ffe3e3",
      q: "Three people A, B, C each own one pet (cat, dog, fish) and drink one beverage (tea, coffee, milk). A does not own the cat. The coffee drinker owns the dog. B drinks tea. Who owns the fish?",
      tree: "LOGIC:\nStep 1: B=Tea -> B!=Coffee -> B!=Dog\nStep 2: Coffee->dog (linked pair)\nStep 3: A!=Cat, try A=Dog -> A=Coffee\nStep 4: C=Cat+Milk, B=Fish+Tea\n\n       Cat  Dog  Fish | Tea Cof Milk\n  A  |  x    ✓    x  |  x   ✓   x\n  B  |  x    x    ✓  |  ✓   x   x\n  C  |  ✓    x    x  |  x   x   ✓\n\nTRICK:\nUse elimination grid (cross off impossible).\nLinked pairs (coffee->dog) reduce 2 at once.\nSudoku rule: one per row, one per column.\n\nAnswer: Fish owner = B ✓" },

    { num: "6", title: "True/False (Liar Puzzle)", color: "#c92a2a", bg: "#fff5f5",
      q: "Among three people A, B, C, exactly one is a liar. A says \"B lies,\" B says \"C lies,\" and C says \"A lies.\" Who is the liar?",
      tree: "LOGIC:\nStep 1: Assume A lies -> B truths -> C lies\n  -> 2 liars. Contradiction! ✗\nStep 2: Assume B lies -> A,C truth ✓\nStep 3: Assume C lies -> A truths -> B lies\n  -> 2 liars. Contradiction! ✗\n\n  Assume | A  B  C | Liars | OK?\n  A lies | L  T  L |   2   |  ✗\n  B lies | T  L  T |   1   |  ✓\n  C lies | T  L  L |   2   |  ✗\n\nTRICK:\nTest each person as the liar.\nOnly 1 assumption gives consistent result.\nExactly one liar = N-1 must agree.\n\nAnswer: B is the liar ✓" },

    { num: "7", title: "Conditional Logic", color: "#0c8599", bg: "#c3fae8",
      q: "If it rains, the ground gets wet. If the ground is wet, the match gets cancelled. The match was not cancelled. What can you conclude?",
      tree: "LOGIC:\nStep 1: Rain->Wet->Cancelled (chain)\nStep 2: NOT Cancelled (given)\nStep 3: Contrapositive: ~Cancel->~Wet->~Rain\n\n  Rain ──→ Wet ──→ Cancelled\n  ~Rain ←─ ~Wet ←─ ~Cancelled (given)\n\nTRICK:\nContrapositive: reverse chain + negate ALL.\nA->B, ~B => ~A (Modus Tollens)\nINVALID: ~A->~B or B->A\n\nAnswer: It did NOT rain ✓" },

    { num: "8", title: "Selection with Constraints", color: "#862e9c", bg: "#f3d9fa",
      q: "A team of 3 must be selected from P, Q, R, S, T, U. Rules: if P is selected then Q must be selected, R and S cannot both be selected, and at least one of T or U must be included. How many valid teams are possible?",
      tree: "LOGIC:\nStep 1: Rules: P->Q, NOT(R+S), T or U\nStep 2: If P in -> Q in, 3rd from {T,U}\n  -> {P,Q,T} {P,Q,U}\nStep 3: P out -> pick 3 with T or U,\n  no R+S together\n\n  P ──→ Q (must follow)\n  R ──✗── S (cannot both)\n  T ──or── U (at least one)\n\nTRICK:\nConvert all rules to IF-THEN.\nCase-split on most constrained variable.\nP in: 2 teams. P out: 7 teams.\n\nAnswer: Total valid teams = 9 ✓" },

    { num: "9", title: "Age-Based Puzzle", color: "#f08c00", bg: "#fff3bf",
      q: "The sum of the ages of A and B is 50 years, and A is 10 years older than B. What was the ratio of their ages 5 years ago?",
      tree: "LOGIC:\nStep 1: A+B=50, A=B+10\nStep 2: (B+10)+B=50 -> 2B=40 -> B=20, A=30\nStep 3: 5 yrs ago: A=25, B=15\nStep 4: Ratio = 25:15 = 5:3\n\n  Timeline:\n  5 yrs ago    Now\n  A: 25 ──────→ 30    diff=10\n  B: 15 ──────→ 20    (constant)\n  Ratio: 5:3\n\nTRICK:\nAge DIFFERENCE never changes!\nSum=50, Diff=10 -> A=(50+10)/2=30, B=(50-10)/2=20\nFormula: (S+D)/2 and (S-D)/2\n\nAnswer: Ratio = 5:3 ✓" },

    { num: "10", title: "Input-Output Machine", color: "#2f9e44", bg: "#ebfbee",
      q: "An input-output machine receives the input: 45 13 67 29 8 51. In each step, it places the next smallest number in its correct position. What is the arrangement after Step IV?",
      tree: "LOGIC:\nStep 1: Input: 45 13 67 29 8 51\nStep 2: Each step picks smallest unsorted\n  I:  [8] 45 13 67 29 51\n  II: 8 [13] 45 67 29 51\n  III:8 13 [29] 45 67 51\n  IV: 8 13 29 [45] 51 67\n\nTRICK:\nPattern = selection sort (pick next min).\nCount steps = count unsorted elements - 1.\n\nAnswer: Step IV = 8 13 29 45 51 67 ✓" },

    { num: "11", title: "Strong vs Weak Argument", color: "#1971c2", bg: "#d0ebff",
      q: "Statement: \"Should schools go online-only?\" Three arguments are given: (1) It saves travel time, (2) Not all students have internet access, (3) My friend prefers it. Which arguments are strong and which are weak?",
      tree: "LOGIC:\nStep 1: Arg1 \"Saves travel time\" -> logical ✓\nStep 2: Arg2 \"Not all have internet\" -> valid ✓\nStep 3: Arg3 \"My friend prefers it\" -> personal ✗\n\n  Checklist:  Logical? Relevant? Realistic?\n  Arg1 (time):  ✓        ✓         ✓  STRONG\n  Arg2 (access):✓        ✓         ✓  STRONG\n  Arg3 (friend):✗        ✗         -  WEAK\n\nTRICK:\nSTRONG = logical + relevant + realistic\nWEAK = vague / personal / extreme / emotional\n\"Against\" arguments CAN be strong!\n\nAnswer: Arg1 STRONG, Arg2 STRONG, Arg3 WEAK ✓" },

    { num: "12", title: "Cause and Effect", color: "#e8590c", bg: "#fff4e6",
      q: "Statement A: \"The city banned plastic bags.\" Statement B: \"Shopkeepers started using cloth bags.\" What is the cause-and-effect relationship between these two statements?",
      tree: "LOGIC:\nStep 1: A->B? Ban plastic -> cloth bags? YES ✓\nStep 2: B->A? Cloth bags -> ban? Not necessarily ✗\nStep 3: Time order: ban first, then alternative\n\n  A (Ban plastic) ──→ B (Use cloth bags)\n       cause              effect\n  [time: A happens first, B follows]\n\nTRICK:\nTest: Does A logically FORCE B to happen?\nCheck time order: cause always BEFORE effect.\n5 types: A->B, B->A, independent, common cause,\nboth effects of 3rd factor.\n\nAnswer: A is cause, B is effect ✓" }
  ]
};
