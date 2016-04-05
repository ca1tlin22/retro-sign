var $svg = $('svg');
var $lines = $('.lines');
var $engage = $('.btn:active');
var $btn = $('btn');

$('svg').on('click', function (e) {
  $('.lines').toggleClass('is-pressed');
  $('.engage').toggleClass('.btn:active');
});
