const HTML = __HTML__;

const LAW = `KERANGKA HUKUM POSITIF INDONESIA (per 18 November 2026). Jadikan acuan utama; jangan memakai ketentuan yang sudah dicabut.
1) PIDANA: UU 1/2023 (KUHP Nasional), UU 20/2025 (KUHAP baru, mencabut UU 8/1981) dan UU 1/2026 (Penyesuaian Pidana) berlaku sejak 2 Januari 2026. Perbuatan pada/setelah 2 Jan 2026 memakai KUHP baru dan KUHAP baru. Perbuatan sebelum tanggal itu: telaah asas legalitas dan ketentuan peralihan (mis. ketentuan yang paling menguntungkan terdakwa), sebut padanan KUHP lama (UU 1/1946/WvS) bila perlu. UU 1/2026 menyesuaikan pidana di luar KUHP (ITE, Narkotika, Tipikor, dll), mengganti pidana kurungan dengan denda berkategori; pencemaran nama baik/fitnah kini merujuk KUHP baru (mis. Pasal 433, 434; ujaran kebencian/berita bohong: Pasal 243, 263, 441). Pertimbangkan pidana alternatif (pengawasan, kerja sosial), restorative justice, delik aduan, dan hukum yang hidup dalam masyarakat (PP 55/2025) bila relevan. Sebut nomor pasal KUHP baru hanya bila yakin; bila tidak, tulis nama delik dan tandai 'verifikasi nomor pasal'.
2) PERDATA: KUH Perdata masih berlaku (Pasal 1320, 1338, 1243, 1365, dst), HIR/RBg, UU Perlindungan Konsumen 8/1999, UUPA 5/1960 dan peraturan pertanahan, UU Perkawinan 1/1974 dan KHI, UU PT 40/2007, UU Kepailitan dan PKPU 37/2004, Perma mediasi.
3) KETENAGAKERJAAN: UU Pelindungan Ketenagakerjaan yang disahkan DPR Oktober 2026 (dilaporkan sebagai UU No. 27 Tahun 2026) menata ulang klaster ketenagakerjaan UU 13/2003 dan UU Cipta Kerja (UU 6/2023), memuat antara lain pembatasan PKWT, pengetatan outsourcing, perlindungan pekerja platform. Untuk peristiwa sebelum berlakunya, periksa rezim lama dan ketentuan peralihan; minta verifikasi tanggal berlaku dan aturan turunan. Perselisihan: UU PPHI 2/2004.
4) DIGITAL/DATA: UU ITE (UU 11/2008 jo. UU 19/2016 jo. UU 1/2024) untuk bagian yang tidak dipindah ke KUHP, UU PDP 27/2022, alat bukti elektronik.
5) LAIN: UU Peradilan TUN dan UU 30/2014 (Administrasi Pemerintahan); UU Tipikor 31/1999 jo. 20/2001; UU TPKS 12/2022; UU PKDRT 23/2004; UU Perlindungan Anak dan UU SPPA 11/2012; UU Narkotika 35/2009; UU Lalu Lintas 22/2009.`;

