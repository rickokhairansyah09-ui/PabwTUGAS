<template>
  <form class="form-latihan" id="form-latihan" novalidate>
    <div class="form-grup">
      <label for="nama-latihan">Jenis Olahraga</label>
      <input type="text" id="nama-latihan" required placeholder="Contoh: Bersepeda" aria-describedby="galat-nama">
      <p class="galat" id="galat-nama"></p>
    </div>
    <div class="form-grup">
      <label for="durasi">Durasi (Menit)</label>
      <input type="number" id="durasi" min="5" required placeholder="30" aria-describedby="galat-durasi">
      <p class="galat" id="galat-durasi"></p>
    </div>
    <button type="submit" class="tombol tombol--utama" id="tombol-simpan">Simpan Catatan</button>
  </form>
</template>
