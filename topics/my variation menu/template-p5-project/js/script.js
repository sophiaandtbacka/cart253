/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**Menu Variables */



/**
Rotating around a circle
LEFT to accelerate anticlockwise
RIGHT to accelerate clockwise
*/
let rotator = {
    // The centre
    x: 250,
    y: 230,
    // How far out from the center our thing rotates
    radius: 100,
    // How big rotating circle is
    size: 15,
    // What is the current rotation around the circle?
    rotation: 0,
    // How fast is it rotating
    rotationSpeed: 0.0,
    // How fast can it accelerate?
    rotationAcceleration: 0.001,
    // Maximum rotation speed
    maxRotationSpeed: 0.02,
}

//varible of current position, lets us calculate text fill change
let currentX;
let currentY;



/**Game 1 Variables */


/**Game 2 Variables */

//input box variables
let red;
let green;
let blue;

//creates global variable of circle
let circle;

/**Game 3 Variables */

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
let allInputs = [];

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


//array with all circles
let circles = [];

/**All Variations */

//controls if you are on menu or dfferent games
let game1;
let game2;
let game3;
game1 = false;
game2 = false;
game3 = false;

//initially you will be on menu screen
let state = "menu";

//initial individual game states
let title = true;
let data = false;
let game = false;

//initial enter button state
let enter = false;

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

function preload() {
    myFont = loadFont("assets/font/8-font.otf");
}
let myFont;



/**
 * Setup for menu and different variations
*/
function setup() {
    createCanvas(500, 500);
    textFont(myFont); //font for whole game

    switch (state) {
        case "menu":
            menuSetup();
            break;
        case "swallow circle variation":
            game1Setup();
            break;
        case "color cache variation":
            game2Setup();
            break;
        case "bubble buster variation":
            game3Setup();
            break;
    }
}

/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "swallow circle variation":
            game1Draw();
            break
        case "color cache variation":
            game2Draw();
            break;
        case "bubble buster variation":
            game3Draw();
            break;
    }

}


/**
 * All Menu Functions
 */
function menuSetup() {
    background(0);
}
function menuDraw() {
    background(0);
    menuText();
    handleInput();
    drawTrack();
    drawRotator();
    // Rotate according to the current speed
    rotator.rotation += rotator.rotationSpeed;

    menuToGame();//makes it so checks to go to other games
}

/**
 * Menu and Game Connection Function
 */
//connects menu action to all game variations
function menuToGame() {
    if (keyIsDown(13) && game1 === true) {//13 is Enter key code, game 1 is true when you roll the ball and the Swallow Circle game title is red
        //go to game1 title screen
        state = "swallow circle variation"
    }
    else if (keyIsDown(13) && game2 === true) {//13 is Enter key code, game 2 is true when you roll the ball and the Color Cache game title is red
        //go to game2 title screen
        state = "color cache variation"
    }
    else if (keyIsDown(13) && game3 === true) {//13 is Enter key code, game 3 is true when you roll the ball and the Bubble Buster game title is red
        //go to game3 title screen
        state = "bubble buster variation";
        title = true;
        data = false;
        game = false;
        enter = false;
        game3Setup();
    }
}

/**
 * Menu Visuals Functions
 */
//Draws the track our rotator moves on
function drawTrack() {
    push();
    stroke(255);
    noFill();
    translate(rotator.x, rotator.y);
    ellipse(0, 0, rotator.radius * 2);
    pop();
}

//Draws our rotating object
function drawRotator() {
    push();
    noStroke();
    fill(255, 0, 0);
    // Translate to the centre of rotation
    translate(rotator.x, rotator.y);
    // Rotate our object by its current rotation
    rotate(rotator.rotation);
    // Now translate by the radius so we can draw it on the edge
    // of the circle
    translate(rotator.radius, 0);
    // Finally draw the rotator (at 0,0 because we translated the origin)
    ellipse(0, 0, rotator.size);
    pop();

}

//Change the rotation speed based on arrow keys
function handleInput() {
    if (keyIsDown(LEFT_ARROW)) {
        // Left means accelerate in the negative
        rotator.rotationSpeed -= rotator.rotationAcceleration;
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        // Right means accelerate in the positive
        rotator.rotationSpeed += rotator.rotationAcceleration;
    }

    // Constrain the rotation speed to its within the maximum
    rotator.rotationSpeed = constrain(rotator.rotationSpeed, -  rotator.maxRotationSpeed, rotator.maxRotationSpeed);
}

//All menu text
function menuText() {
    // Reset all game states for it you go back to menu page
    game1 = false;
    game2 = false;
    game3 = false;

    fill(255);
    textFont(myFont);

    currentX = rotator.x + cos(rotator.rotation) * rotator.radius;
    currentY = rotator.y + sin(rotator.rotation) * rotator.radius;


    push();
    textAlign(CENTER, TOP);
    textSize(30);
    text('CIRCLE DATA', width / 2, 50);
    pop();

    push();
    if (150 < currentY && currentY < 300 && currentX > (width / 2)) {
        game1 = true;
        fill('red');
    }
    textSize(15);
    textAlign(RIGHT, CENTER);
    text('Swallow Circle', 480, 230);
    pop();

    push();
    if (currentY > 300) {
        game2 = true;
        fill('red');
    }
    textAlign(CENTER, CENTER);
    textSize(15);
    text('Color Cache', 250, 370);
    pop();

    push();
    if (150 < currentY && currentY < 300 && currentX < (width / 2)) {
        game3 = true;
        fill('red');
    }
    textSize(15);
    textAlign(LEFT, CENTER);
    text('Bubble Buster', 20, 230);
    pop();

    push();
    textSize(15);
    textAlign(CENTER, BOTTOM);
    text('rOll the circle <left <  and  > right > \n Press ENTER cOmense your creative journey', 250, 450);
    pop();

}


