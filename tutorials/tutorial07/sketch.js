function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Exercise 1:
    drawCircle(100, 100 ,100, 'hotpink');
    drawCircle(200, 100 ,50);
    drawCircle(300, 100 ,100, 'blue');
    drawCircle(400, 100 ,50, 'grey');

    // Exercise 2: 
    drawOval(100, 200, 100, 50, 'teal');
    drawOval(200, 200, 50, 100, 'hotpink');
    drawOval(300, 200, 100, 50, 'navy');
    drawOval(400, 200, 50, 100, 'teal');

    // Exercise 3:
    drawBullseye(100, 300, 100);
    drawBullseye(200, 300, 50);
    drawBullseye(300, 300, 100);
    drawBullseye(400, 300, 50);

    // Exercise 4:
    drawFace(100, 400, 50, 'lightblue');
    drawFace(200, 400, 100, 'lightgrey');
    drawFace(300, 400, 50, 'lightgreen');
    drawFace(400, 400, 100);

    drawGrid(canvasWidth, canvasHeight);
}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor='yellow') {
    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor='yellow') {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size) {
    fill('teal');
    circle(centerX, centerY, size);
    fill('navy');
    circle(centerX, centerY, size*0.75);
    fill('teal');
    circle(centerX, centerY, size*0.50);
    fill('navy');
    circle(centerX, centerY, size*0.25);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size, faceColor='yellow') {
    fill(faceColor);
    circle(centerX, centerY, size);
    fill('black');
    let sf = size/6
    circle(centerX+sf, centerY-sf, sf);
    circle(centerX-sf, centerY-sf, sf);
    
    noFill()
    strokeWeight(sf/5)
    // line(centerX-sf, centerY+sf, centerX+sf, centerY+sf)
    // arc(100,100,100,200,-0.5,10,OPEN)
    curve(
        centerX-sf*2, centerY-size,
        centerX-sf*2, centerY+sf,
        centerX+sf*2, centerY+sf,
        centerX+sf*2, centerY-size
    )
    strokeWeight(1)
}
