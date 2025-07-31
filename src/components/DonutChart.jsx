import React from 'react';
import styles from './DonutChart.module.css';

const getCoordsOnCircle = (angle, radius) => ({
  x: radius * Math.cos(angle),
  y: radius * Math.sin(angle),
});

const getArcPath = (startAngle, endAngle, radius, innerRadius) => {
  // Handle full circle case to avoid rendering issues with arcs
  if (endAngle - startAngle >= 2 * Math.PI) {
    endAngle = startAngle + (2 * Math.PI) - 0.0001; // Subtract tiny amount to ensure arc renders
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

function DonutChart({ data, onSliceHover, valueKey = 'luas', unit = 'Ha' }) {
  const totalValue = data.reduce((sum, item) => sum + item[valueKey], 0);
  let cumulativeAngle = -Math.PI / 2; // Start from top

  // Handle case where totalValue is 0 to prevent division by zero or rendering issues
  if (totalValue === 0) {
    return (
      <svg viewBox="-100 -100 200 200" className={styles.chart}>
        {/* Render a single grey circle or handle as empty state if preferred */}
        <circle cx="0" cy="0" r="95" fill="#e0e0e0" /> {/* Outer ring */}
        <circle cx="0" cy="0" r="65" fill="#ffffff" /> {/* Inner hole */}
        <g className={styles.centerTextGroup}>
          <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" className={styles.centerLabel}>
            No Data
          </text>
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="-100 -100 200 200" className={styles.chart}>
      {data.map((item) => {
        // Only render slices if their value is greater than 0
        if (item[valueKey] > 0) {
          const angle = (item[valueKey] / totalValue) * (2 * Math.PI);
          const startAngle = cumulativeAngle;
          const endAngle = cumulativeAngle + angle;
          cumulativeAngle = endAngle;

          const pathData = getArcPath(startAngle, endAngle, 95, 65); // Outer radius 95, inner radius 65

          return (
            <path
              key={item.jenis || item.label} // Use item.label if jenis is not available
              d={pathData}
              fill={item.warna || item.color} // Use item.color if warna is not available
              className={styles.slice}
              onMouseEnter={() => onSliceHover(item)}
              onMouseLeave={() => onSliceHover(null)}
            />
          );
        }
        return null; // Don't render slice if value is 0
      })}
      <g className={styles.centerTextGroup}>
        <text x="0" y="-18" textAnchor="middle" className={styles.centerLabel}>
          Total
        </text>
        <text x="0" y="6" textAnchor="middle" dominantBaseline="middle" className={styles.centerValue}>
          {totalValue.toLocaleString('id-ID', {minimumFractionDigits: 0, maximumFractionDigits: 0})}
        </text>
        <text x="0" y="35" textAnchor="middle" className={styles.centerLabel}>
          {unit}
        </text>
      </g>
    </svg>
  );
}

export default DonutChart;