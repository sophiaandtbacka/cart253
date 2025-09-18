/**
 * Creating Variables
 * Sophia Andtbacka
 * 
 * Experimenting with creating variable
 */

"use strict";

let cheeseRed = 255;
let cheeseGreen = 255;
let cheeseBlue = 0;

let holeShade = 0;
let holeSize = 180;
let holeX = 140;
let holeY = 175;

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
    background(cheeseRed, cheeseGreen, cheeseBlue);

    //the hole
    push();
    noStroke();
    fill(holeShade);
    ellipse(holeX, holeY, holeSize);
    pop();
}