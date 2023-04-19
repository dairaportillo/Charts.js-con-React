import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import LinesChart from './components/LinesChart'
import BarsCharts from './components/BarsCharts'
import PiesChart from './components/PiesChart'
import { DoughnutChart }  from './components/DoughnutChart'


function App() {

  return (
    <div>
      <h1 className="bg-info text-center font-monospace fw-bold lh-base">Gráfica ChartJs</h1>
      <div>
        <p className='m-2'><b>Ejemplo #1: </b> Gráfico de líneas básico</p>
        <div className='bg-ligth mx-auto px-2 border border-2 border-primary' style={{width:'450px', heigth:'230px'}}>
        </div>

        <LinesChart></LinesChart>
      </div>

      <hr className='mt-3 mb-2'/>
      <div>
        <p className='m-2'><b>Ejemplo #2: </b>Gráfico de barrras</p>
        <div className='bg-ligth mx-auto px-2 border border-2 border-primary' style={{width:'450px', heigth:'225px'}}>
        </div>
        <BarsCharts></BarsCharts>
      </div>

      <hr className='mt-3 mb-2'/>
      <div>
        <p className='m-2'><b>Ejemplo #3: </b>Gráfico circular</p>
        <div className='bg-ligth mx-auto px-2 border border-2 border-primary' style={{width:'450px', heigth:'250px', padding:'10px 0'}}>
        <PiesChart></PiesChart>
        </div>
      </div>


      <hr className='mt-3 mb-2'/>
      <div>
        <p className='m-2'><b>Ejemplo #4: </b>Gráfico dona</p>
        <div className='bg-ligth mx-auto px-2 border border-2 border-primary' style={{width:'450px', heigth:'250px', padding:'10px 0'}}>
        <DoughnutChart></DoughnutChart>
        </div>
      </div>
       
    </div>


    

  )
}

export default App
