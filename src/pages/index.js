//CSS
import '../pages/index.css';

//components
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Api from '../components/Api.js';

//vars
import { initialCards } from '../utils/cards.js';
import { containerSelector, templateSelector, imagePopupSelector, profilePopupSelector, placePopupSelector, avatarPopupSelector } from '../utils/selectors.js';
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
      const newCard = new Card(cardObject, templateSelector, imagePopup.open);
      elementsContainer.addItem(newCard.generateCard()); 
    }
  }
  , containerSelector);

// ========================= POPUPS ==============================
//PLACE
const placePopup = new PopupWithForm(placePopupSelector, (data) => {
  
});
placePopup.setEventListeners();

//PROFILE
const profilePopup = new PopupWithForm(profilePopupSelector, (data) => {
  api.setUserInfo(data)
  .then(res => userInfo.setUserInfo(res))
  .catch(err => console.error(`Ошибка: ${err}`))
})
profilePopup.setEventListeners();

//IMAGE
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

//AVATAR
const avatarPopup = new PopupWithForm(avatarPopupSelector, (data) => {
  api.setAvatar(data)
  .then((res) => {
    userInfo.setUserInfo(res);
  })
  .catch(err => console.error(`Ошибка: ${err}`))
});
avatarPopup.setEventListeners();

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
  
Promise.all([userInfo.getUserInfo(), api.getCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData)

    cardsData.forEach((cardObject) => {
      cardObject.idMy = userData._id;
    })

    elementsContainer.setItems(cardsData);

    console.log(userData)
    console.log(cardsData)
  })