export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handlePopupWithEscBtn);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handlePopupWithEscBtn);
    }

    _handlePopupWithEscBtn = (evt) => {
        if (evt.key === 'Escape') {
            this.close()
        };
    }

    _handlePopupWithCloseBtn = () => {
        this.close();
    }

    _handlePopupWithLayout = (evt) => {
        if(evt.target === evt.currentTarget) {
            this.close();
        };
    }

    setEventListeners() {
        this._popupCloseBtn = this._popup.querySelector('.popup__cls-btn');

        this._popupCloseBtn.addEventListener('click', this._handlePopupWithCloseBtn);
        this._popup.addEventListener('click', this._handlePopupWithLayout);
    }
}