// function getDataFromChartCreator(keys, values) {
//   const chartBarData = {
//     labels: keys,
//     datasets: [
//       {
//         label: "Mens",
//         backgroundColor: "#98D89E",
//         //   borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//         hoverBackgroundColor: "#98D89E",
//         //   hoverBorderColor: "rgba(75, 192, 192, 1)",
//         data: values, // Guest data for each week
//         barPercentage: 0.9,
//         categoryPercentage: 0.4,
//         borderRadius: 5,
//       },

//     ],
//   };

//   return chartBarData;
// }

// function getDataFromChartCreator(keys, values) {
//   // Create an array of formatted labels by combining keys (categories) and values (counts)
//   const formattedLabels = keys.map((key, index) => `${key}: ${values[index]}`);

//   const chartBarData = {
//     labels: formattedLabels, // Use the formatted labels
//     datasets: [
//       {
//         label: "Products Count", // You can customize the label as needed
//         backgroundColor: "#98D89E",
//         borderWidth: 1,
//         hoverBackgroundColor: "#98D89E",
//         data: values,
//         barPercentage: 0.9,
//         categoryPercentage: 0.4,
//         borderRadius: 5,
//       },
//     ],
//   };

//   return chartBarData;
// }

// export { getDataFromChartCreator };
function getDataFromChartCreator(keys, values) {
  const backgroundColors = keys.map((key) => {
    // Generate unique background colors based on the category name
    switch (key) {
      case "Mens":
        return "#EE8484";
      case "Women":
        return "#98D89E";
      case "Electronics":
        return "#f6dc7d";
      default:
        return "gray"; // Default color for unknown categories
    }
  });

  const chartBarData = {
    labels: keys,
    datasets: [
      {
        label: "Products Count",
        backgroundColor: backgroundColors, // Use the generated background colors
        borderWidth: 1,
        hoverBackgroundColor: backgroundColors, // Use the same colors on hover
        data: values,
        barPercentage: 0.9,
        categoryPercentage: 0.4,
        borderRadius: 5,
      },
    ],
  };

  return chartBarData;
}

export { getDataFromChartCreator };
