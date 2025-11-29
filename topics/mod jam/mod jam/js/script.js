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
let myFont;
let sacrificeScore = 0;
let eatenScore = 0;
let frogStage = 0;
// skin
// muscle
// bone
// dead
let state = "title";
// title screen
// game screen
// end screen
let blackoutActive = false;
let blackoutStart = -1;

//values used for start and restart button
const start = {
    x: 640 / 2,
    y: 480 / 2 - 105,
    size: 100,
    fill: "darkblue",
}

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


//patience score bar
let patienceBar = {
    stroke: {
        color: "#000000",
        weight: 2,
    },

    fills: {
        full: "red",
        text: "#000000"
    },
    x: 250,
    y: 20,
    h: 8,
    w: 60,
    ww: 150,
    text: "Ukko's Patience:",
}

//health score bar
let healthBar = {
    stroke: {
        color: "#000000",
        weight: 1,
    },

    fills: {
        full: "#000000",
        text: "#000000"
    },
    x: 200,
    y: 470,
    h: 5,
    w: 40,
    ww: 100,
}


function preload() {
    myFont = loadFont("assets/UncialAntiqua-Regular.otf");
    lightningSound = loadSound("assets/lightning.mp3");
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
    //rest of the game
    if (state === "title") {
        titleScreen();
    }
    else if (state === "game") {
        gameScreen();
    }
    else if (state === "ending") {
        endScreen();
    }

}

function titleScreen() {
    //background color gradient top black to bottom light blue
    let c1, c2;
    c1 = color(0, 0, 0);
    c2 = color(135, 206, 235);

    for (let y = 0; y < height; y++) {
        let n = map(y, 0, height, 0, 1);
        let newc = lerpColor(c1, c2, n);
        stroke(newc);
        line(0, y, width, y);
    }

    //draws most of the screen elements
    sharedScreenElements();
    //start button text
    textSize(25);
    text("Start", start.x, start.y - 5);

    // Get distance from tongue to start button
    const d = dist(frog.tongue.x, frog.tongue.y, start.x, start.y);
    // Check if it's an overlap
    const startGame = (d < frog.tongue.size / 2 + start.size / 2);
    if (startGame) {
        state = "game";
    }

    drawFrog();
    drawFrogSkin();
    moveFrog();
    moveTongue();
}

function gameScreen() {
    if (blackoutActive) {
        visualTransition();
        return; // stops everything being draw if there is the black out transition
    }

    background(135, 206, 235);


    moveFly();
    drawFly();

    moveFrog();
    drawFrog();

    moveTongue();
    checkTongueFlyOverlap();

    lifeTransition();

    if (frogStage === 0) {
        drawFrogSkin()
    };
    if (frogStage === 1) {
        drawFrogMuscle();
        fly.speed = 4
    };
    if (frogStage === 2) {
        drawFrogBone();
        fly.speed = 5
    };
    if (frogStage === 3) {
        state = "ending";
    };


    drawSacrificeScore();

    drawPatienceBar();
    drawHealthBar();
}

function endScreen() {
    background("black");

    //calls on title and end screen shared element and formatting
    sharedScreenElements();

    //try again text
    textSize(25);
    text("Try", start.x, start.y - 20);
    text("Again", start.x, start.y + 10);

    //text box text
    textSize(27);
    fill("black");
    text("): You Died :(", width / 2, 210)

    textSize(21);
    text("Flies Eaten: " + eatenScore, width / 2, 280);
    text("Sacrifices: " + sacrificeScore, width / 2, 310)

    // Get distance from tongue to start button
    const d = dist(frog.tongue.x, frog.tongue.y, start.x, start.y);
    // Check if it's an overlap
    const startGame = (d < frog.tongue.size / 2 + start.size / 2);
    if (startGame) {
        resetGame();
        state = "game";
    }

    drawFrog();
    drawFrogDead();
    moveFrog();
    moveTongue();
}

/**
 * has all of the shared visuals of the title and end screen
 */
function sharedScreenElements() {
    //outer circle
    strokeWeight(3);
    fill("royalblue");
    ellipse(width / 2, height / 2, 300);

    //start and try again button
    noStroke();
    fill(start.fill);
    ellipse(start.x, start.y, start.size);

    //start and try again button text formating
    textFont(myFont);
    fill("white");
    textSize(25);
    textAlign(CENTER, CENTER);

    //game title
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Ukko's Punishment", width / 2, 50);
}

