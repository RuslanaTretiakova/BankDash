<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip)

import { Chart } from 'chart.js'
import { createDataset } from '@/utils/chart'

const data = [
  { months: 'Jul', balance: 100 },
  { months: 'Jun', balance: 50 },
  { months: 'May', balance: 200 },
  { months: 'Apr', balance: 150 },
  { months: 'Mar', balance: 350 },
  { months: 'Feb', balance: 100 },
  { months: 'Jan', balance: 450 }
]

const canvas = ref<HTMLCanvasElement>()
let chart: Chart | null = null

onMounted(() => {
  if (!canvas.value) {
    return
  }

  chart = new Chart(canvas.value, {
    type: 'line',
    data: {
      labels: data.map((row) => row.months),
      datasets: [
        createDataset({
          data: data.map((row) => row.balance),
          borderColor: 'rgba(24, 20, 243, 1)',
          tension: 0.4,
          fill: true
        })
      ]
    },
    options: {
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
        legend: {
          display: false
        }
      }
    }
  })
})

onBeforeUnmount(() => {
  if (chart) {
    chart.destroy()
  }
})
</script>

<template>
  <canvas ref="canvas" />
</template>
