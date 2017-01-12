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