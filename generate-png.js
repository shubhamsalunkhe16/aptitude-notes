/**
 * Excalidraw → PNG Generator
 * Usage: node generate-png.js <topic-folder>          # single topic
 *        node generate-png.js --all                    # all topics + master sheet
 *
 * Requires: npm install playwright @excalidraw/utils
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const http = require('http');

const ROOT = __dirname;
const OUT_DIR = path.join(ROOT, '_png-revision');

function findExcalidrawFile(folder) {
  const fullPath = path.join(ROOT, folder);
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.excalidraw'));
  if (files.length === 0) throw new Error(`No .excalidraw file found in ${fullPath}`);
  return path.join(fullPath, files[0]);
}

function getOutputPath(folder) {
  if (folder === '_global') {
    return path.join(OUT_DIR, '00-master-formula-cheatsheet.png');
  }
  const parts = folder.split('/');
  return path.join(OUT_DIR, parts[0], `${parts[1]}.png`);
}

function getAllTopicFolders() {
  const folders = [];
  const groups = fs.readdirSync(ROOT).filter(d =>
    d.startsWith('Group-') && fs.statSync(path.join(ROOT, d)).isDirectory()
  ).sort();
  for (const group of groups) {
    const topics = fs.readdirSync(path.join(ROOT, group)).filter(d =>
      fs.statSync(path.join(ROOT, group, d)).isDirectory()
    ).sort();
    for (const topic of topics) {
      const hasExcalidraw = fs.readdirSync(path.join(ROOT, group, topic))
        .some(f => f.endsWith('.excalidraw'));
      if (hasExcalidraw) folders.push(`${group}/${topic}`);
    }
  }
  folders.push('_global');
  return folders;
}

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath;
      if (req.url === '/') {
        filePath = path.join(ROOT, '_converter.html');
      } else {
        filePath = path.join(ROOT, req.url);
      }
      if (!fs.existsSync(filePath)) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const ext = path.extname(filePath);
      const types = { '.html': 'text/html', '.js': 'application/javascript', '.mjs': 'application/javascript', '.css': 'text/css', '.woff2': 'font/woff2' };
      res.writeHead(200, {
        'Content-Type': types[ext] || 'application/octet-stream',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(fs.readFileSync(filePath));
    });
    server.listen(0, '127.0.0.1', () => {
      resolve(server);
    });
  });
}

const CONVERTER_HTML = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body>
<script type="module">
import { exportToBlob } from "./node_modules/@excalidraw/utils/dist/prod/index.js";

window._exportToBlob = exportToBlob;
window._converterReady = true;
</script>
</body>
</html>`;

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.error("Usage: node generate-png.js <topic-folder>");
    console.error("       node generate-png.js --all");
    process.exit(1);
  }

  const folders = arg === '--all' ? getAllTopicFolders() : [arg];

  // Write converter HTML
  const htmlPath = path.join(ROOT, '_converter.html');
  fs.writeFileSync(htmlPath, CONVERTER_HTML);

  // Start local server
  const server = startServer();
  const srv = await server;
  const port = srv.address().port;
  console.log(`Local server on port ${port}`);

  // Launch browser
  console.log(`Launching browser...`);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  page.on('console', msg => {
    if (msg.type() === 'error') console.log('  [browser]', msg.text());
  });

  await page.goto(`http://127.0.0.1:${port}/`);
  await page.waitForFunction(() => window._converterReady === true, { timeout: 30000 });
  console.log(`Excalidraw utils loaded.\n`);

  const errors = [];
  for (const folder of folders) {
    try {
      const excalidrawPath = findExcalidrawFile(folder);
      const data = JSON.parse(fs.readFileSync(excalidrawPath, 'utf-8'));
      const outputPath = getOutputPath(folder);

      process.stdout.write(`  ${folder} ... `);

      const base64 = await page.evaluate(async (jsonData) => {
        const blob = await window._exportToBlob({
          elements: jsonData.elements,
          appState: {
            ...(jsonData.appState || {}),
            exportBackground: true,
            viewBackgroundColor: "#ffffff",
            exportWithDarkMode: false,
            exportPadding: 20,
          },
          files: jsonData.files || null,
          mimeType: "image/png",
          getDimensions: (w, h) => ({ width: w * 2, height: h * 2, scale: 2 }),
        });
        const reader = new FileReader();
        return new Promise((resolve, reject) => {
          reader.onload = () => resolve(reader.result.split(',')[1]);
          reader.onerror = () => reject(new Error('FileReader failed'));
          reader.readAsDataURL(blob);
        });
      }, data);

      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, Buffer.from(base64, 'base64'));
      const size = (fs.statSync(outputPath).size / 1024).toFixed(0);
      console.log(`${size} KB → ${path.relative(ROOT, outputPath)}`);
    } catch (e) {
      console.log(`FAILED: ${e.message}`);
      errors.push({ folder, error: e.message });
    }
  }

  await browser.close();
  srv.close();

  // Clean up temp HTML
  try { fs.unlinkSync(htmlPath); } catch {}

  if (errors.length > 0) {
    console.log(`\n${errors.length} failed:`);
    errors.forEach(e => console.log(`  ${e.folder}: ${e.error}`));
    process.exit(1);
  } else {
    console.log(`\nDone! ${folders.length} PNG(s) generated in _png-revision/`);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
