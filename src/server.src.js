const HTML = __HTML__;

const LAW = `KERANGKA HUKUM POSITIF INDONESIA (per 18 November 2026). Jadikan acuan utama; jangan memakai ketentuan yang sudah dicabut.
1) PIDANA: UU 1/2023 (KUHP Nasional), UU 20/2025 (KUHAP baru, mencabut UU 8/1981) dan UU 1/2026 (Penyesuaian Pidana) berlaku sejak 2 Januari 2026. Perbuatan pada/setelah 2 Jan 2026 memakai KUHP baru dan KUHAP baru. Perbuatan sebelum tanggal itu: telaah asas legalitas dan ketentuan peralihan (mis. ketentuan yang paling menguntungkan terdakwa), sebut padanan KUHP lama (UU 1/1946/WvS) bila perlu. UU 1/2026 menyesuaikan pidana di luar KUHP (ITE, Narkotika, Tipikor, dll), mengganti pidana kurungan dengan denda berkategori; pencemaran nama baik/fitnah kini merujuk KUHP baru (mis. Pasal 433, 434; ujaran kebencian/berita bohong: Pasal 243, 263, 441). Pertimbangkan pidana alternatif (pengawasan, kerja sosial), restorative justice, delik aduan, dan hukum yang hidup dalam masyarakat (PP 55/2025) bila relevan. Sebut nomor pasal KUHP baru hanya bila yakin; bila tidak, tulis nama delik dan tandai 'verifikasi nomor pasal'.
2) PERDATA: KUH Perdata masih berlaku (Pasal 1320, 1338, 1243, 1365, dst), HIR/RBg, UU Perlindungan Konsumen 8/1999, UUPA 5/1960 dan peraturan pertanahan, UU Perkawinan 1/1974 dan KHI, UU PT 40/2007, UU Kepailitan dan PKPU 37/2004, Perma mediasi.
3) KETENAGAKERJAAN: UU Pelindungan Ketenagakerjaan yang disahkan DPR Oktober 2026 (dilaporkan sebagai UU No. 27 Tahun 2026) menata ulang klaster ketenagakerjaan UU 13/2003 dan UU Cipta Kerja (UU 6/2023), memuat antara lain pembatasan PKWT, pengetatan outsourcing, perlindungan pekerja platform. Untuk peristiwa sebelum berlakunya, periksa rezim lama dan ketentuan peralihan; minta verifikasi tanggal berlaku dan aturan turunan. Perselisihan: UU PPHI 2/2004.
4) DIGITAL/DATA: UU ITE (UU 11/2008 jo. UU 19/2016 jo. UU 1/2024) untuk bagian yang tidak dipindah ke KUHP, UU PDP 27/2022, alat bukti elektronik.
5) LAIN: UU Peradilan TUN dan UU 30/2014 (Administrasi Pemerintahan); UU Tipikor 31/1999 jo. 20/2001; UU TPKS 12/2022; UU PKDRT 23/2004; UU Perlindungan Anak dan UU SPPA 11/2012; UU Narkotika 35/2009; UU Lalu Lintas 22/2009.`;

const SCHEMA = `{"bidang_utama":"Pidana|Perdata|Tata Usaha Negara|Ketenagakerjaan|Keluarga|Bisnis/Korporasi|Lainnya","bidang_lain":["..."],"ringkasan":"3-5 kalimat fakta hukum","kualifikasi":"mis. dugaan penipuan / wanprestasi","rezim_berlaku":"rezim hukum materiil dan acara yang berlaku berdasarkan tanggal peristiwa, beserta alasannya","keyakinan":0,"risiko":[{"rezim":"Pidana","skor":0,"alasan":"..."},{"rezim":"Perdata","skor":0,"alasan":"..."},{"rezim":"Administratif","skor":0,"alasan":"..."}],"dasar_hukum":[{"nama":"pasal/UU lengkap","relevansi":0,"uraian":"...","unsur":[{"unsur":"...","status":"ya|sebagian|tidak|belum_jelas","catatan":"..."}]}],"pihak":[{"nama":"...","peran":"...","potensi":"..."}],"bukti":[{"alat_bukti":"...","status":"ada|kurang|perlu_dicari","catatan":"..."}],"informasi_kurang":["..."],"langkah":[{"tahap":"...","aksi":"..."}],"daluwarsa":"catatan batas waktu/daluwarsa","kesimpulan":"paragraf analisis mendalam, seimbang, sebut argumen penguat dan pelemah"}`;

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json; charset=utf-8" } });

