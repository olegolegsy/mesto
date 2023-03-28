const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//const = document.querySelector('.'); //


//===== vars =====
const popups = document.querySelectorAll('.popup'); //список окон
const popupsCloseBtns = document.querySelectorAll('.popup__cls-btn'); //список кнп для закрытия окон
const elements = document.querySelector('.elements'); //секция с карточками
const elementTemplate = document.querySelector('.template').content; //шаблон карточки с содержимым

//profile
const profileEditBtn = document.querySelector('.profile__edit-btn'); //кнопка редкт профиля
const profilePopup = document.querySelector('.popup_type_profile'); //окно редкт профиля
const profilePopupInputName = document.querySelector('.popup__input_type_name'); //окно ввод имя проф
const profilePopupInputJob = document.querySelector('.popup__input_type_job'); //окно ввод работа проф
const profileName = document.querySelector('.profile__title'); //проф имя
const profileJob = document.querySelector('.profile__job'); //проф работа
const profilePopupForm = document.querySelector('.popup__form_profile');//оконо проф форма

//place
const placePopup = document.querySelector('.popup_type_place'); //окно редкт карточки
const placeEditBtn = document.querySelector('.profile__add-btn'); //кнп добавления карточки
const placePopupForm = document.querySelector('.popup__form_place');//оконо карточка форма
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
}

// close for all
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// create new elements
function createElement(el) {
  const newElement = elementTemplate.querySelector('.element').cloneNode(true);
  const newElementImg = newElement.querySelector('.element__img');
  const newElementDeleteBtn = newElement.querySelector('.element__delete');
  const newElementLikeBtn = newElement.querySelector('.element__like');
  const newElementTitle = newElement.querySelector('.element__title');

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
}

// ===== action =====

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
  elements.prepend(createElement(objectPlace));
  placePopupInputTitle.value = '';
  placePopupInputLink.value = '';
  closePopup(placePopup);
});

// close popup
popupsCloseBtns.forEach((i) => {
  i.addEventListener('click', () => {
    closePopup(i.closest('.popup'))
  })
});

// edit place data
placeEditBtn.addEventListener('click', () => {
  openPopup(placePopup);
});

//inital cards creation
initialCards.forEach((card) => {
  elements.append(createElement(card));
});
