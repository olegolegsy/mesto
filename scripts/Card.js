export default  class Card {
    constructor(data, templateSelector, openPopup) {
        this._name = data.name;
        this._link = data.link;

        this._templateSelector = templateSelector;

        this._openPopup = openPopup;
    }

    _getTemplate() {
        const template = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return template;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._setEventListeners();

        this._element.querySelector('.element__img').src = this._link;
        this._element.querySelector('.element__img').alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        return this._element;
    }

    _openCard() {
        this._imagePopup = document.querySelector('.popup_type_image'); //окно просмотра фото
        this._imagePopupImage = document.querySelector('.popup__image-photo'); //окно просмотра фото картинка
        this._imagePopupCaption = document.querySelector('.popup__image-caption'); //окно просмотра фото подпись

               this._imagePopupImage.src = this._link;
               this._imagePopupImage.alt = this._name;
               this._imagePopupCaption.textContent = this._name;
               this._openPopup(this._imagePopup);
    }

    _likeCard() {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }

    _deleteCard() {
        this._element.remove()
    }

    _setEventListeners() {
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._likeCard();
        });

        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._deleteCard();
        });

        this._element.querySelector('.element__img').addEventListener('click', () => {
            this._openCard();
        });
    }
}