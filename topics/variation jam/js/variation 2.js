/**
 * Variation Jam
 * Sophia Andtbacka
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


const circle = {
    x: 250, // or width/2 after setup
    y: 250, // or height/2 after setup
    colorStart: {
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255),
        a: random(0.8, 1)
    },
    size: 25
};

function setup() {
    createCanvas(500, 500);
}

function draw() {
    drawCircle();
    colorChange();
}

function drawCircle() {
    noStroke();
    fill(circle.colorStart.r, circle.colorStart.g, circle.colorStart.b, circle.colorStart.a);
    ellipse(circle.x, circle.y, circle.size);
}

function colorChange() {
    if (mouseX !== pmouseX) {
        circle.colorStart = {
            r: random(0, 255),
            g: random(0, 255),
            b: random(0, 255),
            a: random(0.8, 1)
        };
    }
}
