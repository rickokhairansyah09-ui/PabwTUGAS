# PABW — Hendricko Muhammad Zuhair Khairansyah — 25523104

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 3 — Halaman profil saya

Topik halaman saya: Jadwal dan target olahraga saya.

- Judul halaman: Jadwal Olahraga
- Deskripsi: Halaman yang memuat jadwal dan target olahraga mingguan serta formulir pencatatan latihan baru.
- Tautan navigasi: Jadwal & Target, Catat Latihan Baru, Tentang Saya
- Dua bagian utama: Jadwal dan Target Olahraga, Catat Latihan
- Kolom tabel: Hari, Jenis Olahraga, Durasi (menit), Target Kalori
- Kolom form: Jenis Olahraga, Tanggal Latihan, Durasi (menit)
- Gambar: olahraga-1.webp

## Catatan penggunaan AI
saya minta bantu ai dalam menyambungkan image kedalam code 

## Pertemuan 4 — Design token halaman profil
 
- Berkas gaya yang akan dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #047857 (Hijau Zamrud), dipilih karena memberikan kesan segar, sehat, dan energik yang sangat cocok untuk halaman bertema Jadwal Olahraga.
 
### Token yang saya tetapkan
 
| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #047857 | tombol, tautan, penanda |
| --color-fg | #1C1917 | warna teks utama |
| --color-bg | #FAFAF9 | latar halaman |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |
 
Kriteria selesai saya: mengubah --color-primary di satu baris harus mengubah warna tombol, tautan, judul, dan garis fokus.
## Pertemuan 5 — Layout Modern: Flexbox dan Grid

Pada pertemuan ini, halaman `profil.html` disesuaikan tata letaknya menggunakan pembungkus `<div class="page">` dengan kombinasi CSS Grid untuk kerangka utama dan Flexbox untuk komponen.

### 1. Rencana Kerangka Halaman (Grid Utama)

| Bagian Halaman | Peran | Nilai Grid / Ukuran |
| --- | --- | --- |
| **Baris Pertama** | Header / Navbar | `auto` (tinggi mengikuti isi) |
| **Baris Kedua** | Isi Utama (Sidebar & Konten) | `1fr` (mengisi sisa tinggi layar) |
| **Baris Ketiga** | Footer | `auto` (tinggi mengikuti isi) |
| **Kolom Isi** | Sidebar & Konten Utama | `16rem 1fr` (Sidebar tetap, konten lentur) |

### 2. Keputusan Penggunaan Flexbox vs Grid

| Bagian | Pilihan | Alasan |
| --- | --- | --- |
| **Kepala Halaman (Navbar)** | Flexbox | Menyusun logo/judul dan menu navigasi secara sebaris mendatar (1 dimensi). |
| **Kerangka Utama (`.page`)** | Grid | Membagi struktur halaman secara kaku atas-bawah (`auto 1fr auto`) (2 dimensi). |
| **Area Isi (`.isi`)** | Grid | Memisahkan area sidebar (`16rem`) dan konten utama (`1fr`) menggunakan `grid-template-areas`. |
| **Galeri Kartu (`.galeri`)** | Grid | Mengatur kartu agar beradaptasi otomatis dengan `repeat(auto-fit, minmax(16rem, 1fr))` tanpa media query. |
| **Isi di Dalam Kartu** | Flexbox | Menyusun teks, durasi, dan tombol secara berurutan dalam satu arah mendatar/vertikal. |

### 3. Penanganan Kasus Tata Letak & Respon Layar

- **Galeri Adaptif:** Menggunakan `repeat(auto-fit, minmax(16rem, 1fr))` sehingga jumlah kolom bertambah/berkurang secara otomatis saat layar berukuran 360 px hingga 1280 px.
- **Pencegahan Luberan Teks:** Menggunakan `min-width: 0` pada `.kartu__isi` dan `overflow-wrap: anywhere` pada `.kartu__judul` agar teks panjang tidak melebarkan kolom secara paksa.
- **Konsistensi Jarak:** Seluruh jarak antar-elemen menggunakan variabel token `gap`, tanpa menggunakan margin tempelan atau *float*.
## Pertemuan 6 – Mobile-First Responsive Web Design

