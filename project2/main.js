const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
};

let player = {
    x: 400,
    y: 200,
    speedX: 0, 
    speedY: 0
};

let platforms = [
    {leftX: 300, rightX: 600, y: 400},
    {leftX: 600, rightX: 900, y: 300},
];

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
let floor = 0;

function draw() {
    clear();
    landscape();
    drawCreature(player.x, player.y, 50, 'green', 'red');

    strokeWeight(1);

    for (i = 0; i < platforms.length; i++) {
        line(platforms[i].leftX, platforms[i].y, platforms[i].rightX, platforms[i].y)
    };

    for (i = 0; i < platforms.length; i++) {
        if (player.x > platforms[i].leftX && player.x < platforms[i].rightX && player.y < platforms[i].y) {
            floor = platforms[i].y-50;
            console.log('platform set', i)
            break
        } else {
            floor = (canvasHeight/2)-50;
        };
    };

   
    // console.log(floor)
    // console.log(player.x, player.y)

    line(canvasWidth/3, canvasHeight/2, canvasWidth/3, canvasHeight);
    line((canvasWidth/3)*2, canvasHeight/2, (canvasWidth/3)*2, canvasHeight);
    line(0, canvasHeight/2, canvasWidth, canvasHeight/2);

    player.x += player.speedX;
    player.y += player.speedY;

    // floor = (canvasHeight/2)-50;

    let jump = false;
    if (mouseY < floor+50) {
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
};

