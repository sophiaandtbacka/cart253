/**
 * Variation Jam
 * Sophia Andtbacka
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

//NOTES: java loads first everything outside of functions i.e. variables and then loads functions top to bottom

"use strict";

let circle;//creates global variable of circle


function setup() {
    createCanvas(500, 500);

    //assigns values to global variable, great solution if your variable is using p5 functions, otherwise doesn't work because p5 initializes in setup
    circle = {
        x: width / 2,
        y: height / 2,
        colorStart: {
            r: random(0, 255),
            g: random(0, 255),
            b: random(0, 255),
            a: random(0.8, 1)
        },
        size: 25
    };
}

function draw() {
    drawCircle();
    moveCircle();
    //colorChange();
}

function drawCircle() {
    noStroke();
    fill(circle.colorStart.r, circle.colorStart.g, circle.colorStart.b, circle.colorStart.a);
    ellipse(circle.x, circle.y, circle.size);
}

function moveCircle() {
    circle.x = mouseX
    circle.y = mouseY
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
