# Volume and Surface Area - Aptitude Tricks Cheatsheet

---

## ALL FORMULAS AT A GLANCE

### Cube & Cuboid

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  CUBE (side = a):                                                   │
│    Volume = a^3                                                     │
│    TSA = 6a^2                                                       │
│    LSA = 4a^2                                                       │
│    Diagonal = a x sqrt(3)                                           │
│                                                                     │
│  CUBOID (l x b x h):                                                │
│    Volume = l x b x h                                               │
│    TSA = 2(lb + bh + hl)                                            │
│    LSA = 2h(l + b)                                                  │
│    Diagonal = sqrt(l^2 + b^2 + h^2)                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Cylinder & Cone

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  CYLINDER (radius r, height h):                                     │
│    Volume = pi x r^2 x h                                            │
│    CSA = 2 x pi x r x h                                             │
│    TSA = 2 x pi x r(r + h)                                          │
│                                                                     │
│  CONE (radius r, height h, slant l):                                │
│    Slant height l = sqrt(r^2 + h^2)                                 │
│    Volume = (1/3) x pi x r^2 x h                                    │
│    CSA = pi x r x l                                                  │
│    TSA = pi x r(r + l)                                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Sphere, Hemisphere & Special Shapes

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  SPHERE (radius r):                                                 │
│    Volume = (4/3) x pi x r^3                                        │
│    Surface Area = 4 x pi x r^2                                      │
│                                                                     │
│  HEMISPHERE (radius r):                                              │
│    Volume = (2/3) x pi x r^3                                        │
│    CSA = 2 x pi x r^2                                                │
│    TSA = 3 x pi x r^2                                                │
│                                                                     │
│  HOLLOW CYLINDER (outer R, inner r, height h):                      │
│    Volume = pi x h x (R^2 - r^2)                                    │
│                                                                     │
│  FRUSTUM (radii R, r, height h, slant l):                           │
│    Volume = (pi x h / 3)(R^2 + r^2 + Rr)                           │
│    l = sqrt(h^2 + (R-r)^2)                                          │
│    CSA = pi(R + r) x l                                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Scaling & Special Rules

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  If dimensions scaled by factor k:                                  │
│    New Volume = k^3 x Original Volume                               │
│    New Surface Area = k^2 x Original Surface Area                   │
│                                                                     │
│  Melting & Recasting:                                                │
│    Volume of old shape = Volume of new shape                        │
│                                                                     │
│  Largest sphere in cube (side a):                                   │
│    Radius = a/2                                                      │
│                                                                     │
│  Largest cube in sphere (radius r):                                 │
│    Side = 2r / sqrt(3)                                               │
│                                                                     │
│  % change in volume when radius changes by x%:                     │
│    For sphere: new V = (1 + x/100)^3 x V                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## KEY CONCEPT — Shape Comparison Visual

```
         VOLUME AND SURFACE AREA — Shape Guide

   ┌───┐     ┌─────┐      /\         ___
   │   │     │     │      /  \       /   \
   │   │     │     │     /    \     |     |
   └───┘     └─────┘    /______\    \___ /
   CUBE     CUBOID      CONE       SPHERE

   Volume Relationships (same r and h):
     Cylinder : Cone : Sphere = 3 : 1 : 2
     (when h = 2r for sphere comparison)

   KEY RULE:
     Cone = 1/3 of Cylinder (same base, same height)
     Hemisphere = 2/3 of Cylinder (when h = r)

   MELTING: Volume stays constant
   SCALING: Volume changes as cube of scale factor
```

---

## Type 1: Cube — Volume, Surface Area, Diagonal

**Q: Find the volume, total surface area, and diagonal of a cube with side 6 cm.**

