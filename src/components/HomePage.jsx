import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css'; // Kita akan buat file CSS ini

// Import gambar dari folder assets
import HeroBackground from '../assets/herobg.jpg';
import IconPertanian from '../assets/shallots.svg';
import IconPeternakan from '../assets/farm.svg';4


function HomePage() {
  // Data dummy untuk berita, bisa diganti dengan data dari API nanti
  const berita = [
    { id: 1, judul: "Kerja Bakti Membersihkan Sungai Desa", tanggal: "28 Juli 2025" },
    { id: 2, judul: "Penyuluhan Pertanian Organik untuk Petani Lokal", tanggal: "25 Juli 2025" },
    { id: 3, judul: "Festival Budaya Desa Sukses Digelar", tanggal: "20 Juli 2025" },
  ];

  return (
    <div className={styles.homePage}>
      {/* 1. Hero Section */}
      <section 
        className={styles.hero} 
        style={{ backgroundImage: `url(${HeroBackground})` }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>SELAMAT DATANG DI</p>
          <h1 className={styles.heroTitle}>DESA TEGALGLAGAH</h1>
          <p className={styles.heroDescription}>
            Kecamatan Bulakamba, Kabupaten Brebes, Provinsi Jawa Tengah
          </p>
          <Link to="/profil/sejarah" className={styles.ctaButton}>
            LIHAT PROFIL &gt;
          </Link>
        </div>
      </section>

      {/* 2. Potensi Desa Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Potensi Unggulan Desa</h2>
        <div className={styles.potensiGrid}>
          <div className={styles.potensiCard}>
            <img src={IconPertanian} alt="Pertanian" className={styles.potensiIcon} />
            <h3>Pertanian</h3>
            <p>Lahan subur dengan komoditas utama padi dan bawang merah.</p>
          </div>
          <div className={styles.potensiCard}>
            <img src={IconPeternakan} alt="Peternakan" className={styles.potensiIcon} />
            <h3>Peternakan</h3>
            <p>Wilayah mendukung pengembangan ternak dengan komoditas utama kambing.</p>
          </div>
        </div>
      </section>

      {/* 3. Berita Terbaru Section */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Berita Terbaru</h2>
        <div className={styles.beritaList}>
          {berita.map((item) => (
            <div key={item.id} className={styles.beritaItem}>
              <h3>{item.judul}</h3>
              <p>{item.tanggal}</p>
              <a href="#">Baca Selengkapnya</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;