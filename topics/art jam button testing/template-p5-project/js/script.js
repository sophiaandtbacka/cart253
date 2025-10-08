/**
 * Sound Effect Button
    * Pippin Barr
        *
 * A button that, when pressed, plays a barking sound
    */

"use strict";

const stage = {
    x: 600,
    y: 750,
};

const button1 = {
    x: 100,
    y: 100,
    size: 50,
    fill: "#ffffffff",
    fills: {
        unpressed: "#ffffffff",
        pressed: "#9b9b9bff"
    },
    soundEffect: undefined
};

const button2 = {
    x: 500,
    y: 100,
    size: 50,
    fill: "#000000",
    fills: {
        unpressed: "#000000",
        pressed: "#3e3d3dff"
    },
    soundEffect: undefined
};

// Rectangle halves
let rectB = {
    width: stage.x / 2,
    fill: "#000000"
};

let rectL = {
    width: stage.x / 2,
    fill: "#ffffff"
};

// Flag for animation
let growing = false;

function setup() {
    createCanvas(stage.x, stage.y);
}

function draw() {
    background("#aaaaaa");

    // Update rectB if growing
    if (growing) {
        rectB.width += 3; // speed of growth per frame
        rectB.width = constrain(rectB.width, 0, stage.x);
        if (rectB.width >= stage.x) {
            growing = false; // stop at edge
        }
    }

    // Draw rectangles
    fill(rectB.fill);
    rect(0, 0, rectB.width, stage.y);

    fill(rectL.fill);
    rect(rectB.width, 0, stage.x - rectB.width, stage.y);

    // Draw buttons
    drawButton(button1, "D", 0);
    drawButton(button2, "M", 255);
}

function drawButton(button, label, textColor) {
    push();
    noStroke();
    fill(button.fill);
    ellipse(button.x, button.y, button.size);
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(textColor);
    textFont("Arial");
    text(label, button.x, button.y + 2);
    pop();
}

function mousePressed() {
    const d1 = dist(mouseX, mouseY, button1.x, button1.y);
    if (d1 < button1.size / 2) {
        button1.fill = button1.fills.pressed;
        growing = true; // start growing animation
    }

    const d2 = dist(mouseX, mouseY, button2.x, button2.y);
    if (d2 < button2.size / 2) {
        button2.fill = button2.fills.pressed;
        growing = false; // stop if “M” clicked
    }
}

function mouseReleased() {
    button1.fill = button1.fills.unpressed;
    button2.fill = button2.fills.unpressed;
}