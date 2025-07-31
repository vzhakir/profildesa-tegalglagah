import React from 'react';
import styles from './StrukturOrganisasi.module.css';
import { kondisiDesa } from '../data/kondisiDesaData';
import { FaUserCircle } from 'react-icons/fa';
import PageNavigator from './PageNavigator'; // Impor komponen navigasi

function StrukturOrganisasiPage() {
  const perangkatDesa = kondisiDesa.strukturOrganisasi.perangkatDesa;
  const kepalaDesa = perangkatDesa.find(p => p.jabatan === 'Kepala Desa');
  const sekretarisDesa = perangkatDesa.find(p => p.jabatan === 'Sekretaris Desa');
  const kepalaDusun = perangkatDesa.filter(p => p.jabatan.startsWith('Kepala Dusun'));
  const perangkatLainnya = perangkatDesa.filter(p =>
    p.jabatan !== 'Kepala Desa' &&
    p.jabatan !== 'Sekretaris Desa' &&
    !p.jabatan.startsWith('Kepala Dusun')
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

      {/* Konten halaman yang sudah ada */}
      {kepalaDesa && (
        <div className={styles.kepalaDesaSection}>
          <div className={styles.kepalaDesaCard}>
            <FaUserCircle style={kepalaDesaIconStyle} alt={`Ikon ${kepalaDesa.nama}`} />
            <h2 className={styles.nama}>{kepalaDesa.nama}</h2>
            <p className={styles.jabatan}>{kepalaDesa.jabatan}</p>
          </div>
        </div>
      )}
      <hr className={styles.separator} />
      {sekretarisDesa && (
        <>
          <h2 className={styles.sectionTitle}>Sekretaris Desa</h2>
          <div className={styles.sekdesSection}>
            <div className={styles.sekdesCard}>
              <FaUserCircle style={kepalaDesaIconStyle} alt={`Ikon ${sekretarisDesa.nama}`} />
              <h2 className={styles.nama}>{sekretarisDesa.nama}</h2>
              <p className={styles.jabatan}>{sekretarisDesa.jabatan}</p>
            </div>
          </div>
          <hr className={styles.separator} />
        </>
      )}
      <h2 className={styles.sectionTitle}>Kepala Dusun</h2>
      <div className={styles.dusunGrid}>
        {kepalaDusun.map((item) => (
          <div key={item.jabatan} className={styles.card}>
            <FaUserCircle style={iconStyle} alt={`Ikon ${item.nama}`} />
            <h3 className={styles.nama}>{item.nama}</h3>
            <p className={styles.jabatan}>{item.jabatan}</p>
          </div>
        ))}
      </div>
      <hr className={styles.separator} />
      <h2 className={styles.sectionTitle}>Perangkat Desa</h2>
      <div className={styles.perangkatGrid}>
        {perangkatLainnya.map((item) => (
          <div key={item.jabatan} className={styles.card}>
            <FaUserCircle style={iconStyle} alt={`Ikon ${item.nama}`} />
            <h3 className={styles.nama}>{item.nama}</h3>
            <p className={styles.jabatan}>{item.jabatan}</p>
          </div>
        ))}
      </div>

      {/* Tambahkan navigator di sini */}
      <PageNavigator
        prevLink={{ path: '/profil/visi-misi', title: 'Visi & Misi' }}
      />
    </div>
  );
}

export default StrukturOrganisasiPage;