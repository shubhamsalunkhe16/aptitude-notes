# Work and Wages - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Golden Rule

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Wages ∝ Work Done (Efficiency)                                    │
│  Wages are ALWAYS split by EFFICIENCY ratio                        │
│  NOT by number of days worked!                                     │
│                                                                     │
│  More work done = More pay                                         │
│  Share = (Your eff / Total eff) × Total Wage                       │
│                                                                     │
│  TRAP: Don't split by days ratio!                                  │
│  Split by ACTUAL WORK DONE ratio                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### LCM Method for Wages

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Step 1: LCM of days = Total Work                                  │
│  Step 2: Eff of each = Total Work / their days                     │
│  Step 3: Ratio of wages = Ratio of efficiency                      │
│  Step 4: Split total wage by eff ratio                             │
│                                                                     │
│  If someone works fewer days:                                      │
│     Actual work = eff × days worked                                │
│     Share = (actual work / total work) × total wage                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Daily Wage & Piece Rate

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Daily wage = Total payment / Days worked                          │
│  Daily wage per man = Total payment / (Men × Days)                 │
│                     = Total payment / Total man-days               │
│                                                                     │
│  Piece rate = Payment per unit produced                            │
│  Total pay = Accepted units × Rate per unit                        │
│            - Rejected units × Penalty per unit                     │
│                                                                     │
│  Contractor pay:                                                   │
│     Total cost = Σ(workers × rate per day × number of days)        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Overtime Formula

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Overtime rate = Normal rate × multiplier                           │
│  Common multipliers: 1.5× or 2× normal rate                       │
│                                                                     │
│  Total pay = (Normal hrs × Normal rate)                            │
│            + (Overtime hrs × Overtime rate)                         │
│                                                                     │
│  If daily wage given:                                              │
│     Hourly rate = Daily wage / Normal hours per day                │
│     OT rate = Hourly rate × OT multiplier                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Type 1: Basic Wages Split by Efficiency Ratio

**Q: A can do a work in 10 days and B can do it in 15 days. They work together and earn Rs.5000. What is the share of each?**

```
LCM(10, 15) = 30 (Total Work)

        (30) Total Work
          |
     -----+-----
     |          |
    (3)       (2)         ← Eff: 30/10 = 3, 30/15 = 2
     |          |
   (10d)     (15d)        ← Days
     A         B

Efficiency ratio = A : B = 3 : 2
Total parts = 3 + 2 = 5

A's share = (3/5) × 5000 = Rs.3000
B's share = (2/5) × 5000 = Rs.2000

Check: 3000 + 2000 = 5000 ✓
```

### Key Rule

```
Wages split by EFFICIENCY, not by DAYS!
  A (10 days) is MORE efficient → gets MORE pay
  B (15 days) is LESS efficient → gets LESS pay

TRAP: If you split by days ratio (10:15 = 2:3),
      you'd wrongly give B more!
```

---

## Type 2: One Person Works More Days — Share of Wages

**Q: A can do a work in 10 days and B in 15 days. A works for 4 days and B works for 9 days to complete the work. If the total wage is Rs.3000, what is each person's share?**

```
LCM(10, 15) = 30 (Total Work)
A eff = 3/day,  B eff = 2/day

A's actual work = 4 × 3 = 12 units
B's actual work = 9 × 2 = 18 units
Total work done = 12 + 18 = 30 ✓
```

### Timeline

```
|◄──── A works 4 days ────►|
|  3/day × 4 = 12 units    |

        |◄──── B works 9 days ────────►|
        |  2/day × 9 = 18 units        |

Wage ratio = Work done ratio = 12 : 18 = 2 : 3

A's share = (2/5) × 3000 = Rs.1200
B's share = (3/5) × 3000 = Rs.1800

Check: 1200 + 1800 = 3000 ✓
```

### Key Difference from Type 1

```
Type 1: Both work same days → split by eff ratio
Type 2: Different days → split by ACTUAL WORK DONE
  Actual work = efficiency × days actually worked
```

---

## Type 3: Wages for Partial Work Done

**Q: A can do a piece of work in 20 days. He works for 8 days and leaves. B finishes the remaining work in 9 days. If the total contract amount is Rs.4000, how much should B get?**

```
Total Work = 20 units, A eff = 1/day

A works 8 days = 8 × 1 = 8 units
Remaining = 20 - 8 = 12 units
B does 12 units in 9 days
```

### Timeline

```
|◄──── 8 days ────►|◄──── 9 days ────►|
|                   |                   |
|   A works         |   B finishes     |
|   8 units         |   12 units       |
|   (8/20 of work)  |   (12/20 of work)|
|◄── A's share ───►|◄── B's share ───►|

Wage ratio = Work done ratio = 8 : 12 = 2 : 3

A gets = (2/5) × 4000 = Rs.1600
B gets = (3/5) × 4000 = Rs.2400

Answer: B gets Rs.2400 ✓
```

### Key Insight

```
Even though B worked only 9 days vs A's 8 days,
B gets MORE because B did MORE work (12 vs 8 units).

Wages ∝ Work Done, NOT days worked!
```

---

## Type 4: Find Daily Wage from Total Work and Payment

**Q: 15 men can complete a work in 12 days and are paid Rs.54000 in total. What is the daily wage of each man?**

```
Total man-days = 15 men × 12 days = 180 man-days

┌────────────────────────────────┐
│  Total payment   = Rs.54,000   │
│  Total man-days  = 180         │
│                                │
│  Daily wage per man            │
│  = Payment / man-days          │
│  = 54000 / 180                 │
│  = Rs.300 per man per day      │
└────────────────────────────────┘

Check: 15 × 12 × 300 = 54,000 ✓
```

