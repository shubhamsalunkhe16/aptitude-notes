module.exports = {
  title: "SYLLOGISMS — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "The Four Standard Propositions",
      color: "#1971c2", bg: "#d0ebff",
      text: "A-type: All A are B   (Universal Affirmative)\nE-type: No A are B    (Universal Negative)\nI-type: Some A are B  (Particular Affirmative)\nO-type: Some A not B  (Particular Negative)\n\nREMEMBER: A E I O\n  All, nEgative, partIcular, Opposite" },
    { title: "Venn Diagram Patterns",
      color: "#2f9e44", bg: "#ebfbee",
      text: "All A are B  → A circle INSIDE B circle\nSome A are B → A and B OVERLAP\nNo A are B   → A and B SEPARATE\nSome A not B → Part of A OUTSIDE B\n\nAll A are B: A ⊆ B (subset)\nNo A are B:  A ∩ B = {} (disjoint)" },
    { title: "Valid Conclusion Chains",
      color: "#e8590c", bg: "#fff4e6",
      text: "All+All = All    (A+A=A)\nAll+No  = No     (A+E=E)\nSome+All = Some  (I+A=I)\nSome+No = Some-not (I+E=O)\n\nAll+Some = NO conclusion\nSome+Some = NO conclusion\nMiddle term MUST be distributed!" },
    { title: "Conversion Rules",
      color: "#7048e8", bg: "#e5dbff",
      text: "All A are B  → Some B are A (A→I)\nNo A are B   → No B are A   (E→E)\nSome A are B → Some B are A (I→I)\nSome A not B → NO conversion (O→X)\n\nTRAP: All A are B ≠ All B are A\nOnly: All A are B → Some B are A" },
    { title: "Distribution Table",
      color: "#e03131", bg: "#ffe3e3",
      text: "Proposition  | Subject | Predicate\nAll S are P  |   YES   |    NO\nNo S are P   |   YES   |   YES\nSome S are P |   NO    |    NO\nSome S not P |   NO    |   YES\n\nUniversal → Subject distributed\nNegative  → Predicate distributed" },
    { title: "Modern Format Translations",
      color: "#0c8599", bg: "#c3fae8",
      text: "\"Only A are B\"      = All B are A\n\"Only a few A are B\" = Some A are B\n                     + Some A are not B\n\"At least some A are B\" = Some A are B\n\"Not all A are B\"   = Some A are not B\n\nAlways convert to A/E/I/O first!" }
  ],

  types: [
    { num: "1", title: "All A are B (Venn Diagram)",
      color: "#2f9e44", bg: "#ebfbee",
      q: "Given the statement \"All cats are animals,\" draw the Venn diagram and find all valid inferences.",
      tree: "LOGIC:\nStep 1: All cats are animals -> cats inside animals\nStep 2: Every cat is an animal (guaranteed)\nStep 3: But not every animal is a cat\n\n  ┌──────────────┐\n  │ B (Animals)  │\n  │ ┌──────────┐ │\n  │ │ A (Cats) │ │\n  │ └──────────┘ │\n  └──────────────┘\n\nTRICK:\nA-type -> converse is I-type only.\nAll A are B -> Some B are A (NEVER All B are A)\n\nAnswer: Some B are A follows ✓" },

    { num: "2", title: "Some A are B (Venn Diagram)",
      color: "#1971c2", bg: "#d0ebff",
      q: "Given the statement \"Some students are athletes,\" draw the Venn diagram and find all valid inferences.",
      tree: "LOGIC:\nStep 1: Some overlap between A and B\nStep 2: Part of A is in B, part outside\nStep 3: Cannot conclude All or No\n\n  ┌────┐  ┌────┐\n  │ A  ├──┤ B  │\n  │    │XX│    │\n  └────┘  └────┘\n\nTRICK:\nI-type converts to I-type.\nSome A are B -> Some B are A (always valid).\nNever upgrade to All!\n\nAnswer: Some B are A follows ✓" },

    { num: "3", title: "No A are B (Venn Diagram)",
      color: "#e8590c", bg: "#fff4e6",
      q: "Given the statement \"No dogs are cats,\" draw the Venn diagram and find all valid inferences.",
      tree: "LOGIC:\nStep 1: No overlap between dogs and cats\nStep 2: Completely separate circles\nStep 3: Symmetric: No B are A also true\n\n  ┌────┐    ┌────┐\n  │ A  │    │ B  │\n  │    │    │    │\n  └────┘    └────┘\n\nTRICK:\nE-type converts to E-type.\nNo A are B -> No B are A (symmetric).\n\"Some A are B\" contradicts this!\n\nAnswer: No B are A follows ✓" },

    { num: "4", title: "All+All -> All Conclusion",
      color: "#7048e8", bg: "#e5dbff",
      q: "Given: All roses are flowers, and all flowers are plants. Does the conclusion \"All roses are plants\" logically follow?",
      tree: "LOGIC:\nStep 1: Roses inside Flowers\nStep 2: Flowers inside Plants\nStep 3: Roses inside Plants (transitive)\n\n  ┌────────────────┐\n  │ C (Plants)     │\n  │ ┌────────────┐ │\n  │ │ B(Flowers) │ │\n  │ │ ┌────┐     │ │\n  │ │ │A(Ro)│    │ │\n  │ │ └────┘     │ │\n  │ └────────────┘ │\n  └────────────────┘\n\nTRICK:\nA+A=A chain. All+All = All.\nA inside B inside C -> A inside C.\n\nAnswer: All roses are plants ✓" },

    { num: "5", title: "Some+All -> Some Conclusion",
      color: "#e03131", bg: "#ffe3e3",
      q: "Given: Some pens are pencils, and all pencils are erasers. Does the conclusion \"Some pens are erasers\" logically follow?",
      tree: "LOGIC:\nStep 1: Some pens overlap with pencils\nStep 2: All pencils are inside erasers\nStep 3: Overlapping part is inside erasers too\n\n  ┌──────────────┐\n  │ C (Erasers)  │\n  │ ┌──────────┐ │\n  │ │B(Pencil) │ │\n  └─│──┌──┐────│─┘\n    └──│XX│────┘\n  ┌────│  │──┐\n  │ A  └──┘  │ (Pens)\n  └──────────┘\n\nTRICK:\nI+A=I. Some+All = Some.\nNever upgrades to All!\n\nAnswer: Some pens are erasers ✓" },

    { num: "6", title: "All+No -> No Conclusion",
      color: "#c92a2a", bg: "#fff5f5",
      q: "Given: All birds are animals, and no animals are stones. Does the conclusion \"No birds are stones\" logically follow?",
      tree: "LOGIC:\nStep 1: Birds inside Animals\nStep 2: Animals and Stones separate\nStep 3: Birds also separate from Stones\n\n  ┌──────────────┐\n  │ B (Animals)  │  ┌──────────┐\n  │ ┌──────────┐ │  │C(Stones) │\n  │ │A(Birds)  │ │  └──────────┘\n  │ └──────────┘ │\n  └──────────────┘\n\nTRICK:\nA+E=E. All+No = No.\nIf A is inside B, and B is away from C,\nthen A is also away from C.\n\nAnswer: No birds are stones ✓" },

    { num: "7", title: "Some+No -> Some-not",
      color: "#0c8599", bg: "#c3fae8",
      q: "Given: Some artists are singers, and no singers are dancers. Does the conclusion \"Some artists are not dancers\" logically follow?",
      tree: "LOGIC:\nStep 1: Some artists overlap singers\nStep 2: No singers overlap dancers\nStep 3: That part of artists cannot be dancers\n\n  ┌────────┐\n  │A(Artist)│\n  │ ┌──┐   │   ┌────────┐\n  │ │XX│   │   │C(Dance) │\n  └─│──│───┘   └─────────┘\n    │B │ (Singers)\n    └──┘\n\nTRICK:\nI+E=O. Some+No = Some-not.\nO-type CANNOT be converted!\n\nAnswer: Some artists not dancers ✓" },

    { num: "8", title: "Either-Or (Complementary Pair)",
      color: "#862e9c", bg: "#f3d9fa",
      q: "Given: All A are B, and some C are B. Does \"Some A are C\" follow, or does \"No A are C\" follow, or do we apply the Either-Or rule?",
      tree: "LOGIC:\nStep 1: A inside B, C overlaps B\nStep 2: C may or may not touch A\nStep 3: Neither I nor E is definite alone\n\n  ┌────────┐  ┌────┐\n  │B       │  │ C  │\n  │ ┌──┐   ├──┤    │\n  │ │A │   │XX│    │\n  │ └──┘   ├──┤    │\n  └────────┘  └────┘\n\nTRICK:\nWhen neither I nor E follows alone,\ncheck if they form complementary pair.\nI+E or A+O -> Either/Or.\n\nAnswer: Either/Or applies here ✓" },

    { num: "9", title: "Possibility-Based Questions",
      color: "#f08c00", bg: "#fff3bf",
      q: "Given the statement \"Some cats are dogs,\" is the conclusion \"All cats are dogs\" possible or definite?",
      tree: "LOGIC:\nStep 1: \"Some\" allows partial or full overlap\nStep 2: Case 1: partial overlap (Some but not All)\nStep 3: Case 2: cats fully inside dogs (All)\n\n  Case 1:          Case 2:\n  ┌──┐  ┌──┐     ┌────────┐\n  │C ├──┤D │     │D ┌──┐ │\n  │  │XX│  │     │  │C │ │\n  └──┘  └──┘     │  └──┘ │\n                  └────────┘\n\nTRICK:\nPossible = exists in AT LEAST 1 valid case.\nDefinite = true in ALL valid cases.\nSome allows All -> so All is POSSIBLE.\n\nAnswer: All cats are dogs: possible ✓" },

    { num: "10", title: "Three-Statement Syllogisms",
      color: "#2f9e44", bg: "#ebfbee",
      q: "Given: All A are B, all B are C, and some C are D. Does \"All A are C\" follow? Does \"Some A are D\" follow?",
      tree: "LOGIC:\nStep 1: A inside B inside C -> All A are C ✓\nStep 2: D overlaps C, but may not touch A\nStep 3: Some A are D: NOT definite\n\n  ┌──────────────────┐\n  │ C       ┌───┐   │\n  │ ┌─────┐ │ D │   │\n  │ │ B   │ └───┘   │\n  │ │ ┌─┐ │         │\n  │ │ │A│ │         │\n  │ │ └─┘ │         │\n  │ └─────┘         │\n  └──────────────────┘\n\nTRICK:\nChain All first (A+A=A). Then check Some.\nAll+Some = NO definite conclusion.\n\nAnswer: Only \"All A are C\" follows ✓" },

    { num: "11", title: "Definite vs Possible Conclusions",
      color: "#1971c2", bg: "#d0ebff",
      q: "Given: All pens are books, and some books are toys. Is the conclusion \"Some pens are toys\" definite or only possible?",
      tree: "LOGIC:\nStep 1: Pens inside Books, Toys overlaps Books\nStep 2: Case 1: Toys touches Pens area -> true\nStep 3: Case 2: Toys avoids Pens area -> false\nStep 4: Not ALL cases -> NOT definite\n\n  Case 1:         Case 2:\n  ┌────────┐     ┌────────┐\n  │B       │     │B       │\n  │┌─┐ ┌─┐│     │┌─┐    ││┌─┐\n  ││P│-│T││     ││P│    ││ T│\n  │└─┘ └─┘│     │└─┘    │└──┘\n  └────────┘     └────────┘\n\nTRICK:\nAll+Some = no definite conclusion.\nBut POSSIBLE since one case supports it.\n\nAnswer: Possible, not definite ✓" },

    { num: "12", title: "Only / Only a few / At least some",
      color: "#e8590c", bg: "#fff4e6",
      q: "Given: Only a few dogs are cats, and only cats are pets. Does the conclusion \"Some dogs are pets\" logically follow?",
      tree: "LOGIC:\nStep 1: \"Only a few D are C\" = I+O\n  (Some D are C AND Some D are not C)\nStep 2: \"Only C are P\" = All P are C\nStep 3: P inside C, D overlaps C\n  -> P may or may not overlap D\n\n  ┌────────────┐\n  │ C (Cats)   │\n  │ ┌──┐ ┌──┐ │  ┌──────┐\n  │ │P │ │XX│ │──│D(Dog)│\n  │ └──┘ └──┘ │  └──────┘\n  └────────────┘\n\nTRICK:\nTranslate modern format to A/E/I/O first!\n\"Only A are B\" = All B are A (reversed).\n\nAnswer: Some D are P: POSSIBLE only ✓" }
  ],

  traps: "TRAP 1: \"All A are B\" does NOT mean \"All B are A\" — only \"Some B are A\" follows\nTRAP 2: \"Some A are not B\" (O-type) CANNOT be converted — no valid converse exists\nTRAP 3: Two particular premises (Some+Some) → NO definite conclusion ever\nTRAP 4: \"Only A are B\" means \"All B are A\" (REVERSE!) — not \"All A are B\"\nTRAP 5: Confusing POSSIBLE with DEFINITE — possible=CAN be true, definite=MUST be true\nTRAP 6: Forgetting Either-Or rule — if neither I nor E follows, check complementary pair\nTRAP 7: \"All A are B\" makes \"Some A are B\" DEFINITE, not just possible\nTRAP 8: Middle term not distributed (Some+Some, All+Some) → nothing definite follows",

  qref: " #  │ Type                           │ Formula / Trick\n────┼────────────────────────────────┼──────────────────────────────────────────\n  1 │ All A are B (Venn)             │ A inside B; Some B are A (converse)\n  2 │ Some A are B (Venn)            │ Overlap; Some B are A (converse)\n  3 │ No A are B (Venn)              │ Separate; No B are A (converse)\n  4 │ All+All → All conclusion       │ A+A=A chain; middle term inside\n  5 │ Some+All → Some conclusion     │ I+A=I; never upgrades to All\n  6 │ All+No → No conclusion         │ A+E=E; completely excluded\n  7 │ Some+No → Some-not             │ I+E=O; O cannot be converted!\n  8 │ Either-Or (complementary)      │ I/E or A/O pair when neither follows\n  9 │ Possibility questions          │ Can diagram support it? ≥1 case = yes\n 10 │ Three-statement syllogisms     │ Chain All first, then check Some overlap\n 11 │ Definite vs Possible           │ ALL cases=definite, SOME=possible\n 12 │ Only/Only a few/At least some  │ Translate to standard A/E/I/O first"
};
