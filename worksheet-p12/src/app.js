import { ambilProyek } from './api.js';
import { isiProyek, pulihkan, muat, state } from './state.js';
import { tampilkanGalat, aturMemuat } from './dom.js';
import { pasangPendengar } from './events.js';

async function mulai() {
  pulihkan(muat()); // lembar D: pilihan terakhir, atau nilai bawaan
  pasangPendengar();
  aturMemuat(true);
  try {
    isiProyek(await ambilProyek());
  } catch (galat) {
    tampilkanGalat('Data gagal dimuat. Periksa koneksi, lalu muat ulang.');
  } finally {
    aturMemuat(false);
  }
}

mulai();

window.state = state; // sementara untuk memeriksa state di Console (C.5)