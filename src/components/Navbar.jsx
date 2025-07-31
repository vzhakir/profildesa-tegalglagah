import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logoDesa from '../assets/shallots.svg';

function Navbar() {
  const getLinkClass = ({ isActive }) =>
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        <img src={logoDesa} alt="Logo Desa Tegalglagah" className={styles.logo} />
        <span>Desa Tegalglagah</span>
      </Link>
      
      <ul className={styles.navMenu}>
        <li className={styles.navItem}>
          <NavLink to="/" className={getLinkClass}>Home</NavLink>
        </li>

        <li className={styles.navItem}>
          <NavLink 
            to="/profil" 
            className={getLinkClass}
            onClick={(e) => e.preventDefault()}
          >
            Profil <span className={styles.arrow}>▼</span>
          </NavLink>
          <ul className={styles.dropdownMenu}>
            <li><Link to="/profil/sejarah">Sejarah Desa</Link></li>
            <li><Link to="/profil/visi-misi">Visi & Misi</Link></li>
            <li><Link to="/profil/struktur-organisasi">Struktur Organisasi</Link></li>
          </ul>
        </li>

        <li className={styles.navItem}>
           <NavLink 
            to="/kondisi-desa" 
            className={getLinkClass}
            onClick={(e) => e.preventDefault()}
          >
            Kondisi Desa <span className={styles.arrow}>▼</span>
          </NavLink>
          <ul className={styles.dropdownMenu}>
            <li><Link to="/kondisi-desa/peta">Peta dan Wilayah Desa</Link></li>
            <li><Link to="/kondisi-desa/demografi">Demografi</Link></li>
            <li><Link to="/kondisi-desa/sosial-ekonomi">Sosial & Ekonomi</Link></li> {/* Tautan Diperbarui */}
          </ul>
        </li>

        <li className={styles.navItem}>
           <NavLink to="/masalah-dan-potensi" className={getLinkClass}>Masalah dan Potensi</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;