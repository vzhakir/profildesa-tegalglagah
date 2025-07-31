import React, { useState } from 'react';
import PageNavigator from './PageNavigator';
import DonutChart from './DonutChart';
import StackedBarChart from './StackedBarChart';
import styles from './SosialEkonomiPage.module.css'; // Akan kita buat file CSS-nya
import { kondisiDesa } from '../data/kondisiDesaData';
import { 
  FaGraduationCap, FaPray, FaUsers, FaWheelchair, 
  FaMale, FaFemale, FaBriefcase 
} from 'react-icons/fa';

// Helper function untuk merender Donut Chart Section
const RenderDonutChartSection = ({ title, icon, chartData, customClassName = '' }) => {
  const [hoveredData, setHoveredData] = useState(null);

  if (!chartData || chartData.reduce((sum, item) => sum + (item.luas || item.value), 0) === 0) {
    return null; // Jangan render apapun jika tidak ada data
  }

  return (
    <div className={`${styles.chartWrapper} ${customClassName}`}>
      <h3 className={styles.chartTitle}>{icon}{title}</h3>
      <div className={styles.chartContent}>
        <div className={styles.chartVisualContainer}>
          <DonutChart 
            data={chartData} 
            onSliceHover={setHoveredData}
            valueKey="luas"
            unit="Jiwa"
          />
        </div>
        <div className={styles.chartInfoContainer}>
          <div className={styles.chartLegend}>
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
          <div className={styles.chartDetailContainer}>
            {hoveredData ? (
              <div className={styles.chartDetailBox}>
                <h3>{hoveredData.jenis}</h3>
                <p>{hoveredData.detail}</p>
              </div>
            ) : (
              <div className={styles.chartDetailPlaceholder}>
                <p>Arahkan kursor ke grafik untuk detail.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function SosialEkonomiPage() {
  const { 
    educationDistribution, religionCombinedDistribution, etnis, disabilitas 
  } = kondisiDesa.demografi;
  const { 
    tenagaKerjaPria, tenagaKerjaWanita, 
    kualitasAngkatanKerjaPria, kualitasAngkatanKerjaWanita 
  } = kondisiDesa.ekonomi;

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Keadaan Sosial & Ekonomi</h1>
      <p className={styles.pageSubtitle}>
        Informasi mengenai kondisi sosial, kependudukan, dan perekonomian di Desa Tegalglagah.
      </p>

      {/* --- BAGIAN SOSIAL --- */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaUsers /> Keadaan Sosial</h2>
        
        {/* Pendidikan */}
        <div className={styles.gridContainer}>
          {educationDistribution.map((dataItem, index) => (
            <RenderDonutChartSection
              key={index}
              title={dataItem.category}
              icon={<FaGraduationCap className={styles.chartIcon} />}
              chartData={dataItem.segments.map(s => ({ jenis: s.label, luas: s.value, warna: s.color, detail: `Jumlah ${s.label}: ${s.value} Jiwa` }))}
              customClassName={styles.gridItem}
            />
          ))}
        </div>

        {/* Etnis & Disabilitas */}
        <div className={styles.gridContainer}>
           {etnis.map((item, index) => {
            const totalValue = item.segments.reduce((sum, seg) => sum + seg.value, 0);
            return totalValue > 0 ? (
               <RenderDonutChartSection
                key={index}
                title={item.category}
                icon={<FaUsers className={styles.chartIcon} />}
                chartData={item.segments.map(s => ({ jenis: s.label, luas: s.value, warna: s.color, detail: `Jumlah ${s.label}: ${s.value} Jiwa` }))}
                customClassName={styles.gridItem}
              />
            ) : null;
          })}
          {disabilitas.map((item, index) => (
             <RenderDonutChartSection
              key={index}
              title={item.category}
              icon={<FaWheelchair className={styles.chartIcon} />}
              chartData={item.segments.map(s => ({ jenis: s.label, luas: s.value, warna: s.color, detail: `Jumlah ${s.label}: ${s.value} Jiwa` }))}
              customClassName={styles.gridItem}
            />
          ))}
        </div>
        
        {/* Agama */}
        <div className={styles.stackedBarChartContainer}>
          <h3 className={styles.chartTitle}><FaPray className={styles.chartIcon} /> Distribusi Agama</h3>
          <StackedBarChart
            data={religionCombinedDistribution}
            isGridItem={false}
          />
        </div>
      </div>

      {/* --- BAGIAN EKONOMI --- */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaBriefcase /> Keadaan Ekonomi</h2>
        
        {/* Tenaga Kerja */}
        <div className={styles.gridContainer}>
          <RenderDonutChartSection
            title="Tenaga Kerja Pria"
            icon={<FaMale style={{color: '#42A5F5'}} className={styles.chartIcon} />}
            chartData={tenagaKerjaPria}
            customClassName={styles.gridItem}
          />
          <RenderDonutChartSection
            title="Tenaga Kerja Wanita"
            icon={<FaFemale style={{color: '#FF7043'}} className={styles.chartIcon} />}
            chartData={tenagaKerjaWanita}
            customClassName={styles.gridItem}
          />
        </div>
        
        {/* Kualitas Angkatan Kerja */}
        <div className={styles.gridContainer}>
          <RenderDonutChartSection
            title="Kualitas Angkatan Kerja Pria"
            icon={<FaGraduationCap style={{color: '#7E57C2'}} className={styles.chartIcon} />}
            chartData={kualitasAngkatanKerjaPria}
            customClassName={styles.gridItem}
          />
          <RenderDonutChartSection
            title="Kualitas Angkatan Kerja Wanita"
            icon={<FaGraduationCap style={{color: '#66BB6A'}} className={styles.chartIcon} />}
            chartData={kualitasAngkatanKerjaWanita}
            customClassName={styles.gridItem}
          />
        </div>
      </div>

      <PageNavigator
        prevLink={{ path: '/kondisi-desa/demografi', title: 'Demografi' }}
      />
    </div>
  );
}

export default SosialEkonomiPage;