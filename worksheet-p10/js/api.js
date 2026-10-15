const ALAMAT = 'https://raw.githubusercontent.com/rickokhairansyah09-ui/PabwTUGAS/main/worksheet-p10/data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) throw new Error('status ' + respons.status);
    const data = await respons.json();
    console.log('Bentuk data C.3:', data);
    return data;
  } catch (galat) {
    console.error('gagal memuat', galat.message);
    throw galat;
  }
}
