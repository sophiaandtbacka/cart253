/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

//input box variables
let sizeC;
let numberC;

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

//variable for game stage
let title = true;
let game = false;
let enter = false;

//font
function preload() {
    myFont = loadFont("assets/font/8-font.otf");
}
let myFont;



//circle variables 
let spacing;
let totalCircles;

let xCenter;
let y;

let row;
let count;

let circles;





/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);

    sizeInput();
    numberInput();
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

        //hides input boxes from title screen, hide doesn't erase input values just hides visuals 
        hideInput();


        moveCircles();

        for (let c of circles) {
            noStroke();
            fill(0);
            ellipse(c.x, c.y, c.size);
        }



    }
};


//event for enter button, connects title and game screen
function mouseClicked() {
    if (enter === true && title === true) {
        title = false;
        game = true;

        //generates initial circles and circle postions
        createCircles();


    }
};

function createCircles() {
    //create array with all circles 
    circles = [];

    //circle mapping/organization variable
    row = 1;
    count = 0;

    //variables for circle organization
    xCenter = width / 2;
    y = width / 4;

    //grabs data for loop
    spacing = Number(sizeC.value()); //make spacing same width as circle size
    totalCircles = Number(numberC.value()); //number input is total circles

    //should add a rounding element so number rounded to nearest base 10 or what ever thing that is 


    //continue as long as count is less than number of circle input
    while (count < totalCircles) {

        for (let i = 0; i < row; i++) {

            if (count >= totalCircles) { return; } //stops loop

            else {
                let x = xCenter + i * 2 * spacing - (row - 1) * spacing;

                circles.push({
                    x: x,
                    y: y,
                    homeX: x,
                    homeY: y,
                    size: spacing,
                    //acceleration
                    ax: 0,
                    ay: 0,
                    acceleration: 0.4,
                    //friction
                    vx: 0,
                    vy: 0,
                    friction: 0.97,
                    //fastest it can go
                    maxSpeed: 8,
                    row: row,
                    indexInRow: i,
                });

                count++;
            }


        }

        y += (2 * spacing);//I added the 2* i think this will be better, or can make spacing and circle size diff vari
        row++;

    }


};

function accelerationCircle() {
    if (mouseX !== pmouseX || mouseY !== pmouseY) {
        circle.ax = circle.acceleration;
        circle.ay = circle.acceleration
    }
};

/**
Apply acceleration, friction, and velocity to the shape
Constrain its velocity and keep it on the canvas
*/
function moveCircles() {
    for (let c of circles) {

        // direction to mouse
        let dx = mouseX - c.x;
        let dy = mouseY - c.y;

        let dist = sqrt(dx * dx + dy * dy);
        if (dist !== 0) {
            dx /= dist;
            dy /= dist;
        }

        // apply acceleration
        c.vx += dx * c.acceleration;
        c.vy += dy * c.acceleration;

        // friction
        c.vx *= c.friction;
        c.vy *= c.friction;

        // limit speed
        c.vx = constrain(c.vx, -c.maxSpeed, c.maxSpeed);
        c.vy = constrain(c.vy, -c.maxSpeed, c.maxSpeed);

        // move
        c.x += c.vx;
        c.y += c.vy;
    }
}




//draws all text for title screen except enter text on button
function titleScreenText() {
    //universal qualities
    fill(255);
    textAlign(CENTER, CENTER);
    textFont(myFont);

    //title
    push();
    textSize(30);
    text('Swallow Circles', width / 2, 100);
    pop();

    //explanation
    push();
    textSize(20);
    text('XXX', width / 2, 150);
    pop();


    //input box text
    push();
    textSize(20);
    text('NUMBER: ', width / 4, 390);
    text('SIZE: ', 3 * width / 5 + 20, 390);
    pop();

};

//draws two input value boxes
function sizeInput() {
    sizeC = createInput();
    sizeC.size(60);

    sizeC.position(
        (windowWidth / 2 + 100),
        (windowHeight / 2 + 130));

};
function numberInput() {
    numberC = createInput();
    numberC.size(60);

    numberC.position(
        (windowWidth / 2 - 85),
        (windowHeight / 2 + 130));

};

//hides input value boxes
function hideInput() {
    sizeC.hide();
    numberC.hide();
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
};

//checks overlap for enter button
function checkOverlap() {
    const d = dist(mouseX, mouseY, button.x, button.y);
    enter = d < button.width / 2
};