// Підключення iziToast (разом зі стилями)
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Посилання на форму
const formElement = document.querySelector('.form');

const createPromise = (delay, shouldResolve) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(delay);
        return;
      }

      reject(delay);
    }, delay);
  });

const showSuccessToast = (delay) => {
  iziToast.success({
    title: 'OK',
    message: `✅ Fulfilled promise in ${delay}ms`,
    position: 'topRight',
    timeout: 2500,
  });
};

const showErrorToast = (delay) => {
  iziToast.error({
    title: 'Error',
    message: `❌ Rejected promise in ${delay}ms`,
    position: 'topRight',
    timeout: 2500,
  });
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  if (!formElement) {
    return;
  }

  const delayValue = Number(formElement.elements.delay.value);
  const stateValue = formElement.elements.state.value;
  const shouldResolve = stateValue === 'fulfilled';

  if (Number.isNaN(delayValue) || delayValue < 0) {
    iziToast.warning({
      title: 'Warning',
      message: 'Delay must be a non-negative number',
      position: 'topRight',
      timeout: 2500,
    });
    return;
  }

  createPromise(delayValue, shouldResolve)
    .then(showSuccessToast)
    .catch(showErrorToast);

  formElement.reset();
};

if (formElement) {
  formElement.addEventListener('submit', handleFormSubmit);
}
