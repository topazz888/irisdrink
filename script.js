let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let finalValue = document.getElementById("finalValue");

let segments = [
  "Classic & Signature Cocktail",
  "OnlyFun",
  "You did great this year, but Santa still not chose you",
  "Good Girls Swallow",
  "Whiskey 1 shot",
  "Money Shot",
  "No Luck, Sad :((",
  "Tequila 1 shot",
  "Take It All In",
  "Fastwork Voucher",
];

let clicks = 0;

btn.onclick = function () {
  clicks += 1;
  let randomDegree = Math.floor(Math.random() * 360 + clicks * 3600); // หมุนแบบสุ่มพร้อมเพิ่มจำนวนรอบ
  container.style.transition = "transform 4s ease-out";
  container.style.transform = `rotate(${randomDegree}deg)`;

  // คำนวณค่าผลลัพธ์หลังจากหมุนเสร็จ
  setTimeout(() => {
    container.style.transition = "none";
    let normalizedDegree = randomDegree % 360; // ทำให้องศาอยู่ในช่วง 0-360
    container.style.transform = `rotate(${normalizedDegree}deg)`;

    // หาค่าของ segment ที่ชนะ
    let segmentIndex = Math.floor((360 - normalizedDegree) / (325 / segments.length)) % segments.length;
    finalValue.textContent = segments[segmentIndex];
  }, 4000); // รอให้การหมุนเสร็จสิ้น
};
