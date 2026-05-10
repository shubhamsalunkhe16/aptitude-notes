module.exports = {
  title: "CALENDAR — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Odd Days Table", color: "#1971c2", bg: "#d0ebff",
      text: "Odd Days = remainder when total days / 7\n\nDay Code:\n0=Sun  1=Mon  2=Tue  3=Wed\n4=Thu  5=Fri  6=Sat\n\nMonth Codes (odd days per month):\nJan=3  Feb=0/1  Mar=3  Apr=2\nMay=3  Jun=2    Jul=3  Aug=3\nSep=2  Oct=3    Nov=2  Dec=3\n(Feb=0 ordinary, 1 leap)\n\nWHY: 7 days make a full week. Only the\nremainder (odd days) shifts the weekday.\n\nEx: 17 days → 17/7 = 2 weeks + 3\n  Odd days = 3 → day shifts by 3" },
    { title: "Year & Century Odd Days", color: "#2f9e44", bg: "#ebfbee",
      text: "Ordinary year (365d) → 1 odd day\nLeap year (366d)     → 2 odd days\n\nCentury odd days:\n100 yrs → 5    200 yrs → 3\n300 yrs → 1    400 yrs → 0\n\nPattern repeats: 0, 5, 3, 1\n(for 400, 100, 200, 300)\n\nWHY: 365 = 52×7 + 1, so each ordinary year\nadds 1 odd day. Leap adds 2 (366 = 52×7+2).\n\nEx: 100 yrs = 76 ord + 24 leap\n  = 76×1 + 24×2 = 124, 124%7 = 5 odd days" },
    { title: "Leap Year Rules", color: "#e03131", bg: "#ffe3e3",
      text: "÷4 YES → ÷100 NO → LEAP\n÷4 YES → ÷100 YES → ÷400 YES → LEAP\n÷4 YES → ÷100 YES → ÷400 NO → ORDINARY\n÷4 NO → ORDINARY\n\n2024→Leap  1900→Not  2000→Leap\n1700→Not   1600→Leap  2100→Not\n\nWHY: Earth orbits in ~365.2425 days. ÷4 adds\na day every 4 yrs, but ÷100 removes it, and\n÷400 adds it back for fine-tuning.\n\nEx: 1900 → ÷4 Y, ÷100 Y, ÷400 N → NOT leap" },
    { title: "Calendar Repeat Rules", color: "#7048e8", bg: "#e5dbff",
      text: "Same calendar = same start day + same type\n\nOrdinary year repeats: +6, +11, +11\nLeap year repeats: every 28 years\n\nCount cumulative odd days until\nsum mod 7 = 0, then verify same\ntype (ordinary/leap)\n\n400 years = exact repeat (0 odd days)\n\nWHY: Calendar repeats when total odd days\n= 0 mod 7 AND same type (ord/leap).\n\nEx: 2017(ord) → +6 = 2023(ord)\n  Odd days: 1+1+1+2+1+1 = 7%7 = 0 ✓" }
  ],

  types: [
    { num: "1", title: "Odd Days Concept", color: "#2f9e44", bg: "#ebfbee",
      q: "What are odd days? Find odd days in 10 days.",
      tree: "LOGIC:\nStep 1: Odd days = total days mod 7\n  10/7 = 1 week + 3 remainder\nStep 2: 3 odd days\n\nTRICK:\nJust divide by 7, take remainder\n15 days → 15%7 = 1 odd day\n365 days → 365%7 = 1 odd day\n366 days → 366%7 = 2 odd days\n\n  Day codes: 0=Sun 1=Mon 2=Tue\n  3=Wed 4=Thu 5=Fri 6=Sat\n\nAnswer: 10 days = 3 odd days ✓" },

    { num: "2", title: "Leap Year Rules", color: "#1971c2", bg: "#d0ebff",
      q: "Which are leap years: 1600, 1700, 1900, 2000, 2024?",
      tree: "LOGIC:\nStep 1: Apply decision tree\n  ÷4? → ÷100? → ÷400?\n  1600: /4Y /100Y /400Y → LEAP\n  1700: /4Y /100Y /400N → ORDINARY\n  1900: /4Y /100Y /400N → ORDINARY\n  2000: /4Y /100Y /400Y → LEAP\n  2024: /4Y /100N → LEAP\n\n  ÷4?──NO──→ ORDINARY\n   |YES\n  ÷100?──NO──→ LEAP\n   |YES\n  ÷400?──NO──→ ORDINARY\n   |YES\n   LEAP\n\nTRICK:\nCentury years: must ÷400\nOther years: just ÷4\n1600✓ 1700✗ 1800✗ 1900✗ 2000✓\n\nAnswer: 1600, 2000, 2024 = Leap ✓" },

    { num: "3", title: "Find Day of a Given Date", color: "#e8590c", bg: "#fff4e6",
      q: "What day was 26 January 1950 (Republic Day)?",
      tree: "LOGIC:\nStep 1: Century: 1600→0, 300→1 = 1\nStep 2: Years 1901-1949 (49yr)\n  Leap=12, Ord=37 → 37+24=61%7=5\nStep 3: Months: 0 (Jan), Day: 26%7=5\nStep 4: Total = 1+5+0+5 = 11%7 = 4\n\n  Century + Years + Months + Day\n     1    +   5   +   0   +  5  = 11\n  11 % 7 = 4 → Thursday\n  0=Sun 1=Mon 2=Tue 3=Wed 4=Thu\n\nTRICK:\n4 = Thursday (0=Sun...6=Sat)\nAdd: century + years + months + day\nAll mod 7 at the end\n\nAnswer: Thursday ✓" },

    { num: "4", title: "Odd Days in a Year", color: "#7048e8", bg: "#e5dbff",
      q: "How many odd days in 2023? In 2024?",
      tree: "LOGIC:\nStep 1: Ordinary = 365/7 = 52w+1 → 1\nStep 2: Leap = 366/7 = 52w+2 → 2\n  2023 → ordinary → 1 odd day\n  2024 → leap → 2 odd days\n\n  365 = |52 full weeks| +1 day\n  366 = |52 full weeks| +2 days\n  Ordinary → 1 odd    Leap → 2 odd\n\nTRICK:\nOrdinary year = 1, Leap year = 2\nAlways! No calculation needed.\nJan 1 shifts by 1 (ord) or 2 (leap)\n\nAnswer: 2023=1, 2024=2 odd days ✓" },

    { num: "5", title: "Odd Days in a Century", color: "#0c8599", bg: "#c3fae8",
      q: "How many odd days in 300 years? In 400 years?",
      tree: "LOGIC:\nStep 1: 100yr = 76ord+24leap\n  = 76+48 = 124, 124%7 = 5\nStep 2: 200yr=10%7=3, 300yr=15%7=1\n  400yr=20%7=6+extra leap=0\n\n  100yr → 5 odd   200yr → 3 odd\n  300yr → 1 odd   400yr → 0 odd\n  Pattern: 5, 3, 1, 0 (repeats!)\n\nTRICK:\nMemorize: 100→5, 200→3, 300→1, 400→0\nPattern repeats every 400 years\n400yr = 0 → calendar repeats!\n\nAnswer: 300yrs=1, 400yrs=0 ✓" },

    { num: "6", title: "Day X Days Ago / From Now", color: "#e03131", bg: "#ffe3e3",
      q: "Today is Wednesday. What day was 65 days ago?",
      tree: "LOGIC:\nStep 1: Wed=3, 65%7 = 2 odd days\nStep 2: Past → subtract: 3-2 = 1\n  1 = Monday\n\n  |←── 65 days ago ──| TODAY (Wed) |\n  Mon (code 1)         Wed (code 3)\n  shift = 65%7 = 2 days back\n\nTRICK:\nPast: day_code - odd_days (mod 7)\nFuture: day_code + odd_days (mod 7)\n65 ago: 3-2=1=Mon\n45 ahead: 3+3=6=Sat (45%7=3)\n\nAnswer: 65 ago = Monday ✓" },

    { num: "7", title: "Day of Week — Full Calculation", color: "#862e9c", bg: "#f3d9fa",
      q: "What day was 15 August 1947 (Independence Day)?",
      tree: "LOGIC:\nStep 1: Century: 1600→0, 300→1\nStep 2: Years 1901-1946 (46yr)\n  Leap=11, Ord=35 → 35+22=57%7=1\nStep 3: Months Jan-Jul: 3+0+3+2+3+2+3=16%7=2\nStep 4: Day: 15%7=1\n  Total = 1+1+2+1 = 5\n\n  Century + Years + Months + Day\n     1    +   1   +   2   +  1  = 5\n  5 = Friday (0=Sun...6=Sat)\n\nTRICK:\n5 = Friday\nSame method every time!\n\nAnswer: Friday ✓" },

    { num: "8", title: "Feb 29 Count Between Years", color: "#f08c00", bg: "#fff3bf",
      q: "How many times does Feb 29 occur from 2001 to 2100?",
      tree: "LOGIC:\nStep 1: Leap years: 2004,2008,...,2096\nStep 2: Count = (2096-2004)/4 + 1 = 24\n  Is 2100 leap? /4Y /100Y /400N → NO\n\n  2004 2008 2012 ... 2096 → 24 leaps\n  2100 → ÷100 Y, ÷400 N → NOT leap!\n  |████ 24 leap years ████|✗ 2100|\n\nTRICK:\nCount multiples of 4 in range\nRemove century years not ÷400\n2004 to 2096: (96-4)/4+1 = 24\n2100 excluded → still 24\n\nAnswer: 24 times ✓" },

    { num: "9", title: "Dates for a Particular Day", color: "#2f9e44", bg: "#ebfbee",
      q: "Mar 1, 2023 = Wed. On which dates does Fri fall in Mar?",
      tree: "LOGIC:\nStep 1: Wed=3, Fri=5, gap=2\n  First Fri = Mar 1+2 = Mar 3\nStep 2: Then +7 each: 3,10,17,24,31\n\n  Mar 2023:\n  Mon Tue Wed Thu Fri Sat Sun\n           1   2  [3]  4   5\n   6   7   8   9 [10] 11  12\n  13  14  15  16 [17] 18  19\n  20  21  22  23 [24] 25  26\n  27  28  29  30 [31]\n\nTRICK:\nGap = target - known day code\nIf gap<0: add 7\nFirst = known_date + gap\nThen every +7 until month ends\n\nAnswer: 3, 10, 17, 24, 31 ✓" },

    { num: "10", title: "Calendar Repeats", color: "#1971c2", bg: "#d0ebff",
      q: "2017 starts on Sunday. When will same calendar repeat?",
      tree: "LOGIC:\nStep 1: Count odd days from 2017:\n  2017(1) 2018(1) 2019(1) 2020(2)\n  2021(1) 2022(1) → sum=7%7=0\nStep 2: 2023 ordinary + sum=0 → MATCH!\n\n  2017 → 2018 → 2019 → 2020 → 2021 → 2022\n   +1     +1     +1     +2     +1     +1\n   cumulative: 1  2  3  5  6  7 → 7%7=0\n  2023 = ordinary (same type) ✓\n\nTRICK:\nOrdinary repeats: +6, +11, +11\nLeap repeats: every 28 years\n2017(ord)+6=2023 ✓\n\nAnswer: 2023 has same calendar ✓" },

    { num: "11", title: "Sundays/Mondays in a Month", color: "#e8590c", bg: "#fff4e6",
      q: "Jan 1 = Sunday. How many Sundays in January 2023?",
      tree: "LOGIC:\nStep 1: Jan=31 days = 4w+3 extra\n  Extra days: 29th,30th,31st\nStep 2: Jan 1=Sun → 29=Sun\n  Sundays: 1,8,15,22,29 = 5\n\n  Jan 2023 (starts Sunday):\n  Sun Mon Tue Wed Thu Fri Sat\n  [1]  2   3   4   5   6   7\n  [8]  9  10  11  12  13  14\n  [15] 16 17  18  19  20  21\n  [22] 23 24  25  26  27  28\n  [29] 30 31 → 5 Sundays!\n\nTRICK:\n31-day month: 3 days appear 5×\n30-day month: 2 days appear 5×\n28-day month: all days appear 4×\nFirst day + next 2 get 5 appearances\n\nAnswer: 5 Sundays in January ✓" }
  ]
};
