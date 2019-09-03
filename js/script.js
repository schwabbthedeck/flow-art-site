//

function scrollTo(clickedLink, navHeight) {
  // var elementClass = clickedLink.attr('href').replace('#', '.');
  // var scrollToLocation = 0;
  // if (elementClass != '.home') {
  //   elementClass += '-container';
  //   scrollToLocation = $(elementClass).offset().top - navHeight;
  // }
  // if($(window).scrollTop() != scrollToLocation) {
  //   $('html, body').stop().animate({scrollTop: scrollToLocation}, 1000);
  // }
};

$(document).ready(function () {
  // Navigation
  $('a.scroll-link').on('click', function (e) {
    e.preventDefault();
    scrollTo($(this), $('nav').outerHeight());
  });

  // Background image
  $(".home").backstretch("images/background_fullscreen.JPG");
});