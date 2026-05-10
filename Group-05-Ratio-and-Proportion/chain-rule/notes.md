# Chain Rule - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Direct Proportion

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  If A increases → B increases (same direction)                      │
│  A₁ / A₂ = B₁ / B₂                                                 │
│                                                                     │
│  More goods → More cost                                             │
│  More men → More work done                                          │
│  More speed → More distance (in same time)                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Inverse Proportion

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  If A increases → B decreases (opposite direction)                  │
│  A₁ / A₂ = B₂ / B₁  (flip the right side)                          │
│                                                                     │
│  More men → Less days                                               │
│  More speed → Less time                                             │
│  More pipes → Less time to fill                                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Chain Rule (Mixed Proportions)

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Step 1: Identify each variable                                     │
│  Step 2: Mark Direct (D) or Inverse (I) with the unknown           │
│  Step 3: Set up proportion chain                                    │
│    Direct → same order ratio                                        │
│    Inverse → flipped ratio                                          │
│  Step 4: Multiply all ratios to get the answer                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Man-Days-Hours Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  M₁ × D₁ × H₁ = M₂ × D₂ × H₂                                     │
│  (when total work is the same)                                      │
│                                                                     │
│  M₁ × D₁ × H₁ / W₁ = M₂ × D₂ × H₂ / W₂                           │
│  (when work quantity differs)                                       │
│                                                                     │
│  Total work = Men × Days × Hours                                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Type 1: Direct Chain

**Q: If 15 books cost Rs 750, what is the cost of 25 books?**

```
  More books → More cost (Direct)

  15 books → Rs 750
  25 books → Rs ?

  15/25 = 750/x
  x = 750 × 25/15
  x = 1250

  15 books ─── Rs 750
  25 books ─── Rs ???
       ↓ Direct
  ? = 750 × (25/15) = 1250

  Answer: Cost = Rs 1250 ✓
```

---

## Type 2: Inverse Chain

**Q: If 12 men can finish a job in 20 days, how many days will 15 men take?**

```
  More men → Less days (Inverse)

  12 men → 20 days
  15 men → ? days

  12 × 20 = 15 × x
  x = 12 × 20 / 15
  x = 16 days

  12 men ─── 20 days
  15 men ─── ?? days
       ↓ Inverse
  ? = 20 × (12/15) = 16

  Answer: 16 days ✓
```

---

## Type 3: Mixed (Direct + Inverse)

**Q: If 8 men working 6 hours a day can finish a task in 12 days, how many days will 6 men working 8 hours a day take?**

```
  Identify variables:
  Men: 8 → 6   (more men, less days) INVERSE
  Hrs: 6 → 8   (more hrs, less days) INVERSE

  M₁ × D₁ × H₁ = M₂ × D₂ × H₂
  8 × 12 × 6 = 6 × D₂ × 8
  576 = 48 × D₂
  D₂ = 12

  Men  Hours  Days
  8    6      12
  6    8       ?
  INV  INV

  ? = 12 × (8/6) × (6/8) = 12

  Answer: 12 days ✓
```

---

## Type 4: Men-Days-Hours

**Q: If 20 men can build a wall 56 m long in 6 days, how many men are needed to build a 72 m wall in 8 days?**

```
  Identify variables:
  Wall: 56 → 72 (more wall, more men) DIRECT
  Days: 6 → 8   (more days, less men) INVERSE

  M₁ × D₁ / W₁ = M₂ × D₂ / W₂
  20 × 6 / 56 = M₂ × 8 / 72
  M₂ = 20 × 6 × 72 / (56 × 8)
  M₂ = 8640 / 448
  M₂ ≈ 19.3 → 20 men

  Wall  Days  Men
  56    6     20
  72    8      ?
  DIR   INV

  ? = 20 × (72/56) × (6/8) ≈ 19.3

  Answer: 20 men (rounded up) ✓
```

---

## Type 5: Cost-Weight Chain

