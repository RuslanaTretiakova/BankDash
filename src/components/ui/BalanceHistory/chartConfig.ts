export const data = {
  labels: ['Jul', 'Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan'],
  datasets: [
    {
      label: false,
      borderColor: 'rgba(24, 20, 243, 1)',
      data: [100, 50, 250, 150, 350, 100, 450]
    }
  ]
}

export const options = {
  tension: 0.4,
  fill: true,
  maintainAspectRatio: true,
  responsive: true,
  layout: {
    padding: 20
  },
  elements: {
    point: {
      pointStyle: false
    }
  },
  plugins: {
    datalabels: {
      display: false
    },
    legend: {
      display: false
    }
  }
}
