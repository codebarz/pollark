import React, { useState, useEffect } from 'react';
// import Chart from 'chart.js';

import Chart from 'react-apexcharts';

function Charts() {
  const [chartState, setChartState] = useState({
    options: {
      chart: {
        id: 'basic-bar'
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  });

  return (
    <main>
      <Chart
        options={chartState.options}
        series={chartState.series}
        type="line"
      />
    </main>
  );
}

export default Charts;
