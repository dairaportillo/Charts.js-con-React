import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Asistidos', 'Ausentes'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19],
      backgroundColor: [
        'rgba(139,171,122, 0.2)',
        'rgba(29,94,105)',
      ],
      borderColor: [
        'rgba(139,171,122, 1)',
        'rgba(29,94,105)',
      ],
      borderWidth: 1,
    },
  ],
};

export function DoughnutChart() {
  return <Doughnut data={data} />;
}
