# Calendar - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Odd Days Table

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Odd Days = remainder when total days / 7                           │
│                                                                     │
│  Day Code:                                                          │
│  0 = Sunday     1 = Monday     2 = Tuesday                          │
│  3 = Wednesday  4 = Thursday   5 = Friday     6 = Saturday          │
│                                                                     │
│  Month Codes (odd days in each month):                              │
│  Jan = 3   Feb = 0/1   Mar = 3   Apr = 2                           │
│  May = 3   Jun = 2     Jul = 3   Aug = 3                           │
│  Sep = 2   Oct = 3     Nov = 2   Dec = 3                           │
│                                                                     │
│  (Feb = 0 for ordinary year, 1 for leap year)                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Year & Century Odd Days

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Odd days in a year:                                                │
│  Ordinary year (365 days) = 365/7 = 52 weeks + 1 day  → 1 odd day  │
│  Leap year     (366 days) = 366/7 = 52 weeks + 2 days → 2 odd days │
│                                                                     │
│  Odd days in a century:                                             │
│  100 years = 76 ordinary + 24 leap                                  │
│            = 76×1 + 24×2 = 124 odd days                             │
│            = 124/7 = 17 weeks + 5 days → 5 odd days                 │
│                                                                     │
│  Century Pattern:                                                   │
│  100 years → 5 odd days                                             │
│  200 years → 3 odd days    (10/7 rem 3)                             │
│  300 years → 1 odd day     (15/7 rem 1)                             │
│  400 years → 0 odd days    (20/7 rem 6 + 1 extra = 0)              │
│                                                                     │
│  Pattern repeats: 0, 5, 3, 1 (for 400, 100, 200, 300)              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Leap Year Rules

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  LEAP YEAR RULES:                                                   │
│                                                                     │
│  Step 1: Divisible by 4?       → YES → go to Step 2                │
│                                → NO  → Ordinary year                │
│                                                                     │
│  Step 2: Divisible by 100?     → NO  → LEAP YEAR                   │
│                                → YES → go to Step 3                │
│                                                                     │
│  Step 3: Divisible by 400?     → YES → LEAP YEAR                   │
│                                → NO  → Ordinary year                │
│                                                                     │
│  Examples:                                                          │
│  2024 → /4 YES, /100 NO  → LEAP                                    │
│  1900 → /4 YES, /100 YES, /400 NO  → NOT LEAP                      │
│  2000 → /4 YES, /100 YES, /400 YES → LEAP                          │
│  1700 → /4 YES, /100 YES, /400 NO  → NOT LEAP                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Calendar Repeat Rules

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Same calendar repeats when total odd days = 0 (mod 7)              │
│                                                                     │
│  After ordinary year: +1 odd day                                    │
│  After leap year:     +2 odd days                                   │
│                                                                     │
│  Gap pattern (from an ordinary year):                               │
│    +6, +11, +11 ... (repeats every 28 years in general)             │
│                                                                     │
│  Gap pattern (from a leap year):                                    │
│    +28 years (leap calendar repeats every 28 years)                 │
│                                                                     │
│  EXCEPTION: around century years (1900, 2100 etc.)                  │
│  pattern may break — always verify by counting odd days             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT -- Visual Guide

```
Finding the Day of Any Date — Master Method

  ╔═══ STEP-BY-STEP ODD DAYS METHOD ═══╗

  To find day of DD/MM/YYYY:

  Step 1: Count odd days in completed centuries
          Use pattern: 400→0, 100→5, 200→3, 300→1

  Step 2: Count odd days in remaining completed years
          Each ordinary year = 1, each leap year = 2
          (Take mod 7 at the end)

  Step 3: Count odd days in completed months of that year
          Jan=3, Feb=0/1, Mar=3, Apr=2, May=3, Jun=2
          Jul=3, Aug=3, Sep=2, Oct=3, Nov=2, Dec=3

  Step 4: Add the day (DD)

  Step 5: Total odd days = (Step1 + Step2 + Step3 + Step4) mod 7

  Step 6: Map to day:
          0=Sun  1=Mon  2=Tue  3=Wed  4=Thu  5=Fri  6=Sat


  ╔═══ EXAMPLE: 15 August 1947 ═══╗

  Century: 1900 years = 1600 + 300
           1600 → 0 (400×4)
            300 → 1
           Total = 1

  Years: 1901 to 1947 = 47 years
         Leap years = 47/4 = 11
         Ordinary   = 47 - 11 = 36
         Odd days = 36×1 + 11×2 = 58
         58 mod 7 = 2

  Months: Jan(3) + Feb(0) + Mar(3) + Apr(2) +
          May(3) + Jun(2) + Jul(3) = 16
          16 mod 7 = 2

  Day: 15 → 15 mod 7 = 1

  Total = 1 + 2 + 2 + 1 = 6 → FRIDAY ✓
```

