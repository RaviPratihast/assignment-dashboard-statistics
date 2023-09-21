const chartBarData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Guest",
      backgroundColor: "#98D89E",
      //   borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "#98D89E",
      //   hoverBorderColor: "rgba(75, 192, 192, 1)",
      data: [200, 100, 200, 500], // Guest data for each week
      barPercentage: 0.9,
      categoryPercentage: 0.4,
      borderRadius: 5,
    },
    {
      label: "User",
      backgroundColor: "#EE8484",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      hoverBackgroundColor: "#EE8484",
      //   hoverBorderColor: "rgba(255, 99, 132, 1)",
      data: [400, 300, 200, 100], // User data for each week
      //   barPercentage: 0.4,
      //   categoryPercentage: 0.8,
      barPercentage: 0.9,
      categoryPercentage: 0.4,
      borderRadius: 5, // Adjust this value to control border radius
    },
  ],
};

export { chartBarData };
