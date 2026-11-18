// Menyisipkan web/index.html ke src/index.js (WinterJS hanya menjalankan satu berkas JS).
import { readFileSync, writeFileSync } from "node:fs";
const html = readFileSync(new URL("./web/index.html", import.meta.url), "utf8");
const src = readFileSync(new URL("./src/server.src.js", import.meta.url), "utf8");
writeFileSync(new URL("./src/index.js", import.meta.url), src.replace("__HTML__", () => JSON.stringify(html)));
console.log("src/index.js dibuat (" + html.length + " byte HTML)");