---

## Type 1: Odd Days Concept

**Q: What are odd days? Find odd days in 10 days.**

```
  ╔═══ ODD DAYS ═══╗
  │ Odd days = remainder when total days ÷ 7 │

  10 days:
  ┌──────────────────────┐
  │ 10 ÷ 7 = 1 week + 3 │
  └──────────────────────┘
  Odd days = 3

  Examples:
  ───────────────────────
  15 days → 15/7 = 2w + 1 → 1 odd day
  30 days → 30/7 = 4w + 2 → 2 odd days
  365 days → 365/7 = 52w + 1 → 1 odd day
  366 days → 366/7 = 52w + 2 → 2 odd days

  Day mapping:
  0=Sun  1=Mon  2=Tue  3=Wed
  4=Thu  5=Fri  6=Sat ✓
```

---

## Type 2: Leap Year Rules

**Q: Which of these are leap years: 1600, 1700, 1800, 1900, 2000, 2024?**

```
  ╔═══ LEAP YEAR DECISION TREE ═══╗

         Divisible by 4?
          /          \
        YES          NO → ORDINARY
        /
  Divisible by 100?
    /          \
  YES          NO → LEAP YEAR
  /
  Divisible by 400?
    /          \
  YES          NO → ORDINARY
  LEAP

  1600 → /4 ✓ → /100 ✓ → /400 ✓ → LEAP ✓
  1700 → /4 ✓ → /100 ✓ → /400 ✗ → ORDINARY ✓
  1800 → /4 ✓ → /100 ✓ → /400 ✗ → ORDINARY ✓
  1900 → /4 ✓ → /100 ✓ → /400 ✗ → ORDINARY ✓
  2000 → /4 ✓ → /100 ✓ → /400 ✓ → LEAP ✓
  2024 → /4 ✓ → /100 ✗ → LEAP ✓
```

---

## Type 3: Find Day of a Given Date

**Q: What day was 26 January 1950 (Republic Day)?**

```
  Date: 26/01/1950

  Step 1 — Century odd days (1900 years):
    1600 years → 0 odd days (400×4)
     300 years → 1 odd day
    Total = 0 + 1 = 1

  Step 2 — Remaining years (1901-1949 = 49 years):
    Leap years in 49 = 49/4 = 12
    Ordinary = 49 - 12 = 37
    Odd days = 37×1 + 12×2 = 61
    61 mod 7 = 5

  Step 3 — Completed months (none, Jan not complete):
    No completed months before Jan 26
    Odd days = 0

  Step 4 — Day: 26
    26 mod 7 = 5

  Step 5 — Total:
    1 + 5 + 0 + 5 = 11
    11 mod 7 = 4 → THURSDAY ✓
```

---

## Type 4: Odd Days in a Year

**Q: How many odd days in year 2023? In year 2024?**

```
  ╔═══ ODD DAYS IN A YEAR ═══╗

  Ordinary year (365 days):
  ┌────────────────────────────┐
  │ 365 / 7 = 52 weeks + 1    │
  │ Odd days = 1               │
  └────────────────────────────┘

  Leap year (366 days):
  ┌────────────────────────────┐
  │ 366 / 7 = 52 weeks + 2    │
  │ Odd days = 2               │
  └────────────────────────────┘

  2023 → not divisible by 4 → Ordinary → 1 odd day ✓
  2024 → divisible by 4, not by 100 → Leap → 2 odd days ✓

  MEANING:
  If Jan 1, 2023 = Sunday (0)
  Then Jan 1, 2024 = 0+1 = Monday
  And  Jan 1, 2025 = 1+2 = Wednesday (2024 is leap) ✓
```

