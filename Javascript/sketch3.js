let x = 0;
function setup() {
    createCanvas(500, 500, WEBGL)
    noLoop();
}

function draw() {
    background(204);
    x = x + 0.5;
    if (x > width) {
        x = 0;   
    } 

line(x, 0, x, 100);


line(x*5, 5, x, 200);
}
line(x*10, 5, x*300)


function mousePressed() {
    loop();
}

function MouseReleased() {
    noLoop();
}

