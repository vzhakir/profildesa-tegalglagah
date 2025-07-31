import React, { useState } from 'react';
import styles from './KeadaanSosialPage.module.css';
import { kondisiDesa } from '../data/kondisiDesaData';
import DonutChart from './DonutChart';
import StackedBarChart from './StackedBarChart';
import { FaGraduationCap, FaPray, FaUsers, FaWheelchair } from 'react-icons/fa';
import PageNavigator from './PageNavigator';

function KeadaanSosialPage() {
  const { educationDistribution, religionCombinedDistribution, etnis, disabilitas } = kondisiDesa.demografi;

  const RenderIndividualDonutChartSection = ({ title, dataSegmentsArray, icon, disableLegendHover = false }) => {
    const [hoveredData, setHoveredData] = useState(null);
    const donutChartData = dataSegmentsArray.map(s => ({
      jenis: s.jenis || s.label,
      luas: s.luas || s.value,
      warna: s.warna || s.color
    }));
    const totalCurrentValue = donutChartData.reduce((sum, item) => sum + item.luas, 0);
    const unit = 'Jiwa';

    if (totalCurrentValue === 0) {
      return (
        <div className={`${styles.lahanSection} ${styles.educationDonutItem}`}>
          <h2 className={styles.sectionTitle}>{icon} {title}</h2>
          <div className={styles.lahanContent}>
            <p className={styles.noDataMessage}>Tidak ada data untuk ditampilkan.</p>
          </div>
        </div>
      );
    }

    return (
      <div className={`${styles.lahanSection} ${styles.educationDonutItem}`}>
        <h2 className={styles.sectionTitle}>{icon} {title}</h2>
        <div className={styles.lahanContent}>
          <div className={styles.lahanVisualContainer}>
            <DonutChart data={donutChartData} onSliceHover={setHoveredData} unit={unit} valueKey="luas" />
          </div>
          <div className={styles.lahanInfoContainer}>
            <div className={styles.lahanLegend}>
              {donutChartData.map((item) => (
                <div
                  key={item.jenis}
                  className={`${styles.legendItem} ${disableLegendHover ? styles.noHover : ''}`}
                  onMouseEnter={disableLegendHover ? null : () => setHoveredData(item)}
                  onMouseLeave={disableLegendHover ? null : () => setHoveredData(null)}
                >
                  <span className={styles.legendColor} style={{ backgroundColor: item.warna }}></span>
                  <span className={styles.legendText}>{item.jenis} ({item.luas} Jiwa)</span>
                </div>
              ))}
            </div>
            <div className={styles.lahanDetailContainer}>
              {hoveredData ? (
                <div className={styles.lahanDetailBox}>
                  <h3>{hoveredData.jenis}</h3>
                  <p>{hoveredData.detail || `Jumlah: ${hoveredData.luas} Jiwa`}</p>
                </div>
              ) : (
                <div className={`${styles.lahanDetailPlaceholder} ${disableLegendHover ? styles.placeholderLegendOnly : ''}`}>
                  <p>Arahkan kursor ke grafik atau legenda untuk melihat detail.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Keadaan Sosial Desa</h1>
      <p className={styles.pageSubtitle}>
        Informasi mengenai kondisi sosial, pendidikan, dan agama penduduk Desa Tegalglagah.
      </p>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaGraduationCap /> Distribusi Pendidikan</h2>
        <div className={styles.educationDonutGridContainer}>
          {educationDistribution.map((dataItem, index) => (
            <RenderIndividualDonutChartSection
              key={index}
              title={dataItem.category}
              dataSegmentsArray={dataItem.segments}
              disableLegendHover={false}
            />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaPray /> Distribusi Agama</h2>
        <div className={styles.stackedBarChartContainer}>
          <StackedBarChart
            data={religionCombinedDistribution}
            title={religionCombinedDistribution.category}
            isGridItem={false}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaUsers /> Distribusi Etnis</h2>
        <div className={styles.educationDonutGridContainer}>
          {etnis.map((item, index) => {
            const totalValue = item.segments.reduce((sum, seg) => sum + seg.value, 0);
            return totalValue > 0 ? (
              <RenderIndividualDonutChartSection
                key={index}
                title={item.category}
                dataSegmentsArray={item.segments}
                disableLegendHover={false}
              />
            ) : null;
          })}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaWheelchair /> Distribusi Disabilitas</h2>
        <div className={styles.educationDonutGridContainer}>
          {disabilitas.map((item, index) => {
            const totalValue = item.segments.reduce((sum, seg) => sum + seg.value, 0);
            return totalValue > 0 ? (
              <RenderIndividualDonutChartSection
                key={index}
                title={item.category}
                dataSegmentsArray={item.segments}
                disableLegendHover={false}
              />
            ) : null;
          })}
        </div>
      </div>

      <PageNavigator
        prevLink={{ path: '/kondisi-desa/demografi', title: 'Demografi' }}
        nextLink={{ path: '/kondisi-desa/ekonomi', title: 'Keadaan Ekonomi' }}
      />
    </div>
  );
}

export default KeadaanSosialPage;