function setup() {
    createCanvas(640, 480)

}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(1)
    }
    ellipse(mouseX, mouseY, 8, 8);
    
    
}
