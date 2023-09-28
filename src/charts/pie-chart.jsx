import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { getDataFromChartCreator } from "./utils/bar-chart";

// const data = {
//   labels: ["Basic Tees", "Custom Shorts Pants", "Super Hoodies"],
//   datasets: [
//     {
//       data: [55, 31, 14],
//       backgroundColor: ["#98D89E", "#f6dc7d", "#EE8484"], // Custom colors
//       // Set innerRadius and outerRadius to make the ring thinner
//       innerRadius: 50, // Adjust the inner radius
//       outerRadius: 75,
//     },
//   ],
// };

export const PieChart = () => {
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

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };
  return (
    <div className="max-sm:h-40">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};
