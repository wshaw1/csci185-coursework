const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

const heart = [
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
];

const frank = [
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 2, 1, 2, 1, 2, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 2, 3, 3, 3, 3, 3, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 2, 2, 0, 2, 2, 0, 0]
];

const mario = [
    [0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0],
    [0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 2, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [0, 2, 2, 2, 3, 3, 2, 3, 2, 2, 2, 0],
    [2, 3, 3, 2, 2, 3, 2, 3, 3, 3, 3, 2],
    [2, 3, 3, 2, 2, 3, 3, 2, 3, 3, 3, 2],
    [0, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 0],
    [0, 0, 2, 2, 3, 3, 3, 3, 3, 2, 0, 0],
    [0, 2, 1, 1, 2, 2, 1, 1, 2, 0, 0, 0],
    [2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 0, 0],
    [2, 1, 1, 1, 1, 2, 2, 2, 2, 2, 0, 0],
    [0, 2, 3, 3, 3, 2, 2, 0, 2, 2, 0, 0],
    [0, 2, 3, 3, 1, 1, 1, 2, 2, 2, 0, 0],
    [0, 0, 2, 1, 1, 1, 1, 1, 2, 0, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0]
];
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);

    drawPixelArt(heart, 20, 20, 15);
    drawPixelArt(frank, 120, 250, 12, palette=['white', 'lime', 'black', 'yellow']);
    drawPixelArt(heart, 420, 250, 8, palette=['white', 'purple', 'black', 'pink']);
    drawPixelArt(mario, 55, 415, 6, palette=['white', 'green', 'black', 'tan']);
    drawPixelArt(heart, 350, 135, 5);
    drawPixelArt(frank, 315, 380, 15);
    drawPixelArt(mario, 420, 10, 10, palette=['white', 'red', 'black', 'tan']);

}

function drawPixelArt(grid, x, y, pixel, palette=['white','hotpink','black','white']) {
    let i = 0;
    while (i < grid.length) {
        drawRow(grid[i], x, y, pixel, palette);
        i++;
        y += pixel;
    }
}


function drawRow (row, topX, topY, pixelWidth, palette=['transparent','hotpink','black','white']) {
    let i = 0;
    while (i < row.length) {
        if (row[i] == 0) {
            fill(palette[0]);
        } else if (row[i] == 1) {
            fill(palette[1]);
        } else if (row[i] == 2) {
            fill(palette[2]);
        } else {
            fill(palette[3]);
        }
        square(topX, topY, pixelWidth)
        topX += pixelWidth;
        i++;
    }
}
