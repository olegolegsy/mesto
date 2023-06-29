//components
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';

//vars
import { initialCards } from '../scripts/utils/cards.js';
import { settings } from '../scripts/utils/settings.js';

//===== переменные =====
const popups = document.querySelectorAll('.popup'); //список окон
const popupsCloseBtns = document.querySelectorAll('.popup__cls-btn'); //список кнп для закрытия окон

const elementsContainer = document.querySelector('.elements'); //секция с карточками
const template = '.template';

//profile
const profileEditBtn = document.querySelector('.profile__edit-btn'); //кнопка редкт профиля
const profilePopup = document.querySelector('.popup_type_profile'); //окно редкт профиля
const profilePopupForm = document.querySelector('.popup__form_profile');//оконо проф форма
//inputs
const profilePopupInputName = document.querySelector('.popup__input_type_name'); //окно ввод имя проф
const profilePopupInputJob = document.querySelector('.popup__input_type_job'); //окно ввод работа проф
const profileName = document.querySelector('.profile__title'); //проф имя
const profileJob = document.querySelector('.profile__job'); //проф работа

//place
const placePopup = document.querySelector('.popup_type_place'); //окно редкт карточки
const placeEditBtn = document.querySelector('.profile__add-btn'); //кнп добавления карточки
const placePopupForm = document.querySelector('.popup__form_place');//оконо карточка форма
//inputs
const placePopupInputTitle = document.querySelector('.popup__input_type_title'); //окно ввод имя карточка
const placePopupInputLink = document.querySelector('.popup__input_type_link'); //окно ввод фото карточка

//image
const imagePopup = document.querySelector('.popup_type_image'); //окно просмотра фото
const imagePopupImage = document.querySelector('.popup__image-photo'); //окно просмотра фото картинка
const imagePopupCaption = document.querySelector('.popup__image-caption'); //окно просмотра фото подпись

// валидаторы
const profileValidation = new FormValidator(settings, profilePopupForm);
const newCardValidation = new FormValidator(settings, placePopupForm);

//===== функции =====

// коллбек для открытия попапа с картинкой 
function handleOpenPopup(title, link) {
  imagePopupImage.src = link; 
  imagePopupImage.alt = title; 
  imagePopupCaption.textContent = title; 
  openPopup(imagePopup); 
}  

// открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEscBtn);
};

// закрыть попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEscBtn);
};

// создаем карточку 
function createCard(card, template, handleOpenPopup) {
  const newCard = new Card(card, template, handleOpenPopup);
  return newCard.generateCard()
}

// ===== action =====

//создаем первые 6 карточек
initialCards.forEach((card) => {
  elementsContainer.append(createCard(card, template, handleOpenPopup));
});

// вешаем слушатель закрытие попапа на все кнопки 
popupsCloseBtns.forEach((i) => {
  const popupCurrent = i.closest('.popup');
  i.addEventListener('click', () => {
    closePopup(popupCurrent)
  })
});

// открываем попап создания новой карточки 
placeEditBtn.addEventListener('click', () => {
  newCardValidation.resetValidation();
  newCardValidation.disableSubmitButton();
  placePopupForm.reset();
  openPopup(placePopup);
});

// открываем попап для изменения профиля (имя, работа)
profileEditBtn.addEventListener('click', () => {
  profilePopupInputName.value = profileName.textContent;
  profilePopupInputJob.value = profileJob.textContent;

  profileValidation.resetValidation();
  profileValidation.disableSubmitButton();

  openPopup(profilePopup);
});

// сохраняем профиль (имя, работа)
profilePopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = profilePopupInputName.value;
  profileJob.textContent = profilePopupInputJob.value;

  closePopup(profilePopup);
});

// создаем новую карточку 
placePopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const objectPlace = {
    title: placePopupInputTitle.value,
    link: placePopupInputLink.value
  };

  elementsContainer.prepend(createCard(objectPlace, template, handleOpenPopup));

  closePopup(placePopup);
});

// закрытие попапа Esc
function closePopupWithEscBtn(evt) {
  if(evt. key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

// закрытие попапа overlay
function closePopupWithOverlay(evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  };
};

// вешаем на все попапы закрытие попапа overlay
popups.forEach((popup) => {
  popup.addEventListener('click', closePopupWithOverlay);
});

// ====================== проектная 7 ======================

profileValidation.enableValidation();
newCardValidation.enableValidation(); 