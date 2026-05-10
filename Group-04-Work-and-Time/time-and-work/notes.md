# Time and Work - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Basic Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Work = Efficiency × Time                                           │
│                                                                     │
│  If A does work in 'n' days → A's 1 day work = 1/n                  │
│                                                                     │
│  Total Work = LCM of all given days (ALWAYS use this!)              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```


### Efficiency & Ratio Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  EFFICIENCY RATIO:                                                  │
│  "A is 2 times as efficient as B" means:                            │
│     → A does 2 units/day, B does 1 unit/day                        │
│     → A finishes FASTER (less time)                                 │
│                                                                     │
│  Example: B takes 18 days, A is 2× efficient                       │
│     A's time = 18 / 2 = 9 days                                     │
│     Eff ratio  A : B = 2 : 1  (A is faster)                        │
│     Time ratio A : B = 1 : 2  (A takes LESS time)                  │
│     ↑ Efficiency and Time are ALWAYS INVERSE                       │
│                                                                     │
│  WAGES:                                                             │
│  Split by EFFICIENCY (work done), NOT by days                       │
│  Example: A(eff=3) and B(eff=2), Total wage = Rs.5000              │
│     A gets = 3/5 × 5000 = Rs.3000                                  │
│     B gets = 2/5 × 5000 = Rs.2000                                  │
│     (More work = More pay, NOT more days = more pay)                │
│                                                                     │
│  EFFICIENCY CHANGE:                                                 │
│  Half efficiency → takes DOUBLE the time                            │
│  Double efficiency → takes HALF the time                            │
│  Example: A normally takes 10 days                                  │
│     At half eff → 10 × 2 = 20 days                                 │
│     At double eff → 10 / 2 = 5 days                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### MDH Formula (Men-Days-Hours)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│          M1 × D1 × H1     M2 × D2 × H2                             │
│          ─────────────  =  ─────────────                            │
│               W1                W2                                  │
│                                                                     │
│  M = Men/Workers    D = Days    H = Hours/day    W = Work units     │
│                                                                     │
│  More Men   → Less Days   (inverse proportion)                      │
│  More Hours → Less Days   (inverse proportion)                      │
│  More Work  → More Days   (direct proportion)                       │
│                                                                     │
│  Total Work in man-days = Men × Days                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Pipes & Cisterns Formulas

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Filling pipe  = POSITIVE (+) efficiency                            │
│  Emptying pipe = NEGATIVE (-) efficiency                            │
│  Net efficiency = Sum of all (with signs)                           │
│                                                                     │
│  If net > 0 → Tank fills    Time = Capacity / net                   │
│  If net < 0 → Tank empties  Time = Capacity / |net|                 │
│  If net = 0 → Tank never fills or empties                           │
│                                                                     │
│  Leak rate = (a × b) / (b - a)                                      │
│     a = fill time without leak                                      │
│     b = fill time with leak (b > a always)                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Percentage ↔ Days Conversion

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  If A finishes in n days → A does (100/n)% per day                  │
│  If A does x% per day   → A finishes in (100/x) days               │
│                                                                     │
│  Fraction to % shortcut:                                            │
│     1/2 = 50%     1/3 = 33.33%    1/4 = 25%     1/5 = 20%          │
│     1/6 = 16.67%  1/7 = 14.28%    1/8 = 12.5%   1/9 = 11.11%      │
│     1/10 = 10%    1/12 = 8.33%    1/15 = 6.67%   1/20 = 5%         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Fractional Day → Hours Conversion

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  1/6 day = 4 hrs     1/4 day = 6 hrs      1/3 day = 8 hrs          │
│  1/2 day = 12 hrs    2/3 day = 16 hrs     3/4 day = 18 hrs         │
│  5/6 day = 20 hrs                                                   │
│                                                                     │
│  Decimal hrs → minutes:                                             │
│  0.1 hr = 6 min      0.2 hr = 12 min     0.25 hr = 15 min          │
│  0.33 hr = 20 min    0.5 hr = 30 min     0.75 hr = 45 min          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Men ↔ Women ↔ Children Conversion

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Given: x Men = y Women = z Children                                │
│                                                                     │
│  1 Man   = z/x Children   = y/x Women                              │
│  1 Woman = z/y Children   = x/y Men                                │
│  1 Child = x/z Men        = y/z Women                              │
│                                                                     │
│  Convert all to smallest unit (children), then use MDH              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## LCM METHOD (Use for Every Problem)

```
Step 1: Take LCM of all given days → Total Work Units
Step 2: Efficiency of each = Total Work / Their Days
Step 3: Solve using efficiencies (no fractions!)

         (LCM)
        Total Work
           |
     ------+------
     |            |
   Eff(A)      Eff(B)
   = LCM/a     = LCM/b
     |            |
    (a)          (b)
   A's days    B's days

