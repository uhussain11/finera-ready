import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PaperTradingChart = ({ portfolioData }) => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "Portfolio Value"
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
      }
    ]
  };

  return <CanvasJSChart options={options} />;
};

export default PaperTradingChart;