- Berkas gaya yang ditambahkan: responsif.css
- Pendekatan desain: Mobile-first (gaya dasar untuk layar sempit ditulis lebih dulu tanpa media query).
- Titik henti (breakpoints): 48rem dan 60rem.
- Perbaikan elemen: Menambahkan pencegahan luberan untuk gambar (max-width: 100%) dan tabel (overflow-x: auto) di base.css.

### Keputusan titik henti saya

| Titik henti | Yang berubah | Kenapa di lebar itu |
|---|---|---|
| 48rem | Galeri dari satu kolom menjadi dua kolom. | Layar mulai cukup luas (ukuran tablet) sehingga dua kartu dapat bersandingan dengan rapi tanpa membuat teks di dalamnya terasa sesak. |
| 60rem | Sidebar bersanding dengan konten utama, galeri menjadi tiga kolom. | Layar desktop sudah sangat lebar, sehingga ruang kosong di sisi kiri bisa dimanfaatkan untuk meletakkan sidebar navigasi. |

Kriteria selesai saya: Halaman menjadi 1 kolom tanpa gulir mendatar di 360px, galeri menjadi 2 kolom di 48rem, dan sidebar berpindah ke samping bersanding dengan konten di 60rem.

## Catatan penggunaan AI
saya minta bantu ai dalam menyusun tata letak grid untuk responsif.css, memperbaiki kartu yang belum menjadi 1 kolom di layar sempit, dan memasukkan gambar ke dalam kode.
## Pertemuan 11 — Modul, State, dan Penyimpanan Klien

Pada pertemuan ini, arsitektur kode JavaScript dipecah menjadi modul-modul terpisah dengan tanggung jawab tunggal (*Single Responsibility Principle*), pemisahan keadaan aplikasi (*state*) dari tampilan (*DOM*), serta implementasi penyimpanan persisten menggunakan `localStorage`.

### 1. Struktur Modul JavaScript
Kode dipecah menjadi 5 modul terpisah dengan jalur impor relatif eksplisit (`./` dan ekstensi `.js`):
- `js/data.js`: Menyimpan data statis profil dan fungsi murni (`saring()`).
- `js/state.js`: Objek `state` tunggal sebagai *single source of truth*, fungsi pengubah (`isiProyek`, `pilihKategori`, `tambahFavorit`), serta logika `localStorage` (`simpan`, `muat`, `pulihkan`, `aturUlang`).
- `js/dom.js`: Menangani murni manipulasi antarmuka (`render(state)`, `buatKartu()`, `tandaiTombolAktif()`, status memuat dan pesan galat).
- `js/events.js`: Wadah seluruh pendengar peristiwa (`pasangPendengar()`) untuk filter, bookmark favorit, tombol atur ulang, dan form latihan.
- `js/app.js`: Modul orkestrator/perakit yang mengimpor seluruh modul dan memulai aplikasi melalui fungsi `mulai()`.
- `js/api.js`: Modul pengambil data asinkron dari server/API (dipertahankan dari Pertemuan 10).

### 2. Fitur & Penanganan Keadaan
- **Tampilan adalah Fungsi Keadaan (UI = f(State))**: Tampilan kartu dan penanda tombol aktif digambar ulang secara reaktif dari objek `state`, tanpa menyimpan keadaan di elemen DOM.
- **Penyimpanan Klien (LocalStorage)**: Menggunakan `JSON.stringify` dan `JSON.parse` dengan nomor versi skema (`versi: 2`) untuk menyimpan pilihan kategori dan daftar favorit.
- **Tahan Banting terhadap Kerusakan (Resilience)**: Pembacaan data dibungkus blok `try/catch`. Jika data rusak atau versi tidak cocok, simpanan otomatis dibersihkan (`removeItem`) dan aplikasi kembali ke nilai bawaan secara aman tanpa menyebabkan halaman terhenti/blank.
- **Tombol Atur Ulang**: Mengembalikan kondisi aplikasi dan menghapus riwayat simpanan di peramban.

