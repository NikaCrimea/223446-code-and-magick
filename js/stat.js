'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var INDENT_FROM_THE_CLOUD = 20;
var GAP = 50;
var TEXT_HEIGHT = 20;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var COLOUR_YOU = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderColumn = function (ctx, x, y, heightOfColumn, colourOfColumn, name, time) {
  ctx.fillStyle = colourOfColumn;
  ctx.fillRect(x, y, BAR_WIDTH, heightOfColumn);

  ctx.fillStyle = 'black';
  ctx.fillText(name, x, CLOUD_HEIGHT - 10);
  ctx.fillText(Math.round(time), x, CLOUD_HEIGHT - (CLOUD_Y + 2 * TEXT_HEIGHT + heightOfColumn));

};

var getRandomColour = function (hue) {
  var INITIAL_VALUE = 0.1;
  var saturation = (Math.ceil(INITIAL_VALUE + Math.random() * 90) + 5);
  var lightness = (Math.ceil(INITIAL_VALUE + Math.random() * 80) + 10);
  var randomColour = 'hsl(' + hue.toString(10) + ', ' + saturation.toString(10) + '%, ' + lightness.toString(10) + '%' + ')';
  return randomColour;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', CLOUD_X + INDENT_FROM_THE_CLOUD, CLOUD_Y + INDENT_FROM_THE_CLOUD);
  ctx.fillText('Список результатов:', CLOUD_X + INDENT_FROM_THE_CLOUD, CLOUD_Y + 2 * TEXT_HEIGHT);

  times.sort(function (a, b) {
    return a - b;
  });
  var maxTime = Math.round(times[times.length - 1]);

  for (var i = 0; i < names.length; i++) {
    var COORDINATE_X = CLOUD_X + GAP + (GAP + BAR_WIDTH) * i;
    var COLUMN_HEIGHT = (BAR_HEIGHT * Math.round(times[i]) / maxTime);

    if (names[i] === 'Вы') {
      renderColumn(ctx, COORDINATE_X, CLOUD_HEIGHT - COLUMN_HEIGHT - TEXT_HEIGHT, COLUMN_HEIGHT, COLOUR_YOU, names[i], times[i]);
    } else {
      var name = names[i];
      var time = times[i];
      renderColumn(ctx, COORDINATE_X, CLOUD_HEIGHT - COLUMN_HEIGHT - TEXT_HEIGHT, COLUMN_HEIGHT, getRandomColour(210), name, time);
    }
  }
};
