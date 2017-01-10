//Navbar burger transition
$('#icon-transition').on('click', function () {
    $(this).toggleClass('open');
});

//On navbar scroll
$(function () {
    if (window.pageYOffset > 50 && $(document).width() >= 1024) {
        $('nav').addClass('navbar-shrink')
        $(window).scroll(function () {
            if ($(document).scrollTop() > 50 && $(document).width() >= 1024) {
                $('nav').addClass('navbar-shrink');
            } else {
                $('nav').removeClass('navbar-shrink');
            }
        });
    }
    else if (window.pageYOffset < 50 && $(document).width() >= 1024) {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 50 && $(document).width() >= 1024) {
                $('nav').addClass('navbar-shrink');
            } else {
                $('nav').removeClass('navbar-shrink');
            }
        });
    }
    if ($(document).width() <= 991 && window.pageYOffset > 50 || $(document).width() <= 1024 && window.pageYOffset < 50) {
        $('nav').addClass('navbar-shrink');
    }
});

SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li class="result-list"><a class="result-link" href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: 'No results found',
    limit: 7,
    fuzzy: false,
    include: ['Welcome']
});



