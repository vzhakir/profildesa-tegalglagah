import React, { useState, useEffect, useRef } from 'react';
import styles from './PetaPage.module.css';
import {
  FaMapMarkedAlt, FaChartArea, FaCloudShowersHeavy, FaTemperatureHigh, FaWater,
  FaPalette, FaCube, FaMountain, FaSeedling, FaSun, FaBuilding, FaRoad, FaFaucet
} from 'react-icons/fa';
import petaDesaImage from '../assets/peta.jpg';
import { kondisiDesa } from '../data/kondisiDesaData';
import DonutChart from './DonutChart';
import StackedBarChart from './StackedBarChart';
import PageNavigator from './PageNavigator';

function PetaPage() {
  const {
    batasUtara, batasSelatan, batasBarat, batasTimur,
    luas, penggunaanLahan, tanamanPangan, orbitasi,
    iklim, tanah, stackedOrbitasiData, stackedSumurPompaData
  } = kondisiDesa.wilayah;

  const [luasValue, luasUnit] = luas.split(' ');
  const [hoveredLahan, setHoveredLahan] = useState(null);
  const [hoveredTanamanPangan, setHoveredTanamanPangan] = useState(null);

  const iconMap = {
    'Tanah Sawah': <FaSeedling />,
    'Tanah Kering': <FaSun />,
    'Tanah Fasilitas Umum': <FaBuilding />
  };

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

  const statGridRef = useRef(null);
  const mapContainerRef = useRef(null);
  const batasSectionRef = useRef(null);
  const lahanSection1Ref = useRef(null);
  const lahanSection2Ref = useRef(null);
  const iklimSection1Ref = useRef(null);
  const iklimSection2Ref = useRef(null);
  const iklimSection3Ref = useRef(null);
  const iklimSection4Ref = useRef(null);
  const iklimSection5Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.isVisible);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToObserve = [
      statGridRef.current,
      mapContainerRef.current,
      batasSectionRef.current,
      lahanSection1Ref.current,
      lahanSection2Ref.current,
      iklimSection1Ref.current,
      iklimSection2Ref.current,
      iklimSection3Ref.current,
      iklimSection4Ref.current,
      iklimSection5Ref.current,
    ];
    elementsToObserve.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsToObserve.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}><FaMapMarkedAlt /> Peta dan Wilayah Desa</h1>
      <p className={styles.pageSubtitle}>Data Administratif, Luas, Batas Wilayah, Iklim, dan Orbitasi Desa Tegalglagah.</p>

      <div className={styles.statGrid} ref={statGridRef}>
        <div className={`${styles.statCard} ${styles.totalCard}`}>
          <div className={styles.statIcon}><FaChartArea /></div>
          <div className={styles.statValueContainer}><span className={styles.statValue}>{luasValue}</span><span className={styles.statUnit}>{luasUnit}</span></div>
          <p className={styles.statLabel}>Total Luas Wilayah</p>
        </div>
        {penggunaanLahan.map((item) => (
          <div key={item.jenis} className={styles.statCard}>
            <div className={styles.statIcon} style={{ color: item.warna }}>{iconMap[item.jenis] || <FaChartArea />}</div>
            <div className={styles.statValueContainer}><span className={styles.statValue}>{item.luas.toLocaleString('id-ID', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span><span className={styles.statUnit}>Ha</span></div>
            <p className={styles.statLabel}>{item.jenis}</p>
          </div>
        ))}
      </div>
      
      <div className={styles.mapContainer} ref={mapContainerRef}><img src={petaDesaImage} alt="Peta Desa Tegalglagah" className={styles.mapImage} /></div>
      <div className={styles.batasSection} ref={batasSectionRef}><h2 className={styles.sectionTitle}>Batas-Batas Wilayah</h2><div className={styles.batasGrid}>{renderBatasCard('Utara', batasUtara)}{renderBatasCard('Timur', batasTimur)}{renderBatasCard('Selatan', batasSelatan)}{renderBatasCard('Barat', batasBarat)}</div></div>

      <div className={styles.lahanSection} ref={lahanSection1Ref}>
        <h2 className={styles.sectionTitle}>Luas Wilayah Menurut Penggunaan</h2>
        <div className={styles.lahanContent}>
          <div className={styles.lahanVisualContainer}><DonutChart data={penggunaanLahan} onSliceHover={setHoveredLahan} /></div>
          <div className={styles.lahanInfoContainer}>
            <div className={styles.lahanLegend}>{penggunaanLahan.map((item) => (<div key={item.jenis} className={styles.legendItem} onMouseEnter={() => setHoveredLahan(item)} onMouseLeave={() => setHoveredLahan(null)}><span className={styles.legendColor} style={{ backgroundColor: item.warna }}></span><span className={styles.legendText}>{item.jenis}</span></div>))}</div>
            <div className={styles.lahanDetailContainer}>{hoveredLahan ? (<div className={styles.lahanDetailBox}><h3>{hoveredLahan.jenis}</h3>{typeof hoveredLahan.detail === 'object' ? (<div className={styles.detailListContainer}><p className={styles.detailTitle}>{hoveredLahan.detail.title}</p><ul className={styles.detailList}>{hoveredLahan.detail.items.map((item, index) => (<li key={index}>{item}</li>))}</ul></div>) : (<p>{hoveredLahan.detail}</p>)}</div>) : (<div className={styles.lahanDetailPlaceholder}><p>Arahkan kursor ke grafik atau legenda untuk melihat detail.</p></div>)}</div>
          </div>
        </div>
      </div>

      <div className={styles.lahanSection} ref={lahanSection2Ref}>
        <h2 className={styles.sectionTitle}>Luas Lahan untuk Tanaman Pangan</h2>
        <div className={styles.lahanContent}>
          <div className={styles.lahanVisualContainer}>
            <DonutChart data={tanamanPangan} onSliceHover={setHoveredTanamanPangan} />
          </div>
          <div className={styles.lahanInfoContainer}>
            <div className={styles.lahanLegend}>
              {tanamanPangan.map((item) => (
                <div
                  key={item.jenis}
                  className={styles.legendItem}
                  onMouseEnter={() => setHoveredTanamanPangan(item)}
                  onMouseLeave={() => setHoveredTanamanPangan(null)}
                >
                  <span className={styles.legendColor} style={{ backgroundColor: item.warna }}></span>
                  <span className={styles.legendText}>{item.jenis}</span>
                </div>
              ))}
            </div>
            <div className={styles.lahanDetailContainer}>
              {hoveredTanamanPangan ? (
                <div className={styles.lahanDetailBox}>
                  <h3>{hoveredTanamanPangan.jenis}</h3>
                  <p>{hoveredTanamanPangan.detail}</p>
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

      <div className={styles.iklimSection} ref={iklimSection1Ref}>
        <h2 className={styles.sectionTitle}>Informasi Iklim</h2>
        <div className={styles.iklimGrid}>
          <div className={styles.iklimCard}><div className={styles.iklimIcon}><FaCloudShowersHeavy /></div><div className={styles.iklimValue}>{iklim.bulanHujan}<span className={styles.iklimUnit}>Bulan</span></div><p className={styles.iklimLabel}>Jumlah Bulan Hujan</p></div>
          <div className={styles.iklimCard}><div className={styles.iklimIcon}><FaTemperatureHigh /></div><div className={styles.iklimValue}>{iklim.suhu}<span className={styles.iklimUnit}>°C</span></div><p className={styles.iklimLabel}>Suhu Rata-rata</p></div>
          <div className={styles.iklimCard}><div className={styles.iklimIcon}><FaWater /></div><div className={styles.iklimValue}>{iklim.ketinggian}<span className={styles.iklimUnit}>MDPL</span></div><p className={styles.iklimLabel}>Ketinggian</p></div>
        </div>
      </div>

      <div className={styles.iklimSection} ref={iklimSection2Ref}>
        <h2 className={styles.sectionTitle}>Karakteristik Tanah</h2>
        <div className={styles.iklimGrid}>
          <div className={styles.iklimCard}><div className={styles.iklimIcon}><FaPalette /></div><div className={styles.tanahValue}>{tanah.warna}</div><p className={styles.iklimLabel}>Warna Tanah Dominan</p></div>
          <div className={styles.iklimCard}><div className={styles.iklimIcon}><FaCube /></div><div className={styles.tanahValue}>{tanah.tekstur}</div><p className={styles.iklimLabel}>Tekstur Tanah</p></div>
          <div className={styles.iklimCard}><div className={styles.iklimIcon}><FaMountain /></div><div className={styles.iklimValue}>{tanah.kemiringan}<span className={styles.iklimUnit}>°</span></div><p className={styles.iklimLabel}>Tingkat Kemiringan</p></div>
        </div>
      </div>

      <div className={styles.iklimSection} ref={iklimSection3Ref}>
        <h2 className={styles.sectionTitle}>Jarak Orbitasi</h2>
        <div className={styles.iklimGrid}>
          <div className={styles.iklimCard}>
            <div className={styles.iklimIcon}><FaRoad /></div>
            <div className={styles.iklimValue}>{orbitasi.kecamatan.split(' ')[0]}<span className={styles.iklimUnit}>{orbitasi.kecamatan.split(' ')[1]}</span></div>
            <p className={styles.iklimLabel}>Ke Ibukota Kecamatan</p>
          </div>
          <div className={styles.iklimCard}>
            <div className={styles.iklimIcon}><FaRoad /></div>
            <div className={styles.iklimValue}>{orbitasi.kabupaten.split(' ')[0]}<span className={styles.iklimUnit}>{orbitasi.kabupaten.split(' ')[1]}</span></div>
            <p className={styles.iklimLabel}>Ke Ibukota Kabupaten/Kota</p>
          </div>
          <div className={styles.iklimCard}>
            <div className={styles.iklimIcon}><FaRoad /></div>
            <div className={styles.iklimValue}>{orbitasi.provinsi.split(' ')[0]}<span className={styles.iklimUnit}>{orbitasi.provinsi.split(' ')[1]}</span></div>
            <p className={styles.iklimLabel}>Ke Ibukota Provinsi</p>
          </div>
        </div>
      </div>

      <div className={styles.iklimSection} ref={iklimSection4Ref}>
        <h2 className={styles.sectionTitle}>Data Sumur Pompa</h2>
        <StackedBarChart
          data={stackedSumurPompaData}
          title="Total Pemanfaat Sumur Pompa"
        />
      </div>

      <div className={styles.iklimSection} ref={iklimSection5Ref}>
        <h2 className={styles.sectionTitle}>Transportasi</h2>
        <StackedBarChart
          data={stackedOrbitasiData}
          title="Total Kendaraan Umum"
        />
      </div>

      <PageNavigator
        nextLink={{ path: '/kondisi-desa/demografi', title: 'Demografi' }}
      />
    </div>
  );
}

export default PetaPage;