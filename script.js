let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

let clicks = 0;
btn.onclick = function () {
  clicks += 1;
  if(clicks == 1 ){
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
  }
}
