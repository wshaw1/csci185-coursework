let x = 100;
let y = 200;
let width = 50;
let fillColor = 'white';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

const moveController = ev => {
    console.log(ev.code);
    if (ev.code == 'KeyW') {
        console.log('up');
        y=y-2;
    }
    if (ev.code == 'KeyA') {
        console.log('left');
        x=x-2;
    }
    if (ev.code == 'KeyS') {
        console.log('down');
        y=y+2;
    }
    if (ev.code == 'KeyD') {
        console.log('right');
        x=x+2;
    }
    if (ev.code == 'Space') {
        width = width + 10;
    }
    if (ev.code == 'ShiftRight') {
        width = width - 10;
    }
    // a arrow moves circle left
    // d arrow moves circle right
    // w moves circle up
    // s moves circle down

    // redraw circle:
    clear();
    noFill();
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
