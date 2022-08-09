import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btStart = document.querySelector("button[data-start]");

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0]<Date()) {
            btStart.setAttribute('disabled', '');
            window.alert("Please choose a date in the future");
        }
    console.log(selectedDates[0]);
  },
};

flatpickr("#datetime-picker",options);