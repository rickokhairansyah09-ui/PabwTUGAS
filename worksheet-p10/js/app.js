import { ambilProyek } from './api.js';
import { render, tampilkanGalat, aturMemuat } from './dom.js';

const profil = {
  nama: "Hendricko Muhammad Zuhair Khairansyah",
  peran: "Mahasiswa Teknik Informatika",
  keahlian: ["Renang", "Lari", "Badminton"],
};

const jumlahProyek = 1;
const kalimat = `Nama saya ${profil.nama}, dan saya belajar ${profil.keahlian.length} hal.`;
console.log(kalimat);
console.log(typeof profil.nama);
console.log(typeof jumlahProyek);
console.log(profil);
console.log(jumlahProyek);

const buatPerkenalan = ({ nama, peran }) => {
  return `${nama} — ${peran}`;
};

const formatKeahlian = (daftar) => daftar.join(" · ");
console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));
console.log(buatPerkenalan({ nama: "Ayu", peran: "Mahasiswa" }));
console.log(buatPerkenalan({ nama: "Budi", peran: "Atlet" }));
console.log(formatKeahlian(["HTML", "CSS"]));

console.table(profil.keahlian);

async function muat() {
  aturMemuat(true);
  try {
    const data = await ambilProyek();
    render(data);
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.');
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

muat();