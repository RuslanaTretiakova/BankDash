export const data = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Deposit',
      backgroundColor: 'rgb(22, 219, 204, 1)',
      data: [400, 250, 120, 100, 300, 450, 150]
    },
    {
      label: 'Withdraw',
      backgroundColor: 'rgb(24, 20, 243, 1)',
      data: [100, 250, 120, 350, 100, 450, 50]
    }
  ]
}

export const options = {
  borderWidth: 10,
  borderColor: 'rgba(0, 0, 0, 0.0)',
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        display: true
      }
    },
    x: {
      grid: {
        drawOnChartArea: false,
        drawBorder: false
      }
    }
  },
  responsive: true,
  layout: {
    padding: 20
  },
  plugins: {
    datalabels: {
      display: false
    },
    legend: {
      labels: {
        boxWidth: 15,
        boxHeight: 15,
        usePointStyle: true,
        font: {
          size: 15,
          color: 'rgba(113, 142, 191, 1)'
        }
      },
      title: {
        color: 'rgba(113, 142, 191, 1)'
      },
      position: 'top',
      align: 'end'
    }
  },
  elements: {
    bar: {
      borderRadius: 100,
      borderSkipped: false
    }
  }
}
