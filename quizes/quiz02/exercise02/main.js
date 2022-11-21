const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // function invocations goes here:
    drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
    drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
    drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
    drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
    drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn

    drawGrid(canvasWidth, canvasHeight);
}


// function definition goes here:

function drawElmo(x, y, size, color, hasNose) {
    fill(color);
    circle(x, y, size);
    fill('white');
    circle(x-(size/8), y-(size/8), size/5);
    circle(x+(size/8), y-(size/8), size/5);
    fill('black');
    circle(x-(size/8), y-(size/8), size/15);
    circle(x+(size/8), y-(size/8), size/15);
    if (hasNose == true) {
        fill('red');
        ellipse(x, y, size/6, size/4);
    };
}