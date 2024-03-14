// import ChartDataLabels from 'chartjs-plugin-datalabels';
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
// Chart.register(annotationPlugin);
