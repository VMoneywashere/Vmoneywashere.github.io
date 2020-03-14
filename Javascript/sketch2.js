function setup () {
    createCanvas(500,500, WEBGL)
}

function draw() {
    background(200);
    if (mouseIsPressed) {
      rotateX(frameCount * 0.05)
      rotateY(frameCount * 0.05)
    }
    else  {
    

    }
    fill(84);

   
    sphere(100);
}

