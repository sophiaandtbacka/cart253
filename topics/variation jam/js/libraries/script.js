/**
 * Variation Jam
 * Sophia Andtbacka
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

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

//input box string data variables
let colorRmin = 0;
let colorRmax = 0;
let colorGmin = 0;
let colorGmax = 0;
let colorBmin = 0;
let colorBmax = 0;
let colorAmin = 0;
let colorAmax = 0;
let circleNumber = 0;

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
let data = false;
let game = false;
let circle = 0;
let circles = [];

function preload() {
    myFont = loadFont("assets/font/8-font.otf");
}
let myFont;

function setup() {
    createCanvas(500, 500);


    //all inputs from data page
    dataInputs();
}

function draw() {
    background(255);

    if (title === true) {
        background(0)
        enterButton();
        checkOverlap();
    }

    else if (data === true) {
        background(0);
        dataScreenText();
        enterButton();
        checkOverlap();
    }

    else if (game === true) {
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
    if (title === true) {
        data = true;
    }
    else if (data === true && game === false) {
        grabData();
        initialCircles();
        game = true;
    }

    else if (game === true) {
        //
        for (let c of circles) {
            const d = dist(mouseX, mouseY, c.x, c.y);
            if (d < c.size / 2) {
                moveCircle(c);
            }
        }
    }
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
}
//red min input box
function redMinInput() {
    redMin = createInput();
    redMin.size(60);

    redMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 150));

};
//red max input box
function redMaxInput() {
    redMax = createInput();
    redMax.size(60);

    redMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 150));

};
//green min input box
function greenMinInput() {
    greenMin = createInput();
    greenMin.size(60);

    greenMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 80));

};
//green max input box
function greenMaxInput() {
    greenMax = createInput();
    greenMax.size(60);

    greenMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 80));

};
//blue min input box
function blueMinInput() {
    blueMin = createInput();
    blueMin.size(60);

    blueMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 10));

};
//blue max input box
function blueMaxInput() {
    blueMax = createInput();
    blueMax.size(60);

    blueMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 10));

};
//alpha min input box
function alphaMinInput() {
    alphaMin = createInput();
    alphaMin.size(60);

    alphaMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 + 60));

};
//alpha max input box
function alphaMaxInput() {
    alphaMax = createInput();
    alphaMax.size(60);

    alphaMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 + 60));

};
//number input box
function cNumberInput() {
    cNumber = createInput();
    cNumber.size(240);

    cNumber.position(
        (windowWidth / 2 - 85),
        (windowHeight / 2 + 130));

};

//grabs all the data from the input boxes
function grabData() {
    colorRmin = Number(redMin.value()); //number converts text string into actual numbers 
    redMin.hide();

    colorRmax = Number(redMax.value()); //number converts text string into actual numbers 
    redMax.hide();

    colorGmin = Number(greenMin.value()); //number converts text string into actual numbers 
    greenMin.hide();

    colorGmax = Number(greenMax.value()); //number converts text string into actual numbers 
    greenMax.hide();

    colorBmin = Number(blueMin.value()); //number converts text string into actual numbers 
    blueMin.hide();

    colorBmax = Number(blueMax.value()); //number converts text string into actual numbers 
    blueMax.hide();

    colorAmin = Number(alphaMin.value()); //number converts text string into actual numbers 
    alphaMin.hide();

    colorAmax = Number(alphaMax.value()); //number converts text string into actual numbers 
    alphaMax.hide();

    circleNumber = Number(cNumber.value()); //number converts text string into actual numbers 
    cNumber.hide();
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
    if (d < button.width / 2) {
        enter = true;
    }
}




// pushes all circle data into an array
function initialCircles() {
    //loop creating all the circle data
    for (let i = 0; i < circleNumber; i++) {
        //pushes all the circle data into an array called circles
        circles.push({
            x: random(width),
            y: random(height),
            size: 40,
            color: {
                r: random(colorRmin, colorRmax),
                g: random(colorGmin, colorGmax),
                b: random(colorBmin, colorBmax),
                a: random(colorAmin, colorAmax),
            }
        });
    }
}

//in game screen, moves the circle randomly and changes color randomly
function moveCircle(c) {
    c.x = random(width);
    c.y = random(height);
    c.color = {
        r: random(colorRmin, colorRmax),
        g: random(colorGmin, colorGmax),
        b: random(colorBmin, colorBmax),
        a: random(colorAmin, colorAmax),
    };
}