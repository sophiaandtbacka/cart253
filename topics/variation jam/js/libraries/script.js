/**
 * Variation Jam
 * Sophia Andtbacka
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let game3 = true;

//input box variables
let redMin;
let redMax;
let greenMin;
let greenMax;
let blueMin;
let blueMax;
let alphaMin;
let alphaMax;
let cNumber;

let allInputs = [];//array for inputs, will be used to easily hide and show them

//default input values
let colorRmin = 1;
let colorRmax = 255;
let colorGmin = 1;
let colorGmax = 255;
let colorBmin = 1;
let colorBmax = 255;
let colorAmin = 1;
let colorAmax = 255;
let circleNumber = 1000;

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

let title = true; //initial game state
let data = false;
let game = false;

let enter = false; //initial enter button state

let circles = []; //array with all circles

function preload() {
    myFont = loadFont("assets/font/8-font.otf");
}
let myFont;

function setup() {
    createCanvas(500, 500);
    game1Setup();

}

function draw() {
    game1Draw();

}

function game1Setup() {
    dataInputs();  //all inputs from data page
}

function game1Draw() {
    background(255);

    if (title === true) {
        background(0);
        hideInputs();
        titleScreenText();
        enterButton();
        checkOverlap();
    }

    else if (data === true) {
        background(0);
        showInputs();
        dataScreenText();
        enterButton();
        checkOverlap();
    }

    else if (game === true) {
        background(255);
        hideInputs();
        returnData();
        //draws all of the circles
        for (let c of circles) {
            noStroke();
            fill(c.color.r, c.color.g, c.color.b, c.color.a);
            ellipse(c.x, c.y, c.size);
        }
    }
}


//event that triggers game screen from title screen and moves circle on game screen
function mouseClicked() {
    if (game3 === true) {
        if (enter === true && title === true) {
            data = true;
            title = false;
            enter = false;
        }
        else if (enter === true && data === true) {
            data = false;
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

}

function titleScreenText() {
    fill(255);
    textAlign(CENTER, CENTER);
    textFont(myFont);
    textSize(30);
    text('BUBBLE BUSTER', width / 2, 100);

    //explanation
    push();
    textSize(20);
    text('XXX', width / 2, 150);
    pop();
}

function hideInputs() {
    for (let i of allInputs) i.hide();
}

function showInputs() {
    for (let i of allInputs) i.show();
}

//all text on circle data page
function dataScreenText() {
    fill(255);
    textAlign(CENTER);
    textFont(myFont);

    push();
    textSize(30);
    text('CIRCLE DATA', width / 2, 60);
    pop();

    push();
    textSize(20);
    text('RED', 100, 120);
    text('GREEN', 100, 190);
    text('BLUE', 100, 260);
    text('ALPHA', 100, 330);
    text('NUMBER', 100, 400);
    pop();

    push();
    textSize(14);
    text('min', 175, 120);
    text('max', 325, 120);
    text('min', 175, 190);
    text('max', 325, 190);
    text('min', 175, 260);
    text('max', 325, 260);
    text('min', 175, 330);
    text('max', 325, 330);
    pop();
}

//all data input boxes
function dataInputs() {
    redMinInput();
    redMaxInput();
    greenMinInput();
    greenMaxInput();
    blueMinInput();
    blueMaxInput();
    alphaMinInput();
    alphaMaxInput();
    cNumberInput();

    allInputs = [redMin, redMax, greenMin, greenMax, blueMin, blueMax, alphaMin, alphaMax, cNumber];

}
//red min input box
function redMinInput() {
    redMin = createInput(colorRmin);
    redMin.size(60);

    redMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 146));

};
//red max input box
function redMaxInput() {
    redMax = createInput(colorRmax);
    redMax.size(60);

    redMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 146));

};
//green min input box
function greenMinInput() {
    greenMin = createInput(colorGmin);
    greenMin.size(60);

    greenMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 76));

};
//green max input box
function greenMaxInput() {
    greenMax = createInput(colorGmax);
    greenMax.size(60);

    greenMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 76));

};
//blue min input box
function blueMinInput() {
    blueMin = createInput(colorBmin);
    blueMin.size(60);

    blueMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 6));

};
//blue max input box
function blueMaxInput() {
    blueMax = createInput(colorBmax);
    blueMax.size(60);

    blueMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 6));

};
//alpha min input box
function alphaMinInput() {
    alphaMin = createInput(colorAmin);
    alphaMin.size(60);

    alphaMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 + 64));

};
//alpha max input box
function alphaMaxInput() {
    alphaMax = createInput(colorAmax);
    alphaMax.size(60);

    alphaMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 + 64));

};
//number input box
function cNumberInput() {
    cNumber = createInput(circleNumber);
    cNumber.size(240);

    cNumber.position(
        (windowWidth / 2 - 85),
        (windowHeight / 2 + 134));

};



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


// pushes all circle data into an array
function initialCircles() {
    circles = []; //clears previous circles if you're going back and forth between data and game page

    //loop creating all the circle data
    for (let i = 0; i < Number(cNumber.value()); i++) {
        //pushes all the circle data into an array called circles
        circles.push({
            x: random(width),
            y: random(height),
            size: 40,
            color: {
                r: random(Number(redMin.value()), Number(redMax.value())),
                g: random(Number(greenMin.value()), Number(greenMax.value())),
                b: random(Number(blueMin.value()), Number(blueMax.value())),
                a: random(Number(alphaMin.value()), Number(alphaMax.value())),
            }
        });
    }
}

//in game screen, moves the circle randomly and changes color randomly
function moveCircle(c) {
    c.x = random(width);
    c.y = random(height);
    c.color = {
        r: random(Number(redMin.value()), Number(redMax.value())),
        g: random(Number(greenMin.value()), Number(greenMax.value())),
        b: random(Number(blueMin.value()), Number(blueMax.value())),
        a: random(Number(alphaMin.value()), Number(alphaMax.value())),
    };
}

//return to data screen when enter key is pressed
function returnData() {
    if (keyIsDown(13)) {//13 is Enter key code
        data = true;
        game = false;
        title = false;
    }
}