import React, { useState } from 'react';
import styles from './DemografiPage.module.css';
import { kondisiDesa } from '../data/kondisiDesaData';
import { FaHome, FaUsers, FaMale, FaFemale } from 'react-icons/fa'; // Pastikan FaMale dan FaFemale diimpor
import DonutChart from './DonutChart';
// Hapus import IndividualDonutChartSection dari sini jika ada

function DemografiPage() {
  const { pria, wanita, jumlahPenduduk, jumlahKK, kepadatanPenduduk, usia } = kondisiDesa.demografi; // Pastikan 'usia' diimpor
  const { maleAgeDistribution, femaleAgeDistribution } = usia; // Pastikan ini ada

  const persentasePria = ((pria / jumlahPenduduk) * 100).toFixed(1);
  const persentaseWanita = ((wanita / jumlahPenduduk) * 100).toFixed(1);

  // Fungsi helper RenderIndividualDonutChartSection yang diduplikasikan
  const RenderIndividualDonutChartSection = ({ title, dataSegmentsArray, icon, disableLegendHover = false }) => {
    const [hoveredData, setHoveredData] = useState(null); // State lokal untuk setiap instansi chart

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

      {/* Bagian Grafik Distribusi Usia - DIKEMBALIKAN KE SINI */}
      <div className={styles.ageDistributionSection}>
        <RenderIndividualDonutChartSection
          title='Distribusi Usia Laki-laki'
          dataSegmentsArray={maleAgeDistribution}
          icon={<FaMale className={styles.sectionIcon} />}
          disableLegendHover={true}
        />
        <RenderIndividualDonutChartSection
          title='Distribusi Usia Perempuan'
          dataSegmentsArray={femaleAgeDistribution}
          icon={<FaFemale className={styles.sectionIcon} />}
          disableLegendHover={true}
        />
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