import Chart from 'chart.js/auto';

(async function () {
  const data = [
    { expense: 'entertainment', count: 30 },
    { expense: 'investment', count: 20 },
    { expense: 'bill expense', count: 15 },
    { expense: 'others', count: 35 },
  ];

  new Chart(document.getElementById('pie-chard').getContext('2d'), {
    type: 'pie',
    data: {
      labels: data.map((row) => row.expense),
      datasets: [
        {
          data: data.map((row) => row.count),
          backgroundColor: [
            'rgb(24, 20, 243)',
            'rgb(250, 0, 255)',
            'rgb(252, 121, 0)',
            'rgb(52, 60, 106)',
          ],
          borderWidth: 10,
        },
      ],
    },
    options: {
      responsive: true,
      layout: {
        padding: 30,
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
})();