---

## Type 5: Odd Days in a Century

**Q: How many odd days in 300 years? In 400 years?**

```
  ╔═══ CENTURY ODD DAYS ═══╗

  100 years = 76 ordinary + 24 leap years
  Odd days  = 76×1 + 24×2 = 124
  124 mod 7 = 17w + 5 → 5 odd days

  ┌─────────────────────────────────┐
  │  Century  │  Odd Days           │
  │───────────┼─────────────────────│
  │  100 yrs  │    5                │
  │  200 yrs  │    3  (10 mod 7)    │
  │  300 yrs  │    1  (15 mod 7)    │
  │  400 yrs  │    0  (20+1 mod 7)  │
  └─────────────────────────────────┘
  (+1 because 400th year is a leap century)

  Pattern repeats every 400 years: 0, 5, 3, 1

  300 years → 1 odd day ✓
  400 years → 0 odd days ✓

  This means: same day repeats after every
  400 years (since 0 odd days) ✓
```

---

## Type 6: Day X Days Ago / X Days From Now

**Q: Today is Wednesday. What day was 65 days ago? What day will it be 45 days from now?**

```
  ╔═══ DAYS AGO / FROM NOW ═══╗

  Wednesday = Day 3

  ─── 65 DAYS AGO ───
  65 mod 7 = 9w + 2 → 2 odd days
  Go BACKWARD: 3 - 2 = 1 → Monday ✓

  ─── 45 DAYS FROM NOW ───
  45 mod 7 = 6w + 3 → 3 odd days
  Go FORWARD: 3 + 3 = 6 → Saturday ✓

  RULES:
  ┌────────────────────────────────────┐
  │ Future → ADD odd days to current   │
  │ Past   → SUBTRACT odd days        │
  │ If result < 0 → add 7             │
  │ If result > 6 → subtract 7        │
  └────────────────────────────────────┘

  Example: Friday (5), 20 days ago
  20 mod 7 = 6
  5 - 6 = -1 → -1 + 7 = 6 → Saturday ✓
```

---

## Type 7: Full Calculation for a Specific Date

**Q: What day of the week was 15 August 1947?**

```
  ╔═══ COMPLETE STEP-BY-STEP ═══╗

  Date: 15/08/1947

  STEP 1 — Centuries (1900 years = 1600+300):
    1600 yrs = 4 × 400 → 0 odd days
    300 yrs  → 1 odd day
    Century total = 1

  STEP 2 — Years (1901 to 1946 = 46 completed years):
    Leap years: 46/4 = 11 (1904,1908,...1944)
    Ordinary:   46 - 11 = 35
    Odd days = 35×1 + 11×2 = 57
    57 mod 7 = 1

  STEP 3 — Months (Jan to Jul completed in 1947):
    Jan=3  Feb=0  Mar=3  Apr=2
    May=3  Jun=2  Jul=3
    Total = 16, mod 7 = 2

  STEP 4 — Days: 15
    15 mod 7 = 1

  STEP 5 — Grand Total:
    1 + 1 + 2 + 1 = 5

  5 mod 7 = 5 → FRIDAY ✓

  ┌──────────────────────────────┐
  │ 15 Aug 1947 = FRIDAY         │
  └──────────────────────────────┘
```

---

## Type 8: Feb 29 Occurrences Between Two Years

**Q: How many times does Feb 29 occur from 2001 to 2100?**

```
  ╔═══ FEB 29 COUNT ═══╗

  Feb 29 exists ONLY in leap years.

  Leap years from 2001-2100:
  2004, 2008, 2012, ..., 2096

  Count = (2096 - 2004)/4 + 1
        = 92/4 + 1
        = 23 + 1
        = 24

  BUT WAIT: Is 2100 a leap year?
  2100 / 4 = yes
  2100 / 100 = yes
  2100 / 400 = NO → NOT a leap year

  2100 is NOT in our list (2096 is last).
  So answer = 24 times ✓

  ┌──────────────────────────────────────┐
  │ TRICK: Count multiples of 4 in range │
  │ Then REMOVE century years not        │
  │ divisible by 400 (1800, 1900, 2100)  │
  └──────────────────────────────────────┘

  From 1901 to 2000:
  Leap years = 2000-1904/4 + 1 = 25
  Remove 1900? Not in range (starts 1901)
  But 2000/400 = yes → keep it
  Answer = 25 (1904,1908,...,1996,2000) ✓
```

