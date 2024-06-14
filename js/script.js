var fans = document.querySelector(".fans");
// console.log(fans.innerText);
fans.addEventListener("mouseover", function () {
  fans.innerText = "123k";
});

var fish = document.querySelector(".fish");
// console.log(fish.outerHTML);
fish.addEventListener("mouseover", function () {
  fish.innerText = "47k";
});
var paw = document.querySelector(".pets");
// console.log(paw.outerHTML);
paw.addEventListener("mouseover", function () {
  paw.innerText = "20k";
});

var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var stealth = document.querySelector("h1");
var body = document.querySelector("body");
console.log(stealth.innerText);

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    stealth.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    stealth.innerText = "Party Quincy";
  }
});