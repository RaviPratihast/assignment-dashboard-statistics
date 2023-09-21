import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { chartBarData } from "./utils/bar-chart";
// import { CategoryScale, Chart } from "chart.js";

Chart.register(CategoryScale);
export function BarChart() {
  return (
    <div className="sm:w-full h-52 mt-5">
      <Bar
        data={chartBarData}
        options={{
          plugins: {
            legend: {
              display: false, // Hide the legend
            },
          },

          maintainAspectRatio: false,
          scales: {
            x: {
              display: false, // Hide the x-axis (vertical grid lines)
              //   stacked: true,
            },
            y: {
              beginAtZero: true,
              gridLines: {
                display: true, // Hide the y-axis grid lines
                // drawBorder: false,
              },
              ticks: {
                stepSize: 5, // Set the desired step size between ticks
                maxTicksLimit: 6, // Set the maximum number of ticks to display
                display: true,
              },
            },
          },
        }}
      />
    </div>
  );
}
