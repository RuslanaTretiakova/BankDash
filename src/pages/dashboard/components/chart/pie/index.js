import { Chart } from 'chart.js';
import { createDataset } from '@/shared/utils/chart';

const data = [
  { expense: 'Entertainment', count: 30 },
  { expense: 'Investment', count: 20 },
  { expense: 'Bill expense', count: 15 },
  { expense: 'Others', count: 35 },
];

new Chart(document.getElementById('pie-chart'), {
  type: 'pie',
  data: {
    labels: data.map((row) => row.expense),
    datasets: [
      createDataset({
        data: data.map((row) => row.count),
        backgroundColor: [
          'rgb(24, 20, 243, 1)',
          'rgb(250, 0, 255, 1)',
          'rgb(252, 121, 0, 1)',
          'rgb(52, 60, 106, 1)',
        ],
        borderWidth: 10,
      }),
    ],
  },
  options: {
    maintainAspectRatio: true,
    responsive: true,
    layout: {
      padding: 20,
    },
    plugins: {
      datalabels: {
        display: true,
        formatter: (value, context) => {
          const label = data[context.dataIndex].expense;
          const count = data[context.dataIndex].count;
          return `${count + '%'}\n${label}`;
        },
        color: 'rgb(255, 255, 255, 1)',
        align: 'center',
        textAlign: 'center',
        font: {
          size: 15,
          weight: 'bold',
        },
      },
      legend: {
        display: false,
      },
    },
  },
});
