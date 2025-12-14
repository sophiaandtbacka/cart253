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

function preload() {
    myFont = loadFont("assets/font/8-font.otf");
}
let myFont;

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
            a: random(10, 255),
        },
        size: 100
    };
}

function draw() {
    cursor(CROSS);
    background(255);
    moveCircle();
    colorChange();
    drawCircle();
    showText();
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
    if (mouseX !== pmouseX || mouseY !== pmouseY) {
        circle.colorStart.r = random(0, 255);
        circle.colorStart.g = random(0, 255);
        circle.colorStart.b = random(0, 255);
        circle.colorStart.a = random(10, 255);
    }
}

function showText() {
    fill(0);
    textFont(myFont);
    textSize(20);
    text('R: ' + int(circle.colorStart.r), width / 5 - 33, 450);//int converts into integer
    text('G: ' + int(circle.colorStart.g), width / 2 - 84, 450);
    text('B: ' + int(circle.colorStart.b), width / 2 + 14, 450);
    text('A: ' + int(circle.colorStart.a), width / 2 + 115, 450);
}
