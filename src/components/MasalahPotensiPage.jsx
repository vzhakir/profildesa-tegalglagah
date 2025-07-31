import React from 'react';
import PageNavigator from './PageNavigator';
import styles from './MasalahPotensiPage.module.css';
import { kondisiDesa } from '../data/kondisiDesaData';
import { FaUniversity } from 'react-icons/fa';

// Komponen kecil untuk merender satu tabel agar tidak duplikasi kode
const TableCard = ({ lembaga }) => (
  <div className={styles.tableContainer}>
    <table className={styles.dataTable}>
      <thead>
        <tr>
          <th colSpan="2">{lembaga.kategori}</th>
        </tr>
      </thead>
      <tbody>
        {lembaga.data.map((item, itemIndex) => (
          <tr key={itemIndex}>
            <td>{item.label}</td>
            <td>{item.nilai}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

function MasalahPotensiPage() {
  const { kelembagaan } = kondisiDesa.masalahDanPotensi;

  // Pisahkan data untuk setiap lembaga
  const lembagaPemerintahan = kelembagaan.find(l => l.kategori === 'Lembaga Pemerintahan');
  const bpd = kelembagaan.find(l => l.kategori.includes('BPD'));
  const rw = kelembagaan.find(l => l.kategori.includes('Rukun Warga'));
  const rt = kelembagaan.find(l => l.kategori.includes('Rukun Tetangga'));
  const karangTaruna = kelembagaan.find(l => l.kategori.includes('Karang Taruna'));

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Masalah dan Potensi Desa</h1>
      <p className={styles.pageSubtitle}>
        Analisis masalah yang dihadapi serta potensi yang dapat dikembangkan di Desa Tegalglagah.
      </p>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaUniversity /> Potensi Kelembagaan</h2>
        
        {/* Container baru dengan layout kolom */}
        <div className={styles.columnsContainer}>
          {/* Kolom 1 */}
          <div className={styles.column}>
            {lembagaPemerintahan && <TableCard lembaga={lembagaPemerintahan} />}
          </div>

          {/* Kolom 2 */}
          <div className={styles.column}>
            {bpd && <TableCard lembaga={bpd} />}
            {rt && <TableCard lembaga={rt} />}
          </div>

          {/* Kolom 3 */}
          <div className={styles.column}>
            {rw && <TableCard lembaga={rw} />}
            {karangTaruna && <TableCard lembaga={karangTaruna} />}
          </div>
        </div>
      </div>
      

      <PageNavigator
        prevLink={{ path: '/kondisi-desa/sosial-ekonomi', title: 'Sosial & Ekonomi' }}
      />
    </div>
  );
  
}


export default MasalahPotensiPage;