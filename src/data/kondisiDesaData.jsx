export const kondisiDesa = {
  demografi: {
    jumlahPenduduk: 2540,
    jumlahKK: 782,
    pria: 1285,
    wanita: 1255,
  },

   wilayah: {
    luas: "748,65 Ha",
    batasUtara: ["Petunjungan, Bulakamba", "Dukuhwringin, Slawi"],
    batasSelatan: ["Sitanggal, Larangan", "Rengaspendawa, Larangan"],
    batasBarat: ["Siwungkuk, Wanasari", "Tegalgandu, Wanasari"],
    batasTimur: ["Jubang, Bulakamba", "Cipelem, Bulakamba", "Slatri, Larangan"],

    penggunaanLahan: [
      { 
        jenis: 'Tanah Sawah', 
        luas: 594.8, 
        warna: '#8BC34A', 
        detail: 'Terdiri dari 100% Sawah Irigasi Teknis yang produktif sepanjang tahun.' 
      },
      { 
        jenis: 'Tanah Kering', 
        luas: 128.85, 
        warna: '#CDDC39', 
        detail: 'Digunakan untuk tegal/ladang, ditanami palawija dan hortikultura.' 
      },
      { 
        jenis: 'Tanah Fasilitas Umum', 
        luas: 25, 
        warna: '#FFC107', 
        detail: 'Rincian: Tanah Bengkok (22,30 Ha), Perkantoran (1,10 Ha), Ruang Publik (0,06 Ha), Pemakaman (1,35 Ha), TPS (0,18 Ha), dan Sekolah (0,01 Ha).' 
      }
    ],
    tanamanPangan: [
      { jenis: 'Bawang Merah', luas: 550.00, warna: '#E53935', detail: 'Komoditas utama pertanian desa.' },
      { jenis: 'Lain-lain', luas: 44.80, warna: '#757575', detail: 'Tanaman pangan sekunder seperti padi dan jagung.' }
    ]
  },
  pendidikan: [
    {
      jenjang: "Lorem Ipsum",
      nama: "Lorem Ipsum",
      jumlahSiswa: 2222222,
      pengajar: "Lorem Ipsum",
    },
    {
      jenjang: "Sekolah Dasar (SD)",
      nama: "SDN 01 Lorem Ipsum",
      jumlahSiswa: 250,
      pengajar: "12 Orang",
    },
    {
      jenjang: "Madrasah (MDA)",
      nama: "MDA Lorem Ipsum",
      jumlahSiswa: 80,
      pengajar: "6 Orang",
    },
  ],
  sarana: [
    { jenis: "Ibadah", nama: "Masjid Jami' Lorem Ipsum", jumlah: 1 },
    { jenis: "Ibadah", nama: "Musholla", jumlah: 4 },
    { jenis: "Olahraga", nama: "Lapangan Sepak Bola", jumlah: 1 },
    { jenis: "Olahraga", nama: "Lapangan Voli", jumlah: 2 },
    { jenis: "Umum", nama: "Balai Desa", jumlah: 1 },
  ],
};