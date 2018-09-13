console.log('hi')
$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 630) { 
          $('.nav').addClass('solid');
      } else {
          $('.nav').removeClass('solid');
      }
    });
});