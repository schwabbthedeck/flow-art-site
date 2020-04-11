// main js file

$(document).ready(function () {
  // Background image
  $(".home").backstretch("images/background_fullscreen.JPG");


  // Navigation
  // Select all links with hashes
  // $('a[href*="#"]')
  // // Remove links that don't actually link to anything
  // .not('[href="#"]')
  // .not('[href="#0"]')
  // .click(function(event) {
  //   // On-page links
  //   if (
  //     location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
  //     && 
  //     location.hostname == this.hostname
  //   ) {
  //     // Figure out element to scroll to
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     // Does a scroll target exist?
  //     if (target.length) {
  //       // Only prevent default if animation is actually gonna happen
  //       event.preventDefault();
  //       $('html, body').animate({
  //         scrollTop: target.offset().top
  //       }, 1000, function() {
  //         // Callback after animation
  //         // Must change focus!
  //         var $target = $(target);
  //         $target.focus();
  //         if ($target.is(":focus")) { // Checking if the target was focused
  //           return false;
  //         } else {
  //           $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
  //           $target.focus(); // Set focus again
  //         };
  //       });
  //     }
  //   }
  // });

  // add scrolling to all links on the page
  $('a.scroll-link').on('click', function (e) {
    e.preventDefault();
    scrollTo($(this), $('nav').outerHeight());
  });

  // scroll function for navigation
  function scrollTo(clickedLink, navHeight) {
    var elementClass = clickedLink.attr('href').replace('#', '.');
    var scrollToLocation = 0;
    if (elementClass != '.home') {
      elementClass += '-container';
      scrollToLocation = $(elementClass).offset().top - navHeight;
    }
    if($(window).scrollTop() != scrollToLocation) {
      $('html, body').animate({scrollTop: scrollToLocation}, 1000, function () {
        // callback to change focus for accessibility
        
      });
    }
  };

  
});