# Blood Relations - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Family Tree Symbols

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  + = Male          - = Female         ? = Unknown gender            │
│                                                                     │
│  ═══ = Marriage (horizontal double line between couple)             │
│  │   = Parent-Child (vertical line going down)                      │
│  ┌┴┐ = Siblings (branch from same parent)                          │
│                                                                     │
│  EXAMPLE:                                                           │
│       [+Father] ═══ [-Mother]                                       │
│            │                                                        │
│       ┌────┼────┐                                                   │
│       │    │    │                                                    │
│     [+Son] [-Dau] [+Son]                                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Relation Shortcut Table

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  PATERNAL SIDE:                    MATERNAL SIDE:                    │
│  Father's father = Grandfather     Mother's father = Nana           │
│  Father's mother = Grandmother     Mother's mother = Nani           │
│  Father's brother = Uncle/Chacha   Mother's brother = Mama          │
│  Father's sister = Bua             Mother's sister = Mausi          │
│                                                                     │
│  COMMON CHAINS:                                                     │
│  Mother's husband = Father         Father's wife = Mother           │
│  Brother's/Sister's son = Nephew   Brother's/Sister's daughter=Niece│
│  Son's wife = Daughter-in-law      Daughter's husband = Son-in-law  │
│  Husband's/Wife's father = Father-in-law                            │
│  Brother's wife = Sister-in-law    Sister's husband = Brother-in-law│
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Generation Levels

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Gen +2:  Grandfather, Grandmother                                  │
│  Gen +1:  Father, Mother, Uncle, Aunt                               │
│  Gen  0:  Self, Brother, Sister, Cousin, Spouse                     │
│  Gen -1:  Son, Daughter, Nephew, Niece                              │
│  Gen -2:  Grandson, Granddaughter                                   │
│                                                                     │
│  RULES:                                                             │
│  Parent word (father/mother) = go UP 1 generation                   │
│  Child word (son/daughter) = go DOWN 1 generation                   │
│  Sibling/spouse words = SAME generation                             │
│  "Grand-" prefix = 2 levels                                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### "Only" Keyword Patterns

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  "my mother's only son"      = myself (if male)                     │
│  "my father's only daughter" = myself (if female)                   │
│  "my mother's only daughter" = myself (if female)                   │
│  "only child"                = no siblings at all                   │
│  "only son"                  = no brothers (may have sisters)       │
│  "only daughter"             = no sisters (may have brothers)       │
│                                                                     │
│  GENDER CLUES:                                                      │
│  MALE: father, son, brother, husband, nephew, uncle, "he/him"      │
│  FEMALE: mother, daughter, sister, wife, niece, aunt, "she/her"    │
│  NEUTRAL: child, parent, sibling, cousin, spouse                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — How to Solve Blood Relation Problems

```
  STEP-BY-STEP APPROACH:

  1. READ all statements first
  2. IDENTIFY married couples (═══ lines)
  3. PLACE children below parents (│ lines)
  4. MARK gender: + for Male, - for Female
  5. TRACE the path between the asked persons
  6. DETERMINE the relationship

  FAMILY TREE NOTATION:

       [+Mr. Shah] ═══ [-Mrs. Shah]       [+Mr. Mehra] ═══ [-Mrs. Mehra]
             │                                    │
        ┌────┼────┐                          ┌────┼────┐
        │    │    │                          │    │    │
     [-Arti] │ [+Sourabh] ═══ [-Ritu]    [+Shakti] │ [-Reena]
             │         │                        │
             │    ┌────┼────┐              ┌────┼────┐
             │    │         │              │         │
          [-Mukti]     [-Shruti]      [+Subhash] [-Reshma]

  + = Male    - = Female    ═══ = Married
  │ = Parent-Child          ┌┼┐ = Siblings

  From this tree:
  Arti is Aunt of Shruti (father's sister = Bua)
  Subhash is Cousin of Shruti (mother's sister's son)
```

---

## Type 1: Basic Relations — Identify Relation from Statement

**Q: In a family, A is the father of B. C is the mother of B. What is the relationship between A and C?**

```
       [+A] ═══ [-C]
          │
         [B]

  A is father of B → A is Male, parent of B
  C is mother of B → C is Female, parent of B
  Both are parents of B → A and C are married

  = A is husband of C ✓
```

---

## Type 2: Single Statement Deduction

**Q: Introducing a man, Radha said, "He is the husband of my mother." How is the man related to Radha?**

```
       [+Man] ═══ [-Radha's Mother]
           │
        [-Radha]

  Radha's mother → go to Mother
  Mother's husband → Mother's spouse

  Mother's husband = Father

  = The man is Radha's Father ✓
```

---

## Type 3: Chain of Relations (Three or More Steps)

**Q: Introducing a boy, Reema said, "He is the son of the wife of my brother." How is the boy related to Reema?**

```
       [+Father] ═══ [-Mother]
            │
       ┌────┴────┐
       │         │
    [-Reema]  [+Brother] ═══ [-Wife]
                    │
                 [+Boy] ← This person

  Reema's brother → same generation, male sibling
  Brother's wife → brother's spouse
  Wife's son → their child (male)

  Brother's son = Nephew

  = The boy is Reema's Nephew ✓
```

---

## Type 4: Coded Relations (Symbols Represent Relations)

**Q: If '+' means father, '-' means mother, '*' means brother, and '/' means sister, then what does P + Q - R mean? How is P related to R?**

