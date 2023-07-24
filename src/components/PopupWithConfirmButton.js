import Popup from "./Popup.js";

export default class PopupWithConfirmButton extends Popup {
    constructor(popupSelector, handleSubmit) {
        super(popupSelector);
        this._handleSubmit = handleSubmit;
        this._form = this._popup.querySelector('.popup__form');
    }

    open = (card, idCard) => {
        super.open();
        this._card = card;
        this._idCard = idCard;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleSubmit(this._card, this._idCard);
        });
    }
}