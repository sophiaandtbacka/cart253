/**
 * Creating Variables
 * Sophia Andtbacka
 * 
 * Experimenting with creating variable
 */

"use strict";

/**
 * Creates the Canvas
*/
function setup() {
    createCanvas(480, 480);
}


/**
 * Draws a hole in a piece of cheese
*/
function draw() {
    // the chese
    background(255, 255, 0);

    //the hole
    push();
    noStroke();
    fill(0);
    ellipse(140, 175, 180);
    pop();
}