import React from 'react';
import styles from './DonutChart.module.css';

const getCoordsOnCircle = (angle, radius) => ({
  x: radius * Math.cos(angle),
  y: radius * Math.sin(angle),
});

const getArcPath = (startAngle, endAngle, radius, innerRadius) => {
  // Cegah arc yang terlalu besar agar tidak error
  if (endAngle - startAngle >= 2 * Math.PI) {
    endAngle = startAngle + (2 * Math.PI) - 0.0001;
  }
  
  const start = getCoordsOnCircle(startAngle, radius);
  const end = getCoordsOnCircle(endAngle, radius);
  const innerStart = getCoordsOnCircle(startAngle, innerRadius);
  const innerEnd = getCoordsOnCircle(endAngle, innerRadius);
  const largeArcFlag = endAngle - startAngle <= Math.PI ? '0' : '1';

  return [
    `M ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStart.x} ${innerStart.y}`,
    'Z',
  ].join(' ');
};

function DonutChart({ data, onSliceHover }) {
  const totalLahan = data.reduce((sum, item) => sum + item.luas, 0);
  let cumulativeAngle = -Math.PI / 2; // Mulai dari atas

  return (
    <svg viewBox="-100 -100 200 200" className={styles.chart}>
      {data.map((item) => {
        const angle = (item.luas / totalLahan) * (2 * Math.PI);
        const startAngle = cumulativeAngle;
        const endAngle = cumulativeAngle + angle;
        cumulativeAngle = endAngle;

        const pathData = getArcPath(startAngle, endAngle, 95, 65); // Sedikit ubah radius

        return (
          <path
            key={item.jenis}
            d={pathData}
            fill={item.warna}
            className={styles.slice}
            onMouseEnter={() => onSliceHover(item)}
            onMouseLeave={() => onSliceHover(null)}
          />
        );
      })}
      {/* Teks di tengah, pastikan hanya ada satu grup ini */}
      <g className={styles.centerTextGroup}>
        <text x="0" y="-18" textAnchor="middle" className={styles.centerLabel}>
        Total
        </text>
        <text x="0" y="7" textAnchor="middle" dominantBaseline="middle" className={styles.centerValue}>
        {totalLahan.toLocaleString('id-ID', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
        </text>
        <text x="0" y="35" textAnchor="middle" className={styles.centerLabel}>
        Ha
        </text>
      </g>
    </svg>
  );
}

export default DonutChart;