import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let timerId;
let date;

const btStart = document.querySelector("button[data-start]");
const spDays = document.querySelector("span[data-days]");
const spHours = document.querySelector("span[data-hours]");
const spMinutes = document.querySelector("span[data-minutes]");
const spSeconds = document.querySelector("span[data-seconds]");



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        date = new Date(selectedDates[0]); 
        const dateNow = new Date();

        if (date<dateNow) {
            btStart.setAttribute('disabled', '');
            window.alert("Please choose a date in the future");
        } else {
            btStart.removeAttribute('disabled');
        }

    },
};

flatpickr("#datetime-picker", options);

btStart.setAttribute('disabled', '');
btStart.addEventListener('click', onStartClick);

function onStartClick() { 
  timerId = setInterval( calcTime, 1000);
}

function calcTime() {
    const dateNow = new Date();
    let delta = Math.trunc((date - dateNow) / 1000);
    const seconds = delta % 60;
    delta = Math.trunc(delta / 60);
    const minutes = delta % 60;
    delta = Math.trunc(delta / 60);
    const hours = delta % 60;
    delta = Math.trunc(delta / 60);
    const days = delta % 24;

    if (days + hours + minutes + seconds === 0) {
        clearInterval(timerId);
     }

    const strDays = String(days).padStart(2, '0');
    const strHours = String( hours).padStart(2, '0');
    const strMinutes = String(minutes).padStart(2, '0');
    const strSeconds = String(seconds).padStart(2, '0');

    spDays.textContent = strDays;
    spHours.textContent = strHours;
    spMinutes.textContent = strMinutes;
    spSeconds.textContent = strSeconds;

}