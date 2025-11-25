/**
 * Frogfrogfrog
 * Sophia Andtbacka
 * 
 * A game of catching flies with your frog-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3,
    buzziness: {
        y: 3,
    }
};

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();
    angleMode(DEGREES);
}

function draw() {
    background("#87ceeb");
    moveFly();
    drawFly();
    //can keep buy under frog design layer
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();

    drawFrogSkin();

    drawFrogMuscle();
    drawFrogBone();
    drawFrogDead();
}

function drawFrogSkin() {
    push();
    translate(frog.body.x, frog.body.y); // move the whole frog to its current position
    fill("#00ff00");
    noStroke();

    // Body parts relative to center (0,0)
    ellipse(0, 0, 140, 225); // main body
    ellipse(0, -98, 55, 50); // head
    ellipse(-36, -85, 30, 35); // left eye bump
    ellipse(36, -85, 30, 35); // right eye bump

    // Head bottom cutout effect
    fill("#87ceeb");
    ellipse(-65, -25, 15, 55);
    ellipse(65, -25, 15, 55);

    // Left eye
    push();
    stroke("black");
    strokeWeight(1);
    fill("white");
    translate(-36, -85);
    rotate(30);
    ellipse(0, 0, 14, 22);
    fill("black");
    ellipse(0, 0, 8, 14);
    pop();

    // Right eye
    push();
    stroke("black");
    strokeWeight(1);
    fill("white");
    translate(36, -85);
    rotate(-30);
    ellipse(0, 0, 14, 22);
    fill("black");
    ellipse(0, 0, 8, 14);
    pop();

    pop();
}


function drawFrogMuscle() {
    push();
    translate(frog.body.x + 150, frog.body.y); // move the whole frog to its current position

    //Green Outer Skin
    fill("#00ff00");
    noStroke();
    //main body outline
    ellipse(0, 0, 140, 225);
    //nose outline
    ellipse(0, -98, 55, 50);
    //left eye outline
    ellipse(-36, -85, 30, 35);
    //right eye outline
    ellipse(36, -85, 30, 35);

    //Red "muscle" Interior
    fill("red");
    noStroke();
    //main body outline
    ellipse(0, 0, 135, 220);
    //nose outline
    ellipse(0, -98, 50, 45);

    //Head bottom cutout effect
    fill("#87ceeb");
    ellipse(-65, 25, 15, 55);
    ellipse(65, 25, 15, 55);

    //White of Eyes
    stroke("black");
    strokeWeight(1.5)
    fill("white");
    //left eye
    ellipse(-36, -87, 26, 26);
    //right eye
    ellipse(36, -87, 26, 26);

    //Left pupil
    push();
    translate(-39, -90);
    rotate(30);
    fill("black");
    ellipse(0, 0, 17, 22);
    pop();

    // Right pupil
    push();
    fill("black");
    translate(39, -90);
    rotate(-30);
    ellipse(0, 0, 17, 22);
    pop();

    pop();
}



function drawFrogBone() {
    push();
    translate(frog.body.x - 120, frog.body.y); // move the whole frog to its current position

    //Green Outer Skin
    fill("#00ff00");
    noStroke();
    //main body outline
    ellipse(0, 0, 140, 225);
    //nose outline
    ellipse(0, -98, 55, 50);
    //left eye outline
    ellipse(-36, -85, 30, 35);
    //right eye outline
    ellipse(36, -85, 30, 35);

    //Red "muscle" Interior
    fill("bone");
    noStroke();
    //main body outline
    ellipse(0, 0, 135, 220);
    //nose outline
    ellipse(0, -98, 50, 45);

    //Head bottom cutout effect
    fill("#87ceeb");
    ellipse(-65, 25, 15, 55);
    ellipse(65, 25, 15, 55);

    //White of Eyes
    stroke("black");
    strokeWeight(1.5)
    fill("white");
    //left eye
    ellipse(-36, -87, 26, 26);
    //right eye
    ellipse(36, -87, 26, 26);

    //Left pupil
    push();
    translate(-39, -90);
    rotate(30);
    fill("black");
    ellipse(0, 0, 17, 22);
    pop();

    // Right pupil
    push();
    fill("black");
    translate(39, -90);
    rotate(-30);
    ellipse(0, 0, 17, 22);
    pop();

    pop();
}


function drawFrogDead() {
    push();
    translate(frog.body.x - 250, frog.body.y); // move the whole frog to its current position

    //Green Outer Skin
    fill("#00ff00");
    noStroke();
    //main body outline
    ellipse(0, 0, 140, 225);
    //nose outline
    ellipse(0, -98, 55, 50);
    //left eye outline
    ellipse(-36, -85, 30, 35);
    //right eye outline
    ellipse(36, -85, 30, 35);

    //White "bone" Interior
    fill("bone");
    noStroke();
    //main body outline
    ellipse(0, 0, 135, 220);
    //nose outline
    ellipse(0, -98, 50, 45);

    //Head bottom cutout effect
    fill("#87ceeb");
    ellipse(-65, 25, 15, 55);
    ellipse(65, 25, 15, 55);

    //White of Eyes
    fill("white");
    //left eye
    ellipse(-36, -87, 26, 26);
    //right eye
    ellipse(36, -87, 26, 26);

    //Red X Eyes
    stroke("red");
    strokeWeight(2);
    //left eye
    line(-36 - 9, -87 - 9, -36 + 9, -87 + 9);
    line(-36 + 9, -87 - 9, -36 - 9, -87 + 9);

    //right eye
    line(36 - 9, -87 - 9, 36 + 9, -87 + 9);
    line(36 + 9, -87 - 9, 36 - 9, -87 + 9);

    pop();
}



function drawFrogOG() {

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}



/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    fly.y += random(-fly.buzziness.y, fly.buzziness.y);
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}


/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
}