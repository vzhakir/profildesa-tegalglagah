// --- DATA PROFIL (SEJARAH, VISI, MISI) ---
export const dataProfil = {
  sejarah: "Desa Tebing Tinggi, yang terletak di Kecamatan Benai, memiliki sejarah panjang yang berakar dari semangat gotong royong para perintisnya. Didirikan secara resmi pada tahun 1982, desa ini merupakan hasil dari program transmigrasi pemerintah yang bertujuan untuk meratakan persebaran penduduk dan membuka lahan-lahan baru untuk pertanian.",
  
  visi: "Terwujudnya Desa Tebing Tinggi yang Maju, Mandiri, Sejahtera, dan Berakhlak Mulia melalui Peningkatan Kualitas Sumber Daya Manusia dan Pemanfaatan Potensi Lokal yang Berkelanjutan.",
  
  misi: [
    "Meningkatkan kualitas penyelenggaraan pemerintahan desa yang bersih, transparan, dan akuntabel.",
    "Mengembangkan kualitas sumber daya manusia (SDM) melalui peningkatan akses dan mutu pendidikan serta kesehatan.",
    "Meningkatkan produktivitas perekonomian desa dengan mengoptimalkan potensi pertanian, perkebunan, dan UMKM lokal.",
    "Membangun dan meningkatkan kualitas infrastruktur dasar desa yang merata dan berwawasan lingkungan.",
    "Memperkuat kehidupan sosial kemasyarakatan yang rukun, agamis, dan berlandaskan pada nilai-nilai budaya luhur."
  ]
};

