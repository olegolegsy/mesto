let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input-name');
let jobInput = formElement.querySelector('.popup__input-job');


function handleFormSubmit (evt) {
  evt.preventDefault();

  let name = nameInput.value;
  let job = jobInput.value;

  let profileName = document.querySelector('.profile__title');
  let profileJob = document.querySelector('.profile__job');

  profileName.textContent = name;
  profileJob.textContent = job;
}

formElement.addEventListener('submit', handleFormSubmit);

let formCls = document.querySelector('.popup__cls-btn');
let popup = document.querySelector('.popup');

function closeForm (evt) {
  evt.preventDefault();

  popup.classList.add('popup_cls')
}

formCls.addEventListener('click', closeForm);

let profileEdit = document.querySelector('.profile__edit-btn');

function openForm (evt) {
  evt.preventDefault();

  popup.classList.remove('popup_cls')
}

profileEdit.addEventListener('click', openForm);
