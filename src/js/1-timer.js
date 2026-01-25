// Підключення Flatpickr та iziToast (разом зі стилями)
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Посилання на елементи інтерфейсу
const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

let selectedDate = null;
let timerId = null;

if (startButton) {
  startButton.disabled = true;
}

// Допоміжне форматування значень таймера (тільки для hours, minutes, seconds)
const addLeadingZero = (value) => String(value).padStart(2, '0');

const convertMs = (ms) => {
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
};

const updateTimerDisplay = ({ days, hours, minutes, seconds }) => {
  if (timerDays) {
    // Дні можуть мати більше двох цифр, тому не форматуємо
    timerDays.textContent = String(days);
  }
  if (timerHours) {
    timerHours.textContent = addLeadingZero(hours);
  }
  if (timerMinutes) {
    timerMinutes.textContent = addLeadingZero(minutes);
  }
  if (timerSeconds) {
    timerSeconds.textContent = addLeadingZero(seconds);
  }
};

const toggleControls = (isRunning) => {
  if (dateTimePicker) {
    dateTimePicker.disabled = isRunning;
  }
  if (startButton) {
    startButton.disabled = isRunning;
  }
};

const showErrorToast = (message) => {
  iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
    timeout: 2500,
  });
};

const handleDateSelection = (selectedDates) => {
  if (!selectedDates.length) {
    selectedDate = null;
    if (startButton) {
      startButton.disabled = true;
    }
    return;
  }

  const pickedDate = selectedDates[0];
  const now = new Date();

  if (pickedDate <= now) {
    selectedDate = null;
    if (startButton) {
      startButton.disabled = true;
    }
    showErrorToast('Please choose a date in the future');
    return;
  }

  selectedDate = pickedDate;
  if (startButton) {
    startButton.disabled = false;
  }
};

// Ініціалізація Flatpickr з потрібними опціями
if (dateTimePicker) {
  flatpickr(dateTimePicker, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: handleDateSelection,
  });
}

const startTimer = () => {
  if (!selectedDate) {
    return;
  }

  if (timerId) {
    clearInterval(timerId);
  }

  toggleControls(true);

  const updateTick = () => {
    const remainingMs = selectedDate - new Date();

    if (remainingMs <= 0) {
      clearInterval(timerId);
      timerId = null;
      updateTimerDisplay(convertMs(0));
      selectedDate = null;
      if (startButton) {
        startButton.disabled = true;
      }
      if (dateTimePicker) {
        dateTimePicker.disabled = false;
      }
      return;
    }

    updateTimerDisplay(convertMs(remainingMs));
  };

  updateTick();
  timerId = setInterval(updateTick, SECOND);
};

if (startButton) {
  startButton.addEventListener('click', startTimer);
}
