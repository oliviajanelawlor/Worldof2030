// Bar chart
new Chart(document.getElementById("countrybar"), {
    type: 'horizontalBar',
    data: {
      labels: ["China", "United States", "India", "Russia", "Japan"],
      datasets: [
        {
          label: " CO₂ emission in billions ",
          backgroundColor: ["#230908", "#89241f", "#3d100e", "#fc433a", "#fc564e"],
          data: [9.84,5.27,2.47,1.69,1.21]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: false,
        text: 'Countries with the highest Carbon Dioxide (CO₂) emissions measured in tonnes'
      }
    }
});
