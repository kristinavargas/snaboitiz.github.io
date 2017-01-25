var sn = sn || {};
sn.init = function () {
    sn.initCanvasGrid();
    sn.iconTransition();
    // sn.hideNavbarOnScroll();
    sn.onNavbarScroll();
    sn.initJekyllSearch();
};

sn.hideNavbarOnScroll = function () {
    var myElement = document.querySelector("header");
    var headroom = new Headroom(myElement,{
        "offset": 205,
        "tolerance": 5,
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
        }
    });
    headroom.init();
};

sn.iconTransition = function () {

    $('#icon-transition').on('click', function () {
        $(this).toggleClass('open');
    });
};

sn.initCanvasGrid = function () {
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

};

sn.onNavbarScroll = function () {
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
};

sn.initJekyllSearch = function () {
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

};

$(function () {
    sn.init()
});
