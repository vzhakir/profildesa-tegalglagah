import React from 'react';
import styles from './SejarahPage.module.css';
import PageNavigator from './PageNavigator'; // Impor komponen navigasi

function SejarahPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Sejarah Desa</h1>
      <div className={styles.content}>
        <p>
          Desa Tebing Tinggi, yang terletak di Kecamatan Benai, memiliki sejarah panjang yang berakar dari semangat gotong royong para perintisnya. Didirikan secara resmi pada tahun 1982, desa ini merupakan hasil dari program transmigrasi pemerintah yang bertujuan untuk meratakan persebaran penduduk dan membuka lahan-lahan baru untuk pertanian.
        </p>
        <p>
          Para penduduk awal, yang berasal dari berbagai daerah di Pulau Jawa dan Sumatera, bahu-membahu membangun infrastruktur dasar mulai dari pemukiman, akses jalan, hingga sarana ibadah. Nama "Tebing Tinggi" sendiri terinspirasi dari kontur geografis wilayahnya yang dihiasi oleh tebing-tebing di sepanjang aliran sungai yang menjadi sumber kehidupan warga.
        </p>
        <p>
          Seiring berjalannya waktu, Desa Tebing Tinggi berkembang pesat. Sektor pertanian, khususnya kelapa sawit dan karet, menjadi tulang punggung perekonomian desa. Generasi penerus terus melanjutkan perjuangan para pendahulu, memajukan desa melalui pendidikan, teknologi, dan pelestarian budaya lokal.
        </p>
      </div>

      {/* Tambahkan navigator di sini */}
      <PageNavigator
        nextLink={{ path: '/profil/visi-misi', title: 'Visi & Misi' }}
      />
    </div>
  );
}

export default SejarahPage;