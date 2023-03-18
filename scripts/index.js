let formElement = document.querySelector('.popup__save-btn');

let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');

let profileName = document.querySelector('.profile__title');
let profileJob = document.querySelector('.profile__job');

let formCls = document.querySelector('.popup__cls-btn');
let popup = document.querySelector('.popup');
let profileEdit = document.querySelector('.profile__edit-btn');

function closeForm () {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popup.classList.remove('popup_opened');
}

function openForm () {

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  popup.classList.add('popup_opened')
}

formElement.addEventListener('click', handleFormSubmit);
formCls.addEventListener('click', closeForm);
profileEdit.addEventListener('click', openForm);

