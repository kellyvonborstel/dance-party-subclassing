$(document).ready(function() {

  window.dancers = [];

  // sets up click handlers for add dancer buttons on index.html
  $('.btn-add-dancer').on('click', function(event) {

    // new object of given type will be created and added to dance area
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we are making
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var height;
    
    // use modulo so dancers will be positioned at different heights
    if (window.dancers.length % 3 === 0) {
      height = $('.dance-area').height() - 460;
    } else if (window.dancers.length % 2 === 0) {
      height = $('.dance-area').height() - 420;
    } else {
      height = $('.dance-area').height() - 380;
    }

    // make a dancer with a random x-position and staggered y-position
    var dancer = new dancerMakerFunction(height, $('.dance-area').width() * Math.random() - 120, 1000);

    window.dancers.push(dancer);
    $('.dance-area').append(dancer.$node);

  });
});
