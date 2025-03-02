import { colors } from "../colors";

export function createPieChart(container: HTMLElement, data: number[]) {
    const sectionPie = container.appendChild(document.createElement("div"));
    sectionPie.classList.add("chartPie-container");
    
    const total = data.reduce((sum, value) => sum + value, 0);
    let cumulativePercent = 0;
  
    // Colores predefinidos
    
    const slices = data.map((value) => {
      const percent = (value / total) * 100;
      const startValue = cumulativePercent;
      cumulativePercent += percent;
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
      return `${randomColor} ${startValue}% ${cumulativePercent}%`;
    });
    sectionPie.style.setProperty("--slices", slices?.join(", "));
  }
  