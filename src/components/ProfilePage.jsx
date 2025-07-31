import React from 'react';
import styles from './ProfilePage.module.css'; // Impor file CSS
import { dataProfil } from '../data/kondisiDesaData'; // Impor data dari file

function ProfilePage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Profil Desa</h1>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Sejarah</h2>
        <p>{dataProfil.sejarah}</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Visi</h2>
        <blockquote className={styles.visionStatement}>
          {dataProfil.visi}
        </blockquote>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Misi</h2>
        <ul className={styles.missionList}>
          {dataProfil.misi.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProfilePage;