/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**Menu Variables */

/**
Rotating around a circle

LEFT to accelerate anticlockwise
RIGHT to accelerate clockwise
*/
let rotator = {
    // The centre
    x: 250,
    y: 230,
    // How far out from the center our thing rotates
    radius: 125,
    // How big rotating circle is
    size: 15,
    // What is the current rotation around the circle?
    rotation: 0,
    // How fast is it rotating
    rotationSpeed: 0.0,
    // How fast can it accelerate?
    rotationAcceleration: 0.001,
    // Maximum rotation speed
    maxRotationSpeed: 0.02,
}

let currentX;
let currentY;

let game1;
let game2;
let game3;

/**Game 1 Variables */


/**Game 2 Variables */


/**Game 3 Variables */


/**All Variations */

let state = "menu";
//let state = "game1";
//let state = "game2";
//let state = "game3";



function preload() {
    myFont = loadFont("assets/font/8-font.otf");
}
let myFont;

function setup() {
    createCanvas(500, 500);

    switch (state) {
        case "menu":
            menuSetup();
            break;
        case "swallow circle variation":
            game1Setup();
            break
        case "color cache variation":
            game2Setup();
            break;
        case "bubble buster variation":
            game3Setup();
            break;
    }
}

/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "swallow circle variation":
            game1Draw();
            break
        case "color cache variation":
            game2Draw();
            break;
        case "bubble buster variation":
            game3Draw();
            break;
    }

}

function menuDraw() {
    background(0);
    menuText();
    handleInput();
    drawTrack();
    drawRotator();
    // Rotate according to the current speed
    rotator.rotation += rotator.rotationSpeed;
}


/**
 * All Menu Functions
 */

/**
Draws the track our rotator moves on
*/
function drawTrack() {
    push();
    stroke(255);
    noFill();
    translate(rotator.x, rotator.y);
    ellipse(0, 0, rotator.radius * 2);
    pop();
}

/**
Draws our rotating object
*/
function drawRotator() {
    push();
    noStroke();
    fill(255, 0, 0);
    // Translate to the centre of rotation
    translate(rotator.x, rotator.y);
    // Rotate our object by its current rotation
    rotate(rotator.rotation);
    // Now translate by the radius so we can draw it on the edge
    // of the circle
    translate(rotator.radius, 0);
    // Finally draw the rotator (at 0,0 because we translated the origin)
    ellipse(0, 0, rotator.size);
    pop();

}

/**
Change the rotation speed based on arrow keys
*/
function handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
        // Left means accelerate in the negative
        rotator.rotationSpeed -= rotator.rotationAcceleration;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        // Right means accelerate in the positive
        rotator.rotationSpeed += rotator.rotationAcceleration;
    }

    // Constrain the rotation speed to its within the maximum
    rotator.rotationSpeed = constrain(rotator.rotationSpeed, -  rotator.maxRotationSpeed, rotator.maxRotationSpeed);
}


function menuText() {
    fill(255);

    currentX = rotator.x + cos(rotator.rotation) * rotator.radius;
    currentY = rotator.y + sin(rotator.rotation) * rotator.radius;


    push();
    textAlign(CENTER, TOP);
    textSize(30);
    text('CIRCLE DATA', width / 2, 50);
    pop();

    push();
    if (150 < currentY && currentY < 300 && currentX > (width / 2)) {
        game1 = true;
        fill('red');
    }
    textSize(15);
    textAlign(RIGHT, CENTER);
    text('Swallow Circle', 480, 230);
    pop();

    push();
    if (currentY > 300) {
        game2 = true;
        fill('red');
    }
    textAlign(CENTER, CENTER);
    textSize(15);
    text('Color Cache', 250, 370);
    pop();

    push();
    if (150 < currentY && currentY < 300 && currentX < (width / 2)) {
        game3 = true;
        fill('red');
    }
    textSize(15);
    textAlign(LEFT, CENTER);
    text('Bubble Buster', 20, 230);
    pop();

    push();
    textSize(15);
    textAlign(CENTER, BOTTOM);
    text('rOll the circle <left <  and  > right > \n Press ENTER cOmense your creative journey', 250, 450);
    text('', 250, 475);
    pop();

}

function menuToGame() {
    if (keyIsDown(13) && game1 === true) {//13 is Enter key code
        //go to game1 title
    }
    else if (keyIsDown(13) && game2 === true) {//13 is Enter key code
        //go to game2 title
    }
    else if (keyIsDown(13) && game3 === true) {//13 is Enter key code
        //go to game3 title
    }
}