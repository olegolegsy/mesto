const set = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  saveButtonSelector: '.popup__save-btn',

  inactiveSaveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_error',
  errorClassActive: 'popup__input-error_active'
};

function enableValidation(set) {
const forms = Array.from(document.querySelectorAll(set.formSelector));

forms.forEach((form) => {
  setEventListeners(form, set);
});
};

function setEventListeners(form, set) {
  const inputs = Array.from(form.querySelectorAll(set.inputSelector));
  const button = form.querySelector(set.saveButtonSelector);

  toggleButtonState (inputs, button, set);

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(input, form, set);
      toggleButtonState (inputs, button, set);
    });
  });
};

function isValid(input, form, set) {
  if (!input.validity.valid) {
    showInputError(input, form, input.validationMessage, set);
  } else {
    hideInputError(input, form, set);
  };
};

function showInputError(input, form, validationMessage, set) {
  const errorElement = form.querySelector(`.${input.name}-error`);

  input.classList.add(set.inputErrorClass);
  errorElement.textContent = validationMessage;
  errorElement.classList.add(set.errorClassActive);
};

function hideInputError(input, form, set) {
  const errorElement = form.querySelector(`.${input.name}-error`);
  
  input.classList.remove(set.inputErrorClass);
  errorElement.classList.remove(set.errorClassActive);
  errorElement.textContent = '';
};

function hasInvalidInput(inputs) {
  return inputs.some((input) => {
    return !input.validity.valid;
  })
};

function toggleButtonState (inputs, button, set) {
  if (hasInvalidInput(inputs)) {
    disableSubmitButton(button, set);
  } else {
    enableSubmitButton(button, set);
  }
}; 

function enableSubmitButton(button, set) {
  button.classList.remove(set.inactiveSaveButtonClass);
  button.disabled = false;
};

function disableSubmitButton(button, set) {
  button.classList.add(set.inactiveSaveButtonClass);
  button.disabled = true;
};

enableValidation(set);