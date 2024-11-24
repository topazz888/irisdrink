const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");

const rotationValues = [
  { minDegree: 0, maxDegree: 35, value: "Classic & Signature Cocktail" },
  { minDegree: 36, maxDegree: 71, value: "OnlyFun" },
  { minDegree: 72, maxDegree: 107, value: "You did great this year, but Santa still not chose you :(" },
  { minDegree: 108, maxDegree: 143, value: "Good Girls Swallow" },
  { minDegree: 144, maxDegree: 179, value: "Whiskey 1 shot" },
  { minDegree: 180, maxDegree: 215, value: "Money Shot" },
  { minDegree: 216, maxDegree: 251, value: "No Luck, Sad :((" },
  { minDegree: 252, maxDegree: 287, value: "Tequila 1 shot" },
  { minDegree: 288, maxDegree: 323, value: "Take It All In" },
  { minDegree: 324, maxDegree: 359, value: "กรอกโค้ด HOHOHO1000 \nเพื่อรับส่วนลด 1000 บาท\nสำหรับการจ้างงานขั้นต่ำ 2000 บาท " },
];

const data = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

const pieColors = [
  "#58694E",
  "#0D2501",
  "#58694E",
  "#0D2501",
  "#58694E",
  "#0D2501",
  "#58694E",
  "#0D2501",
  "#58694E",
  "#0D2501",
];

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
        anchor: "center",  // จัดข้อความให้อยู่ตรงกลาง
        align: "center",   // จัดข้อความให้แนวนอนตรงกลาง
        font: { size: 13 },
        clip: false,
        textAlign: "center",
      },
    },
  },
});

const valueGe
