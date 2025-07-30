// src/components/Navbar.jsx

import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        Desa Tegalglagah
      </Link>
      
      {/* Ubah div menjadi ul */}
      <ul className={styles.navMenu}>
        <li className={styles.navItem}>
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
        </li>

        {/* Contoh item dengan dropdown */}
        <li className={styles.navItem}>
          <NavLink to="/profil" className={getLinkClass}>
            Profil <span className={styles.arrow}>▼</span>
          </NavLink>
          <ul className={styles.dropdownMenu}>
            <li><Link to="/profil/sejarah">Sejarah Desa</Link></li>
            <li><Link to="/profil/visi-misi">Visi & Misi</Link></li>
            <li><Link to="/profil/struktur-organisasi">Struktur Organisasi</Link></li>
          </ul>
        </li>

        {/* Contoh item dengan dropdown lain */}
        <li className={styles.navItem}>
           <NavLink to="/kondisi-desa" className={getLinkClass}>
            Kondisi Desa <span className={styles.arrow}>▼</span>
          </NavLink>
          <ul className={styles.dropdownMenu}>
            <li><Link to="/kondisi-desa/demografi">Demografi</Link></li>
            <li><Link to="/kondisi-desa/sosial">Keadaan Sosial</Link></li>
            <li><Link to="/kondisi-desa/ekonomi">Keadaan Ekonomi</Link></li>
          </ul>
        </li>

        {/* Item tanpa dropdown */}
        <li className={styles.navItem}>
           <NavLink to="/masalah-dan-potensi" className={getLinkClass}>Masalah dan Potensi</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;