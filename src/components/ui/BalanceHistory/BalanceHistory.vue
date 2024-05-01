<template>
  <Line :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
} from 'chart.js'
import { Line } from 'vue-chartjs'
import * as chartConfig from './chartConfig.ts'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip)

export default {
  name: 'App',
  components: {
    Line
  },
  data() {
    return chartConfig
  }
}
</script>
