import React from 'react';
import styles from './Peta.module.css';
import { FaMapMarkedAlt, FaChartArea } from 'react-icons/fa';
import petaDesaImage from '../assets/peta.jpg';
import { kondisiDesa } from '../data/kondisiDesaData';

function PetaPage() {
  const { batasUtara, batasSelatan, batasBarat, batasTimur, luas, penggunaanLahan } = kondisiDesa.wilayah;
  const [luasValue, luasUnit] = luas.split(' ');

  // --- LOGIKA BARU UNTUK MEMBUAT GRAFIK DARI DATA ---
  const totalLahan = penggunaanLahan.reduce((sum, item) => sum + item.luas, 0);
  let cumulativePercent = 0;
  const gradientParts = penggunaanLahan.map(item => {
    const percent = (item.luas / totalLahan) * 100;
    const start = cumulativePercent;
    const end = cumulativePercent + percent;
    cumulativePercent = end;
    return `${item.warna} ${start}% ${end}%`;
  });
  const conicGradient = `conic-gradient(${gradientParts.join(', ')})`;
  // ---------------------------------------------------

  const renderBatasCard = (title, data) => (
    <div className={styles.batasCard}>
      <h3 className={styles.batasTitle}>{title}</h3>
      <div className={styles.batasList}>
        {data.map((lokasi, index) => {
          const [desa, kecamatan] = lokasi.split(', ');
          return (
            <div key={index} className={styles.batasItem}>
              <span className={styles.nomor}>{index + 1}.</span>
              <div className={styles.lokasiDetail}>
                <span className={styles.desa}>{desa}</span>
                <span className={styles.kecamatan}>Kec. {kecamatan}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}><FaMapMarkedAlt /> Peta dan Wilayah Desa</h1>
      <p className={styles.pageSubtitle}>Data Administratif, Luas, dan Batas Wilayah Desa Tegalglagah.</p>
      
      <div className={styles.statContainer}><div className={styles.statCard}><div className={styles.statIcon}><FaChartArea /></div><div className={styles.statValueContainer}><span className={styles.statValue}>{luasValue}</span><span className={styles.statUnit}>{luasUnit}</span></div><div className={styles.statLabel}>Total Luas Wilayah</div></div></div>
      
      <div className={styles.mapContainer}><img src={petaDesaImage} alt="Peta Desa Tegalglagah" className={styles.mapImage} /></div>
      
      <div className={styles.batasSection}><h2 className={styles.sectionTitle}>Batas-Batas Wilayah</h2><div className={styles.batasGrid}>{renderBatasCard('Utara', batasUtara)}{renderBatasCard('Timur', batasTimur)}{renderBatasCard('Selatan', batasSelatan)}{renderBatasCard('Barat', batasBarat)}</div></div>
      
      {/* BAGIAN BARU: GRAFIK PENGGUNAAN LAHAN */}
      <div className={styles.lahanSection}>
        <h2 className={styles.sectionTitle}>Luas Wilayah Menurut Penggunaan</h2>
        <div className={styles.lahanContent}>
          <div className={styles.lahanChartContainer}>
            {/* Mengganti <img> dengan <div> */}
            <div className={styles.donutChart} style={{ background: conicGradient }}>
              <div className={styles.chartCenterInfo}>
                <span>Total</span>
                <span className={styles.totalLahanValue}>{totalLahan.toLocaleString('id-ID')}</span>
                <span>Ha</span>
              </div>
            </div>
          </div>
          <div className={styles.lahanLegend}>
            {penggunaanLahan.map((item) => (
              <div key={item.jenis} className={styles.legendItem}>
                <span className={styles.legendColor} style={{ backgroundColor: item.warna }}></span>
                <span className={styles.legendText}>{item.jenis}</span>
                <span className={styles.legendValue}>{item.luas.toLocaleString('id-ID')} Ha</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetaPage;