import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PageNavigator.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PageNavigator = ({ prevLink, nextLink }) => {
  return (
    <div className={styles.navigatorContainer}>
      {/* Tautan ke halaman sebelumnya (hanya muncul jika ada) */}
      {prevLink ? (
        <Link to={prevLink.path} className={`${styles.navLink} ${styles.prev}`}>
          <FaArrowLeft className={styles.icon} />
          <div className={styles.linkText}>
            <span>Sebelumnya</span>
            <strong>{prevLink.title}</strong>
          </div>
        </Link>
      ) : (
        <div /> // Placeholder agar tata letak tidak rusak
      )}

      {/* Tautan ke halaman berikutnya (hanya muncul jika ada) */}
      {nextLink ? (
        <Link to={nextLink.path} className={`${styles.navLink} ${styles.next}`}>
          <div className={styles.linkText}>
            <span>Berikutnya</span>
            <strong>{nextLink.title}</strong>
          </div>
          <FaArrowRight className={styles.icon} />
        </Link>
      ) : (
        <div /> // Placeholder
      )}
    </div>
  );
};

export default PageNavigator;