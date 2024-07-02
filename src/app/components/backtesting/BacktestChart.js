import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BacktestChart = ({ portfolioData, benchmarkData }) => {
  const options = {
    animationEnabled: true,
    zoomEnabled: true,
    theme: "light2",
    title: {
      text: "Portfolio Value vs Benchmark"
    },
    axisX: {
      valueFormatString: "MMM YYYY"
    },
    axisY: {
      title: "Value",
      prefix: "$",
      includeZero: false
    },
    data: [
      {
        type: "line",
        name: "Portfolio Value",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0",
        dataPoints: portfolioData
      },
      {
        type: "line",
        name: "Benchmark",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0",
        dataPoints: benchmarkData
      }
    ]
  };

  return <CanvasJSChart options={options} />;
};

export default BacktestChart;
