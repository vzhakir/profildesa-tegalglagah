import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';

// Impor logo dari folder assets
import logoDesa from '../assets/logobrebes.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* --- Kolom 1: Info Desa --- */}
        <div className={styles.infoColumn}>
          <div className={styles.logoContainer}>
            <img src={logoDesa} alt="Logo Desa Tegalglagah" className={styles.logo} />
            <h2>Tegalglagah</h2>
          </div>
          <p>Desa Tegalglagah</p>
          <p>Kecamatan Bulakamba</p>
          <p>Kabupaten Brebes</p>
          <p>Provinsi Jawa Tengah</p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com/dahamkumala" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* --- Kolom 2: Menu --- */}
        <div className={styles.menuColumn}>
          <h3 className={styles.footerTitle}>Menu</h3>
          <ul className={styles.menuList}>
            <li><Link to="/sejarah">Sejarah</Link></li>
            <li><Link to="/profil">Visi & Misi</Link></li>
            <li><Link to="/kondisi-desa">Demografi</Link></li>
            <li><Link to="/profil#struktur">Struktur Organisasi</Link></li>
            <li><Link to="/potensi">Masalah dan Potensi</Link></li>
          </ul>
        </div>

        {/* --- Kolom 3: Kontak --- */}
        <div className={styles.kontakColumn}>
          <h3 className={styles.footerTitle}>Kontak</h3>
          <div className={styles.kontakInfo}>
            <FaEnvelope />
            <div className={styles.kontakText}>
              <span>Hubungi Kami Melalui</span>
              <a href="mailto:tegalglagah.desa@gmail.com">
                tegalglagah.desa@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Desa Tebing Tinggi. Semua Hak Cipta Dilindungi.</p>
      </div>
    </footer>
  );
}

export default Footer;