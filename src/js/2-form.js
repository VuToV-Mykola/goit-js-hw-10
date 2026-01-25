// Throttle для обмеження частоти збереження
import throttle from 'lodash.throttle';

// Ключ для localStorage та посилання на форму
const STORAGE_KEY = 'feedback-form-state';
const formElement = document.querySelector('.feedback-form');

// Початковий стан форми
const getInitialState = () => ({
  email: '',
  message: '',
});

// Поточний стан форми в памʼяті
const formState = getInitialState();

// Завантаження стану з localStorage
const loadFormState = () => {
  if (!formElement) {
    return;
  }

  const savedState = localStorage.getItem(STORAGE_KEY);
  if (!savedState) {
    return;
  }

  try {
    // Парсимо збережені дані та заповнюємо форму
    const parsedState = JSON.parse(savedState);
    const nextState = { ...getInitialState(), ...parsedState };
    formElement.elements.email.value = nextState.email;
    formElement.elements.message.value = nextState.message;
    Object.assign(formState, nextState);
  } catch (error) {
    // Якщо дані пошкоджені — очищаємо storage та стан
    localStorage.removeItem(STORAGE_KEY);
    Object.assign(formState, getInitialState());
  }
};

// Збереження стану (throttle 500ms)
const persistFormState = throttle(() => {
  if (!formElement) {
    return;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}, 500);

// Обробник введення в інпути
const handleFormInput = (event) => {
  const { name, value } = event.target;

  // Ігноруємо поля, яких немає у стані
  if (!Object.prototype.hasOwnProperty.call(formState, name)) {
    return;
  }

  formState[name] = value;
  persistFormState();
};

// Обробник сабміту форми
const handleFormSubmit = (event) => {
  event.preventDefault();

  const email = formState.email.trim();
  const message = formState.message.trim();

  // Перевірка на порожні поля
  if (!email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Логуємо дані та очищаємо стан
  console.log({ email, message });

  formElement.reset();
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(formState, getInitialState());
};

// Підключення обробників та ініціалізація
if (formElement) {
  loadFormState();
  formElement.addEventListener('input', handleFormInput);
  formElement.addEventListener('submit', handleFormSubmit);
}
