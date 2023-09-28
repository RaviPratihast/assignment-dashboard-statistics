import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { getDataFromChartCreator } from "./utils/bar-chart";

import axios from "axios";

Chart.register(CategoryScale);
export function BarChart() {
  // const { state, dispatch } = useProfile();
  const [products, setProducts] = useState([]);
  const [categoryCounted, setCategoryCountedProduct] = useState({});
  const fetchingDataFromAPI = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      console.log("Error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    fetchingDataFromAPI();
  }, []);

  useEffect(() => {
    fetchingDataFromAPI();
  }, []);

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      return (
        product.category === "men's clothing" ||
        product.category === "women's clothing" ||
        product.category === "electronics"
      );
    });

    const categoryCount = {
      Mens: 0,
      Women: 0,
      Electronics: 0,
    };

    filteredProducts.forEach(({ category }) => {
      if (category === "men's clothing") {
        categoryCount.Mens++;
      } else if (category === "women's clothing") {
        categoryCount.Women++;
      } else if (category === "electronics") {
        categoryCount.Electronics++;
      }
    });

    setCategoryCountedProduct(categoryCount);
  }, [products]);
  const keysObject = Object.keys(categoryCounted);
  const valuesObject = Object.values(categoryCounted);

  const chartData = getDataFromChartCreator(keysObject, valuesObject);
  // dispatch({ type: "ADD_CHART_DATA", payload: chartData });

  return (
    <div className="sm:w-full h-auto  max-lg:m-0">
      <Bar
        data={chartData}
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
