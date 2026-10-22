<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div id="filter">
    <button
      type="button"
      class="tombol"
      :class="{ aktif: state.kategoriAktif === 'semua' }"
      @click="pilihKategori('semua')"
    >
      Semua
    </button>
    <button
      type="button"
      class="tombol"
      :class="{ aktif: state.kategoriAktif === 'web' }"
      @click="pilihKategori('web')"
    >
      Web
    </button>
    <button
      type="button"
      class="tombol"
      :class="{ aktif: state.kategoriAktif === 'latihan' }"
      @click="pilihKategori('latihan')"
    >
      Latihan
    </button>
    <button
      type="button"
      class="tombol"
      :class="{ aktif: state.kategoriAktif === 'mobile' }"
      @click="pilihKategori('mobile')"
    >
      Mobile
    </button>
  </div>
  <button type="button" class="tombol" id="atur-ulang" @click="aturUlang">
    Atur ulang
  </button>
</template>