### 3. Informasi Lingkungan Pengembangan (F.2 PR Pertemuan 12)
- **Node.js**: `v24.21.0`
- **npm**: `11.19.0`

### 4. Deklarasi Penggunaan AI
- **Pekerjaan Mandiri**: 
  - Penataan dan pemisahan logika berkas JavaScript (`data.js`, `dom.js`, `events.js`, `app.js`).
  - Pembuatan tombol favorit dan penyesuaian markup pada `profil.html`.
  - Pengujian alur di browser, verifikasi Console, dan pengujian kasus simpanan rusak.
- **Bantuan AI**:
  - Digunakan sebagai rekan diskusi (pair-programming) untuk mengklarifikasi alur pemisahan modul.
  - Membantu pengecekan sintaks penanganan galat `try/catch` pada pembacaan skema versi `localStorage`.

  ## Pertemuan 12 — Build Tooling, npm, dan Framework SPA

Pada pertemuan ini, halaman profil modular dari Pertemuan 11 dimigrasikan (*porting*) ke dalam kerangka kerja Single Page Application (SPA) berbasis komponen menggunakan **Vue 3** dan perkakas build **Vite**.

### 1. Struktur Komponen Proyek
Antarmuka dipecah menjadi 4 Single File Component (SFC) di dalam `src/components/`:
- `KepalaProfil.vue`: Menampilkan identitas profil di bagian sidebar, menerima data dari induk via `props: { profil }`.
- `TombolFilter.vue`: Deretan tombol kategori latihan/proyek dan tombol atur ulang yang terhubung ke state bersama.
- `DaftarProyek.vue`: Menampilkan galeri kartu proyek secara reaktif dengan arahan `v-for`, penanda bintang favorit (`★ / ☆`), serta indikator status (`v-if` memuat, galat, dan data kosong).
- `FormKontak.vue`: Formulir pencatatan latihan baru yang dipisahkan ke dalam komponen mandiri.

### 2. Reaktivitas dan Penyimpanan Klien
- **Reaktivitas Vue**: Menggantikan manipulasi DOM dan fungsi `render(state)` manual dengan `reactive()` dari Vue. Perubahan state langsung memperbarui tampilan secara otomatis.
- **Siklus Hidup & Pengawasan**: 
  - `onMounted`: Membaca simpanan terakhir dari `localStorage` via `pulihkan(muat())` dan mengambil data proyek dari `ambilProyek()`.
  - `watch`: Mengawasi perubahan `state` secara mendalam (`deep: true`) untuk otomatis disimpan ke `localStorage`.

### 3. Informasi Lingkungan & Pengukuran Build
- **Node.js**: `v24.21.0`
- **npm**: `11.19.0`

#### Perbandingan Ukuran (Dev vs Production Build):
| Metrik | Sebelum Build (`npm run dev`) | Sesudah Build (`npm run preview`) |
| :--- | :---: | :---: |
| **Ukuran Berkas (Resources)** | 1.5 MB | 96.4 kB |
| **Jumlah Berkas (Requests)** | 24 berkas | 5 berkas |

### 4. Deklarasi Penggunaan AI
- **Pekerjaan Mandiri**: Inisialisasi proyek Vite, pengujian fitur di browser (`dev` & `preview`), serta pengukuran tab Network di DevTools.
- **Bantuan AI**: Memandu urutan pengerjaan sesuai worksheet dan membantu penyesuaian reaktivitas pada `src/state.js`.


