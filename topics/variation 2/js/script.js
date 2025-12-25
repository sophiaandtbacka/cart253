/**
 * Variation Jam
 * Sophia Andtbacka
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

//NOTES: java loads first everything outside of functions i.e. variables and then loads functions top to bottom

"use strict";

//input box variables
let red;
let green;
let blue;

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

//creates global variable of circle
let circle;
let title = true;
let data = false;
let game = false;
let enter = false;

function preload() {
    myFont = loadFont("assets/font/8-font.otf");
}
let myFont;

function setup() {
    createCanvas(500, 500);

    dataInputs();

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
    if (title === true) {
        background(0);
        hideInputs();
        titleScreenText();
        enterButton();
        checkOverlap();
    }
    else if (data === true) {
        background(0);
        cursor(ARROW);
        showInputs();
        dataScreenText()
        enterButton();
        checkOverlap();
    }
    else if (game === true) {
        background(Number(red.value()), Number(green.value()), Number(blue.value()));
        cursor(CROSS);
        returnData();
        hideInputs();
        moveCircle();
        colorChange();
        drawCircle();

        push();
        fill(255);
        rect(0, 425, width, height);
        pop();
        showText();
    }
};

function mouseClicked() {
    if (enter === true && title === true) {
        title = false;
        data = true;
    }
    else if (enter === true && data === true) {
        data = false;
        game = true;
    }
};

function titleScreenText() {
    fill(255);
    textAlign(CENTER, CENTER);
    textFont(myFont);
    textSize(30);
    text('COLOR CIRCLE', width / 2, 100);

    //explanation
    push();
    textSize(20);
    text('XXX', width / 2, 150);
    pop();
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

function drawCircle() {
    noStroke();
    fill(circle.colorStart.r, circle.colorStart.g, circle.colorStart.b, circle.colorStart.a);
    ellipse(circle.x, circle.y, circle.size);
}

function moveCircle() {

    circle.x = mouseX;
    circle.y = mouseY;

    circle.x = constrain(circle.x, circle.size / 2 + 30, width - circle.size / 2 - 30);
    circle.y = constrain(circle.y, circle.size / 2 + 30, height - circle.size / 2 - 105);
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
    textAlign(LEFT, CENTER);
    text('R: ' + int(circle.colorStart.r), width / 5 - 35, 450);//int converts into integer
    text('G: ' + int(circle.colorStart.g), width / 2 - 86, 450);
    text('B: ' + int(circle.colorStart.b), width / 2 + 16, 450);
    text('A: ' + int(circle.colorStart.a), width / 2 + 117, 450);
}


function hideInputs() {
    red.hide();
    green.hide();
    blue.hide();
}

function showInputs() {
    red.show();
    green.show();
    blue.show();
}

//all text on circle data page
function dataScreenText() {
    fill(255);
    textAlign(CENTER);
    textFont(myFont);

    push();
    textSize(30);
    textAlign(CENTER);
    text('CIRCLE DATA', width / 2, 100);
    pop();

    push();
    textSize(20);
    text('RED', 125, 180);
    text('GREEN', 125, 280);
    text('BLUE', 125, 380);
    pop();
}

//all data input boxes
function dataInputs() {
    redInput();
    greenInput();
    blueInput();

}
//red min input box
function redInput() {
    red = createInput();
    red.size(200);

    red.position(
        (windowWidth / 2 - 95 + 40),
        (windowHeight / 2 - 85));

};

//green min input box
function greenInput() {
    green = createInput();
    green.size(200);

    green.position(
        (windowWidth / 2 - 95 + 40),
        (windowHeight / 2 + 15));

};

//blue min input box
function blueInput() {
    blue = createInput();
    blue.size(200);

    blue.position(
        (windowWidth / 2 - 95 + 40),
        (windowHeight / 2 + 115));

};


//return to data screen when enter key is pressed
function returnData() {
    if (keyIsDown(13)) {//13 is Enter key code
        data = true;
    }
}