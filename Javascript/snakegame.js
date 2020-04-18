let numSegment = 10
let direction = 'right'

const xStart = 0
const yStart = 250
const diff = 10;

let xCor = []
let yCor = []

let xFruit = 0;
let yFruit = 0;
let scoreElem;

function setup() {
    scoreElem = createDiv('score = 0')
    scoreElem.position(500, 20)
    scoreElem.id = 'score'
    scoreElem.style('color','white')




    createCanvas(600,600)
    frameRate(15)
    stroke(255)
    strokeWeight(10)
    // updateSnakeCoordinates()

    for (let i = 0; i < numSegment; i++) {
        xCor.push(xStart + i * diff)
        yCor.push(yStart)

    }
    console.log(xCor)
}

function draw() {
    background(0)
    for(let i = 0; i < numSegment - 1; i++) {
        line(xCor[i], yCor[i], xCor[i+1], yCor[1 + 1])


    }
    // updateSnakeCoordinates()
}

function updateSnakeCoordinates() {
    for (let i = 0; i < numSgement - 1; i ++) {
        xCor[i] = xCor[i + 1]
        yCor[i] = yCor[i + 1]
    }
    switch(direction) {
        case 'right':
            xCor[numSegment - 1] = xCor[numSegment - 2] + diff
            yCor[numSegment - 1] = yCor[numSegment - 2]
            break
        case 'up':
            xCor[numSegment - 1] = xCor[numSegment - 2] 
            yCor[numSegment - 1] = yCor[numSegment - 2] - diff
            break
        case 'left':
            xCor[numSegment - 1] = xCor[numSegment - 2] - diff
            yCor[numSegment - 1] = yCor[numSegment - 2] 
            break
        case 'down':
            xCor[numSegment - 1] = xCor[numSegment - 2] 
            yCor[numSegment - 1] = yCor[numSegment - 2] + diff
                break
    }
}
function keyPressed() {
    console.log(keyCode)
    switch(keyCode) {
        case 39:
            if (direction != 'left') {
            }
            break
        case 37:
            if (direction != 'right') {
                direction = 'left' 
            }
    }
}