/**Universal Game functions */


//event that triggers game screen from title screen and moves circle on game screen
function mouseClicked() {
    if (state === "color cache variation") {
        if (enter === true && title === true) {
            title = false;
            data = true;
        }
        else if (enter === true && data === true) {
            data = false;
            game = true;
        }
    }

    if (state === "bubble buster variation") {
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

//draws the enter button on the title and data screen
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


/**Game 2 functions */

function game2Setup() {
    dataInputs2(); //input boxes for rgb background value
    hideInputs2(); //hides all input boxes

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

function game2Draw() {
    if (title === true) {
        background(0);
        titleScreenText2();
        enterButton();
        checkOverlap();
    }
    else if (data === true) {
        background(0);
        cursor(ARROW);//include this so if go back to data the cursor will change to default
        dataScreenText()
        showInputs2();
        enterButton();
        checkOverlap();
    }
    else if (game === true) {
        background(Number(red.value()), Number(green.value()), Number(blue.value()));//input valuse from data page
        cursor(CROSS);
        hideInputs2();

        //circle
        drawCircle();
        moveCircle();
        colorChange();

        //text
        //white padding at bottom so rgba values are always visible
        push();
        fill(255);
        rect(0, 425, width, height);
        pop();
        showText();//rgba values

        returnData();//when push enter button on game screen return to data page
    }
}

//all title screen text
function titleScreenText2() {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text('COLOR CIRCLE', width / 2, 100);

    //explanation
    push();
    textSize(20);
    text('XXX', width / 2, 150);
    pop();
}

//all data screen text

function dataScreenText() {
    fill(255);
    textAlign(CENTER);

    push();
    textSize(30);
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
function dataInputs2() {
    redInput();
    greenInput();
    blueInput();
}
//red min input box
function redInput() {
    red = createInput(255);
    red.size(200);

    red.position(
        (windowWidth / 2 - 95 + 40),
        (windowHeight / 2 - 85));

};
//green min input box
function greenInput() {
    green = createInput(255);
    green.size(200);

    green.position(
        (windowWidth / 2 - 95 + 40),
        (windowHeight / 2 + 15));

};
//blue min input box
function blueInput() {
    blue = createInput(255);
    blue.size(200);

    blue.position(
        (windowWidth / 2 - 95 + 40),
        (windowHeight / 2 + 115));

};
//hides all inputs
function hideInputs2() {
    red.hide();
    green.hide();
    blue.hide();
}
//shows all inputs
function showInputs2() {
    red.show();
    green.show();
    blue.show();
}

//draws the circle
function drawCircle() {
    noStroke();
    fill(circle.colorStart.r, circle.colorStart.g, circle.colorStart.b, circle.colorStart.a);
    ellipse(circle.x, circle.y, circle.size);
}
//circle moves based on mouse position, has constraints which created visual padding
function moveCircle() {

    circle.x = mouseX;
    circle.y = mouseY;

    circle.x = constrain(circle.x, circle.size / 2 + 30, width - circle.size / 2 - 30);
    circle.y = constrain(circle.y, circle.size / 2 + 30, height - circle.size / 2 - 105);
}
//when mouse moves color of circle changes
function colorChange() {
    if (mouseX !== pmouseX || mouseY !== pmouseY) {
        circle.colorStart.r = random(0, 255);
        circle.colorStart.g = random(0, 255);
        circle.colorStart.b = random(0, 255);
        circle.colorStart.a = random(10, 255);
    }
}

//text showing rgba value of circle
function showText() {
    fill(0);
    textSize(20);
    textAlign(LEFT, CENTER);
    text('R: ' + int(circle.colorStart.r), width / 5 - 35, 450);//int converts into integer
    text('G: ' + int(circle.colorStart.g), width / 2 - 86, 450);
    text('B: ' + int(circle.colorStart.b), width / 2 + 16, 450);
    text('A: ' + int(circle.colorStart.a), width / 2 + 117, 450);
}



/**Game 3 functions */

function game3Setup() {
    dataInputs3();  //all inputs from data page
    hideInputs();  //hides all the inputs
}

function game3Draw() {
    background(255);

    if (title === true) {
        background(0);
        hideInputs();
        titleScreenText3();
        enterButton();
        checkOverlap();
    }

    else if (data === true) {
        background(0);
        showInputs3();
        dataScreenText();
        enterButton();
        checkOverlap();
    }

    else if (game === true) {
        background(255);
        hideInputs3();
        returnData();
        //draws all of the circles
        for (let c of circles) {
            noStroke();
            fill(c.color.r, c.color.g, c.color.b, c.color.a);
            ellipse(c.x, c.y, c.size);
        }
    }
}



//all title screen text
function titleScreenText3() {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text('BUBBLE BUSTER', width / 2, 100);

    //explanation
    push();
    textSize(20);
    text('XXX', width / 2, 150);
    pop();
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
function dataInputs3() {
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
//hides all data inputs
function hideInputs3() {
    for (let i of allInputs) i.hide();
}
//shows all data inputs
function showInputs3() {
    for (let i of allInputs) i.show();
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
    if (
        (state === "swallow circle variation" ||
            state === "color cache variation" ||
            state === "bubble buster variation")
        && game === true
        && keyIsDown(13)
    ) {
        data = true;
        game = false;
        title = false;
    }
}
