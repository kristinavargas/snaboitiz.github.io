var slideIndex2 = 1, sliding = false;

$('#fullpage').fullpage({
    hybrid:true,
    lockAnchors:true,
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'Our Plants', 'News'],
    verticalCentered:false,
    fitToSection:false,
    recordHistory:false,
    keyboardScrolling: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    scrollingSpeed: 1000

    // afterRender: function(){
    //     var pluginContainer = $(this);
    //     console.log("The resulting DOM structure is ready");
    // },
    //
    // onLeave: function (index, nextIndex, direction) {
    //     if (index == 2 && !sliding) {
    //         if (direction == 'down' && slideIndex2 < 3) {
    //             sliding = true;
    //             $.fn.fullpage.moveSlideRight();
    //             return false;
    //         } else if (direction == 'up' && slideIndex2 > 1) {
    //             sliding = true;
    //             $.fn.fullpage.moveSlideLeft();
    //             return false;
    //         }
    //     } else if (sliding) {
    //         return false;
    //     }
    //
    // },

    // afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
    //     sliding = false;
    // },
    //
    // onSlideLeave  : function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
    //     if (index == 2) {
    //         if (direction == 'right') {
    //             sliding = true;
    //             slideIndex2++;
    //         }
    //
    //         if (direction == 'left') {
    //             sliding = true;
    //             slideIndex2--;
    //         }
    //     }
    // }
});

$(function() {
    var $grid = $('.grid2').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item2'
    });
    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });


});

$(window).on("load",function () {
    $('.grid').isotope({
        resizable: true,
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer'
        }
    });
});