```
  DECODE: + = father, - = mother, * = brother, / = sister

  P + Q → P is father of Q
  Q - R → Q is mother of R

       [+P]
        │
       [-Q]    (Q must be Female — she is mother of R)
        │
       [R]

  P is father of Q, Q is mother of R
  P is R's mother's father

  = P is maternal grandfather of R ✓
```

---

## Type 5: Pointing to a Photograph

**Q: Looking at a photograph, Ravi said, "He is the son of the only son of my mother." How is the person in the photograph related to Ravi?**

```
       [-Ravi's Mother]
            │
       [+Ravi]           ← "only son" = Ravi himself!
            │
         [+Person]       ← person in photo

  "My mother's only son" = Ravi (he has no brothers)
  "Only son's son" = Ravi's son

  KEY: "only" often points back to the speaker!

  = The person in the photo is Ravi's Son ✓
```

---

## Type 6: Family Tree Construction from Multiple Statements

**Q: Mr. and Mrs. Shah have two children — Arti (daughter) and Sourabh (son). Sourabh is married to Ritu. Sourabh and Ritu have two daughters — Mukti and Shruti. How is Arti related to Shruti?**

```
       [+Mr. Shah] ═══ [-Mrs. Shah]
             │
        ┌────┴────┐
        │         │
     [-Arti]  [+Sourabh] ═══ [-Ritu]
                    │
               ┌────┴────┐
               │         │
           [-Mukti]  [-Shruti]

  Arti is sister of Sourabh
  Shruti is daughter of Sourabh
  Arti is Shruti's father's sister

  Father's sister = Bua / Aunt (paternal)

  = Arti is Aunt (Bua) of Shruti ✓
```

---

## Type 7: Gender Determination from Statements

**Q: A said to B, "You are the son of my father's wife." If A has no siblings, what is the relationship between A and B?**

```
       [+Father] ═══ [-Mother]    (father's wife = mother)
             │
            [A]     ← only child (no siblings)

  "Son of my father's wife" = Mother's son
  But A has NO siblings
  → Mother's son = A himself!

  "You are the son" → B is Male
  B = A himself → A is also Male

  = B is A himself (both are the same person) ✓
```

---

## Type 8: Generation-Based Problems

**Q: A is the grandfather of B. C is the father of B. D is the son of A. How are C and D related to each other?**

```
           [+A]          ← Gen +2 (grandfather)
            │
       ┌────┴────┐
       │         │
      [+C]     [+D]     ← Gen +1 (both children of A)
       │
      [B]               ← Gen 0

  A is grandfather of B → 2 generations above
  C is father of B → 1 generation above B
  D is son of A → 1 generation below A = same level as C

  C and D are at the same generation, both sons of A

  = C and D are brothers (siblings) ✓
```

---

## Type 9: "How is A Related to B" (Trace the Path)

**Q: Pointing to a boy, Meena said, "He is the son of my father's only daughter." If Meena has no sisters, how is Meena related to the boy?**

```
       [+Meena's Father]
            │
       [-Meena]              ← "only daughter" = Meena herself!
            │
         [+Boy]              ← "son" = Meena's son

  Meena's father's only daughter = Meena (she has no sisters)
  The boy is son of Meena = Meena is his mother

  TRICK: "only daughter/son" often points back to the person

  = Meena is the boy's Mother ✓
```

---

## Type 10: Couple / Marriage-Based Relations

**Q: Ramesh is the son-in-law of Suresh. Ramesh has a brother named Mahesh. Mahesh is married to Priya. How is Priya related to Suresh?**

```
       [+Suresh]
        │
     [-Daughter] ═══ [+Ramesh]
                           │ (brother)
                     [+Mahesh] ═══ [-Priya]

  Ramesh is son-in-law of Suresh (married Suresh's daughter)
  Mahesh is Ramesh's brother
  Priya is Mahesh's wife

  Priya is wife of Suresh's son-in-law's brother
  No direct relation to Suresh (by marriage only)

  = Priya has no direct blood relation to Suresh ✓
```

---

## Type 11: Only Child / No Siblings Type

**Q: Pointing to a man in a park, Sita said, "His mother is the only daughter of my mother." How is Sita related to the man?**

```
       [-Sita's Mother]
            │
         [-Sita]         ← "only daughter" = Sita herself!
            │
         [+Man]          ← "his mother" = Sita

  "Only daughter of my mother" = Sita (she is the only daughter)
  The man's mother = Sita
  → Sita is the man's MOTHER

  = Sita is the man's Mother ✓
```

---

## Type 12: Puzzle with 6 Family Members — Build Complete Tree

**Q: In a family of 6 members — P, Q, R, S, T, and U — P and Q are a married couple. R is the son of P. S is the daughter of Q. T is the brother of R. U is the wife of R. How is U related to S?**

```
  Build step by step:
  1. P ═══ Q (married)
  2. R is son of P → [+R] child of P
  3. S is daughter of Q → [-S] child of Q
  4. P & Q married → R, S, T are siblings
  5. T is brother of R → [+T] also child of P & Q
  6. U is wife of R → [-U] married to R

       [+P] ═══ [-Q]
          │
     ┌────┼────┐
     │    │    │
   [+R] [+T] [-S]
     │
  [+R] ═══ [-U]

  U is wife of R
  S is sister of R
  → U is S's brother's wife

  Brother's wife = Sister-in-law

  = U is Sister-in-law of S ✓
```
