// src/components/Navbar.jsx

import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const getLinkClass = ({ isActive }) => 
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.brand}>
        Desa Tebing Tinggi
      </Link>
      <div className={styles.navLinks}>
        <NavLink to="/" className={getLinkClass}>Home</NavLink>
        <NavLink to="/profil" className={getLinkClass}>Profil</NavLink>
        <NavLink to="/kondisi-desa" className={getLinkClass}>Kondisi Desa</NavLink>
        {/* Tambahkan NavLink lainnya di sini */}
      </div>
    </nav>
  );
}

export default Navbar;