Combined Efficiency = Eff(A) + Eff(B)
Time Together = Total Work / Combined Efficiency
```

### How to find LCM quickly

```
Example: LCM of 10, 15

  2 | 10, 15
  3 |  5, 15
  5 |  5,  5
    |  1,  1

LCM = 2 × 3 × 5 = 30
```

---

## Type 1: A and B Working Together

**Q: Anil can do work in 10 days, Pankaj in 15 days. Working together, in how many days will work be finished?**

```
LCM(10, 15) = 30

         (30) ← Total Work
           |
     ------+------
     |            |
    (3)          (2)       ← Eff (3 + 2 = 5 units/day)
     |            |
   (10)         (15)       ← Days
   Anil        Pankaj

Time = Total Work / Combined Eff
     = 30 / 5
     = 6 days ✓
```

---

## Type 2: Three Workers Together

**Q: A can do work in 10 days, B in 12 days, C in 15 days. Together = ?**

```
LCM(10, 12, 15) = 60

           (60) ← Total Work
             |
     --------+--------
     |        |        |
    (6)      (5)      (4)      ← Eff (6 + 5 + 4 = 15 units/day)
     |        |        |
   (10)     (12)     (15)      ← Days
     A        B        C

Time = 60 / 15 = 4 days ✓
```

---

## Type 3: Someone Leaves Midway

**Q: Aman and Raman can complete a work separately in 30 days and 20 days respectively. They start work together. After 10 days Raman leaves the work. The remaining work is done by Aman. In how many days will the entire work be completed?**

```
LCM(30, 20) = 60

         (60) ← Total Work
           |
     ------+------
     |            |
    (2)          (3)       ← Eff (2 + 3 = 5 units/day)
     |            |
   (30)         (20)       ← Days
   Aman        Raman
```

### Timeline

```
|◄───────── 10 days ──────────►|◄──── 5 days ────►|
|                               |                   |
|   Aman + Raman (together)     |   Aman (alone)    |
|   Eff = 2 + 3 = 5/day        |   Eff = 2/day     |
|   Work = 10 × 5 = 50 units   |   Work = 10 units |
|                               |                   |
|◄──────── COMPLETED ──────────►|◄─── REMAINING ───►|
               50 units               10 units

                    Total Work = 60
                                 60
                               - 50  (done in 10 days)
                               ────
                                 10  (remaining)

                    Aman alone = 10 / 2 = 5 days

                    Total = 10 + 5 = 15 days ✓
```

### Shortcut for "leaves midway" problems

```
Step 1: LCM → Total Work, find efficiencies
Step 2: Work done together = days × combined eff
Step 3: Remaining = Total - done
Step 4: Remaining / alone person's eff = extra days
Step 5: Total = together days + alone days
```

---

## Type 4: A and B Together, Find When One Should Leave

**Q: A and B can do work in 12 and 18 days. They start together but A leaves some days before completion. Work finishes in 10 days. How many days before completion did A leave?**

```
LCM(12, 18) = 36

         (36) ← Total Work
           |
     ------+------
     |            |
    (3)          (2)       ← Eff (3 + 2 = 5 units/day)
     |            |
   (12)         (18)       ← Days
     A            B

