//const = document.querySelector('.'); //


//===== vars =====

const popups = document.querySelectorAll('.popup'); //список окон
const popupsCloseBtns = document.querySelectorAll('.popup__cls-btn'); //список кнп для закрытия окон

const elementsContainer = document.querySelector('.elements'); //секция с карточками
const elementTemplate = document.querySelector('.template').content; //шаблон карточки с содержимым

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

//===== funcs =====

// open for all
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEscBtn);
};

// close for all
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEscBtn);
};

// create new elements
function createElement(el) {
  const newElement = elementTemplate.querySelector('.element').cloneNode(true);
  const newElementImg = newElement.querySelector('.element__img');
  const newElementTitle = newElement.querySelector('.element__title');

  const newElementDeleteBtn = newElement.querySelector('.element__delete');
  const newElementLikeBtn = newElement.querySelector('.element__like');

  newElementImg.src = el.link;
  newElementImg.alt = el.name;
  newElementTitle.textContent = el.name;

  newElementLikeBtn.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like_active');
  });

  newElementDeleteBtn.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });

  newElementImg.addEventListener('click', () => {
      imagePopupImage.src = el.link;
      imagePopupImage.alt = el.name;
      imagePopupCaption.textContent = el.name;
      openPopup(imagePopup);
  });

  return newElement;
};

// ===== action =====

//inital cards creation
initialCards.forEach((card) => {
  elementsContainer.append(createElement(card));
});

// close popup
popupsCloseBtns.forEach((i) => {
  const popupCurrent = i.closest('.popup');
  i.addEventListener('click', () => {
    closePopup(popupCurrent)
  })
});

// edit place data
placeEditBtn.addEventListener('click', () => {
  openPopup(placePopup);
});

// open profile and load current data
profileEditBtn.addEventListener('click', () => {
  profilePopupInputName.value = profileName.textContent;
  profilePopupInputJob.value = profileJob.textContent;
  openPopup(profilePopup);
});

// edit profile data
profilePopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  profileName.textContent = profilePopupInputName.value;
  profileJob.textContent = profilePopupInputJob.value;
  closePopup(profilePopup);
});

// create new card by user
placePopupForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const objectPlace = {
    name: placePopupInputTitle.value,
    link: placePopupInputLink.value
  };
  elementsContainer.prepend(createElement(objectPlace, set));

  placePopupForm.reset();
  closePopup(placePopup);
});

placePopupForm.addEventListener('reset', () => {
  const button = placePopupForm.querySelector(set.saveButtonSelector);
  disableSubmitButton(button, set)
});

// ====================== проектная 6 ======================

// close with Esc
function closePopupWithEscBtn(evt) {
  if(evt. key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

// close with overlay
function closePopupWithOverlay(evt) {
  if(evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  };
};

popups.forEach((popup) => {
  popup.addEventListener('click', closePopupWithOverlay);
});
