import React from 'react';
import styles from './VisiMisiPage.module.css';
import PageNavigator from './PageNavigator'; // Impor komponen navigasi

function VisiMisiPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Visi & Misi</h1>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Visi</h2>
        <blockquote className={styles.visionStatement}>
          Mewujudkan Brebes sebagai Kabupaten yang : “BREBES BERES” (Berkeadaban, Ekonomi Tangguh, Responsif, Edukatif, Sehat dan Sejahtera)
        </blockquote>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Misi</h2>
        <ol className={styles.missionList}>
          <li>Masyarakat Brebes yang berketuhanan, taat hukum, toleran, dan berakhlakul karimah.</li>
          <li>Mewujudkan pembangunan yang bersih, berkeadilan, berkemajuan, berkelanjutan, dan pro-investasi, dengan pembangunan yang berpihak kepada rakyat kecil.</li>
          <li>Menekan angka pengangguran, mengurangi kemiskinan, dan memperkuat ekonomi kreatif.</li>
          <li>Pelayanan publik yang responsif dan ramah bagi perempuan, anak-anak, lansia, dan saudara-saudara kita yang berkebutuhan khusus.</li>
          <li>Meningkatkan kualitas sumber daya manusia yang sehat, tangguh, dan berdaya guna.</li>
          <li>Memajukan segala potensi yang dimiliki oleh Brebes, dari sektor pertanian, perikanan, pariwisata hingga industri kreatif.</li>
        </ol>
      </div>

      {/* Tambahkan navigator di sini */}
      <PageNavigator
        prevLink={{ path: '/profil/sejarah', title: 'Sejarah Desa' }}
        nextLink={{ path: '/profil/struktur-organisasi', title: 'Struktur Organisasi' }}
      />
    </div>
  );
}

export default VisiMisiPage;