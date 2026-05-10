# Syllogisms - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### The Four Standard Propositions

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  A-type (Universal Affirmative):  All A are B                       │
│  E-type (Universal Negative):    No A are B                         │
│  I-type (Particular Affirmative): Some A are B                      │
│  O-type (Particular Negative):   Some A are not B                   │
│                                                                     │
│  REMEMBER: A E I O  →  All, nEgative, partIcular, Opposite         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Venn Diagram Patterns for All 4 Propositions

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  All A are B:          Some A are B:                                │
│  ┌──────────────┐      ┌─────┐  ┌─────┐                            │
│  │ B  ┌────┐    │      │  A  ├──┤  B  │                            │
│  │    │ A  │    │      │     │XX│     │                            │
│  │    └────┘    │      └─────┘  └─────┘                            │
│  └──────────────┘       (overlap region)                            │
│  A is INSIDE B         A and B OVERLAP                              │
│                                                                     │
│  No A are B:           Some A are not B:                            │
│  ┌────┐   ┌────┐       ┌──────────┐                                │
│  │ A  │   │ B  │       │ B  ┌───┐ │  ┌───┐                        │
│  │    │   │    │       │    │ A │ │──│ A │                        │
│  └────┘   └────┘       │    └───┘ │  └───┘                        │
│  SEPARATE circles      Part of A is OUTSIDE B                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Valid Conclusion Rules Table

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Statement 1  +  Statement 2   →   Valid Conclusion                 │
│  ─────────────────────────────────────────────────────               │
│  All A are B  +  All B are C   →   All A are C  ✓                   │
│  All A are B  +  No B are C    →   No A are C  ✓                    │
│  Some A are B +  All B are C   →   Some A are C  ✓                  │
│  Some A are B +  No B are C    →   Some A are not C  ✓              │
│  All A are B  +  Some B are C  →   NO definite conclusion           │
│  Some A are B +  Some B are C  →   NO definite conclusion           │
│                                                                     │
│  RULE: Middle term (B) must be distributed at least once!           │
│  Distributed = covers ALL members (All/No distribute subject/pred)  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Either-Or Rule and Possibility Rules

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  EITHER-OR RULE (Complementary Pair):                               │
│  If NEITHER "Some A are B" NOR "No A are B" follows definitively,   │
│  then: "Either 'Some A are B' or 'No A are B'" follows.            │
│  (I and E are complementary. O and A are complementary.)            │
│                                                                     │
│  POSSIBILITY RULES:                                                 │
│  ─────────────────                                                  │
│  "All A are B" given → "Some A are B" is DEFINITE (not possible)    │
│  "Some A are B" given → "All A are B" is POSSIBLE                   │
│  "No A are B" given → "All A are B" is NOT possible                 │
│  No relation given → ANYTHING is possible                           │
│                                                                     │
│  KEY: "Possible" = Can the Venn diagram be drawn that way?          │
│       "Definite" = Must it ALWAYS be true in every valid diagram?   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Distribution Table

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Proposition    │ Subject    │ Predicate                            │
│  ───────────────┼────────────┼──────────                            │
│  All S are P    │ Distributed│ NOT distributed                      │
│  No S are P     │ Distributed│ Distributed                          │
│  Some S are P   │ NOT dist.  │ NOT distributed                      │
│  Some S not P   │ NOT dist.  │ Distributed                          │
│                                                                     │
│  REMEMBER: Universal → Subject distributed                          │
│            Negative  → Predicate distributed                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Conversion Rules

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  All A are B   →  Some B are A  (A converts to I, NOT to A)         │
│  No A are B    →  No B are A    (E converts to E)                   │
│  Some A are B  →  Some B are A  (I converts to I)                   │
│  Some A not B  →  NO conversion possible (O cannot convert!)        │
│                                                                     │
│  TRAP: "All A are B" does NOT mean "All B are A"                    │
│  Only: "All A are B" → "Some B are A" ✓                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Syllogism Solving Framework

```
           SYLLOGISM = Logical deduction from 2+ statements
          /                    |                       \
         /                     |                        \
   STATEMENTS              VENN DIAGRAM              CONCLUSIONS
   (Given facts)           (Draw ALL               (Test each one
    treated as TRUE)        valid cases)             against diagram)

   STEP-BY-STEP METHOD:
   ─────────────────────
   Step 1: Read statements. Treat them as 100% true (even if absurd).
   Step 2: Draw Venn diagram showing the relationship.
           For ambiguous cases, try MINIMUM + MAXIMUM overlap.
   Step 3: Check each conclusion against the diagram.
           DEFINITE → true in ALL valid diagrams
           POSSIBLE → true in AT LEAST ONE valid diagram

   GOLDEN RULE:
   ┌─────────────────────────────────────────────────┐
   │  The middle term must be DISTRIBUTED at least   │
   │  once in the premises for a valid deduction.    │
   │                                                 │
   │  "All A are B + All B are C" → B distributed    │
   │  "Some A are B + Some B are C" → B NOT dist.    │
   │    → No valid conclusion possible!              │
   └─────────────────────────────────────────────────┘
```

---

## Type 1: All A are B (Universal Affirmative — Venn Diagram)

**Q: Statement: "All cats are animals." Draw the Venn diagram and identify valid inferences.**

```
  Venn Diagram for "All A are B":

  ┌──────────────────┐
  │  B (Animals)     │
  │    ┌──────┐      │
  │    │A(Cat)│      │
  │    └──────┘      │
  └──────────────────┘

  A is completely INSIDE B.
  Every member of A is also a member of B.

  Valid inferences:
    ✓ Some A are B (if A exists)
    ✓ Some B are A (converse)
    ✗ All B are A  (WRONG! Animals ≠ all cats)

  TRICK: "All A are B" means A ⊆ B
  Draw A circle fully inside B circle.
  = Answer: Some B are A follows ✓
```

---

## Type 2: Some A are B (Particular Affirmative — Venn Diagram)

**Q: Statement: "Some students are athletes." Draw the Venn diagram and identify valid inferences.**

```
  Venn Diagram for "Some A are B":

  ┌─────┐   ┌─────┐
  │  A  │───│  B  │
  │     │ X │     │
  └─────┘   └─────┘
        overlap

  A and B have an OVERLAPPING region.
  At least one member is in both A and B.

  Valid inferences:
    ✓ Some B are A (converse — always valid)
    ✗ All A are B  (WRONG — only "some")
    ✗ Some A are not B (WRONG — cannot deduce)

  NOTE: "Some" means "at least one."
  It does NOT mean "not all."
  "All A are B" makes "Some A are B" also true.
  = Answer: Some B are A follows ✓
```

---

## Type 3: No A are B (Universal Negative — Venn Diagram)

**Q: Statement: "No dogs are cats." Draw the Venn diagram and identify valid inferences.**

```
  Venn Diagram for "No A are B":

  ┌─────┐     ┌─────┐
  │  A  │     │  B  │
  │     │     │     │
  └─────┘     └─────┘
     SEPARATE (no overlap)

  A and B are COMPLETELY separate.
  No member belongs to both.

  Valid inferences:
    ✓ No B are A (converse — always valid for E)
    ✓ Some A are not B (if A exists)
    ✓ Some B are not A (if B exists)
    ✗ Some A are B (WRONG — contradicts!)

  TRICK: "No A are B" = "No B are A"
  E-type converts to E-type directly.
  = Answer: No B are A follows ✓
```

---

## Type 4: Two Statements — "All" Conclusion (All A are B + All B are C)

**Q: Statements: "All roses are flowers. All flowers are plants." Conclusion: "All roses are plants" — does it follow?**

```
  ┌──────────────────────────┐
  │  C (Plants)              │
  │    ┌────────────────┐    │
  │    │  B (Flowers)   │    │
  │    │   ┌────────┐   │    │
  │    │   │A(Roses)│   │    │
  │    │   └────────┘   │    │
  │    └────────────────┘    │
  └──────────────────────────┘

  All A ⊆ B, All B ⊆ C → All A ⊆ C ✓

  VALID CHAIN:
  A + A = A  (All + All = All)

  Also valid: Some C are A ✓ (converse)
  NOT valid:  All C are A ✗

  RULE: When both statements are "All",
  and the middle term connects them,
  conclusion is "All" (A+A=A).
  = All roses are plants ✓
```

---

## Type 5: Two Statements — "Some" Conclusion

**Q: Statements: "Some pens are pencils. All pencils are erasers." Conclusion: "Some pens are erasers" — does it follow?**

