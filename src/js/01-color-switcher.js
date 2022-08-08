const btStart = document.querySelector("button[data-start]");
const btStop = document.querySelector("button[data-stop]");





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
