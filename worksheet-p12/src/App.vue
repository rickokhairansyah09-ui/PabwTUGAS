<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat())
  try {
    isiProyek(await ambilProyek())
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <!-- Pembungkus Utama Grid Halaman -->
  <div class="page">
    
    <!-- Navbar (Flexbox) -->
    <header class="navbar">
      <div class="navbar__brand">
        <h1>Jadwal Olahraga</h1>
      </div>
      <nav aria-label="Navigasi Utama">
        <ul class="navbar__menu">
          <li><a href="#jadwal">Jadwal & Target</a></li>
          <li><a href="#proyek">Proyek</a></li>
          <li><a href="#catat">Catat Latihan</a></li>
          <li><a href="#tentang">Tentang Saya</a></li>
        </ul>
      </nav>
      <div class="navbar__tema">
        <input type="checkbox" id="tema" class="pengalih-tema">
        <label for="tema" class="tombol-tema">🌙 Mode Gelap</label>
      </div>
    </header>

    <!-- Area Isi Halaman (Grid 2 Kolom) -->
    <div class="isi">
      <!-- Sidebar Samping -->
      <aside class="sisi">
        <KepalaProfil :profil="profil" />
        <p>Target mingguan: 4 kali latihan kardio dan penguatan otot.</p>
        <div class="statistik-ringkas">
          <p><strong>Total Durasi:</strong> 180 Menit</p>
          <p><strong>Status:</strong> On Track 🔥</p>
        </div>
      </aside>

      <!-- Konten Utama -->
      <main class="utama">
        <section id="jadwal">
          <h2>Katalog & Jadwal Latihan</h2>
          
          <!-- Galeri Kartu Adaptif (Grid auto-fit) -->
          <div class="galeri">
            
            <!-- Kartu Sorotan (Span 2) -->
            <article class="kartu sorotan">
              <img src="/images.jpg" alt="Ilustrasi orang berlari maraton">
              <div class="kartu__isi">
                <span class="lencana">Sorotan Utama</span>
                <h3 class="kartu__judul">Lari Maraton Akhir Pekan</h3>
                <p>Program peningkatkan stamina jarak jauh di luar ruangan dengan target jarak 10 km.</p>
              </div>
              <div class="kartu__kaki">
                <span>⏱️ 90 Menit</span>
                <button type="button" class="tombol">Detail Latihan</button>
              </div>
            </article>

            <!-- Kartu Biasa 1 -->
            <article class="kartu">
              <div class="kartu__isi">
                <h3 class="kartu__judul">Berenang Gaya Bebas</h3>
                <p>Latihan melatih otot dada dan pernapasan di kolam renang lokal.</p>
              </div>
              <div class="kartu__kaki">
                <span>⏱️ 45 Menit</span>
                <button type="button" class="tombol">Detail Latihan</button>
              </div>
            </article>

            <!-- Kartu Biasa 2 -->
            <article class="kartu">
              <div class="kartu__isi">
                <h3 class="kartu__judul">Latihan Beban (Gym)</h3>
                <p>Fokus latihan otot tubuh bagian atas (upper body workout).</p>
              </div>
              <div class="kartu__kaki">
                <span>⏱️ 60 Menit</span>
                <button type="button" class="tombol">Detail Latihan</button>
              </div>
            </article>

            <!-- Kartu Biasa 3 -->
            <article class="kartu">
              <div class="kartu__isi">
                <h3 class="kartu__judul">Yoga & Peregangan</h3>
                <p>Memperbaiki fleksibilitas tubuh dan relaksasi pikiran.</p>
              </div>
              <div class="kartu__kaki">
                <span>⏱️ 30 Menit</span>
                <button type="button" class="tombol">Detail Latihan</button>
              </div>
            </article>

          </div>
        </section>

        <!-- Daftar Proyek (diisi oleh JavaScript) -->
        <section id="proyek">
          <h2>Proyek Saya</h2>
          <TombolFilter />
          <DaftarProyek />
        </section>

        <!-- Form Pencatatan Latihan -->
        <section id="catat" class="bagian-form">
          <h2>Catat Latihan Baru</h2>
          <FormKontak />
        </section>
      </main>
    </div>

    <!-- Kaki Halaman (Footer) -->
    <footer id="tentang">
      <p>&copy; 2026 Hendricko Muhammad Zuhair Khairansyah. All rights reserved.</p>
    </footer>

  </div>
</template>
