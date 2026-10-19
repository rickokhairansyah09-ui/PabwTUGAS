import { render } from './dom.js';

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = {
  kategoriAktif: "semua",
  daftarProyek: [],
  favorit: [],
};

export function isiProyek(daftar) {
  state.daftarProyek = daftar.map((item, index) => ({
    id: item.id ?? (index + 1),
    ...item
  }));
  render(state);
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) return;
  state.favorit = [...state.favorit, id];
  simpan(state);
  render(state);
}

export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI);   // bentuk lama: buang
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);     // isi rusak: buang
    return null;
  }
}

export function pulihkan(isi) { // dipanggil sekali dari mulai() di app.js
  if (!isi) return;             // kunjungan pertama: nilai bawaan tetap
  state.kategoriAktif = isi.kategoriAktif;
  state.favorit = isi.favorit;
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = 'semua';
  state.favorit = [];
  render(state);
}
