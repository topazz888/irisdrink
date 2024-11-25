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
  { minDegree: 324, maxDegree: 359, value: " กรอกโค้ด HOHOHO1000 \nเพื่อรับส่วนลด 1000 บาท\nสำหรับการจ้างงานขั้นต่ำ 2000 บาท " },
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
      "  Classic & Signature Cocktail",
      "  OnlyFun",
      "  You did great this year, but Santa still not chose you :(",
      "  Good Girls Swallow",
      "  Whiskey 1 shot",
      "  Money Shot",
      "  No Luck, Sad :((",
      "  Tequila 1 shot",
      "  Take It All In",
      "  Fastwork Voucher",
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
        anchor: "start",
        align: "start",
        padding: { top: 10, bottom: 10, left: 20, right: 20 }, // ระยะรอบข้อความ
       offset: (context) => {
      const chart = context.chart;
      const outerRadius = chart.outerRadius || chart.width / 2; // ขอบวงล้อ
      return outerRadius - 50; // เพิ่มระยะจากขอบวงล้อ (เช่น 10px)
    },
    clip: false,
        
        formatter: (value, context) => {
          let label = context.chart.data.labels[context.dataIndex];
          let words = label.split(" ");
          let lines = [];
          let line = "";

          for (let word of words) {
            if ((line + word).length <= 35) {
              line += word + " ";
            } else {
              lines.push(line.trim());
              line = word + " ";
            }
          }
          
          lines.push(line.trim());

          return lines.join("\n");
        },
        font: { size: 14 },
        textAlign: "center",
              },
    },
  },
});

const valueGenerator = (angleValue) => {
  let correctedDegree = 452 - angleValue;
  correctedDegree = correctedDegree % 360;

  for (let i of rotationValues) {
    if (correctedDegree >= i.minDegree && correctedDegree <= i.maxDegree) {
      finalValue.innerHTML = `<p>${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

let hasSpun = false;
let lastResult = "";

let count = 0;
let resultValue = 101;

spinBtn.addEventListener("click", () => {
  if (!hasSpun) {
    hasSpun = true;
    spinBtn.disabled = true;
    finalValue.innerHTML = `<p>Good Luck!</p>`;
    let randomDegree = Math.floor(Math.random() * 360);
    let rotationInterval = window.setInterval(() => {
      myChart.options.rotation = myChart.options.rotation + resultValue;
      myChart.update();
      if (myChart.options.rotation >= 360) {
        count += 1;
        resultValue -= 5;
        myChart.options.rotation = 0;
      } else if (count > 15 && myChart.options.rotation == randomDegree) {
        clearInterval(rotationInterval);
        valueGenerator(randomDegree);
        count = 0;
        resultValue = 101;
      }
    }, 10);
  }
});
