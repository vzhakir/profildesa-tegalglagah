import React from 'react';
import styles from './Demografi.module.css';
import { kondisiDesa } from '../data/kondisiDesaData';

function DemografiPage() {
  const { pria, wanita, jumlahPenduduk, jumlahKK } = kondisiDesa.demografi;

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

      {/* Tabel Rincian Data */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Rincian Data</h2>
        <table className={styles.dataTable}>
          <tbody>
            <tr>
              <td>Jumlah Kepala Keluarga (KK)</td>
              <td>: {jumlahKK} KK</td>
            </tr>
            <tr className={styles.totalRow}>
              <td>Total Penduduk</td>
              <td>: {jumlahPenduduk} Jiwa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DemografiPage;