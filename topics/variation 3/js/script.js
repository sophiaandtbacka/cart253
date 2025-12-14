/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


//variable for enter button
const button = {
    x: 250,
    y: 450,
    width: 100,
    height: 50,
    text: "Enter",
    textFill: 255,
    textSize: 25,
}

let title = true;
let game = false;
let enter = false;

function preload() {
    myFont = loadFont("assets/font/8-font.otf");
}
let myFont;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    if (title === true) {
        background(0);
        titleScreenText();
        enterButton();
        checkOverlap();
    }
    else if (game === true) {
        background(255);
    }

}

function mouseClicked() {
    if (enter === true && title === true) {
        title = false;
        game = true;
    }
}

function titleScreenText() {
    fill(255);
    textAlign(CENTER, CENTER);
    textFont(myFont);
    textSize(30);
    text('Circle Cyclone', width / 2, 100);
}

//draws the enter button on the title screen
function enterButton() {
    fill(0);
    noStroke();
    ellipse(button.x, button.y, button.width, button.width - 50);
    push();
    fill(button.textFill);
    textAlign(CENTER, CENTER);
    textSize(button.textSize);
    textFont(myFont);
    text('ENTER', button.x, button.y);
    pop();
}

//checks overlap for enter button
function checkOverlap() {
    const d = dist(mouseX, mouseY, button.x, button.y);
    enter = d < button.width / 2
}