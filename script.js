const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");

const rotationValues = [
  { minDegree: 0, maxDegree: 35, value: "Image 1" },
  { minDegree: 36, maxDegree: 71, value: "Image 2" },
  { minDegree: 72, maxDegree: 107, value: "Image 3" },
  { minDegree: 108, maxDegree: 143, value: "Image 4" },
  { minDegree: 144, maxDegree: 179, value: "Image 5" },
  { minDegree: 180, maxDegree: 215, value: "Image 6" },
  { minDegree: 216, maxDegree: 251, value: "Image 7" },
  { minDegree: 252, maxDegree: 287, value: "Image 8" },
  { minDegree: 288, maxDegree: 323, value: "Image 9" },
  { minDegree: 324, maxDegree: 359, value: "Image 10" },
];

const data = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

const images = [
  "https://i.ibb.co/s9tBrxk/w1.png", // URL หรือ path รูปภาพ
  "https://i.ibb.co/xgs8NLt/w2.png",
  "https://i.ibb.co/CHcPzFn/w3.png",
  "https://i.ibb.co/rHdPpmg/w4.png",
  "https://i.ibb.co/Tbw85jF/w5.png",
  "https://i.ibb.co/RhnFg06/w6.png",
  "https://i.ibb.co/TMZzzS6/w7.png",
  "https://i.ibb.co/4KwGFLx/w8.png",
  "https://i.ibb.co/qN5TPkS/w9.png",
  "https://i.ibb.co/CQvgdTj/w10.png",
];

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
  type: "pie",
  data: {
    labels: new Array(10).fill(""), // ซ่อนข้อความ
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
    },
  },
  plugins: [
    {
      beforeDraw: (chart) => {
        const ctx = chart.ctx;
        const radius = chart.outerRadius;

        images.forEach((src, index) => {
          const img = new Image();
          img.src = src;

          img.onload = () => {
            const angle = (chart.getDatasetMeta(0).data[index].startAngle +
              chart.getDatasetMeta(0).data[index].endAngle) /
              2;

            const x = chart.chartArea.width / 2 + Math.cos(angle) * (radius / 2);
            const y = chart.chartArea.height / 2 + Math.sin(angle) * (radius / 2);

            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, radius / 10, 0, 2 * Math.PI);
            ctx.clip();
            ctx.drawImage(img, x - radius / 10, y - radius / 10, radius / 5, radius / 5);
            ctx.restore();
          };
        });
      },
    },
  ],
});
