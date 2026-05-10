# Pipes and Cisterns - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Filling Pipe Rate

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  If a pipe fills the tank in n hours:                               │
│    Rate = 1/n (fraction of tank per hour)                           │
│                                                                     │
│  Two pipes A (a hrs) and B (b hrs) together:                        │
│    Combined rate = 1/a + 1/b                                        │
│    Time to fill = ab / (a + b)                                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Leak / Outlet Pipe

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Inlet fills (+), Outlet empties (-)                                │
│  Inlet rate = +1/a                                                  │
│  Outlet rate = -1/b                                                 │
│                                                                     │
│  Net rate = 1/a - 1/b                                               │
│  Time to fill = ab / (b - a)   if b > a (net fills)                │
│  Tank never fills if outlet rate >= inlet rate                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Leak Midway Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Pipe fills in a hrs, leak empties in b hrs                         │
│  Net time (both from start) = ab / (b - a)                         │
│                                                                     │
│  Leak starts after t hours:                                         │
│    Filled by pipe in t hrs = t/a                                    │
│    Remaining = 1 - t/a                                              │
│    Time for rest = remaining / (1/a - 1/b)                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Alternate / Interval Pipes

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Pipes work in alternate hours:                                     │
│    Work done in one 2-hour cycle = 1/a + 1/b                       │
│                                                                     │
│  Pipes work in intervals:                                           │
│    Net work per cycle × number of cycles                            │
│    Always check for a partial last cycle                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Type 1: Two Filling Pipes

**Q: Pipe A fills a tank in 12 hours and Pipe B fills it in 18 hours. If both are opened together, how long will it take to fill the tank?**

```
  A's rate = 1/12 per hour
  B's rate = 1/18 per hour

  Combined = 1/12 + 1/18
  LCM(12, 18) = 36
  = 3/36 + 2/36 = 5/36 per hour

  Time = 36/5 = 7.2 hours = 7 hrs 12 min

  A ──→ 1/12/hr ──┐
  B ──→ 1/18/hr ──┤──→ 5/36/hr
                  └──→ 7.2 hrs

  Shortcut: ab/(a+b) = 12 × 18/30
  = 216/30 = 7.2 hrs

  Answer: 7 hours 12 minutes ✓
```

---

## Type 2: Fill Pipe + Leak

**Q: A pipe can fill a tank in 10 hours. A leak can empty it in 15 hours. If both work together, how long to fill the tank?**

```
  Fill rate = 1/10 per hour
  Leak rate = -1/15 per hour

  Net = 1/10 - 1/15
  LCM(10, 15) = 30
  = 3/30 - 2/30 = 1/30 per hour

  Time = 30 hours

  Inlet ──→ +1/10/hr ──┐
  Leak  ──→ -1/15/hr ──┤──→ 1/30/hr
                       └──→ 30 hrs

  Shortcut: ab/(b-a) = 10 × 15/(15-10)
  = 150/5 = 30 hrs

  Answer: 30 hours ✓
```

---

## Type 3: Find the Leak Rate

**Q: A pipe fills a tank in 8 hours. Due to a leak, it takes 10 hours. In how many hours can the leak alone empty the full tank?**

```
  Pipe rate = 1/8
  Pipe + Leak = 1/10

  Leak rate = 1/8 - 1/10
  = 5/40 - 4/40 = 1/40

  Leak empties in 40 hours

  Pipe alone:     1/8  → 8 hrs
  Pipe + Leak:    1/10 → 10 hrs
  Leak alone:     1/40 → 40 hrs

  Leak = Fill rate - Net rate
  = 1/8 - 1/10 = 1/40

  Answer: Leak empties in 40 hours ✓
```

---

## Type 4: Leak Starts Midway

**Q: A pipe fills a tank in 6 hours. After 3 hours, a leak develops that can empty the tank in 12 hours. How much longer to fill?**

```
  In 3 hrs, pipe fills = 3/6 = 1/2
  Remaining = 1/2

  Net rate after leak:
  1/6 - 1/12 = 2/12 - 1/12 = 1/12

  Time for 1/2 at rate 1/12
  = (1/2) / (1/12) = 6 hrs more

  0──────3hr──────────9hr
  |═pipe═|═pipe+leak══|
  fill 1/2  fill remaining 1/2
  rate=1/6  rate=1/12

  Total time = 3 + 6 = 9 hrs

  Answer: 6 more hours (total 9 hrs) ✓
```

---

## Type 5: Pipes Work in Intervals

**Q: Pipe A fills 1/3 of a tank in 1 hour. Pipe B fills 1/4 in 1 hour. A works for 1 hour, then B for 1 hour, alternately. How long to fill?**

