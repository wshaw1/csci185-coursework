// Henry
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// Henry
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    mouseX = canvasWidth/2;
    mouseY = (canvasHeight/8)*7;
};

// Henry
let player = {
    x: 200,
    y: 200,
    speedX: 0, 
    speedY: 0
};

// Henry
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
    ], [
        {leftX: 0, rightX: 400, y: 350},
        {leftX: 400, rightX: 500, y: 150},
        {leftX: 1300, rightX: 1700, y: 600},

    ]
];
let level = 0;

// Davin
function heart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    endShape(CLOSE);
};

// Davin
function drawCreature(positionX, positionY, size, primaryColor, secondaryColor) {
    fill(primaryColor);
    heart(positionX, positionY, size); //body

    fill(secondaryColor); //eye1
    circle(positionX-size*4/24, positionY+size/3.5, size/6);

    fill(secondaryColor); //eye2
    circle(positionX+size*4/24, positionY+size/3.5, size/6);

    line(positionX-size*4/24, positionY+size/1.7, positionX+size*4/24, positionY+size/1.7)
};

// Davin
function makeCloud(cloudx, cloudy) {
    fill('hotpink')
    strokeWeight(0);
    ellipse(cloudx, cloudy, 70, 50);
    ellipse(cloudx + 10, cloudy + 10, 70, 50);
    ellipse(cloudx - 20, cloudy + 10, 70, 50);
} 

// Davin
let c1x = Math.random() * canvasWidth;
let c1y = Math.random() * canvasHeight;
let c2x = Math.random() * canvasWidth;
let c2y = Math.random() * canvasHeight;
let c3x = Math.random() * canvasWidth;
let c3y = Math.random() * canvasHeight;
let c4x = Math.random() * canvasWidth;
let c4y = Math.random() * canvasHeight;
let c5x = Math.random() * canvasWidth;
let c5y = Math.random() * canvasHeight;
let c6x = Math.random() * canvasWidth;
let c6y = Math.random() * canvasHeight;
let c7x = Math.random() * canvasWidth;
let c7y = Math.random() * canvasHeight;
let c8x = Math.random() * canvasWidth;
let c8y = Math.random() * canvasHeight;

// Davin
function cloudRandomize() {
    c1x = Math.random() * canvasWidth;
    c1y = Math.random() * canvasHeight;
    c2x = Math.random() * canvasWidth;
    c2y = Math.random() * canvasHeight;
    c3x = Math.random() * canvasWidth;
    c3y = Math.random() * canvasHeight;
    c4x = Math.random() * canvasWidth;
    c4y = Math.random() * canvasHeight;
    c5x = Math.random() * canvasWidth;
    c5y = Math.random() * canvasHeight;
    c6x = Math.random() * canvasWidth;
    c6y = Math.random() * canvasHeight;
    c7x = Math.random() * canvasWidth;
    c7y = Math.random() * canvasHeight;
    c8x = Math.random() * canvasWidth;
    c8y = Math.random() * canvasHeight;
}

// Davin
function landscape(c1x, c1y, c2x, c2y, c3x, c3y, c4x, c4y, c5x, c5y, c6x, c6y, c7x, c7y, c8x, c8y) {
    
    makeCloud(c1x, c1y);
    makeCloud(c2x, c2y);
    makeCloud(c3x, c3y);
    makeCloud(c4x, c4y);
    makeCloud(c5x, c5y);
    makeCloud(c6x, c6y);
    makeCloud(c7x, c7y);
    makeCloud(c8x, c8y);
}

// Davin
function platform(leftX, rightX, y){
    fill('green');
    rect(leftX, y, rightX-leftX, (rightX-leftX)/16);
    fill('#3B2521')
    rect(leftX+(rightX-leftX)/16, y+(rightX-leftX)/16, (rightX-leftX)-(rightX-leftX)/8, (rightX-leftX)/16)
}

