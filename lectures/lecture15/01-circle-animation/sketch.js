const circleData = [
    {x: 500, y: 50, d: 100, speedX: 3, speedY: 3, color: 'red'},
    {x: 300, y: 150, d: 50, speedX: 2, speedY: 0, color: 'purple'},
    {x: 400, y: 400, d: 25, speedX: 0, speedY: 1, color: 'blue'},
    {x: 40, y: 520, d: 80, speedX: 2, speedY: 0, color: 'orange'},
    {x: 140, y: 120, d: 150, speedX: 0, speedY: -0.5, color: 'teal'},
    {x: 350, y: 350, d: 70, speedX: 1, speedY: 1, color: 'hotpink'}
];

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// initialize variables outside of the function:
const ball = {
    x: 0,
    y: 500,
    d: 50,
    speedX: 3,
    speedY: -2
};

const ball2 = {
    x: 500,
    y: 200,
    d: 500,
    speedX: 3,
    speedY: 2
};

// animate the circle by changing the x and y position
// every time the animation loop invokes the draw() function:
function draw() {
    clear();
    let i = 0
    while (i< circleData.length) {
        const ball = circleData[i];
    
        fill(ball.color);
        circle(ball.x, ball.y, ball.d);
        ball.x += ball.speedX;
        ball.y += ball.speedY;
    
        i++;
    }
    drawGrid(canvasWidth, canvasHeight)
}