```
  A's rate = 1/3 per hour
  B's rate = 1/4 per hour

  In 2-hour cycle:
  Work = 1/3 + 1/4 = 7/12

  After 1 cycle (2 hrs): 7/12 filled
  Remaining = 5/12

  Hour 3 (A works): fills 1/3 = 4/12
  Remaining = 5/12 - 4/12 = 1/12

  Hour 4 (B works): needs 1/12 at rate 1/4
  Time = (1/12) / (1/4) = 1/3 hour

  Total = 3 + 1/3 = 3 hrs 20 min

  Answer: 3 hours 20 minutes ✓
```

---

## Type 6: Alternate Opening

**Q: Two pipes A and B can fill a tank in 20 and 30 minutes. They are opened alternately for 1 minute each, starting with A. When will the tank be full?**

```
  A's rate = 1/20 per minute
  B's rate = 1/30 per minute

  In 2-minute cycle:
  Work = 1/20 + 1/30 = 5/60 = 1/12

  After 11 cycles (22 min):
  Work = 11/12, remaining = 1/12

  Minute 23 (A): fills 1/20
  After 23 min: 11/12 + 1/20
  = 55/60 + 3/60 = 58/60
  Remaining = 2/60 = 1/30

  Minute 24 (B): needs 1/30 at rate 1/30
  = exactly 1 minute

  Total = 24 minutes

  Answer: 24 minutes ✓
```

---

## Type 7: When to Close a Pipe

**Q: Two pipes A and B fill a tank in 10 and 15 hours. Both are opened but B is closed some time before the tank is full. Tank fills in 8 hours. When was B closed?**

```
  A works full 8 hrs: 8/10 = 4/5
  Remaining = 1 - 4/5 = 1/5

  B must have filled 1/5
  B's rate = 1/15
  Time B worked = (1/5) / (1/15) = 3 hrs

  B was closed after 3 hrs
  = 8 - 3 = 5 hrs before tank was full

  0─────3hr────────────8hr
  |═A+B═|═════A only═══|
  B closed after 3 hrs

  A's 8hr work + B's 3hr work = 1
  4/5 + 3/15 = 4/5 + 1/5 = 1 ✓

  Answer: B was closed after 3 hours ✓
```

---

## Type 8: Tank Never Fills

**Q: An inlet pipe fills at 5 litres/min. An outlet drains at 7 litres/min. If the tank has 200 litres, when will it be empty?**

```
  Inlet = +5 L/min
  Outlet = -7 L/min
  Net = 5 - 7 = -2 L/min (draining)

  Tank has 200 litres
  Time to empty = 200/2 = 100 minutes

  Inlet ──→ +5 L/min ──┐
  Outlet ──→ -7 L/min ──┤ Net = -2
                        └──→ draining!

  Tank: 200L at -2 L/min
  Empty in 200/2 = 100 min

  NOTE: When outlet > inlet,
  tank NEVER fills, only drains!

  Answer: Empty in 100 minutes ✓
```

---

## Type 9: Find Rate from Pairs

**Q: Pipes A+B fill in 6 hrs, B+C fill in 8 hrs, A+C fill in 12 hrs. How long for all three together?**

```
  A+B = 1/6, B+C = 1/8, A+C = 1/12

  Add all three:
  2(A+B+C) = 1/6 + 1/8 + 1/12
  LCM = 24
  = 4/24 + 3/24 + 2/24 = 9/24 = 3/8

  A+B+C = 3/16
  Time = 16/3 = 5 hrs 20 min

  A+B = 1/6  ─┐
  B+C = 1/8  ─┤ add all
  A+C = 1/12 ─┘
  2(A+B+C) = 3/8
  A+B+C = 3/16 → 16/3 hrs

  Answer: 5 hours 20 minutes ✓
```

---

## Type 10: Three Pipes Together

**Q: Pipe A fills in 12 hrs, B fills in 15 hrs, and C empties in 20 hrs. If all are opened, how long to fill?**

```
  A = 1/12, B = 1/15, C = -1/20

  Net = 1/12 + 1/15 - 1/20
  LCM(12, 15, 20) = 60
  = 5/60 + 4/60 - 3/60
  = 6/60 = 1/10 per hour

  Time = 10 hours

  A ──→ +1/12 ──┐
  B ──→ +1/15 ──┤──→ 1/10/hr
  C ──→ -1/20 ──┘──→ 10 hrs

  LCM approach:
  A = 5, B = 4, C = -3 (per hr of 60)
  Net = 5 + 4 - 3 = 6 units/hr
  Total = 60/6 = 10 hrs

  Answer: 10 hours ✓
```
