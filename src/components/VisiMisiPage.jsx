// src/components/VisiMisiPage.jsx

import React from 'react';
import styles from './VisiMisiPage.module.css';

function VisiMisiPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Visi & Misi</h1>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Visi</h2>
        <blockquote className={styles.visionStatement}>
          "Terwujudnya Desa Tebing Tinggi yang Maju, Mandiri, Sejahtera, dan Berakhlak Mulia melalui Peningkatan Kualitas Sumber Daya Manusia dan Pemanfaatan Potensi Lokal yang Berkelanjutan."
        </blockquote>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Misi</h2>
        <ol className={styles.missionList}>
          <li>Meningkatkan kualitas penyelenggaraan pemerintahan desa yang bersih, transparan, dan akuntabel.</li>
          <li>Mengembangkan kualitas sumber daya manusia (SDM) melalui peningkatan akses dan mutu pendidikan serta kesehatan.</li>
          <li>Meningkatkan produktivitas perekonomian desa dengan mengoptimalkan potensi pertanian, perkebunan, dan UMKM lokal.</li>
          <li>Membangun dan meningkatkan kualitas infrastruktur dasar desa yang merata dan berwawasan lingkungan.</li>
          <li>Memperkuat kehidupan sosial kemasyarakatan yang rukun, agamis, dan berlandaskan pada nilai-nilai budaya luhur.</li>
        </ol>
      </div>
    </div>
  );
}

export default VisiMisiPage;