'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

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
generateObjects();

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
