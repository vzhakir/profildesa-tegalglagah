// src/pages/KondisiDesaPage.jsx

import React from 'react';
import styles from './KondisiDesaPage.module.css';
import { kondisiDesa } from '../data/kondisiDesaData'; // Impor data

// Impor ikon dari react-icons
import { FaUsers, FaMapMarkedAlt, FaGraduationCap, FaMosque } from 'react-icons/fa';

function KondisiDesaPage() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Kondisi Desa</h1>
      <p className={styles.intro}>
        Berikut adalah data umum mengenai kondisi demografi, wilayah, pendidikan,
        dan sarana prasarana di Desa Tebing Tinggi per Juli 2025.
      </p>

      {/* --- Bagian Demografi & Wilayah --- */}
      <div className={styles.gridDuaKolom}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}><FaUsers /> Demografi</h2>
          <table className={styles.dataTable}>
            <tbody>
              <tr>
                <td>Jumlah Penduduk</td>
                <td>: {kondisiDesa.demografi.jumlahPenduduk} Jiwa</td>
              </tr>
              <tr>
                <td>Jumlah Kepala Keluarga (KK)</td>
                <td>: {kondisiDesa.demografi.jumlahKK} KK</td>
              </tr>
              <tr>
                <td>Laki-laki</td>
                <td>: {kondisiDesa.demografi.pria} Jiwa</td>
              </tr>
              <tr>
                <td>Perempuan</td>
                <td>: {kondisiDesa.demografi.wanita} Jiwa</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}><FaMapMarkedAlt /> Batas Wilayah</h2>
          <table className={styles.dataTable}>
            <tbody>
              <tr>
                <td>Sebelah Utara</td>
                <td>: {kondisiDesa.wilayah.batasUtara}</td>
              </tr>
              <tr>
                <td>Sebelah Selatan</td>
                <td>: {kondisiDesa.wilayah.batasSelatan}</td>
              </tr>
              <tr>
                <td>Sebelah Barat</td>
                <td>: {kondisiDesa.wilayah.batasBarat}</td>
              </tr>
              <tr>
                <td>Sebelah Timur</td>
                <td>: {kondisiDesa.wilayah.batasTimur}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* --- Bagian Pendidikan --- */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaGraduationCap /> Sarana Pendidikan</h2>
        <div className={styles.cardGrid}>
          {kondisiDesa.pendidikan.map((sekolah) => (
            <div key={sekolah.nama} className={styles.card}>
              <h3>{sekolah.nama}</h3>
              <p><strong>Jenjang:</strong> {sekolah.jenjang}</p>
              <p><strong>Jumlah Siswa:</strong> {sekolah.jumlahSiswa}</p>
              <p><strong>Jumlah Pengajar:</strong> {sekolah.pengajar}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* --- Bagian Sarana Prasarana --- */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaMosque /> Sarana & Prasarana</h2>
        <div className={styles.cardGrid}>
          {kondisiDesa.sarana.map((item) => (
            <div key={item.nama} className={styles.card}>
              <h3>{item.nama}</h3>
              <p><strong>Jenis:</strong> {item.jenis}</p>
              <p><strong>Jumlah:</strong> {item.jumlah} Unit</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default KondisiDesaPage;