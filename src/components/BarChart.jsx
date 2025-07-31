import React from 'react';
import styles from './BarChart.module.css';

const BarChart = ({ data, title }) => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className={styles.chartContainer}>
      {title && <h3 className={styles.chartTitle}>{title}</h3>}
      <div className={styles.chart}>
        <div className={styles.yAxis}>
          <span>{maxValue}</span>
          <span>{Math.round(maxValue / 2)}</span>
          <span>0</span>
        </div>
        <div className={styles.barsContainer}>
          {data.map((item, index) => (
            <div key={index} className={styles.barGroup}>
              <div
                className={styles.bar}
                style={{
                  height: `${(item.value / maxValue) * 100}%`,
                  backgroundColor: item.color || '#4CAF50',
                }}
                title={`${item.label}: ${item.value}`} // Di sini hanya menggunakan label dan value, bukan 'Unit' default
              >
                <span className={styles.barValue}>{item.value}</span>
              </div>
              <span className={styles.barLabel}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarChart;