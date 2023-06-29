export default  class Card {
    constructor(data, templateSelector, handleOpenPopup) {
        this._title = data.title;
        this._link = data.link;

        this._templateSelector = templateSelector;

        this._handleOpenPopup = handleOpenPopup;
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

        this._elementImage = this._element.querySelector('.element__img');
        this._elementLikeBtn = this._element.querySelector('.element__like');

        this._setEventListeners();

        this._elementImage.src = this._link;
        this._elementImage.alt = this._title;
        this._element.querySelector('.element__title').textContent = this._title;

        return this._element;
    }

    _likeCard() {
        this._elementLikeBtn.classList.toggle('element__like_active');
    }

    _deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._elementLikeBtn.addEventListener('click', () => {
            this._likeCard();
        });

        this._element.querySelector('.element__delete').addEventListener('click', () => {
            this._deleteCard();
        });

        this._elementImage.addEventListener('click', () => {
            this._handleOpenPopup(this._title, this._link) ;
        });
    }
}