```
  ┌─────────────────────┐
  │  C (Erasers)        │
  │   ┌──────────┐      │
  │   │B(Pencils)│      │
  │   │   ┌──┐   │      │
  └───│───│XX│───│──────┘
      │   └──┘   │
  ┌───│──────────│──┐
  │   └──────────┘  │
  │  A (Pens)       │
  └─────────────────┘

  Some A are B, All B ⊆ C
  → The part of A that is in B is also in C
  → Some A are C ✓

  VALID CHAIN:
  I + A = I  (Some + All = Some)

  TRICK: "Some" in premise → "Some" in
  conclusion (never upgrade to "All").

  Also valid: Some C are A ✓
  NOT valid:  All A are C ✗
  = Some pens are erasers ✓
```

---

## Type 6: Two Statements — "No" Conclusion

**Q: Statements: "All birds are animals. No animals are stones." Conclusion: "No birds are stones" — does it follow?**

```
  ┌────────────────┐
  │  B (Animals)   │       ┌──────────┐
  │  ┌──────────┐  │       │C(Stones) │
  │  │ A(Birds) │  │       │          │
  │  └──────────┘  │       └──────────┘
  └────────────────┘
     SEPARATE from C

  All A ⊆ B, No B ∩ C
  → A cannot overlap with C
  → No A are C ✓

  VALID CHAIN:
  A + E = E  (All + No = No)

  Also: No C are A ✓ (E converts to E)
  Also: Some A are not C ✓

  RULE: If ALL of group A is in B,
  and B has ZERO overlap with C,
  then A has ZERO overlap with C.
  = No birds are stones ✓
```

---

## Type 7: Negative Conclusions (Some A are not B)

**Q: Statements: "Some artists are singers. No singers are dancers." Conclusion: "Some artists are not dancers" — does it follow?**

```
  ┌─────────┐
  │A(Artists)│
  │  ┌──┐   │      ┌──────────┐
  │  │XX│   │      │C(Dancers)│
  └──│──│───┘      │          │
     │B │          └──────────┘
     │(Singers)
     └──┘
   SEPARATE from C

  Some A are B, No B ∩ C
  → The part of A that is B cannot be C
  → Some A are not C ✓

  VALID CHAIN:
  I + E = O  (Some + No = Some-not)

  CRITICAL: O-type CANNOT be converted!
  "Some A are not C" does NOT mean
  "Some C are not A" (might or might not).
  = Some artists are not dancers ✓
```

---

## Type 8: Either-Or Conclusions (Complementary Pair)

**Q: Statements: "All dogs are pets. All pets are loyal." Conclusions: I. "Some loyal are dogs." II. "No loyal are dogs." Which follows?**

```
  Complementary Pairs:
  ┌──────────────────────────────────┐
  │  I and E are complementary:      │
  │  "Some A are B" vs "No A are B"  │
  │                                  │
  │  A and O are complementary:      │
  │  "All A are B" vs "Some A not B" │
  └──────────────────────────────────┘

  Given: All dogs ⊆ pets ⊆ loyal
  → Some loyal are dogs ✓ (DEFINITE)
  → No loyal are dogs ✗ (WRONG)
  → Conclusion I alone follows ✓

  EITHER-OR APPLIES WHEN:
  Neither I nor E follows definitely on its own
  → Then "Either I or E" follows.

  Example: All A are B. Some C are B.
  "Some A are C" — can't say definitely
  "No A are C" — can't say definitely
  → "Either Some A are C or No A are C" ✓
  = Check if complement pair needed ✓
```

---

## Type 9: Possibility-Based Questions

**Q: Statement: "Some cats are dogs." Conclusion: "All cats are dogs" — is it possible?**

```
  POSSIBILITY vs DEFINITE:
  ┌────────────────────────────────────┐
  │ DEFINITE = MUST be true in every   │
  │   valid Venn diagram               │
  │ POSSIBLE = CAN be true in at least │
  │   one valid Venn diagram           │
  └────────────────────────────────────┘

  "Some cats are dogs" allows:

  Case 1 (partial):    Case 2 (full):
  ┌───┐  ┌───┐        ┌──────────┐
  │ C ├──┤ D │        │ D ┌────┐ │
  │   │XX│   │        │   │ C  │ │
  └───┘  └───┘        │   └────┘ │
                       └──────────┘

  Case 2 shows ALL cats can be dogs!
  → "All cats are dogs" is POSSIBLE ✓
  → But NOT DEFINITE (Case 1 also valid)

  RULES:
  Given "Some A are B" → All A are B: POSSIBLE
  Given "No A are B"   → All A are B: NOT possible
  Given "All A are B"  → Some A are B: DEFINITE
  = "All cats are dogs" is possible ✓
```

