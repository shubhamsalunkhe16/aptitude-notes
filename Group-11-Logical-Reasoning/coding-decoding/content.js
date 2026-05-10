module.exports = {
  title: "CODING-DECODING — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Alphabet Position Table (Forward)",
      color: "#2f9e44", bg: "#ebfbee",
      text: "A=1   B=2   C=3   D=4   E=5   F=6   G=7   H=8   I=9\nJ=10  K=11  L=12  M=13  N=14  O=15  P=16  Q=17  R=18\nS=19  T=20  U=21  V=22  W=23  X=24  Y=25  Z=26\n\nQuick trick: EJOTY -> E=5, J=10, O=15, T=20, Y=25" },
    { title: "Reverse Alphabet Table (A=26, Z=1)",
      color: "#1971c2", bg: "#d0ebff",
      text: "A=26  B=25  C=24  D=23  E=22  F=21  G=20  H=19  I=18\nJ=17  K=16  L=15  M=14  N=13  O=12  P=11  Q=10  R=9\nS=8   T=7   U=6   V=5   W=4   X=3   Y=2   Z=1\n\nReverse position = 27 - Forward position" },
    { title: "Mirror/Opposite Letter Pairs",
      color: "#e8590c", bg: "#fff4e6",
      text: "A<->Z   B<->Y   C<->X   D<->W   E<->V\nF<->U   G<->T   H<->S   I<->R   J<->Q\nK<->P   L<->O   M<->N\n\nOpposite letter: position + new position = 27" },
    { title: "Common Shift Patterns",
      color: "#7048e8", bg: "#e5dbff",
      text: "+1 shift: A->B, B->C, ... Z->A (Caesar cipher)\n+2 shift: A->C, B->D, ... Y->A, Z->B\n-1 shift: A->Z, B->A, C->B, ... Z->Y\n\nFormula: New = (Old + N - 1) mod 26 + 1\nWrap: After Z comes A; Before A comes Z" },
    { title: "Coding Logic Detection Strategy",
      color: "#e03131", bg: "#ffe3e3",
      text: "1. Write positions of original and coded letters\n2. Find difference for each letter\n3. Constant diff? -> Uniform shift\n4. Increasing diff? -> Position-based shift\n5. Sum = 27? -> Mirror/opposite coding\n6. Vowels != Consonants? -> Condition-based\n7. No letter pattern? -> Number/symbol substitution" }
  ],

  types: [
    { num: "1", title: "Letter Shifting (Uniform)",
      color: "#2f9e44", bg: "#ebfbee",
      q: "In a certain coding system, if CAT is coded as DBU, how will the word DOG be coded using the same rule?",
      tree: "LOGIC:\nStep 1: Find shift: C(3)->D(4), A(1)->B(2), T(20)->U(21)\nStep 2: Each letter shifted by +1\nStep 3: Apply to DOG: D->E, O->P, G->H\n\nTRICK:\nAll diffs same? Uniform shift!\nJust add +1 to each letter of DOG.\nWrap-around: Z+1=A\n\nAnswer: EPH ✓" },

    { num: "2", title: "Reverse Alphabet Coding",
      color: "#1971c2", bg: "#d0ebff",
      q: "In a certain coding system, if COME is coded as XLNV, how will the word BOND be coded using the same rule?",
      tree: "LOGIC:\nStep 1: C(3)+X(24)=27, O(15)+L(12)=27\nStep 2: M(13)+N(14)=27, E(5)+V(22)=27\nStep 3: Rule: each pair sums to 27\n\nTRICK:\nAll sums = 27? Mirror coding!\nFormula: New = 27 - Old position\nB(2)->Y(25) O(15)->L(12) N(14)->M(13) D(4)->W(23)\n\nAnswer: YLMW ✓" },

    { num: "3", title: "Letter-Number Substitution",
      color: "#e8590c", bg: "#fff4e6",
      q: "In a certain coding system, if CAT is coded as 24 and DOG is coded as 26, what is the code for PIG?",
      tree: "LOGIC:\nStep 1: CAT: C(3)+A(1)+T(20) = 24 ✓\nStep 2: DOG: D(4)+O(15)+G(7) = 26 ✓\nStep 3: Rule = sum of positions\n\nTRICK:\nWord -> Number? Try SUM of positions first!\nPIG: P(16)+I(9)+G(7) = 32\n(Also check: product, sum+/-len, sum x2)\n\nAnswer: 32 ✓" },

    { num: "4", title: "Word-to-Word Coding",
      color: "#7048e8", bg: "#e5dbff",
      q: "In a certain coding system, if APPLE is coded as BQQMF, how will the word MANGO be coded using the same rule?",
      tree: "LOGIC:\nStep 1: A->B(+1) P->Q(+1) P->Q(+1)\nStep 2: L->M(+1) E->F(+1)\nStep 3: All +1 uniform shift\n\nTRICK:\nDecode the given pair FIRST, find rule.\nApply SAME rule to new word.\nMANGO +1: M->N A->B N->O G->H O->P\n\nAnswer: NBOHP ✓" },

    { num: "5", title: "Condition-Based Coding",
      color: "#e03131", bg: "#ffe3e3",
      q: "In a coding system, each vowel is replaced by the next letter in the alphabet, and each consonant is replaced by the previous letter. What is the code for BOARD?",
      tree: "LOGIC:\nStep 1: B(cons)->prev->A, O(vow)->next->P\nStep 2: A(vow)->next->B, R(cons)->prev->Q\nStep 3: D(cons)->prev->C\n\nTRICK:\nSplit word: mark V/C above each letter.\nV: shift one way, C: shift other way.\nBOARD -> APBQC\n\nAnswer: APBQC ✓" },

    { num: "6", title: "Mirror Image Coding (A<->Z)",
      color: "#c92a2a", bg: "#fff5f5",
      q: "In a certain coding system, if HELLO is coded as SVOOL, how will the word WORLD be coded using the same rule?",
      tree: "LOGIC:\nStep 1: H+S=27, E+V=27, L+O=27\nStep 2: L+O=27, O+L=27 -> all sum to 27\nStep 3: Mirror coding confirmed\n\nTRICK:\nMirror is SELF-INVERSE: encode = decode!\nFormula: New = 27 - Old\nW->D O->L R->I L->O D->W\n\nAnswer: DLIOW ✓" },

    { num: "7", title: "Numeric Coding (Word->Number)",
      color: "#0c8599", bg: "#c3fae8",
      q: "In a certain coding system, if ROAD is coded as 5312 and SHIRT is coded as 64850, what is the code for THIS?",
      tree: "LOGIC:\nStep 1: ROAD=5312: R=5,O=3,A=1,D=2\nStep 2: SHIRT=64850: S=6,H=4,I=8,R=5,T=0\nStep 3: R=5 in both -> consistent ✓\n\nTRICK:\nBuild letter->number map from given pairs.\nSame letter MUST map to same number!\nTHIS: T=0, H=4, I=8, S=6\n\nAnswer: 0486 ✓" },

    { num: "8", title: "Symbol/Operator Coding",
      color: "#862e9c", bg: "#f3d9fa",
      q: "If '+' means multiplication, '-' means division, 'x' means subtraction, and '/' means addition, what is the value of 8+6-3x2/1?",
      tree: "LOGIC:\nStep 1: Replace ALL symbols first\n  8 + 6 - 3 x 2 / 1\n  8 x 6 / 3 - 2 + 1\nStep 2: BODMAS: 48/3 - 2 + 1 = 15\n\nTRICK:\nWrite substitution table on side.\nReplace ALL at once, THEN solve.\nTRAP: Don't solve while replacing!\n\nAnswer: 15 ✓" },

    { num: "9", title: "Sentence-Based Coding",
      color: "#f08c00", bg: "#fff3bf",
      q: "In a coded language, 'go home' is written as 'la pa' and 'come home fast' is written as 'na pa ta'. What is the code for 'go'?",
      tree: "LOGIC:\nStep 1: Common word \"home\" in both\nStep 2: Common code \"pa\" in both\nStep 3: home = pa. From \"go home\"=\"la pa\"\n  -> go = la\n\nTRICK:\nFind COMMON words -> COMMON codes\nEliminate known -> find unknown\nAlways start with the shortest sentence.\n\nAnswer: go = la ✓" },

    { num: "10", title: "Mixed Letter-Number Coding",
      color: "#2f9e44", bg: "#ebfbee",
      q: "In a certain coding system, if DARK is coded as D1R11, how will the word LAMP be coded using the same rule?",
      tree: "LOGIC:\nStep 1: D->D(stay) A->1(pos) R->R(stay) K->11(pos)\nStep 2: Consonants stay as letters\nStep 3: Vowels replaced by position number\n\nTRICK:\nSplit into vowels vs consonants.\nVowels -> position number, Consonants -> same\nLAMP: L(stay) A(1) M(stay) P(stay)\n\nAnswer: L1MP ✓" },

    { num: "11", title: "Position-Based Shift (+1,+2,+3...)",
      color: "#1971c2", bg: "#d0ebff",
      q: "In a coding system, each letter is shifted forward by its position in the word (1st letter +1, 2nd letter +2, and so on). What is the code for BEST?",
      tree: "LOGIC:\nStep 1: B(2)+1=C, E(5)+2=G\nStep 2: S(19)+3=V, T(20)+4=X\n\nTRICK:\nDiffs increasing? Position-based shift!\n1st letter +1, 2nd +2, 3rd +3, ...\nBEST -> CGVX\n(Variants: +1,+2,+3 or -1,-2,-3)\n\nAnswer: CGVX ✓" },

    { num: "12", title: "Reverse Word + Shift Combo",
      color: "#e8590c", bg: "#fff4e6",
      q: "In a coding system, the word is first reversed and then each letter is shifted forward by 1. What is the code for HELP?",
      tree: "LOGIC:\nStep 1: Reverse HELP -> PLEH\nStep 2: Shift +1 each: P->Q L->M E->F H->I\n\nTRICK:\nFor uniform shift, order doesn't matter.\nYou can shift first then reverse (same result).\nHELP -> PLEH -> QMFI\n\nAnswer: QMFI ✓" }
  ]
};
