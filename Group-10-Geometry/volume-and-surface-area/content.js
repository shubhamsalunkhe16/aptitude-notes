module.exports = {
  title: "VOLUME AND SURFACE AREA — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Cube & Cuboid",
      color: "#1971c2", bg: "#d0ebff",
      text: "CUBE (side a):\n  Volume = a^3\n  TSA = 6a^2,  LSA = 4a^2\n  Diagonal = a*sqrt(3)\n\nCUBOID (l x b x h):\n  Volume = l*b*h\n  TSA = 2(lb + bh + hl)\n  LSA = 2h(l + b)\n  Diagonal = sqrt(l^2 + b^2 + h^2)" },
    { title: "Cylinder & Cone",
      color: "#2f9e44", bg: "#ebfbee",
      text: "CYLINDER (r, h):\n  Volume = pi*r^2*h\n  CSA = 2*pi*r*h\n  TSA = 2*pi*r(r + h)\n\nCONE (r, h, slant l):\n  l = sqrt(r^2 + h^2)\n  Volume = (1/3)*pi*r^2*h\n  CSA = pi*r*l\n  TSA = pi*r(r + l)" },
    { title: "Sphere & Hemisphere",
      color: "#e8590c", bg: "#fff4e6",
      text: "SPHERE (r):\n  Volume = (4/3)*pi*r^3\n  SA = 4*pi*r^2\n\nHEMISPHERE (r):\n  Volume = (2/3)*pi*r^3\n  CSA = 2*pi*r^2\n  TSA = 3*pi*r^2\n\nHOLLOW CYLINDER (R, r, h):\n  Volume = pi*h*(R^2 - r^2)" },
    { title: "Frustum & Scaling Rules",
      color: "#7048e8", bg: "#e5dbff",
      text: "FRUSTUM (R, r, h):\n  V = (pi*h/3)(R^2 + r^2 + Rr)\n  l = sqrt(h^2 + (R-r)^2)\n  CSA = pi(R+r)*l\n\nSCALING by factor k:\n  New Volume = k^3 x old\n  New SA = k^2 x old\n\nMelting: Vol(old) = Vol(new)\nSphere in cube: r = side/2" }
  ],

  types: [
    { num: "1", title: "Cube -- Volume, SA, Diagonal",
      color: "#2f9e44", bg: "#ebfbee",
      q: "Find volume, TSA, and diagonal of a cube with side 6 cm.",
      tree: "LOGIC:\nStep 1: V = 6³ = 216\nStep 2: TSA = 6×36 = 216\n  Diag = 6√3 = 10.39\n\nTRICK:\nCube: V=a³, TSA=6a², Diag=a√3\nFun fact: when a=6, V=TSA=216!\n\n  ┌─────┐\n  │CUBE │ a=6\n  └─────┘\n\nAnswer: V=216, TSA=216, D=6√3 ✓" },

    { num: "2", title: "Cuboid -- Volume, SA, Diagonal",
      color: "#1971c2", bg: "#d0ebff",
      q: "Cuboid is 12x8x5 cm. Find volume, TSA, and diagonal.",
      tree: "LOGIC:\nStep 1: V = 12×8×5 = 480\nStep 2: TSA = 2(96+40+60) = 392\n  Diag = √(144+64+25) = √233\n\nTRICK:\nTSA = 2(lb+bh+hl)\nJust compute 3 face areas, double sum\n\n  ┌──────────┐\n  │ 12×8×5   │\n  └──────────┘\n\nAnswer: V=480, TSA=392 ✓" },

    { num: "3", title: "Cylinder -- Volume, CSA, TSA",
      color: "#e8590c", bg: "#fff4e6",
      q: "Cylinder has radius 7 cm and height 10 cm. Find volume, CSA, TSA.",
      tree: "LOGIC:\nStep 1: V = π×49×10 = 1540\nStep 2: CSA = 2π×7×10 = 440\n  TSA = 2π×7×17 = 748\n\nTRICK:\nCSA = 2πrh (just the curved part)\nTSA = CSA + 2 circles = 2πr(r+h)\nπ = 22/7 when r=7 → clean numbers!\n\nAnswer: V=1540, CSA=440, TSA=748 ✓" },

    { num: "4", title: "Cone -- Volume, CSA, Slant Height",
      color: "#7048e8", bg: "#e5dbff",
      q: "Cone has radius 6 cm and height 8 cm. Find slant height, volume, and CSA.",
      tree: "LOGIC:\nStep 1: l = √(36+64) = √100 = 10\nStep 2: V = (1/3)π×36×8 = 301.71\n  CSA = π×6×10 = 188.57\n\nTRICK:\nPythagorean triplet: 6,8,10\nCone V = (1/3) × cylinder V\n\n    /\\  l=10\n   /  \\ h=8\n  /____\\ r=6\n\nAnswer: l=10, V=301.71, CSA=188.57 ✓" },

    { num: "5", title: "Sphere -- Volume, Surface Area",
      color: "#e03131", bg: "#ffe3e3",
      q: "Find volume and surface area of a sphere with radius 7 cm.",
      tree: "LOGIC:\nStep 1: V = (4/3)π×343\n  = 4/3×22×49 = 1437.33\nStep 2: SA = 4π×49 = 616\n\nTRICK:\nSA = 4πr² (4 circles!)\nV = (4/3)πr³\nWith r=7: SA=616, V=1437.33\n\nAnswer: V=1437.33, SA=616 ✓" },

    { num: "6", title: "Hemisphere -- Volume, CSA, TSA",
      color: "#c92a2a", bg: "#fff5f5",
      q: "Find volume, CSA, and TSA of a hemisphere with radius 14 cm.",
      tree: "LOGIC:\nStep 1: V = (2/3)π×2744 = 5749.33\nStep 2: CSA = 2π×196 = 1232\n  TSA = 3π×196 = 1848\n\nTRICK:\nHemisphere TSA = 3πr² (curved + base)\nCSA = 2πr² (just dome)\nTSA = CSA + πr² (add flat circle)\n\nAnswer: V=5749.33, TSA=1848 ✓" },

    { num: "7", title: "Hollow Cylinder (Pipe)",
      color: "#0c8599", bg: "#c3fae8",
      q: "Hollow pipe: outer R=10cm, inner r=8cm, length 20cm. Find volume of metal.",
      tree: "LOGIC:\nStep 1: V = πh(R²-r²)\n  = 22/7×20×(100-64)\nStep 2: = 22/7×720 = 2262.86\n\nTRICK:\nV = πh(R²-r²) = πh(R+r)(R-r)\n= 22/7×20×18×2 = 2262.86\nFactor form often easier!\n\nAnswer: 2262.86 cm³ ✓" },

    { num: "8", title: "Frustum of Cone",
      color: "#862e9c", bg: "#f3d9fa",
      q: "Frustum: top r=4cm, bottom R=8cm, height 6cm. Find volume.",
      tree: "LOGIC:\nStep 1: V = (πh/3)(R²+r²+Rr)\n  = (22/7×6/3)(64+16+32)\nStep 2: = (44/7)(112) = 704\n\nTRICK:\nFrustum V = (πh/3)(R²+r²+Rr)\nThink: average of 3 areas × h\n\n    ┌──┐ r=4\n   /    \\ h=6\n  └──────┘ R=8\n\nAnswer: 704 cm³ ✓" },

    { num: "9", title: "Water Filling Tank Problem",
      color: "#f08c00", bg: "#fff3bf",
      q: "Water flows into 50x40m tank at 25 m³/min. Time to raise level by 3m?",
      tree: "LOGIC:\nStep 1: Volume = 50×40×3 = 6000 m³\nStep 2: Time = 6000/25 = 240 min\n  = 4 hours\n\nTRICK:\nTime = Volume needed / flow rate\n= (L×B×rise) / rate\n= 6000/25 = 240 min = 4 hrs\n\nAnswer: 4 hours ✓" },

    { num: "10", title: "Melting & Recasting (Vol Constant)",
      color: "#2f9e44", bg: "#ebfbee",
      q: "Sphere r=6cm melted into cones (r=2cm, h=3cm). How many cones?",
      tree: "LOGIC:\nStep 1: V(sphere) = (4/3)π×216 = 288π\nStep 2: V(cone) = (1/3)π×4×3 = 4π\n  N = 288π/4π = 72\n\nTRICK:\nMelting → volume stays constant!\nN = V(big)/V(small)\nπ cancels out → 288/4 = 72\n\nAnswer: 72 cones ✓" },

    { num: "11", title: "Largest Shape Inside Another",
      color: "#1971c2", bg: "#d0ebff",
      q: "Find volume of largest sphere inscribed in a cube of side 10 cm.",
      tree: "LOGIC:\nStep 1: Sphere touches all faces\n  Diameter = side = 10, r = 5\nStep 2: V = (4/3)π×125 = 523.81\n\nTRICK:\nSphere in cube: r = side/2\nCube in sphere: side = 2r/√3\n\n  ┌────────┐\n  │ (   )  │ r = side/2\n  └────────┘\n\nAnswer: 523.81 cm³ ✓" },

    { num: "12", title: "Combined Solids (Cyl + Cone)",
      color: "#e8590c", bg: "#fff4e6",
      q: "Toy: cylinder (r=3, h=10) + cone on top (r=3, h=4). Find total volume.",
      tree: "LOGIC:\nStep 1: Cyl V = π×9×10 = 90π\nStep 2: Cone V = (1/3)π×9×4 = 12π\n  Total = 102π = 320.57\n\nTRICK:\nCone = (1/3) of same-size cylinder\nCyl:Cone = 3:1 ratio always\n\n    /\\  cone h=4\n   /  \\\n  |    | cyl h=10\n  |____|  r=3\n\nAnswer: 320.57 cm³ ✓" },

    { num: "13", title: "% Change in Volume",
      color: "#7048e8", bg: "#e5dbff",
      q: "Cylinder radius +20%, height -10%. Find % change in volume.",
      tree: "LOGIC:\nStep 1: V = πr²h\n  New V = π(1.2r)²(0.9h)\nStep 2: = 1.44×0.9×πr²h = 1.296V\n  Change = 29.6% increase\n\nTRICK:\nr has power 2, h has power 1\nFactor = (1.2)²×(0.9) = 1.296\nScaling: dimensions^power\n\nAnswer: 29.6% increase ✓" }
  ]
};
