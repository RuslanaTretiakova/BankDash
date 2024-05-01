export const data = {
  labels: ['Entertainment', 'Investment', 'Bill expense', 'Others'],
  datasets: [
    {
      backgroundColor: [
        'rgb(24, 20, 243, 1)',
        'rgb(250, 0, 255, 1)',
        'rgb(252, 121, 0, 1)',
        'rgb(52, 60, 106, 1)'
      ],
      data: [30, 20, 15, 35]
    }
  ]
}

export const options = {
  maintainAspectRatio: true,
  responsive: true,
  layout: {
    padding: 20
  },
  plugins: {
    datalabels: {
      display: true,
      formatter: (value, context) => {
        const label = data[context.dataIndex].expense
        const count = data[context.dataIndex].count
        return `${count + '%'}\n${label}`
      },
      color: 'rgb(255, 255, 255, 1)',
      align: 'center',
      textAlign: 'center',
      font: {
        size: 15,
        weight: 'bold'
      }
    },
    legend: {
      display: false
    }
  }
}
