import React from 'react';
import styles from './Peta.module.css';
import { FaMapMarkedAlt } from 'react-icons/fa';
import petaDesaImage from '../assets/peta.jpg';

function PetaPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>
        <FaMapMarkedAlt /> Peta Wilayah Desa
      </h1>
      <p className={styles.pageSubtitle}>
        Peta Administratif dan Wilayah Desa Tegalglagah.
      </p>

      {/* Mengganti iframe dengan gambar */}
      <div className={styles.mapContainer}>
        <img 
          src={petaDesaImage} 
          alt="Peta Desa Tegalglagah" 
          className={styles.mapImage} 
        />
      </div>
    </div>
  );
}

export default PetaPage;