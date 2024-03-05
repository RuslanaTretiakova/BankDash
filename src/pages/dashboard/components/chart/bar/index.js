import { Chart } from 'chart.js';
import { createDataset } from '@/shared/utils/chart';

const data = [
  { days: 'Sun', deposit: 200, withdraw: 100 },
  { days: 'Mon', deposit: 100, withdraw: 200 },
  { days: 'Tue', deposit: 50, withdraw: 100 },
  { days: 'Wed', deposit: 200, withdraw: 400 },
  { days: 'Thu', deposit: 400, withdraw: 450 },
  { days: 'Fri', deposit: 100, withdraw: 100 },
  { days: 'Sat', deposit: 450, withdraw: 400 },
];

const baseDataset = {
  borderWidth: 8,
  borderColor: 'rgba(0, 0, 0, 0.0)',
};

const datasets = [
  createDataset({
    label: 'Deposit',
    data: data.map((row) => row.deposit),
    backgroundColor: 'rgb(24, 20, 243)',
    ...baseDataset,
  }),
  createDataset({
    label: 'Withdraw',
    data: data.map((row) => row.withdraw),
    backgroundColor: 'rgb(22, 219, 204)',
    ...baseDataset,
  }),
];

new Chart(document.getElementById('bar-chart'), {
  type: 'bar',
  data: {
    datasets,
    labels: data.map((row) => row.days),
  },
  options: {
    scales: {
      y: {
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
        },
      },
    },
    responsive: true,
    layout: {
      padding: 30,
    },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          pointStyle: 'circle',
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 100,
      },
    },
  },
});
