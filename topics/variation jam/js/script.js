/**
 * Variation Jam
 * Sophia Andtbacka
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//I don't think I'll use this in my pseudocode you can see I had a different approach plan
const circle = {
    /*x: random(1, 400),
    y: random(1, 400),
    colorNoOverlap: {
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255),
    },
    colorOverlap: {
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255),
    },
    */
    size: 40
};

let circles = [];
let numCircles = 40;

function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < numCircles; i++) {
        circles.push({
            x: random(width),
            y: random(height),
            size: 40,
            color: {
                r: random(100, 200),
                g: random(100, 100),
                b: random(100, 200),
                //a: random(0.9, 1),
            }
        });
    }
}

function draw() {
    for (let c of circles) {
        noStroke();
        fill(c.color.r, c.color.g, c.color.b);
        ellipse(c.x, c.y, c.size);
    }
}

function mousePressed() {
    for (let c of circles) {
        const d = dist(mouseX, mouseY, c.x, c.y);
        if (d < c.size / 2) {
            moveCircle(c);
        }
    }
}

function moveCircle(c) {
    c.x = random(width);
    c.y = random(height);
    c.color = {
        r: random(0, 200),
        g: random(0, 200),
        b: random(0, 200),
        //a: random(0.9, 1),
    };
}
