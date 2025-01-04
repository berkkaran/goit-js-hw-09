const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const fullForm = () => {
  const savedData = localStorage.getItem(localStorageKey);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email || '';
    messageInput.value = message || '';
  }
};

const saveForm = () => {
  const data = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(data));
};

const handleSubmit = event => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!email || !message) {
    alert('Lütfen tüm alanları doldurunuz!');
    return;
  }

  console.log({ email, message });
  localStorage.removeItem(localStorageKey);
  form.reset();
};

form.addEventListener('input', saveForm);
form.addEventListener('submit', handleSubmit);

document.addEventListener('DOMContentLoaded', fullForm);