const SCHEMA = `{"bidang_utama":"Pidana|Perdata|Tata Usaha Negara|Ketenagakerjaan|Keluarga|Bisnis/Korporasi|Lainnya","bidang_lain":["..."],"ringkasan":"3-5 kalimat fakta hukum","kualifikasi":"mis. dugaan penipuan / wanprestasi","rezim_berlaku":"rezim hukum materiil dan acara yang berlaku berdasarkan tanggal peristiwa, beserta alasannya","keyakinan":0,"risiko":[{"rezim":"Pidana","skor":0,"alasan":"..."},{"rezim":"Perdata","skor":0,"alasan":"..."},{"rezim":"Administratif","skor":0,"alasan":"..."}],"dasar_hukum":[{"nama":"pasal/UU lengkap","relevansi":0,"uraian":"...","sebab":[{"unsur":"unsur pelanggaran","ketentuan":"ketentuan/syarat unsur menurut pasal","sebab":"fakta atau perbuatan yang menjadi sebab terpenuhinya unsur","status":"ya|sebagian|tidak|belum_jelas","catatan":"..."}],"akibat":{"akibat_pelanggaran":"akibat nyata/potensial","kerugian":"...","sanksi":"ancaman pidana/ganti rugi/sanksi administratif","kausalitas":"kekuatan hubungan sebab-akibat, penguat dan pelemah"}}],"pihak":[{"nama":"...","peran":"...","potensi":"..."}],"bukti":[{"alat_bukti":"...","status":"ada|kurang|perlu_dicari","catatan":"..."}],"sanksi":{"pidana":[{"pasal":"nomor pasal + nama UU, atau nama delik bila nomor tidak pasti","delik":"nama delik","ancaman":"jenis dan batas pidana pokok (penjara maksimal ... / denda kategori ... = Rp ...)","pidana_tambahan":"mis. pencabutan hak, ganti rugi, perampasan; kosongkan bila tidak ada","alternatif":"pidana pengawasan/kerja sosial/restorative justice bila relevan","delik_aduan":"ya|tidak|belum_jelas","rezim_waktu":"KUHP baru atau lama, dan alasan berdasar tanggal peristiwa","kepastian":"tinggi|sedang|rendah","verifikasi_pasal":true,"catatan":"..."}],"perdata":[{"dasar_gugatan":"wanprestasi|PMH|lainnya","dasar_pasal":"pasal KUH Perdata/UU terkait","petitum":["tuntutan yang dapat diajukan"],"ganti_rugi":{"materiil":"komponen kerugian nyata","immateriil":"bila ada dasar","bunga":"bunga moneter/denda sesuai perjanjian atau undang-undang","estimasi_rp":0,"dasar_hitung":"cara menghitung dari angka yang tertulis pada fakta; estimasi_rp 0 bila angka tidak ada"},"upaya_lain":"sita jaminan, pembatalan perjanjian, somasi, mediasi, dll","forum":"pengadilan/lembaga yang berwenang","kepastian":"tinggi|sedang|rendah","catatan":"..."}],"administratif":[{"sanksi":"...","dasar":"...","kepastian":"tinggi|sedang|rendah"}],"ringkasan_eksposur":"2-3 kalimat: perbandingan eksposur pidana vs perdata bagi posisi pengguna"},"rantai_kausalitas":"1 paragraf: dari sebab ke akibat","informasi_kurang":["..."],"langkah":[{"tahap":"...","aksi":"..."}],"daluwarsa":"catatan batas waktu/daluwarsa","kesimpulan":"paragraf analisis mendalam, seimbang, sebut argumen penguat dan pelemah"}`;

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { "content-type": "application/json; charset=utf-8" } });

