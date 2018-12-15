'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;


var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

function generateObjects() {
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

  var randomI = function (arr) {
    var i = Math.floor(Math.random() * arr.length);
    return i;
  };

  var result = [];

  for (var i = 0; i < 4; i++) {
    result.push({
      name: names[randomI(names)] + ' ' + surnames[randomI(surnames)],
      coatColor: coatColor[randomI(coatColor)],
      eyesColor: eyesColor[randomI(eyesColor)]
    });
  }
  return result;

}

var wizards = generateObjects();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

wizards.map(function (wiz) {
  fragment.appendChild(renderWizard(wiz));
});
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (e) {
  if (e.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  window.dialog();
};

var resetPopupCoordinates = function () {
  setup.style.left = null;
  setup.style.top = null;
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
  resetPopupCoordinates();
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();

});

setupClose.addEventListener('keydown', function (e) {
  if (e.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (e) {
  if (e.target.value.length < 2) {
    e.target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    e.target.setCustomValidity('');
  }
});

var wizardCoat = document.querySelector('.wizard-coat');
var wizardEye = document.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  var randomI = function (arr) {
    var i = Math.floor(Math.random() * arr.length);
    return i;
  };
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  wizardCoat.style.fill = coatColor[randomI(coatColor)];
});

wizardEye.addEventListener('click', function () {
  var randomI = function (arr) {
    var i = Math.floor(Math.random() * arr.length);
    return i;
  };
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  wizardEye.style.fill = eyesColor[randomI(eyesColor)];
});

fireball.addEventListener('click', function () {
  var randomI = function (arr) {
    var i = Math.floor(Math.random() * arr.length);
    return i;
  };
  var fireballColour = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  fireball.style.background = fireballColour[randomI(fireballColour)];
});

