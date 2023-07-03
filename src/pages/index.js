//CSS
import '../pages/index.css';

//components
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';

//vars
import { initialCards } from '../utils/cards.js';
import { containerSelector, templateSelector, imagePopupSelector, profilePopupSelector, placePopupSelector } from '../utils/selectors.js';
import { settings, profileSelectors } from '../utils/settings.js';
import { profileEditBtn, profilePopupForm, placeEditBtn, placePopupForm} from '../utils/constants.js';

// ========================= OOP ==============================
const userInfo = new UserInfo(profileSelectors);

// ========================= POPUPS ==============================
//PLACE
const placePopup = new PopupWithForm(placePopupSelector, (data) => {
  elementsContainer.renderer(data);
});
placePopup.setEventListeners();

//PROFILE
const profilePopup = new PopupWithForm(profilePopupSelector, (data) => {
  userInfo.setUserInfo(data);
})
profilePopup.setEventListeners();

//IMAGE
const imagePopup = new PopupWithImage(imagePopupSelector);
imagePopup.setEventListeners();

// ========================= SECTION ==============================
const elementsContainer = new Section({
  items: initialCards,
  renderer: (cardObject) => {
    const newCard = new Card(cardObject, templateSelector, imagePopup.open);
    elementsContainer.addItem(newCard.generateCard()); 
  }
}
, containerSelector);
elementsContainer.setItems();

// ========================= VALIDATORS ==============================
const profileValidation = new FormValidator(settings, profilePopupForm);
const placeValidation = new FormValidator(settings, placePopupForm);

profileValidation.enableValidation();
placeValidation.enableValidation(); 

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
