console.log('hello world')
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() { 
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);
}

// DRAWS PLAYER CHARACTER AND ENEMIES
function drawCreature(creatureX, creatureY, size, color1, color2) {
    strokeWeight(size/50);
    fill(color1);
    ellipse(creatureX-(size/4),creatureY-(size/4),size/2,size);
    ellipse(creatureX+(size/4),creatureY-(size/6),size,size/2);
    circle(creatureX,creatureY,size);
    fill(color2);
    ellipse(creatureX-(size/3),creatureY+(size/2),size*.5,size*.3);
    ellipse(creatureX+(size/3),creatureY+(size/2),size*.5,size*.3);
    fill('black');
    ellipse(creatureX-(size/8),creatureY-(size/6),size*.15,size*.3);
    ellipse(creatureX+(size/8),creatureY-(size/6),size*.15,size*.3);
    noFill();
    curve(
        creatureX-(size/8)*2,creatureY-(size/10)*10,
        creatureX-(size/8),creatureY-(size/10),
        creatureX+(size/8),creatureY-(size/10),
        creatureX+(size/8)*2,creatureY-(size/10)*10
    );
    fill('white');
    ellipse(creatureX-(size/8),creatureY-(size/4),size*.075,size*.15);
    ellipse(creatureX+(size/8),creatureY-(size/4),size*.075,size*.15);
}

// DRAWS PROJECTILES
function drawLandscapeObject(landX, landY, size, color1, color2) {
    strokeWeight(size/30);
    fill(color2)
    circle(landX, landY-(size/8), size*1.5)
    fill(color1);
    circle(landX, landY-(size/8), size*1.2)
    line(landX-(size/2), landY-(size/4), landX+(size/2), landY-(size/4));
    line(landX, landY-(size/1.5), landX+(size/4), landY+(size/3))
    line(landX-(size/4), landY+(size/3), landX, landY-(size/1.5))
    line(landX-(size/4), landY+(size/3), landX+(size/2), landY-(size/4))
    line(landX+(size/4), landY+(size/3), landX-(size/2), landY-(size/4))
}

// DEFINING OBJECTS FOR MOVEMENT
let player = {
    x: 0,
    y: canvasHeight-100,
    d: 100,
    speed: 5,
    color: 'pink'
};

let enemy1 = {
    x: 50,
    y: 100,
    d: 100,
    speed: 5
};

let enemy2 = {
    x: canvasWidth-50,
    y: 100,
    d: 100,
    speed: -5
};

let bullets = [];

// STARTING POSITION FOR ENEMIES
enemy1.y = canvasHeight/2;
enemy2.y = canvasHeight/2;

// RANDOMIZES PLAYER COLOR
function randomizePlayerColor() {
    let color = Math.floor(Math.random()*6);
    if (color == 0) {
        player.color = 'red'
    } else if (color == 1) {
        player.color = 'orange'
    } else if (color == 2) {
        player.color = 'yellow'
    } else if (color == 3) {
        player.color = 'green'
    } else if (color == 4) {
        player.color = 'blue'
    } else if (color == 5) {
        player.color = 'purple'
    }
}

// DRAW FUNCTION
function draw() {

    //DRAWS CHARACTERS AND ENEMIES
    clear();
    fill('lightblue');
    rect(0, 0, canvasWidth, canvasHeight);
    drawCreature(player.x, player.y, player.d/1.5, player.color, 'hotpink');
    drawCreature(canvasWidth-player.x, canvasHeight-player.y, player.d/1.5, player.color, 'hotpink');
    drawCreature(enemy1.x, enemy1.y, enemy1.d/1.5, 'grey', 'darkgrey');
    drawCreature(enemy2.x, enemy2.y, enemy2.d/1.5, 'grey', 'darkgrey');
    noFill();
    
    // MOVES BULLETS
    enemy1.y += enemy1.speed;
    enemy2.y += enemy2.speed;
    if (enemy1.y >= canvasHeight-(enemy1.d/2)) {
        enemy1.speed *= -1;
    } else if (enemy1.y <= enemy1.d/2) {
        enemy1.speed *= -1;
    }
    if (enemy2.y >= canvasHeight-(enemy2.d/2)) {
        enemy2.speed *= -1;
    } else if (enemy2.y <= enemy2.d/2) {
        enemy2.speed *= -1;
    }

    // CREATES A NEW BULLET FROM EACH SIDE
    bullets.push(
        {x: enemy1.x, y: enemy1.y, side: 1, speedX: (Math.random()*3)+1, speedY: (Math.random()*2)-1, size: (Math.random()*50)+1}
    );
    bullets.push(
        {x: enemy2.x, y: enemy2.y, side: 2, speedX: (Math.random()*3)+1, speedY: (Math.random()*2)-1, size: (Math.random()*50)+1}
    );

    let i = 0;

    // DRAWS ALL BULLETS WITHIN THE 'BULLETS' ARRAY
    while (i < bullets.length) {
        drawLandscapeObject(bullets[i].x, bullets[i].y, bullets[i].size, 'yellow', 'orange');
        if (bullets[i].side == 2) {
            bullets[i].x -= bullets[i].speedX;
            bullets[i].y += bullets[i].speedY;
            if (bullets[i].x < canvasWidth/2) {
                bullets.splice(i,1);
            }
        } else {
            bullets[i].x += bullets[i].speedX;
            bullets[i].y += bullets[i].speedY;
            if (bullets[i].x > canvasWidth/2) {
                bullets.splice(i,1);
            }
        };

        bullets[i].speedX *= 1.05;
        bullets[i].speedY *= 1.05;

        if (dist(bullets[i].x, bullets[i].y, player.x, player.y) <= (bullets[i].size/2 + player.d/2)) {
            randomizePlayerColor();
        };

        if (dist(bullets[i].x, bullets[i].y, player.x, player.y) <= (bullets[i].size/2 + player.d/2) || dist(bullets[i].x, bullets[i].y, canvasWidth-player.x, canvasHeight-player.y) <= (bullets[i].size/2 + player.d/2) || bullets[i].y < -50 || bullets[i].y > canvasHeight+50) {
            bullets.splice(i,1);
        };

        i++;
    }
    console.log(bullets)
    
}

// PLAYER KEYBOARD MOVEMENT
function movePlayer(ev) {
    const speed = 5;
    if (ev.code == 'ArrowUp') {
        player.y -= speed*3;
    } else if (ev.code == 'ArrowDown') {
        player.y += speed*3;
    } else if (ev.code == 'ArrowLeft') {
        player.x -= speed*3;
    } else if (ev.code == 'ArrowRight') {
        player.x += speed*3;
    }
}

document.addEventListener('keydown', movePlayer);

// Credit points completed:
// 1: animate a creature so it bounces off sides
// 2: object doesnt accelerate linearly
// 4: projectiles generated move at random speeds
// 5: character moves with keyboard events
// 6: periodically adds and removes projectiles.
// 8: detects collision on projectiles and removes them if they hit the player ( Extra Credit )
// 11: character periodically changes colors ( Extra Credit )
// Player charater has over 8 shapes