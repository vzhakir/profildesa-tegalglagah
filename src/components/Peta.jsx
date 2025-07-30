import React, { useState } from 'react';
import styles from './Peta.module.css';
import { 
  FaMapMarkedAlt, FaChartArea, FaCloudShowersHeavy, FaTemperatureHigh, FaWater, 
  FaPalette, FaCube, FaMountain, FaSeedling, FaSun, FaBuilding 
} from 'react-icons/fa';
import petaDesaImage from '../assets/peta.jpg';
import { kondisiDesa } from '../data/kondisiDesaData';
import DonutChart from './DonutChart';

function PetaPage() {
  const { batasUtara, batasSelatan, batasBarat, batasTimur, luas, penggunaanLahan } = kondisiDesa.wilayah;
  const [luasValue, luasUnit] = luas.split(' ');
  const [hoveredLahan, setHoveredLahan] = useState(null);

  // Menyiapkan ikon untuk setiap jenis lahan
  const iconMap = {
    'Tanah Sawah': <FaSeedling />,
    'Tanah Kering': <FaSun />,
    'Tanah Fasilitas Umum': <FaBuilding />
  };

  const dataIklim = { bulanHujan: 6, suhu: 28, ketinggian: 5 };
  const dataTanah = { warna: "Hitam", tekstur: "Lempungan", kemiringan: 1 };

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

      <div className={styles.statGrid}>
        <div className={`${styles.statCard} ${styles.totalCard}`}>
          <div className={styles.statIcon}><FaChartArea /></div>
          <div className={styles.statValueContainer}>
            <span className={styles.statValue}>{luasValue}</span>
            <span className={styles.statUnit}>{luasUnit}</span>
          </div>
          <div className={styles.statLabel}>Total Luas Wilayah</div>
        </div>

        {penggunaanLahan.map((item) => (
          <div key={item.jenis} className={styles.statCard}>
            <div className={styles.statIcon} style={{ color: item.warna }}>
              {iconMap[item.jenis] || <FaChartArea />}
            </div>
            <div className={styles.statValueContainer}>
              <span className={styles.statValue}>
                {item.luas.toLocaleString('id-ID', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </span>
              <span className={styles.statUnit}>Ha</span>
            </div>
            <div className={styles.statLabel}>{item.jenis}</div>
          </div>
        ))}
      </div>
      
      <div className={styles.mapContainer}><img src={petaDesaImage} alt="Peta Desa Tegalglagah" className={styles.mapImage} /></div>
      
      <div className={styles.batasSection}><h2 className={styles.sectionTitle}>Batas-Batas Wilayah</h2><div className={styles.batasGrid}>{renderBatasCard('Utara', batasUtara)}{renderBatasCard('Timur', batasTimur)}{renderBatasCard('Selatan', batasSelatan)}{renderBatasCard('Barat', batasBarat)}</div></div>
      
      <div className={styles.lahanSection}>
        <h2 className={styles.sectionTitle}>Luas Wilayah Menurut Penggunaan</h2>
        <div className={styles.lahanContent}>
          <div className={styles.lahanVisualContainer}><DonutChart data={penggunaanLahan} onSliceHover={setHoveredLahan} /></div>
          <div className={styles.lahanInfoContainer}>
            <div className={styles.lahanLegend}>{penggunaanLahan.map((item) => (<div key={item.jenis} className={styles.legendItem} onMouseEnter={() => setHoveredLahan(item)} onMouseLeave={() => setHoveredLahan(null)}><span className={styles.legendColor} style={{ backgroundColor: item.warna }}></span><span className={styles.legendText}>{item.jenis}</span></div>))}</div>
            <div className={styles.lahanDetailContainer}>{hoveredLahan ? (<div className={styles.lahanDetailBox}><h3>{hoveredLahan.jenis}</h3>{typeof hoveredLahan.detail === 'object' ? (<div className={styles.detailListContainer}><p className={styles.detailTitle}>{hoveredLahan.detail.title}</p><ul className={styles.detailList}>{hoveredLahan.detail.items.map((item, index) => (<li key={index}>{item}</li>))}</ul></div>) : (<p>{hoveredLahan.detail}</p>)}</div>) : (<div className={styles.lahanDetailPlaceholder}><p>Arahkan kursor ke grafik atau legenda untuk melihat detail.</p></div>)}</div>
          </div>
        </div>
      </div>

      <div className={styles.iklimSection}>
        <h2 className={styles.sectionTitle}>Informasi Iklim</h2>
        <div className={styles.iklimGrid}>
          <div className={styles.iklimCard}><div className={styles.iklimIcon}><FaCloudShowersHeavy /></div><div className={styles.iklimValue}>{dataIklim.bulanHujan}<span className={styles.iklimUnit}>Bulan</span></div><p className={styles.iklimLabel}>Jumlah Bulan Hujan</p></div>
          <div className={styles.iklimCard}><div className={styles.iklimIcon}><FaTemperatureHigh /></div><div className={styles.iklimValue}>{dataIklim.suhu}<span className={styles.iklimUnit}>°C</span></div><p className={styles.iklimLabel}>Suhu Rata-rata</p></div>
          <div className={styles.iklimCard}><div className={styles.iklimIcon}><FaWater /></div><div className={styles.iklimValue}>{dataIklim.ketinggian}<span className={styles.iklimUnit}>MDPL</span></div><p className={styles.iklimLabel}>Ketinggian</p></div>
        </div>
      </div>

      <div className={styles.iklimSection}>
        <h2 className={styles.sectionTitle}>Karakteristik Tanah</h2>
        <div className={styles.iklimGrid}>
          <div className={styles.iklimCard}><div className={styles.iklimIcon}><FaPalette /></div><div className={styles.tanahValue}>{dataTanah.warna}</div><p className={styles.iklimLabel}>Warna Tanah Dominan</p></div>
          <div className={styles.iklimCard}><div className={styles.iklimIcon}><FaCube /></div><div className={styles.tanahValue}>{dataTanah.tekstur}</div><p className={styles.iklimLabel}>Tekstur Tanah</p></div>
          <div className={styles.iklimCard}><div className={styles.iklimIcon}><FaMountain /></div><div className={styles.iklimValue}>{dataTanah.kemiringan}<span className={styles.iklimUnit}>°</span></div><p className={styles.iklimLabel}>Tingkat Kemiringan</p></div>
        </div>
      </div>
    </div>
  );
}

export default PetaPage;