```
   Side a = 6 cm

   Volume = a^3 = 6^3 = 216 cm^3

   TSA = 6a^2 = 6 x 36 = 216 cm^2

   Diagonal = a x sqrt(3) = 6 x sqrt(3)
            = 6 x 1.732 = 10.39 cm

   ┌───────────────────────────────────────┐
   │   ┌───────┐                           │
   │   │       │  a = 6 cm                 │
   │   │  CUBE │  V = 216 cm^3             │
   │   │       │  TSA = 216 cm^2           │
   │   └───────┘  Diag = 6*sqrt(3) cm      │
   └───────────────────────────────────────┘

   Answer: V=216, TSA=216, Diag=6*sqrt(3) ✓
```

---

## Type 2: Cuboid — Volume, Surface Area, Diagonal

**Q: A cuboid has dimensions 12 cm x 8 cm x 5 cm. Find its volume, TSA, and diagonal.**

```
   l=12, b=8, h=5

   Volume = l x b x h = 12 x 8 x 5 = 480 cm^3

   TSA = 2(lb + bh + hl)
       = 2(96 + 40 + 60) = 2 x 196 = 392 cm^2

   Diagonal = sqrt(l^2 + b^2 + h^2)
            = sqrt(144 + 64 + 25) = sqrt(233)
            = 15.26 cm

   ┌───────────────────────────────────────┐
   │   ┌───────────┐                       │
   │   │  12 x 8   │ h=5                   │
   │   │  CUBOID   │ V = 480 cm^3          │
   │   └───────────┘ TSA = 392 cm^2        │
   │   Diagonal = sqrt(233) = 15.26 cm    │
   └───────────────────────────────────────┘

   Answer: V=480, TSA=392, Diag=sqrt(233) ✓
```

---

## Type 3: Cylinder — Volume, CSA, TSA

**Q: A cylinder has radius 7 cm and height 10 cm. Find its volume, CSA, and TSA.**

```
   r=7 cm, h=10 cm, pi=22/7

   Volume = pi x r^2 x h
          = 22/7 x 49 x 10 = 1540 cm^3

   CSA = 2 x pi x r x h
       = 2 x 22/7 x 7 x 10 = 440 cm^2

   TSA = 2 x pi x r(r + h)
       = 2 x 22/7 x 7 x 17 = 748 cm^2

   ┌───────────────────────────────────────┐
   │      ┌─────┐                          │
   │      │     │ h=10                     │
   │      │  r=7│ V = 1540 cm^3            │
   │      └─────┘ CSA = 440 cm^2           │
   │              TSA = 748 cm^2           │
   └───────────────────────────────────────┘

   Answer: V=1540, CSA=440, TSA=748 ✓
```

---

## Type 4: Cone — Volume, CSA, TSA, Slant Height

**Q: A cone has radius 6 cm and height 8 cm. Find its slant height, volume, CSA, and TSA.**

```
   r=6, h=8

   Slant height l = sqrt(r^2 + h^2)
     = sqrt(36 + 64) = sqrt(100) = 10 cm

   Volume = 1/3 x pi x r^2 x h
          = 1/3 x 22/7 x 36 x 8 = 301.71 cm^3

   CSA = pi x r x l = 22/7 x 6 x 10
       = 188.57 cm^2

   TSA = pi x r(r + l) = 22/7 x 6 x 16
       = 301.71 cm^2

   ┌───────────────────────────────────────┐
   │       /\     l=10 (slant)             │
   │      /  \ h=8                         │
   │     /    \   V = 301.71 cm^3          │
   │    /______\  CSA = 188.57 cm^2        │
   │      r=6     TSA = 301.71 cm^2        │
   └───────────────────────────────────────┘

   Answer: l=10, V=301.71, CSA=188.57 ✓
```

---

## Type 5: Sphere — Volume, Surface Area

**Q: Find the volume and surface area of a sphere with radius 7 cm.**

```
   r = 7 cm, pi = 22/7

   Volume = 4/3 x pi x r^3
          = 4/3 x 22/7 x 343
          = 4/3 x 22 x 49
          = 4312/3 = 1437.33 cm^3

   Surface Area = 4 x pi x r^2
                = 4 x 22/7 x 49 = 616 cm^2

   ┌───────────────────────────────────────┐
   │       ___                             │
   │      /   \   r = 7 cm                 │
   │     | . r |  V = 1437.33 cm^3         │
   │      \___/   SA = 616 cm^2            │
   │                                       │
   │  V = (4/3)pi.r^3, SA = 4.pi.r^2     │
   └───────────────────────────────────────┘

   Answer: V=1437.33, SA=616 ✓
```

---

## Type 6: Hemisphere — Volume, CSA, TSA

**Q: Find the volume, CSA, and TSA of a hemisphere with radius 14 cm.**

```
   r = 14 cm, pi = 22/7

   Volume = 2/3 x pi x r^3
          = 2/3 x 22/7 x 2744
          = 2/3 x 8624 = 5749.33 cm^3

   CSA = 2 x pi x r^2
       = 2 x 22/7 x 196 = 1232 cm^2

   TSA = 3 x pi x r^2
       = 3 x 22/7 x 196 = 1848 cm^2

   ┌───────────────────────────────────────┐
   │       ___                             │
   │      /   \   r = 14 cm               │
   │     |_____|  V = 5749.33 cm^3         │
   │     (flat)   CSA = 1232 cm^2          │
   │              TSA = 1848 cm^2          │
   │  TSA = CSA + pi.r^2 (flat circle)    │
   └───────────────────────────────────────┘

   Answer: V=5749.33, CSA=1232, TSA=1848 ✓
```

---

## Type 7: Hollow Cylinder (Pipe) — Volume

**Q: A hollow cylindrical pipe has outer radius 10 cm, inner radius 8 cm, and length 20 cm. Find the volume of metal used.**

```
   R=10, r=8, h=20

   Volume = pi x h x (R^2 - r^2)
          = 22/7 x 20 x (100 - 64)
          = 22/7 x 20 x 36
          = 22/7 x 720 = 2262.86 cm^3

   ┌───────────────────────────────────────┐
   │    ┌─┌───┐─┐                          │
   │    │ │   │ │ h=20                     │
   │    │ │r=8│ │ R=10                     │
   │    └─└───┘─┘                          │
   │    Metal = pi.h(R^2 - r^2)           │
   │    = pi x 20 x 36 = 2262.86 cm^3    │
   └───────────────────────────────────────┘

   Answer: 2262.86 cm^3 ✓
```

---

## Type 8: Frustum of Cone

**Q: A frustum of a cone has top radius 4 cm, bottom radius 8 cm, and height 6 cm. Find its volume.**

```
   R=8, r=4, h=6

   Volume = (pi x h / 3)(R^2 + r^2 + R x r)
          = (22/7 x 6/3)(64 + 16 + 32)
          = (44/7)(112)
          = 4928/7 = 704 cm^3

   Slant l = sqrt(h^2 + (R-r)^2)
           = sqrt(36 + 16) = sqrt(52) = 7.21 cm

   ┌───────────────────────────────────────┐
   │      ┌──┐  r=4                        │
   │     /    \  h=6                       │
   │    /      \ l=7.21                    │
   │   └────────┘ R=8                      │
   │   V = (pi.h/3)(R^2+r^2+Rr)          │
   │   = 704 cm^3                          │
   └───────────────────────────────────────┘

   Answer: 704 cm^3 ✓
```

---

## Type 9: Water Filling/Emptying Tank Problems

**Q: Water flows into a tank 50 m x 40 m at 25 cubic m per min. How long to raise water level by 3 m?**

```
   Tank base = 50 m x 40 m
   Water level rise = 3 m

   Volume needed = 50 x 40 x 3 = 6000 m^3

   Rate = 25 m^3/min

   Time = Volume / Rate = 6000 / 25 = 240 min
        = 4 hours

   ┌───────────────────────────────────────┐
   │   ┌─────────────┐ 50x40 m base       │
   │   │  ░░░░░░░░░  │ fill 3m height     │
   │   │  ░░░WATER░░ │ V = 6000 m^3       │
   │   │  ░░░░░░░░░  │                    │
   │   └─────────────┘ Rate = 25 m^3/min  │
   │   Time = 6000/25 = 240 min = 4 hrs  │
   └───────────────────────────────────────┘

   Answer: 4 hours ✓
```