async function analyze(request) {
  const env = (typeof process !== "undefined" && process.env) || {};
  const geminiKeys = [env.GEMINI_API_KEY, env.GEMINI_API_KEY_2, env.GEMINI_API_KEY_3, env.GEMINI_API_KEY_4, env.GEMINI_API_KEY_5]
    .filter(Boolean).join(",").split(/[\s,;]+/).filter((k, i, a) => k && a.indexOf(k) === i);
  const useGemini = geminiKeys.length > 0;
  const useOllama = !useGemini && !!(env.OLLAMA_BASE_URL || env.OLLAMA_API_KEY || env.OLLAMA_MODEL);
  if (!useGemini && !useOllama && !env.ANTHROPIC_API_KEY)
    return json({ error: "Belum ada penyedia AI. Atur GEMINI_API_KEY (boleh beberapa, pisahkan koma, atau GEMINI_API_KEY_2 dst; atau OLLAMA_API_KEY / ANTHROPIC_API_KEY) di Environment Variables." }, 500);
  if (env.ACCESS_CODE && request.headers.get("x-access-code") !== env.ACCESS_CODE)
    return json({ error: "Kode akses salah." }, 401);

  let body;
  try { body = await request.json(); } catch (e) { return json({ error: "Permintaan tidak valid." }, 400); }
  const f = body.fields || {};
  const kasus = ["what", "who", "when", "where", "why", "how"]
    .map((k) => k.toUpperCase() + ": " + String(f[k] || "").slice(0, 4000))
    .join("\n") + "\nPOSISI PENGGUNA: " + String(body.pos || "").slice(0, 100) + "\nBUKTI: " + String(body.ev || "").slice(0, 500);

  const prompt = `Anda analis hukum Indonesia senior. Analisis peristiwa berikut secara mendalam dan objektif berdasarkan hukum positif Indonesia terbaru.
${LAW}
Untuk SETIAP pasal kerjakan berurutan: (1) SEBAB lebih dulu: jawab ketentuan setiap unsur pelanggaran dan fakta yang menjadi sebab terpenuhinya unsur itu; (2) BARU SETELAH ITU AKIBAT pelanggaran (akibat, kerugian, sanksi, kausalitas). Pada JSON isi "sebab" sebelum "akibat". Petakan unsur setiap pasal ke fakta, nilai kelengkapan 5W+1H, bedakan fakta dan asumsi, jangan mengarang nomor pasal; bila ragu tulis tingkat kepastian rendah. Wajib isi objek "sanksi" secara rinci, bukan hanya narasi: (a) sanksi.pidana per delik yang relevan dengan ancaman pokok (jenis, batas maksimal, denda berkategori bila ada), pidana tambahan, alternatif, status delik aduan, dan rezim KUHP yang berlaku menurut tanggal peristiwa; (b) sanksi.perdata per gugatan yang mungkin: dasar gugatan, dasar pasal, petitum, ganti rugi materiil/immateriil/bunga, estimasi_rp hanya dari angka yang tertulis pada fakta (jangan mengarang angka; isi 0 bila tidak ada), upaya lain, dan forum; (c) sanksi.administratif bila ada. Beri "kepastian" tinggi hanya bila nomor pasal dan ancamannya Anda yakini; bila ragu, kepastian rendah dan verifikasi_pasal true. Jangan menyebut ancaman pidana yang tidak Anda yakini; tulis "perlu verifikasi" pada ancaman itu. Maksimal 4 sanksi.pidana, 3 sanksi.perdata. Skor 0-100. Kedalaman ada pada ketepatan pemetaan unsur dan kesimpulan, bukan pada panjang tiap isian: batasi maksimal 5 dasar_hukum (urut paling relevan), tiap dasar_hukum maksimal 5 unsur sebab dan satu objek akibat, setiap catatan/uraian/alasan 1-2 kalimat padat, bukti dan langkah masing-masing maksimal 8 butir, kesimpulan 3-4 paragraf. Jawab HANYA JSON valid sesuai skema, bahasa Indonesia, tanpa markdown.
SKEMA: ${SCHEMA}

PERISTIWA:
${kasus}`;

  const meta = { kerangka: "2026-11-18", at: new Date().toISOString() };
  try {
    let text = "";
    if (useGemini) {
      const primary = (env.GEMINI_MODEL || "gemini-3.5-flash").replace(/^models\//, "");
      const fallback = (env.GEMINI_FALLBACK_MODEL || "").replace(/^models\//, "");
      const MAXT = Math.min(65000, Math.max(8192, parseInt(env.GEMINI_MAX_TOKENS, 10) || 32768));
      let opt = { think: (env.GEMINI_THINKING || "low").toLowerCase(), compact: false };
      const COMPACT = "\n\nPENTING: jawaban sebelumnya terpotong. Ringkas isian: maksimal 4 dasar_hukum, tiap maksimal 3 unsur sebab dan satu objek akibat, sanksi.pidana maksimal 3 dan sanksi.perdata maksimal 2 (objek sanksi TIDAK boleh dihilangkan), catatan/uraian/alasan satu kalimat pendek, bukti dan langkah maksimal 6 butir. Kesimpulan tetap mendalam tetapi maksimal 3 paragraf. Pastikan JSON lengkap dan valid.";
      const callGemini = (model, key) =>
        fetch("https://generativelanguage.googleapis.com/v1beta/models/" + encodeURIComponent(model) + ":generateContent", {
          method: "POST",
          headers: { "content-type": "application/json", "x-goog-api-key": key },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: prompt + (opt.compact ? COMPACT : "") }] }],
            generationConfig: Object.assign({ temperature: 0.2, maxOutputTokens: MAXT, responseMimeType: "application/json" }, opt.think && opt.think !== "off" ? { thinkingConfig: { thinkingLevel: opt.think } } : {}),
          }),
        });
      // Beberapa API key: mulai dari kunci acak agar beban merata; bila kena batas (429), pindah ke kunci berikutnya.
      let start = Math.floor(Math.random() * geminiKeys.length);
      const callAny = async (model) => {
        let res;
        for (let n = 0; n < geminiKeys.length; n++) {
          const idx = (start + n) % geminiKeys.length;
          res = await callGemini(model, geminiKeys[idx]);
          if (res.status !== 429) { start = idx; return res; }
        }
        return res;
      };
      const sleep = (ms) => new Promise((ok) => setTimeout(ok, ms));
      let model = primary;
      let r = await callAny(model);
      // Server Google sibuk (503) atau kena batas (429): coba ulang, lalu model cadangan.
      for (let i = 0; i < 2 && (r.status === 503 || r.status === 429); i++) {
        await sleep(2500 * (i + 1));
        r = await callAny(model);
      }
      if ((r.status === 503 || r.status === 429) && fallback && fallback !== primary) {
        model = fallback;
        r = await callAny(model);
        if (r.status === 503 || r.status === 429) { await sleep(2500); r = await callAny(model); }
      }
      let d = await r.json().catch(() => ({}));
      // Bila model tidak mengenal pengaturan thinking, ulangi tanpa pengaturan itu.
      if (r.status === 400 && opt.think && /think/i.test((d.error && d.error.message) || "")) {
        opt.think = "";
        r = await callAny(model);
        d = await r.json().catch(() => ({}));
      }
      if (!r.ok) {
        const m = (d && d.error && d.error.message) || "";
        if (r.status === 429) return json({ error: "Gemini: kuota gratis habis atau terlalu sering dipakai" + (geminiKeys.length > 1 ? " pada semua " + geminiKeys.length + " API key" : "") + ". Tunggu beberapa menit lalu coba lagi. " + m.slice(0, 160) }, 502);
        if (r.status === 503) return json({ error: "Gemini sedang sibuk (model " + model + "). Sudah dicoba ulang otomatis. Coba lagi beberapa menit lagi, atau isi GEMINI_FALLBACK_MODEL dengan model lain." }, 502);
        if (r.status === 404) return json({ error: "Gemini: model '" + model + "' tidak ditemukan. Ubah GEMINI_MODEL. " + m.slice(0, 160) }, 502);
        return json({ error: "Gemini (" + r.status + "): " + (m || "gagal memanggil model.").slice(0, 300) }, 502);
      }
      let cand = (d.candidates || [])[0] || {};
      // Terpotong karena batas token: ulangi sekali dengan isian lebih ringkas dan thinking rendah.
      if (cand.finishReason === "MAX_TOKENS") {
        opt = { think: opt.think ? "low" : "", compact: true };
        r = await callAny(model);
        d = await r.json().catch(() => ({}));
        if (!r.ok) return json({ error: "Gemini (" + r.status + "): " + (((d && d.error && d.error.message) || "gagal memanggil model.")).slice(0, 300) }, 502);
        cand = (d.candidates || [])[0] || {};
      }
      meta.provider = "Gemini"; meta.model = model;
      text = ((cand.content && cand.content.parts) || []).filter((p) => p.text && !p.thought).map((p) => p.text).join("");
      if (!text) {
        const why = (d.promptFeedback && d.promptFeedback.blockReason) || cand.finishReason || "";
        return json({ error: "Gemini mengembalikan jawaban kosong" + (why ? " (" + why + ")" : "") + ". Coba lagi." }, 502);
      }
      if (cand.finishReason === "MAX_TOKENS") return json({ error: "Jawaban Gemini masih terpotong meski sudah diringkas otomatis. Coba lagi, atau tambahkan variabel GEMINI_MAX_TOKENS bernilai 50000 di Environment Variables." }, 502);
    } else if (useOllama) {
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
          options: { num_ctx: 16384, num_predict: 9000, temperature: 0.2 },
        }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) return json({ error: "Ollama: " + ((d && d.error) || r.status) }, 502);
      meta.provider = "Ollama"; meta.model = env.OLLAMA_MODEL || "gpt-oss:120b";
      text = (d.message && d.message.content) || "";
    } else {
      const r = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "content-type": "application/json", "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
        body: JSON.stringify({
          model: env.ANTHROPIC_MODEL || "claude-sonnet-5-5",
          max_tokens: 9000,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const d = await r.json();
      if (!r.ok) return json({ error: (d && d.error && d.error.message) || "Gagal memanggil model." }, 502);
      meta.provider = "Anthropic"; meta.model = env.ANTHROPIC_MODEL || "claude-sonnet-5-5";
      text = (d.content || []).filter((x) => x.type === "text").map((x) => x.text).join("");
    }
    if (!text) return json({ error: "Model mengembalikan jawaban kosong." }, 502);
    return json({ text, meta });
  } catch (e) {
    return json({ error: "Gagal terhubung ke layanan AI." }, 502);
  }
}

