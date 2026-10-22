import { saring } from './data.js';

const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");

export function buatKartu(proyek, favorit) {
  const li = document.createElement("li");
  li.className = "kartu";
  li.textContent = proyek.judul;
  const tombol = document.createElement("button");
  tombol.className = "favorit";
  tombol.dataset.id = proyek.id;
  tombol.textContent = favorit.includes(proyek.id) ? "★" : "☆";
  li.append(tombol);
  return li;
}

export function render(state) {
  wadah.textContent = "";                              // 1. kosongkan
  const tampil = saring(state.daftarProyek, state.kategoriAktif);  // dari data.js
  if (tampil.length === 0) {                           // 2. keadaan kosong
    kosong.hidden = false;
    tandaiTombolAktif(state.kategoriAktif);
    return;
  }
  kosong.hidden = true;
  tampil.forEach((item) =>                             // 3. isi ulang
    wadah.append(buatKartu(item, state.favorit)));
  tandaiTombolAktif(state.kategoriAktif);
}

export function aturMemuat(sedangMemuat) {
  if (pesanMuat) {
    pesanMuat.hidden = !sedangMemuat;
  }
}

export function tampilkanGalat(pesan) {
  kosong.textContent = pesan;
  kosong.hidden = false;
}

export function tandaiTombolAktif(kategoriAktif) {
  if (!barisFilter) return;
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}