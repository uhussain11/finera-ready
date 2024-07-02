import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const AIInsightsChart = ({ pricePrediction }) => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Price Prediction"
    },
    axisX: {
      valueFormatString: "MMM YYYY"
    },
    axisY: {
      title: "Price",
      prefix: "$",
      includeZero: false
    },
    data: [
      {
        type: "line",
        name: "Price Prediction",
        showInLegend: true,
        xValueFormatString: "MMM YYYY",
        yValueFormatString: "$#,##0",
        dataPoints: pricePrediction
      }
    ]
  };

  return <CanvasJSChart options={options} />;
};

export default AIInsightsChart;
