const btStart = document.querySelector("button[data-start]");
const btStop = document.querySelector("button[data-stop]");

let timerId;

btStart.addEventListener('click', onStartClick);
btStop.addEventListener('click', onStopClick);


function onStopClick() {
  btStart.removeAttribute('disabled');
  clearInterval(timerId);
}

function onStartClick() { 
  btStart.setAttribute('disabled', '');
  timerId = setInterval(changeBackground , 1000);
}

function changeBackground() {
   document.body.style.background = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
