import React from 'react';
import styles from './StrukturOrganisasi.module.css';
import { kondisiDesa } from '../data/kondisiDesaData';
import { FaUserCircle } from 'react-icons/fa';

function StrukturOrganisasiPage() {
  const perangkatDesa = kondisiDesa.strukturOrganisasi.perangkatDesa;
  const kepalaDesa = perangkatDesa.find(p => p.jabatan === 'Kepala Desa');
  const kepalaDusun = perangkatDesa.filter(p => p.jabatan.startsWith('Kepala Dusun'));
  const perangkatLainnya = perangkatDesa.filter(p =>
    p.jabatan !== 'Kepala Desa' && !p.jabatan.startsWith('Kepala Dusun')
  );

  const iconStyle = {
    fontSize: '80px',
    color: '#777',
    marginBottom: '10px',
  };

  const kepalaDesaIconStyle = {
    ...iconStyle,
    fontSize: '120px',
  };

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
            <FaUserCircle style={kepalaDesaIconStyle} alt={`Foto ${kepalaDesa.nama}`} className={styles.kepalaDesaFoto} />
            <h2 className={styles.nama}>{kepalaDesa.nama}</h2>
            <p className={styles.jabatan}>{kepalaDesa.jabatan}</p>
          </div>
        </div>
      )}

      {/* Garis pemisah */}
      <hr className={styles.separator} />

      {/* Bagian Kepala Dusun menggunakan grid yang responsif */}
      <h2 className={styles.sectionTitle}>Kepala Dusun</h2>
      <div className={styles.gridContainer}> {/* <-- KEMBALI MENGGUNAKAN gridContainer */}
        {kepalaDusun.map((item) => (
          <div key={item.jabatan} className={styles.card}>
            <FaUserCircle style={iconStyle} alt={`Foto ${item.nama}`} className={styles.foto} />
            <h3 className={styles.nama}>{item.nama}</h3>
            <p className={styles.jabatan}>{item.jabatan}</p>
          </div>
        ))}
      </div>

      {/* Garis pemisah */}
      <hr className={styles.separator} />

      {/* Perangkat Desa Lainnya tetap menggunakan grid */}
      <h2 className={styles.sectionTitle}>Perangkat Desa</h2>
      <div className={styles.gridContainer}>
        {perangkatLainnya.map((item) => (
          <div key={item.jabatan} className={styles.card}>
            <FaUserCircle style={iconStyle} alt={`Foto ${item.nama}`} className={styles.foto} />
            <h3 className={styles.nama}>{item.nama}</h3>
            <p className={styles.jabatan}>{item.jabatan}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StrukturOrganisasiPage;