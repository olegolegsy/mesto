let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__input_input_name');
let jobInput = document.querySelector('.popup__input_input_job');

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

  closeForm();
}

function openForm () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened')
}

formElement.addEventListener('submit', handleFormSubmit);
formCls.addEventListener('click', closeForm);
profileEdit.addEventListener('click', openForm);

