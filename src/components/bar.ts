import { colors } from "../colors";

export function createBarChart(container: HTMLElement, data: number[]) {
    
    const sectionChart = container.appendChild(document.createElement("div"));
    sectionChart.classList.add("chartBar-container");
    
    sectionChart.innerHTML = data
      .map((value) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return `<div class="bar"><span style="--value: ${value}; --color: ${randomColor}"></span><span class="tooltip">${value}</span></div>`;
      })
      .join("");
      const sectionChartGrid = sectionChart.appendChild(document.createElement("div"));
    sectionChartGrid.classList.add("chartBarGrid-container");
  }
  