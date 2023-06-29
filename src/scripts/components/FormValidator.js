export default class FormValidator {
  constructor(set, form) {
      this._formSelector = set.formSelector;
      this._inputSelector = set.inputSelector;
      this._saveButtonSelector = set.saveButtonSelector;

      this._inactiveSaveButtonClass = set.inactiveSaveButtonClass;
      this._inputErrorClass = set.inputErrorClass;
      this._errorClassActive = set.errorClassActive;

      this._form = form;
      this._formInputs = Array.from(form.querySelectorAll(this._inputSelector));
      this._formButton = form.querySelector(this._saveButtonSelector);
  }

  enableValidation() {
      this._formInputs.forEach((formInput) => {
          formInput.addEventListener('input', () => {
              this._toggleButtonState();
              this._isValid(formInput);
          });
      });
  }

  _isValid(formInput) {
      if (!formInput.validity.valid) {
          this._showInputError(formInput);
        } else {
          this._hideInputError(formInput);
        };
  }

  _showInputError(formInput) {
    const errorElement = this._form.querySelector(`.${formInput.name}-error`);

    formInput.classList.add(this._inputErrorClass);
    errorElement.textContent = formInput.validationMessage;
    errorElement.classList.add(this._errorClassActive);
  }

  _hideInputError(formInput) {
    const errorElement = this._form.querySelector(`.${formInput.name}-error`);

    formInput.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClassActive);
  }

  _hasInvalidInput() {
    return this._formInputs.some((input) => {
      return !input.validity.valid;
    })
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  disableSubmitButton() {
    this._formButton.classList.add(this._inactiveSaveButtonClass);
    this._formButton.disabled = true;
  }

  _enableSubmitButton() {
    this._formButton.classList.remove(this._inactiveSaveButtonClass);
    this._formButton.disabled = false;
  }

  resetValidation() {
    this._toggleButtonState(); 

    this._formInputs.forEach((formInput) => {
      this._hideInputError(formInput) 
    });

  }
}
  