/**
 * checks if the tongue overlaps with either the start or try again button
 */
function checkTongueButtonOverlap() {
    // Get distance from tongue to start button
    const d = dist(frog.tongue.x, frog.tongue.y, start.x, start.y);
    // Check if it's an overlap
    const startGame = (d < frog.tongue.size / 2 + start.size / 2);
    if (startGame) {
        state = "game";
    }
}

/**
 * restarts all of the game elements for when the user clicks the try again button
 */
function resetGame() {
    frogStage = 0;
    sacrificeScore = 0;
    eatenScore = 0;

    patienceBar.w = 40;
    healthBar.w = 40;

    frog.tongue.y = 480;
    frog.tongue.state = "idle";

    fly.speed = 3;

    resetFly();
}

function lifeTransition() {
    //checks to see if the conditions are met for the blackout transition to start
    if (!blackoutActive && patienceBar.w === 0 && frogStage < 3) {
        blackoutActive = true;
        blackoutStart = millis();
        lightningSound;
    }

    if (!blackoutActive && healthBar.w === 0 && frogStage < 3) {
        blackoutActive = true;
        blackoutStart = millis();
    }

    //all the effects of the black out transition
    if (blackoutActive) {
        visualTransition();

        // Apply the frog stage change
        frogStage++;

        // Reset bars
        patienceBar.w = 150;
        healthBar.w = 40;

        // Reset tongue position if needed
        frog.tongue.y = height;
        frog.tongue.state = "idle";


    }
}

function visualTransition() {

    let elapsed = millis() - blackoutStart;

    // DRAW BLACKOUT SCREEN
    fill(0);
    rect(0, 0, width, height);

    // RANDOM LIGHTNING FLASHES
    if (random() < 0.2) {
        fill(255);
        rect(0, 0, width, height);
    }

    // End blackout after 2 seconds
    if (elapsed > 5000) {
        blackoutActive = false;
    }

}



function drawSacrificeScore() {
    fill("black");
    textFont(myFont);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Sacrifices: " + sacrificeScore, (width * 4) / 5, 20);

}

function drawPatienceBar() {
    //health text
    push();
    noStroke();
    fill(patienceBar.fills.text);
    textFont(myFont);
    textSize(14)
    text(patienceBar.text, patienceBar.x - 80, patienceBar.y);
    pop();

    //slider fill
    push();
    noStroke();
    fill(patienceBar.fills.full);
    rect(patienceBar.x, patienceBar.y, patienceBar.w, patienceBar.h,);
    pop();

    //bar box frame
    push();
    stroke(patienceBar.stroke.color);
    strokeWeight(patienceBar.stroke.weight);
    noFill();
    rect(patienceBar.x, patienceBar.y, patienceBar.ww, patienceBar.h,);
    pop();
}

function drawHealthBar() {
    //slider fill
    push();
    noStroke();
    fill(healthBar.fills.full);
    rect(mouseX - 50, healthBar.y, healthBar.w, healthBar.h,);
    pop();

    //bar box frame
    push();
    stroke(healthBar.stroke.color);
    strokeWeight(healthBar.stroke.weight);
    noFill();
    rect(mouseX - 50, healthBar.y, healthBar.ww, healthBar.h,);
    pop();

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
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    fly.y += random(-fly.buzziness.y, fly.buzziness.y);
    //fly.y += sin(sineMovement) * 0.5;// not working
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
        sacrificeScore++;
        healthBar.w -= 10;
        if (patienceBar.w < 150) {
            patienceBar.w += 15;
        }
    }
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(50, 300);
}

/**
 * Displays the tongue (tip and line connection) and the original frog (body)
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
 * All the different versions of the frogs outside of the original
 */
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
    translate(frog.body.x, frog.body.y); // move the whole frog to its current position

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
    translate(frog.body.x, frog.body.y); // move the whole frog to its current position

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
    translate(frog.body.x, frog.body.y); // move the whole frog to its current position

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
        eatenScore++;
        patienceBar.w -= 15;
        if (healthBar.w < 100) {
            healthBar.w += 10;
        }
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