// Davin
function createNumbers(x, y, life){

    if(life == 10){
    fill('black');
    rect(x, y, 5, 50);
    fill('black');
    rect(x+20, y, 25, 50);
    fill('white');
    rect(x+24, y+4, 17, 42);}
    if(life==9){
    fill('black');
    rect(x+20, y, 25, 25);
    fill('white');
    rect(x+24, y+4, 17, 17);
    fill('black');
    rect(x+24+17+4, y, 4, 50);
    }
    if(life==8){
        fill('black');
        rect(x+20, y, 25, 25);
        fill('white');
        rect(x+24, y+4, 17, 17);
        fill('black');
        rect(x+20, y+25, 25, 25);
        fill('white');
        rect(x+24, y+4+25, 17, 17);

    }
    if(life==7){
        fill('black');
        rect(x+20, y, 25, 5);

        fill('black');
        rect(x+24+17+4, y, 4, 50);
    }
    if(life==6){
        fill('black');
        rect(x+20, y, 25, 5);
        fill('black');
        rect(x+20, y, 4, 50);
        fill('black');
        rect(x+20, y+50-5, 25, 5);
        fill('black');
        rect(x+20, y+25, 25, 5);
        fill('black');
        rect(x+24+17+4, y+25, 4, 25);
    }
    if(life==5){
        fill('black');
        rect(x+20, y, 30, 5);
        fill('black');
        rect(x+20, y, 4, 25);
        fill('black');
        rect(x+20, y+50-5, 25, 5);
        fill('black');
        rect(x+20, y+25, 25, 5);
        fill('black');
        rect(x+24+17+4, y+25, 4, 25);
    }
    if(life==4){
        fill('black');
        rect(x+20, y, 4, 25);

        fill('black');
        rect(x+20, y+25, 25, 5);
        fill('black');
        rect(x+24+17+4, y, 4, 50);
    }
    if(life==3){


        fill('black');
        rect(x+20, y+25, 25, 5);
        fill('black');
        rect(x+24+17+4, y, 4, 50);
        fill('black');
        rect(x+20, y, 25, 5);
        fill('black');
        rect(x+20, y+45, 25, 5);
    }
    if(life==2){
        fill('black');
        rect(x+20, y, 30, 5);
        fill('black');
        rect(x+20, y+25, 4, 25);
        fill('black');
        rect(x+20, y+50-5, 29, 5);
        fill('black');
        rect(x+20, y+25, 29, 5);
        fill('black');
        rect(x+24+17+4, y, 4, 25);
    }
    if(life==1){
        fill('black');
        rect(x+20, y, 5, 50);
    }
    if(life==0){
        fill('black');
        rect(x+20, y, 25, 50);
        fill('white');
        rect(x+24, y+4, 17, 42);
    }
}

// Henry
let floor = 0;
let lives = 10;
function draw() {
    clear();
    landscape(c1x, c1y, c2x, c2y, c3x, c3y, c4x, c4y, c5x, c5y, c6x, c6y, c7x, c7y, c8x, c8y);
    drawCreature(player.x, player.y, 50, 'green', 'red');

    strokeWeight(1);

    for (i = 0; i < platforms[level].length; i++) {
        line(platforms[level][i].leftX, platforms[level][i].y, platforms[level][i].rightX, platforms[level][i].y)
        platform(platforms[level][i].leftX, platforms[level][i].rightX, platforms[level][i].y)
    };

    for (i = 0; i < platforms[level].length; i++) {
        if (player.x > platforms[level][i].leftX && player.x < platforms[level][i].rightX && player.y < platforms[level][i].y) {
            floor = platforms[level][i].y-50;
            break
        } else {
            floor = canvasHeight;

        };
    };
    line(canvasWidth/3, (canvasHeight/4)*3, canvasWidth/3, canvasHeight);
    line((canvasWidth/3)*2, (canvasHeight/4)*3, (canvasWidth/3)*2, canvasHeight);
    line(0, (canvasHeight/4)*3, canvasWidth, (canvasHeight/4)*3);
    fill('red');
    rect(0, (canvasHeight/4)*3, canvasWidth, -50);
    fill('black');

    createNumbers(100, 100, lives);

    player.x += player.speedX;
    player.y += player.speedY;


    let jump = false;
    if (mouseY < (canvasHeight/4)*3) {
        jump = true;
    } else {
        jump = false;
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
        };
    } else if (player.y < floor) {
        if (player.speedY < 10) {
            player.speedY += 1;
        };
    } else if (player.y > floor) {
        player.y = floor-10
    };

    if (player.y > ((canvasHeight/4)*3)-50 || player.x < 0){
        player.x = 200;
        player.y = 200;
        lives--;
        if (lives <= 0) {
            level = 0;
            lives = 10;
            cloudRandomize()
        }
        console.log(lives)
    };

    if (player.x > canvasWidth) {
        player.x = 200;
        player.y = 200;
        level++;
        cloudRandomize()
    }

    if (level >= 4) {
        document.querySelector("#victory").className = "";
    };
};

