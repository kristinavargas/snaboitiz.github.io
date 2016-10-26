//On navbar scroll
$(function () {
    if (window.pageYOffset > 50 && $(document).width() >= 992) {
        $('nav').addClass('navbar-shrink')
        $(window).scroll(function () {
            if ($(document).scrollTop() > 50 && $(document).width() >= 992) {
                $('nav').addClass('navbar-shrink');
            } else {
                $('nav').removeClass('navbar-shrink');
            }
        });
    }
    else if (window.pageYOffset < 50 && $(document).width() >= 992) {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 50 && $(document).width() >= 992) {
                $('nav').addClass('navbar-shrink');
            } else {
                $('nav').removeClass('navbar-shrink');
            }
        });
    }
    if ($(document).width() <= 991 && window.pageYOffset > 50 || $(document).width() <= 991 && window.pageYOffset < 50) {
        $('nav').addClass('navbar-shrink');
    }
});

