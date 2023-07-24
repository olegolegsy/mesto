export default  class Card {
    constructor(cardObject, templateSelector, handleOpenPopup, handleConfirmPopup, handleLike) {
        this._name = cardObject.name;
        this._link = cardObject.link;

        this._idCard = cardObject._id;
        this._idMy = cardObject.idMy;
        this._id = cardObject.owner._id;

        this._likes = cardObject.likes;

        this._templateSelector = templateSelector;

        this._handleOpenPopup = handleOpenPopup;
        this._handleConfirmPopup = handleConfirmPopup;
        this._handleLike = handleLike;
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
        this._elementDeleteBtn = this._element.querySelector('.element__delete');
        this._elementCounter = this._element.querySelector('.element__counter');

        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        this._setEventListeners();
        
        return this._element;
    }

    _isLiked() {
        this._likes.forEach((like) => {
            if(like._id === this._idMy) {
                this._elementLikeBtn.classList.add('element__like_active');
                return
            }
        });
    }

    _setLikes() {
        this._elementCounter.textContent = this._likes.length;
    }

    toggleLike(res) {
        this._likes = res.likes;
        this._elementLikeBtn.classList.toggle('element__like_active');
        this._setLikes();
    }


    removeCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._elementLikeBtn.addEventListener('click', () => {
            this._handleLike(this._elementLikeBtn, this._idCard);
        });

        this._elementImage.addEventListener('click', () => {
            this._handleOpenPopup(this._name, this._link);
        });

        if(this._idMy === this._id) {
            this._elementDeleteBtn.addEventListener('click', () => {
                this._handleConfirmPopup(this, this._idCard);
            });
        } else {
            this._elementDeleteBtn.remove();
            this._elementDeleteBtn = null;
        }

        this._setLikes();
        this._isLiked();
    }
}