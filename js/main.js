var $svg = $('svg');
var $lines = $('.lines');
var $engage = $('.engage');

$('svg').on('click', function (e) {
  $('.lines').toggleClass('is-pressed');
  $('.engage').toggleClass('is-engage');
});
