// (function($) {
    // "use strict"; // Start of use strict

    // Collapse the navbar when page is scrolled
$(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
        $("#mainNav").css('background-color', "#42f448");
    }
    // else {
    //     $("#mainNav").removeClass("navbar-shrink");
    // }
});
// });
    
// $(function() {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 50) {
//          $(‘body’).addClass(‘changeColor’)
//     }
//         if ($(this).scrollTop() < 50) {
//          $(‘body’).removeClass(‘changeColor’)
//     }
//     });
// });
// })(jQuery); // End of use strict