---

## Type 10: Three-Statement Syllogisms

**Q: Statements: "All A are B. All B are C. Some C are D." Conclusions: I. "Some A are D." II. "All A are C."**

```
  ┌──────────────────────────────┐
  │  C          ┌───┐            │
  │  ┌───────┐  │   │            │
  │  │  B    │  │ D │            │
  │  │ ┌───┐ │──│   │            │
  │  │ │ A │ │  └───┘            │
  │  │ └───┘ │                   │
  │  └───────┘                   │
  └──────────────────────────────┘

  Step 1: All A ⊆ B → draw A inside B
  Step 2: All B ⊆ C → draw B inside C
  Step 3: Some C ∩ D → C and D overlap

  Conclusion I: "Some A are D"
  → A is inside C, D overlaps C
  → But D may overlap C outside B!
  → NOT definite ✗

  Conclusion II: "All A are C"
  → A ⊆ B ⊆ C → Yes! ✓ DEFINITE

  TRICK: Chain "All" statements first,
  then check where "Some" overlaps.
  = Only II follows ✓
```

---

## Type 11: Definite vs Possible Conclusions

**Q: Statement: "All pens are books. Some books are toys." Conclusions: I. "Some pens are toys" (definite). II. "Some pens are toys" (possible).**

```
  CASE 1 (overlap):     CASE 2 (no overlap):
  ┌──────────┐          ┌──────────┐
  │ B(Books) │          │ B(Books) │
  │ ┌──┐ ┌──┐│          │ ┌──┐    │ ┌──┐
  │ │P │─│T ││          │ │P │    │ │T │
  │ └──┘ └──┘│          │ └──┘    │ └──┘
  └──────────┘          └──────────┘

  All P ⊆ B. Some B ∩ T.

  In Case 1: Some P are T (true)
  In Case 2: No P are T (also valid!)

  → "Some pens are toys" is NOT definite ✗
  → But it IS possible ✓ (Case 1 works)

  DECISION TABLE:
  ┌────────────────────────────────┐
  │ True in ALL cases → DEFINITE   │
  │ True in SOME cases → POSSIBLE  │
  │ True in NO case → NOT possible │
  └────────────────────────────────┘
  = I is wrong, II follows ✓
```

---

## Type 12: "Only" / "Only a few" / "At least some" (Modern Format)

**Q: Statement: "Only a few doctors are engineers. Only engineers are pilots." Conclusions: I. "Some doctors are pilots." II. "All pilots are doctors" — is it possible?**

```
  MODERN FORMAT TRANSLATIONS:
  ┌───────────────────────────────────────┐
  │ "Only A are B"                        │
  │   = All B are A (reverse!)            │
  │   = B ⊆ A                            │
  │                                       │
  │ "Only a few A are B"                  │
  │   = Some A are B (at least one)       │
  │   + Some A are not B (not all)        │
  │                                       │
  │ "At least some A are B"              │
  │   = Some A are B                      │
  │                                       │
  │ "A few A are B"                       │
  │   = Some A are B                      │
  │                                       │
  │ "Not all A are B" (or "All A not B")  │
  │   = Some A are not B (O-type)         │
  └───────────────────────────────────────┘

  Given: Only a few D are E → Some D are E
                              + Some D are not E
         Only E are P → All P are E (= P ⊆ E)

  ┌──────────────┐
  │ E (Engineers)│
  │  ┌──────┐   │──┐  ┌──────────┐
  │  │P(Pil)│   │  │──│D(Doctors)│
  │  └──────┘   │  │  └──────────┘
  └──────────────┘

  I: Some D are E, All P ⊆ E
  → D overlaps E but P is inside E
  → P may or may not overlap D part
  → Some D are P: NOT definite, but POSSIBLE
  = Translate modern keywords first ✓
```
