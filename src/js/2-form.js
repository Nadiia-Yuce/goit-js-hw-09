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
getLokalStorageInfo();

function handlerGetInfo(evt) {
  if (evt.target.name === 'email' || evt.target.name === 'message') {
    formData[evt.target.name] = evt.target.value.trim();
    saveFormData();
  }
}

function handlerSubmitForm(evt) {
  evt.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill all fields, please!');
    return;
  }
  console.log(formData);
  localStorage.removeItem(lokalStorageKey);
  formData.email = '';
  formData.message = '';
  form.reset();
}

function getLokalStorageInfo() {
  const lokalData = localStorage.getItem(lokalStorageKey);
  if (lokalData !== null) {
    const parsedData = JSON.parse(lokalData);
    Object.assign(formData, parsedData);
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
}
