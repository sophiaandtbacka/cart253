/**
 * The Greatest Record of All Time
 * Sophia Andtbacka
 * 
 * Displays the Greatest Record of All Time
 */

"use strict";

/**
 * Creates the Canvas
*/
function setup() {
    createCanvas(640, 640);

}


/**
 * Displays the Record
*/
function draw() {
    //Grey Background
    background(150);

    //The main part of the record
    push();
    fill(255, 0, 0);
    stroke(255);
    ellipse(320, 320, 480);
    pop();

    //The label on the record
    push();
    fill("white");
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();

    //The hole in the record
    push();
    fill("#000000");
    noStroke();
    ellipse(320, 320, 20);
    pop();


}