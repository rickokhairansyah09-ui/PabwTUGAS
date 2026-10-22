import { reactive } from 'vue'

const KUNCI = "pabw-p11";
const VERSI = 2;

export const state = reactive({
  kategoriAktif: 'semua',
  daftarProyek: [],
  favorit: [],
  memuat: true,
  galat: '',
})

export function pilihKategori(nilai) {
  state.kategoriAktif = nilai
}

export function isiProyek(daftar) {
  state.daftarProyek = daftar.map((item, index) => ({
    id: item.id ?? (index + 1),
    ...item
  }));
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter((fId) => fId !== id);
  } else {
    state.favorit = [...state.favorit, id];
  }
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = 'semua';
  state.favorit = [];
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
      localStorage.removeItem(KUNCI);
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI);
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return;
  state.kategoriAktif = isi.kategoriAktif;
  state.favorit = isi.favorit;
}
