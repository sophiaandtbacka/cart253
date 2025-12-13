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

const button = {
    x: 250,
    y: 250,
    width: 100,
    height: 50,
    text: "Enter",
    textFill: 0,
    textSize: 20,
}

let circles = [];
let numCircles = 400;
let redMin;
let colorRmin = 0;
let enter = false;
let game = false;

function setup() {
    createCanvas(500, 500);
    background(255);

    redInput();


}

function draw() {
    background(255);

    if (game === false) {
        enterButton();
        checkOverlap();
    }


    colorRmin = Number(redMin.value());

    for (let c of circles) {
        noStroke();
        fill(c.color.r, c.color.g, c.color.b);
        ellipse(c.x, c.y, c.size);
    }

}

function mouseClicked() {
    if (enter === true && game === false) {
        initialCircles();
        game = true;
    }

    else if (game === true) {
        for (let c of circles) {
            const d = dist(mouseX, mouseY, c.x, c.y);
            if (d < c.size / 2) {
                moveCircle(c);
            }
        }
    }
}

function moveCircle(c) {
    c.x = random(width);
    c.y = random(height);
    c.color = {
        r: random(100, 200),
        g: random(100, 100),
        b: random(100, 200),
        //a: random(0.9, 1),
    };
}

function redInput() {
    redMin = createInput();
    redMin.position(0, 100);
    redMin.size(100);

    colorRmin = Number(redMin.value()); //number convert text string into actual numbers 

};

function enterButton() {
    ellipse(button.x, button.y, button.width);
    push();
    fill(button.textFill);
    textAlign(CENTER, CENTER);
    textSize(button.textSize);
    text('Enter', button.x, button.y);
    pop();
}

function checkOverlap() {
    const d = dist(mouseX, mouseY, button.x, button.y);
    if (d < button.width / 2) {
        enter = true;
    }
}

function initialCircles() {
    for (let i = 0; i < numCircles; i++) {
        circles.push({
            x: random(width),
            y: random(height),
            size: 40,
            color: {
                r: random(colorRmin, 200),
                g: random(100, 100),
                b: random(100, 200),
                //a: random(0.9, 1),
            }
        });
    }
}