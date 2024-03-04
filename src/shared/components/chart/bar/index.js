import Chart from 'chart.js/auto';

const createDataset = (label, data, backgroundColor) => {
  return {
    label: label,
    data: data,
    backgroundColor: backgroundColor,
  };
};

(async function () {
  const data = [
    { days: 'Sun', deposit: 200, withdraw: 100 },
    { days: 'Mon', deposit: 100, withdraw: 200 },
    { days: 'Tue', deposit: 50, withdraw: 100 },
    { days: 'Wed', deposit: 200, withdraw: 400 },
    { days: 'Thu', deposit: 400, withdraw: 450 },
    { days: 'Fri', deposit: 100, withdraw: 100 },
    { days: 'Sat', deposit: 450, withdraw: 400 },
  ];

  const datasets = [
    createDataset(
      'Deposit',
      data.map((row) => row.deposit),
      'rgb(24, 20, 243)',
    ),
    createDataset(
      'Withdraw',
      data.map((row) => row.withdraw),
      'rgb(22, 219, 204)',
    ),
  ];

  datasets.forEach((dataset) => {
    dataset.borderWidth = 8;
    dataset.borderColor = 'rgba(0, 0, 0, 0.0)';
  });

  new Chart(document.getElementById('bar-chart'), {
    type: 'bar',
    data: {
      labels: data.map((row) => row.days),
      datasets: datasets,
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
})();
