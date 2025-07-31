import React, { useState } from 'react';
import PageNavigator from './PageNavigator';
import DonutChart from './DonutChart';
import styles from './KeadaanEkonomiPage.module.css';
import { kondisiDesa } from '../data/kondisiDesaData';
import { FaMale, FaFemale, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

// Fungsi helper untuk merender satu bagian donut chart
const RenderDonutChart = ({ title, icon, chartData }) => {
  const [hoveredData, setHoveredData] = useState(null);

  return (
    <div className={styles.lahanSection}>
      <h2 className={styles.sectionTitle}>{icon}{title}</h2>
      <div className={styles.lahanContent}>
        <div className={styles.lahanVisualContainer}>
          <DonutChart 
            data={chartData} 
            onSliceHover={setHoveredData}
            valueKey="luas"
            unit="Jiwa"
          />
        </div>
        <div className={styles.lahanInfoContainer}>
          <div className={styles.lahanLegend}>
            {chartData.map((item) => (
              <div 
                key={item.jenis} 
                className={styles.legendItem} 
                onMouseEnter={() => setHoveredData(item)} 
                onMouseLeave={() => setHoveredData(null)}
              >
                <span className={styles.legendColor} style={{ backgroundColor: item.warna }}></span>
                <span className={styles.legendText}>{item.jenis} ({item.luas.toLocaleString('id-ID')} Jiwa)</span>
              </div>
            ))}
          </div>
          <div className={styles.lahanDetailContainer}>
            {hoveredData ? (
              <div className={styles.lahanDetailBox}>
                <h3>{hoveredData.jenis}</h3>
                <p>{hoveredData.detail}</p>
              </div>
            ) : (
              <div className={styles.lahanDetailPlaceholder}>
                <p>Arahkan kursor ke grafik atau legenda untuk melihat detail.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function KeadaanEkonomiPage() {
  const { 
    tenagaKerjaPria, 
    tenagaKerjaWanita, 
    kualitasAngkatanKerjaPria, 
    kualitasAngkatanKerjaWanita 
  } = kondisiDesa.ekonomi;

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Keadaan Ekonomi</h1>
      <p className={styles.pageSubtitle}>
        Informasi mengenai kondisi perekonomian dan ketenagakerjaan di Desa Tegalglagah.
      </p>
      
      {/* Seksi Komposisi Tenaga Kerja */}
      <div className={styles.chartGridContainer}>
        <RenderDonutChart 
          title="Tenaga Kerja Pria"
          icon={<FaMale style={{color: '#42A5F5'}} className={styles.sectionIcon} />}
          chartData={tenagaKerjaPria}
        />
        <RenderDonutChart 
          title="Tenaga Kerja Wanita"
          icon={<FaFemale style={{color: '#FF7043'}} className={styles.sectionIcon} />}
          chartData={tenagaKerjaWanita}
        />
      </div>

      {/* Seksi Kualitas Angkatan Kerja */}
      <div className={styles.chartGridContainer}>
        <RenderDonutChart 
          title="Kualitas Angkatan Kerja Pria"
          icon={<FaGraduationCap style={{color: '#7E57C2'}} className={styles.sectionIcon} />}
          chartData={kualitasAngkatanKerjaPria}
        />
        <RenderDonutChart 
          title="Kualitas Angkatan Kerja Wanita"
          icon={<FaGraduationCap style={{color: '#66BB6A'}} className={styles.sectionIcon} />}
          chartData={kualitasAngkatanKerjaWanita}
        />
      </div>

      <PageNavigator
        prevLink={{ path: '/kondisi-desa/sosial', title: 'Keadaan Sosial' }}
      />
    </div>
  );
}

export default KeadaanEkonomiPage;