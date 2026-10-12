import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = proyek.judul;

  const keterangan = document.createElement("p");
  keterangan.textContent = `${proyek.tahun} · ${proyek.selesai ? "Selesai" : "Berjalan"}`;

  li.append(judul, keterangan);
  return li;
}

function render(daftar) {
  wadah.textContent = "";                       // kosongkan dulu
  const fragmen = document.createDocumentFragment();
  daftar.forEach((proyek) => fragmen.append(buatKartu(proyek)));
  wadah.append(fragmen);                        // halaman digambar sekali
}

render(daftarProyek);