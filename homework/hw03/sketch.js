function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // Once you've created your drawCreature function, 
    // invoke drawCreature 5 times with the following arguments
    // (feel free to change the sizes, positions, and colors):
    
    drawCreature(92, 115, 85, '#5e6976', '#1b324d');
    drawCreature(487, 110, 101, '#bfdc65', '#abb880');
    drawCreature(454, 423, 141, '#aebb83', '#227876');
    drawCreature(333, 227, 99, '#94ba77', '#3f5364');
    drawCreature(117, 314, 91, '#648d8e', '#afc272');
    // drawCreature('pink','hotpink')


    drawGrid(canvasWidth, canvasHeight);
}

// define your drawCreature function here:

function drawCreature(creatureX,creatureY,size,color1,color2) {
    strokeWeight(size/50)
    fill(color1);
    ellipse(creatureX-(size/4),creatureY-(size/4),size/2,size);
    ellipse(creatureX+(size/4),creatureY-(size/6),size,size/2);
    circle(creatureX,creatureY,size);
    fill(color2)
    ellipse(creatureX-(size/3),creatureY+(size/2),size*.5,size*.3);
    ellipse(creatureX+(size/3),creatureY+(size/2),size*.5,size*.3);
    fill('black')
    ellipse(creatureX-(size/8),creatureY-(size/6),size*.15,size*.3)
    ellipse(creatureX+(size/8),creatureY-(size/6),size*.15,size*.3)
    noFill()
    curve(
        creatureX-(size/8)*2,creatureY-(size/10)*10,
        creatureX-(size/8),creatureY-(size/10),
        creatureX+(size/8),creatureY-(size/10),
        creatureX+(size/8)*2,creatureY-(size/10)*10
    )
    fill('white')
    ellipse(creatureX-(size/8),creatureY-(size/4),size*.075,size*.15)
    ellipse(creatureX+(size/8),creatureY-(size/4),size*.075,size*.15)
}