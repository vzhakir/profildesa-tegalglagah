import React, { useState } from 'react';
import PageNavigator from './PageNavigator';
import styles from './MasalahPotensiPage.module.css';
import { kondisiDesa } from '../data/kondisiDesaData';
import { 
  FaUniversity, FaGraduationCap, FaShieldAlt, FaBroadcastTower, FaWater,
  FaMosque, FaFutbol, FaHeartbeat, FaBolt, FaTrashAlt
} from 'react-icons/fa';
import DonutChart from './DonutChart';

// Komponen tabel generik untuk data key-value
const SimpleTableCard = ({ title, data }) => (
  <div className={styles.tableContainer}>
    <h3 className={styles.cardTitle}>{title}</h3>
    <table className={styles.dataTable}>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.label}</td>
            <td>{item.nilai}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Komponen tabel untuk data pendidikan (4 kolom)
const PendidikanTableCard = ({ lembaga }) => (
    <div className={styles.tableContainer}>
        <table className={`${styles.dataTable} ${styles.pendidikanTable}`}>
            <thead>
                <tr><th colSpan="4">{lembaga.kategori}</th></tr>
                <tr className={styles.subHeader}>
                    <th>Nama</th>
                    <th>Jumlah</th>
                    <th>Status</th>
                    <th>Kepemilikan</th>
                </tr>
            </thead>
            <tbody>
                {lembaga.data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.nama}</td>
                        <td>{item.jumlah}</td>
                        <td>{item.status}</td>
                        <td>{item.pemilik}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

// Komponen tabel kustom untuk data dengan banyak kolom (seperti komunikasi)
const CustomTableCard = ({ title, subkategori, tabelData }) => (
  <div className={styles.tableContainer}>
    <h3 className={styles.cardTitle}>{title}</h3>
    {subkategori && subkategori.length > 0 && (
      <div className={styles.subCategoryList}>
        {subkategori.map((item, index) => (
          <p key={index}><strong>{item.label}:</strong> {item.nilai}</p>
        ))}
      </div>
    )}
    {tabelData && (
      <table className={`${styles.dataTable} ${styles.customTable}`}>
        <thead>
          <tr>
            {tabelData.headers.map(header => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {tabelData.rows.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);


function MasalahPotensiPage() {
  const { kelembagaan, prasaranaKomunikasi, airDanSanitasi, prasaranaLain } = kondisiDesa.masalahDanPotensi;
  
  // State untuk hover charts
  const [hoveredAirData, setHoveredAirData] = useState(null);
  const [hoveredPrasaranaKes, setHoveredPrasaranaKes] = useState(null);
  const [hoveredSaranaKes, setHoveredSaranaKes] = useState(null);

  // Data Kelembagaan
  const lembagaPemerintahan = kelembagaan.find(l => l.kategori === 'Lembaga Pemerintahan');
  const bpd = kelembagaan.find(l => l.kategori.includes('BPD'));
  const rw = kelembagaan.find(l => l.kategori.includes('Rukun Warga'));
  const rt = kelembagaan.find(l => l.kategori.includes('Rukun Tetangga'));
  const karangTaruna = kelembagaan.find(l => l.kategori.includes('Karang Taruna'));
  const lembagaPendidikan = kelembagaan.find(l => l.kategori === 'Lembaga Pendidikan');
  const lembagaKeamanan = kelembagaan.find(l => l.kategori === 'Lembaga Keamanan');

  // Data Prasarana Komunikasi
  const teleponData = prasaranaKomunikasi.find(p => p.kategori === 'Telepon');
  const kantorPosData = prasaranaKomunikasi.find(p => p.kategori === 'Kantor Pos');
  const radioTvData = prasaranaKomunikasi.find(p => p.kategori === 'Radio/TV');
  const koranData = prasaranaKomunikasi.find(p => p.kategori === 'Koran & Media Cetak');

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Masalah dan Potensi Desa</h1>
      <p className={styles.pageSubtitle}>
        Analisis masalah yang dihadapi serta potensi yang dapat dikembangkan di Desa Tegalglagah.
      </p>

      {/* --- KELEMBAGAAN --- */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaUniversity /> Potensi Kelembagaan</h2>
        <div className={styles.columnsContainer}>
          <div className={styles.column}><SimpleTableCard title={lembagaPemerintahan.kategori} data={lembagaPemerintahan.data} /></div>
          <div className={styles.column}>
            <SimpleTableCard title={bpd.kategori} data={bpd.data} />
            <SimpleTableCard title={rt.kategori} data={rt.data} />
          </div>
          <div className={styles.column}>
            <SimpleTableCard title={rw.kategori} data={rw.data} />
            <SimpleTableCard title={karangTaruna.kategori} data={karangTaruna.data} />
          </div>
        </div>
      </div>
      
      {/* --- PENDIDIKAN --- */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaGraduationCap /> Lembaga Pendidikan</h2>
        {lembagaPendidikan && <PendidikanTableCard lembaga={lembagaPendidikan} />}
      </div>

      {/* --- KEAMANAN --- */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaShieldAlt /> Lembaga Keamanan</h2>
        <div className={styles.singleColumnContainer}>
          {lembagaKeamanan && <SimpleTableCard title={lembagaKeamanan.kategori} data={lembagaKeamanan.data} />}
        </div>
      </div>

      {/* --- PRASARANA KOMUNIKASI --- */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaBroadcastTower /> Prasarana Komunikasi</h2>
        <div className={styles.columnsContainer}>
          <div className={styles.column}>
            {teleponData && <CustomTableCard title={teleponData.kategori} subkategori={teleponData.subkategori} tabelData={teleponData.tabel} />}
            {koranData && <SimpleTableCard title={koranData.kategori} data={koranData.data} />}
          </div>
          <div className={styles.column}>
            {kantorPosData && <SimpleTableCard title={kantorPosData.kategori} data={kantorPosData.data} />}
            {radioTvData && <CustomTableCard title={radioTvData.kategori} subkategori={radioTvData.subkategori} tabelData={radioTvData.tabel} />}
          </div>
        </div>
      </div>

      {/* --- PRASARANA AIR BERSIH & SANITASI --- */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaWater /> Prasarana Air Bersih & Sanitasi</h2>
        <div className={styles.flexContainer}>
          <div className={styles.chartSide}>
            <div className={styles.chartVisualContainer}>
              <DonutChart 
                data={airDanSanitasi.prasaranaAirBersih}
                valueKey="jumlah"
                unit="Unit"
                onSliceHover={setHoveredAirData}
              />
            </div>
            <div className={styles.chartInfoContainer}>
              <div className={styles.chartLegend}>
                {airDanSanitasi.prasaranaAirBersih.map((item) => (
                  <div key={item.jenis} className={styles.legendItem} onMouseEnter={() => setHoveredAirData(item)} onMouseLeave={() => setHoveredAirData(null)}>
                    <span className={styles.legendColor} style={{ backgroundColor: item.warna }}></span>
                    <span className={styles.legendText}>{item.jenis} ({item.jumlah} Unit)</span>
                  </div>
                ))}
              </div>
              <div className={styles.chartDetailContainer}>
                {hoveredAirData ? (
                  <div className={styles.chartDetailBox}><h3>{hoveredAirData.jenis}</h3><p>{hoveredAirData.detail}</p></div>
                ) : (
                  <div className={styles.chartDetailPlaceholder}><p>Arahkan kursor ke grafik atau legenda untuk melihat detail.</p></div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.tableSide}>
            <SimpleTableCard title="Sanitasi" data={airDanSanitasi.sanitasi} />
          </div>
        </div>
      </div>

      {/* --- PRASARANA PERIBADATAN & OLAHRAGA --- */}
      <div className={styles.section}>
        <div className={styles.columnsContainer}>
          <div className={styles.column}>
            <SimpleTableCard title={<><FaMosque /> Prasarana Peribadatan</>} data={prasaranaLain.peribadatan} />
          </div>
          <div className={styles.column}>
            <SimpleTableCard title={<><FaFutbol /> Prasarana Olahraga</>} data={prasaranaLain.olahraga} />
          </div>
        </div>
      </div>

      {/* --- PRASARANA & SARANA KESEHATAN --- */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaHeartbeat /> Prasarana & Sarana Kesehatan</h2>
        <div className={styles.columnsContainer}>
          <div className={styles.chartSide}>
            <h3 className={styles.mainChartTitle}>Prasarana Kesehatan</h3>
            <div className={styles.chartVisualContainer}><DonutChart data={prasaranaLain.kesehatan.prasarana} valueKey="jumlah" unit="Unit" onSliceHover={setHoveredPrasaranaKes} /></div>
            <div className={styles.chartInfoContainer}>
              <div className={styles.chartLegend}>
                {prasaranaLain.kesehatan.prasarana.map(item => <div key={item.jenis} className={styles.legendItem} onMouseEnter={() => setHoveredPrasaranaKes(item)} onMouseLeave={() => setHoveredPrasaranaKes(null)}><span className={styles.legendColor} style={{backgroundColor: item.warna}}></span><span className={styles.legendText}>{item.jenis} ({item.jumlah} Unit)</span></div>)}
              </div>
              <div className={styles.chartDetailContainer}>
                {hoveredPrasaranaKes ? <div className={styles.chartDetailBox}><h3>{hoveredPrasaranaKes.jenis}</h3><p>{hoveredPrasaranaKes.detail}</p></div> : <div className={styles.chartDetailPlaceholder}><p>Arahkan kursor untuk detail.</p></div>}
              </div>
            </div>
          </div>
          <div className={styles.chartSide}>
            <h3 className={styles.mainChartTitle}>Sarana Kesehatan</h3>
            <div className={styles.chartVisualContainer}><DonutChart data={prasaranaLain.kesehatan.sarana} valueKey="jumlah" unit="Orang" onSliceHover={setHoveredSaranaKes} /></div>
            <div className={styles.chartInfoContainer}>
              <div className={styles.chartLegend}>
                {prasaranaLain.kesehatan.sarana.map(item => <div key={item.jenis} className={styles.legendItem} onMouseEnter={() => setHoveredSaranaKes(item)} onMouseLeave={() => setHoveredSaranaKes(null)}><span className={styles.legendColor} style={{backgroundColor: item.warna}}></span><span className={styles.legendText}>{item.jenis} ({item.jumlah} Orang)</span></div>)}
              </div>
              <div className={styles.chartDetailContainer}>
                {hoveredSaranaKes ? <div className={styles.chartDetailBox}><h3>{hoveredSaranaKes.jenis}</h3><p>{hoveredSaranaKes.detail}</p></div> : <div className={styles.chartDetailPlaceholder}><p>Arahkan kursor untuk detail.</p></div>}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- PRASARANA ENERGI & KEBERSIHAN --- */}
      <div className={styles.section}>
        <div className={styles.columnsContainer}>
          <div className={styles.column}>
            <SimpleTableCard title={<><FaBolt /> Prasarana Energi</>} data={prasaranaLain.energi} />
          </div>
          <div className={styles.column}>
            <SimpleTableCard title={<><FaTrashAlt /> Prasarana Kebersihan</>} data={prasaranaLain.kebersihan} />
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