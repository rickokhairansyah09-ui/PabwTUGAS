import { pilihKategori, tambahFavorit, aturUlang } from './state.js';

export function pasangPendengar() {
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");
      if (!tombol || !tombol.dataset.kategori) return;
      pilihKategori(tombol.dataset.kategori);
    });
  }

  document.querySelector("#daftar").addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");
    if (!tombol) return;
    tambahFavorit(Number(tombol.dataset.id));
  });

  const tombolAturUlang = document.querySelector("#atur-ulang");
  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }

  const form = document.querySelector("#form-latihan");
  const inputNama = document.querySelector("#nama-latihan");
  const inputDurasi = document.querySelector("#durasi");
  const galatNama = document.querySelector("#galat-nama");
  const galatDurasi = document.querySelector("#galat-durasi");
  const tombolSimpan = document.querySelector("#tombol-simpan");

  if (!form || !inputNama || !inputDurasi) return;

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
}
