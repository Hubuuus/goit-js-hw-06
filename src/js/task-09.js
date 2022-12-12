function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const chengerColor = document.querySelector(".change-color");
const backgroundElement = document.querySelector("body");
const colorHex = document.querySelector("span.color");

chengerColor.addEventListener("click", () => {
  backgroundElement.style.backgroundColor = getRandomHexColor();
  colorHex.innerHTML = getRandomHexColor();
});
