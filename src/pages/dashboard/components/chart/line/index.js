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
        borderColor: 'rgba(24, 20, 243, 1)',
        tension: 0.4,
        fill: true,
      }),
    ],
  },
  options: {
    maintainAspectRatio: true,
    responsive: true,
    layout: {
      padding: 20,
    },
    elements: {
      point: {
        pointStyle: false,
      },
    },
    plugins: {
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
  },
});
