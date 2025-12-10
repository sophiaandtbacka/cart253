/**
 * Variation Jam
 * Sophia Andtbacka
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const circle = {
    x: random(x, x),
    y: random(y, y),
    colorNoOverlap: {
        r: random(n, n),
        g: random(n, n),
        b: random(n, n),
    },
    colorOverlap: {
        r: random(n, n),
        g: random(n, n),
        b: random(n, n),
    },
    size: n
};

let circles = [];
let numCircles = n;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    drawCircle();
    checkOverlap();
    mousePressed();
}

function drawCircle() {
    // create starting circles
    for (let i = 0; i < numCircles; i++) {
        fill(colorNoOverlap);
        ellipse(x, y, width, height);
    };
}


function moveCircle(circle) {
    // fill with the circle's overlap color
    fill(circle.colorOverlap.r, circle.colorOverlap.g, circle.colorOverlap.b);

    // teleport to a new random position
    circle.x = random(n, n);
    circle.y = random(n, n);
}

function checkOverlap() {
    const d = distance(mouseX, mouseY, circles.x, circles.y);
    if (d < circle.size / 2) {
        checkOverlap = true
    }
    else {
        checkOverlap = false
    }
}

function mousePressed() {
    if (checkOverlap === true) {
        moveCircle();
    }
}