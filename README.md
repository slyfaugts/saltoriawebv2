# Saltoria Community — Unified Web Dashboard & Creator Tools

Website resmi dan pusat ekosistem **Saltoria Community & Studio** yang dibangun dengan arsitektur **Unified Design System** (Dark Matte `#070A11`, Cyan Neon `#00F0FF`, Soft Purple `#8B5CF6`, Glassmorphism Topbar, dan Fixed Sidebar) sehingga halaman utama dan seluruh *tools* di dalamnya memiliki tema dan *layout* yang seragam.

## Struktur Proyek
- `index.html` — Overview Dashboard utama
- `catalog.html` — Katalog Roblox System Kits, Maps, & Store
- `tools/lyric-converter.html` — Konverter LRC ke tabel Luau (`--!strict`)
- `tools/command-generator.html` — Generator skrip Roblox Studio Command Bar
- `tools/webhook-tester.html` — Discord Webhook & Embed Previewer
- `assets/css/design-system.css` — Design token dan komponen UI global
- `assets/js/app.js` — Mesin layout terpusat (Sidebar, Topbar, Toast)
- `vercel.json` — Konfigurasi routing bersih untuk Vercel

## Cara Push ke GitHub & Deploy di Vercel
1. Ekstrak seluruh isi folder ini ke dalam repositori lokal Anda.
2. Jalankan perintah berikut di terminal:
   ```bash
   git add .
   git commit -m "feat: unified UI/UX dashboard and creator tools"
   git push origin main
   ```
3. Buka dashboard **Vercel**, klik **Add New Project**, pilih repositori GitHub Anda, lalu klik **Deploy** (Framework Preset: `Other` / Static).
