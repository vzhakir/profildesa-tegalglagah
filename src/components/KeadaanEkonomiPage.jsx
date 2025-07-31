import React from 'react';
import PageNavigator from './PageNavigator';
import styles from './DemografiPage.module.css'; // Memakai ulang style dari halaman lain untuk konsistensi

function KeadaanEkonomiPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Keadaan Ekonomi</h1>
      <p className={styles.pageSubtitle}>
        Informasi mengenai kondisi perekonomian di Desa Tegalglagah.
      </p>
      
      {/* Anda bisa menambahkan konten halaman di sini */}
      <div style={{ textAlign: 'center', padding: '50px', border: '1px dashed #ccc', borderRadius: '8px', margin: '40px 0' }}>
        <p>Konten untuk halaman keadaan ekonomi akan segera ditambahkan.</p>
      </div>

      <PageNavigator
        prevLink={{ path: '/kondisi-desa/sosial', title: 'Keadaan Sosial' }}
      />
    </div>
  );
}

export default KeadaanEkonomiPage;