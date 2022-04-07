// Chart Script
var ctx = document.getElementById("myChart").getContext("2d");
var gradient5 = ctx.createLinearGradient(0, 0, 0, 450);

gradient5.addColorStop(0.1, "rgba(29, 78, 216, 0.24)");
gradient5.addColorStop(0.5, "rgba(29, 78, 216, 0) ");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        data: [20, 70, 45, 30, 50, 60, 70, 80, 90, 100],
        backgroundColor: gradient5,
        borderColor: "#1D4ED8",
        borderWidth: 2,
        pointBackgroundColor: "#ffffff",
        fill: true,
        strokeColor: "#6366F1",
        tension: 0.5,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        mode: "index",
        intersect: false,
        titleFont: {
          size: 8,
        },
        bodyFont: {
          size: 12,
        },

        displayColors: false,

        padding: 10,
        backgroundColor: "#ffffff",
        pointRadius: "0",
        caretSize: 0,
        caretPadding: 12,
        borderColor: "#d1d5db",
        borderWidth: 0.5,
        boxWidth: 12,
        titleFont: 20,
        bodyFont: 16,
        bodyColor: "#1E293B",
        titleColor: "#475569",
        callbacks: {
          title: function (tooltipItem, data) {
            return "july";
          },
          label: function (tooltipItem, data) {
            return "$ 2500";
          },
          labelPointStyle: function () {
            return {
              pointStyle: "circle",
              pointRadius: "0",
              padding: 0,
            };
          },
        },
      },
      legend: {
        display: false,
        align: "end",
        labels: {
          display: false,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    elements: {
      point: {
        radius: 4,
      },
    },
    generateLabels: {
      hidden: true,
    },
    legend: {
      display: false,
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
        beginAtZero: true,
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        },
      },
    },
  },
});

document.getElementById("focused").focus();

//schedule interaction
// function toggleDropdown2(e) {
//   document.getElementById("handleClick").classList.toggle("hidden");
// }
function show() {
  document.getElementById("plans").style.display = "block";
}
function hide() {
  document.getElementById("plans").style.display = "none";
}