B worked all 10 days = 10 × 2 = 20 units
Remaining done by A  = 36 - 20 = 16 units
A worked = 16 / 3 = 16/3 days

A left before = 10 - 16/3
             = 30/3 - 16/3
             = 14/3
             = 4⅔ days before completion ✓
```

### Timeline

```
|◄────── 16/3 days ──────►|◄──── 14/3 days ────►|
|                          |                      |
|   A + B (together)       |   B alone            |
|   Eff = 3 + 2 = 5/day   |   Eff = 2/day        |
|   Work = 16 + ~9.3       |   Work = ~9.3 units  |
|                          |                      |
|   (A leaves here →)      |                      |
|◄───────────── Total 10 days ──────────────────►|
```

---

## Type 5: Alternate Days

**Q: A can do work in 12 days, B in 15 days. They work on alternate days starting with A. Total days to finish?**

```
LCM(12, 15) = 60

         (60) ← Total Work
           |
     ------+------
     |            |
    (5)          (4)       ← Eff (5 + 4 = 9 units/day)
     |            |
   (12)         (15)       ← Days
     A            B

2-day cycle (A then B):
  Day 1: A does 5
  Day 2: B does 4
  Per cycle = 5 + 4 = 9 units

Full cycles = 60 / 9 = 6 cycles + 6 remaining
6 cycles = 12 days → 54 units done

Day 13: A works → 5 units → remaining = 6 - 5 = 1
Day 14: B works → needs 1 out of 4 = 1/4 day

Total = 13 + 1/4 = 13¼ days ✓
```

---

## Type 6: Efficiency Ratio

**Q: A is twice as efficient as B. B finishes in 18 days. Together = ?**

```
A is 2× efficient → A takes 18/2 = 9 days

LCM(9, 18) = 18

         (18) ← Total Work
           |
     ------+------
     |            |
    (2)          (1)       ← Eff (2 + 1 = 3 units/day)
     |            |
    (9)         (18)       ← Days
     A            B

KEY: Efficiency ratio = 2 : 1
     Time ratio = 1 : 2 (INVERSE!)
Time = 18 / 3 = 6 days ✓
```

---

## Type 7: Pipes and Cisterns

### Golden Rule

```
Filling pipe  = POSITIVE (+) efficiency
Emptying pipe = NEGATIVE (-) efficiency
Rest is same LCM method as Time & Work!
```

---

### Type 7a: Basic — Two Filling Pipes Together

**Q: Pipe A fills tank in 12 hrs, Pipe B fills in 18 hrs. Both open together = ?**

```
LCM(12, 18) = 36

         (36) ← Tank Capacity
           |
     ------+------
     |            |
   (+3)         (+2)       ← Eff (36/12=+3, 36/18=+2)
   FILLS        FILLS
     |            |
   (12)         (18)       ← Hours
   Pipe A      Pipe B

Combined Eff = +3 + 2 = 5 units/hr
Time = 36 / 5 = 7.2 hrs = 7 hrs 12 min ✓
```

### Minute conversion shortcut

```
0.1 hr = 6 min       0.5 hr = 30 min
0.2 hr = 12 min      0.6 hr = 36 min
0.25 hr = 15 min     0.75 hr = 45 min
0.33 hr = 20 min     0.8 hr = 48 min
```

---

### Type 7b: Fill + Leak — Net Effect

**Q: Pipe A fills tank in 12 hrs, Pipe B fills in 15 hrs, Pipe C empties in 20 hrs. All open = ?**

```
LCM(12, 15, 20) = 60

             (60) ← Tank Capacity
               |
     ----------+-----------
     |         |           |
   (+5)      (+4)        (-3)      ← Eff (60/12=+5, 60/15=+4, 60/20=-3)
   FILLS     FILLS      EMPTIES
     |         |           |
   (12)      (15)        (20)      ← Hours
   Pipe A    Pipe B      Pipe C

