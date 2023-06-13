import Card from './Card.js'
import FormValidator from './FormValidator.js'
import { initialCards } from './cards.js'

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  saveButtonSelector: '.popup__save-btn',

  inactiveSaveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_error',
  errorClassActive: 'popup__input-error_active'
};

//===== переменные =====
const forms = document.querySelectorAll(settings.formSelector);
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


//===== функции =====

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

// ===== action =====

//создаем первые 6 карточек
initialCards.forEach((card) => {
  const c = new Card(card, template, openPopup);
  elementsContainer.append(c.generateCard());
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
  openPopup(placePopup);
});

// открываем попап для изменения профиля (имя, работа)
profileEditBtn.addEventListener('click', () => {
  profilePopupInputName.value = profileName.textContent;
  profilePopupInputJob.value = profileJob.textContent;
  openPopup(profilePopup);
});

// сохраняем профиль (имя, работа)
profilePopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = profilePopupInputName.value;
  profileJob.textContent = profilePopupInputJob.value;

  profilePopupForm.reset();
  closePopup(profilePopup);
});

// создаем новую карточку 
placePopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const objectPlace = {
    name: placePopupInputTitle.value,
    link: placePopupInputLink.value
  };

  const c = new Card(objectPlace, template, openPopup);
  elementsContainer.prepend(c.generateCard());

  placePopupForm.reset();
  closePopup(placePopup);
});

// вешаем на все формы слушатель для ресета для отключения кнопки 
forms.forEach((form) => {
  const button = form.querySelector(settings.saveButtonSelector);
  
  form.addEventListener('reset', () => {
    button.classList.add(settings.inactiveSaveButtonClass);
    button.disabled = true;
  });
});

// ====================== проектная 6 ======================

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

// запускаем валидацию форм 
forms.forEach((form) => {
  const vali = new FormValidator(settings, form);
  vali.enableValidation();
})


// ====================== старый код ======================
// create new elements
// function createElement(el) {
//   const newElement = elementTemplate.querySelector('.element').cloneNode(true);
//   const newElementImg = newElement.querySelector('.element__img');
//   const newElementTitle = newElement.querySelector('.element__title');

//   const newElementDeleteBtn = newElement.querySelector('.element__delete');
//   const newElementLikeBtn = newElement.querySelector('.element__like');

//   newElementImg.src = el.link;
//   newElementImg.alt = el.name;
//   newElementTitle.textContent = el.name;

//   newElementLikeBtn.addEventListener('click', (evt) => {
//     evt.target.classList.toggle('element__like_active');
//   });

//   newElementDeleteBtn.addEventListener('click', (evt) => {
//     evt.target.closest('.element').remove();
//   });

//   newElementImg.addEventListener('click', () => {
//       imagePopupImage.src = el.link;
//       imagePopupImage.alt = el.name;
//       imagePopupCaption.textContent = el.name;
//       openPopup(imagePopup);
//   });

//   return newElement;
// };


// placePopupForm.addEventListener('reset', () => {
//   const button = placePopupForm.querySelector(settings.saveButtonSelector);
//   button.classList.add(settings.inactiveSaveButtonClass);
//   button.disabled = true;
// });

//image
// const imagePopup = document.querySelector('.popup_type_image'); //окно просмотра фото
// const imagePopupImage = document.querySelector('.popup__image-photo'); //окно просмотра фото картинка
// const imagePopupCaption = document.querySelector('.popup__image-caption'); //окно просмотра фото подпись


//const elementTemplate = document.querySelector('.template').content; //шаблон карточки с содержимым