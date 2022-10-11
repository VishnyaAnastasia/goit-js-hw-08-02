const throttle = require('lodash.throttle');
const messageForm = document.querySelector('.feedback-form');

function saveInfo() {
  const formInfo = {
    email: messageForm.elements.email.value,
    message: messageForm.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));
}

if (localStorage.getItem('feedback-form-state')) {
  messageForm.elements.email.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  messageForm.elements.message.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
}

function sendInfo(event) {
  event.preventDefault();
  if (
    messageForm.elements.email.value === '' ||
    messageForm.elements.message.value === ''
  ) {
    alert('Plz fill both inputs: email and message');
    return;
  }
  const formInfo = {
    email: messageForm.elements.email.value,
    message: messageForm.elements.message.value,
  };
  console.log(formInfo);
  messageForm.reset();
  localStorage.removeItem('feedback-form-state');
}

messageForm.addEventListener('input', throttle(saveInfo, 500));
messageForm.addEventListener('submit', sendInfo);
