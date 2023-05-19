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
  setEventListeners(form);
});
};

function setEventListeners(form) {
  const inputs = Array.from(form.querySelectorAll(set.inputSelector));
  const button = form.querySelector(set.saveButtonSelector);

  toggleButtonState (inputs, button);

  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      isValid(input, form);
      toggleButtonState (inputs, button);
    });
  });
};

function isValid(input, form) {
  if (!input.validity.valid) {
    showInputError(input, form, input.validationMessage);
  } else {
    hideInputError(input, form);
  };
};

function showInputError(input, form, validationMessage) {
  const errorElement = form.querySelector(`.${input.name}-error`);

  input.classList.add(set.inputErrorClass);
  errorElement.textContent = validationMessage;
  errorElement.classList.add(set.errorClassActive);
};

function hideInputError(input, form) {
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

function toggleButtonState (inputs, button) {
  if (hasInvalidInput(inputs)) {
    button.classList.add(set.inactiveSaveButtonClass);
  } else {
    button.classList.remove(set.inactiveSaveButtonClass);
  }
}; 

enableValidation(set);