module.exports = {
  "title": "MASTER FORMULA CHEATSHEET — ALL TOPICS (176 FORMULAS)",
  "formulas": [
    {
      "title": "Fractions And Decimals — Fraction Basics",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Proper fraction: numerator < denominator (3/7)\nImproper fraction: numerator >= denominator (7/3)\nMixed fraction: whole + proper (2 1/3)\n\nImproper to Mixed: divide num by den\n  7/3 = 2 remainder 1 = 2⅓\n\nMixed to Improper: (whole x den + num) / den\n  2⅓ = (2x3+1)/3 = 7/3\n\nEquivalent fractions: a/b = (a×k)/(b×k)\n\nWHY: Mixed→Improper: whole parts = whole×den pieces,\n  plus num pieces, all over den.\n\nEx: 3 2/5 → (3×5+2)/5 = 17/5\n  17÷5 = 3 rem 2 → 3 2/5 ✓"
    },
    {
      "title": "Fractions And Decimals — Operations on Fractions",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Addition/Subtraction: Take LCM of denominators\n  a/b + c/d = (ad + bc) / bd\n  a/b - c/d = (ad - bc) / bd\n\nMultiplication: num × num / den × den\n  a/b × c/d = ac / bd\n\nDivision: Multiply by reciprocal\n  a/b ÷ c/d = a/b × d/c = ad / bc\n\nComparing: a/b vs c/d → cross multiply\n  If ad > bc then a/b > c/d\n\nWHY: Division by c/d = how many c/d fit in a/b\n  = a/b × d/c (flip the divisor and multiply)\n\nEx: 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8\n  Cross-check: 3/4 vs 2/5 → 15>8 → 3/4 > 2/5 ✓"
    },
    {
      "title": "Fractions And Decimals — Decimal ↔ Fraction Conversion",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Decimal to Fraction:\n  0.25 = 25/100 = 1/4\n  0.125 = 125/1000 = 1/8\n  Count decimal places → that many zeros in den\n\nFraction to Decimal: divide num by den\n  3/8 = 0.375 (terminating)\n  1/3 = 0.333... (recurring)\n\nTerminating: den has only 2s and 5s as factors\nRecurring: den has factors other than 2 and 5\n\nWHY: Terminating decimals can be written as n/(2^a×5^b)\n  since 10=2×5. Other primes in den cause repeats.\n\nEx: 1/8=1/2³ → multiply by 5³/5³ = 125/1000 = 0.125\n  1/3 → den has 3, not just 2s/5s → recurring ✓"
    },
    {
      "title": "Fractions And Decimals — Recurring Decimal to Fraction",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Pure recurring (0.xxx...):\n  0.ababab... = ab / 99\n  0.abcabc... = abc / 999\n  Denominator = as many 9s as repeating digits\n\nMixed recurring (0.x_yyy...):\n  0.1666... = (16-1)/90 = 15/90 = 1/6\n  Formula: (entire - non-repeating) /\n           (9s for repeating, 0s for non-repeating)\n\n  0.16̄ = (16-1)/90 = 1/6\n  0.123̄ = (123-12)/900 = 111/900 = 37/300\n\nWHY: x=0.abab..., 100x=ab.abab...\n  100x-x=ab → 99x=ab → x=ab/99\n\nEx: 0.272727... → 27/99 = 3/11\n  Verify: 3÷11 = 0.272727... ✓"
    },
    {
      "title": "Hcf And Lcm — HCF (Highest Common Factor) Formulas",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "HCF by Prime Factorization:\n  Write each number as product of primes\n  HCF = product of COMMON primes with LOWEST power\n\nHCF by Division (Euclid's Algorithm):\n  Divide larger by smaller\n  Divide divisor by remainder\n  Repeat till remainder = 0\n  Last divisor = HCF\n\nHCF(a,b) always divides (a - b)\nHCF(a,b) <= min(a,b)\n\nWHY: HCF divides both a and b, so it divides a-b too.\n  Euclid's works because HCF(a,b)=HCF(b, a mod b)\n\nEx: HCF(24,36): 24=2³×3, 36=2²×3²\n  Common lowest: 2²×3=12 ✓"
    },
    {
      "title": "Hcf And Lcm — LCM (Least Common Multiple) Formulas",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "LCM by Prime Factorization:\n  Write each number as product of primes\n  LCM = product of ALL primes with HIGHEST power\n\nLCM using HCF:\n  LCM × HCF = Product of two numbers\n  LCM = (a × b) / HCF(a,b)\n\nLCM(a,b) >= max(a,b)\nLCM is always a multiple of HCF\nLCM(a,b) / a and LCM(a,b) / b are integers\n\nWHY: LCM must contain every prime factor at its\n  highest power to be divisible by all numbers.\n  LCM×HCF=a×b because shared factors count once.\n\nEx: LCM(8,12): 8=2³, 12=2²×3\n  Highest: 2³×3=24. Verify: 24/8=3✓ 24/12=2✓"
    },
    {
      "title": "Hcf And Lcm — HCF & LCM of Fractions",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "HCF of fractions:\n  = HCF of numerators / LCM of denominators\n\nLCM of fractions:\n  = LCM of numerators / HCF of denominators\n\nExample: HCF(2/3, 4/9)\n  = HCF(2,4) / LCM(3,9) = 2/9\n\nExample: LCM(2/3, 4/9)\n  = LCM(2,4) / HCF(3,9) = 4/3\n\nWHY: HCF of fracs must divide all → smallest num(HCF)\n  over largest den(LCM). LCM reverses the logic.\n\nEx: HCF(1/2, 1/3) = HCF(1,1)/LCM(2,3) = 1/6\n  Verify: (1/2)÷(1/6)=3✓ (1/3)÷(1/6)=2✓"
    },
    {
      "title": "Hcf And Lcm — Remainder-based Problems",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Largest number dividing X,Y,Z leaving remainder R:\n  = HCF(X-R, Y-R, Z-R)\n\nLargest number dividing X,Y leaving remainders a,b:\n  = HCF(X-a, Y-b)\n\nSmallest number divisible by X,Y,Z:\n  = LCM(X, Y, Z)\n\nSmallest number ÷ X,Y,Z leaves remainder R:\n  = LCM(X, Y, Z) + R\n\nSmallest number ÷ X,Y,Z leaves remainders a,b,c:\n  (X-a)=(Y-b)=(Z-c)=k → LCM(X,Y,Z) - k\n\nWHY: Subtracting remainder makes number exactly\n  divisible, so the answer divides all (X-R) values.\n\nEx: Largest N dividing 25,45 leaving rem 1:\n  HCF(24,44)=4. Check: 25/4=6r1✓ 45/4=11r1✓"
    },
    {
      "title": "Powers And Roots — Laws of Exponents",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "a^m x a^n = a^(m+n)    Product rule\na^m / a^n = a^(m-n)    Division rule\n(a^m)^n   = a^(m x n)  Power of power\n(ab)^n    = a^n x b^n   Power of product\na^0 = 1    a^(-n) = 1/a^n    a^(1/n) = nth root of a\n\nWHY: a^m × a^n = (a×...m)(a×...n) = a repeated m+n times\n  Division removes n copies → m-n remain\n\nEx: 2^3 × 2^4 = 8×16 = 128 = 2^7 (3+4=7) ✓"
    },
    {
      "title": "Powers And Roots — Squares (1-30) Table",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "1=1   2=4   3=9   4=16   5=25   6=36\n7=49  8=64  9=81  10=100 11=121 12=144\n13=169 14=196 15=225 16=256 17=289 18=324\n19=361 20=400 21=441 22=484 23=529 24=576\n25=625 26=676 27=729 28=784 29=841 30=900\nTRICK: (a5)^2 = a(a+1) followed by 25\n\nWHY: (10a+5)^2 = 100a^2+100a+25 = 100a(a+1)+25\n  So prefix=a(a+1), suffix=25\n\nEx: 35^2 → 3×4=12, append 25 → 1225 ✓\n  65^2 → 6×7=42, append 25 → 4225 ✓"
    },
    {
      "title": "Powers And Roots — Cubes (1-15) Table",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "1=1     2=8     3=27    4=64    5=125\n6=216   7=343   8=512   9=729   10=1000\n11=1331  12=1728  13=2197  14=2744  15=3375\n\nCube unit digit: 1->1 2->8 3->7 4->4 5->5\n  6->6 7->3 8->2 9->9 0->0 (2<->8, 3<->7 swap)\n\nWHY: Cube unit digits follow from (d^3 mod 10)\n  2 and 8 swap, 3 and 7 swap, rest stay same\n\nEx: Cube root of 4913 → unit digit 3→answer ends in 7\n  Remove last 3 digits: 4→nearest cube 1^3=1, tens=1\n  Answer=17. 17^3=4913 ✓"
    },
    {
      "title": "Powers And Roots — Square/Cube Root Rules",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "sqrt(a x b) = sqrt(a) x sqrt(b)\nsqrt(a / b) = sqrt(a) / sqrt(b)\nRationalize: 1/(sqrt(a)+sqrt(b)) = (sqrt(a)-sqrt(b))/(a-b)\nNested: sqrt(sqrt(x)) = x^(1/4) = 4th root\n  cube_root(sqrt(x)) = x^(1/6) = 6th root\n\nWHY: (sqrt(a)×sqrt(b))^2 = a×b, so sqrt(a×b)=sqrt(a)×sqrt(b)\n  Rationalize uses (x+y)(x-y)=x^2-y^2 to clear surds\n\nEx: sqrt(50)=sqrt(25×2)=5sqrt(2)\n  1/(sqrt(5)+sqrt(3))=(sqrt(5)-sqrt(3))/(5-3)=(sqrt(5)-sqrt(3))/2 ✓"
    },
    {
      "title": "Powers And Roots — Unit Digit Cyclicity",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "Period 4: 2(2,4,8,6) 3(3,9,7,1) 7(7,9,3,1) 8(8,4,2,6)\nPeriod 2: 4(4,6)  9(9,1)\nPeriod 1: 0,1,5,6 always same\n\nFind unit digit of a^n:\n  n mod period = r -> pick r-th in cycle\n  If r=0, use LAST value in cycle!\n\nWHY: Multiplying by same digit repeats unit digits\n  in a fixed cycle (mod 10 arithmetic)\n\nEx: 8^15 → period=4, 15 mod 4=3 → 3rd in (8,4,2,6) → 2 ✓\n  Verify: 8^3=512, unit digit=2 ✓"
    },
    {
      "title": "Powers And Roots — Digits & Estimation",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "Digits in a^n = floor(n x log10(a)) + 1\nlog(2)=0.301 log(3)=0.477 log(5)=0.699 log(7)=0.845\n\nSqrt estimation: sqrt(N) ~ p + (N-p^2)/(2p)\n  where p^2 is nearest perfect square <= N\n\nPerfect square: unit digit 0,1,4,5,6,9 only\n  digital root must be 1,4,7,9\n\nWHY: A number with d digits satisfies 10^(d-1)<=a^n<10^d\n  Taking log: d-1<=n×log(a)<d → d=floor(n×log(a))+1\n\nEx: Digits in 5^20 = floor(20×0.699)+1 = floor(13.98)+1 = 14 ✓"
    },
    {
      "title": "Problems On Numbers — Two-Digit Number Representation",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Number = 10a + b  (a=tens, b=units)\nReversed = 10b + a\nDifference = 9(a-b)\n\nThree-digit: 100a + 10b + c\nReversed: 100c + 10b + a\nDifference = 99(a-c)\n\nWHY: (10a+b)-(10b+a) = 9a-9b = 9(a-b)\n  Similarly 100(a-c)+0+c-a = 99(a-c)\n\nEx: Number=74 → Rev=47, Diff=74-47=27=9×3=9(7-4) ✓"
    },
    {
      "title": "Problems On Numbers — Sum & Difference Identity",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "If Sum = S,  Difference = D:\n  Larger  = (S + D) / 2\n  Smaller = (S - D) / 2\n  Product = (S² - D²) / 4\n\n(a+b)² = a² + b² + 2ab\n(a-b)² = a² + b² - 2ab\na² - b² = (a+b)(a-b)\n\nWHY: L+S=S, L-S=D → add: 2L=S+D → L=(S+D)/2\n  Product=L×S = (S+D)/2 × (S-D)/2 = (S²-D²)/4\n\nEx: S=20, D=6 → L=13, S=7, Product=(400-36)/4=91=13×7 ✓"
    },
    {
      "title": "Problems On Numbers — Divisibility Rules",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "By 2 → last digit even\nBy 3 → digit sum ÷ 3\nBy 4 → last 2 digits ÷ 4\nBy 5 → last digit 0 or 5\nBy 6 → div by 2 AND 3\nBy 8 → last 3 digits ÷ 8\nBy 9 → digit sum ÷ 9\nBy 11 → |odd-place sum - even-place sum| ÷ 11\n\nWHY: 10≡1(mod 3,9) so N≡digit sum(mod 3,9)\n  100≡1(mod 11 alternates ±1) → odd-even diff\n\nEx: 462 → 4+6+2=12 div by 3✓ |4+2-6|=0 div by 11✓"
    },
    {
      "title": "Problems On Numbers — LCM and HCF",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "LCM x HCF = Product of two numbers\nLCM = (a x b) / HCF\nHCF = (a x b) / LCM\n\nHCF = lowest powers of common primes\nLCM = highest powers of ALL primes\nHCF always divides LCM\nFor co-primes: HCF=1, LCM=a x b\n\nWHY: If a=HCF×m, b=HCF×n (m,n coprime)\n  LCM=HCF×m×n, so HCF×LCM=HCF²×m×n=a×b\n\nEx: a=12, b=18 → HCF=6, LCM=36\n  6×36=216=12×18 ✓"
    },
    {
      "title": "Problems On Numbers — Remainder & Division",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "N = D x Q + R  (0 <= R < D)\nDividend = Divisor x Quotient + Remainder\n\nSame remainder R with D1,D2:\n  N - R divisible by LCM(D1,D2)\n  N = LCM(D1,D2) x k + R\n\nWHY: N-R is divisible by both D1 and D2\n  So N-R must be a multiple of LCM(D1,D2)\n\nEx: N÷5 rem 3, N÷7 rem 3 → N-3 div by LCM(5,7)=35\n  Smallest N=38: 38/5=7r3✓ 38/7=5r3✓"
    },
    {
      "title": "Problems On Numbers — Unit Digit Cyclicity",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "Cycle period 4: digits 2,3,7,8\n  2: 2,4,8,6  |  3: 3,9,7,1\n  7: 7,9,3,1  |  8: 8,4,2,6\nCycle period 2: digits 4,9\n  4: 4,6      |  9: 9,1\nCycle period 1: 0,1,5,6 (always same)\n\nFind n mod period → pick from cycle\nIf mod=0, use LAST value in cycle\n\nWHY: Unit digit of a^n depends only on unit digit of a\n  Multiplying repeats a fixed cycle in mod 10\n\nEx: Unit digit of 3^7 → period=4, 7 mod 4=3\n  3rd in cycle(3,9,7,1) → 7. So unit digit=7 ✓"
    },
    {
      "title": "Simplification — BODMAS Order of Operations",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "B — Brackets ( ), { }, [ ]  (innermost first)\nO — Orders (powers, roots)\nD — Division  (left to right)\nM — Multiplication (left to right)\nA — Addition  (left to right)\nS — Subtraction (left to right)\n\nD & M have EQUAL precedence (L to R)\nA & S have EQUAL precedence (L to R)\n\nWHY: Without a fixed order, 2+3×4 could be 20 or 14.\n  Convention: multiply first → 2+12=14 is correct.\n\nEx: 6+8÷4×3 → 6+2×3 → 6+6 = 12 ✓"
    },
    {
      "title": "Simplification — Fraction & Decimal Rules",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "a/b + c/d = (ad + bc) / bd\na/b - c/d = (ad - bc) / bd\na/b x c/d = ac / bd\na/b / c/d = a/b x d/c = ad/bc\n\nDecimal to Fraction: 0.375 = 375/1000 = 3/8\nFraction to Decimal: 3/8 = 0.375\n\nCommon: 1/8=0.125, 1/6=0.1667, 1/3=0.333\n\nWHY: a/b+c/d → common den bd, so ad/bd+bc/bd=(ad+bc)/bd\n  Division by fraction=multiply by its reciprocal\n\nEx: 2/3+1/4 = (8+3)/12 = 11/12 ✓\n  2/3÷1/4 = 2/3×4/1 = 8/3 ✓"
    },
    {
      "title": "Simplification — Algebraic Identities",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "(a+b)^2 = a^2 + 2ab + b^2\n(a-b)^2 = a^2 - 2ab + b^2\na^2-b^2 = (a+b)(a-b)\n\n(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3\n(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3\n\nSurds: a/sqrt(b) = a*sqrt(b)/b (rationalize)\n\nWHY: (a+b)^2 = (a+b)(a+b) = a^2+ab+ba+b^2 = a^2+2ab+b^2\n  a^2-b^2 = (a+b)(a-b) by expanding right side\n\nEx: 52^2 = (50+2)^2 = 2500+200+4 = 2704 ✓\n  99^2-1^2 = (100)(98) = 9800 ✓"
    },
    {
      "title": "Simplification — Approximation & % Shortcuts",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Round to nearest easy number:\n  4.97 x 3.02 ~ 5 x 3 = 15\n  999 x 12 = (1000-1) x 12 = 11988\n\n% to Fraction shortcuts:\n  12.5%=1/8, 25%=1/4, 33.33%=1/3\n  37.5%=3/8, 66.67%=2/3, 75%=3/4\n\nx% of y = y% of x (commutative)\n\nWHY: x% of y = xy/100 = y% of x (multiplication commutes)\n  Rounding works because small errors cancel out\n\nEx: 8% of 50 = 50% of 8 = 4 (much easier!) ✓\n  998×7 = (1000-2)×7 = 7000-14 = 6986 ✓"
    },
    {
      "title": "Average — Basic Average Formulas",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Average = Sum / n\nSum = Average × n\n\nIf each value +x → New Avg = Old Avg + x\nIf each value -x → New Avg = Old Avg - x\nIf each value ×k → New Avg = Old Avg × k\nIf each value /k → New Avg = Old Avg / k\n\nWHY: Average distributes total equally among all.\nIf you level out unequal items, average is that level.\n\nEx: 10,20,30 → Sum=60, Count=3\n  Avg = 60/3 = 20\n  Each +5 → New Avg = 20+5 = 25"
    },
    {
      "title": "Average — Consecutive / Series Formulas",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "First n natural nos: Avg = (n+1)/2\nFirst n even nos:    Avg = n+1\nFirst n odd nos:     Avg = n\n\nAny AP: Avg = (First + Last) / 2\nSquares of 1..n: Avg = (n+1)(2n+1)/6\n\nWHY: In any AP, values are symmetric around\nthe middle, so Avg = midpoint = (First+Last)/2.\n\nEx: First 5 natural: Avg=(5+1)/2=3\n  Check: (1+2+3+4+5)/5 = 15/5 = 3 ✓"
    },
    {
      "title": "Average — Weighted Avg & Combined Groups",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Weighted Avg = Σwᵢxᵢ / Σwᵢ\n\nCombined Avg of two groups:\n  = (n₁×A₁ + n₂×A₂) / (n₁ + n₂)\n\nAlligation: n₁/n₂ = (A₂-Avg)/(Avg-A₁)\n\nWHY: Larger groups pull average towards them.\nWeighted avg gives more influence to larger groups.\n\nEx: 3 items avg 10, 2 items avg 20\n  = (3×10+2×20)/(3+2) = 70/5 = 14"
    },
    {
      "title": "Average — Add / Remove / Replace Member",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "ADDED: New = NewAvg + n×(NewAvg-OldAvg)\n  (n = original count)\n\nREMOVED: Removed = OldAvg - n×(NewAvg-OldAvg)\n  (n = new count after removal)\n\nREPLACED: New-Old = n×(NewAvg-OldAvg)\n  (n = total count, unchanged)\n\nWHY: New member must cover its own share\nPLUS compensate the avg rise for all old members.\n\nEx: 4 people avg 25, new joins, avg→27\n  New = 27 + 4×(27-25) = 27+8 = 35"
    },
    {
      "title": "Average — Average Speed Formulas",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "Same distance: Avg = 2ab/(a+b)\n  (Harmonic Mean — always < simple avg)\n\nSame time: Avg = (a+b)/2\n  (Arithmetic Mean = simple average)\n\nGeneral: Total Distance / Total Time\nNEVER just average the speeds!\n\nWHY: Same distance → more time at slow speed,\nso avg is pulled towards the slower speed.\n\nEx: 60 km at 30 km/h, 60 km at 60 km/h\n  Avg = 2×30×60/90 = 3600/90 = 40 (NOT 45!)"
    },
    {
      "title": "Average — Median & Mode",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "Mean: Sum/Count (affected by outliers)\nMedian: Middle value (robust to outliers)\n  Even count → avg of two middle values\nMode: Most frequent value\n\nEmpirical: Mode ≈ 3×Median - 2×Mean\n\nWHY: Mean uses all values (outlier-sensitive).\nMedian ignores magnitude. Mode = frequency peak.\n\nEx: 2,3,3,7,100 → Mean=23, Median=3, Mode=3\n  Outlier 100 skews mean but not median/mode."
    },
    {
      "title": "Problem On Ages — Basic Age Equations",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Present age = x\nAge t years ago = x - t\nAge t years hence = x + t\n\nIf ratio of ages a:b → ages = ak, bk\nDifference of ages stays CONSTANT\nSum of ages increases by 2t after t yrs\n\nWHY: Both people age equally, so the gap\nbetween them never changes — only sum grows.\n\nEx: A=30, B=20 → Diff=10 (always 10)\n  After 5 yrs: 35,25 → Diff=10, Sum=60=50+2×5"
    },
    {
      "title": "Problem On Ages — Ratio & Difference Formulas",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "If A:B = m:n and diff = d\n  A = m×d/(m-n), B = n×d/(m-n)\n\nIf ratio was m:n, becomes p:q after t yrs\n  (mk+t)/(nk+t) = p/q → solve for k\n\nProduct of ages = P\n  Use factorization + constraints\n\nWHY: Ratio a:b means ages are multiples of k.\nDiff = (m-n)k, so k = diff / (ratio gap).\n\nEx: A:B=5:3, Diff=12 → k=12/(5-3)=6\n  A=30, B=18"
    },
    {
      "title": "Problem On Ages — Father-Son / Parent-Child",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Father = k × Son (k times now)\nFather + t = j × (Son + t) (j times after t yrs)\n\nFather - Son = constant always\nSum increases by 2 each year\n\nFather age when son born = Diff of ages\n\nWHY: When son was born (age 0), father's age\n= current difference. Ratio shrinks over time.\n\nEx: F=40, S=10 → Diff=30, ratio=4:1\n  After 10 yrs: 50,20 → ratio=5:2 (shrinks)"
    },
    {
      "title": "Problem On Ages — Average Age of Group",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Avg age of n people = A\nAfter t years: Avg = A + t\n\nNew member joins: new avg changes\nMember leaves: recalculate with n-1\n\nSum of ages = Avg × Count\nBirth/Death changes count AND sum\n\nWHY: Everyone ages by t, so total sum grows\nby n×t, and avg grows by exactly t.\n\nEx: 4 people avg 20. After 3 yrs:\n  Avg = 20+3 = 23 (each aged 3 more)"
    },
    {
      "title": "Boats And Streams — Core Definitions",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Boat speed in still water = B\nStream (current) speed = S\n\nDownstream speed = B + S  (current helps)\nUpstream speed   = B - S  (current opposes)\n\n──→ Boat ──→ Stream = DOWNSTREAM\n──→ Boat ←── Stream = UPSTREAM\n\nWHY: Current adds to boat's speed\n  going with it, subtracts against.\n\nEx: B=10, S=3 → Down=13, Up=7"
    },
    {
      "title": "Boats And Streams — Deriving B & S",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "If Downstream = D, Upstream = U\n\nBoat speed  B = (D + U) / 2\nStream speed S = (D - U) / 2\n\nWHY: D=B+S, U=B-S\n  D+U=2B → B=(D+U)/2\n  D-U=2S → S=(D-U)/2\n\nEx: Down=14, Up=8 →\n  B=(14+8)/2=11, S=(14-8)/2=3"
    },
    {
      "title": "Boats And Streams — Time & Distance",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Time downstream = D / (B+S)\nTime upstream   = D / (B-S)\n\nRound trip = D/(B+S) + D/(B-S)\n           = 2DB / (B²-S²)\n\nIf same dist: T_up/T_down = (B+S)/(B-S)\n\nWHY: T=D/Speed. Round trip combines\n  two fractions with common denominator\n  (B+S)(B-S) = B²-S².\n\nEx: B=8, S=2, D=30 → T=30/10+30/6\n  = 3+5 = 8 hrs"
    },
    {
      "title": "Boats And Streams — Shortcut Formulas",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Avg speed (round trip):\n  = 2×Down×Up / (Down+Up)\n  = (B²-S²) / B\n\nT_up - T_down = 2DS / (B²-S²)\n→ D = T×(B²-S²) / (2S)\n\nBoat speed doubles:\n  T = D/(2B+S) + D/(2B-S)\n\nWHY: Avg=2D/total T. Simplify\n  2D/(D/(B+S)+D/(B-S)) = (B²-S²)/B.\n  Always < B since stream slows avg.\n\nEx: B=10, S=4 → Avg=(100-16)/10\n  = 8.4 km/h"
    },
    {
      "title": "Problems On Trains — Basic Formulas",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "       D\n      / \\\n     /   \\\n    S  ×  T\n\nCover D → S × T\nCover S → D / T\nCover T → D / S\n\nkm/h → m/s : × 5/18\nm/s → km/h : × 18/5\n\nWHY: 1 km/h = 1000m/3600s = 5/18 m/s\n\nEx: 54 km/h = 54×5/18 = 15 m/s"
    },
    {
      "title": "Problems On Trains — Distance to Cover",
      "color": "#2f9e44",
      "bg": "#d8f5a2",
      "text": "Train → Pole/Person:  L\nTrain → Platform:     L + P\nTrain → Another Train: L1 + L2\nTrain → Tunnel Exit:  L + T\nTrain → Tunnel Inside: T - L\n\nWHY: Train's nose travels until its\n  tail clears the object. So add both\n  lengths. Pole/person = zero length.\n\nEx: Train=200m, Platform=300m\n  D = 200+300 = 500m"
    },
    {
      "title": "Problems On Trains — Relative Speed",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "Same direction (overtaking):\n  Relative = S1 - S2\n  ──→  ──→\n\nOpposite direction (crossing):\n  Relative = S1 + S2\n  ──→  ←──\n\nWHY: Gap between trains closes at\n  combined rate (opp) or difference\n  rate (same dir).\n\nEx: 60 & 40 km/h → Opp=100,\n  Same=20 km/h"
    },
    {
      "title": "Problems On Trains — Shortcut Formulas",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Speed change → inverse time ratio\nS1:S2 = a:b → T1:T2 = b:a\n\nEqual trains cross pole T1,T2:\n  Opp: 2×T1×T2/(T1+T2)\n  Same: 2×T1×T2/(T1-T2)\n\nLate/Early → D=S1×S2×ΔT/(S2-S1)\n\nWHY (equal trains): L=S1×T1=S2×T2,\n  D=2L. Opp: T=2L/(S1+S2). Substitute\n  S=L/T to get harmonic mean formula.\n\nEx: T1=20s, T2=30s → Opp=\n  2×20×30/50 = 24s"
    },
    {
      "title": "Time And Distance — Basic Formulas",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "       D\n      / \\\n     /   \\\n    S  ×  T\n\nCover D → S × T\nCover S → D / T\nCover T → D / S\n\nkm/h → m/s : × 5/18\nm/s → km/h : × 18/5\n\nWHY: 1 km=1000m, 1 hr=3600s\n  1 km/h = 1000/3600 = 5/18 m/s\n\nEx: 72 km/h = 72×5/18 = 20 m/s"
    },
    {
      "title": "Time And Distance — Proportionality",
      "color": "#2f9e44",
      "bg": "#d8f5a2",
      "text": "Same Distance → S ∝ 1/T (inverse)\n  S1/S2 = T2/T1\n  Double speed = Half time\n\nSame Time → S ∝ D (direct)\n  Double speed = Double distance\n\nSame Speed → D ∝ T (direct)\n\nWHY: D=S×T. Fix one variable,\n  the other two relate directly\n  or inversely.\n\nEx: S=3:5, same D → T=5:3"
    },
    {
      "title": "Time And Distance — Average Speed",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "SAME DISTANCE (go & return):\n  Avg = 2×S1×S2 / (S1+S2)\n  Ex: 40 & 60 → 2×40×60/100 = 48\n  NOT 50! (more time at slow speed)\n\nSAME TIME (drive 2hrs each):\n  Avg = (S1+S2) / 2\n  Ex: 40 & 60 → (40+60)/2 = 50\n\n1/3 EACH at 3 speeds:\n  Avg = 3/(1/S1 + 1/S2 + 1/S3)\n\nWHY: Avg=Total D / Total T.\n  Same D: T=D/S1+D/S2 → harmonic mean.\n  Same T: D=S1×T+S2×T → arithmetic mean."
    },
    {
      "title": "Time And Distance — Relative Speed",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Same dir (chase/overtake):\n  ──→  ──→  Rel = S1 - S2\n\nOpposite dir (meeting):\n  ──→  ←──  Rel = S1 + S2\n\nCatch-up time = Gap / Rel speed\n\nWHY: Objects approach each other;\n  gap closes at combined rate (opp)\n  or difference rate (same dir).\n\nEx: S1=60, S2=40 → Rel_opp=100,\n  Rel_same=20 km/h"
    },
    {
      "title": "Time And Distance — Special Formulas",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "Late/Early → find distance:\n  D = S1 × S2 × T / (S2 - S1)\n\n  T = time difference:\n  Late+Early → T = late + early\n  Both late  → T = late1 - late2\n  Convert minutes to hours first!\n\nWHY: D/S1 - D/S2 = ΔT\n  D(S2-S1)/(S1×S2) = ΔT → solve for D.\n\nEx: 40km/h→10min late, 60km/h→10min early\n  T = 10+10 = 20min = 1/3 hr\n  D = 40×60×(1/3) / (60-40) = 40 km"
    },
    {
      "title": "Pipes And Cisterns — Filling Pipe Rate",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "If pipe fills in n hours:\n  Rate = 1/n (per hour)\n\nTwo pipes A(a hrs) + B(b hrs):\n  Combined = 1/a + 1/b\n  Time = ab/(a+b)\n\nWHY: Each pipe fills a fraction per\n  hour. Combined rate = sum of rates.\n  Time = 1/(sum) = ab/(a+b).\n\nEx: A=6h, B=12h → Time=6×12/18=4h"
    },
    {
      "title": "Pipes And Cisterns — Leak / Outlet Pipe",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Inlet fills, Outlet empties\nInlet rate = +1/a\nOutlet rate = -1/b\n\nNet rate = 1/a - 1/b\nTime = ab/(b-a) if b>a (net fills)\nNever fills if outlet >= inlet\n\nWHY: Outlet works against inlet.\n  Net = 1/a - 1/b = (b-a)/ab.\n  Time = 1/net = ab/(b-a).\n\nEx: Inlet=10h, Outlet=15h →\n  Time = 10×15/(15-10) = 30h"
    },
    {
      "title": "Pipes And Cisterns — Leak Midway Formula",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Pipe fills in a hrs, leak empties in b hrs\nNet time = ab/(b-a)\n\nLeak starts after t hours:\nFilled by pipe in t hrs = t/a\nRemaining = 1 - t/a\nTime for rest = remaining/(1/a - 1/b)\n\nWHY: Before leak, pipe fills alone.\n  After leak, net rate drops to\n  1/a - 1/b. Remaining/net = time.\n\nEx: Pipe=6h, leak after 2h, leak=12h\n  Filled=2/6=1/3. Left=2/3.\n  Net=1/6-1/12=1/12 → 2/3÷1/12=8h"
    },
    {
      "title": "Pipes And Cisterns — Alternate / Interval Pipes",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Pipes work in alternate hours:\nWork in 2-hr cycle = 1/a + 1/b\n\nPipes work in intervals:\nNet work per cycle × number of cycles\nCheck for partial last cycle\n\nWHY: Each cycle contributes a fixed\n  fraction. Divide 1 by cycle-work\n  to find number of full cycles.\n\nEx: A=4h, B=6h, alternate hrs\n  Cycle=1/4+1/6=5/12. Full in\n  12/5=2.4 cycles ≈ 5 hrs"
    },
    {
      "title": "Time And Work — Basic Formulas",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Work = Efficiency × Time\n\nIf A does work in 'n' days → 1 day work = 1/n\n\nTotal Work = LCM of all given days\n\nWHY: If total work = 1 unit and A\n  finishes in n days, daily rate = 1/n.\n  LCM avoids fractions in calculation.\n\nEx: A=10d, B=15d → LCM=30\n  A=3/day, B=2/day → Together=5/day"
    },
    {
      "title": "Time And Work — Efficiency & Ratio",
      "color": "#2f9e44",
      "bg": "#d8f5a2",
      "text": "EFFICIENCY RATIO:\n\"A is 2× efficient as B\" means:\n  A=2 units/day, B=1 unit/day\n  B=18 days → A=18/2=9 days\n  Eff ratio A:B = 2:1\n  Time ratio A:B = 1:2 (INVERSE!)\n\nWAGES: Split by EFFICIENCY\n  A(eff=3) B(eff=2), wage Rs.5000\n  A=3/5×5000=Rs.3000 ✓\n\nHalf eff → Double time\nDouble eff → Half time\n\nWHY: Work=Eff×Time. Same work →\n  Eff ∝ 1/Time (inverse relation).\n  Wages ∝ work done = eff × days worked.\n\nEx: A:B eff=3:1, B=18d → A=6d"
    },
    {
      "title": "Time And Work — MDH Formula",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "M1 × D1 × H1     M2 × D2 × H2\n─────────────  =  ─────────────\n     W1                W2\n\nMore Men → Less Days (inverse)\nMore Hours → Less Days (inverse)\nMore Work → More Days (direct)\n\nWHY: Total work = Men × Days × Hours.\n  Equal work means M1D1H1 = M2D2H2.\n  Different work → divide by W.\n\nEx: 5 men, 8 days, 6 hrs = 10 men,\n  ? days, 6 hrs → D2 = 5×8/10 = 4d"
    },
    {
      "title": "Time And Work — Pipes & Cisterns",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "Filling pipe = POSITIVE (+)\nEmptying pipe = NEGATIVE (-)\nNet efficiency = Sum with signs\n\nnet>0 → fills   net<0 → empties\n\nLeak = (a×b)/(b-a)\na=without leak  b=with leak\n\nWHY: Fill rate - Leak rate = Net rate.\n  1/a - 1/leak = 1/b → solve for leak.\n\nEx: Pipe=8h, with leak=12h →\n  Leak = 8×12/(12-8) = 24h"
    },
    {
      "title": "Time And Work — % ↔ Days",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "n days → (100/n)% per day\nx%/day → (100/x) days\n\n1/2=50%  1/3=33.3%  1/4=25%\n1/5=20%  1/8=12.5%  1/10=10%\n\nWHY: 1/n of total work per day\n  = (1/n)×100 = (100/n)% per day.\n\nEx: 8 days → 100/8 = 12.5%/day\n  25%/day → 100/25 = 4 days"
    },
    {
      "title": "Time And Work — Fraction → Hours",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "1/6d=4h   1/4d=6h   1/3d=8h\n1/2d=12h  2/3d=16h  3/4d=18h\n\nMen↔Women↔Children:\n  x Men = y Women = z Children\n  1 Man = z/x Children\n  Convert all to children + MDH\n\nWHY: 1 day=24h. Fraction × 24\n  gives hours. Conversions let you\n  use MDH with a single unit.\n\nEx: 2M=3W → 1M=1.5W.\n  6M+4W = 9W+4W = 13W"
    },
    {
      "title": "Alligation And Mixture — Alligation Rule (Cross Method)",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Cheaper(C)    Dearer(D)\n     \\         /\n      Mean(M)\n     /         \\\n  (D-M)      (M-C)\n\nRatio = (D-M):(M-C)\nCheaper:Dearer = (D-M):(M-C)\n\nWHY: The mean is a weighted average.\nThe closer a component's price to the\nmean, the MORE of it is in the mix.\n\nEx: C=30, D=40, M=34\n  Ratio = (40-34):(34-30) = 6:4 = 3:2"
    },
    {
      "title": "Alligation And Mixture — Mean Price Formula",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Mean = (C×Qc + D×Qd) / (Qc + Qd)\n\nMean price always lies BETWEEN\nthe cheaper and dearer prices\n\nWeighted average of all components\n\nWHY: Total cost / total quantity gives\nthe average price per unit.\n\nEx: 5kg at Rs.20 + 3kg at Rs.30\n  Mean = (100+90)/8 = Rs.23.75/kg"
    },
    {
      "title": "Alligation And Mixture — Remove & Replace Formula",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "After n operations of removing x litres\nfrom V litres:\n\nFinal pure = V × (1 - x/V)^n\n\nConcentration after n replacements:\n= (1 - x/V)^n × 100%\n\nWHY: Each operation removes x/V fraction\nof whatever is left. After n ops the\nfraction remaining = (1-x/V)^n.\n\nEx: 80L milk, remove 8L twice:\n  80×(1-8/80)^2 = 80×(9/10)^2 = 64.8L"
    },
    {
      "title": "Alligation And Mixture — Repeated Dilution",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Quantity left after n operations:\n= V × ((V-x)/V)^n\n\nRatio of pure to impure:\n= ((V-x)/V)^n : (1 - ((V-x)/V)^n)\n\nEach replacement reduces by same fraction\n\nWHY: Same as remove-replace. (V-x)/V is\nthe survival fraction per operation.\n\nEx: 60L milk, remove 12L, 3 times:\n  60×(48/60)^3 = 60×(4/5)^3 = 30.72L"
    },
    {
      "title": "Chain Rule — Direct Proportion",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "If A increases → B increases (same direction)\nA₁/A₂ = B₁/B₂\n\nMore goods → More cost\nMore men → More work done\nMore speed → More distance\n\nWHY: The ratio stays constant. If 1 pen\ncosts Rs.10, 2 pens cost Rs.20 — the\ncost/pen ratio never changes.\n\nEx: 5 pens=Rs.60 → 8 pens=?\n  5/8 = 60/x → x = 60×8/5 = Rs.96"
    },
    {
      "title": "Chain Rule — Inverse Proportion",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "If A increases → B decreases (opposite)\nA₁/A₂ = B₂/B₁  (flip right side)\n\nMore men → Less days\nMore speed → Less time\nMore pipes → Less time to fill\n\nWHY: The product stays constant. Total\nwork = men × days. If men↑, days↓ to\nkeep product the same.\n\nEx: 12 men×10 days = 120 man-days\n  15 men × ? = 120 → ? = 8 days"
    },
    {
      "title": "Chain Rule — Chain Rule (Mixed)",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Step 1: Identify each variable\nStep 2: Mark Direct (D) or Inverse (I)\nStep 3: Set up proportion chain\n  Direct → same order ratio\n  Inverse → flipped ratio\nStep 4: Multiply all ratios = answer ratio\n\nWHY: Each variable contributes its own\nratio. Multiply them all to combine.\n\nEx: 8 men, 6 hrs → 6 men, 8 hrs\n  ? = 12 × (8/6) × (6/8) = 12 days"
    },
    {
      "title": "Chain Rule — Man-Days-Hours Formula",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "M₁ × D₁ × H₁ = M₂ × D₂ × H₂\n(when work is same)\n\nM₁×D₁×H₁/W₁ = M₂×D₂×H₂/W₂\n(when work differs)\n\nTotal work = Men × Days × Hours\n\nWHY: Work is the product of all effort\nvariables. Equal work means equal products.\n\nEx: 10 men × 8 hrs × 5 days = 400\n  ? men × 10 hrs × 4 days = 400\n  ? = 400/40 = 10 men"
    },
    {
      "title": "Partnership — Simple Partnership",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "All invest for SAME duration\nProfit ratio = Capital ratio\n\nA:B = Cₐ : Cᵦ\nA's share = Profit × Cₐ/(Cₐ+Cᵦ)\n\nWHY: Same time means money is the only\ndifference. More capital = more risk\n= more profit share.\n\nEx: A=3000, B=5000, Profit=1600\n  Ratio=3:5, A=1600×3/8=600"
    },
    {
      "title": "Partnership — Compound Partnership",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Invest for DIFFERENT durations\nProfit ratio = Capital × Time ratio\n\nA:B = Cₐ×Tₐ : Cᵦ×Tᵦ\nA's share = Profit × (Cₐ×Tₐ)/Σ(C×T)\n\nWHY: Both capital AND time matter.\nRs.1000 for 6 months = Rs.6000 of\n\"capital-months\" of contribution.\n\nEx: A=4000×12=48k, B=6000×8=48k\n  Equal contribution → equal split"
    },
    {
      "title": "Partnership — Working Partner",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Working partner gets SALARY first\nRemaining profit split by capital ratio\n\nNet profit = Total - Salary\nThen divide net profit as per ratio\n\nWHY: Salary compensates for labor.\nAfter paying salary, remaining profit\nis purely return on capital.\n\nEx: Profit=2000, Salary=1200\n  Remaining=800, split by ratio"
    },
    {
      "title": "Partnership — Capital Changes Mid-Year",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Split into periods at each change\nEffective capital = Σ(Cᵢ × Tᵢ)\n\nA invests C₁ for t₁, then C₂ for t₂\nA's effective = C₁×t₁ + C₂×t₂\nCompare effective capitals for ratio\n\nWHY: Different amounts for different\ndurations = sum of each segment.\n\nEx: 10k for 6mo + 15k for 6mo\n  Effective = 60k + 90k = 150k"
    },
    {
      "title": "Percentage — Basic Percentage Formulas",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "x% of y = (x/100) × y\nWhat % is X of Y = (X/Y) × 100\n\n% Increase = [(New-Old)/Old] × 100\n% Decrease = [(Old-New)/Old] × 100\n\nNew Value = Old × (1 ± %/100)\n\nWHY: \"Percent\" = per-hundred. We scale any\nfraction to a base of 100 for comparison.\n\nEx: 20% of 350 = (20/100)×350 = 70\n    What % is 42 of 168? = (42/168)×100 = 25%"
    },
    {
      "title": "Percentage — Successive & Compound Change",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Successive a% and b%:\n  Net = a + b + (a×b)/100 %\n\nPopulation growth (n yrs):\n  P × (1 + r/100)^n\n\nDepreciation (n yrs):\n  P × (1 - r/100)^n\n\n+x% then -x% = -(x²/100)% LOSS\n\nWHY: Second change applies on already-changed\nvalue, so cross-term (a×b)/100 appears.\n\nEx: +10% then +20%:\n  Net = 10+20+(10×20)/100 = 32%"
    },
    {
      "title": "Percentage — Reverse Percentage Change",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "A is x% more than B:\n  B less than A by x/(100+x)×100%\n\nA is x% less than B:\n  B more than A by x/(100-x)×100%\n\nPrice ↑x%, keep spending same:\n  ↓ consumption by x/(100+x)×100%\n\nWHY: Base changes! A=120 is +20% over B=100,\nbut B=100 is only 100/120 below A → 16.67%.\n\nEx: A is 25% more than B:\n  B less than A by 25/125×100 = 20%"
    },
    {
      "title": "Percentage — Discounts & Area Change",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Two discounts a% and b%:\n  Single = a + b - (a×b)/100 %\n  (minus, NOT plus!)\n\nL ↑ a%, B ↑ b% → Area change:\n  = a + b + (a×b)/100 %\n  (same as successive change!)\n  Use -ve for decrease\n\nWHY: Discount is successive subtraction,\nso cross-term is subtracted.\n\nEx: Discounts 20% and 10%:\n  Single = 20+10-(20×10)/100 = 28%"
    },
    {
      "title": "Percentage — Election & Exam Formulas",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Election (2 candidates):\n  Margin% = 2×Winner% - 100\n  Margin = Margin% × Total/100\n  Check for invalid votes!\n\nExam pass marks:\n  Pass = obtained + shortfall\n  Pass = Total × pass%/100\n\nWHY: If winner gets W%, loser gets (100-W)%,\nmargin = W-(100-W) = 2W-100.\n\nEx: Winner=60%: Margin% = 2×60-100 = 20%\n  If 40000 votes: margin = 20%×40000 = 8000"
    },
    {
      "title": "Percentage — Fraction ↔ Percentage Table",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "1/2=50%  1/3=33.33%  1/4=25%\n1/5=20%  1/6=16.67%  1/7=14.28%\n1/8=12.5% 1/9=11.11% 1/10=10%\n1/11=9.09% 1/12=8.33% 1/15=6.67%\n\nx% of y = y% of x (commutative!)\n8% of 50 = 50% of 8 = 4\n\nWHY: 1/n as % = (1/n)×100 = 100/n.\nMemorize these to avoid division.\n\nEx: 37.5% of 480 → 3/8 × 480 = 180"
    },
    {
      "title": "Ratio And Proportion — Types of Ratios",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Simple ratio: a : b = a/b\nDuplicate ratio: a² : b²\nSub-duplicate: √a : √b\nTriplicate ratio: a³ : b³\nSub-triplicate: ³√a : ³√b\nCompounded: (a:b)×(c:d) = ac:bd\nInverse ratio: b : a\n\nWHY: Ratios are just fractions. Duplicate\nmeans squaring both terms, sub-duplicate\nmeans square-rooting both terms.\n\nEx: Duplicate of 3:5 = 9:25\n    Inverse of 3:5 = 5:3"
    },
    {
      "title": "Ratio And Proportion — Proportion Formulas",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "a:b = c:d → a×d = b×c\n(extremes product = means product)\n\nMean Proportional = √(a×c)\nThird Proportional = b²/a\nFourth Proportional = b×c/a\n\na:b :: c:d → a,d=extremes, b,c=means\n\nWHY: a/b = c/d, cross-multiply gives\na×d = b×c. Mean prop x satisfies\na/x = x/c, so x² = ac.\n\nEx: Mean prop of 4,9 = √(4×9) = 6\n    Check: 4:6 = 6:9 = 2:3 ✓"
    },
    {
      "title": "Ratio And Proportion — Dividing in a Ratio",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Total T divided in ratio a:b:c\n\nA's share = [a/(a+b+c)] × T\nB's share = [b/(a+b+c)] × T\n\nFraction ratios 1/2 : 1/3 : 1/4\n→ LCM of 2,3,4 = 12\n→ 6 : 4 : 3\n\nWHY: Each part is a fraction of the\nwhole. Multiply fraction-ratios by\nLCM of denominators to clear fractions.\n\nEx: Rs.1300 in 2:3:8\n  1 part=1300/13=100\n  Shares: 200, 300, 800"
    },
    {
      "title": "Ratio And Proportion — Combining Ratios",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "A:B = p:q and B:C = r:s\nA:B:C → LCM of q and r\n\nExample: A:B=2:3, B:C=4:5\nLCM(3,4)=12\nA:B=8:12, B:C=12:15\nA:B:C = 8:12:15\n\n4+ ratios: abc : xbc : xyc : xyz\n\nWHY: The common term (B) must be the\nsame number in both ratios. LCM makes\nB equal, then simply merge.\n\nEx: A:B=3:4, B:C=2:5 → LCM(4,2)=4\n  A:B=3:4, B:C=4:10 → 3:4:10"
    },
    {
      "title": "Ratio And Proportion — Direct & Inverse",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "Direct: A↑ then B↑ (same dir)\n  A1/B1 = A2/B2\n  More items → More cost\n\nInverse: A↑ then B↓ (opposite)\n  A1 × B1 = A2 × B2\n  More workers → Less time\n\nWHY: Direct means constant ratio (k=A/B).\nInverse means constant product (k=A×B).\n\nEx: 5 pens cost Rs.60 (direct)\n  8 pens cost 60×8/5 = Rs.96"
    },
    {
      "title": "Work And Wages — Golden Rule",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Wages ∝ Work Done (Efficiency)\nWages are ALWAYS split by EFFICIENCY ratio\nNOT by number of days worked!\n\nMore work done = More pay\nShare = (Your eff / Total eff) × Total Wage\n\nWHY: Pay is for work produced, not time\nspent. A faster worker earns more per day\nbecause they produce more output.\n\nEx: A(10 days), B(15 days) earn Rs.5000\n  Eff = 3:2, A=3000, B=2000"
    },
    {
      "title": "Work And Wages — LCM Method for Wages",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Step 1: LCM of days = Total Work\nStep 2: Eff = Total Work / days\nStep 3: Ratio of wages = Ratio of eff\nStep 4: Split total wage by eff ratio\n\nIf someone works fewer days:\n  Actual work = eff × days worked\n  Share = (actual work / total work) × wage\n\nWHY: LCM gives clean whole numbers for\nefficiency, avoiding messy fractions.\n\nEx: A=10d, B=15d → LCM=30\n  Eff: A=3, B=2 → ratio 3:2"
    },
    {
      "title": "Work And Wages — Daily Wage & Piece Rate",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Daily wage = Total payment / Days worked\n\nPiece rate = Payment per unit produced\nTotal pay = Units × Rate per unit\n\nContractor pay:\n  Total cost = Σ(workers × rate × days)\n\nWHY: Daily wage assumes equal work each\nday. Piece rate pays per output instead.\n\nEx: 15 men × 12 days, paid Rs.54000\n  Daily wage = 54000/(15×12) = Rs.300"
    },
    {
      "title": "Work And Wages — Overtime Formula",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Overtime rate = Normal rate × multiplier\nCommon: 1.5× or 2× normal rate\n\nTotal pay = (Normal hrs × Normal rate)\n          + (OT hrs × OT rate)\n\nIf daily wage given:\n  Hourly rate = Daily wage / Normal hrs\n\nWHY: Overtime compensates extra effort\nbeyond normal hours at a premium rate.\n\nEx: Rs.480/8hrs → Rs.60/hr normal\n  OT rate = 1.5×60 = Rs.90/hr"
    },
    {
      "title": "Discount — Basic Discount Formulas",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Discount = Marked Price - Selling Price\nDiscount% = (Discount / MP) × 100\n\nSP = MP × (100 - D%) / 100\nMP = SP × 100 / (100 - D%)\n\nDiscount% is ALWAYS on Marked Price\nProfit% is ALWAYS on Cost Price\n\nRelation: CP → markup → MP → discount → SP\n\nWHY: Discount is reduction from MP.\n  D% uses MP as base (not CP or SP).\n  SP = MP minus the discount amount.\n\nEx: MP=1000, D%=30%\n  Disc=300, SP=1000×70/100=700"
    },
    {
      "title": "Discount — Successive Discount Formulas",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Two successive discounts d1% and d2%:\n  SP = MP × (100-d1)/100 × (100-d2)/100\n\nSingle equivalent discount:\n  = d1 + d2 - (d1 × d2)/100\n\nThree successive discounts d1, d2, d3:\n  SP = MP × (100-d1)/100 × (100-d2)/100 × (100-d3)/100\n\nOrder does NOT matter:\n  20% then 10% = 10% then 20% = 28%\n\nWHY: 2nd discount applies to already-reduced price.\n  d1+d2 overcounts, so subtract overlap d1×d2/100.\n\nEx: d1=20%, d2=10%\n  Equiv = 20+10-(200/100) = 28% (not 30%)"
    },
    {
      "title": "Discount — Markup & Profit After Discount",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "To earn P% profit after D% discount:\n  MP = CP × (100 + P%) / (100 - D%)\n\nMarkup m%, Discount d%:\n  Net Profit% = [(100+m)(100-d)/100] - 100\n\nBuy X Get Y Free:\n  Effective Discount% = Y/(X+Y) × 100\n\nFalse weight w instead of W:\n  Gain% = (W-w)/w × 100\n\nWHY: SP must = CP×(100+P%)/100.\n  But SP = MP×(100-D%)/100.\n  Equate and solve for MP.\n\nEx: CP=500, P%=20%, D%=10%\n  MP=500×120/90=Rs.666.67"
    },
    {
      "title": "Discount — True Discount & Banker's Discount",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "True Discount (TD):\n  TD = (Amount × Rate × Time) / (100 + RT)\n  Present Worth = Amount - TD\n  PW = Amount × 100 / (100 + RT)\n\nBanker's Discount (BD):\n  BD = Simple Interest on Amount\n  BD = (Amount × Rate × Time) / 100\n\nRelation:\n  BD - TD = SI on TD\n  BD = TD × (100 + RT) / 100\n  TD² = PW × BD\n\nWHY: TD = interest on Present Worth (PW).\n  BD = interest on full Amount (overestimates).\n  BD > TD always; difference = SI on TD.\n\nEx: Amt=1060, R=6%, T=1yr\n  PW=1060×100/106=1000, TD=60\n  BD=1060×6/100=63.60"
    },
    {
      "title": "Profit And Loss — Basic Profit & Loss Formulas",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Profit = SP - CP  (when SP > CP)\nLoss = CP - SP  (when CP > SP)\n\nProfit% = (Profit / CP) × 100\nLoss% = (Loss / CP) × 100\n\nSP = CP × (100 + P%) / 100\nSP = CP × (100 - L%) / 100\n\nCP = SP × 100 / (100 + P%)\nCP = SP × 100 / (100 - L%)\n\nWHY: P% is profit as fraction of CP.\n  SP = CP + P% of CP = CP×(100+P%)/100.\n  Invert to get CP from SP.\n\nEx: CP=400, P%=25\n  SP=400×125/100=500, Profit=100"
    },
    {
      "title": "Profit And Loss — Discount & Marked Price Formulas",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Discount = MP - SP\nDiscount% = (Discount / MP) × 100\n\nSP = MP × (100 - D%) / 100\n\nMarkup m%, Discount d%:\n  SP = CP × (100+m)/100 × (100-d)/100\n  Net P% = [(100+m)(100-d)/100] - 100\n\nSuccessive discounts d1%, d2%:\n  Single = d1 + d2 - (d1×d2)/100 %\n\nWHY: MP is inflated CP. Discount cuts MP.\n  Two steps: CP→MP (markup), MP→SP (disc).\n  Net effect combines both multipliers.\n\nEx: CP=200, m=50%, d=20%\n  MP=300, SP=300×80/100=240, P%=20%"
    },
    {
      "title": "Profit And Loss — Special Formulas",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Dishonest dealer (wrong weight):\n  Gain% = (True-False)/False × 100\n\nCP of X = SP of Y:\n  P% = (X-Y)/Y × 100  (X>Y → profit)\n\nBuy X Get Y Free:\n  Discount% = Y/(X+Y) × 100\n\nTwo items same SP, same P%=L%:\n  Always LOSS = P²/100 %\n\nWHY (wrong wt): Sells less, charges full.\n  Extra goods = True-False, base = False.\nWHY (same P%=L%): Loss-side CP > Profit-side CP,\n  so loss amount exceeds profit amount.\n\nEx: True=1000g, False=900g\n  Gain%=(1000-900)/900×100=11.1%"
    },
    {
      "title": "Profit And Loss — Ratio & Chain Formulas",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "CP:SP = a:b\n  Profit% = (b-a)/a × 100  (b>a)\n  Loss% = (a-b)/a × 100  (a>b)\n\nSuccessive P% then L%:\n  Net = P - L - (P×L)/100\n\nChain: Manuf → Whole → Retail\n  Final = CP × (100+P1)/100 × (100+P2)/100 × ...\n\nBreak-even: Total SP = Total CP\n\nWHY: Ratio gives relative sizes directly.\n  P or L% always uses CP (=a) as base.\n  Chain = multiply all stage multipliers.\n\nEx: CP:SP=4:5 → P%=(5-4)/4×100=25%\n  Successive +20% then -10%:\n  Net=20-10-200/100=+8%"
    },
    {
      "title": "Compound Interest — Core CI Formulas",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Amount:  A = P × (1 + R/100)^T\nCompound Interest:  CI = A - P\n\nHalf-yearly:  A = P × (1 + R/200)^(2T)\nQuarterly:    A = P × (1 + R/400)^(4T)\n\nWHY: Each year, interest earns interest too.\n  Year1: P×(1+R/100)\n  Year2: P×(1+R/100)² ...and so on\n\nEx: P=1000, R=10%, T=2yr\n  A=1000×1.1²=1210, CI=210"
    },
    {
      "title": "Compound Interest — CI vs SI Difference",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "For 2 years:\n  CI - SI = P × (R/100)²\n\nFor 3 years:\n  CI - SI = P × (R/100)² × (3 + R/100)\n\nFor T=1: CI = SI (no difference!)\n\nWHY: Diff = interest-on-interest.\n  2yr: extra = R% of 1st yr's interest\n  = P×R/100 × R/100 = P×(R/100)²\n\nEx: P=5000, R=10%, T=2yr\n  CI-SI=5000×(0.1)²=50\n  (SI=1000, CI=1050, diff=50)"
    },
    {
      "title": "Compound Interest — Growth & Depreciation",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Population growth: P × (1 + R/100)^T\nDepreciation:      P × (1 - R/100)^T\n\nDifferent rates each year:\n  A = P × (1+R1/100) × (1+R2/100) × (1+R3/100)\n\nWHY: Growth compounds just like CI.\n  Depreciation = negative growth rate.\n  Different rates: chain-multiply each year.\n\nEx: Pop=10000, R=5%, T=2yr\n  =10000×(1.05)²=10000×1.1025=11025\nEx: Value=50000, depn=20%, T=2yr\n  =50000×(0.8)²=50000×0.64=32000"
    },
    {
      "title": "Compound Interest — Doubling & Effective Rate",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Rule of 72: T ≈ 72/R years to double\nDoubles in n yrs → 4× in 2n, 8× in 3n\n\nEffective rate (n times/yr):\n  E = (1 + R/(n×100))^n - 1\n\nWHY: 72 approximates ln(2)×100.\n  If 2× in n yrs, then (2)² = 4× in 2n,\n  (2)³ = 8× in 3n -- powers of 2 stack.\n\nEx: R=12% → doubles in 72/12=6yr\n  4× in 12yr, 8× in 18yr"
    },
    {
      "title": "Compound Interest — Key Power Values",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "(1.05)²=1.1025  (1.05)³=1.157625\n(1.10)²=1.21    (1.10)³=1.331\n(1.15)²=1.3225  (1.20)²=1.44\n(1.20)³=1.728   (1.25)²=1.5625\n(0.90)²=0.81    (0.80)³=0.512\n\nWHY: Memorize these to avoid calculation.\n  Quick lookup saves 1-2 min per problem.\n\nEx: P=8000 at 10% for 3yr\n  A=8000×1.331=10648 (instant!)"
    },
    {
      "title": "Simple Interest — Core SI Formula",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "SI = (P x R x T) / 100\n\nP = Principal (original sum)\nR = Rate of interest per annum (%)\nT = Time (in years)\nSI = Simple Interest\n\nWHY: R% means R per 100 per year.\n  Interest for 1yr = P×R/100.\n  For T years (simple) = P×R×T/100.\n\nEx: P=1000, R=10%, T=3yr\n  SI=1000×10×3/100=300"
    },
    {
      "title": "Simple Interest — Amount Formula",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Amount = Principal + Simple Interest\nA = P + SI\nA = P + (P x R x T) / 100\nA = P (1 + R x T / 100)\n\nWHY: Amount = what you get back total.\n  = original sum + interest earned.\n  Factor out P to get multiplier form.\n\nEx: P=2000, R=5%, T=4yr\n  SI=400, A=2000+400=2400\n  Or A=2000×(1+20/100)=2000×1.2=2400"
    },
    {
      "title": "Simple Interest — Find Unknown (P, R, T)",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "P = (100 x SI) / (R x T)\nR = (100 x SI) / (P x T)\nT = (100 x SI) / (P x R)\n\nWHY: All derived from SI=PRT/100.\n  Rearrange to isolate the unknown.\n\nEx: SI=600, R=10%, T=3yr\n  P=100×600/(10×3)=60000/30=2000\nEx: SI=240, P=1200, T=4yr\n  R=100×240/(1200×4)=5%"
    },
    {
      "title": "Simple Interest — Multiplier / Doubling Formula",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Sum becomes N times in T years:\n  (N - 1) x 100 = R x T\n\nDoubles:  R x T = 100\nTriples:  R x T = 200\nN times:  R x T = (N-1) x 100\n\nTime to double = 100/R\nTime to N times = (N-1) x 100/R\n\nWHY: N times means A=NP, so SI=(N-1)P.\n  (N-1)P = P×R×T/100 → R×T=(N-1)×100.\n\nEx: R=10%, double → T=100/10=10yr\n  Triple → T=200/10=20yr"
    },
    {
      "title": "Simple Interest — Splitting Sum Formula",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "Total S split into Part1 at R1% for T1\nand Part2 at R2% for T2 (equal SI):\n\nPart1/Part2 = (R2 x T2)/(R1 x T1)\n\nSame time: Part1/Part2 = R2/R1\nSame rate: Part1/Part2 = T2/T1\n\nWHY: Equal SI means P1×R1×T1=P2×R2×T2.\n  Cross-divide to get the ratio.\n\nEx: S=4000, R1=5%, R2=9%, T=1yr\n  Ratio=9:5, P1=4000×9/14=2571\n  P2=4000×5/14=1429"
    },
    {
      "title": "Permutation And Combination — Factorial & Basics",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "n! = n × (n-1) × ... × 1\n0! = 1,  1! = 1\n2!=2  3!=6  4!=24  5!=120  6!=720  7!=5040\n\nn!/k! = multiply top k terms\n10!/8! = 10×9 = 90\n\nWHY: n! counts all ways to arrange n items.\n  Each slot has one fewer choice: n,n-1,...,1\n\nEx: 5! = 5×4×3×2×1 = 120"
    },
    {
      "title": "Permutation And Combination — Permutation (Order MATTERS)",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "nPr = n! / (n-r)!\nnPn = n!  (all items)\nWith repetition: n^r\nRepeated items: n! / (p1!×p2!×...)\nCircular: (n-1)!\nNecklace: (n-1)!/2\n\nWHY: First slot has n choices, second n-1,\n  ...r-th has n-r+1. Product = n!/(n-r)!\n\nEx: 5P3 = 5!/2! = 120/2 = 60"
    },
    {
      "title": "Permutation And Combination — Combination (Order does NOT matter)",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "nCr = n! / [r!(n-r)!]\nnCr = nC(n-r)   nC0 = nCn = 1\nnCr = nPr / r!\nHandshakes = nC2 = n(n-1)/2\nDiagonals = n(n-3)/2\n\nWHY: nCr = nPr / r! because we remove\n  r! duplicate orderings of same group.\n\nEx: 7C3 = (7×6×5)/(3×2×1) = 210/6 = 35"
    },
    {
      "title": "Permutation And Combination — Key Identities & Shortcuts",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "At least 1 = Total - None\nAt most k = C(0)+C(1)+...+C(k)\nnC0+nC1+...+nCn = 2^n\nPascal: nCr + nC(r-1) = (n+1)Cr\nDerangement D(n): 0,1,2,9,44,265\nD(n) = (n-1)[D(n-1)+D(n-2)]\n\nWHY: 2^n = total subsets of n items;\n  each item is either in or out (2 choices).\n\nEx: n=4 → 2^4=16 total subsets"
    },
    {
      "title": "Probability — Basic Probability",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "P(E) = Favorable outcomes / Total outcomes\n\n0 <= P(E) <= 1\nP(certain) = 1, P(impossible) = 0\nSample space S = set of all possible outcomes\n\nWHY: Probability = how many ways event\n  can happen out of all equally likely ways.\n\nEx: 1 die, P(even)=3/6=1/2 (2,4,6 of 6)"
    },
    {
      "title": "Probability — Addition Rule (OR)",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "P(A or B) = P(A) + P(B) - P(A and B)\nP(A ∪ B)  = P(A) + P(B) - P(A ∩ B)\n\nMutually Exclusive: P(A ∩ B) = 0\n  -> P(A ∪ B) = P(A) + P(B)\n\nWHY: Adding P(A)+P(B) double-counts the\n  overlap, so subtract P(A∩B) once.\n\nEx: P(K)=4/52, P(H)=13/52, P(K∩H)=1/52\n  P(K or H) = 4+13-1 = 16/52 = 4/13"
    },
    {
      "title": "Probability — Multiplication Rule (AND)",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Independent: P(A ∩ B) = P(A) x P(B)\nDependent:   P(A ∩ B) = P(A) x P(B|A)\n\nIndependent = one event doesn't affect other\nDependent = outcome changes next probability\n\nWHY: For both A AND B to happen, A must\n  happen first, then B given A happened.\n\nEx: 2 coins, P(HH)=1/2 × 1/2 = 1/4"
    },
    {
      "title": "Probability — Complement & Conditional",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "P(not A) = 1 - P(A)\nP(at least 1) = 1 - P(none)\n\nConditional: P(A|B) = P(A ∩ B) / P(B)\nBayes: P(A|B) = P(B|A).P(A) / P(B)\n\nWHY: All outcomes sum to 1, so\n  P(not A) = 1 - P(A). Complement\n  avoids listing many cases.\n\nEx: P(at least 1H in 3 coins)\n  = 1 - P(TTT) = 1 - 1/8 = 7/8"
    },
    {
      "title": "Probability — Sample Space Quick Reference",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "1 Coin = 2    n Coins = 2^n\n1 Die  = 6    2 Dice  = 36\n1 Deck = 52 cards (4 suits x 13)\n\nnCr heads in n tosses: P = nCr / 2^n\n2 dice sum=7: 6 ways, sum=2 or 12: 1 way\n\nWHY: Each coin has 2 outcomes, each die 6.\n  n coins = 2×2×...n times = 2^n.\n\nEx: 3 coins → 2^3=8 total outcomes"
    },
    {
      "title": "Probability — Odds & Expected Value",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "Odds in favor  = P(E) : P(E') = a : b\nOdds against   = P(E') : P(E) = b : a\nIf odds = a:b -> P(E) = a/(a+b)\n\nExpected Value E(X) = Sum[x_i . P(x_i)]\n\nWHY: Odds compare success to failure,\n  not success to total. P converts via a/(a+b).\n\nEx: Odds 3:5 → P = 3/(3+5) = 3/8"
    },
    {
      "title": "Calendar — Odd Days Table",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Odd Days = remainder when total days / 7\n\nDay Code:\n0=Sun  1=Mon  2=Tue  3=Wed\n4=Thu  5=Fri  6=Sat\n\nMonth Codes (odd days per month):\nJan=3  Feb=0/1  Mar=3  Apr=2\nMay=3  Jun=2    Jul=3  Aug=3\nSep=2  Oct=3    Nov=2  Dec=3\n(Feb=0 ordinary, 1 leap)\n\nWHY: 7 days make a full week. Only the\nremainder (odd days) shifts the weekday.\n\nEx: 17 days → 17/7 = 2 weeks + 3\n  Odd days = 3 → day shifts by 3"
    },
    {
      "title": "Calendar — Year & Century Odd Days",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Ordinary year (365d) → 1 odd day\nLeap year (366d)     → 2 odd days\n\nCentury odd days:\n100 yrs → 5    200 yrs → 3\n300 yrs → 1    400 yrs → 0\n\nPattern repeats: 0, 5, 3, 1\n(for 400, 100, 200, 300)\n\nWHY: 365 = 52×7 + 1, so each ordinary year\nadds 1 odd day. Leap adds 2 (366 = 52×7+2).\n\nEx: 100 yrs = 76 ord + 24 leap\n  = 76×1 + 24×2 = 124, 124%7 = 5 odd days"
    },
    {
      "title": "Calendar — Leap Year Rules",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "÷4 YES → ÷100 NO → LEAP\n÷4 YES → ÷100 YES → ÷400 YES → LEAP\n÷4 YES → ÷100 YES → ÷400 NO → ORDINARY\n÷4 NO → ORDINARY\n\n2024→Leap  1900→Not  2000→Leap\n1700→Not   1600→Leap  2100→Not\n\nWHY: Earth orbits in ~365.2425 days. ÷4 adds\na day every 4 yrs, but ÷100 removes it, and\n÷400 adds it back for fine-tuning.\n\nEx: 1900 → ÷4 Y, ÷100 Y, ÷400 N → NOT leap"
    },
    {
      "title": "Calendar — Calendar Repeat Rules",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Same calendar = same start day + same type\n\nOrdinary year repeats: +6, +11, +11\nLeap year repeats: every 28 years\n\nCount cumulative odd days until\nsum mod 7 = 0, then verify same\ntype (ordinary/leap)\n\n400 years = exact repeat (0 odd days)\n\nWHY: Calendar repeats when total odd days\n= 0 mod 7 AND same type (ord/leap).\n\nEx: 2017(ord) → +6 = 2023(ord)\n  Odd days: 1+1+1+2+1+1 = 7%7 = 0 ✓"
    },
    {
      "title": "Clock — Hand Speeds",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Hour hand   = 0.5° per min = 30° per hr\nMinute hand = 6° per min   = 360° per hr\n\nRelative speed = 6 - 0.5 = 5.5° per min\n(minute hand gains 5.5° every min over hour hand)\n\nWHY: Hour hand covers 360° in 12 hrs = 30°/hr.\nMinute hand covers 360° in 1 hr = 6°/min.\n\nEx: In 20 min, hour moves 20×0.5=10°,\n  minute moves 20×6=120°. Gap gained=110°."
    },
    {
      "title": "Clock — Master Angle Formula",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "Angle = |30H - 5.5M|\n\nH = hour (12-hr format)\nM = minutes\n\nIf result > 180 -> Angle = 360 - result\n(always take the SMALLER angle)\n\nWHY: Hour hand at 30H + 0.5M degrees from 12.\nMinute hand at 6M degrees from 12.\nAngle = |30H+0.5M - 6M| = |30H - 5.5M|.\n\nEx: At 3:30 → |90-165| = 75°"
    },
    {
      "title": "Clock — Hands at Angle theta",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Between H and (H+1) o'clock:\n  M = (30H + theta) x 2/11\n  M = (30H - theta) x 2/11\n\nTwo solutions (reject if M<0 or M>=60)\nOverlap: theta=0  Right: theta=90  Straight: theta=180\n\nWHY: Set |30H-5.5M|=theta, solve for M.\n5.5M = 30H +/- theta → M = (30H+/-theta)/5.5\nMultiply by 2/11 since 1/5.5 = 2/11.\n\nEx: Overlap at 4 → M=(120+0)×2/11=21 9/11"
    },
    {
      "title": "Clock — Overlap & Angle Counts",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "             12 hrs | 24 hrs\nOverlap(0):    11   |   22   (NOT 12/24!)\nRight(90):     22   |   44\nStraight(180): 11   |   22   (NOT 12/24!)\nAny theta:     22   |   44\n\nTime between overlaps = 12/11 hr = 65min 27sec\n\nWHY: Minute hand laps hour hand 11 times in\n12 hrs (not 12, because they start together\nat 12:00 and meet again at next 12:00).\n\nEx: Overlaps at ~12:00, 1:05, 2:10... 10:54"
    },
    {
      "title": "Clock — Gaining / Losing Clock",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "Gains x min/hr -> FAST (shows MORE)\n  Clock = Actual + (x * hours)\n\nLoses x min/hr -> SLOW (shows LESS)\n  Clock = Actual - (x * hours)\n\nCorrect time again = 720/x hours\nTwo clocks: 720/(a+b) hours\n\nWHY: Clock shows correct again when total\ngain/loss = 12 hrs = 720 min (full cycle).\n\nEx: Gains 5 min/hr → correct in\n  720/5 = 144 hrs = 6 days"
    },
    {
      "title": "Clock — Mirror Image of Clock",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "Mirror time = 11:60 - Actual time\n\nIf actual = H:M\n  Mirror = (11-H):(60-M)\n\nSpecial: 12:00 and 6:00 look same in mirror\n\nEx: 3:20 -> 8:40   7:45 -> 4:15\n\nWHY: Mirror flips left-right. 12 stays at top.\nHands swap symmetrically about 12-6 axis.\nSubtract from 12:00 (=11:60) to get mirror.\n\nEx: 2:15 → (11-2):(60-15) = 9:45"
    },
    {
      "title": "Area — Rectangle & Square",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "RECTANGLE (L × B):\n  Area = L × B\n  Perimeter = 2(L + B)\n  Diagonal = √(L² + B²)\n\nSQUARE (side a):\n  Area = a²\n  Perimeter = 4a\n  Diagonal = a√2,  Area = d²/2\n\nWHY: Rectangle = L rows of B unit squares.\n  Square diagonal splits into two 45-45-90 triangles.\n\nEx: L=8, B=5 → Area=40, Peri=26, Diag=√89"
    },
    {
      "title": "Area — Triangle Formulas",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Area = (1/2) × base × height\n\nHeron's: s=(a+b+c)/2\n  Area = √[s(s-a)(s-b)(s-c)]\n\nEquilateral (side a):\n  Area = (√3/4) × a²\n  Height = (√3/2) × a\n\nRight △: Area = (1/2) × leg₁ × leg₂\n\nWHY: Triangle = half of rectangle with\n  same base and height (b×h / 2).\n\nEx: b=10, h=6 → Area=1/2×10×6=30"
    },
    {
      "title": "Area — Circle, Semicircle, Quadrant",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Circle: Area = πr², Circum = 2πr\nSemicircle: Area = πr²/2\n  Perimeter = πr + 2r\nQuadrant: Area = πr²/4\n  Perimeter = πr/2 + 2r\n\nRing: Area = π(R² - r²)\n    = π(R+r)(R-r)\n\nWHY: Circle area = sum of infinite thin\n  rings from center to edge, giving πr².\n\nEx: r=7 → Area=22/7×49=154, C=44"
    },
    {
      "title": "Area — Parallelogram, Rhombus, Trapezium",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Parallelogram: Area = base × height\n\nRhombus (diagonals d₁, d₂):\n  Area = (1/2) × d₁ × d₂\n  Side = (1/2)√(d₁² + d₂²)\n\nTrapezium (parallel sides a,b):\n  Area = (1/2)(a + b) × h\n\nWHY: Rhombus diagonals split it into 4\n  right triangles → total = d₁×d₂/2.\n\nEx: d₁=12, d₂=16 → Area=1/2×12×16=96"
    },
    {
      "title": "Area — Sector, Arc & Path",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "Sector: Area = (θ/360) × πr²\nArc = (θ/360) × 2πr\nArea = (1/2) × arc × r\n\nPath around rectangle (width w):\n  Outer: 2w(L + B + 2w)\n  Inner: 2w(L + B - 2w)\n\nWHY: Sector is θ/360 fraction of the\n  full circle, so area = fraction × πr².\n\nEx: θ=90, r=14 → Area=1/4×π×196=154"
    },
    {
      "title": "Area — Special Values & Inscribed",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "π≈22/7  √2≈1.414  √3≈1.732\n\nSq in circle: diag=2r, Area=2r²\nCircle in sq: r=a/2, Area=πa²/4\n\nMax area (same perimeter):\n  Circle > Square > Eq.Triangle\n\nSame P: Circle:Square area = 14:11\n\nWHY: Square in circle has diagonal = diameter.\n  Area = d²/2 = (2r)²/2 = 2r².\n\nEx: r=7, sq area=2×49=98, circ=154"
    },
    {
      "title": "Height And Distance — Trigonometric Ratios",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "In a right triangle:\n  sin θ = Opposite / Hypotenuse\n  cos θ = Adjacent / Hypotenuse\n  tan θ = Opposite / Adjacent\n\nHeight & Distance → mostly tan θ\n  tan θ = Height / Distance\n  h = d × tan θ\n  d = h / tan θ\n\nWHY: tan θ links the two perpendicular\n  sides directly — no hypotenuse needed.\n\nEx: θ=45°, d=20 → h=20×tan45°=20×1=20"
    },
    {
      "title": "Height And Distance — Standard Trig Values",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Angle │ sin    │ cos    │ tan\n──────┼────────┼────────┼────────\n 30°  │ 1/2    │ √3/2   │ 1/√3\n 45°  │ 1/√2   │ 1/√2   │ 1\n 60°  │ √3/2   │ 1/2    │ √3\n\n√3 ≈ 1.732   1/√3 ≈ 0.577\n√2 ≈ 1.414   1/√2 ≈ 0.707\n\nWHY: Derived from 30-60-90 (sides 1:√3:2)\n  and 45-45-90 (sides 1:1:√2) triangles.\n\nEx: sin30°=1/2 because opp=1, hyp=2"
    },
    {
      "title": "Height And Distance — Elevation & Depression",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Angle of ELEVATION → looking UP\n  from horizontal to higher object\n\nAngle of DEPRESSION → looking DOWN\n  from horizontal to lower object\n\nKey: Depression from top\n   = Elevation from bottom\n   (alternate interior angles)\n\nWHY: Horizontal lines at top and bottom\n  are parallel → alternate interior angles\n  make depression angle = elevation angle.\n\nEx: Depression 30° from 50m tower\n  → d = 50/tan30° = 50√3 = 86.6m"
    },
    {
      "title": "Height And Distance — Two Angles Formula",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Two points, same side, gap = d:\n  h = d×tanα×tanβ / (tanα - tanβ)\n  (α > β, α is closer angle)\n\nTower on hill (angles α, β):\n  tower = d × (tan α - tan β)\n  hill  = d × tan β\n\nWHY: Express distances as h/tanα and h/tanβ.\n  Their difference = gap d. Solve for h.\n\nEx: α=60°,β=30°,d=40 → h=20√3=34.64m"
    },
    {
      "title": "Height And Distance — Shadow & Sun",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "tan(sun's angle) = Height / Shadow\n  Shadow = Height / tan θ\n  Height = Shadow × tan θ\n\nSun rises → angle ↑ → shadow ↓\nSun sets  → angle ↓ → shadow ↑\n\nAt 45° → shadow = height\n\nWHY: Sun rays form the hypotenuse; the\n  object is vertical, shadow is horizontal.\n\nEx: h=10, θ=60° → shadow=10/√3=5.77m"
    },
    {
      "title": "Height And Distance — Ladder / Kite / String",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "Ladder/String = HYPOTENUSE\n  sin θ = height / L\n  cos θ = distance / L\n  L = h / sin θ = d / cos θ\n\nKite height: h = L × sin θ\nWall height: h = L × sin θ\nFoot from wall: d = L × cos θ\n\nWHY: Ladder leans to form a right triangle;\n  it is always the hypotenuse (longest side).\n\nEx: L=10m, θ=60° → h=10×sin60°=5√3"
    },
    {
      "title": "Volume And Surface Area — Cube & Cuboid",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "CUBE (side a):\n  Volume = a^3\n  TSA = 6a^2,  LSA = 4a^2\n  Diagonal = a*sqrt(3)\n\nCUBOID (l x b x h):\n  Volume = l*b*h\n  TSA = 2(lb + bh + hl)\n  LSA = 2h(l + b)\n  Diagonal = sqrt(l^2 + b^2 + h^2)\n\nWHY: Cube has 6 identical faces (6a^2),\n  4 lateral + 2 top/bottom. V = area x height.\n\nEx: a=5 → V=125, TSA=150, Diag=5√3"
    },
    {
      "title": "Volume And Surface Area — Cylinder & Cone",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "CYLINDER (r, h):\n  Volume = pi*r^2*h\n  CSA = 2*pi*r*h\n  TSA = 2*pi*r(r + h)\n\nCONE (r, h, slant l):\n  l = sqrt(r^2 + h^2)\n  Volume = (1/3)*pi*r^2*h\n  CSA = pi*r*l\n  TSA = pi*r(r + l)\n\nWHY: Cone = 1/3 of cylinder with same base\n  and height. CSA unrolls to a sector.\n\nEx: r=7, h=10 → Cyl V=1540, Cone V=513.3"
    },
    {
      "title": "Volume And Surface Area — Sphere & Hemisphere",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "SPHERE (r):\n  Volume = (4/3)*pi*r^3\n  SA = 4*pi*r^2\n\nHEMISPHERE (r):\n  Volume = (2/3)*pi*r^3\n  CSA = 2*pi*r^2\n  TSA = 3*pi*r^2\n\nHOLLOW CYLINDER (R, r, h):\n  Volume = pi*h*(R^2 - r^2)\n\nWHY: Sphere SA = exactly 4 great circles.\n  Hemisphere TSA = dome(2πr²) + base(πr²).\n\nEx: r=7 → SA=4×22/7×49=616"
    },
    {
      "title": "Volume And Surface Area — Frustum & Scaling Rules",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "FRUSTUM (R, r, h):\n  V = (pi*h/3)(R^2 + r^2 + Rr)\n  l = sqrt(h^2 + (R-r)^2)\n  CSA = pi(R+r)*l\n\nSCALING by factor k:\n  New Volume = k^3 x old\n  New SA = k^2 x old\n\nMelting: Vol(old) = Vol(new)\nSphere in cube: r = side/2\n\nWHY: Volume scales with 3 dimensions (k^3),\n  surface with 2 (k^2). Melting preserves V.\n\nEx: Scale 2x → V=8x old, SA=4x old"
    },
    {
      "title": "Blood Relations — Family Tree Symbols",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "+ = Male    - = Female    ? = Unknown\n═══ = Marriage (couple)\n│   = Parent-Child\n┌┴┐ = Siblings\n\nWHY: Symbols let you draw any family fast.\n  + or - fixes gender; ═══ links spouses.\n\nEx: \"A is father of B, B married C\"\n  [+A]\n   │\n  [+B] ═══ [-C]"
    },
    {
      "title": "Blood Relations — Relation Shortcuts",
      "color": "#2f9e44",
      "bg": "#d8f5a2",
      "text": "Mother's husband = Father\nFather's wife = Mother\nBrother's/Sister's son = Nephew\nBrother's/Sister's daughter = Niece\nSon's wife = Daughter-in-law\nDaughter's husband = Son-in-law\nWife's brother = Brother-in-law\n\nWHY: Chains collapse to a single word.\n  Always simplify right-to-left.\n\nEx: \"Mother's brother's son\" = Cousin\n  Mother's brother = Uncle → Uncle's son"
    },
    {
      "title": "Blood Relations — Generation Levels",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Gen +2: Grandfather, Grandmother\nGen +1: Father, Mother, Uncle, Aunt\nGen  0: Self, Brother, Sister, Spouse\nGen -1: Son, Daughter, Nephew, Niece\nGen -2: Grandson, Granddaughter\n\nWHY: Count parent/child words to find gap.\n  Each \"parent\" goes UP 1, \"child\" goes DOWN 1.\n\nEx: \"Father's father\" = 2 ups = Gen +2\n  = Grandfather"
    },
    {
      "title": "Blood Relations — 'Only' Keyword Patterns",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "\"only son of my mother\" = myself(M)\n\"only daughter of my father\" = myself(F)\n\"only child\" = no siblings\n\"only son\" = no brothers\n\"only daughter\" = no sisters\n\nWHY: \"only\" eliminates other siblings.\n  Only son of my mother = I am that son.\n\nEx: \"He is the only son of my mother\"\n  = He is me (speaker is male)\n\nGENDER: he/him/father/son = Male\n        she/her/mother/daughter = Female"
    },
    {
      "title": "Coding Decoding — Alphabet Position Table (Forward)",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "A=1   B=2   C=3   D=4   E=5   F=6   G=7   H=8   I=9\nJ=10  K=11  L=12  M=13  N=14  O=15  P=16  Q=17  R=18\nS=19  T=20  U=21  V=22  W=23  X=24  Y=25  Z=26\n\nWHY: EJOTY trick = every 5th letter.\n  Anchor these 5, count +/- from nearest.\n\nEx: Find position of R.\n  Nearest anchor: T=20, R = 20-2 = 18"
    },
    {
      "title": "Coding Decoding — Reverse Alphabet Table (A=26, Z=1)",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "A=26  B=25  C=24  D=23  E=22  F=21  G=20  H=19  I=18\nJ=17  K=16  L=15  M=14  N=13  O=12  P=11  Q=10  R=9\nS=8   T=7   U=6   V=5   W=4   X=3   Y=2   Z=1\n\nWHY: 26 letters total. Reverse pos = 27-Fwd.\n  A is 1st from front = 26th from back.\n\nEx: G = 7 forward → 27-7 = 20 reverse"
    },
    {
      "title": "Coding Decoding — Mirror/Opposite Letter Pairs",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "A<->Z   B<->Y   C<->X   D<->W   E<->V\nF<->U   G<->T   H<->S   I<->R   J<->Q\nK<->P   L<->O   M<->N\n\nWHY: Mirror at center of alphabet.\n  Pair sums to 27: pos(A)+pos(Z)=1+26=27\n\nEx: Mirror of H? H=8, pair=27-8=19=S\n  So H <-> S"
    },
    {
      "title": "Coding Decoding — Common Shift Patterns",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "+1 shift: A->B, B->C, ... Z->A (Caesar cipher)\n+2 shift: A->C, B->D, ... Y->A, Z->B\n-1 shift: A->Z, B->A, C->B, ... Z->Y\n\nWHY: Like a rotating wheel of 26 letters.\n  Shift N = move N steps forward on wheel.\n\nEx: +3 shift on W(23): (23+3-1)%26+1 = 26 = Z\n\nFormula: New = (Old + N - 1) mod 26 + 1\nWrap: After Z comes A; Before A comes Z"
    },
    {
      "title": "Coding Decoding — Coding Logic Detection Strategy",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "1. Write positions of original and coded letters\n2. Find difference for each letter\n3. Constant diff? -> Uniform shift\n4. Increasing diff? -> Position-based shift\n5. Sum = 27? -> Mirror/opposite coding\n6. Vowels != Consonants? -> Condition-based\n7. No letter pattern? -> Number/symbol substitution\n\nEx: CAT->FDW. Diffs: 3,3,3 -> uniform +3\n  HAT would be -> KDW (+3 each letter)"
    },
    {
      "title": "Direction Problems — Compass Directions",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "8 Directions:\n  NW   N   NE        Cardinal: N, S, E, W (90° apart)\n    \\  |  /         Ordinal:  NE, NW, SE, SW (45°)\n  W --+-- E\n    /  |  \\         N=0°  E=90°  S=180°  W=270°\n  SW   S   SE       NE=45° SE=135° SW=225° NW=315°\n\nWHY: Full circle = 360°. 4 cardinals split it\n  into 90° sectors; ordinals bisect each at 45°.\n\nEx: Angle from N to SE = 135° (clockwise)\n  Opposite of NE = SW (flip both letters)"
    },
    {
      "title": "Direction Problems — Turn Rules",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "RIGHT = Clockwise 90°    LEFT = Anti-clockwise 90°\n\nRight cycle: N → E → S → W → N\nLeft  cycle: N → W → S → E → N\n\n180° turn = Opposite direction\n360° turn = Same direction\nFace N + Right = E    Face N + Left = W\n\nWHY: \"Right\" rotates your body CW (like a\n  clock). 4 right turns = 360° = full circle.\n\nEx: Facing W + turn right = N (W→N in CW)\n  Facing S + turn left = E (S→E in CCW)"
    },
    {
      "title": "Direction Problems — Shadow Rules (Sun)",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "MORNING: Sun=EAST  → Shadow=WEST\nEVENING: Sun=WEST  → Shadow=EAST\nNOON:    Sun overhead → No shadow\n\nMorning + shadow LEFT  → face NORTH\nMorning + shadow RIGHT → face SOUTH\nEvening: all rules REVERSE\n\nWHY: Shadow falls opposite the sun.\n  If sun is to your right (E), shadow is left (W).\n  Facing N: E=right, W=left → shadow left.\n\nEx: Evening, shadow to right → sun(W) is left\n  → facing SOUTH (reverse of morning rule)"
    },
    {
      "title": "Direction Problems — Pythagoras & Direction",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Distance = sqrt(x² + y²)\n  x = net East(+)/West(-)\n  y = net North(+)/South(-)\n\nTriplets: 3,4,5  5,12,13  8,15,17\n\nFinal direction from signs:\n  x>0,y>0=NE  x<0,y>0=NW\n  x>0,y<0=SE  x<0,y<0=SW\n\nWHY: Each walk segment adds to x or y axis.\n  Net displacement forms a right triangle;\n  hypotenuse = straight-line distance.\n\nEx: 6km N then 8km E → sqrt(36+64) = 10 km\n  Signs: x=+8, y=+6 → NE direction"
    },
    {
      "title": "Logical Puzzles — Core Logical Reasoning Rules",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "Elimination Table: Cross off impossible cells row-by-row\nMatrix/Grid: One cell per row/col = TRUE (Sudoku rule)\n\nContrapositive: If A → B, then NOT B → NOT A (VALID)\nInverse Fallacy: If A → B, NOT A → NOT B (INVALID!)\nConverse Fallacy: If A → B, B → A (INVALID!)\n\nIf exactly one lies → N-1 statements are consistent\nIf exactly one is true → N-1 statements are false\n\nWHY: Contrapositive preserves the logical chain;\n  reversing without negating breaks it.\n  If A→B→C, then ~C→~B→~A.\n\nEx: If rain→wet, then ~wet→~rain ✓\n  But ~rain→~wet ✗ (sprinkler could cause wet)"
    },
    {
      "title": "Logical Puzzles — Ordering & Comparison Rules",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "A > B, B > C  →  A > B > C  (Transitive chain)\n\"A is taller than B\" → A > B\n\"A is not the tallest\" → someone > A\n\nFor N items: Need at least N-1 comparisons\nDefinite rank only if chain is unbroken\nFloor numbering: Bottom=1, Top=N (unless stated)\n\nWHY: Transitivity links pairs through a shared\n  element. N items need N-1 links to form a\n  complete chain with no gaps.\n\nEx: P>Q, Q>R, R>S → P>Q>R>S (3 links, 4 items)\n  Rank: P=1st, Q=2nd, R=3rd, S=4th"
    },
    {
      "title": "Logical Puzzles — Selection & Constraint Rules",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "\"At least one of A,B\" → A or B or both\n\"At most one of A,B\" → not both; 0 or 1\n\"Exactly one of A,B\" → XOR (one in, one out)\n\"If A then B\" → A selected → B must be selected\n\"A and B not together\" → pick A → drop B\n\"A only if B\" → A → B (A requires B)\n\nTRICK: Convert all rules to IF-THEN + contrapositive\n\nWHY: IF-THEN chains let you derive forced picks\n  and eliminations. Contrapositive doubles each\n  rule's power (~B → ~A).\n\nEx: If A→B and B→C: pick A → must pick B,C\n  Contrapositive: drop C → must drop B,A"
    },
    {
      "title": "Logical Puzzles — Argument & Cause-Effect Rules",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "Strong Argument: Directly related, logical, realistic\nWeak Argument: Vague, emotional, personal, extreme\n\nCause-Effect types:\n  A causes B | B causes A | Independent\n  Common cause (3rd factor) | Both are effects\n\nTEST: \"Does A necessarily lead to B?\"\nCorrelation ≠ Causation!\n\nWHY: Strong arguments stand on evidence and\n  logic; weak ones rely on feelings or extremes.\n  Causation requires a mechanism, not just timing.\n\nEx: \"Umbrellas sold ↑ and floods ↑\" → NOT cause;\n  common cause = rain. Correlation ≠ Causation."
    },
    {
      "title": "Logical Puzzles — Input-Output Machine Rules",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "Step 1: Compare Input → Step I → what changed?\nStep 2: Compare Step I → Step II → what changed?\nStep 3: Identify PATTERN (sort, swap, rotate, etc.)\n\nCommon: smallest to front (selection sort),\n  swap adjacent (bubble sort), alternating ends\n\nTRICK: Count how many elements change per step\n  If only 1 moves → find which and where\n\nWHY: Each step applies the SAME rule. Identify\n  the rule from 2 consecutive steps, then apply\n  it forward to predict any future step.\n\nEx: Input: 7 3 5 1 → Step I: 1 7 3 5\n  Pattern: smallest moves to front (selection sort)"
    },
    {
      "title": "Races And Games — Race Basics",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "A beats B by X m in D-m race:\n  When A runs D, B runs (D-X)\n  Sa : Sb = D : (D-X)\n\nWHY: Same time → Speed ∝ Distance covered.\n  A covers D, B covers (D-X) → ratio = D:(D-X)\n\nEx: 200m race, A beats B by 40m\n  Sa:Sb = 200:160 = 5:4\n\nA beats B by T sec:\n  B's time = A's time + T\n\nDead heat = Both finish together\nHead start Xm: B runs (D-X) only"
    },
    {
      "title": "Races And Games — Speed Relationships",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "\"k times AS FAST as B\":\n  Sa = k × Sb\n  Ex: 5/3 times as fast → Sa = 5/3 Sb\n\n\"k times FASTER than B\" (ambiguous!):\n  Some mean Sa = (1+k) × Sb\n  Ex: 5/3 times faster → Sa = 8/3 Sb\n\nAlways check which interpretation fits!"
    },
    {
      "title": "Races And Games — Transitive & Combined",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "A beats B by X, B beats C by Y (D-m race):\n\nA beats C = X + Y - (X×Y)/D\n\nWHY: When A finishes D, B is at (D-X).\n  Scale B→C: C = (D-X)(D-Y)/D from start.\n  A beats C = D - (D-X)(D-Y)/D = X+Y-XY/D\n\nEx: 100m race, A beats B by 10, B beats C by 20\n  A beats C = 10+20-200/100 = 28m\n\nWhen A finishes D:\n  C's position = (D-X)(D-Y)/D from start"
    },
    {
      "title": "Races And Games — Games & Circular",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "GAMES: Points = Distance\n  A gives B 20 pts in 100 → 100:80\n  Same formulas as races!\n\nCIRCULAR TRACK:\n  Same dir: Meet = Track/(S1-S2)\n  Opp dir: Meet = Track/(S1+S2)\n\nWHY: Same dir → faster gains 1 lap on slower.\n  Relative speed = S1-S2; time = Track/(S1-S2)\n\nEx: 400m track, 5 m/s & 3 m/s same dir\n  Meet = 400/(5-3) = 200s\n\n\"Beats by X m OR T sec\":\n  Sb = X/T (remaining dist ÷ extra time)"
    },
    {
      "title": "Seating Arrangement — Linear Arrangement Basics",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "N persons in a line = N! arrangements\nPositions: LEFT to RIGHT = 1, 2, 3 ... N\n\nNth from right = position (Total - N + 1)\n\"Immediately left of B\" = position (B - 1)\n\"2nd to the left of B\" = position (B - 2)\n\nWHY: Each of N slots is filled left to right;\n  N choices for slot 1, N-1 for slot 2, ...\n  Total = N! = N*(N-1)*...*1\n\nEx: 4 persons → 4! = 24 arrangements\n  3rd from right in 6 = 6-3+1 = pos 4"
    },
    {
      "title": "Seating Arrangement — Circular Arrangement Basics",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "N persons in circle = (N-1)! arrangements\nFix one person, arrange rest relative\n\nFacing CENTER:  Left = CW,  Right = Anti-CW\nFacing OUTSIDE: Left = Anti-CW, Right = CW\n\nOpposite seat = current + N/2 (N must be even)\n\nWHY: In a circle, rotations are identical.\n  N! total ÷ N rotations = (N-1)!\n\nEx: 5 persons in circle = 4! = 24 ways\n  Opposite in 8-seat circle: pos 3 → 3+4 = pos 7"
    },
    {
      "title": "Seating Arrangement — Two-Row & Rectangular",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Two rows facing each other:\n  Opposite = directly facing in other row\n  Left/Right depends on person's own facing\n\nRectangular table:\n  Number seats clockwise\n  Opposite = across the table\n\nWHY: Two-row is like a mirror; left/right\n  flips when facing direction reverses.\n\nEx: Row1 faces S, Row2 faces N, 4 per row\n  R1-pos3 faces R2-pos3 (same column)"
    },
    {
      "title": "Seating Arrangement — Key Direction Rules",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "FACING CENTER:  Left=Clockwise  Right=Anti-CW\nFACING OUTSIDE: Left=Anti-CW   Right=Clockwise\n  (REVERSED from facing center!)\n\nLINEAR same dir: use normal left/right\nLINEAR two rows: each person's OWN perspective\n\"Xth to left of B\" = start at B, go left X times\n\nWHY: Looking at center, your left hand\n  traces CW arc. Facing out, it reverses\n  because you turned 180°.\n\nEx: 6 in circle facing center, A at pos 1\n  2nd left of A = 2 CW = pos 3"
    },
    {
      "title": "Series Completion — Arithmetic Series (AP)",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "nth term:  a(n) = a + (n-1)d\nSum of n:  S(n) = n/2 x [2a + (n-1)d]\n\nWHY: Each term adds d to previous.\n  a, a+d, a+2d... so nth = a+(n-1)d\n\nEx: a=3, d=5 → 3,8,13,18...\n  6th term = 3 + 5x5 = 28\n\nCommon diff d = a(2)-a(1) = constant\nMissing term = (prev + next) / 2"
    },
    {
      "title": "Series Completion — Geometric Series (GP)",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "nth term:  a(n) = a x r^(n-1)\nCommon ratio r = a(2)/a(1) = constant\n\nWHY: Each term = prev x r.\n  a, ar, ar^2... so nth = a x r^(n-1)\n\nEx: a=2, r=3 → 2,6,18,54...\n  5th term = 2 x 3^4 = 162\n\nSum of n:  S(n) = a(r^n - 1)/(r - 1)\nMissing term = sqrt(prev x next)"
    },
    {
      "title": "Series Completion — Power-Based Series",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "Squares: 1,4,9,16,25,36,49,64,81,100\nCubes:   1,8,27,64,125,216,343,512\n\nn^2+1: 2,5,10,17,26   n^2-1: 0,3,8,15,24\nn(n+1): 2,6,12,20,30  n^3+1: 2,9,28,65\n\nEx: Series 2,5,10,17,26 → n^2+1\n  n=1:1+1=2, n=2:4+1=5, n=5:25+1=26"
    },
    {
      "title": "Series Completion — Prime Numbers (first 15)",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "2, 3, 5, 7, 11, 13, 17, 19, 23,\n29, 31, 37, 41, 43, 47\n\nWHY: Primes = divisible only by 1 & itself.\n  Test divisibility by primes up to sqrt(n).\n\nEx: Is 29 prime? sqrt(29)~5.4\n  Not div by 2,3,5 → YES, prime\n\nGaps: 1,2,2,4,2,4,2,4,6,2,6,4,2,4\nTwin primes(gap=2): (3,5)(5,7)(11,13)(17,19)"
    },
    {
      "title": "Series Completion — Fibonacci & Recursive",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "F(n) = F(n-1) + F(n-2)\n1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89\n\nWHY: Each term = sum of two before it.\n  Start with any two seeds, rule holds.\n\nEx: Seeds 2,5 → 2,5,7,12,19,31...\n  Next = 19+31 = 50\n\nVariants: sum of prev 3, product rule,\n          sum + constant, any starting pair"
    },
    {
      "title": "Series Completion — Difference Table Method",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "D1 constant -> AP (linear)\nD2 constant -> Quadratic (squares)\nD3 constant -> Cubic\n\nWHY: Polynomial of degree n has constant\n  nth difference (like derivatives).\n\nEx: 1,4,9,16 → D1:3,5,7 → D2:2,2 constant\n  D2 constant = degree 2 = n^2 pattern\n\nD1 forms GP -> geometric-diff series\nKeep taking diffs until constant row!"
    },
    {
      "title": "Syllogisms — The Four Standard Propositions",
      "color": "#1971c2",
      "bg": "#d0ebff",
      "text": "A-type: All A are B   (Universal Affirmative)\nE-type: No A are B    (Universal Negative)\nI-type: Some A are B  (Particular Affirmative)\nO-type: Some A not B  (Particular Negative)\n\nREMEMBER: A E I O\n  All, nEgative, partIcular, Opposite\n\nWHY: Every syllogism premise maps to one of\n  these 4 forms; classify first, then apply rules.\n\nEx: \"Every cat is a pet\" → A-type (All cats are pets)\n  \"Not all dogs bite\" → O-type (Some dogs not bite)"
    },
    {
      "title": "Syllogisms — Venn Diagram Patterns",
      "color": "#2f9e44",
      "bg": "#ebfbee",
      "text": "All A are B  → A circle INSIDE B circle\nSome A are B → A and B OVERLAP\nNo A are B   → A and B SEPARATE\nSome A not B → Part of A OUTSIDE B\n\nAll A are B: A ⊆ B (subset)\nNo A are B:  A ∩ B = {} (disjoint)\n\nWHY: Venn circles visually show set membership;\n  overlap = shared elements, separate = none shared.\n\nEx: All dogs are animals → (Dog) ⊂ (Animal)\n  No fish are birds → (Fish)  (Birds) apart"
    },
    {
      "title": "Syllogisms — Valid Conclusion Chains",
      "color": "#e8590c",
      "bg": "#fff4e6",
      "text": "All+All = All    (A+A=A)\nAll+No  = No     (A+E=E)\nSome+All = Some  (I+A=I)\nSome+No = Some-not (I+E=O)\n\nAll+Some = NO conclusion\nSome+Some = NO conclusion\nMiddle term MUST be distributed!\n\nWHY: The middle term links two sets;\n  it must cover all members (distributed)\n  so the chain is unbroken.\n\nEx: All A are B + All B are C → All A are C\n  (A⊂B, B⊂C → A⊂C, chain through B)"
    },
    {
      "title": "Syllogisms — Conversion Rules",
      "color": "#7048e8",
      "bg": "#e5dbff",
      "text": "All A are B  → Some B are A (A→I)\nNo A are B   → No B are A   (E→E)\nSome A are B → Some B are A (I→I)\nSome A not B → NO conversion (O→X)\n\nTRAP: All A are B ≠ All B are A\nOnly: All A are B → Some B are A\n\nWHY: Conversion swaps subject & predicate.\n  Universal Aff. loses info (A⊂B ≠ B⊂A),\n  so only weaker I-type survives.\n\nEx: All cats are animals → Some animals are cats ✓\n  Some cats not dogs → CANNOT convert ✗"
    },
    {
      "title": "Syllogisms — Distribution Table",
      "color": "#e03131",
      "bg": "#ffe3e3",
      "text": "Proposition  | Subject | Predicate\nAll S are P  |   YES   |    NO\nNo S are P   |   YES   |   YES\nSome S are P |   NO    |    NO\nSome S not P |   NO    |   YES\n\nUniversal → Subject distributed\nNegative  → Predicate distributed\n\nWHY: \"Distributed\" = the term covers ALL its\n  members. Universal talks about all S;\n  negative excludes all P.\n\nEx: \"All dogs are animals\" → dogs=distributed\n  (all dogs), animals=not (only some animals)"
    },
    {
      "title": "Syllogisms — Modern Format Translations",
      "color": "#0c8599",
      "bg": "#c3fae8",
      "text": "\"Only A are B\"      = All B are A\n\"Only a few A are B\" = Some A are B\n                     + Some A are not B\n\"At least some A are B\" = Some A are B\n\"Not all A are B\"   = Some A are not B\n\nAlways convert to A/E/I/O first!\n\nWHY: Modern phrasing hides the standard form.\n  \"Only A are B\" restricts B to A, so B⊂A.\n\nEx: \"Only teachers are staff\" = All staff are\n  teachers (B⊂A). NOT all teachers are staff!"
    }
  ],
  "types": []
};
