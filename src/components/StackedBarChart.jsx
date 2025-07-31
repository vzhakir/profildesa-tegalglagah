import React from 'react';
import styles from './StackedBarChart.module.css';

const StackedBarChart = ({ data, title, isGridItem }) => { // Terima isGridItem
  if (!data || !data.segments || data.segments.length === 0) {
    return <div className={styles.outerContainer}><p>Tidak ada data untuk ditampilkan.</p></div>;
  }

  const totalValue = data.segments.reduce((sum, segment) => sum + segment.value, 0);
  const categoryLabel = data.category;

  return (
    <div className={`${styles.outerContainer} ${isGridItem ? styles.gridVariant : ''}`}> {/* Tambahkan class gridVariant */}
      {title && <h3 className={styles.chartTitle}>{title}</h3>}
      
      <div className={styles.chartAndLegendWrapper}>
        <div className={styles.chart}>
          {/* Y-Axis */}
          <div className={styles.yAxis}>
            <span>{totalValue}</span>
            <span>{Math.round(totalValue / 2)}</span>
            <span>0</span>
          </div>

          {/* Stacked Bar */}
          <div className={styles.barsContainer}>
            <div className={styles.barGroup}>
              <div className={styles.stackedBar}>
                {data.segments.map((segment, segIndex) => (
                  <div
                    key={segIndex}
                    className={styles.segment}
                    style={{
                      height: `${(segment.value / totalValue) * 100}%`,
                      backgroundColor: segment.color,
                    }}
                    title={`${segment.label}: ${segment.value}`}
                  >
                    {/* Opsional: Teks nilai di dalam segmen */}
                    {/* {segment.value > 0 && <span className={styles.segmentValue}>{segment.value}</span>} */}
                  </div>
                ))}
              </div>
              <span className={styles.barLabel}>{categoryLabel}</span>
            </div>
          </div>
        </div>
        
        {/* Legend */}
        <div className={styles.legend}>
          {data.segments.map((segment, index) => (
            <div key={index} className={styles.legendItem}>
              <span className={styles.legendColor} style={{ backgroundColor: segment.color }}></span>
              <span className={styles.legendText}>
                {segment.legendTextDisplay ? segment.legendTextDisplay : `${segment.label} (${segment.value})`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackedBarChart;