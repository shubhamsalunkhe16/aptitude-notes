/**
 * Excalidraw Generator Helper
 * Usage: node generate-excalidraw.js <topic-folder>
 * Example: node generate-excalidraw.js 01-time-and-work
 *
 * Each topic folder must have a `content.js` that exports:
 *   { title, formulas[], lcm?, types[], traps, qref }
 */

const fs = require('fs');
const path = require('path');

// ===== ELEMENT BUILDER =====
let elements = [];
let id = 0;
const getId = () => `el_${++id}`;

function addRect(x, y, w, h, stroke, bg, group, strokeWidth = 2) {
  elements.push({
    id: getId(), type: "rectangle", x, y, width: w, height: h,
    strokeColor: stroke, backgroundColor: bg, fillStyle: "solid",
    strokeWidth, roughness: 0, opacity: 100, angle: 0,
    seed: id * 100, version: 1, versionNonce: id,
    isDeleted: false, boundElements: null, updated: 1,
    link: null, locked: false, groupIds: group ? [group] : [],
    roundness: { type: 3 }, strokeStyle: "solid", frameId: null
  });
}

function addLine(x1, y1, x2, y2, color = "#dee2e6", strokeWidth = 2) {
  elements.push({
    id: getId(), type: "line", x: x1, y: y1, width: x2 - x1, height: y2 - y1,
    strokeColor: color, backgroundColor: "transparent", fillStyle: "solid",
    strokeWidth, roughness: 0, opacity: 100, angle: 0,
    seed: id * 100, version: 1, versionNonce: id,
    isDeleted: false, boundElements: null, updated: 1,
    link: null, locked: false, groupIds: [],
    strokeStyle: "solid", frameId: null, roundness: null,
    points: [[0, 0], [x2 - x1, y2 - y1]]
  });
}

function wrapText(text, fontSize, fontFamily, maxWidth) {
  const cw = fontFamily === 3 ? fontSize * 0.6 : fontSize * 1.1;
  const maxChars = Math.floor(maxWidth / cw);
  const inputLines = text.split('\n');
  const result = [];
  for (const line of inputLines) {
    if (line.length <= maxChars) {
      result.push(line);
    } else {
      const words = line.split(' ');
      let cur = '';
      for (const word of words) {
        if (word.length > maxChars) {
          if (cur) { result.push(cur); cur = ''; }
          for (let j = 0; j < word.length; j += maxChars) {
            result.push(word.slice(j, j + maxChars));
          }
        } else if (cur.length + word.length + 1 <= maxChars) {
          cur += (cur ? ' ' : '') + word;
        } else {
          if (cur) result.push(cur);
          cur = word;
        }
      }
      if (cur) result.push(cur);
    }
  }
  return result.join('\n');
}

function textHeight(text, fontSize, fontFamily) {
  const lines = text.split('\n').length;
  const lh = fontFamily === 3 ? 1.2 : 1.25;
  return Math.ceil(lines * fontSize * lh);
}

function textWidth(text, fontSize, fontFamily) {
  const lines = text.split('\n');
  const maxLen = Math.max(...lines.map(l => l.length));
  // fontFamily 1 (Virgil/hand-drawn) renders ~2x wider than monospace
  const cw = fontFamily === 3 ? fontSize * 0.6 : fontSize * 1.1;
  return Math.ceil(maxLen * cw);
}

function addText(x, y, text, fontSize, fontFamily, color, group) {
  const lh = fontFamily === 3 ? 1.2 : 1.25;
  const w = textWidth(text, fontSize, fontFamily);
  const h = textHeight(text, fontSize, fontFamily);
  elements.push({
    id: getId(), type: "text", x, y, width: w, height: h,
    text, fontSize, fontFamily, textAlign: "left",
    verticalAlign: "top", baseline: fontSize,
    strokeColor: color, backgroundColor: "transparent",
    fillStyle: "solid", strokeWidth: 1, roughness: 0,
    opacity: 100, angle: 0, seed: id * 100, version: 1,
    versionNonce: id, isDeleted: false, boundElements: null,
    updated: 1, link: null, locked: false,
    groupIds: group ? [group] : [],
    containerId: null, originalText: text, autoResize: true,
    lineHeight: lh, strokeStyle: "solid", frameId: null, roundness: null
  });
}

