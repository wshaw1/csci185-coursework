const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

let x = 200;
let speed = 5;
let width = 50;
let color = 'black';
// let wallx = 1000;
// let growMove = 1;

function draw() {
    // frameRate(60);
    clear();

    // turn around:
    if (x >= 500-width/2) {
        speed = speed*-1;
        // x -= growMove;
        // growMove += 1;
        // width += 1;
    }
    if (x <= 100+width*1.5) {
        speed = speed*-1
        // x += growMove;
        // growMove += 1;
        // width += 1;
    }

    // draw walls:
    fill('red');
    rect(100, 0, 50, canvasHeight);
    rect(500, 0, 50, canvasHeight);
    // wallx = wallx - 0.5;
    // if (wallx == 200) {
    //     wallx = 1000;
    // } 

    // draw circle:
    fill(color);
    circle(x, canvasHeight/2, width);
    x += speed;
    // console.log("x position is:", x);

    drawGrid(canvasWidth, canvasHeight);
}

const changeBallColor = ev => {
    console.log(ev.code);
    if (ev.code == 'KeyR') {
        // console.log('change ball red');
        color = 'red';
    } else if (ev.code == 'KeyP') {
        color = 'blue';
    } else if (ev.code == 'Space') {
        
    }
}


// Add event listener on keydown
document.addEventListener('keydown', changeBallColor);