**Q: If 36 kg of rice costs Rs 1080, what will 54 kg of rice cost?**

```
  More rice → More cost (Direct)

  36 kg → Rs 1080
  54 kg → Rs ?

  ? = 1080 × 54/36
  = 1080 × 3/2
  = 1620

  36 kg ─── Rs 1080
  54 kg ─── Rs ???
       ↓ Direct
  Rate = 1080/36 = Rs 30/kg
  Cost = 30 × 54 = 1620

  Answer: Rs 1620 ✓
```

---

## Type 6: Machines Chain

**Q: 5 machines produce 500 units in 10 hours. How many machines are needed to produce 800 units in 8 hours?**

```
  Identify variables:
  Units: 500 → 800 (more units, more machines) DIRECT
  Hours: 10 → 8   (less hours, more machines) INVERSE

  ? = 5 × (800/500) × (10/8)
  = 5 × 8/5 × 10/8
  = 10

  Units  Hours  Machines
  500    10     5
  800    8      ?
  DIR    INV

  ? = 5 × (800/500) × (10/8) = 10

  Answer: 10 machines ✓
```

---

## Type 7: Rations Chain

**Q: A garrison of 500 men has provisions for 27 days. After 3 days, 200 men leave. How many more days will the food last?**

```
  After 3 days:
  Remaining food = provisions for 24 days (for 500 men)
  Remaining men = 500 - 200 = 300

  More men → Less days (Inverse)
  500 men → 24 days
  300 men → ? days

  ? = 24 × 500/300
  = 24 × 5/3 = 40 days

  Day 0─────Day 3─────────Day ?
  500 men   200 men leave
  27 days   24 days food left
            300 men → 40 days

  Answer: 40 more days ✓
```

---

## Type 8: Wages Chain

**Q: If 18 workers earn Rs 5400 in 6 days, how much will 12 workers earn in 9 days?**

```
  Identify variables:
  Workers: 18 → 12 (fewer workers, less wages) DIRECT
  Days: 6 → 9     (more days, more wages) DIRECT

  ? = 5400 × (12/18) × (9/6)
  = 5400 × 2/3 × 3/2
  = 5400

  Workers  Days  Wages
  18       6     5400
  12       9      ?
  DIR      DIR

  ? = 5400 × (12/18) × (9/6) = 5400

  Answer: Rs 5400 ✓
```

---

## Type 9: 3-Variable Chain

**Q: If 10 men working 8 hours/day can make 20 shirts in 4 days, how many shirts can 15 men working 10 hours/day make in 6 days?**

```
  Identify variables:
  Men: 10 → 15  (more men, more shirts) DIRECT
  Hrs: 8 → 10   (more hrs, more shirts) DIRECT
  Days: 4 → 6   (more days, more shirts) DIRECT

  ? = 20 × (15/10) × (10/8) × (6/4)
  = 20 × 3/2 × 5/4 × 3/2
  = 20 × 45/16
  = 56.25 → 56 shirts

  Men  Hrs  Days  Shirts
  10   8    4     20
  15   10   6      ?
  DIR  DIR  DIR

  ? = 20 × (15/10) × (10/8) × (6/4) ≈ 56

  Answer: 56 shirts ✓
```

---

## Type 10: Speed-Time Chain

**Q: A train running at 60 km/h crosses a pole in 12 seconds. How long will it take at 40 km/h?**

```
  More speed → Less time (Inverse)
  Distance is same (train length)

  60 km/h → 12 sec
  40 km/h → ? sec

  ? = 12 × 60/40
  = 12 × 3/2 = 18 sec

  Speed  Time
  60     12 sec
  40      ? sec
  INV (same distance)

  ? = 12 × (60/40) = 18

  Verify: d = 60 × 5/18 × 12 = 200 m
  t = 200 / (40 × 5/18) = 18 sec ✓

  Answer: 18 seconds ✓
```
