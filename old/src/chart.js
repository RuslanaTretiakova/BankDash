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
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import annotationPlugin from 'chartjs-plugin-annotation';

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
Chart.register(ChartDataLabels);
Chart.register(annotationPlugin);
