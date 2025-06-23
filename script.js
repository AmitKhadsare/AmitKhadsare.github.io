$(document).ready(function() {
    // Mobile Menu Toggle
    $('.mobile-menu-toggle .hamburger-icon').click(function() {
        $('.mobile-nav-panel').slideToggle();
    });
    // Clone menu for mobile
    var mobileMenu = $('#nav_area .nav-menu').html();
    $('.mobile-nav-panel').html(mobileMenu);

    // Sticky Header
    var navArea = $('#nav_area');
    if (navArea.length) {
        var stickyNavTop = navArea.offset().top;
        var placeholder = $('<div id="nav-placeholder"></div>').height(navArea.outerHeight()).hide();
        navArea.after(placeholder);

        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyNavTop) {
                navArea.addClass('sticky');
                placeholder.show();
            } else {
                navArea.removeClass('sticky');
                placeholder.hide();
            }
        });
    }
});