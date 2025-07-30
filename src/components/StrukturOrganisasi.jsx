import React from 'react';
import styles from './StrukturOrganisasi.module.css';

const perangkatDesa = [
  {
    jabatan: 'Kepala Desa',
    nama: 'H. Abdul Ghofur',
    foto: 'https://via.placeholder.com/150',
  },
  {
    jabatan: 'Sekretaris Desa',
    nama: 'Ahmad Mubarok, S.Kom',
    foto: 'https://via.placeholder.com/150',
  },
  {
    jabatan: 'Kasi Pemerintahan',
    nama: 'Sri Wahyuni, S.Pd',
    foto: 'https://via.placeholder.com/150',
  },
  {
    jabatan: 'Kasi Kesejahteraan',
    nama: 'Muhammad Zaki',
    foto: 'https://via.placeholder.com/150',
  },
  {
    jabatan: 'Kaur Perencanaan',
    nama: 'Siti Aminah',
    foto: 'https://via.placeholder.com/150',
  },
  {
    jabatan: 'Kaur Keuangan',
    nama: 'Budi Santoso',
    foto: 'https://via.placeholder.com/150',
  },
];

function StrukturOrganisasiPage() {
  const kepalaDesa = perangkatDesa.find(p => p.jabatan === 'Kepala Desa');
  const perangkatLainnya = perangkatDesa.filter(p => p.jabatan !== 'Kepala Desa');

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Struktur Organisasi Pemerintah Desa</h1>
      <p className={styles.pageSubtitle}>
        Berikut adalah susunan perangkat Desa Tegalglagah periode 2024-2029.
      </p>

      {/* Kepala Desa ditampilkan terpisah dan lebih besar */}
      {kepalaDesa && (
        <div className={styles.kepalaDesaSection}>
          <div className={styles.kepalaDesaCard}>
            <img src={kepalaDesa.foto} alt={`Foto ${kepalaDesa.nama}`} className={styles.kepalaDesaFoto} />
            <h2 className={styles.nama}>{kepalaDesa.nama}</h2>
            <p className={styles.jabatan}>{kepalaDesa.jabatan}</p>
          </div>
        </div>
      )}

      {/* Garis pemisah */}
      <hr className={styles.separator} />

      {/* Perangkat Desa Lainnya */}
      <h2 className={styles.sectionTitle}>Perangkat Desa</h2>
      <div className={styles.gridContainer}>
        {perangkatLainnya.map((item) => (
          <div key={item.jabatan} className={styles.card}>
            <img src={item.foto} alt={`Foto ${item.nama}`} className={styles.foto} />
            <h3 className={styles.nama}>{item.nama}</h3>
            <p className={styles.jabatan}>{item.jabatan}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StrukturOrganisasiPage;