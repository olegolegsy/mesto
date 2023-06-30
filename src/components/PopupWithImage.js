import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImg = this._popup.querySelector('.popup__image-photo');
        this._popupCaption = this._popup.querySelector('.popup__image-caption');
    }

    open = (title, link) => {
        this._popupImg.src = link;
        this._popupImg.alt = title;
        this._popupCaption.textContent = title;

        super.open();
    }
}