'use strict'


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color")

button.addEventListener("click", (event) => {
  const newColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = newColor;
  document.querySelector(".color").textContent = newColor;

})