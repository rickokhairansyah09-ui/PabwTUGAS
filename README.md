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