async function analyze(request) {
  const env = (typeof process !== "undefined" && process.env) || {};
  const useOllama = !!(env.OLLAMA_BASE_URL || env.OLLAMA_API_KEY || env.OLLAMA_MODEL);
  if (!useOllama && !env.ANTHROPIC_API_KEY)
    return json({ error: "Belum ada penyedia AI. Atur OLLAMA_API_KEY (atau ANTHROPIC_API_KEY) di secret server." }, 500);
  if (env.ACCESS_CODE && request.headers.get("x-access-code") !== env.ACCESS_CODE)
    return json({ error: "Kode akses salah." }, 401);

  let body;
  try { body = await request.json(); } catch (e) { return json({ error: "Permintaan tidak valid." }, 400); }
  const f = body.fields || {};
  const kasus = ["what", "who", "when", "where", "why", "how"]
    .map((k) => k.toUpperCase() + ": " + String(f[k] || "").slice(0, 2500))
    .join("\n") + "\nPOSISI PENGGUNA: " + String(body.pos || "").slice(0, 100) + "\nBUKTI: " + String(body.ev || "").slice(0, 500);

  const prompt = `Anda analis hukum Indonesia senior. Analisis peristiwa berikut secara mendalam dan objektif berdasarkan hukum positif Indonesia terbaru.
${LAW}
Petakan unsur setiap pasal ke fakta, nilai kelengkapan 5W+1H, bedakan fakta dan asumsi, jangan mengarang nomor pasal; bila ragu tulis tingkat kepastian rendah. Skor 0-100. Jawab HANYA JSON valid sesuai skema, bahasa Indonesia, tanpa markdown.
SKEMA: ${SCHEMA}

PERISTIWA:
${kasus}`;

  try {
    let text = "";
    if (useOllama) {
      const base = (env.OLLAMA_BASE_URL || "https://ollama.com").replace(/\/+$/, "");
      const headers = { "content-type": "application/json" };
      if (env.OLLAMA_API_KEY) headers.authorization = "Bearer " + env.OLLAMA_API_KEY;
      const r = await fetch(base + "/api/chat", {
        method: "POST",
        headers,
        body: JSON.stringify({
          model: env.OLLAMA_MODEL || "gpt-oss:120b",
          messages: [{ role: "user", content: prompt }],
          stream: false,
          format: "json",
          options: { num_ctx: 8192, num_predict: 4096, temperature: 0.2 },
        }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) return json({ error: "Ollama: " + ((d && d.error) || r.status) }, 502);
      text = (d.message && d.message.content) || "";
    } else {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "content-type": "application/json", "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
        body: JSON.stringify({
          model: env.ANTHROPIC_MODEL || "claude-sonnet-5-5",
          max_tokens: 4096,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const d = await r.json();
      if (!r.ok) return json({ error: (d && d.error && d.error.message) || "Gagal memanggil model." }, 502);
      text = (d.content || []).filter((x) => x.type === "text").map((x) => x.text).join("");
    }
    if (!text) return json({ error: "Model mengembalikan jawaban kosong." }, 502);
    return json({ text });
  } catch (e) {
    return json({ error: "Gagal terhubung ke layanan AI." }, 502);
  }
}

async function handler(request) {
  const url = new URL(request.url);
  if (url.pathname === "/api/analyze" && request.method === "POST") return analyze(request);
  return new Response(HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-cache" } });
}

addEventListener("fetch", (event) => event.respondWith(handler(event.request)));