Net Eff = +5 + 4 - 3 = +6 units/hr
Time = 60 / 6 = 10 hours ✓
```

---

### Type 7c: Find the Leak Rate

**Q: A pipe fills tank in 8 hrs. Due to a leak, it takes 10 hrs. How long will the leak take to empty a full tank?**

```
LCM(8, 10) = 40

Fill pipe (no leak)   = 40/8  = +5 units/hr
Fill pipe (with leak) = 40/10 = +4 units/hr (net)

Leak rate = 5 - 4 = 1 unit/hr

Leak empties full tank = 40 / 1 = 40 hours ✓
```

### Shortcut Formula

```
Leak alone = (a × b) / (b - a)

where a = fill time without leak
      b = fill time with leak

= (8 × 10) / (10 - 8) = 80/2 = 40 hrs ✓
```

---

### Type 7d: Leak Found Midway

**Q: Pipe A fills in 6 hrs. After half the tank is filled, a leak is discovered. Now the remaining half fills in 5 hrs. Find the leak rate.**

```
Let Total = 1 (full tank)

Phase 1: A fills half tank (no leak)
         Half tank in 3 hrs (6/2 = 3 hrs)

Phase 2: A + Leak fill remaining half
         Time = 5 hrs for 1/2 tank

A fills in 5 hrs  = 5 × (1/6) = 5/6
But only 1/2 filled → leak emptied = 5/6 - 1/2 = 5/6 - 3/6 = 2/6 = 1/3

Leak empties 1/3 in 5 hrs
Leak empties full tank = 5 × 3 = 15 hours ✓
```

### Timeline

```
|◄───── 3 hrs ─────►|◄──────── 5 hrs ────────►|
|                    |                          |
|   A fills          |   A fills + Leak drains  |
|   No leak          |   Leak discovered!       |
|   1/2 tank done    |   1/2 tank done (slower) |
|                    |                          |
|◄── PHASE 1 ──────►|◄──── PHASE 2 ───────────►|
    0% → 50%              50% → 100%

    Without leak: 3 hrs for half
    With leak:    5 hrs for half  ← SLOWER!
```

---

### Type 7e: Pipes Opened One by One (Intervals)

**Q: A fills in 10 hrs, B fills in 15 hrs, C empties in 20 hrs. A is opened first. After 2 hrs B is opened. After 2 more hrs C is also opened. When will tank be full?**

```
LCM(10, 15, 20) = 60

A = +6/hr    B = +4/hr    C = -3/hr

Phase 1 (0–2 hrs): Only A
         Work = 2 × 6 = 12 units

Phase 2 (2–4 hrs): A + B
         Eff = 6 + 4 = 10/hr
         Work = 2 × 10 = 20 units

Total after 4 hrs = 12 + 20 = 32 units

Phase 3 (4+ hrs): A + B + C
         Net Eff = 6 + 4 - 3 = 7 units/hr
         Remaining = 60 - 32 = 28 units
         Time = 28 / 7 = 4 hrs

Total = 2 + 2 + 4 = 8 hours ✓
```

### Timeline

```
|◄─ 2 hrs ─►|◄─ 2 hrs ─►|◄──── 4 hrs ────►|
|            |            |                  |
|  A only    |  A + B     |  A + B + C       |
|  +6/hr     |  +10/hr    |  +7/hr (net)     |
|  12 units  |  20 units  |  28 units        |
|            |            |                  |
  Tank: 12     → 32         → 60 (FULL!)
```

---

### Type 7f: Pipes Opened Alternately

**Q: A fills tank in 10 hrs, B fills in 15 hrs. They are opened alternately for 1 hr each starting with A. When will tank be full?**

```
LCM(10, 15) = 30

A = +3/hr    B = +2/hr
Combined per 2-hr cycle = 3 + 2 = 5 units

Full cycles = 30 / 5 = 6 cycles exactly
6 cycles = 12 hrs

Tank full in exactly 12 hours ✓
```

**What if not exact?** Example: Tank = 32 units

```
6 cycles = 12 hrs → 30 units done
Remaining = 2 units