---

## Type 9: On Which Dates Does a Particular Day Fall

**Q: If March 1, 2023 is Wednesday, on which dates does Friday fall in March 2023?**

```
  ╔═══ FIND ALL FRIDAYS ═══╗

  March 1 = Wednesday (day 3)
  Friday = day 5

  Gap = 5 - 3 = 2 days ahead
  First Friday = March 1 + 2 = March 3

  Then every 7 days:
  ┌────────────────────────────────┐
  │  March  3 → Friday             │
  │  March 10 → Friday (+7)        │
  │  March 17 → Friday (+7)        │
  │  March 24 → Friday (+7)        │
  │  March 31 → Friday (+7)        │
  └────────────────────────────────┘

  Answer: 3, 10, 17, 24, 31 ✓

  METHOD:
  1. Find gap from known day to target day
  2. If target day < known day → add 7 first
  3. First occurrence = date + gap
  4. Then keep adding 7 until month ends ✓
```

---

## Type 10: Calendar Repeats

**Q: If 2017 calendar starts on Sunday, when will the same calendar repeat?**

```
  ╔═══ CALENDAR REPEAT RULES ═══╗

  Same calendar = same starting day + same leap/ordinary

  2017 is ordinary (not divisible by 4)
  Jan 1, 2017 = Sunday

  Count cumulative odd days from 2017:
  ┌──────┬──────────┬───────────┬───────────┐
  │ Year │ Type     │ Odd days  │ Cumul % 7 │
  │──────┼──────────┼───────────┼───────────│
  │ 2017 │ ordinary │ 1         │ 1         │
  │ 2018 │ ordinary │ 1         │ 2         │
  │ 2019 │ ordinary │ 1         │ 3         │
  │ 2020 │ LEAP     │ 2         │ 5         │
  │ 2021 │ ordinary │ 1         │ 6         │
  │ 2022 │ ordinary │ 1         │ 0 (=7)    │
  └──────┴──────────┴───────────┴───────────┘

  After 2022: cumulative = 0 → same starting day!
  But 2023 must also be ordinary (like 2017).
  2023 is ordinary ✓

  Answer: 2023 has the same calendar as 2017 ✓

  ┌──────────────────────────────────────────┐
  │ Ordinary year repeats: +6, +11, or +11  │
  │ Leap year repeats: every 28 years       │
  │ MUST match: same start day + same type  │
  └──────────────────────────────────────────┘
```

---

## Type 11: Number of Sundays/Mondays in a Month

**Q: How many Sundays are in January 2023 if Jan 1 is Sunday?**

```
  ╔═══ COUNT SPECIFIC DAYS IN A MONTH ═══╗

  January has 31 days.
  31 = 4 weeks + 3 extra days

  Jan 1 = Sunday
  So Sundays fall on: 1, 8, 15, 22, 29

  ┌────────────────────────────────────┐
  │  Count = 5 Sundays ✓               │
  └────────────────────────────────────┘

  Extra days after 4 weeks (28 days) = 3
  Days 29, 30, 31 are: Sun, Mon, Tue

  RULE:
  ┌───────────────────────────────────────────┐
  │ 31-day month: 4 weeks + 3 extra days      │
  │   → 3 days appear 5 times, rest 4 times   │
  │                                           │
  │ 30-day month: 4 weeks + 2 extra days      │
  │   → 2 days appear 5 times, rest 4 times   │
  │                                           │
  │ 28-day month: 4 weeks + 0 extra days      │
  │   → all days appear exactly 4 times       │
  │                                           │
  │ 29-day month: 4 weeks + 1 extra day       │
  │   → 1 day appears 5 times, rest 4 times   │
  └───────────────────────────────────────────┘

  If Jan 1 = Sunday, extra days = Sun, Mon, Tue
  Sundays = 5, Mondays = 5, Tuesdays = 5
  All others = 4 ✓
```
