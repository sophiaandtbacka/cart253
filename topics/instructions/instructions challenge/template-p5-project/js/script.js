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
    createCanvas(400, 600);
    //
    fill(255, 0, 0);
    textSize(102);
    textFont('Amity Jack');
    text('JAWS', 75, 25, 300, 100);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {


    //frame
    noFill();
    rect(0, 0, 400, 600);

    //sea
    push();
    fill(0, 0, 255);
    rect(0, 200, 400, 400);
    pop();

    drawShark();

    drawTeeth();



    //eyes
    push();
    fill(250, 0, 50);
    strokeWeight(5);
    ellipse(125, 450, 10);
    ellipse(275, 450, 10);
    pop();


    //sad face
    //head shape
    push();
    fill(250, 250, 0);
    rect(175, 150, 50);
    pop();
    //x eyes
    push();
    strokeWeight(2);
    line(185, 170, 195, 180);
    line(185 + 20, 170, 195 + 20, 180);
    line(185, 180, 195, 170);
    line(185 + 20, 180, 195 + 20, 170);
    pop();




}

//draws a shark
function drawShark() {
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

//draws shark teeth
function drawTeeth() {
    //shark tooth
    push();
    fill(255);
    angleMode(DEGREES);
    arc(200, 460, 55, 55, 250, 290);
    pop();

    push();
    fill(255);
    angleMode(DEGREES);
    arc(200 + 15, 460 + 5, 55 - 10, 55 - 10, 250 + 30, 290 + 30);
    pop();

    push();
    fill(255);
    angleMode(DEGREES);
    arc(200 + 15 * 2, 460 + 5 * 2, 55 - 10 * 2, 55 - 10 * 2, 250 + 30 * 2, 290 + 30 * 2);
    pop();

    //other side
    push();
    fill(255);
    angleMode(DEGREES);
    arc(200 - 15, 460 + 5, 55 - 10, 55 - 10, 250 - 30, 290 - 30);
    pop();

    push();
    fill(255);
    angleMode(DEGREES);
    arc(200 - 15 * 2, 460 + 5 * 2, 55 - 10 * 2, 55 - 10 * 2, 250 - 30 * 2, 290 - 30 * 2);
    pop();
}



