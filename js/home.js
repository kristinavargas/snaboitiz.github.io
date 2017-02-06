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
    anchors: ['section-1', 'section-2', 'section-3']

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
    //
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


//Grid layout
$(function () {
    if ($(document).width() >= 1024) {
        $('.pinBoot').pinterest_grid({
            no_columns: 4,
            padding_x: 10,
            padding_y: 10,
            margin_bottom: 50
        });
    }
    if($(document).width() < 1024 ){
        $('.pinBoot').pinterest_grid({
            no_columns: 2,
            padding_x: 10,
            padding_y: 10,
            margin_bottom: 50,
            single_column_breakpoint: 568
        });
    }
});