// ===== LAYOUT ENGINE =====
function generate(content) {
  elements = [];
  id = 0;

  const COL_W = 680;
  const GAP = 25;
  const PAD = 15;
  const LEFT = 50;
  const RIGHT = LEFT + COL_W + GAP;
  const FULL_W = COL_W * 2 + GAP;
  let curY = 20;

  // --- TITLE ---
  const titleW = textWidth(content.title, 16, 1);
  const titleX = LEFT + Math.max(0, Math.floor((FULL_W - titleW) / 2));
  addRect(LEFT, curY, FULL_W, 50, "#1e1e1e", "#1e1e1e", "title");
  addText(titleX, curY + 15, content.title, 16, 1, "#ffffff", "title");
  curY += 70;

  // --- FORMULAS ---
  if (content.formulas && content.formulas.length > 0) {
    const fCols = Math.min(3, content.formulas.length);
    const fW = (FULL_W - GAP * (fCols - 1)) / fCols;
    const fTextW = fW - PAD * 2;

    // Calculate height for each formula box based on content
    const fHeights = content.formulas.map(f => {
      const wrappedText = wrapText(f.text, 13, 3, fTextW);
      return textHeight(wrappedText, 13, 3) + 50; // 50 = title + padding
    });

    // Get max height per row
    const rowCount = Math.ceil(content.formulas.length / fCols);
    const rowMaxH = [];
    for (let r = 0; r < rowCount; r++) {
      let maxH = 0;
      for (let c = 0; c < fCols; c++) {
        const idx = r * fCols + c;
        if (idx < fHeights.length) maxH = Math.max(maxH, fHeights[idx]);
      }
      rowMaxH.push(maxH);
    }

    let fCurY = curY;
    content.formulas.forEach((f, i) => {
      const col = i % fCols;
      const row = Math.floor(i / fCols);
      const fx = LEFT + col * (fW + GAP);
      const fy = (row === 0) ? fCurY : fCurY;
      const fH = rowMaxH[row];
      const g = `f${i}`;
      const wrappedText = wrapText(f.text, 13, 3, fTextW);
      addRect(fx, fy, fW, fH, f.color, f.bg, g);
      let fTitleSize = 17;
      while (textWidth(f.title, fTitleSize, 1) > fTextW && fTitleSize > 10) fTitleSize--;
      addText(fx + PAD, fy + 10, f.title, fTitleSize, 1, f.color, g);
      addText(fx + PAD, fy + 35, wrappedText, 13, 3, "#1e1e1e", g);
      if (col === fCols - 1 || i === content.formulas.length - 1) {
        fCurY += fH + GAP;
      }
    });
    curY = fCurY + 5;
    addLine(LEFT, curY, LEFT + FULL_W, curY, "#adb5bd", 2);
    curY += 20;
  }

  // --- CONCEPT BOX (optional, replaces LCM method) ---
  if (content.concept) {
    const c = content.concept;
    const conceptTextW = FULL_W - PAD * 2;
    const wrappedBody = wrapText(c.body, 13, 3, conceptTextW);
    const bodyH = textHeight(wrappedBody, 13, 3);
    const boxH = bodyH + 55;
    addRect(LEFT, curY, FULL_W, boxH, c.color, c.bg, "concept");
    addText(LEFT + PAD, curY + 10, c.title, 20, 1, c.color, "concept");
    addText(LEFT + PAD, curY + 40, wrappedBody, 13, 3, "#1e1e1e", "concept");
    curY += boxH + 5;
    addLine(LEFT, curY, LEFT + FULL_W, curY, "#adb5bd", 2);
    curY += 20;
  }

  // --- TYPES (3 columns) ---
  const TYPE_COLS = 3;
  const TYPE_W = Math.floor((FULL_W - GAP * (TYPE_COLS - 1)) / TYPE_COLS);
  const TYPE_TEXT_W = TYPE_W - PAD * 2;
  // For fontFamily 1, Excalidraw uses ~0.55 * fontSize per char on average
  const Q_WRAP_W = Math.floor(TYPE_TEXT_W / (13 * 0.55));

  function wrapQ(text) {
    // Word-wrap to fit Q_WRAP_W chars per line
    const words = text.split(' ');
    const lines = [];
    let cur = '';
    for (const w of words) {
      if (cur.length + w.length + 1 <= Q_WRAP_W) {
        cur += (cur ? ' ' : '') + w;
      } else {
        if (cur) lines.push(cur);
        cur = w;
      }
    }
    if (cur) lines.push(cur);
    return lines.join('\n');
  }

  function calcTypeH(t) {
    const titleH = 28;
    const wrappedQ = wrapQ(t.q);
    const qH = textHeight(wrappedQ, 13, 1);
    const solLabelH = 35;
    const treeH = textHeight(t.tree, 12, 3);
    return titleH + qH + solLabelH + treeH + 45;
  }

  for (let i = 0; i < content.types.length; i += TYPE_COLS) {
    const rowTypes = [];
    for (let c = 0; c < TYPE_COLS; c++) {
      if (i + c < content.types.length) rowTypes.push(content.types[i + c]);
    }
    const rowH = Math.max(...rowTypes.map(t => calcTypeH(t)));

    rowTypes.forEach((t, c) => {
      const tx = LEFT + c * (TYPE_W + GAP);
      const g = `type_${t.num}`;
      const wrappedQ = wrapQ(t.q);
      const qH = textHeight(wrappedQ, 13, 1);
      addRect(tx, curY, TYPE_W, rowH, t.color, t.bg, g);
      const typeTitle = `Type ${t.num}: ${t.title}`;
      let tTitleSize = 15;
      while (textWidth(typeTitle, tTitleSize, 1) > TYPE_TEXT_W && tTitleSize > 10) tTitleSize--;
      addText(tx + PAD, curY + 8, typeTitle, tTitleSize, 1, t.color, g);
      addText(tx + PAD, curY + 30, wrappedQ, 13, 1, "#1e1e1e", g);
      addText(tx + PAD, curY + 40 + qH, "Solution:", 13, 1, t.color, g);
      addText(tx + PAD, curY + 62 + qH, t.tree, 12, 3, "#1e1e1e", g);
    });

    curY += rowH + GAP;
  }
  curY += 10;

  // --- TRAPS ---
  if (content.traps) {
    const trapsH = textHeight(content.traps, 14, 3) + 55;
    addRect(LEFT, curY, FULL_W, trapsH, "#c92a2a", "#fff5f5", "traps");
    addText(LEFT + PAD, curY + 10, "COMMON TRAPS TO AVOID", 20, 1, "#c92a2a", "traps");
    addText(LEFT + PAD, curY + 42, content.traps, 14, 3, "#1e1e1e", "traps");
    curY += trapsH + GAP;
  }

  // --- QUICK REFERENCE ---
  if (content.qref) {
    const qrefH = textHeight(content.qref, 13, 3) + 55;
    addRect(LEFT, curY, FULL_W, qrefH, "#1864ab", "#d0ebff", "qref");
    addText(LEFT + PAD, curY + 10, "QUICK REFERENCE", 20, 1, "#1864ab", "qref");
    addText(LEFT + PAD, curY + 42, content.qref, 13, 3, "#1e1e1e", "qref");
  }

  return {
    type: "excalidraw",
    version: 2,
    source: "https://excalidraw.com",
    elements,
    appState: { gridSize: null, viewBackgroundColor: "#ffffff" },
    files: {}
  };
}

// ===== CLI =====
const folder = process.argv[2];
if (!folder) {
  console.error("Usage: node generate-excalidraw.js <topic-folder>");
  console.error("Example: node generate-excalidraw.js 01-time-and-work");
  process.exit(1);
}

const contentPath = path.join(__dirname, folder, 'content.js');
if (!fs.existsSync(contentPath)) {
  console.error(`Not found: ${contentPath}`);
  console.error("Each topic folder needs a content.js file.");
  process.exit(1);
}

const content = require(contentPath);
const result = generate(content);
const baseName = path.basename(folder).replace(/^\d+-/, '') + '.excalidraw';
const outPath = path.join(__dirname, folder, baseName);
fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
console.log(`✓ Generated ${elements.length} elements → ${outPath}`);

module.exports = { generate, addRect, addText, textHeight, textWidth };