// --- DATA KONDISI DESA (DEMOGRAFI, WILAYAH, DLL.) ---
export const kondisiDesa = {
  demografi: {
    jumlahPenduduk: 16273,
    jumlahKK: 1416,
    pria: 8390,
    wanita: 7883,
    kepadatanPenduduk: "2.173,65/km",
    usia: {
      maleAgeDistribution: [
        { jenis: '0-15', luas: 1615, warna: '#64B5F6' },
        { jenis: '16-25', luas: 1092, warna: '#42A5F5' },
        { jenis: '26-35', luas: 1427, warna: '#2196F3' },
        { jenis: '36-45', luas: 1776, warna: '#1976D2' },
        { jenis: '46-50', luas: 675, warna: '#1565C0' },
        { jenis: '50~', luas: 1855, warna: '#0D47A1' }
      ],
      femaleAgeDistribution: [
        { jenis: '0-15', luas: 1489, warna: '#FFAB91' },
        { jenis: '16-25', luas: 1065, warna: '#FF8A65' },
        { jenis: '26-35', luas: 1467, warna: '#FF7043' },
        { jenis: '36-45', luas: 1642, warna: '#FF5722' },
        { jenis: '46-50', luas: 551, warna: '#F4511E' },
        { jenis: '50~', luas: 1669, warna: '#D84315' }
      ]
    },
    educationDistribution: [
      {
        category: 'Belum TK',
        segments: [
          { label: 'Laki-laki', value: 1615, color: '#42A5F5' },
          { label: 'Perempuan', value: 1489, color: '#FF7043' }
        ]
      },
      {
        category: 'Sedang TK',
        segments: [
          { label: 'Laki-laki', value: 458, color: '#42A5F5' },
          { label: 'Perempuan', value: 374, color: '#FF7043' }
        ]
      },
      {
        category: 'Tidak Pernah Bersekolah',
        segments: [
          { label: 'Laki-laki', value: 720, color: '#42A5F5' },
          { label: 'Perempuan', value: 687, color: '#FF7043' }
        ]
      },
      {
        category: 'Sedang Sekolah',
        segments: [
          { label: 'Laki-laki', value: 596, color: '#42A5F5' },
          { label: 'Perempuan', value: 484, color: '#FF7043' }
        ]
      },
      {
        category: 'SD Tapi Tidak Tamat',
        segments: [
          { label: 'Laki-laki', value: 296, color: '#42A5F5' },
          { label: 'Perempuan', value: 319, color: '#FF7043' }
        ]
      },
      {
        category: 'Tidak Tamat SLTP',
        segments: [
          { label: 'Laki-laki', value: 150, color: '#42A5F5' },
          { label: 'Perempuan', value: 100, color: '#FF7043' }
        ]
      },
      {
        category: 'Tidak Tamat SLTA',
        segments: [
          { label: 'Laki-laki', value: 200, color: '#42A5F5' },
          { label: 'Perempuan', value: 150, color: '#FF7043' }
        ]
      },
      {
        category: 'Tamat SMP',
        segments: [
          { label: 'Laki-laki', value: 892, color: '#42A5F5' },
          { label: 'Perempuan', value: 852, color: '#FF7043' }
        ]
      },
      {
        category: 'Tamat SMA',
        segments: [
          { label: 'Laki-laki', value: 400, color: '#42A5F5' },
          { label: 'Perempuan', value: 350, color: '#FF7043' }
        ]
      },
      {
        category: 'Tamat D1',
        segments: [
          { label: 'Laki-laki', value: 11, color: '#42A5F5' },
          { label: 'Perempuan', value: 17, color: '#FF7043' }
        ]
      },
      {
        category: 'Tamat D2',
        segments: [
          { label: 'Laki-laki', value: 28, color: '#42A5F5' },
          { label: 'Perempuan', value: 34, color: '#FF7043' }
        ]
      },
      {
        category: 'Tamat D3',
        segments: [
          { label: 'Laki-laki', value: 61, color: '#42A5F5' },
          { label: 'Perempuan', value: 41, color: '#FF7043' }
        ]
      },
      {
        category: 'Tamat S1',
        segments: [
          { label: 'Laki-laki', value: 82, color: '#42A5F5' },
          { label: 'Perempuan', value: 191, color: '#FF7043' }
        ]
      },
      {
        category: 'Tamat S2/S3',
        segments: [
          { label: 'Laki-laki', value: 8, color: '#42A5F5' },
          { label: 'Perempuan', value: 3, color: '#FF7043' }
        ]
      }
    ],
    religionCombinedDistribution: {
      category: 'Total Penduduk Berdasarkan Agama',
      segments: [
        { label: 'Islam', value: 8384 + 7877, color: '#4CAF50', legendTextDisplay: 'Islam' },
        { label: 'Kristen', value: 0 + 1, color: '#2196F3', legendTextDisplay: 'Kristen' },
        { label: 'Katolik', value: 0 + 0, color: '#FFC107', legendTextDisplay: 'Katolik' },
        { label: 'Hindu', value: 0 + 0, color: '#F4511E', legendTextDisplay: 'Hindu' },
        { label: 'Buddha', value: 0 + 0, color: '#9C27B0', legendTextDisplay: 'Buddha' },
        { label: 'Kepercayaan KTYME', value: 0 + 0, color: '#795548', legendTextDisplay: 'Kepercayaan KTYME' },
        { label: 'Lainnya', value: 0 + 0, color: '#607D8B', legendTextDisplay: 'Lainnya' }
      ]
    },
    etnis: [
      {
        category: 'Jawa',
        segments: [
          { label: 'Laki-laki', value: 8390, color: '#42A5F5' },
          { label: 'Perempuan', value: 7883, color: '#FF7043' }
        ]
      },
      {
        category: 'Sunda',
        segments: [
          { label: 'Laki-laki', value: 0, color: '#42A5F5' },
          { label: 'Perempuan', value: 0, color: '#FF7043' }
        ]
      },
      {
        category: 'Madura',
        segments: [
          { label: 'Laki-laki', value: 0, color: '#42A5F5' },
          { label: 'Perempuan', value: 0, color: '#FF7043' }
        ]
      },
      {
        category: 'Lainnya',
        segments: [
          { label: 'Laki-laki', value: 0, color: '#42A5F5' },
          { label: 'Perempuan', value: 0, color: '#FF7043' }
        ]
      }
    ],
    disabilitas: [
      {
        category: 'Tuna Netra',
        segments: [
          { label: 'Laki-laki', value: 1, color: '#42A5F5' },
          { label: 'Perempuan', value: 1, color: '#FF7043' }
        ]
      },
      {
        category: 'Lumpuh',
        segments: [
          { label: 'Laki-laki', value: 0, color: '#42A5F5' },
          { label: 'Perempuan', value: 2, color: '#FF7043' }
        ]
      },
      {
        category: 'Tuna Daksa',
        segments: [
          { label: 'Laki-laki', value: 6, color: '#42A5F5' },
          { label: 'Perempuan', value: 1, color: '#FF7043' }
        ]
      },
      {
        category: 'Idiot',
        segments: [
          { label: 'Laki-laki', value: 3, color: '#42A5F5' },
          { label: 'Perempuan', value: 0, color: '#FF7043' }
        ]
      },
      {
        category: 'Gila',
        segments: [
          { label: 'Laki-laki', value: 9, color: '#42A5F5' },
          { label: 'Perempuan', value: 2, color: '#FF7043' }
        ]
      },
      {
        category: 'Stress',
        segments: [
          { label: 'Laki-laki', value: 4, color: '#42A5F5' },
          { label: 'Perempuan', value: 4, color: '#FF7043' }
        ]
      },
      {
        category: 'Autis',
        segments: [
          { label: 'Laki-laki', value: 2, color: '#42A5F5' },
          { label: 'Perempuan', value: 1, color: '#FF7043' }
        ]
      }
    ]
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
    ],
    orbitasi: {
      kecamatan: "12,00 km",
      kabupaten: "15,00 km",
      provinsi: "412,00 km"
    },
    iklim: { bulanHujan: 6, suhu: 28, ketinggian: 5 },
    tanah: { warna: "Hitam", tekstur: "Lempungan", kemiringan: 1 },
    stackedOrbitasiData: {
      category: 'Total Jarak',
      segments: [
        { label: 'Ke Kecamatan', value: 2, color: '#4CAF50', legendTextDisplay: 'Ke Kecamatan (2)' },
        { label: 'Ke Kabupaten', value: 8, color: '#FFC107', legendTextDisplay: 'Ke Kabupaten/Kota (10)' },
        { label: 'Ke Provinsi', value: 3, color: '#E53935', legendTextDisplay: 'Ke Provinsi (13)' }
      ]
    },
    stackedSumurPompaData: {
        category: 'Jumlah Pemanfaat',
        segments: [
            { label: 'Jumlah Unit Sumur Pompa', value: 2000, color: '#42A5F5', legendTextDisplay: 'Jumlah Unit Sumur Pompa (2000)' },
            { label: 'Sisa Potensi Pemanfaat', value: 1800, color: '#FF7043', legendTextDisplay: 'Sisa Potensi Pemanfaat (3800)' }
        ]
    },
    sungai: {
      jumlahSungai: 1,
      kondisi: {
        tercemar: true,
        pengendapanLumpurTinggi: true,
        keruh: true,
        jernih: false,
        berkurangnyaBiotaSungai: true,
        kering: false
      }
    }
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
  strukturOrganisasi: {
    perangkatDesa: [
      {
        jabatan: 'Kepala Desa',
        nama: 'Wahyono, S.T.',
      },
      {
        jabatan: 'Sekretaris Desa',
        nama: 'Janudin',
      },
      {
        jabatan: 'Kasi Pemerintahan',
        nama: 'Trio Hariawan',
      },
      {
        jabatan: 'Kasi Kesejahteraan',
        nama: 'Tanuri',
      },
      {
        jabatan: 'Kaur Perencanaan',
        nama: 'Ervina E.R., S.E.',
      },
      {
        jabatan: 'Kaur Keuangan',
        nama: 'Koerul Umam',
      },
       {
        jabatan: 'Kaur Layanan',
        nama: 'Kasori',
      },
      {
        jabatan: 'Kepala Dusun 1',
        nama: 'Dian Nurarifah',
      },
      {
        jabatan: 'Kepala Dusun 2',
        nama: 'Winarko',
      },
      {
        jabatan: 'Kepala Dusun 3',
        nama: 'Moh. Yahya',
      },
      {
        jabatan: 'Kepala Dusun 4',
        nama: 'Wakmad',
      },
      {
        jabatan: 'Kepala Dusun 5',
        nama: 'Mustopa Amin',
      },
    ]
  },
  ekonomi: {
    tenagaKerjaPria: [
        { jenis: 'Usia 0-6', luas: 325, warna: '#64B5F6', detail: 'Anak-anak yang belum memasuki usia sekolah.' },
        { jenis: 'Usia 7-18 (Sekolah)', luas: 425, warna: '#42A5F5', detail: 'Siswa yang sedang menempuh pendidikan formal.' },
        { jenis: 'Usia 18-56 (Bekerja)', luas: 950, warna: '#1976D2', detail: 'Penduduk usia produktif yang memiliki pekerjaan.' },
        { jenis: 'Usia 18-56 (Belum Bekerja)', luas: 250, warna: '#FFC107', detail: 'Penduduk usia produktif yang sedang mencari kerja.' },
        { jenis: 'Usia 56+', luas: 375, warna: '#757575', detail: 'Lansia atau penduduk yang sudah tidak dalam usia produktif.' }
    ],
    tenagaKerjaWanita: [
        { jenis: 'Usia 0-6', luas: 335, warna: '#FFAB91', detail: 'Anak-anak yang belum memasuki usia sekolah.' },
        { jenis: 'Usia 7-18 (Sekolah)', luas: 375, warna: '#FF8A65', detail: 'Siswa yang sedang menempuh pendidikan formal.' },
        { jenis: 'Usia 18-56 (Bekerja)', luas: 1050, warna: '#F4511E', detail: 'Penduduk usia produktif yang memiliki pekerjaan.' },
        { jenis: 'Usia 18-56 (Belum Bekerja)', luas: 200, warna: '#FFA000', detail: 'Penduduk usia produktif yang sedang mencari kerja.' },
        { jenis: 'Usia 56+', luas: 380, warna: '#9E9E9E', detail: 'Lansia atau penduduk yang sudah tidak dalam usia produktif.' }
    ],
    kualitasAngkatanKerjaPria: [
        { jenis: 'Tidak Tamat SD', luas: 615, warna: '#EF5350', detail: 'Angkatan kerja pria usia 18-56 tahun yang tidak tamat SD.' },
        { jenis: 'Tamat SD', luas: 615, warna: '#EC407A', detail: 'Angkatan kerja pria usia 18-56 tahun lulusan SD.' },
        { jenis: 'Tamat SLTP', luas: 418, warna: '#AB47BC', detail: 'Angkatan kerja pria usia 18-56 tahun lulusan SLTP.' },
        { jenis: 'Tamat SLTA', luas: 418, warna: '#7E57C2', detail: 'Angkatan kerja pria usia 18-56 tahun lulusan SLTA.' },
        { jenis: 'Perguruan Tinggi', luas: 105, warna: '#5C6BC0', detail: 'Angkatan kerja pria usia 18-56 tahun lulusan Perguruan Tinggi.' }
    ],
    kualitasAngkatanKerjaWanita: [
        { jenis: 'Tidak Tamat SD', luas: 515, warna: '#66BB6A', detail: 'Angkatan kerja wanita usia 18-56 tahun yang tidak tamat SD.' },
        { jenis: 'Tamat SD', luas: 485, warna: '#9CCC65', detail: 'Angkatan kerja wanita usia 18-56 tahun lulusan SD.' },
        { jenis: 'Tamat SLTP', luas: 312, warna: '#D4E157', detail: 'Angkatan kerja wanita usia 18-56 tahun lulusan SLTP.' },
        { jenis: 'Tamat SLTA', luas: 312, warna: '#FFEE58', detail: 'Angkatan kerja wanita usia 18-56 tahun lulusan SLTA.' },
        { jenis: 'Perguruan Tinggi', luas: 40, warna: '#FFCA28', detail: 'Angkatan kerja wanita usia 18-56 tahun lulusan Perguruan Tinggi.' }
    ]
  },
  masalahDanPotensi: {
    kelembagaan: [
        { kategori: 'Lembaga Pemerintahan', data: [
            { label: 'Jumlah aparat desa', nilai: '11 orang' },
            { label: 'Jumlah perangkat desa', nilai: '9 orang' },
            { label: 'Kades', nilai: 'Ada/Aktif' },
            { label: 'Sekdes', nilai: 'Ada/Aktif' },
            { label: 'Kaur Pemerintahan', nilai: 'Ada/Aktif' },
            { label: 'Kaur Pembangunan/Perencanaan', nilai: 'Ada/Aktif' },
            { label: 'Kaur Kesejahteraan', nilai: 'Ada/Aktif' },
            { label: 'Kaur Layanan', nilai: 'Ada/Aktif' },
            { label: 'Kaur Keuangan', nilai: 'Ada/Aktif' }
        ]},
        { kategori: 'BPD (Badan Permusyawaratan Desa)', data: [
            { label: 'Keberadaan BPD', nilai: 'Aktif' },
            { label: 'Jumlah anggota', nilai: '5 orang' }
        ]},
        { kategori: 'Rukun Warga (RW)', data: [
            { label: 'Total', nilai: '12 RW' },
            { label: 'Jumlah pengurus', nilai: '12 orang' }
        ]},
        { kategori: 'Rukun Tetangga (RT)', data: [
            { label: 'Jumlah', nilai: '61 RT' },
            { label: 'Jumlah pengurus', nilai: '61 orang' }
        ]},
        { kategori: 'Karang Taruna', data: [
            { label: 'Jumlah', nilai: '1 KT' },
            { label: 'Jumlah pengurus', nilai: '15 orang' }
        ]},
        { kategori: 'Lembaga Pendidikan', data: [
            { label: 'TK', nilai: '3 Unit', status: 'Terdaftar', pemilik: '5 Swasta, 1 Desa' },
            { label: 'SD', nilai: '4 Unit', status: 'Terakreditasi', pemilik: '4 Pemerintah' },
            { label: 'Sekolah Islam', nilai: '2 Unit', status: 'Terakreditasi', pemilik: '2 Swasta' },
            { label: 'Ibtidayah', nilai: '2 Unit', status: 'Terakreditasi', pemilik: '2 Swasta' },
        ]}
    ]
  }
};