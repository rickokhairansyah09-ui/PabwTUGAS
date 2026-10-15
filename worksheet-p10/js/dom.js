const wadah = document.querySelector("#daftar");
const barisFilter = document.querySelector("#filter");
const kosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");

let semuaProyek = [];

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

export function render(daftar) {
  if (semuaProyek.length === 0 && daftar.length > 0) {
    semuaProyek = daftar;
  }

  wadah.textContent = "";

  if (daftar.length === 0) {
    kosong.textContent = "Belum ada data.";
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;
  daftar.forEach((proyek) => wadah.append(buatKartu(proyek)));
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

function tandaiTombolAktif(tombolAktif) {
  barisFilter.querySelectorAll("button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

barisFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;

  const kategori = tombol.dataset.kategori;
  const terpilih = semuaProyek.filter(
    (proyek) => kategori === "semua" || proyek.kategori === kategori
  );

  render(terpilih);
  tandaiTombolAktif(tombol);
});

tandaiTombolAktif(barisFilter.querySelector('[data-kategori="semua"]'));

const form = document.querySelector("#form-latihan");
const inputNama = document.querySelector("#nama-latihan");
const inputDurasi = document.querySelector("#durasi");
const galatNama = document.querySelector("#galat-nama");
const galatDurasi = document.querySelector("#galat-durasi");
const tombolSimpan = document.querySelector("#tombol-simpan");

function periksaNama() {
  const nilai = inputNama.value.trim();
  if (nilai === "") return "Isi jenis olahraga, misalnya Bersepeda.";
  if (nilai.length < 3) return "Tulis minimal 3 huruf supaya jenis olahraganya jelas.";
  return "";
}

function periksaDurasi() {
  const nilai = inputDurasi.value.trim();
  if (nilai === "") return "Isi durasi latihan dalam menit, misalnya 30.";
  if (Number(nilai) < 5) return "Durasi minimal 5 menit. Coba isi 5 atau lebih.";
  return "";
}

function tampilkanGalatForm(input, penanda, pesan) {
  penanda.textContent = pesan;
  if (pesan) {
    input.setAttribute("aria-invalid", "true");
  } else {
    input.removeAttribute("aria-invalid");
  }
}

function formSah() {
  return periksaNama() === "" && periksaDurasi() === "";
}

inputNama.addEventListener("input", () => {
  tampilkanGalatForm(inputNama, galatNama, periksaNama());
  tombolSimpan.disabled = !formSah();
});

inputDurasi.addEventListener("input", () => {
  tampilkanGalatForm(inputDurasi, galatDurasi, periksaDurasi());
  tombolSimpan.disabled = !formSah();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const pesanNama = periksaNama();
  const pesanDurasi = periksaDurasi();
  tampilkanGalatForm(inputNama, galatNama, pesanNama);
  tampilkanGalatForm(inputDurasi, galatDurasi, pesanDurasi);

  if (pesanNama || pesanDurasi) {
    tombolSimpan.disabled = true;
    (pesanNama ? inputNama : inputDurasi).focus();
    return;
  }

  console.log("Catatan tersimpan:", inputNama.value.trim(), inputDurasi.value.trim(), "menit");
  form.reset();
  tampilkanGalatForm(inputNama, galatNama, "");
  tampilkanGalatForm(inputDurasi, galatDurasi, "");
});