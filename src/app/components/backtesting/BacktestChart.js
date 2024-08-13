import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

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

// Add PropTypes validation
BacktestChart.propTypes = {
  portfolioData: PropTypes.arrayOf(PropTypes.number).isRequired,
  benchmarkData: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default BacktestChart;
