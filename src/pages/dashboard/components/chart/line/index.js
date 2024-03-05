import { Chart } from 'chart.js';
import { createDataset } from '@/shared/utils/chart';

const data = [
  { months: 'Jul', balance: 100 },
  { months: 'Jun', balance: 50 },
  { months: 'May', balance: 200 },
  { months: 'Apr', balance: 150 },
  { months: 'Mar', balance: 350 },
  { months: 'Feb', balance: 100 },
  { months: 'Jan', balance: 450 },
];

new Chart(document.getElementById('line-chart'), {
  type: 'line',
  data: {
    labels: data.map((row) => row.months),
    datasets: [
      createDataset({
        data: data.map((row) => row.balance),
        borderColor: 'rgb(24, 20, 243)',
        tension: 0.4,
      }),
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          drawOnChartArea: true,
          drawBorder: true,
        },
      },
    },
    elements: {
      point: {
        pointStyle: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
