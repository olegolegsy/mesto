import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._button = this._popup.querySelector('.popup__save-btn');
        this._buttonText = this._button.textContent;
    }

    buttonLoading() {
        this._button.textContent = 'Сохранение...';
    }

    buttonWait() {
        this._button.textContent = this._buttonText;
    }

    close() {
        super.close();
        this._form.reset();
    }

    _getInputsValue() {
        this._values = {};
        this._inputList.forEach((input) => {
            this._values[input.name] = input.value;
        });

        return this._values;
    }

    setInputsValue(userData) {
        this._inputList.forEach((input) => {
            input.value = userData[input.name];
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.buttonLoading();
            this._handleSubmit(this._getInputsValue());
        });
    }
}