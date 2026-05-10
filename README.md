# Aptitude Tricks Cheatsheet

Visual cheatsheets for competitive exam aptitude preparation (SSC, Bank PO, CAT, placements). Every topic is an interactive [Excalidraw](https://excalidraw.com/) diagram with formula cards, solved examples, and ASCII visual aids.

## Stats

| Metric | Count |
|--------|-------|
| Groups | 11 |
| Topics | 37 |
| Formula boxes | 176 + 36 (master sheet) |
| Solved question types | 473 |

## How to Use

1. **Quick revision** — Open `_global/master-formula-cheatsheet.excalidraw` in Excalidraw for all key formulas in one sheet
2. **Topic deep-dive** — Open any topic's `.excalidraw` file (e.g. `Group-03-Speed-and-Motion/problems-on-trains/problems-on-trains.excalidraw`)
3. **Read notes** — Each topic has a `notes.md` with detailed explanations

Each question is solved with:
- **LOGIC** — Step-by-step reasoning
- **TRICK** — Shortcut formula for speed
- **Diagram** — ASCII visual to build intuition

Each formula box includes:
- The formula itself
- **WHY** — How the formula is derived
- **Ex** — One simple numeric example

## Topics

### Group 01 — Number System (5 topics)
| Topic | Types | File |
|-------|-------|------|
| Problems on Numbers | 12 | `problems-on-numbers/` |
| Powers and Roots | 15 | `powers-and-roots/` |
| Simplification | 7 | `simplification/` |
| HCF and LCM | 12 | `hcf-and-lcm/` |
| Fractions and Decimals | 10 | `fractions-and-decimals/` |

### Group 02 — Average (2 topics)
| Topic | Types | File |
|-------|-------|------|
| Average | 14 | `average/` |
| Problem on Ages | 12 | `problem-on-ages/` |

### Group 03 — Speed and Motion (3 topics)
| Topic | Types | File |
|-------|-------|------|
| Time and Distance | 17 | `time-and-distance/` |
| Problems on Trains | 19 | `problems-on-trains/` |
| Boats and Streams | 12 | `boats-and-streams/` |

### Group 04 — Work and Time (2 topics)
| Topic | Types | File |
|-------|-------|------|
| Time and Work | 17 | `time-and-work/` |
| Pipes and Cisterns | 10 | `pipes-and-cisterns/` |

### Group 05 — Ratio and Proportion (6 topics)
| Topic | Types | File |
|-------|-------|------|
| Percentage | 14 | `percentage/` |
| Ratio and Proportion | 17 | `ratio-and-proportion/` |
| Chain Rule | 10 | `chain-rule/` |
| Partnership | 10 | `partnership/` |
| Alligation and Mixture | 12 | `alligation-and-mixture/` |
| Work and Wages | 8 | `work-and-wages/` |

### Group 06 — Profit and Commerce (2 topics)
| Topic | Types | File |
|-------|-------|------|
| Profit and Loss | 12 | `profit-and-loss/` |
| Discount | 10 | `discount/` |

### Group 07 — Interest (2 topics)
| Topic | Types | File |
|-------|-------|------|
| Simple Interest | 14 | `simple-interest/` |
| Compound Interest | 15 | `compound-interest/` |

### Group 08 — Probability and Counting (2 topics)
| Topic | Types | File |
|-------|-------|------|
| Permutation and Combination | 16 | `permutation-and-combination/` |
| Probability | 15 | `probability/` |

### Group 09 — Clock and Calendar (2 topics)
| Topic | Types | File |
|-------|-------|------|
| Calendar | 11 | `calendar/` |
| Clock | 12 | `clock/` |

### Group 10 — Geometry (3 topics)
| Topic | Types | File |
|-------|-------|------|
| Area | 16 | `area/` |
| Height and Distance | 12 | `height-and-distance/` |
| Volume and Surface Area | 13 | `volume-and-surface-area/` |

### Group 11 — Logical Reasoning (8 topics)
| Topic | Types | File |
|-------|-------|------|
| Races and Games | 12 | `races-and-games/` |
| Series Completion | 15 | `series-completion/` |
| Coding-Decoding | 12 | `coding-decoding/` |
| Blood Relations | 12 | `blood-relations/` |
| Seating Arrangement | 12 | `seating-arrangement/` |
| Syllogisms | 12 | `syllogisms/` |
| Direction Problems | 12 | `direction-problems/` |
| Logical Puzzles | 12 | `logical-puzzles/` |

## Project Structure

```
aptitude/
├── _global/                          # Master formula cheatsheet (all topics)
│   ├── content.js
│   └── master-formula-cheatsheet.excalidraw
├── generate-excalidraw.js            # Generator script
├── Group-01-Number-System/
│   ├── problems-on-numbers/
│   │   ├── notes.md                  # Detailed notes
│   │   ├── content.js                # Structured data (formulas + types)
│   │   └── problems-on-numbers.excalidraw  # Visual cheatsheet
│   ├── powers-and-roots/
│   │   └── ...
│   └── ...
├── Group-02-Average/
│   └── ...
└── ...
```

Each topic folder contains:
- **`notes.md`** — Detailed reference notes with explanations
- **`content.js`** — Structured data: formulas array + question types array
- **`topic-name.excalidraw`** — Generated visual cheatsheet

## Regenerating Excalidraw Files

After editing a `content.js`, regenerate its Excalidraw diagram:

```bash
# Single topic
node generate-excalidraw.js Group-03-Speed-and-Motion/problems-on-trains

# Master sheet
node generate-excalidraw.js _global
```

## Content Format

Each `content.js` exports:

```js
module.exports = {
  title: "TOPIC NAME — APTITUDE TRICKS CHEATSHEET",
  formulas: [
    { title: "Formula Box Title", color: "#hex", bg: "#hex",
      text: "Formula text with derivation and example" }
  ],
  types: [
    { num: "1", title: "Question Type", color: "#hex", bg: "#hex",
      q: "Full question sentence",
      tree: "LOGIC:\nStep-by-step\n\nTRICK:\nShortcut\n\nASCII diagram\n\nAnswer: result" }
  ]
};
```
