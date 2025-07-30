import React from 'react';
import styles from './LoadingScreen.module.css';
import logoDesa from '../assets/logobrebes.svg'; // Menggunakan logo desa yang sudah ada

function LoadingScreen() {
  return (
    <div className={styles.loadingContainer}>
      <img src={logoDesa} alt="Logo Desa" className={styles.loadingLogo} />
      <h1 className={styles.title}>Desa Tegalglagah</h1>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default LoadingScreen;