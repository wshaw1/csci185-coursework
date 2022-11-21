function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    noFill();
    // let x = canvasWidth / 2;
    // let y = canvasHeight / 2;
    // let size = canvasWidth*1.2;
    // let color = 'red';
    // while (size >= 25) {
    //     if (color == 'red') {
    //         color = 'blue';
    //     } else {
    //         color = 'red';
    //     }
    //     fill(color);
    //     circle(x, y, size);
    //     size /= 1.01;
    // }    

    let x = 0;
    let y = 0;
    let size = 20;
    let counter = 0;
    while (counter < 100) {
        circle(x, y, size);
        ++counter;
        x += Math.sin(counter/10) * 10;
        y += 30;
    }
    
    drawGrid(canvasWidth, canvasHeight);
}