---

## Type 10: Melting and Recasting (Volume Constant)

**Q: A metallic sphere of radius 6 cm is melted and recast into small cones of radius 2 cm and height 3 cm. How many cones are formed?**

```
   Volume of sphere = 4/3 x pi x 6^3
     = 4/3 x pi x 216 = 288pi cm^3

   Volume of 1 cone = 1/3 x pi x 2^2 x 3
     = 1/3 x pi x 12 = 4pi cm^3

   Number of cones = 288pi / 4pi = 72

   ┌───────────────────────────────────────┐
   │   Sphere        ->     Cones         │
   │    ___                  /\            │
   │   /   \   MELT +       /  \  x 72    │
   │  | r=6 |  RECAST      /____\         │
   │   \___/               r=2,h=3        │
   │  V(sphere) / V(cone) = 72            │
   └───────────────────────────────────────┘

   Answer: 72 cones ✓
```

---

## Type 11: Largest Shape Inscribed in Another

**Q: Find the volume of the largest sphere that can be inscribed in a cube of side 10 cm.**

```
   Cube side = 10 cm

   Largest sphere inside cube:
     Diameter = side of cube = 10
     Radius = 5 cm

   Volume = 4/3 x pi x 5^3
          = 4/3 x 22/7 x 125
          = 11000/21 = 523.81 cm^3

   ┌───────────────────────────────────────┐
   │   ┌─────────┐                         │
   │   │  .---.  │ Sphere touches all      │
   │   │ ( . r ) │ 6 faces of cube         │
   │   │  '---'  │ r = side/2 = 5 cm      │
   │   └─────────┘                         │
   │   V = 4/3 x pi x 5^3 = 523.81 cm^3  │
   └───────────────────────────────────────┘

   Answer: 523.81 cm^3 ✓
```

---

## Type 12: Combined Solids (Cylinder + Cone, etc.)

**Q: A toy is shaped as a cylinder (r=3 cm, h=10 cm) with a cone on top (r=3 cm, h=4 cm). Find total volume.**

```
   Cylinder: r=3, h=10
     V1 = pi x 9 x 10 = 90pi

   Cone: r=3, h=4
     V2 = 1/3 x pi x 9 x 4 = 12pi

   Total = 90pi + 12pi = 102pi
         = 102 x 22/7 = 320.57 cm^3

   ┌───────────────────────────────────────┐
   │       /\     cone h=4                 │
   │      /  \    V2 = 12pi                │
   │     /____\                            │
   │     |    |   cylinder h=10            │
   │     |    |   V1 = 90pi                │
   │     |____|   r = 3 cm                 │
   │   Total = 102pi = 320.57 cm^3        │
   └───────────────────────────────────────┘

   Answer: 320.57 cm^3 ✓
```

---

## Type 13: Percentage Change in Volume When Dimensions Change

**Q: If the radius of a cylinder is increased by 20% and height decreased by 10%, find the % change in volume.**

```
   V = pi x r^2 x h

   New r = 1.2r, New h = 0.9h

   New V = pi x (1.2r)^2 x 0.9h
         = pi x 1.44r^2 x 0.9h
         = 1.296 x pi x r^2 x h
         = 1.296V

   % change = (1.296 - 1) x 100 = 29.6% increase

   ┌───────────────────────────────────────┐
   │  r -> 1.2r (+20%), h -> 0.9h (-10%) │
   │  V factor = (1.2)^2 x (0.9)         │
   │           = 1.44 x 0.9 = 1.296      │
   │  Volume increases by 29.6%           │
   │                                       │
   │  Rule: V = pi.r^2.h                  │
   │  r has power 2, h has power 1        │
   │  Change compounds multiplicatively   │
   └───────────────────────────────────────┘

   Answer: 29.6% increase ✓
```
