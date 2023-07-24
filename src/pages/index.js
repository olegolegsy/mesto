//CSS
import '../pages/index.css';

//components
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirmButton from '../components/PopupWithConfirmButton.js';
import Api from '../components/Api.js';

//vars
import { containerSelector, templateSelector, imagePopupSelector, profilePopupSelector, placePopupSelector, avatarPopupSelector, confirmPopupSelector } from '../utils/selectors.js';
import { settings, profileSelectors } from '../utils/settings.js';
import { profileEditBtn, profilePopupForm, placeEditBtn, placePopupForm, avatarEditBtn, avatarPopupForm} from '../utils/constants.js';

// ========================= OOP ==============================
const userInfo = new UserInfo(profileSelectors);

// ========================= Api ==============================
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-71',
  headers: {
    authorization: '63e51c94-2a20-4ac4-b2ef-ac2b1cdb1198',
    'Content-Type': 'application/json'
}});

  // ========================= SECTION ==============================
  const elementsContainer = new Section({
    renderer: (cardObject) => {
      const newCard = new Card(cardObject, templateSelector, imagePopup.open, confirmPopup.open,
        (elementLike, idCard) => {
          if(elementLike.classList.contains('element__like_active')) {
            api.removeLike(idCard)
              .then((res) => {
                newCard.toggleLike(res);
            })
            .catch(err => console.error(`Ошибка: ${err}`))
          } else {
            api.addLike(idCard)
              .then((res) => {
                newCard.toggleLike(res);
            })
            .catch(err => console.error(`Ошибка: ${err}`))
          }
        });
        
      elementsContainer.addItem(newCard.generateCard()); 
    }
  }
  , containerSelector);

// ========================= POPUPS ==============================
//PLACE
const placePopup = new PopupWithForm(placePopupSelector, (data) => {
  Promise.all([api.getUserInfo(), api.setCard(data)])
    .then(([userData, cardData]) => {
      cardData.idMy = userData._id;
      elementsContainer.renderer(cardData);
    })
    .catch(err => console.error(`Ошибка: ${err}`))
    .finally(placePopup.buttonWait());
});
placePopup.setEventListeners();

//PROFILE
const profilePopup = new PopupWithForm(profilePopupSelector, (data) => {
  api.setUserInfo(data)
    .then(() => userInfo.setUserInfo(data))
    .catch(err => console.error(`Ошибка: ${err}`))
    .finally(profilePopup.buttonWait());
})
profilePopup.setEventListeners();

//IMAGE
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

//AVATAR
const avatarPopup = new PopupWithForm(avatarPopupSelector, (data) => {
  api.setAvatar(data)
    .then(res => userInfo.setUserAvatar(res))
    .catch(err => console.error(`Ошибка: ${err}`))
    .finally(avatarPopup.buttonWait());
});
avatarPopup.setEventListeners();

//CONFIRM
const confirmPopup = new PopupWithConfirmButton(confirmPopupSelector, (card, idCard) => {
  api.removeCard(idCard)
    .then(() => {
      card.removeCard();
    })
    .catch(err => console.error(`Ошибка: ${err}`))
});
confirmPopup.setEventListeners();

// ========================= VALIDATORS ==============================
const profileValidation = new FormValidator(settings, profilePopupForm);
const placeValidation = new FormValidator(settings, placePopupForm);
const avatarValidation = new FormValidator(settings, avatarPopupForm);

profileValidation.enableValidation();
placeValidation.enableValidation(); 
avatarValidation.enableValidation();

// ========================= LISTENERS ==============================
placeEditBtn.addEventListener('click', () => {
  placeValidation.resetValidation();
  placeValidation.disableSubmitButton();
  placePopup.open();
});

profileEditBtn.addEventListener('click', () => {
  profileValidation.resetValidation();
  profileValidation.disableSubmitButton();
  profilePopup.setInputsValue(userInfo.getUserInfo());
  profilePopup.open();
});

avatarEditBtn.addEventListener('click', () => {
  avatarValidation.resetValidation();
  avatarValidation.disableSubmitButton();
  avatarPopup.open();
});

// ========================= Api ==============================

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cardsData]) => {
    cardsData.forEach((card) => {
      card.idMy = userData._id;
    });

    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    elementsContainer.setItems(cardsData);
  })
  .catch(err => console.error(`Ошибка: ${err}`))