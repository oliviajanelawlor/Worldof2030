// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"],
      datasets: [
        {
          label: " The number of natural disasters",
          backgroundColor: ["#230908", "#89241f", "#3d100e", "#fc433a", "#fc564e", "#ef4037", "#d63931","#bc322b", "#a32b25", "#701e19", "#561713",],
          data: [400,361,395,335,331,340,348,352,357,378,394]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Annual number of natural disaster events globally from 2008-2018'
      }
    }
});
