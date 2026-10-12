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

const daftarProyek = [
  { judul: "Halaman Profil", tahun: 2026, selesai: true },
  { judul: "Worksheet JavaScript P8", tahun: 2026, selesai: false },
  { judul: "Tugas Web Pertemuan 3", tahun: 2026, selesai: true },
];

console.table(profil.keahlian);
console.table(daftarProyek);

const selesai = daftarProyek.filter((proyek) => proyek.selesai);
console.table(selesai);

const worksheet = daftarProyek.find((proyek) => proyek.judul === "Worksheet JavaScript P8");
console.log(worksheet);

const daftarJudul = daftarProyek.map((proyek) => proyek.judul);
console.log(daftarJudul);

const urut = [...daftarProyek].sort((a, b) => a.judul.localeCompare(b.judul));
console.table(urut);
console.table(daftarProyek);