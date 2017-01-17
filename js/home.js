//one page scroll
$(document).ready(function() {
    $('#fullpage').fullpage({
        hybrid:true,
        verticalCentered:false,
        fitToSection:false,
        anchors: ['section-1', 'section-2', 'section-3', 'section-4']
//            navigation: true,
//            navigationPosition: 'right',

    });
});


//Grid points
var canvasWidth = window.outerWidth;
var canvasHeight = window.outerHeight;

const cell_size = 45;
const width = canvasWidth;
const height = canvasHeight;

function generateGridData(cell_size, width, height) {
    const cols = Math.floor(width / cell_size);
    const rows = Math.floor(height / cell_size);
    // array of data points with x,y start / end coords for each cell
    let data = [];
    const x_offset = cell_size / 2;
    const y_offset = cell_size / 2;

    console.log(`Creating a ${cols}x${rows} grid`);

    for (let i = 0; i < rows; i++) {
        const ypos = i * cell_size + y_offset;
        let row_group = [];
        for (let j = 0; j < cols; j++) {
            const xpos = j * cell_size + x_offset;
            row_group.push({
                x_start: xpos,
                y_start: ypos,
                x_end: xpos + cell_size,
                y_end: ypos + cell_size,
            });
        }
        data.push(row_group);
    }
    //  console.log("data", data);
    return data;
}

function createGrid() {
    const radius = 1;
    const fill = "#ffffff";

    let gridRows = canvas.selectAll(".grid-row")
        .data(grid)
        .enter()
        .append("g")
        .attr("class", "grid-row")

    const points = gridRows
            .selectAll(".grid-points")
            .data((d) => d)
.enter()
        .append("circle")
        .attr("class", "grid-points")
        .attr("cx", (pt) => pt.x_start)
.attr("cy", (pt) => pt.y_start)
.attr("r", radius)
        .style("fill", fill);
}

/*function dragListener(ev){
 console.log("mousemove event", ev);
 }*/

const grid = generateGridData(cell_size, width, height);
var canvas = d3.select("#canvas")
    .append("svg")
    .attr("class", "grid")
    .attr("width", width)
    .attr("height", height);

console.log("d3.behaviour", d3);

createGrid();
// addDraggableShapes();

//Grid layout
$(document).ready(function() {
    $('#pinBoot').pinterest_grid({
        no_columns: 4,
        padding_x: 10,
        padding_y: 10,
        margin_bottom: 50,
        single_column_breakpoint: 700
    });
});

/*
 Ref:
 Thanks to:
 http://www.jqueryscript.net/layout/Simple-jQuery-Plugin-To-Create-Pinterest-Style-Grid-Layout-Pinterest-Grid.html
 */


/*
 Pinterest Grid Plugin
 Copyright 2014 Mediademons
 @author smm 16/04/2014

 usage:

 $(document).ready(function() {

 $('#blog-landing').pinterest_grid({
 no_columns: 4
 });

 });


 */
;(function ($, window, document, undefined) {
    var pluginName = 'pinterest_grid',
        defaults = {
            padding_x: 10,
            padding_y: 10,
            no_columns: 3,
            margin_bottom: 50,
            single_column_breakpoint: 700
        },
        columns,
        $article,
        article_width;

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            resize_finish;

        $(window).resize(function() {
            clearTimeout(resize_finish);
            resize_finish = setTimeout( function () {
                self.make_layout_change(self);
            }, 11);
        });

        self.make_layout_change(self);

        setTimeout(function() {
            $(window).resize();
        }, 500);
    };

    Plugin.prototype.calculate = function (single_column_mode) {
        var self = this,
            tallest = 0,
            row = 0,
            $container = $(this.element),
            container_width = $container.width();
        $article = $(this.element).children();

        if(single_column_mode === true) {
            article_width = $container.width() - self.options.padding_x;
        } else {
            article_width = ($container.width() - self.options.padding_x * self.options.no_columns) / self.options.no_columns;
        }

        $article.each(function() {
            $(this).css('width', article_width);
        });

        columns = self.options.no_columns;

        $article.each(function(index) {
            var current_column,
                left_out = 0,
                top = 0,
                $this = $(this),
                prevAll = $this.prevAll(),
                tallest = 0;

            if(single_column_mode === false) {
                current_column = (index % columns);
            } else {
                current_column = 0;
            }

            for(var t = 0; t < columns; t++) {
                $this.removeClass('c'+t);
            }

            if(index % columns === 0) {
                row++;
            }

            $this.addClass('c' + current_column);
            $this.addClass('r' + row);

            prevAll.each(function(index) {
                if($(this).hasClass('c' + current_column)) {
                    top += $(this).outerHeight() + self.options.padding_y;
                }
            });

            if(single_column_mode === true) {
                left_out = 0;
            } else {
                left_out = (index % columns) * (article_width + self.options.padding_x);
            }

            $this.css({
                'left': left_out,
                'top' : top
            });
        });

        this.tallest($container);
        $(window).resize();
    };

    Plugin.prototype.tallest = function (_container) {
        var column_heights = [],
            largest = 0;

        for(var z = 0; z < columns; z++) {
            var temp_height = 0;
            _container.find('.c'+z).each(function() {
                temp_height += $(this).outerHeight();
            });
            column_heights[z] = temp_height;
        }

        largest = Math.max.apply(Math, column_heights);
        _container.css('height', largest + (this.options.padding_y + this.options.margin_bottom));
    };

    Plugin.prototype.make_layout_change = function (_self) {
        if($(window).width() < _self.options.single_column_breakpoint) {
            _self.calculate(true);
        } else {
            _self.calculate(false);
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new Plugin(this, options));
            }
        });
    }

})(jQuery, window, document);