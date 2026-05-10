module.exports = {
  title: "BLOOD RELATIONS — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Family Tree Symbols", color: "#1971c2", bg: "#d0ebff",
      text: "+ = Male    - = Female    ? = Unknown\n═══ = Marriage (couple)\n│   = Parent-Child\n┌┴┐ = Siblings\n\n  [+Father] ═══ [-Mother]\n       │\n  ┌────┼────┐\n [+Son] [-Dau] [+Son]" },
    { title: "Relation Shortcuts", color: "#2f9e44", bg: "#d8f5a2",
      text: "Mother's husband = Father\nFather's wife = Mother\nBrother's/Sister's son = Nephew\nBrother's/Sister's daughter = Niece\nSon's wife = Daughter-in-law\nDaughter's husband = Son-in-law\nWife's brother = Brother-in-law" },
    { title: "Generation Levels", color: "#7048e8", bg: "#e5dbff",
      text: "Gen +2: Grandfather, Grandmother\nGen +1: Father, Mother, Uncle, Aunt\nGen  0: Self, Brother, Sister, Spouse\nGen -1: Son, Daughter, Nephew, Niece\nGen -2: Grandson, Granddaughter\n\nParent word = UP 1, Child word = DOWN 1" },
    { title: "'Only' Keyword Patterns", color: "#e03131", bg: "#ffe3e3",
      text: "\"only son of my mother\" = myself(M)\n\"only daughter of my father\" = myself(F)\n\"only child\" = no siblings\n\"only son\" = no brothers\n\"only daughter\" = no sisters\n\nGENDER: he/him/father/son = Male\n        she/her/mother/daughter = Female" }
  ],

  types: [
    { num: "1", title: "Basic Relations", color: "#2f9e44", bg: "#ebfbee",
      q: "A is the father of B, and C is the mother of B. How is A related to C?",
      tree: "LOGIC:\nStep 1: A is father of B (A=male parent)\nStep 2: C is mother of B (C=female parent)\nStep 3: Both are parents of same child\n\n  [+A] ═══ [-C]\n     │\n    [B]\n\nTRICK:\nTwo parents of same child = married\nFather + Mother of X = Husband + Wife\n\nAnswer: A is husband of C ✓" },

    { num: "2", title: "Single Statement Deduction", color: "#1971c2", bg: "#d0ebff",
      q: "Radha said, \"He is the husband of my mother.\" How is the man related to Radha?",
      tree: "LOGIC:\nStep 1: Radha's mother = some woman\nStep 2: Husband of that woman = Radha's father\n\n  [+Man] ═══ [-Mother]\n      │\n   [-Radha]\n\nTRICK:\nReplace chain: mother's husband = Father\n(memorize relation shortcuts table)\n\nAnswer: The man is Radha's Father ✓" },

    { num: "3", title: "Chain of Relations", color: "#e8590c", bg: "#fff4e6",
      q: "Reema said, \"He is the son of the wife of my brother.\" How is the boy related to Reema?",
      tree: "LOGIC:\nStep 1: Brother's wife = sister-in-law\nStep 2: Sister-in-law's son = brother's son\nStep 3: Brother's son = nephew\n\n  [-Reema] [+Brother] ═══ [-Wife]\n                │\n             [+Boy]\n\nTRICK:\nSimplify chain right-to-left:\nwife of brother = brother (same family)\nson of brother = Nephew\n\nAnswer: The boy is Reema's Nephew ✓" },

    { num: "4", title: "Coded Relations", color: "#7048e8", bg: "#e5dbff",
      q: "In a coded relation, '+' means 'father of' and '-' means 'mother of'. If the expression is P + Q - R, how is P related to R?",
      tree: "LOGIC:\nStep 1: P + Q = P is father of Q\nStep 2: Q - R = Q is mother of R\nStep 3: P(male) -> Q(female) -> R\n\n  [+P] -> [-Q] -> [R]\n\nTRICK:\nCount generations: P is 2 above R\nQ is mother = maternal side\nMale + 2 gen + maternal = maternal grandfather\n\nAnswer: P is maternal grandfather of R ✓" },

    { num: "5", title: "Pointing to Photograph", color: "#e03131", bg: "#ffe3e3",
      q: "Pointing to a photo, Ravi said, \"He is the son of the only son of my mother.\" How is the person in the photo related to Ravi?",
      tree: "LOGIC:\nStep 1: \"only son of my mother\" = Ravi himself\nStep 2: \"son of Ravi\" = the person in photo\n\n  [-Mother]\n      │\n   [+Ravi]  <- only son = Ravi!\n      │\n   [+Person]\n\nTRICK:\n\"Only son/daughter of my mother/father\"\n= always refers to SELF\nThen read remaining relation from self.\n\nAnswer: Person is Ravi's Son ✓" },

    { num: "6", title: "Build Tree from Statements", color: "#c92a2a", bg: "#fff5f5",
      q: "Mr. and Mrs. Shah have two children: Arti and Sourabh. Sourabh is married to Ritu, and they have a daughter Shruti. How is Arti related to Shruti?",
      tree: "LOGIC:\nStep 1: Mr.Shah + Mrs.Shah -> Arti, Sourabh\nStep 2: Sourabh + Ritu -> Mukti, Shruti\nStep 3: Arti is Sourabh's sister\nStep 4: Shruti's father's sister = Aunt\n\n  [+Mr.Shah] ═══ [-Mrs.Shah]\n  ┌────┴────┐\n[-Arti] [+Sourabh] ═══ [-Ritu]\n             │\n        [-Shruti]\n\nTRICK:\nFather's sister = Bua/Aunt (always)\n\nAnswer: Arti is Aunt of Shruti ✓" },

    { num: "7", title: "Gender Determination", color: "#0c8599", bg: "#c3fae8",
      q: "A said to B, \"You are the son of my father's wife.\" If A has no siblings, how is B related to A?",
      tree: "LOGIC:\nStep 1: Father's wife = A's mother\nStep 2: Son of A's mother = A's brother\nStep 3: A has no siblings -> must be A!\nStep 4: \"son\" -> B is male\n\n  [+Father] ═══ [-Mother]\n       │\n      [A] <- only child\n\nTRICK:\nNo siblings + parent's child = SELF\nGender from keyword: \"son\" = Male\n\nAnswer: B is A himself ✓" },

    { num: "8", title: "Generation-Based", color: "#862e9c", bg: "#f3d9fa",
      q: "A is the grandfather of B. C is the father of B. D is the son of A. How are C and D related to each other?",
      tree: "LOGIC:\nStep 1: A = grandfather(Gen +2)\nStep 2: C = father of B (Gen +1)\nStep 3: D = son of A (Gen +1)\nStep 4: C and D both sons of A\n\n      [+A]       <- Gen +2\n  ┌────┴────┐\n [+C]     [+D]   <- Gen +1\n  │\n [B]             <- Gen 0\n\nTRICK:\nSame parent + same generation = Siblings\n\nAnswer: C and D are Brothers ✓" },

    { num: "9", title: "Trace the Path", color: "#f08c00", bg: "#fff3bf",
      q: "Meena said, \"He is the son of my father's only daughter.\" If Meena has no sisters, how is Meena related to the boy?",
      tree: "LOGIC:\nStep 1: Father's only daughter = Meena\nStep 2: Son of Meena = the boy\n\n  [+Father]\n      │\n    [-Meena]  <- only daughter\n      │\n    [+Boy]\n\nTRICK:\n\"only daughter of my father\" = myself(F)\nReplace and read: \"son of myself\"\n= my son. So Meena is his Mother.\n\nAnswer: Meena is the boy's Mother ✓" },

    { num: "10", title: "Marriage-Based Relations", color: "#2f9e44", bg: "#ebfbee",
      q: "Ramesh is the son-in-law of Suresh. Mahesh is Ramesh's brother, and Priya is Mahesh's wife. How is Priya related to Suresh?",
      tree: "LOGIC:\nStep 1: Ramesh = son-in-law of Suresh\n  -> Ramesh married Suresh's daughter\nStep 2: Mahesh = Ramesh's brother\nStep 3: Priya = Mahesh's wife\nStep 4: Priya has no blood link to Suresh\n\n  [+Suresh] -> [-Daughter] ═══ [+Ramesh]\n  [+Mahesh] ═══ [-Priya]\n\nTRICK:\nIn-law relations don't extend beyond\nthe direct marriage link.\n\nAnswer: No direct blood relation ✓" },

    { num: "11", title: "Only Child / No Siblings", color: "#1971c2", bg: "#d0ebff",
      q: "Sita said, \"His mother is the only daughter of my mother.\" How is Sita related to the man?",
      tree: "LOGIC:\nStep 1: \"only daughter of my mother\" = Sita\nStep 2: His mother = Sita\nStep 3: Sita is mother of the man\n\n  [-Sita's Mother]\n       │\n    [-Sita]    <- only daughter\n       │\n    [+Man]\n\nTRICK:\n\"only daughter/son of my X\" = myself\nReplace: \"his mother is me\"\n= I am his mother.\n\nAnswer: Sita is the man's Mother ✓" },

    { num: "12", title: "6-Member Family Puzzle", color: "#e8590c", bg: "#fff4e6",
      q: "In a family, P and Q are married. R is their son, S is their daughter, and T is R's brother. U is the wife of R. How is U related to S?",
      tree: "LOGIC:\nStep 1: P+Q married -> R,T(sons), S(daughter)\nStep 2: U = wife of R\nStep 3: S is R's sister\nStep 4: U is wife of S's brother\n\n  [+P] ═══ [-Q]\n  ┌──┼──┐\n[+R][+T][-S]   [+R] ═══ [-U]\n\nTRICK:\nBrother's wife = Sister-in-law (always)\nNo further chain needed.\n\nAnswer: U is Sister-in-law of S ✓" }
  ]
};
