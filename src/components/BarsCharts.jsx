import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';


ChartJs.register(
    CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler
);

var beneficios = [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Dicimbre"];


var midata = {
    labels: meses,
    datasets: [ //cada una de las líneas del gráfico
        {
            label: 'Beneficios',
            data: beneficios,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

var misoptions = {
    responsive : true,
    animation: false,
    plugins : {
        legend : {
            display: false
        }
    },
    scales : {
        y: {
            min : -25 
        },
        x: {
            ticks: {color: 'blue'}
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

export default function BarsCharts(){
    return <Bar data={midata} options={misoptions}></Bar>
}
