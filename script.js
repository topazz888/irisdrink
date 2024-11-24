let myChart = new Chart(wheel, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    labels: [
      "Classic & Signature Cocktail",
      "OnlyFun",
      "You did great this year, but Santa still not chose you :(",
      "Good Girls Swallow",
      "Whiskey 1 shot",
      "Money Shot",
      "No Luck, Sad :((",
      "Tequila 1 shot",
      "Take It All In",
      "Fastwork Voucher",
    ],
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend: {
        display: false,
      },
      datalabels: {
        color: "#ffffff",
        anchor: "center", // จัดข้อความให้อยู่ตรงกลางช่อง
        align: "center",  // จัดแนวให้อยู่ตรงกลาง
        font: { size: 13 },
        clip: false,
        textAlign: "center",
      },
    },
  },
});
