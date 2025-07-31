import React from 'react';
import styles from './DemografiPage.module.css';
import { kondisiDesa } from '../data/kondisiDesaData';
import { FaHome, FaUsers } from 'react-icons/fa'; // Import ikon baru

function DemografiPage() {
  const { pria, wanita, jumlahPenduduk, jumlahKK, kepadatanPenduduk } = kondisiDesa.demografi; // Tambahkan kepadatanPenduduk

  // Menghitung persentase untuk grafik
  const persentasePria = ((pria / jumlahPenduduk) * 100).toFixed(1);
  const persentaseWanita = ((wanita / jumlahPenduduk) * 100).toFixed(1);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Demografi Desa</h1>
      <p className={styles.pageSubtitle}>
        Visualisasi dan rincian data kependudukan Desa Tegalglagah.
      </p>

      {/* Kontainer untuk menampung grafik dan legenda */}
      <div className={styles.chartSection}>
        {/* Ini adalah elemen yang akan menjadi grafik donat */}
        <div
          className={styles.donutChart}
          // Variabel CSS untuk mengontrol persentase dari React ke CSS
          style={{'--pria-percent': persentasePria}}
        >
          <div className={styles.chartCenterInfo}>
            <span>Total</span>
            <span className={styles.totalPenduduk}>{jumlahPenduduk}</span>
            <span>Jiwa</span>
          </div>
        </div>

        {/* Legenda untuk grafik */}
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.legendColor} ${styles.colorPria}`}></span>
            <div className={styles.legendText}>
              <strong>Laki-laki</strong>
              <span>{pria} Jiwa ({persentasePria}%)</span>
            </div>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendColor} ${styles.colorWanita}`}></span>
            <div className={styles.legendText}>
              <strong>Perempuan</strong>
              <span>{wanita} Jiwa ({persentaseWanita}%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bagian Kartu Rincian Data (menggantikan tabel) */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Rincian Data Penduduk</h2>
        <div className={styles.infoCardsGrid}> {/* Grid baru untuk kartu */}
          {/* Kartu Jumlah KK */}
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}><FaHome /></div>
            <div className={styles.infoValue}>{jumlahKK} <span className={styles.infoUnit}>KK</span></div>
            <div className={styles.infoLabel}>Jumlah Kepala Keluarga</div>
          </div>

          {/* Kartu Kepadatan Penduduk */}
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}><FaUsers /></div>
            <div className={styles.infoValue}>{kepadatanPenduduk.split('/')[0]}<span className={styles.infoUnit}>{kepadatanPenduduk.split('/')[1]}</span></div>
            <div className={styles.infoLabel}>Kepadatan Penduduk</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemografiPage;