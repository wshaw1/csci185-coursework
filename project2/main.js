const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    mouseX = canvasWidth/2;
    mouseY = (canvasHeight/8)*7;
};

let player = {
    x: 200,
    y: 200,
    speedX: 0, 
    speedY: 0
};

let platforms = [
    [
        {leftX: 0, rightX: canvasWidth, y: 350},
    ],[
        {leftX: 0, rightX: 400, y: 350},
        {leftX: 500, rightX: 600, y: 250},
        {leftX: 800, rightX: 900, y: 200},
        {leftX: 1100, rightX: 1200, y: 200},
        {leftX: 1400, rightX: 1500, y: 200},
    ], [
        {leftX: 0, rightX: 400, y: 350},
        {leftX: 500, rightX: 600, y: 250},
        {leftX: 800, rightX: 900, y: 400},
        {leftX: 1100, rightX: 1200, y: 450},
        {leftX: 1400, rightX: 1500, y: 400},
    ]
];

let level = 0;

function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
};

function drawCreature(positionX, positionY, size, primaryColor, secondaryColor) {
    fill(primaryColor);
    heart(positionX, positionY, size); //body

    fill(secondaryColor); //eye1
    circle(positionX-size*4/24, positionY+size/3.5, size/6);

    fill(secondaryColor); //eye2
    circle(positionX+size*4/24, positionY+size/3.5, size/6);

    line(positionX-size*4/24, positionY+size/1.7, positionX+size*4/24, positionY+size/1.7)
};




function makeCloud(cloudx, cloudy) {
    fill('hotpink')
    strokeWeight(0);
    ellipse(cloudx, cloudy, 70, 50);
    ellipse(cloudx + 10, cloudy + 10, 70, 50);
    ellipse(cloudx - 20, cloudy + 10, 70, 50);
  } 
  function landscape() {
    
    makeCloud(100, 100);
    makeCloud(1200, 400);
    makeCloud(500, 200);
    makeCloud(1103, 150);
    makeCloud(720, 367);
    makeCloud(630, 210);
    makeCloud(403, 123);
    makeCloud(230, 370);
}

function platform(leftX, rightX, y){
    fill('green');
    rect(leftX, y, rightX-leftX, (rightX-leftX)/16);
    fill('#3B2521')
    rect(leftX+(rightX-leftX)/16, y+(rightX-leftX)/16, (rightX-leftX)-(rightX-leftX)/8, (rightX-leftX)/16)
}

let floor = 0;

function draw() {
    clear();
    landscape();
    drawCreature(player.x, player.y, 50, 'green', 'red');

    strokeWeight(1);

    for (i = 0; i < platforms[level].length; i++) {
        line(platforms[level][i].leftX, platforms[level][i].y, platforms[level][i].rightX, platforms[level][i].y)
        platform(platforms[level][i].leftX, platforms[level][i].rightX, platforms[level][i].y)
    };

    for (i = 0; i < platforms[level].length; i++) {
        if (player.x > platforms[level][i].leftX && player.x < platforms[level][i].rightX && player.y < platforms[level][i].y) {
            floor = platforms[level][i].y-50;
            console.log('platform set', i)
            break
        } else {
            // floor = ((canvasHeight/4)*3)-50;
            floor = canvasHeight;

        };2
    };

   
    // console.log(floor)
    // console.log(player.x, player.y)

    line(canvasWidth/3, (canvasHeight/4)*3, canvasWidth/3, canvasHeight);
    line((canvasWidth/3)*2, (canvasHeight/4)*3, (canvasWidth/3)*2, canvasHeight);
    line(0, (canvasHeight/4)*3, canvasWidth, (canvasHeight/4)*3);

    player.x += player.speedX;
    player.y += player.speedY;

    // floor = (canvasHeight/2)-50;

    let jump = false;
    if (mouseY < (canvasHeight/4)*3) {
        jump = true;
        console.log('true');
    } else {
        jump = false;
        console.log('false')
    };

    if (mouseX < canvasWidth/3) {
        if (player.speedX > -10) {
            player.speedX -= 1;
        };
    } else if (mouseX > (canvasWidth/3)*2) {
        if (player.speedX < 10) {
            player.speedX += 1;
        };
    } else {
        if (player.speedX > 0) {
            player.speedX -= 1;
        } else if (player.speedX < 0) {
            player.speedX += 1;
        };
    };

    if (player.y == floor) {
        if (jump == true) {
            player.y -= 5;
            player.speedY -= 30;
            console.log('jump');
        };
        console.log('1')
    } else if (player.y < floor) {
        if (player.speedY < 10) {
            player.speedY += 1;
        };
        console.log('2')
    } else if (player.y > floor) {
        player.y = floor-10
        // player.y -= 7
        console.log('3')
    }

    if (player.y > canvasHeight-100 || player.x < 0){
        player.x = 200;
        player.y = 200;
    };

    if (player.x > canvasWidth) {
        player.x = 200;
        player.y = 200;
        level++;
    }
};

