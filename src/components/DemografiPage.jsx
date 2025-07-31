import React, { useState } from 'react';
import styles from './DemografiPage.module.css';
import { kondisiDesa } from '../data/kondisiDesaData';
import { FaHome, FaUsers, FaMale, FaFemale, FaGraduationCap, FaPray } from 'react-icons/fa';
import DonutChart from './DonutChart';
import StackedBarChart from './StackedBarChart';

function DemografiPage() {
  const { pria, wanita, jumlahPenduduk, jumlahKK, kepadatanPenduduk, usia, educationDistribution, religionDistribution } = kondisiDesa.demografi;
  const { maleAgeDistribution, femaleAgeDistribution } = usia;

  const [hoveredMaleAge, setHoveredMaleAge] = useState(null);
  const [hoveredFemaleAge, setHoveredFemaleAge] = useState(null);
  const [hoveredEducationData, setHoveredEducationData] = useState(null);

  const persentasePria = ((pria / jumlahPenduduk) * 100).toFixed(1);
  const persentaseWanita = ((wanita / jumlahPenduduk) * 100).toFixed(1);

  // Fungsi helper untuk render Donut Chart section
  // Sekarang 'dataSegmentsArray' diharapkan sebagai array segmen langsung
  const renderDonutChartSection = (title, dataSegmentsArray, hoveredState, setHoveredState, icon) => {
    // Memastikan format data untuk DonutChart (jenis, luas, warna)
    const donutChartData = dataSegmentsArray.map(s => ({
      jenis: s.jenis || s.label, // Gunakan s.jenis untuk data usia, s.label untuk segmen pendidikan
      luas: s.luas || s.value,   // Gunakan s.luas untuk data usia, s.value untuk segmen pendidikan
      warna: s.warna || s.color  // Gunakan s.warna untuk data usia, s.color untuk segmen pendidikan
    }));
    const totalCurrentValue = donutChartData.reduce((sum, item) => sum + item.luas, 0);
    const unit = 'Jiwa'; // Unit default, bisa diubah jika perlu

    return (
      <div className={`${styles.lahanSection} ${styles.educationDonutItem}`}>
        <h2 className={styles.sectionTitle}>{icon} {title}</h2>
        <div className={styles.lahanContent}>
          <div className={styles.lahanVisualContainer}>
            <DonutChart data={donutChartData} onSliceHover={setHoveredState} unit={unit} valueKey="luas" />
          </div>
          <div className={styles.lahanInfoContainer}>
            <div className={styles.lahanLegend}>
              {donutChartData.map((item) => (
                <div key={item.jenis} className={styles.legendItem} onMouseEnter={() => setHoveredState(item)} onMouseLeave={() => setHoveredState(null)}>
                  <span className={styles.legendColor} style={{ backgroundColor: item.warna }}></span>
                  <span className={styles.legendText}>{item.jenis} ({item.luas} Jiwa)</span>
                </div>
              ))}
            </div>
            <div className={styles.lahanDetailContainer}>
              {hoveredState ? (
                <div className={styles.lahanDetailBox}>
                  <h3>{hoveredState.jenis}</h3>
                  <p>{hoveredState.detail || `Jumlah: ${hoveredState.luas} Jiwa`}</p>
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


  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Demografi Desa</h1>
      <p className={styles.pageSubtitle}>
        Visualisasi dan rincian data kependudukan Desa Tegalglagah.
      </p>

      {/* Kontainer untuk menampung grafik utama dan legenda */}
      <div className={styles.chartSection}>
        <div
          className={styles.donutChart}
          style={{'--pria-percent': persentasePria}}
        >
          <div className={styles.chartCenterInfo}>
            <span>Total</span>
            <span className={styles.totalPenduduk}>{jumlahPenduduk}</span>
            <span>Jiwa</span>
          </div>
        </div>

        {/* Legenda untuk grafik utama */}
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

      {/* Bagian Grafik Distribusi Usia */}
      <div className={styles.ageDistributionSection}>
        {renderDonutChartSection(
          'Distribusi Usia Laki-laki',
          maleAgeDistribution, // <-- UBAH: Kirim array langsung
          hoveredMaleAge,
          setHoveredMaleAge,
          <FaMale className={styles.sectionIcon} />
        )}
        {renderDonutChartSection(
          'Distribusi Usia Perempuan',
          femaleAgeDistribution, // <-- UBAH: Kirim array langsung
          hoveredFemaleAge,
          setHoveredFemaleAge,
          <FaFemale className={styles.sectionIcon} />
        )}
      </div>

      {/* Bagian Grafik Distribusi Pendidikan (Sekarang Donut Charts) */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaGraduationCap /> Distribusi Pendidikan</h2>
        <div className={styles.educationDonutGridContainer}>
          {educationDistribution.map((dataItem, index) => (
            <React.Fragment key={index}>
              {renderDonutChartSection(
                dataItem.category, // Judul
                dataItem.segments, // <-- UBAH: Kirim segments langsung
                hoveredEducationData,
                setHoveredEducationData,
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bagian Grafik Distribusi Agama */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaPray /> Distribusi Agama</h2>
        <div className={styles.stackedBarChartContainer}>
          {religionDistribution.map((dataItem, index) => (
            <StackedBarChart
              key={index}
              data={dataItem}
              title={dataItem.category}
              isGridItem={true}
            />
          ))}
        </div>
      </div>


      {/* Bagian Kartu Rincian Data */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Rincian Data</h2>
        <div className={styles.infoCardsGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}><FaHome /></div>
            <div className={styles.infoValue}>{jumlahKK} <span className={styles.infoUnit}>KK</span></div>
            <div className={styles.infoLabel}>Jumlah Kepala Keluarga</div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}><FaUsers /></div>
            <div className={styles.infoValue}>{kepadatanPenduduk.split('/')[0]}<span className={styles.infoUnit}>/{kepadatanPenduduk.split('/')[1]}</span></div>
            <div className={styles.infoLabel}>Kepadatan Penduduk</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemografiPage;