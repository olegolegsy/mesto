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

  let name = nameInput.value;
  let job = jobInput.value;

  profileName.textContent = name;
  profileJob.textContent = job;

  popup.classList.remove('popup_opened');
}

function openForm () {
  popup.classList.add('popup_opened')
}

formElement.addEventListener('click', handleFormSubmit);
formCls.addEventListener('click', closeForm);
profileEdit.addEventListener('click', openForm);

