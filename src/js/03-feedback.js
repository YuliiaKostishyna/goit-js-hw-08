import throttle from 'lodash.throttle';
const forms = document.querySelector('.feedback-form');
forms.addEventListener('input', throttle(saveForm, 500));
forms.addEventListener('submit', submitForm, { once: true });
const formSave = {};

function saveForm() {
    formSave.email = forms.email.value;
    formSave.message = forms.message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formSave)); 
};

function checkForm() {
    const localStorageForm = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (localStorageForm) {
        forms.email.value = localStorageForm.email;
        forms.message.value = localStorageForm.message;
    }
};

function submitForm(e) {
    e.preventDefault();
    console.log(forms);
    localStorage.clear();
    forms.reset();
};
checkForm();