/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**Menu Variables */
//Rotating around a circle
//LEFT to accelerate anticlockwise, RIGHT to accelerate clockwise
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

//varible of current position of rotating circle, lets us calculate text fill change
let currentX;
let currentY;



/**Game 1 Variables */
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
let allInputs1 = [];//array with all input variables

//circle variables 
let xSpacing;//x spacing between circles
let totalCircles;//total number of circles generated

let xCenter;//x initial positon for first circle
let y;//y initial positon for first circle

let row;//rows for circle organization
let count;//number of circles which have been created

let circles1;//array with all circles



/**Game 2 Variables */
//input box variables
let red;
let green;
let blue;

//creates global variable of circle
let circle;



/**Game 3 Variables */
//input box variables, use game 1 input variables
let cNumber;//have different number input variable because of different input width and default value
let allInputs3 = [];//array with all input variables

//default input values, different approach for default value input than game 1, this is easier to edit
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
//initially you will be on menu screen
let state = "menu";

//controls if you are on menu or dfferent games
let game1 = false;
let game2 = false;
let game3 = false;

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

//font for all text
function preload() {
    myFont = loadFont("assets/font/8-font.otf");
}
let myFont;



/**
 * Setup for menu and variations
*/
function setup() {
    createCanvas(500, 500);
    textFont(myFont);
}

