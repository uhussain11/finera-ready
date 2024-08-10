import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const CanvasJSChart = dynamic(
  () => import('@canvasjs/react-charts').then((module) => module.CanvasJSChart),
  { ssr: false }
);

const BacktestChart = ({ portfolioData, benchmarkData }) => {
  const [chartOptions, setChartOptions] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && portfolioData && benchmarkData) {
      const formatDataPoints = (data) =>
        data.map((value, index) => ({
          x: new Date(index),
          y: value,
        }));

      const options = {
        animationEnabled: true,
        zoomEnabled: true,
        theme: 'light2',
        title: {
          text: 'Portfolio Value vs Benchmark',
        },
        axisX: {
          valueFormatString: 'MMM YYYY',
        },
        axisY: {
          title: 'Value',
          prefix: '$',
          includeZero: false,
        },
        data: [
          {
            type: 'line',
            name: 'Portfolio Value',
            showInLegend: true,
            xValueFormatString: 'MMM YYYY',
            yValueFormatString: '$#,##0',
            dataPoints: formatDataPoints(portfolioData),
          },
          {
            type: 'line',
            name: 'Benchmark',
            showInLegend: true,
            xValueFormatString: 'MMM YYYY',
            yValueFormatString: '$#,##0',
            dataPoints: formatDataPoints(benchmarkData),
          },
        ],
      };
      setChartOptions(options);
    }
  }, [portfolioData, benchmarkData]);

  return chartOptions ? <CanvasJSChart options={chartOptions} /> : null;
};

export default BacktestChart;
