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