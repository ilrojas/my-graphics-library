
import './styles/chart.css'
import './styles/style.css'
import { createBarChart } from './components/bar'
import { createPieChart } from './components/pie';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<h1>My Graphics Library</h1>
  <div class="charts">
  
</div>

`
/* const chartContainer = document.querySelector(".chart-container");

const data = [50, 120, 80, 150]; // Datos dinámicos

if (chartContainer) {
  chartContainer.innerHTML = data.map(value => `<div class="bar" style="height: ${value}px"></div>`).join("");
} */
  interface MesEstadisticas {
    mes: string;
    alumnosMatriculados: number;
    alumnosGraduados: number;
  }
  
  interface AñoEstadisticas {
    año: number;
    meses: MesEstadisticas[];
  }
  
  function generarDatosEstadisticas(): AñoEstadisticas[] {
    // Datos de ejemplo para años, meses, alumnos matriculados y graduados
    return [
      {
        año: 2024,
        meses: [
          { mes: 'Enero', alumnosMatriculados: 150, alumnosGraduados: 30 },
          { mes: 'Febrero', alumnosMatriculados: 130, alumnosGraduados: 25 },
          { mes: 'Marzo', alumnosMatriculados: 140, alumnosGraduados: 28 },
          { mes: 'Abril', alumnosMatriculados: 120, alumnosGraduados: 22 },
          // Agregar más meses según se necesite
        ]
      },
      {
        año: 2025,
        meses: [
          { mes: 'Enero', alumnosMatriculados: 160, alumnosGraduados: 35 },
          { mes: 'Febrero', alumnosMatriculados: 145, alumnosGraduados: 29 },
          { mes: 'Marzo', alumnosMatriculados: 155, alumnosGraduados: 38 },
          { mes: 'Abril', alumnosMatriculados: 135, alumnosGraduados: 30 },
          // Agregar más meses según se necesite
        ]
      }
      // Puedes agregar más años según sea necesario
    ];
  }
  
  // Ejemplo de uso de la función
  const datosEstadisticas = generarDatosEstadisticas();
  function prepararDatosParaGrafico(datos: AñoEstadisticas[]) {
    return datos.map(año => ({
      label: `${año.año}`,
      data: año.meses.map(mes => mes.alumnosMatriculados),
      borderColor: 'rgba(75, 192, 192, 1)',
      fill: false
    }));
  }
  
  // Uso con Chart.js
  const datosGrafico = prepararDatosParaGrafico(datosEstadisticas);
  console.log(datosGrafico); 
  



const randomData = Array.from({ length: 7 }, (_, index) => ({
  x: `Label ${index + 1}`,
  y: Math.floor(Math.random() * 100)
}));

const randomData1 = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
const randomData2 = Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));

 /* createBarChart(document.querySelector(".charts")!, randomData);
 createPieChart(document.querySelector(".charts")!, randomData); */

 createBarChart(document.querySelector(".charts")!, randomData1);
 createPieChart(document.querySelector(".charts")!, randomData1);

 createBarChart(document.querySelector(".charts")!, randomData2);
 createPieChart(document.querySelector(".charts")!, randomData2);