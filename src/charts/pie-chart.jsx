import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Basic Tees", "Custom Shorts Pants", "Super Hoodies"],
  datasets: [
    {
      data: [55, 31, 14],
      backgroundColor: ["#98D89E", "#f6dc7d", "#EE8484"], // Custom colors
      // Set innerRadius and outerRadius to make the ring thinner
      innerRadius: 50, // Adjust the inner radius
      outerRadius: 75,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false, // Hide the legend
    },
  },
};

export const PieChart = () => {
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};
