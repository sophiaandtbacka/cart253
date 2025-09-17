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
    createCanvas(800, 800);
    //
    fill("white");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    strokeWeight(20);
    strokeCap(SQUARE);
    line(0, 100, 20, 100);
    line(20, 120, 60, 120);
    line(60, 100, 120, 100);
    line(120, 120, 140, 120);


    line(x + 140, 100, x1 + 140, 100);

    for (let x = 0; x < 800; x + 140) {
        strokeWeight(20);
        line(x, 100, 200, 100);//generates random lines extending from the center
        x = x + 140;

    }

}


function drawTeeth() {

}

x = 0;
x1 = 20;

for (int x = 0; x < 800 ; x = x + 140) {
    for (int x1 = 20; x1 < 800 ; x1 = x1 + 140) {
        strokeWeight(20);
        line(x, 100, x1, 100);//generates random lines extending from the center
        x = x + 140;
        x1 = x1 + 140;
    }
}


for (int cr = 0; cr < 200 ; cr = cr + 10) {
    for (int cg = 0; cg < 200 ; cg = cg + 5) {
        for (int cb = 50; cb < 250 ; cb = cb + 50) {
            stroke(cr, cg, cb);
        float rx = random(-400, 400);
        float ry = random(-400, 400);
            line(0, 0, rx, ry);//generates random lines extending from the center
            cr = cr + 10;
            cg = cg + 5;
            cb = cb + 50;
        }
    }
}

for (let x = 0; x < 800; x + 140) {
    strokeWeight(20);
    line(x, 100, 200, 100);//generates random lines extending from the center
    x = x + 140;

}