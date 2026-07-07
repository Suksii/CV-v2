#!/usr/bin/env node
/**
 * Export the CV page as a PDF (same output as "Print / Save as PDF")
 * and copy it into the portfolio site.
 *
 * Usage:
 *   npm run export-pdf                 # writes ../portfolio-v2/public/CV.pdf
 *   npm run export-pdf -- --out my.pdf # custom output path
 *
 * Spawns its own `next dev` server on port 4599 and a headless Chrome,
 * so nothing needs to be running beforehand.
 */
import { spawn, execSync } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = 4599;
const CDP_PORT = 9377;
const URL = `http://localhost:${PORT}`;

const outArgIdx = process.argv.indexOf("--out");
const OUT =
  outArgIdx !== -1
    ? resolve(process.cwd(), process.argv[outArgIdx + 1])
    : resolve(root, "../portfolio-v2/public/CV.pdf");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function findChrome() {
  if (process.env.CHROME_BIN) return process.env.CHROME_BIN;
  for (const bin of [
    "google-chrome-stable",
    "google-chrome",
    "chromium",
    "chromium-browser",
  ]) {
    try {
      execSync(`command -v ${bin}`, { stdio: "ignore" });
      return bin;
    } catch {}
  }
  throw new Error("No Chrome/Chromium found. Set CHROME_BIN.");
}

const children = [];
function cleanup() {
  for (const c of children) {
    try {
      c.kill();
    } catch {}
  }
}
process.on("exit", cleanup);
process.on("SIGINT", () => process.exit(130));

async function waitFor(url, tries = 120, delay = 500) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url);
      if (r.ok) return r;
    } catch {}
    await sleep(delay);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function cdp(ws) {
  let id = 0;
  const pending = new Map();
  ws.addEventListener("message", (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) {
      pending.get(m.id)(m);
      pending.delete(m.id);
    }
  });
  return (method, params = {}) =>
    new Promise((res, rej) => {
      const myId = ++id;
      pending.set(myId, (m) => (m.error ? rej(new Error(m.error.message)) : res(m.result)));
      ws.send(JSON.stringify({ id: myId, method, params }));
    });
}

async function main() {
  // 1. dev server
  console.log(`→ starting next dev on :${PORT} …`);
  const server = spawn("npx", ["next", "dev", "-p", String(PORT)], {
    cwd: root,
    stdio: "ignore",
  });
  children.push(server);
  await waitFor(URL);

  // 2. headless chrome
  const chromeBin = findChrome();
  console.log(`→ launching ${chromeBin} …`);
  const chrome = spawn(
    chromeBin,
    [
      "--headless",
      "--disable-gpu",
      "--hide-scrollbars",
      `--remote-debugging-port=${CDP_PORT}`,
      `--user-data-dir=${os.tmpdir()}/cv-export-${Date.now()}`,
      "about:blank",
    ],
    { stdio: "ignore" }
  );
  children.push(chrome);

  let wsUrl;
  for (let i = 0; i < 40 && !wsUrl; i++) {
    try {
      const list = await (await fetch(`http://localhost:${CDP_PORT}/json/list`)).json();
      wsUrl = list.find((t) => t.type === "page")?.webSocketDebuggerUrl;
    } catch {}
    if (!wsUrl) await sleep(250);
  }
  if (!wsUrl) throw new Error("Chrome CDP endpoint not ready");

  const ws = new WebSocket(wsUrl);
  await new Promise((r, j) => ((ws.onopen = r), (ws.onerror = j)));
  const send = cdp(ws);

  // 3. render page, wait for fonts, print
  console.log(`→ rendering ${URL} …`);
  await send("Page.enable");
  await send("Runtime.enable");
  await send("Page.navigate", { url: URL });
  await send("Runtime.evaluate", {
    expression: "document.fonts.ready.then(() => true)",
    awaitPromise: true,
    returnByValue: true,
  });
  await sleep(800); // settle (images, layout)

  const { data } = await send("Page.printToPDF", {
    printBackground: true,
    preferCSSPageSize: true,
  });

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, Buffer.from(data, "base64"));
  console.log(`✓ wrote ${OUT} (${(Buffer.byteLength(data, "base64") / 1024).toFixed(0)} KB)`);

  ws.close();
  process.exit(0);
}

main().catch((e) => {
  console.error("✗", e.message);
  process.exit(1);
});
