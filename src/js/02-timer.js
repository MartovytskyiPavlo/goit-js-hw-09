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
    const delta = convertMs(date - dateNow);


    if (delta.days + delta.hours + delta.minutes + delta.seconds === 0) {
        clearInterval(timerId);
     }

    spDays.textContent = addLeadingZero(delta.days);
    spHours.textContent = addLeadingZero(delta.hours);
    spMinutes.textContent = addLeadingZero(delta.minutes);
    spSeconds.textContent = addLeadingZero(delta.seconds);
}

function addLeadingZero(value) { 
    return String(value).padStart(2, '0')
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}