Hr 13: A opens → fills 3 → but only 2 needed
A runs for 2/3 hr = 40 min

Total = 12 hrs + 40 min ✓
```

---

### Type 7g: When to Close a Pipe So Tank Fills on Time

**Q: A fills in 8 hrs, B empties in 12 hrs. Both opened together. After how many hours should B be closed so tank is full in exactly 9 hrs?**

```
LCM(8, 12) = 24

A = +3/hr    B = -2/hr

A works all 9 hrs = 9 × 3 = 27 units filled
Tank capacity = 24 units
Extra filled by A = 27 - 24 = 3 units

B must drain exactly 3 units = 3 / 2 = 1.5 hrs

B should be closed after 1.5 hrs ✓
(A continues alone for remaining 7.5 hrs)
```

### Timeline

```
|◄── 1.5 hrs ──►|◄────── 7.5 hrs ──────►|
|                |                        |
|   A + B        |   A alone              |
|   +3 - 2 = +1 |   +3/hr                |
|   1.5 units    |   22.5 units           |
|                |                        |
  Tank: 1.5        → 24 (FULL!)

  Check: 1.5 + 22.5 = 24 ✓
```

### Shortcut for "When to close B"

```
A fills for total T hrs = A_eff × T
Extra over capacity = (A_eff × T) - Capacity
B should drain this extra = Extra / B_eff = time B stays open
```

---

### Type 7h: Tank Never Fills (Emptying > Filling)

**Q: A fills in 20 hrs, B empties in 10 hrs. Both opened. What happens?**

```
LCM(20, 10) = 20

A = +1/hr    B = -2/hr

Net Eff = +1 - 2 = -1 unit/hr (NEGATIVE!)

Tank is getting EMPTIED, not filled!
If tank is full → empty in 20 / |-1| = 20 hrs

KEY: If net is negative, tank will
     NEVER fill — it empties instead!
     Time to empty = Capacity / |net rate|
```

---

### Type 7i: Multiple Pipes — Find Individual from Pairs

**Q: A and B fill tank in 6 hrs. B and C fill in 8 hrs. A and C fill in 12 hrs. Find time for A alone, B alone, C alone.**

```
LCM(6, 8, 12) = 24

A + B = 24/6 = 4 units/hr
B + C = 24/8 = 3 units/hr
A + C = 24/12 = 2 units/hr

Add all: 2(A+B+C) = 4 + 3 + 2 = 9
         A + B + C = 9/2 = 4.5 units/hr

A = (A+B+C) - (B+C) = 4.5 - 3 = 1.5 → A alone = 24/1.5 = 16 hrs
B = (A+B+C) - (A+C) = 4.5 - 2 = 2.5 → B alone = 24/2.5 = 9.6 hrs
C = (A+B+C) - (A+B) = 4.5 - 4 = 0.5 → C alone = 24/0.5 = 48 hrs

All three together = 24/4.5 = 5⅓ hrs ✓
```

(Same trick as Type 11!)

---

### Pipes & Cisterns — Quick Reference

```
┌───────────────────────────────┬─────────────────────────────────┐
│ Scenario                      │ Key Idea                        │
├───────────────────────────────┼─────────────────────────────────┤
│ Two fills together            │ LCM, add both (+ve)             │
│ Fill + Leak                   │ Fill (+ve) + Leak (-ve) = net   │
│ Find leak rate                │ (a×b)/(b-a) or diff of eff     │
│ Leak found midway             │ Split phases, compare rates     │
│ Pipes at intervals            │ Phase-wise calculation          │
│ Pipes alternately             │ 2-hr cycle, same as Type 5      │
│ When to close a pipe          │ Extra filled = what B must drain│
│ Net negative                  │ Tank never fills, empties instead│
│ A+B, B+C, A+C given          │ Same as Type 11 trick           │
└───────────────────────────────┴─────────────────────────────────┘
```

---

## Type 8: Men-Days-Hours (MDH Formula)

**Q: 10 men finish work in 8 days working 6 hrs/day. How many days for 15 men working 8 hrs/day?**

```
FORMULA:  M1 × D1 × H1    M2 × D2 × H2
          -----------  =  -----------
              W1               W2

