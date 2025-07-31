import React from 'react';
import styles from './BarChart.module.css';

function BarChart({ data, title }) {
  // Cari nilai maksimum untuk menentukan skala 100%
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.chart}>
        {data.map((item) => {
          // Hitung tinggi bar dalam persentase
          const barHeight = maxValue > 0 ? (item.value / maxValue) * 100 : 0;

          return (
            <div key={item.label} className={styles.barGroup}>
              <div className={styles.value}>{item.value}</div>
              <div className={styles.barWrapper}>
                <div 
                  className={styles.bar} 
                  style={{ height: `${barHeight}%`, backgroundColor: item.color }}
                ></div>
              </div>
              <div className={styles.label}>{item.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BarChart;