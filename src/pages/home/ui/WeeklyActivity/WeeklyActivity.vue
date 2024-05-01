<template>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, Title, Legend, BarElement, CategoryScale } from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from './chartConfig.ts'

ChartJS.register(CategoryScale, BarElement, Title, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return chartConfig
  }
}
</script>
