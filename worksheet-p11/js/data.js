export const profil = {
  nama: "Hendricko Muhammad Zuhair Khairansyah",
  peran: "Mahasiswa Teknik Informatika",
  keahlian: ["Renang", "Lari", "Badminton"],
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

export function saring(daftar, kategori) {
  if (kategori === "semua" || !kategori) return daftar;
  return daftar.filter((proyek) => proyek.kategori === kategori);
}
