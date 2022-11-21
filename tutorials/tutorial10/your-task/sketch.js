const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

    
function setup() {
    createCanvas(canvasWidth, canvasHeight);
    drawGrid(canvasWidth, canvasHeight);
}

// replace this function with YOUR creature!
function drawCreature(creatureX,creatureY,size,color1='pink',color2='hotpink') {
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

let creaturePosition = [];
let i = 0;
for (i = 0; i < 10; i++) {

    creaturePosition.push({x: 0, y: 0})
    // creaturePosition.push(0)
    // creaturePosition.push(0)
}

function mouseDragged() {
    clear();

    // creaturePosition.push(mouseX);
    // creaturePosition.push(mouseY);
    creaturePosition.push({x: mouseX, y: mouseY})

    let i = 0;
    for (i = 0; i < creaturePosition.length; i += 1) {
        drawCreature(creaturePosition[i].x, creaturePosition[i].y, 100);
    }

    creaturePosition.shift()

    drawGrid(canvasWidth, canvasHeight);

}