const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

async function setup() {
    createCanvas(canvasWidth, canvasHeight);
    


    
    // draws 4 stars: 
    
    strokeWeight(3);
    fill('white');
    // noFill();
    let i = 0;
    while (i < 1000) {
        circle(Math.random()*canvasWidth, Math.random()*canvasHeight, Math.random()*50);
        i++;
    }
}

function drawStars() {
    strokeWeight(0);
    fill('white');
    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 2 + 0.5;
        circle(x, y, width);
    }
}

function drawBubbles() {
    strokeWeight(1);
    stroke('white');
    noFill()
    for (let i = 0; i < 500; i++) {
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const width = Math.random() * 40 + 5;
        circle(x, y, width);
    }
}
