'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var TEXT_HEIGHT = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var COLOUR_YOU = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return Math.round(maxElement);
};

var getRgbaColour = function () {
  var r = 0;
  var g = Math.round(Math.random() * 256);
  var b = 222;
  var a = 1;
  var randomRgbaColour = 'rgba(' + r.toString(10) + ', ' + g.toString(10) + ', ' + b.toString(10) + ', ' + a.toString(10) + ')';
  return randomRgbaColour;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 20);
  ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 2 * TEXT_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var COORDINATE_X = CLOUD_X + GAP + (GAP + BAR_WIDTH) * i;
    var COLOMN_HEIGHT = (BAR_HEIGHT * Math.round(times[i]) / maxTime);

    ctx.fillStyle = 'black';
    ctx.fillText(names[i], COORDINATE_X, CLOUD_HEIGHT - 10);
    ctx.fillText(Math.round(times[i]), COORDINATE_X, CLOUD_HEIGHT - (CLOUD_Y + 2 * TEXT_HEIGHT + COLOMN_HEIGHT));

    if (names[i] === 'Вы') {
      ctx.fillStyle = COLOUR_YOU;
    } else {
      ctx.fillStyle = getRgbaColour();
    }
    ctx.fillRect(COORDINATE_X, CLOUD_HEIGHT - COLOMN_HEIGHT - TEXT_HEIGHT, BAR_WIDTH, COLOMN_HEIGHT);
  }
};
