'use strict';

(function () {
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
})();
