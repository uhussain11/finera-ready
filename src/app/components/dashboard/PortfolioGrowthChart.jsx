import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, Filler);

const PortfolioGrowthChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Portfolio Growth',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: 'start',
        backgroundColor: (context) => {
          const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, 'rgba(75,192,192,0.4)');
          gradient.addColorStop(1, 'rgba(75,192,192,0.1)');
          return gradient;
        },
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: 'rgba(75,192,192,1)',
        tension: 0.4, // Smooth the line
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Portfolio Growth Over Time',
        color: 'rgba(255, 255, 255, 0.9)',
        font: {
          size: 18,
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleFont: {
          size: 16,
        },
        bodyFont: {
          size: 14,
        },
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.formattedValue}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(200,200,200,0.2)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
    animation: {
      duration: 1000,
      easing: 'easeInOutQuad',
    },
  };

  return (
    <div className="bg-slate-800 rounded-md p-6 shadow-lg">
      <Line data={data} options={options} height={400} />
    </div>
  );
};

export default PortfolioGrowthChart;
