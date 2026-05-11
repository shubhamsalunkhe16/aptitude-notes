/**
 * Master Formula Cheatsheet Generator
 * Reads all topic content.js files, groups formula blocks by topic
 * with section headers and dividers.
 *
 * Usage: node _global/generate-master.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// ===== ELEMENT BUILDER =====
let elements = [];
let elId = 0;
const getId = () => `el_${++elId}`;

function addRect(x, y, w, h, stroke, bg, group, strokeWidth = 2) {
  elements.push({
    id: getId(), type: "rectangle", x, y, width: w, height: h,
    strokeColor: stroke, backgroundColor: bg, fillStyle: "solid",
    strokeWidth, roughness: 0, opacity: 100, angle: 0,
    seed: elId * 100, version: 1, versionNonce: elId,
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
    seed: elId * 100, version: 1, versionNonce: elId,
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
          for (let j = 0; j < word.length; j += maxChars)
            result.push(word.slice(j, j + maxChars));
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
  const cw = fontFamily === 3 ? fontSize * 0.6 : fontSize * 1.1;
  return Math.ceil(maxLen * cw);
}

function addText(x, y, text, fontSize, fontFamily, color, group, maxW) {
  const lh = fontFamily === 3 ? 1.2 : 1.25;
  const w = maxW ? Math.min(textWidth(text, fontSize, fontFamily), maxW) : textWidth(text, fontSize, fontFamily);
  const h = textHeight(text, fontSize, fontFamily);
  elements.push({
    id: getId(), type: "text", x, y, width: w, height: h,
    text, fontSize, fontFamily, textAlign: "left",
    verticalAlign: "top", baseline: fontSize,
    strokeColor: color, backgroundColor: "transparent",
    fillStyle: "solid", strokeWidth: 1, roughness: 0,
    opacity: 100, angle: 0, seed: elId * 100, version: 1,
    versionNonce: elId, isDeleted: false, boundElements: null,
    updated: 1, link: null, locked: false,
    groupIds: group ? [group] : [],
    containerId: null, originalText: text, autoResize: true,
    lineHeight: lh, strokeStyle: "solid", frameId: null, roundness: null
  });
}

// ===== COLLECT ALL TOPICS =====
function collectTopics() {
  const topics = [];
  const groups = fs.readdirSync(ROOT)
    .filter(d => d.startsWith('Group-') && fs.statSync(path.join(ROOT, d)).isDirectory())
    .sort();

  for (const g of groups) {
    const subs = fs.readdirSync(path.join(ROOT, g))
      .filter(d => fs.statSync(path.join(ROOT, g, d)).isDirectory())
      .sort();
    for (const t of subs) {
      const cp = path.join(ROOT, g, t, 'content.js');
      if (!fs.existsSync(cp)) continue;
      delete require.cache[require.resolve(cp)];
      const c = require(cp);
      if (!c.formulas || c.formulas.length === 0) continue;
      const displayName = t.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      topics.push({ name: displayName, group: g, formulas: c.formulas });
    }
  }
  return topics;
}

// ===== SECTION HEADER COLORS (per group) =====
const GROUP_COLORS = {
  'Group-01': { stroke: '#1971c2', bg: '#1971c2' },
  'Group-02': { stroke: '#7048e8', bg: '#7048e8' },
  'Group-03': { stroke: '#862e9c', bg: '#862e9c' },
  'Group-04': { stroke: '#c92a2a', bg: '#c92a2a' },
  'Group-05': { stroke: '#e8590c', bg: '#e8590c' },
  'Group-06': { stroke: '#2f9e44', bg: '#2f9e44' },
  'Group-07': { stroke: '#0c8599', bg: '#0c8599' },
  'Group-08': { stroke: '#e03131', bg: '#e03131' },
  'Group-09': { stroke: '#f08c00', bg: '#f08c00' },
  'Group-10': { stroke: '#1864ab', bg: '#1864ab' },
  'Group-11': { stroke: '#862e9c', bg: '#862e9c' },
};

// ===== GENERATE =====
function generate() {
  elements = [];
  elId = 0;

  const COLS = 3;
  const COL_W = 460;
  const GAP = 20;
  const PAD = 12;
  const LEFT = 50;
  const FULL_W = COL_W * COLS + GAP * (COLS - 1);

  let curY = 20;

  // --- MAIN TITLE ---
  const title = "MASTER FORMULA CHEATSHEET — ALL TOPICS";
  addRect(LEFT, curY, FULL_W, 50, "#1e1e1e", "#1e1e1e", "main_title");
  const titleW = textWidth(title, 18, 1);
  const titleX = LEFT + Math.max(0, Math.floor((FULL_W - titleW) / 2));
  addText(titleX, curY + 14, title, 18, 1, "#ffffff", "main_title", FULL_W - PAD * 2);
  curY += 70;

  const topics = collectTopics();
  let totalBlocks = 0;

  for (const topic of topics) {
    const groupKey = topic.group.substring(0, 8);
    const headerColor = GROUP_COLORS[groupKey] || { stroke: '#1e1e1e', bg: '#1e1e1e' };

    // --- TOPIC HEADER BAR ---
    const headerGroup = `hdr_${totalBlocks}`;
    addRect(LEFT, curY, FULL_W, 36, headerColor.stroke, headerColor.bg, headerGroup);
    const headerText = `  ${topic.name.toUpperCase()}`;
    addText(LEFT + 10, curY + 8, headerText, 15, 1, "#ffffff", headerGroup, FULL_W - PAD * 2);
    curY += 46;

    // --- FORMULA BLOCKS (3-col grid) ---
    const fW = (FULL_W - GAP * (COLS - 1)) / COLS;
    const fTextW = fW - PAD * 2;

    const fHeights = topic.formulas.map(f => {
      const wrappedText = wrapText(f.text, 13, 3, fTextW);
      return textHeight(wrappedText, 13, 3) + 48;
    });

    const rowCount = Math.ceil(topic.formulas.length / COLS);
    const rowMaxH = [];
    for (let r = 0; r < rowCount; r++) {
      let maxH = 0;
      for (let c = 0; c < COLS; c++) {
        const idx = r * COLS + c;
        if (idx < fHeights.length) maxH = Math.max(maxH, fHeights[idx]);
      }
      rowMaxH.push(maxH);
    }

    let fCurY = curY;
    topic.formulas.forEach((f, i) => {
      const col = i % COLS;
      const row = Math.floor(i / COLS);
      if (col === 0 && row > 0) fCurY += rowMaxH[row - 1] + GAP;
      const fx = LEFT + col * (fW + GAP);
      const fy = fCurY;
      const fH = rowMaxH[row];
      const g = `f_${totalBlocks}_${i}`;
      const wrappedText = wrapText(f.text, 13, 3, fTextW);

      addRect(fx, fy, fW, fH, f.color, f.bg, g);

      let fTitleSize = 14;
      while (textWidth(f.title, fTitleSize, 1) > fTextW && fTitleSize > 9) fTitleSize--;
      addText(fx + PAD, fy + 8, f.title, fTitleSize, 1, f.color, g, fTextW);
      addText(fx + PAD, fy + 30, wrappedText, 13, 3, "#1e1e1e", g, fTextW);
    });

    const lastRow = Math.floor((topic.formulas.length - 1) / COLS);
    curY = fCurY + rowMaxH[lastRow] + 15;

    // --- DIVIDER LINE ---
    addLine(LEFT, curY, LEFT + FULL_W, curY, "#adb5bd", 1);
    curY += 25;

    totalBlocks++;
  }

  console.log(`Generated ${elements.length} elements for ${totalBlocks} topics`);

  return {
    type: "excalidraw",
    version: 2,
    source: "https://excalidraw.com",
    elements,
    appState: { gridSize: null, viewBackgroundColor: "#ffffff" },
    files: {}
  };
}

// ===== MAIN =====
const result = generate();
const outPath = path.join(__dirname, 'master-formula-cheatsheet.excalidraw');
fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
console.log(`✓ Written → ${outPath}`);
