const formData = {
  email: '',
  message: '',
};
const lokalStorageKey = 'feedback-form-state';

function saveFormData() {
  localStorage.setItem(lokalStorageKey, JSON.stringify(formData));
}

const form = document.querySelector('.feedback-form');
form.addEventListener('input', handlerGetInfo);
form.addEventListener('submit', handlerSubmitForm);

function handlerGetInfo(evt) {
  if (evt.target.name === 'email' || evt.target.name === 'message') {
    formData[evt.target.name] = evt.target.value.trim();
    saveFormData();
  }
}

function handlerSubmitForm(evt) {
  if (!formData.email || !formData.message) {
    evt.preventDefault();
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(lokalStorageKey);
  formData = { email: '', message: '' };
  form.reset();
}
