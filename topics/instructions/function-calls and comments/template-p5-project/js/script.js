/**
 * Existential Writer's Block
 * Sophia Andtbacka
 * 
 * AN exploration of the existential angst of a novelist
 * who must sit down at their blue desk and confront the
 * abyss that is a blank page of paper.
 * 
 * The program is non=interactive to convey the inability
 * to get started on the project.
 */

"use strict";

/**
 * Creates the canvas for our masterpiece
*/
function setup() {
    // Create the canvas at a standard resolution
    createCanvas(400, 400);
}


/**
 *  Draws the writer's desktop and a blank piece of paper
*/
function draw() {
    // The blue desktop
    background(50, 100, 100);
    // The blank piece of paper
    rect(149, 99, 100, 200);
}