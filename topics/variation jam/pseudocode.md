Variation Idea 

Theme: Create mini games that allow you to explore your creativity through creating different unexpected visuals. Influenced by the Dada movement and process art. Leverages the unique properties of computers and progammable art (quick interation, mathmatic visualization, and color isolation) to explore visuals and process previously impossible

1. Popping Circle
Start: Generate enough random colored circles to cover the canvas and create a layered pattern
Event: Click circle will disappear and a new circle with random color and position will appear
Goal: Pop enough circles until you're satisfied with the pattern outcome

Start Screen
const circle = {
    x: random(x, x),
    y: random(y, y),
    colorNoOverlap: {
        r: random(n, n),
        g: random(n, n),
        b: random(n, n),
    },
    colorOverlap: {
        r: random(n, n),
        g: random(n, n),
        b: random(n, n),
    },
    size: n
};

let circles = [];
let numCircles = n;

function drawCircle() {
    // create starting circles
    for (let i = 0; i < numCircles; i++) {
        fill(colorNoOverlap);
        ellipse(x, y, width, height);
    };
}

Event
function moveCircle(circle) {
    // fill with the circle's overlap color
    fill(circle.colorOverlap.r, circle.colorOverlap.g, circle.colorOverlap.b);

    // teleport to a new random position
    circle.x = random(n, n);
    circle.y = random(n, n);
}

function checkOverlap() {
    const d = distance(mouseX, mouseY, circles.x, circles.y);
    if (d < circle.size / 2) {
        checkOverlap = true
    }
    else {
        checkOverlap = false
    }
}

function mousePressed() {
    if (checkOverlap === true) {
        moveCircle();
    }
}

2. Random Color Picker
Start: Generate circle in the center of canvas with random fill
Color Change: If x or y changes fill changes
Event: 

Start Screen
const{
    x: mouseX,
    y: mouseY + displacement,
    colorStart: {
        r: random (n,n),
        g: random (n,n),
        b: random (n,n),
    }
    colorChange: {
        r: 0
        g: 0
        b: 0
        o: 0
    }
    size: n,
}

drawCircle {
    fill (colorStart.r, colorStart.g, colorStart.b);
    ellipse (x,y,size);
}

C

3. Pattern