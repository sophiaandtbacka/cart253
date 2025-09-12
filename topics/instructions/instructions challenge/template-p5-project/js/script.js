/**
 * Java Jaws
 * Sophia Andtbacka
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(400, 600)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("white");

    //frame
    noFill();
    rect(0, 0, 400, 600);

    //sea
    push();
    fill(0, 0, 255);
    rect(0, 200, 400, 400);
    pop();

    //shark
    //shark nose body edge
    push();
    fill(100);
    noStroke();
    ellipse(200, 600, 250, 450);
    pop();

    //shark nose
    push();
    fill(100);
    noStroke();
    triangle(125, 420, 200, 300, 275, 420);
    pop();


    //shark lighter belly
    push();
    fill(150);
    noStroke();
    ellipse(200, 600, 260, 420);
    pop();


}