$(document).ready(function() {

  window.dancers = [];

  // sets up click handlers for add dancer buttons on index.html
  $('.btn-add-dancer').on('click', function(event) {

    // dancerMakerFunctionName is a string which must match one of the
    // dancer maker functions available in global scope
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we are making
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var height;

    // use modulo to stagger height positions for dancers
    if (window.dancers.length % 3 === 0) {
      height = $('.dance-area').height() - 300;
    } else if (window.dancers.length % 2 === 0) {
      height = $('.dance-area').height() - 270;
    } else {
      height = $('.dance-area').height() - 240;
    }

    // make a dancer with a random x-position and staggered y-position
    var dancer = new dancerMakerFunction(height, $('.dance-area').width() * Math.random() - 120, 1000);

    window.dancers.push(dancer);
    $('.dance-area').append(dancer.$node);

  });
});

$('.btn-group').on('click', function(event) {
  window.dancers.forEach(function(dancer) {
    dancer.group();
  });
});

$('.btn-remove').on('click', function(event) {
  window.dancers.forEach(function(dancer) {
    dancer.remove();
  });
});
