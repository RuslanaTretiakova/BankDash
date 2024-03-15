// import ChartDataLabels from 'chartjs-plugin-datalabels';

import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ChartDataLabels);

import annotationPlugin from 'chartjs-plugin-annotation';
Chart.register(annotationPlugin);

import {
  Chart,
  PieController,
  ArcElement,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  LineController,
  PointElement,
  LineElement,
  Legend,
  // ChartDataLabels,
  // annotationPlugin
} from 'chart.js';

Chart.register(PieController);
Chart.register(ArcElement);
Chart.register(LinearScale);
Chart.register(CategoryScale);
Chart.register(BarController);
Chart.register(BarElement);
Chart.register(LineController);
Chart.register(PointElement);
Chart.register(LineElement);
Chart.register(Legend);
// Chart.register(ChartDataLabels);
// Chart.register(annotationPlugin);