/**
 * Display the menu or the current variation craws
*/
function draw() {
    switch (state) {
        case "title":
            titleDraw();
            break;
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
 * All Title Functions
 */
//don't need a different setup 
function titleDraw() {
    background(0);
    titleText();
}


function titleText() {
    //resets all game states, for when you go back to title page
    game1 = false;
    game2 = false;
    game3 = false;

    fill(255);//white text

    push();
    textAlign(CENTER, TOP);
    textSize(30);
    text('CIRCLE TITLE', width / 2, 50);
    pop();
}



/**
 * All Menu Functions
 */
//don't need a different setup 

//draws all of menu screen
//rotating circle on circle track, game variation titles, menu title, instruction text
function menuDraw() {
    background(0);
    menuText();//text and color change in text
    drawTrack(); //track circle moves on
    drawRotator(); //moving circle
    handleInput();//movement with left and right arrow keys
    // Rotate according to the current speed
    rotator.rotation += rotator.rotationSpeed;

    menuToGame();//makes it so you can go to go to other games
    returnTitle();//click t key and return to title screen
}


//All menu text and color change
function menuText() {
    //resets all game states, for when you go back to menu page
    game1 = false;
    game2 = false;
    game3 = false;

    //calculates current rotator position
    currentX = rotator.x + cos(rotator.rotation) * rotator.radius;
    currentY = rotator.y + sin(rotator.rotation) * rotator.radius;

    fill(255);//white text

    push();
    textAlign(CENTER, TOP);
    textSize(30);
    text('CIRCLE MENU', width / 2, 50);
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
    text('rOll the circle <left <  and  > right > \n Press ENTER to cOmense your creative journey', 250, 450);
    pop();
}

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

//Menu and Game Connection Function, connects menu action to all game variations
function menuToGame() {
    if (keyIsDown(13) && game1 === true) {//13 is Enter key code, game 1 is true when you roll the ball and the Swallow Circle game title is red (done with menuText function)
        //go to game1 title screen
        state = "swallow circle variation"
        resetScreens();
        game1Setup();
    }
    else if (keyIsDown(13) && game2 === true) {//13 is Enter key code, game 2 is true when you roll the ball and the Color Cache game title is red (done with menuText function)
        //go to game2 title screen
        state = "color cache variation";
        resetScreens();
        game2Setup();
    }
    else if (keyIsDown(13) && game3 === true) {//13 is Enter key code, game 3 is true when you roll the ball and the Bubble Buster game title is red (done with menuText function)
        //go to game3 title screen
        state = "bubble buster variation";
        resetScreens();
        game3Setup();
    }
}

//Sets games to title screen, used in menu and in all variations
function resetScreens() {
    title = true;
    data = false;
    game = false;
    enter = false;
}



/**
 * Universal Variation functions 
 */
//event that triggers change from title data and game screens in variations
// on game 1 creates all circles on game screen, on game 3 calculates distance from mouse and circle and moves circle 
function mouseClicked() {
    //variation 1
    if (state === "swallow circle variation") {
        if (enter === true && title === true) {
            title = false;
            data = true;
            enter = false;//resets enter button
        }
        else if (enter === true && data === true) {
            data = false;
            game = true;

            createCircles1();//generates initial circles and circle postions
        }
    }

    //variation 2
    if (state === "color cache variation") {
        if (enter === true && title === true) {
            title = false;
            data = true;
            enter = false;//resets enter button
        }
        else if (enter === true && data === true) {
            data = false;
            game = true;
        }
    }

    //variation 3
    if (state === "bubble buster variation") {
        if (enter === true && title === true) {
            data = true;
            title = false;
            enter = false;//resets enter button
        }
        else if (enter === true && data === true) {
            data = false;
            game = true;
            initialCircles();//generates initial circles in game screen
        }
        else if (game === true) {
            //if mouse and circle(s) overlaps circle(s) moves
            for (let c of circles) {
                const d = dist(mouseX, mouseY, c.x, c.y);
                if (d < c.size / 2) {
                    moveCircles(c);
                }
            }
        }
    }



}

//draws the enter button on the title and data screen in each variation
function enterButton() {
    fill(0);
    noStroke();
    ellipse(button.x, button.y, button.width, button.width - 50);
    push();
    fill(button.textFill);
    textAlign(CENTER, CENTER);
    textSize(button.textSize);
    text('ENTER', button.x, button.y);
    pop();
}
//checks overlap for enter button
function checkOverlap() {
    const d = dist(mouseX, mouseY, button.x, button.y);
    enter = d < button.width / 2
}

//Sets games to title screen
function resetScreens() {
    title = true;
    data = false;
    game = false;
    enter = false;
}

//click enter key return to data screen in each variation
function returnData() {
    if (
        (state === "swallow circle variation" ||
            state === "color cache variation" ||
            state === "bubble buster variation")
        && game === true
        && keyIsDown(13)//enter key code
    ) {
        data = true;
        game = false;
        title = false;
    }
}

//click m key to return to menu anytime
function returnMenu() {
    if (keyIsDown(77)) {//77 code for M key
        if (state === "swallow circle variation") {
            hideInputs1();
        }
        else if (state === "color cache variation") {
            hideInputs2();
        }
        else if (state === "bubble buster variation") {
            hideInputs3();
        }

        state = "menu";
        resetScreens();
    }

}

//click t key to return to entire project title screen
function returnTitle() {
    if (keyIsDown(84)) {//84 code for T key
        if (state === "swallow circle variation") {
            hideInputs1();
        }
        else if (state === "color cache variation") {
            hideInputs2();
        }
        else if (state === "bubble buster variation") {
            hideInputs3();
        }

        state = "title";
        resetScreens();
    }

}



/**
 * Game 1 functions
 *  */
function game1Setup() {
    dataInputs1();
    hideInputs1();
}

function game1Draw() {

    if (title === true) {
        background(0);
        hideInputs1();
        titleScreenText1();
        enterButton();
        checkOverlap();
    }

    else if (data === true) {
        background(0);
        showInputs1();
        dataScreenText1();
        enterButton();
        checkOverlap();
    }

    else if (game === true) {
        background(255);
        hideInputs1(); //hides input boxes from title screen, hide doesn't erase input values just hides visuals 
        moveCircles1();
        stopCircles();
        returnData();

        for (let c of circles1) {
            noStroke();
            fill(c.r, c.g, c.b, c.a);
            ellipse(c.x, c.y, c.size);
        }
    }

    returnMenu();
    returnTitle();//click t key and return to title screen
}


//all title screen text
function titleScreenText1() {
    //universal qualities
    fill(255);
    textAlign(CENTER, CENTER);

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

//all data screen text
function dataScreenText1() {
    fill(255);
    textAlign(CENTER);

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

//all data input boxes
function dataInputs1() {
    redMinInput1();
    redMaxInput1();
    greenMinInput1();
    greenMaxInput1();
    blueMinInput1();
    blueMaxInput1();
    alphaMinInput1();
    alphaMaxInput1();
    numberInput1();
    sizeInput1();
}
//red min input box
function redMinInput1() {
    redMin = createInput(1);
    redMin.size(60);

    redMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 146));

};
//red max input box
function redMaxInput1() {
    redMax = createInput(255);
    redMax.size(60);

    redMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 146));

};
//green min input box
function greenMinInput1() {
    greenMin = createInput(1);
    greenMin.size(60);

    greenMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 76));

};
//green max input box
function greenMaxInput1() {
    greenMax = createInput(255);
    greenMax.size(60);

    greenMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 76));

};
//blue min input box
function blueMinInput1() {
    blueMin = createInput(1);
    blueMin.size(60);

    blueMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 6));

};
//blue max input box
function blueMaxInput1() {
    blueMax = createInput(255);
    blueMax.size(60);

    blueMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 6));

};
//alpha min input box
function alphaMinInput1() {
    alphaMin = createInput(1);
    alphaMin.size(60);

    alphaMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 + 64));

};
//alpha max input box
function alphaMaxInput1() {
    alphaMax = createInput(255);
    alphaMax.size(60);

    alphaMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 + 64));

};
//number input box
function numberInput1() {
    numberC = createInput(1000);
    numberC.size(60);

    numberC.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 + 134));

};
function sizeInput1() {
    sizeC = createInput(10);
    sizeC.size(60);

    sizeC.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 + 134));

};
//hides all data inputs, use this on title and game screen
function hideInputs1() {
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
function showInputs1() {
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

//creates all circles and initial positions
function createCircles1() {
    //creates array with all circles 
    circles1 = [];

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
            circles1.push({
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
function moveCircles1() {
    //applies changed movement data to all circles in circles array
    for (let c of circles1) {

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

//stops and restarts circle movement based on up down and w and s keys
function stopCircles() {
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        for (let c of circles1) {
            c.vx = 0;
            c.vy = 0;
            c.acceleration = 0;
        }
    }
    else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        for (let c of circles1) {
            c.acceleration = 0.4;
        }
    }
}




/**
 * Game 2 functions 
 */
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
        dataScreenText2()
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

    returnMenu();
    returnTitle();//click t key and return to title screen
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
function dataScreenText2() {
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



/**
 * Game 3 functions
*/
function game3Setup() {
    dataInputs3();  //all inputs from data page
    hideInputs3();  //hides all the inputs
}

function game3Draw() {
    background(255);

    if (title === true) {
        background(0);
        hideInputs3();
        titleScreenText3();
        enterButton();
        checkOverlap();
    }

    else if (data === true) {
        background(0);
        showInputs3();
        dataScreenText3();
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

    returnMenu();
    returnTitle();//click t key and return to title screen
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
function dataScreenText3() {
    fill(255);
    textAlign(CENTER);

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

    allInputs3 = [redMin, redMax, greenMin, greenMax, blueMin, blueMax, alphaMin, alphaMax, cNumber];

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
    for (let i of allInputs3) i.hide();
}
//shows all data inputs
function showInputs3() {
    for (let i of allInputs3) i.show();
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
function moveCircles(c) {
    c.x = random(width);
    c.y = random(height);
    c.color = {
        r: random(Number(redMin.value()), Number(redMax.value())),
        g: random(Number(greenMin.value()), Number(greenMax.value())),
        b: random(Number(blueMin.value()), Number(blueMax.value())),
        a: random(Number(alphaMin.value()), Number(alphaMax.value())),
    };
}

