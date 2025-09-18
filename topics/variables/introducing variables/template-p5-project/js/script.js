/**
 * Introducing Variables
 * Sophia Andtbacka
 * 
 * Learned what a variable is and does
"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(640, 480)

}


/**
 * Draws a circle in center
*/
function draw() {
    background(0);

    //Draw circle
    push();
    fill(mouseX, mouseY, 0);
    noStroke();
    ellipse(width / 2, height / 2, 100, 100);
    pop();
}