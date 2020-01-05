// Pie Chart
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Electricity and Heat Production", "Transport","Manufacturing industries and construction", "Residential buildings and commercial public services", "Other sectors"],
      datasets: [
        {
          label: " CO2 emissions by sector in percentages %",
          backgroundColor: ["#230908", "#89241f", "#3d100e", "#fc433a", "#fc564e"],
          data: [49.04,20.24,19.96,8.60,1.96]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Global Carbon Dioxide (CO₂) emissions by sector or source in 2014'
      }
    }
});
