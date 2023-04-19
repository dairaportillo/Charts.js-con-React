import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJs, ArcElement, Tooltip, Legend,
} from 'chart.js';


ChartJs.register(
     ArcElement, Tooltip, Legend
);

var options = {
    responsive : true,
   maintainAspectRadio: false,
};

var midata = {
    labels: ['Carne', 'Jamón', 'Dulces', 'Turrón', 'Vino'],
    datasets: [ //cada una de las líneas del gráfico
        {
            label: 'Popularidad en Navidad',
            data: [35, 20, 20, 15,10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
        },
    ],
};



export default function PiesChart(){
    return <Pie data={midata} options={options}></Pie>
}