### Variations

```
Total man-days = Men × Days
Total man-hours = Men × Days × Hours

Daily wage = Total Payment / Total man-days
Hourly wage = Total Payment / Total man-hours

If 20 men, 10 days, Rs.80,000:
  Man-days = 200
  Daily wage = 80000/200 = Rs.400/man/day
```

---

## Type 5: Contractor Hires Workers at Different Rates

**Q: A contractor hires 10 workers at Rs.500/day and 8 workers at Rs.400/day. If the work takes 6 days, what is the total labor cost?**

```
Group 1: 10 workers × Rs.500/day = Rs.5000/day
Group 2: 8 workers × Rs.400/day  = Rs.3200/day

┌──────────────┬──────────────┐
│  Group 1     │  Group 2     │
│  10 workers  │  8 workers   │
│  @Rs.500/day │  @Rs.400/day │
│  = Rs.5000/d │  = Rs.3200/d │
└──────────────┴──────────────┘

Total daily cost = 5000 + 3200 = Rs.8200/day

Total for 6 days = 8200 × 6 = Rs.49,200 ✓
```

### General Formula

```
Total cost = Σ (workers_i × rate_i × days_i)

If different groups work different days:
  Cost = (n1 × r1 × d1) + (n2 × r2 × d2) + ...
```

---

## Type 6: Men and Women at Different Daily Wages

**Q: 5 men and 4 women can complete a work in 8 days. Daily wage of a man is Rs.600 and a woman is Rs.400. If 2 men = 3 women in efficiency, what is the total labor cost?**

```
Efficiency: 2M = 3W → 1M = 1.5W
(Efficiency matters for WORK calculation,
 but wages are paid per PERSON per DAY)

┌──────────────────┬──────────────────┐
│  5 Men           │  4 Women         │
│  @Rs.600/day     │  @Rs.400/day     │
│  × 8 days        │  × 8 days        │
│  = Rs.24,000     │  = Rs.12,800     │
└──────────────────┴──────────────────┘

Men cost:   5 × 600 × 8 = Rs.24,000
Women cost: 4 × 400 × 8 = Rs.12,800

Total labor cost = 24,000 + 12,800 = Rs.36,800 ✓
```

### Key Insight

```
Efficiency ratio is used to find HOW MANY
  workers are needed or HOW LONG work takes.

But wages are paid based on the AGREED RATE
  per person per day — not by efficiency!

Don't confuse: efficiency ratio ≠ wage ratio
  (unless the question specifically says so)
```

---

## Type 7: Piece-Rate Work (Payment per Unit)

**Q: A worker is paid Rs.15 for each finished item and Rs.5 is deducted for each rejected item. In a day he produces 50 items, out of which 8 are rejected. What is his daily earning?**

```
Total items = 50
Rejected = 8
Accepted = 50 - 8 = 42

┌─────────────┬─────────────┐
│  Accepted   │  Rejected   │
│  42 items   │  8 items    │
│  @Rs.15     │  @Rs.5      │
│  = EARNED   │  = DEDUCTED │
└─────────────┴─────────────┘

Earnings  = 42 × 15 = Rs.630
Deduction = 8 × 5   = Rs.40

Net pay = 630 - 40 = Rs.590 ✓
```

### Variations

```
Pure piece rate (no penalty):
  Pay = units × rate per unit

With penalty:
  Pay = (good units × rate) - (bad units × penalty)

With minimum guarantee:
  Pay = MAX(guaranteed amount, piece rate earnings)

With bonus above target:
  Pay = (target × normal rate) + (extra × bonus rate)
```

---

## Type 8: Overtime Pay Calculation

**Q: A worker earns Rs.480 for an 8-hour day. Overtime is paid at 1.5 times the normal hourly rate. If he works 11 hours in a day, what is his total earning for that day?**

```
Normal hourly rate = Rs.480 / 8 = Rs.60/hr
Overtime rate = 1.5 × 60 = Rs.90/hr

Overtime hours = 11 - 8 = 3 hrs
```

### Breakdown

```
|◄──── 8 hrs (normal) ────►|◄── 3 hrs (OT) ──►|
|                           |                    |
|   Rs.60/hr                |   Rs.90/hr         |
|   8 × 60 = Rs.480        |   3 × 90 = Rs.270  |
|                           |                    |

Total = Normal + Overtime
      = Rs.480 + Rs.270
      = Rs.750 ✓
```

### Common OT Multipliers

```
1.5× (time and a half) — most common
2×   (double time)     — weekends/holidays
3×   (triple time)     — special cases

Formula:
  Total = (Normal hrs × Rate) + (OT hrs × Rate × Multiplier)
  Total = Rate × [Normal hrs + (OT hrs × Multiplier)]

Quick calc for above:
  = 60 × [8 + (3 × 1.5)]
  = 60 × [8 + 4.5]
  = 60 × 12.5
  = Rs.750 ✓
```

---

## Quick Reference Table

```
┌───────────────────────────────┬─────────────────────────────────┐
│ Scenario                      │ Key Idea                        │
├───────────────────────────────┼─────────────────────────────────┤
│ Basic wage split              │ Split by efficiency ratio       │
│ Different days worked         │ Split by actual work done       │
│ Partial work                  │ Wage ∝ fraction of work done    │
│ Daily wage                    │ Total / (men × days)            │
│ Different worker rates        │ Sum each group's cost           │
│ Men + Women wages             │ Pay per person, not efficiency  │
│ Piece rate                    │ Good×rate - Bad×penalty         │
│ Overtime                      │ Normal + (OT hrs × OT rate)    │
└───────────────────────────────┴─────────────────────────────────┘
```
