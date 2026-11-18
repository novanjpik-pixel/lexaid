# LexaID – Dashboard Analisis Hukum 5W+1H

Frontend (`web/index.html`) + backend kecil WinterJS (`src/server.src.js`) yang memanggil Claude API.
Kunci API **tidak pernah** ada di browser.

## Struktur
- `web/index.html` – tampilan (tema gelap/terang, responsif mobile)
- `src/server.src.js` – server: `/` (halaman) dan `POST /api/analyze`
- `build.mjs` – menggabungkan keduanya menjadi `src/index.js` (yang dijalankan Wasmer)
- `wasmer.toml`, `app.yaml` – konfigurasi Wasmer Edge

## Ubah tampilan/prompt, lalu build
    node build.mjs
Commit `src/index.js` hasil build ke GitHub.

## Deploy
1. Ganti `NAMESPACE-ANDA` (username Wasmer Anda) di `wasmer.toml` dan `app.yaml`. Nama paket di kedua berkas harus sama.
2. Push ke GitHub, lalu di wasmer.io: **Deploy from GitHub** → pilih repo ini.
3. Tambahkan secret/environment variable di dashboard app Wasmer:
   - Pilih satu penyedia AI:
     - Ollama Cloud: `OLLAMA_API_KEY` dan `OLLAMA_MODEL` (mis. `gpt-oss:120b`)
     - Ollama sendiri (lewat tunnel HTTPS): `OLLAMA_BASE_URL` dan `OLLAMA_MODEL`
     - Claude: `ANTHROPIC_API_KEY`
   - `ACCESS_CODE` (disarankan, agar orang lain tidak menghabiskan kuota API Anda)
   - `ANTHROPIC_MODEL` (opsional, default `claude-sonnet-5-5`)
4. Redeploy. Selesai.

Via CLI: `wasmer deploy` lalu `wasmer app secrets create`.
Uji lokal: `wasmer run . --net` → http://localhost:8080
