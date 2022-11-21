const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 5,
    color: 'hotpink'
};

const c2 = {
    x: 100,
    y: 400,
    width: 200,
    speed: -5,
    color: 'green'
};

const c3 = {
    x: 500,
    y: 700,
    width: 200,
    speed: 2,
    color: 'yellow'
};

const c4 = {
    x: 700,
    y: 800,
    width: 200,
    speed: 2,
    color: 'teal'
};

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    c1.x += c1.speed;
    c2.x += c2.speed;
    c3.y += c3.speed;
    c3.x += c3.speed;
    c4.y -= c4.speed;
    c4.x -= c4.speed;

    // acceleration:
    c1.speed *= 1.005;
    c2.speed *= 1.005;
    c3.speed *= 1.005;
    c4.speed *= 1.005;


    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
    drawCar(c3.x, c3.y, c3.width, c3.color);
    drawTruck(c4.x, c4.y, c4.width, c4.color);


    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);
    console.log(canvasWidth)
    if (c1.x > canvasWidth + 150) {
        c1.x -= canvasWidth + 300;
    }
    if (c2.x < -150) {
        c2.x += canvasWidth + 300;
    }
    if (c3.x > canvasWidth + 150) {
        c3.x -= canvasWidth + 300;
    }
    if (c3.y > canvasHeight + 100) {
        c3.y -= canvasHeight + 200;
    }
    if (c4.x < -150) {
        c4.x += canvasWidth + 300;
    }
    if (c4.y < -100) {
        c4.y += canvasHeight + 200;
    }
}


function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}

function drawTruck(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/2, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
