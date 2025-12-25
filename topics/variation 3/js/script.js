/**
 * Title of Project
 * Author Name
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
let numberC;
let sizeC;


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


//variables for game stage
let title = true;
let data = false;
let game = false;
let enter = false;


//font
function preload() {
    myFont = loadFont("assets/font/8-font.otf");
}
let myFont;


//circle variables 
let xSpacing;
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

    dataInputs();
}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
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
        showInputs();
        dataScreenText();
        enterButton();
        checkOverlap();
    }

    else if (game === true) {
        background(255);
        hideInputs(); //hides input boxes from title screen, hide doesn't erase input values just hides visuals 
        moveCircles();
        stopCircles();
        returnData();

        for (let c of circles) {
            noStroke();
            fill(c.r, c.g, c.b, c.a);
            ellipse(c.x, c.y, c.size);
        }

    }
};



//event for enter button, connects title and data and game screens
function mouseClicked() {
    if (enter === true && title === true) {
        title = false;
        data = true;
    }
    else if (enter === true && data === true) {
        data = false;
        game = true;

        //generates initial circles and circle postions
        createCircles();
    }
};


//draws all text for title screen except enter text on button
function titleScreenText() {
    //universal qualities
    fill(255);
    textAlign(CENTER, CENTER);
    textFont(myFont || 'Courier');

    //title
    push();
    textSize(30);
    text('SWALLOW CIRCLES', width / 2, 100);
    pop();

    //explanation
    push();
    textSize(20);
    text('XXX', width / 2, 150);
    pop();

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
    text('SIZE', 315, 400);
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
    text('tot', 175, 400);
    pop();
}

//hides all data inputs, use this on title and game screen
function hideInputs() {
    redMin.hide();
    redMax.hide();

    greenMin.hide();
    greenMax.hide();

    blueMin.hide();
    blueMax.hide();

    alphaMin.hide();
    alphaMax.hide();

    numberC.hide();
    sizeC.hide();
}
//shows all data inputs, use this on data screen
function showInputs() {
    redMin.show();
    redMax.show();

    greenMin.show();
    greenMax.show();

    blueMin.show();
    blueMax.show();

    alphaMin.show();
    alphaMax.show();

    numberC.show();
    sizeC.show();
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
    numberInput();
    sizeInput();
}
//red min input box
function redMinInput() {
    redMin = createInput();
    redMin.size(60);

    redMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 146));

};
//red max input box
function redMaxInput() {
    redMax = createInput();
    redMax.size(60);

    redMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 146));

};
//green min input box
function greenMinInput() {
    greenMin = createInput();
    greenMin.size(60);

    greenMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 76));

};
//green max input box
function greenMaxInput() {
    greenMax = createInput();
    greenMax.size(60);

    greenMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 76));

};
//blue min input box
function blueMinInput() {
    blueMin = createInput();
    blueMin.size(60);

    blueMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 6));

};
//blue max input box
function blueMaxInput() {
    blueMax = createInput();
    blueMax.size(60);

    blueMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 6));

};
//alpha min input box
function alphaMinInput() {
    alphaMin = createInput();
    alphaMin.size(60);

    alphaMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 + 64));

};
//alpha max input box
function alphaMaxInput() {
    alphaMax = createInput();
    alphaMax.size(60);

    alphaMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 + 64));

};
//number input box
function numberInput() {
    numberC = createInput();
    numberC.size(60);

    numberC.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 + 134));

};
function sizeInput() {
    sizeC = createInput();
    sizeC.size(60);

    sizeC.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 + 134));

};


//creates all circles and initial positions
function createCircles() {
    //creates array with all circles 
    circles = [];

    //circle organization variables, rows in pyramid shape and number of circles that have been created so far
    row = 1;
    count = 0;

    //variables for circle position organization, x and y start point for pyramid shape
    xCenter = width / 2;
    y = width / 4;

    //grabs data for loop
    xSpacing = Number(sizeC.value()); //circle size input value on data page is circle size and x spacing 
    totalCircles = Number(numberC.value()); //number input value on data page is total circles

    //didn't add a rounding element but could add in the future so that you're always creating perfect pyramids

    //continues creating circles as long as count is less than input number value on data page, use < instead of <= because we start count at 0
    while (count < totalCircles) {

        //creates circles until one less than row value, start with count=0 and row=1 so first row (row 1) will have one circle with index 0
        for (let i = 0; i < row; i++) {

            let x = xCenter + i * 2 * xSpacing - (row - 1) * xSpacing; //creates spacing for the intial pyramind organization, xCenter is start point, i*2*xSpacing offsets each circle horizontally, -(row-1)*xSpacing centers the row so it is symetrical to row above

            //puts c data into circles array
            circles.push({
                //position
                x: x,
                y: y,

                //not using right now but might be helpful for future interations
                row: row,
                indexInRow: i,

                //size: is same as size input on data page and x spacing
                size: xSpacing,

                // movement
                //direction
                dir: 0,
                //acceleration
                acceleration: 0.4,//how fast circles move towards mouse, fixed
                //friction and constraints
                vx: 0,
                vy: 0,
                friction: 0.99, //how much slows down the circle ea frame, must be less than 1, fixed
                maxSpeed: 8, //fastest it can go, fixed

                //color
                r: random(Number(redMin.value()), Number(redMax.value())),
                g: random(Number(greenMin.value()), Number(greenMax.value())),
                b: random(Number(blueMin.value()), Number(blueMax.value())),
                a: random(Number(alphaMin.value()), Number(alphaMax.value())),
            });

            count++;//count goes up to run the loop again and the next circle is created
        }

        y += (2 * xSpacing);//2* creates better visual spacing verticly between circle rows
        row++; //creates next row when finished creating right amout of circles in previous row 

    }

};

/**
Apply acceleration, friction, and velocity to circles,constrains its velocity
Adapted from Pippin's Acceleration and Friction example, 
I don't fully understand the math and physics will need to read up on
*/
function moveCircles() {
    //applies changed movement data to all circles in circles array
    for (let c of circles) {

        c.dir = createVector(mouseX - c.x, mouseY - c.y); // sets up a direction vector connecting mouse position and circle position

        c.dir.normalize();//make vector magnitude 1 so doesn't change acceleration

        // apply acceleration
        c.vx += c.dir.x * c.acceleration;
        c.vy += c.dir.y * c.acceleration;

        // friction
        c.vx *= c.friction;
        c.vy *= c.friction;

        // limits speed
        c.vx = constrain(c.vx, -c.maxSpeed, c.maxSpeed);
        c.vy = constrain(c.vy, -c.maxSpeed, c.maxSpeed);

        // move circles with new velocity
        c.x += c.vx;
        c.y += c.vy;
    }
}

function stopCircles() {
    if (keyIsDown(UP_ARROW)) {
        for (let c of circles) {
            c.vx = 0;
            c.vy = 0;
            c.acceleration = 0;
        }
    }
    else if (keyIsDown(DOWN_ARROW)) {
        for (let c of circles) {
            c.acceleration = 0.4;
        }
    }
}

function returnData() {
    if (keyIsDown(13)) {//13 is Enter key code
        data = true;
    }
}