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
    speed: 3
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
    fill("#00ff00");
    noStroke();
    ellipse(320, 520, 140, 225);
    ellipse(320, 422, 55, 50);
    ellipse(284, 435, 30, 35);
    ellipse(284 + 72, 435, 30, 35);
    fill("#87ceeb");
    ellipse(255, 495, 15, 55);
    ellipse(255 + 130, 495, 15, 55);

    push();
    stroke("black");
    strokeWeight(1.0)
    fill("white");
    rotate(30);
    ellipse(459, 233, 14, 22);
    fill("black");
    ellipse(459, 233, 8, 14);
    pop();

    push();
    stroke("black");
    strokeWeight(1.0)
    fill("white");
    rotate(-30);
    ellipse(96, 553, 14, 22);
    fill("black");
    ellipse(96, 553, 8, 14);
    pop();

}

function drawFrogMuscle() {
    push();
    translate(150, 0);

    fill("#00ff00");
    noStroke();
    ellipse(320, 520, 140, 225);
    ellipse(320, 422, 55, 50);
    ellipse(284, 435, 30, 35);
    ellipse(284 + 72, 435, 30, 35);
    fill("red");
    ellipse(320, 520, 135, 220);
    ellipse(320, 422, 50, 45);
    fill("#87ceeb");
    ellipse(255, 495, 15, 55);
    ellipse(255 + 130, 495, 15, 55);

    stroke("black");
    strokeWeight(1.5)
    fill("white");
    ellipse(284, 433, 26, 26);
    ellipse(284 + 72, 433, 26, 26);

    push();
    fill("black");
    rotate(30);
    ellipse(459, 233, 17, 22);
    pop();

    push();
    fill("black");
    rotate(-30);
    ellipse(96, 553, 17, 22);
    pop();

    pop();

}


function drawFrogBone() {
    push();
    translate(-120, 0);

    fill("#00ff00");
    noStroke();
    ellipse(320, 520, 140, 225);
    ellipse(320, 422, 55, 50);
    ellipse(284, 435, 30, 35);
    ellipse(284 + 72, 435, 30, 35);
    fill("bone");
    ellipse(320, 520, 135, 220);
    ellipse(320, 422, 50, 45);
    fill("#87ceeb");
    ellipse(255, 495, 15, 55);
    ellipse(255 + 130, 495, 15, 55);
    fill("white");
    stroke("black");
    strokeWeight(1.5)
    ellipse(284, 433, 26, 26);
    ellipse(284 + 72, 433, 26, 26);

    push();
    fill("black");
    rotate(30);
    ellipse(459, 233, 17, 22);
    pop();

    push();
    fill("black");
    rotate(-30);
    ellipse(96, 553, 17, 22);
    pop();

    pop();
}


function drawFrogDead() {
    push();
    translate(-250, 0);

    fill("#00ff00");
    noStroke();
    ellipse(320, 520, 140, 225);
    ellipse(320, 422, 55, 50);
    ellipse(284, 435, 30, 35);
    ellipse(284 + 72, 435, 30, 35);
    fill("bone");
    ellipse(320, 520, 135, 220);
    ellipse(320, 422, 50, 45);
    fill("#87ceeb");
    ellipse(255, 495, 15, 55);
    ellipse(255 + 130, 495, 15, 55);
    fill("white");

    ellipse(284, 433, 26, 26);
    ellipse(284 + 72, 433, 26, 26);

    stroke("red");
    strokeWeight(2);
    line(284 - 9, 433 - 9, 284 + 9, 433 + 9);
    line(284 + 9, 433 - 9, 284 - 9, 433 + 9);

    line(284 - 9 + 72, 433 - 9, 284 + 9 + 72, 433 + 9);
    line(284 + 9 + 72, 433 - 9, 284 - 9 + 72, 433 + 9);
    pop();
}



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
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 520,
        size: 150
    }
}
*/

function drawFrog2() {

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