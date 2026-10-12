import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#kosong");

function buatKartu(proyek) {
  const li = document.createElement("li");
  li.className = "kartu";

  const judul = document.createElement("h3");
  judul.className = "kartu__judul";
  judul.textContent = proyek.judul;

  const keterangan = document.createElement("p");
  keterangan.textContent = `${proyek.kategori} · ${proyek.tahun} · ${proyek.selesai ? "Selesai" : "Berjalan"}`;

  li.append(judul, keterangan);
  return li;
}

function render(daftar) {
  wadah.textContent = "";               
  
  if (daftar.length === 0) {            
    kosong.hidden = false;
    return;
  }
  kosong.hidden = true;

  const fragmen = document.createDocumentFragment();
  daftar.forEach((proyek) => fragmen.append(buatKartu(proyek)));
  wadah.append(fragmen);                
}

function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}


barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;                  

  const kategori = tombol.dataset.kategori;
  const terpilih = daftarProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  render(terpilih);
  tandaiTombolAktif(tombol);
});


render(daftarProyek);
tandaiTombolAktif(barisFilter.querySelector('[data-kategori="semua"]'));