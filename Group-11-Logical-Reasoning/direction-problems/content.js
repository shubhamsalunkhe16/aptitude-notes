module.exports = {
  title: "DIRECTION PROBLEMS — APTITUDE TRICKS CHEATSHEET",

  formulas: [
    { title: "Compass Directions", color: "#2f9e44", bg: "#ebfbee",
      text: "8 Directions:\n  NW   N   NE        Cardinal: N, S, E, W (90° apart)\n    \\  |  /         Ordinal:  NE, NW, SE, SW (45°)\n  W --+-- E\n    /  |  \\         N=0°  E=90°  S=180°  W=270°\n  SW   S   SE       NE=45° SE=135° SW=225° NW=315°" },
    { title: "Turn Rules", color: "#1971c2", bg: "#d0ebff",
      text: "RIGHT = Clockwise 90°    LEFT = Anti-clockwise 90°\n\nRight cycle: N → E → S → W → N\nLeft  cycle: N → W → S → E → N\n\n180° turn = Opposite direction\n360° turn = Same direction\nFace N + Right = E    Face N + Left = W" },
    { title: "Shadow Rules (Sun)", color: "#e8590c", bg: "#fff4e6",
      text: "MORNING: Sun=EAST  → Shadow=WEST\nEVENING: Sun=WEST  → Shadow=EAST\nNOON:    Sun overhead → No shadow\n\nMorning + shadow LEFT  → face NORTH\nMorning + shadow RIGHT → face SOUTH\nEvening: all rules REVERSE" },
    { title: "Pythagoras & Direction", color: "#7048e8", bg: "#e5dbff",
      text: "Distance = sqrt(x² + y²)\n  x = net East(+)/West(-)\n  y = net North(+)/South(-)\n\nTriplets: 3,4,5  5,12,13  8,15,17\n\nFinal direction from signs:\n  x>0,y>0=NE  x<0,y>0=NW\n  x>0,y<0=SE  x<0,y<0=SW" }
  ],

  types: [
    { num: "1", title: "Basic Directions", color: "#2f9e44", bg: "#ebfbee",
      q: "A person facing North walks 5 km in a straight line. Where is he now relative to his starting point?",
      tree: "LOGIC:\nStep 1: Start facing North, walk 5km\nStep 2: No turns, straight line North\n\n       N\n       ↑ 5km\n       |\n     START\n\nTRICK:\nNo turn = direction stays same.\nDisplacement = distance in that direction.\n\nAnswer: 5 km North of starting point ✓" },

    { num: "2", title: "Left / Right Turn", color: "#1971c2", bg: "#d0ebff",
      q: "A man facing East turns right. Which direction is he now facing?",
      tree: "LOGIC:\nStep 1: Facing East\nStep 2: Right = Clockwise 90°\nStep 3: E -> S (CW: N->E->S->W->N)\n\n       N\n  W ---+---> E (facing)\n       |   ↓ (right=CW)\n       S\n\nTRICK:\nRight cycle: N->E->S->W->N\nLeft cycle:  N->W->S->E->N\nJust move one step in the cycle.\n\nAnswer: Now facing SOUTH ✓" },

    { num: "3", title: "Opposite Direction", color: "#e8590c", bg: "#fff4e6",
      q: "A girl is walking in the North-East direction. Which direction is directly behind her?",
      tree: "LOGIC:\nStep 1: NE = North + East combined\nStep 2: Opposite = flip both components\nStep 3: N->S, E->W => SW\n\n  NW  N  NE <- facing\n   \\ | /\n  W--+--E\n   / | \\\n  SW  S  SE <- behind\n\nTRICK:\nOpposite: flip each letter.\nN<->S, E<->W. NE -> SW.\n\nAnswer: South-West is behind her ✓" },

    { num: "4", title: "Final Position After Turns", color: "#7048e8", bg: "#e5dbff",
      q: "A person walks 5 km North, turns right and walks 3 km, then turns right again and walks 5 km. What is his position relative to the starting point?",
      tree: "LOGIC:\nStep 1: 5km N -> turn R(East) 3km\nStep 2: Turn R(South) 5km\nStep 3: y=+5-5=0, x=+3\n\n  A---3km E---B\n  |           |\n  5km N     5km S\n  |           |\n  START      FINAL\n\nTRICK:\nN and S cancel: 5-5=0 (y=0)\nOnly E remains: x=3km East\n\nAnswer: 3 km EAST of start ✓" },

    { num: "5", title: "Distance from Start", color: "#e03131", bg: "#ffe3e3",
      q: "A person walks 4 km North, then turns right and walks 3 km. What is his straight-line distance from the starting point?",
      tree: "LOGIC:\nStep 1: 4km N then 3km E (right angle)\nStep 2: d = sqrt(3^2 + 4^2)\n     = sqrt(9+16) = sqrt(25)\n\n     FINAL\n    /|\n d / | 4km\n  /  |\n START--3km->\n\nTRICK:\nRight angle = Pythagoras! Check triplets.\n3,4,5 is a known triplet -> d = 5 km\n\nAnswer: 5 km from start ✓" },

    { num: "6", title: "Direction from Start", color: "#c92a2a", bg: "#fff5f5",
      q: "A person walks 6 km South and then 8 km East. In which direction is he from his starting point?",
      tree: "LOGIC:\nStep 1: x=+8(East), y=-6(South)\nStep 2: x>0, y<0 -> South-East quadrant\n\n  START---------\n  |              \\\n  6km S           \\\n  |                \\\n  +---8km E---FINAL\n\nTRICK:\nx sign + y sign -> quadrant:\nx>0,y>0=NE  x<0,y>0=NW\nx>0,y<0=SE  x<0,y<0=SW\n\nAnswer: SOUTH-EAST of start ✓" },

    { num: "7", title: "Shadow-Based Direction", color: "#0c8599", bg: "#c3fae8",
      q: "During a morning walk, a person notices that his shadow falls to his left. Which direction is he facing?",
      tree: "LOGIC:\nStep 1: Morning sun = EAST\nStep 2: Shadow opposite = WEST\nStep 3: Shadow to LEFT -> West is left\nStep 4: West on left = facing North\n\n     N (front)\n     ↑\nW <- + -> E\n(shadow) (sun)\n\nTRICK:\nMorning: shadow LEFT=face N, RIGHT=face S\nEvening: REVERSE all rules.\n\nAnswer: Facing NORTH ✓" },

    { num: "8", title: "Shortest Distance: Two Points", color: "#862e9c", bg: "#f3d9fa",
      q: "Two people start from the same point. Person A ends up at position (4,3) and Person B at (8,1). What is the distance between A and B?",
      tree: "LOGIC:\nStep 1: dx = 8-4 = 4, dy = 1-3 = -2\nStep 2: d = sqrt(4^2 + 2^2)\n     = sqrt(16+4) = sqrt(20)\n\n  A(4,3)\n    |\\\n  2 | \\ d\n    |  \\\n    +--- B(8,1)\n     4\n\nTRICK:\nDistance formula: sqrt(dx^2 + dy^2)\n= sqrt(16+4) = 2*sqrt(5) ~ 4.47 km\n\nAnswer: 2sqrt(5) ~ 4.47 km apart ✓" },

    { num: "9", title: "Relative Position of People", color: "#f08c00", bg: "#fff3bf",
      q: "Starting from the same point, A walks 5 km North and B walks 5 km East. In which direction is A from B?",
      tree: "LOGIC:\nStep 1: A at (0,5), B at (5,0)\nStep 2: A relative to B:\n  dx=0-5=-5(West), dy=5-0=+5(North)\nStep 3: x<0,y>0 -> North-West\n\n     A(0,5)\n     |\n  5N |\n     |\n  START---5E---B(5,0)\n\nTRICK:\nSubtract B's coords from A's coords.\nSign tells quadrant: (-,+) = NW\n\nAnswer: A is NORTH-WEST of B ✓" },

    { num: "10", title: "CW and CCW Turns", color: "#2f9e44", bg: "#ebfbee",
      q: "A person facing North makes 3 clockwise 90-degree turns followed by 1 anti-clockwise 90-degree turn. Which direction is he now facing?",
      tree: "LOGIC:\nStep 1: 3 CW from N: N->E->S->W\nStep 2: 1 CCW from W: W->S\n\nTRICK:\nNet turns = CW - CCW = 3-1 = 2 right turns\nN + 2 right = N->E->S\nEach 4 net turns = full circle (cancel)\n\nAnswer: Facing SOUTH ✓" },

    { num: "11", title: "Chain Walk Problem", color: "#1971c2", bg: "#d0ebff",
      q: "A person walks 5 km North, turns right and walks 3 km, turns right and walks 2 km, then turns left and walks 4 km. What is his distance and direction from the starting point?",
      tree: "LOGIC:\nStep 1: N:+5y, R(E):+3x, R(S):-2y, L(E):+4x\nStep 2: x=3+4=7, y=5-2=3\nStep 3: d=sqrt(49+9)=sqrt(58)~7.62\n\n  A(0,5)--3E--B(3,5)\n  |            |\n  5N         2S\n  |            |\n  START  C(3,3)--4E--FINAL(7,3)\n\nTRICK:\nSum all x-moves and y-moves separately.\nApply Pythagoras on net (x, y).\n\nAnswer: ~7.62 km, NORTH-EAST ✓" },

    { num: "12", title: "Multiple Angle Turns", color: "#e8590c", bg: "#fff4e6",
      q: "A person facing South makes the following turns in sequence: 90 degrees clockwise, 180 degrees, then 90 degrees counter-clockwise. Which direction is he finally facing?",
      tree: "LOGIC:\nStep 1: S -> 90CW -> W\nStep 2: W -> 180 -> E\nStep 3: E -> 90CCW -> N\n\nTRICK:\nSum angles: +90+180-90 = +180 net CW\nS + 180 = N (opposite)\n180=opposite, 360=same, 90=next CW\n\nAnswer: Facing NORTH ✓" }
  ]
};