(When work is same, W1 = W2, so they cancel)

10 × 8 × 6  =  15 × D2 × 8

     480     =  120 × D2

      D2     =  480 / 120

      D2     =  4 days ✓
```

### MDH Quick Pattern

```
More Men   → Less Days   (inverse)
More Hours → Less Days   (inverse)
More Work  → More Days   (direct)
```

---

## Type 9: Work and Wages

**Q: A can do work in 10 days, B in 15 days. Total wage = Rs.5000. Find A's share.**

```
LCM(10, 15) = 30

         (30) ← Total Work
           |
     ------+------
     |            |
    (3)          (2)       ← Eff (30/10=3, 30/15=2)
     |            |
   (10)         (15)       ← Days
     A            B

Combined Eff = 3 + 2 = 5 units/day

KEY: Wages split by EFFICIENCY ratio
     (NOT by days ratio — common trap!)

Efficiency ratio = A : B = 3 : 2

A's share = (3/5) × 5000 = Rs.3000 ✓
B's share = (2/5) × 5000 = Rs.2000 ✓
```

---

## Type 10: Someone Joins Late

**Q: A can do work in 20 days. He starts alone. After 5 days, B joins him. Together they finish the remaining work in 6 days. In how many days can B alone do the work?**

```
Total Work = 20 units (A's days = total work)
A's efficiency = 20/20 = 1 unit/day

Phase 1: A alone for 5 days
         Work done = 5 × 1 = 5 units

Phase 2: A + B together for 6 days
         Work done = 20 - 5 = 15 units
         (A + B) per day = 15 / 6 = 2.5 units/day
         B's efficiency = 2.5 - 1 = 1.5 units/day

B alone = Total Work / B's eff
        = 20 / 1.5
        = 40/3
        = 13⅓ days ✓
```

### Timeline

```
|◄──── 5 days ────►|◄─────── 6 days ────────►|
|                   |                          |
|   A alone         |   A + B (together)       |
|   Eff = 1/day     |   Eff = 1 + 1.5 = 2.5   |
|   Work = 5 units  |   Work = 15 units        |
|                   |                          |
|◄── PHASE 1 ─────►|◄────── PHASE 2 ─────────►|
       5 units              15 units

                Total = 5 + 6 = 11 days
```

---

## Type 11: A+B, B+C, A+C Given — Find Individual or All Together

**Q: A+B can do work in 10 days, B+C in 12 days, A+C in 15 days. How long will A+B+C take? How long will A alone take?**

```
LCM(10, 12, 15) = 60

A + B = 60/10 = 6 units/day
B + C = 60/12 = 5 units/day
A + C = 60/15 = 4 units/day

TRICK: Add all three equations:
  (A+B) + (B+C) + (A+C) = 6 + 5 + 4 = 15
   2A + 2B + 2C = 15
   A + B + C = 15/2 = 7.5 units/day

A + B + C together = 60 / 7.5 = 8 days ✓

Finding individuals:
  A = (A+B+C) - (B+C) = 7.5 - 5 = 2.5  → A alone = 60/2.5 = 24 days
  B = (A+B+C) - (A+C) = 7.5 - 4 = 3.5  → B alone = 60/3.5 = 17⅐ days
  C = (A+B+C) - (A+B) = 7.5 - 6 = 1.5  → C alone = 60/1.5 = 40 days
```

### Shortcut

```
A+B+C = (sum of all pair efficiencies) / 2

Individual = (A+B+C) - (other two's combined eff)
```

---

## Type 12: Fraction of Work Done, Rest by Another

**Q: A can do work in 18 days. He does 1/3 of work and leaves. B finishes the remaining work in 10 days. In how many days can B do the full work?**

```
Total Work = 18 units (A's days = total work)
A's efficiency = 1 unit/day

A does 1/3 of work = 18 × 1/3 = 6 units
A worked for = 6 / 1 = 6 days
Remaining = 18 - 6 = 12 units

B does 12 units in 10 days
B's efficiency = 12/10 = 1.2 units/day

B alone (full work) = 18 / 1.2 = 15 days ✓
```

### Timeline

```
|◄──── 6 days ────►|◄─────── 10 days ────────►|
|                   |                           |
|   A works         |   B works                 |
|   1/3 of work     |   2/3 of work             |
|   = 6 units       |   = 12 units              |
|                   |                           |
|◄── 1/3 DONE ────►|◄──── 2/3 REMAINING ─────►|
```

---

## Type 13: Men, Women, Children — Conversion

**Q: 2 men = 3 women = 4 children (in terms of work). A work is done by 6 men and 4 women in 10 days. How many days will 3 men, 4 women, and 8 children take?**

```
STEP 1: Convert everything to one unit (children)
        2 men = 4 children   → 1 man = 2 children
        3 women = 4 children → 1 woman = 4/3 children

STEP 2: Convert the first group
        6 men + 4 women
        = 6×2 + 4×(4/3) children
        = 12 + 16/3
        = 52/3 children

        Total Work = (52/3) × 10 = 520/3 child-days

STEP 3: Convert the second group
        3 men + 4 women + 8 children
        = 3×2 + 4×(4/3) + 8 children
        = 6 + 16/3 + 8
        = 58/3 children

STEP 4: Days = Total Work / Group Efficiency
        = (520/3) / (58/3)
        = 520/58
        = 8.96 ≈ 9 days ✓
```

### Conversion Shortcut

```
Given: x Men = y Women = z Children

1 Man   = z/x Children
1 Woman = z/y Children

Convert everything to children, then use MDH formula.
```

---

## Type 14: Reinforcement (More Workers Join Midway)

**Q: 20 men can finish work in 30 days. After 10 days, 10 more men join. In how many more days will work be finished?**

```
Total Work = 20 × 30 = 600 man-days

Phase 1: 20 men work for 10 days
         Work done = 20 × 10 = 200 man-days

Remaining = 600 - 200 = 400 man-days

Phase 2: 20 + 10 = 30 men
         Days = 400 / 30 = 13⅓ more days ✓
```

### Timeline

```
|◄───── 10 days ─────►|◄──── 13⅓ days ────►|
|                      |                     |
|   20 men             |   30 men            |
|   Work = 200         |   Work = 400        |
|                      |                     |
|◄── PHASE 1 ────────►|◄── PHASE 2 ────────►|

    Total Work = 600 man-days
```

### Reverse: How many more men needed?

```
If "finish in 10 more days instead":
  Remaining = 400 man-days
  400 / ? men = 10 days
  ? = 40 men needed
  Extra = 40 - 20 = 20 more men
```

---

## Type 15: Pipes — Opened/Closed at Intervals

(Covered in Type 7e above — see Pipes & Cisterns section)

---

## Type 16: Work Done in Given Time (Partial Work / Fraction Left)

**Q: A in 10 days, B in 15 days. They work together for 4 days. What fraction of work is left?**

```
LCM(10, 15) = 30

         (30) ← Total Work
           |
     ------+------
     |            |
    (3)          (2)       ← Eff (30/10=3, 30/15=2)
     |            |
   (10)         (15)       ← Days
     A            B

Combined Eff = 3 + 2 = 5 units/day

Work done in 4 days = 4 × 5 = 20 units
Remaining = 30 - 20 = 10 units

Fraction left = 10/30 = 1/3 of work ✓
Fraction done = 20/30 = 2/3 of work
```

---

## Type 17: Find B's Days from A's Partial Work

**Q: A can do a piece of work in 12 days. A does the work for 8 days and B finishes remaining in 6 days. How long would A and B together take?**

```
Total Work = 12 units (A's days)
A's eff = 12/12 = 1 unit/day

A works 8 days = 8 × 1 = 8 units done
Remaining = 12 - 8 = 4 units
B does 4 units in 6 days → B's eff = 4/6 = 2/3 per day

B alone = 12 / (2/3) = 18 days

Together: LCM(12, 18) = 36

         (36) ← Total Work
           |
     ------+------
     |            |
    (3)          (2)       ← Eff (36/12=3, 36/18=2)
     |            |
   (12)         (18)       ← Days
     A            B

Combined Eff = 3 + 2 = 5 units/day
Time = 36 / 5 = 7.2 days = 7⅕ days ✓
```

---

## Type 18: A Builds, B Destroys (Opposite Work)

**Q: A can build a wall in 10 days. B can destroy it in 15 days. If both work together, in how many days will the wall be built?**

```
LCM(10, 15) = 30

         (30) ← Total Work
           |
     ------+------
     |            |
   (+3)         (-2)       ← Eff (30/10=+3, 30/15=-2)
   BUILDS     DESTROYS
     |            |
   (10)         (15)       ← Days
     A            B

Net Eff = +3 - 2 = +1 unit/day (positive = wall gets built)

Time = 30 / 1 = 30 days ✓
```

### KEY: Same as Pipes & Cisterns logic!

```
Building  = POSITIVE (+)
Destroying = NEGATIVE (-)

If net is negative → wall will NEVER be built!
```

---

## Type 19: Working with Reduced/Increased Efficiency

**Q: A can do work in 12 days. He works at full efficiency for 4 days, then at half efficiency. How many total days to finish?**

```
Total Work = 12 units
A's full eff = 1 unit/day
A's half eff = 0.5 unit/day

Phase 1: Full efficiency for 4 days
         Work = 4 × 1 = 4 units

Remaining = 12 - 4 = 8 units

Phase 2: Half efficiency
         Time = 8 / 0.5 = 16 days

Total = 4 + 16 = 20 days ✓
```

### Timeline

```
|◄──── 4 days ────►|◄──────── 16 days ────────►|
|                   |                            |
|   Full Eff (1/d)  |   Half Eff (0.5/d)         |
|   Work = 4 units  |   Work = 8 units           |
|                   |                            |

    Note: Half efficiency = DOUBLE the time!
```

### Common Variations

```
Half efficiency    → Double the time for remaining
Double efficiency  → Half the time for remaining
x% efficiency      → Multiply time by (100/x)
```

---

## Type 20: Working Only on Certain Days (Holidays/Breaks)

**Q: A can do work in 15 days (working every day). But A takes every 3rd day off. In how many actual days will work be finished?**

```
Total Work = 15 units
A's eff = 1 unit/day

Pattern: Works 2 days, off 1 day (3-day cycle)
Work per 3-day cycle = 2 × 1 = 2 units

Full cycles = 15 / 2 = 7 cycles + 1 remaining
7 cycles = 21 actual days → 14 units done

Remaining = 1 unit → needs 1 more working day

Day 22: A works → 1 unit → DONE!

Total = 22 actual days ✓
```

### Timeline

```
Day:  1  2  3  4  5  6  7  8  9  ...  21 22
      W  W  ✗  W  W  ✗  W  W  ✗  ...  ✗  W
                                          ↑
                                        DONE!

W = Work    ✗ = Off day
7 cycles (21 days) = 14 units + 1 more day = 15 units
```

---

## Type 21: Percentage Work Per Day

**Q: A does 10% of work per day, B does 15% per day. Together how many days to finish?**

```
Total Work = 100% = 100 units

A = 10 units/day (10%)
B = 15 units/day (15%)

Combined Eff = 10 + 15 = 25 units/day

Time = 100 / 25 = 4 days ✓
```

### Converting between days and percentage

```
If A finishes in n days → A does (100/n)% per day
If A does x% per day   → A finishes in (100/x) days

Example: A in 20 days = 100/20 = 5% per day
         B does 8%/day = 100/8 = 12.5 days
```