async function handler(request) {
  const url = new URL(request.url);
  if (url.pathname === "/api/analyze" && request.method === "POST") return analyze(request);
  return new Response(HTML, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-cache" } });
}

if (typeof addEventListener === "function") {
  // WinterJS / Service Worker
  addEventListener("fetch", (event) => event.respondWith(handler(event.request)));
} else {
  // Node.js (preset node-base di Wasmer)
  (async () => {
    const http = await import("node:http");
    const port = Number(process.env.PORT) || 8080;
    http
      .createServer(async (req, res) => {
        try {
          const chunks = [];
          for await (const c of req) chunks.push(c);
          const hasBody = req.method !== "GET" && req.method !== "HEAD";
          const request = new Request("http://" + (req.headers.host || "localhost") + req.url, {
            method: req.method,
            headers: req.headers,
            body: hasBody ? Buffer.concat(chunks) : undefined,
          });
          const response = await handler(request);
          const headers = {};
          response.headers.forEach((v, k) => (headers[k] = v));
          res.writeHead(response.status, headers);
          res.end(Buffer.from(await response.arrayBuffer()));
        } catch (e) {
          res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
          res.end("Server error");
        }
      })
      .listen(port, "0.0.0.0", () => console.log("LexaID berjalan di port " + port));
  })();
}
