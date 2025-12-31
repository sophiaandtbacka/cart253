/**
 * Digital DADA
 * Sophia "Crystalitious" Maryse Andtbacka
 * 
 *Objective: create mini games that use circles to discover different forms, colours, and patterns
 *Inspiration: Dada movement and process art
 *
 * Title Screen: has project description
 *      Event Mouse click: click to read through the project description and enter the menu page
 *      Event T key press: press T to return to the title page anytime
 * 
 * Menu Screen: has title text, instruction text, and rotating circle on a circle track which allows you to choose a variation
 *      Event LEFT arrow press: accelerate circle anticlockwise
 *      Event RIGHT arrow press: accelerate circle clockwise
 *      Event M key press: returns to the menu from any variation
 * 
 * Variation 1 "Swallow Circle": create interesting forms with generated circle and mouse movement, define circles that will be generated with user input boxes
 *      Title Screen: title text, description text, instruction text, and ENTER button
 *          Event click ENTER button: switches screen to data input screen
 *      Data Input Screen: title text, user input boxes, and ENTER button
 *          Inputs: rgba max and min, number, and size user input boxes
 *      Game Screen: generated circles
 *          Event Mouse Moves: circles move based on mouse position
 *          Event ENTER key press: return to data input page
 *  
 * Variation 2 "Couleur Cachee": random circle color picker, define background with rgb values
 *      Title Screen: title text, description text, instruction text, and ENTER button
 *          Event click ENTER button: switches screen to data input screen
 *      Data Input Screen: title text, user input boxes, and ENTER button
 *          Inputs: rgb values for background
 *      Game Screen: generated circle with random color fill, colored background, current circle color fill rgba values text
 *          Event Mouse Moves: circles color fill changes and text displaying it's rgba value changes
 *          Event ENTER key press: return to data input page 
 * 
 * Variation 3 "Bubble Burster": created interesting patterns with generated circle, define circles that will be generated with user input boxes, click undesired circles to move it's position and colour
 *      Title Screen: title text, description text, instruction text, and ENTER button
 *          Event click ENTER button: switches screen to data input screen
 *      Data Input Screen: title text, user input boxes, and ENTER button
 *          Inputs: rgba max and min, and number input boxes
 *      Game Screen: generated circles
 *          Event Mouse Click: if the a circle(s) overlap the mouse position it(they) move position and change color
 *          Event ENTER key press: return to data input page   
 */

"use strict";
/**Title Variables */
let speechState = 0;//what paragraph is being shown

let dataAngle = 0;//angle for rotating title

//variable for center circle
let cCircle = {
    x: 250,
    y: 250,
    size: 385,
}

//all of project explination text
let paragraphText = {
    x: 100,
    y: 160,
    fill: 'black',
    size: 13,
    strs: {
        para1: " This project draws \n inspiration from the Dada movement, bringing it into the digital age. Rather than creating traditional games with set objectives, it leans on the philosophy of process art, presenting interactive spaces for exploration and experimentation. At its core, the work begins with a single shape \n< the circle > and investigates how computation can generate a variety of uniquely digital experiences through \n this simple visual element. \n\n Click to Continue",
        para2: "Through this framework \n two uniquely digital concepts are \nexplored, randomness and digital movement. \nFirstly, randomness introduces true \nunpredictability, allowing each iteration to unfold\n differently and producing outcomes that cannot be \nfully anticipated. Secondly, movement in the digital \ndomain. This includes parameters such as acceleration, \nfriction, attraction, and constraints which can be \nprecisely defined, enabling behaviors and patterns \nthat would be impossible to replicate in the \nphysical world. Together, these mechanisms\n reveal the distinctive capacities of \ncomputation in visual creation. \n\n Click to Continue",
        para3: "As a result, the role of the \nparticipant shifts from that of a player \n pursuing goals to that of an observer and curator. \nThe project encourages participants to step back \nand watch patterns and behaviors evolve, \nintervening only when particular moments resonate.  \nIn this way, creation becomes curation. \nThis act of noticing, choosing, and \nframing becomes the artistry.\n\n Press T at anytime to return to this page \nClick to Continue",
    },
};



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
    maxRotationSpeed: 0.03,
}

//varible of current position of rotating circle, lets us calculate text fill change
let currentX;
let currentY;



/**Variation 1 Variables */
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



/**Variation 2 Variables */
//input box variables
let red;
let green;
let blue;

//creates global variable of circle
let circle;



/**Variation 3 Variables */
//input box variables, use game 1 input variables
let cNumber;//have different number input variable because of different input width and default value
let allInputs3 = [];//array with all input variables

//default input values, different approach for default value input than game 1, this is easier to edit
let colorRmin = 0;
let colorRmax = 255;
let colorGmin = 0;
let colorGmax = 255;
let colorBmin = 0;
let colorBmax = 255;
let colorAmin = 0;
let colorAmax = 255;
let circleNumber = 1000;

//array with all circles
let circles = [];



/**All Variations */
//initially you will be on menu screen
let state = "title";

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
        case "couleur cachee variation":
            game2Draw();
            break;
        case "bubble burster variation":
            game3Draw();
            break;
    }
}



/**
 * All Title Functions
 */
//don't need a different setup 

//draws project title screen, rotating title, circle frame, and str paragraphs
function titleDraw() {
    background(0);

    //center circle frame
    push();
    fill('white');
    stroke('red');
    strokeWeight(3);
    ellipse(cCircle.x, cCircle.y, cCircle.size);
    pop();

    //paragraph and description text
    titleText();

    //rotating title
    push();
    fill(255);
    textSize(30);
    drawRotatingTitle("DIGITAL DADA", cCircle.x, cCircle.y, 210, dataAngle);
    dataAngle += 0.01;
    pop();
}

//paragraph text in center circle
function titleText() {
    //resets all game states, for when you go back to title page
    game1 = false;
    game2 = false;
    game3 = false;

    noStroke();
    fill(255);//white text
    textAlign(CENTER, TOP);
    textLeading(18);//row spacing
    textWrap(WORD);
    fill('black');
    textSize(paragraphText.strs.size);

    //controls which paragraph is visible
    if (speechState === 0) {
        text(paragraphText.strs.para1, paragraphText.x, paragraphText.y - 25, 300)
    }
    else if (speechState === 1) {
        text(paragraphText.strs.para2, paragraphText.x + 150, paragraphText.y - 45)
    }
    else if (speechState === 2) {
        text(paragraphText.strs.para3, paragraphText.x + 150, paragraphText.y + 5)
    }
}

//rotating title
function drawRotatingTitle(str, cx, cy, radius, startAngle = 0, spacing = 18) {
    push();
    textAlign(CENTER, CENTER);

    let angle = startAngle;//where title starts

    for (let i = 0; i < str.length; i++) {
        //calculates position on circle for each letter
        let x = cx + radius * cos(angle);
        let y = cy + radius * sin(angle);

        push();
        translate(x, y);
        rotate(angle + HALF_PI); // half pi makes letters perpendicular
        text(str[i], 0, 0); //str[i] means each character in the string
        pop();

        angle += spacing / radius; // converts linear spacing into angular spacing need push and pop otherwise every character will move seperately
    }
    pop();
}



/**
 * All Menu Functions
 */

//don't need a different setup 

//draws all of menu screen
//  rotating circle on circle track, which moves based on left and right arrows
//  textgame variation titles, menu title, instruction text
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

    //title text
    push();
    textAlign(CENTER, TOP);
    textSize(30);
    text('CIRCLE MENU', width / 2, 50);
    pop();

    //game titles and text color change
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
    text('Couleur Cachee', 250, 360);//should have an accent but my font doesn't have accents 
    pop();

    push();
    if (150 < currentY && currentY < 300 && currentX < (width / 2)) {
        game3 = true;
        fill('red');
    }
    textSize(15);
    textAlign(LEFT, CENTER);
    text('Bubble Burster', 20, 230);
    pop();

    //menu instructions
    push();
    textSize(15);
    textAlign(CENTER, BOTTOM);
    text('rOll the circle <left <  and  > right > \nPress ENTER to cOmense your creative journey', 250, 445);
    pop();

    push();
    textSize(13);
    textAlign(LEFT, BOTTOM);
    fill('red');
    text('****', 62, 470);
    textAlign(RIGHT, BOTTOM);
    text('****', 438, 470);
    textAlign(CENTER, BOTTOM);
    fill('white');
    text('Press M at any time to return to this page', width / 2, 470);
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
    else if (keyIsDown(13) && game2 === true) {//13 is Enter key code, game 2 is true when you roll the ball and the Couleur Cachee game title is red (done with menuText function)
        //go to game2 title screen
        state = "couleur cachee variation";
        resetScreens();
        game2Setup();
    }
    else if (keyIsDown(13) && game3 === true) {//13 is Enter key code, game 3 is true when you roll the ball and the Bubble Burster game title is red (done with menuText function)
        //go to game3 title screen
        state = "bubble burster variation";
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
    //title
    if (state === "title") {
        if (speechState === 0) {
            speechState = 1;
        }
        else if (speechState === 1) {
            speechState = 2;
        }
        else if (speechState === 2) {
            state = "menu"
        }
    }


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
    if (state === "couleur cachee variation") {
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
    if (state === "bubble burster variation") {
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
            state === "couleur cachee variation" ||
            state === "bubble burster variation")
        && game === true
        && keyIsDown(13)//enter key code
    ) {
        cursor(ARROW);//included because in couleur cachee I change the cursor type

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
        else if (state === "couleur cachee variation") {
            hideInputs2();
        }
        else if (state === "bubble burster variation") {
            hideInputs3();
        }
        cursor(ARROW);//included because in couleur cachee change the cursor type
        state = "menu";
        resetScreens();
    }

}

//click t key to return to entire project title screen
function returnTitle() {
    if (keyIsDown(84)) {//84 code for T key
        if (state === "swallow circle variation") {
            speechState = 0;
            hideInputs1();
        }
        else if (state === "couleur cachee variation") {
            speechState = 0;
            hideInputs2();
        }
        else if (state === "bubble burster variation") {
            speechState = 0;
            hideInputs3();
        }
        cursor(ARROW);//included because in couleur cachee I change the cursor type
        state = "title";
        resetScreens();
    }

}



/**
 * Variation 1 functions
 *  */

//setup includes html user input boxes, hides these input boxes
function game1Setup() {
    dataInputs1();//create all inputs for data page
    hideInputs1();//hides all inputs boxes
}
//draws title screen with variation explanation
//draws data screen with input for circle color and number and size of circles
//draws game screen which draws circles based on pyramid formation, 
//  circles move based on mouse position and eventually overlap creating a swallowing effect,
//  up arrow and w key freeze circles' movement, down and s key unfreeze circles' movement
function game1Draw() {

    if (title === true) {
        background(0);
        enterButton();
        checkOverlap();
        titleScreenText1();//all title screen text
    }

    else if (data === true) {
        background(0);
        showInputs1();//show all input boxes
        dataScreenText1();//all data screen text
        enterButton();
        checkOverlap();
    }

    else if (game === true) {
        background(255);
        hideInputs1(); //hides input boxes, hide doesn't erase input values just hides visuals 
        moveCircles1(); //moves circles according to mouse position, eventual swallowing effect
        stopCircles(); //freezes and unfreezes circle movement
        returnData(); //click enter and return to data screen

        //draws all circles
        for (let c of circles1) {
            fill(c.r, c.g, c.b, c.a);
            ellipse(c.x, c.y, c.size);
        }
    }

    returnMenu();//click m key and return to menu screen
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
    text('SWALLOW CIRCLE', width / 2, 50);
    pop();

    //explanation
    push();
    textSize(12);
    textWrap(WORD);
    textAlign(LEFT, TOP);
    text('Swallow Circle explores how simple rules in code can generate unexpected visual forms. Initially, a set number of circles are generated in a pyramid formation. However, as the mouse moves across the screen the circles are drawn toward it, drifting from their original positions and creating new dynamic forms. Over time they overlap and cluster, producing a black-hole-like swallowing effect.\n\n The data screen allows you to adjust the number of circles, their size, and their color ranges, which changes how the circles interact and form new patterns. During the simulation, pressing the UP arrow or W key freezes the circles movement, allowing you to pause and study forms that capture your interest.Pressing the DOWN arrow or S key restarts the movement.This interaction between code, movement, and user input creates an experience where initial order transforms unpredictably into new structures. \nClick ENTER to begin the game \n\n When in game, press ENTER key to return to the data screen', 40, 75, (width - 60));
    pop();

};

//all data screen text
function dataScreenText1() {
    //universal qualities
    fill(255);
    textAlign(CENTER);

    //title
    push();
    textSize(30);
    text('CIRCLE DATA', width / 2, 60);
    pop();

    //attribute label
    push();
    textSize(20);
    text('RED', 100, 120);
    text('GREEN', 100, 190);
    text('BLUE', 100, 260);
    text('ALPHA', 100, 330);
    text('NUMBER', 100, 400);
    text('SIZE', 315, 400);
    pop();

    //value label
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

//all data input boxes, used in setup
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
    redMin = createInput(0);//0 default value
    redMin.size(60);

    redMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 146));

};
//red max input box
function redMaxInput1() {
    redMax = createInput(255);//255 default value
    redMax.size(60);

    redMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 146));

};
//green min input box
function greenMinInput1() {
    greenMin = createInput(0);//0 default value
    greenMin.size(60);

    greenMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 76));

};
//green max input box
function greenMaxInput1() {
    greenMax = createInput(255);//255 default value
    greenMax.size(60);

    greenMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 76));

};
//blue min input box
function blueMinInput1() {
    blueMin = createInput(0);//0 default value
    blueMin.size(60);

    blueMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 - 6));

};
//blue max input box
function blueMaxInput1() {
    blueMax = createInput(255);//255 default value
    blueMax.size(60);

    blueMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 - 6));

};
//alpha min input box
function alphaMinInput1() {
    alphaMin = createInput(0);//0 default value
    alphaMin.size(60);

    alphaMin.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 + 64));

};
//alpha max input box
function alphaMaxInput1() {
    alphaMax = createInput(255);//255 default value
    alphaMax.size(60);

    alphaMax.position(
        (windowWidth / 2 + 95),
        (windowHeight / 2 + 64));

};
//number input box
function numberInput1() {
    numberC = createInput(1000);//1000 default value
    numberC.size(60);

    numberC.position(
        (windowWidth / 2 - 55),
        (windowHeight / 2 + 134));

};
function sizeInput1() {
    sizeC = createInput(10);//10 default value
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
 * Variation 2 functions 
 */

//setup includes html user input boxes, hides these input boxes, circle color picker global variable
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
//draws title screen with variation explanation
//draws data screen with input for background color
//draws game screen with circle which changes color and position based on mouse position,
//  draws text which shows circle's currents rgba value
function game2Draw() {
    if (title === true) {
        background(0);
        titleScreenText2();//all title screen text
        enterButton();
        checkOverlap();
    }
    else if (data === true) {
        background(0);
        dataScreenText2()//all data screen text
        showInputs2();//shows all input boxes
        enterButton();
        checkOverlap();
    }
    else if (game === true) {
        background(Number(red.value()), Number(green.value()), Number(blue.value()));//background color based on input values from data page
        cursor(CROSS);//change cursor from default
        hideInputs2();//hides all input boxes

        //circle
        drawCircle();
        moveCircle();//circle moves based on mouse position
        colorChange();//color changes when circle/mouse moves

        //text
        //white padding at bottom so rgba values are always visible, not worth having a seperate function for such little code
        push();
        fill(255);
        rect(0, 425, width, height);
        pop();
        showText();//rgba values text

        returnData();//when push enter button on game screen return to data page
    }

    returnMenu();//click m key and return to menu screen
    returnTitle();//click t key and return to title screen
}


//all title screen text
function titleScreenText2() {
    //universal qualities
    fill(255);
    textAlign(CENTER, CENTER);

    //title
    push();
    textSize(30);
    textWrap(WORD);
    text('COULEUR CACHEE', width / 2, 50);//should be Couleur Cachée but my font doesn't have accents
    pop();

    //explanation
    push();
    textSize(12);
    textAlign(LEFT, TOP);
    text("Couleur Cachee takes its name from the French word cachee, meaning hidden. The work rests on the notion that compelling colors and palettes are often hidden by expectation and bias. Conventional color selection tools tend to reinforce these predispositions, favoring deliberate choice over discovery. \n \n In this interactive piece, color is revealed through movement. The circle color shifts with cursor movement, as if each gesture briefly illuminates hidden pockets of color space. The hues flow unpredictably, guiding you to wander through the spectrum until one unexpectedly resonates and SPEAKS to you. \n \n Once a color captures your attention and you wish to build a palette, the data screen lets you set the background to this hue while exploring others that complement or contrast it. Otherwise set the background to 255, 255, 255 for White or 0, 0, 0 for Black.\n\n Click ENTER to begin the game.", 40, 80, (width - 65));
    pop();
}
//all data screen text
function dataScreenText2() {
    //universal qualities
    fill(255);

    //title
    push();
    textAlign(CENTER, CENTER);
    textSize(30);
    text('CIRCLE DATA', width / 2, 50);
    pop();

    //attribute labels
    push();
    textAlign(CENTER);
    textSize(20);
    text('RED', 125, 125);
    text('GREEN', 125, 205);
    text('BLUE', 125, 285);
    pop();

    //instuction
    push();
    textSize(13);
    textAlign(CENTER, TOP);
    textWrap(WORD);
    text('Click ENTER to begin the game \n\nWhen in game, press ENTER key to return to the data screen', width / 2, 355);
    fill('red');
    textAlign(LEFT, TOP);;
    text('*************', 40, 355);
    textAlign(RIGHT, TOP);;
    text('*************', 460, 355);
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
    red = createInput(255);//255 default value
    red.size(200);

    red.position(
        (windowWidth / 2 - 95 + 40),
        (windowHeight / 2 - 130));

};
//green min input box
function greenInput() {
    green = createInput(255);//255 default value
    green.size(200);

    green.position(
        (windowWidth / 2 - 95 + 40),
        (windowHeight / 2 - 50));

};
//blue min input box
function blueInput() {
    blue = createInput(255);//255 default value
    blue.size(200);

    blue.position(
        (windowWidth / 2 - 95 + 40),
        (windowHeight / 2 + 30));

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
    fill(circle.colorStart.r, circle.colorStart.g, circle.colorStart.b, circle.colorStart.a);//random color and opacity
    ellipse(circle.x, circle.y, circle.size);//center of the screen, size 100
}
//circle moves based on mouse position, has constraints which created visual padding
function moveCircle() {

    circle.x = mouseX;
    circle.y = mouseY;

    circle.x = constrain(circle.x, circle.size / 2 + 30, width - circle.size / 2 - 30);
    circle.y = constrain(circle.y, circle.size / 2 + 30, height - circle.size / 2 - 105);
}
//when mouse/circle moves color of circle changes to new random color
function colorChange() {
    if (mouseX !== pmouseX || mouseY !== pmouseY) {
        circle.colorStart.r = random(0, 255);
        circle.colorStart.g = random(0, 255);
        circle.colorStart.b = random(0, 255);
        circle.colorStart.a = random(10, 255);
    }
}

//text showing rgba values of circle
function showText() {
    fill(0);
    textSize(20);
    textAlign(LEFT, CENTER);//this alignment prevents shaking when values change
    text('R: ' + int(circle.colorStart.r), width / 5 - 35, 450);//int converts into integer
    text('G: ' + int(circle.colorStart.g), width / 2 - 86, 450);//int converts into integer
    text('B: ' + int(circle.colorStart.b), width / 2 + 16, 450);//int converts into integer
    text('A: ' + int(circle.colorStart.a), width / 2 + 117, 450);//int converts into integer
}



/**
 * Variation 3 functions
*/

//setup includes html user input boxes, hides these input boxes
function game3Setup() {
    dataInputs3();//all inputs from data page
    hideInputs3();//hides all the inputs
}
//draws title screen with variation explanation
//draws data screen with input for circle color and number of circles
//draws game screen with specified number and color of circles, 
//  you can interact with the circles by clicking on undersirably positioned circles and they will change position and color
function game3Draw() {
    background(255);

    if (title === true) {
        background(0);
        titleScreenText3();//all title screen text
        enterButton();
        checkOverlap();
    }

    else if (data === true) {
        background(0);
        showInputs3();//show all data inputs
        dataScreenText3();//all data screen text
        enterButton();
        checkOverlap();
    }

    else if (game === true) {
        background(255);
        hideInputs3();//hide all data inputs

        //draws all of the circles
        for (let c of circles) {
            noStroke();
            fill(c.color.r, c.color.g, c.color.b, c.color.a);
            ellipse(c.x, c.y, c.size);
        }

        returnData();//click enter key and return to data screen
    }

    returnMenu();//click m key and return to menu screen
    returnTitle();//click t key and return to title screen
}



//all title screen text
function titleScreenText3() {
    //universal qualities
    fill(255);
    textAlign(CENTER, CENTER);

    //title
    push();
    textSize(30);
    text('BUBBLE BURSTER', width / 2, 50);
    pop();

    //explanation
    push();
    textSize(12);
    textWrap(WORD);
    textAlign(LEFT, TOP);
    text('Bubble Burster takes its name from the simple act of blowing bubbles and watching children try to burst them, a playful and seemingly random process.\n\n A field of circles appears, shaped by number of circles and the range of color values you set. Where the color ranges from 0 to 255, 255 being the highest possible value.\n\n If a circle seems off you can clicking on it, sending it to a new location with a fresh color. This allows the image to evolve through repeated bursts of change. Through repeated interaction and chance, unexpected patterns emerge.The final image is not predetermined but arises through exploration and play.\n\n Click ENTER to begin the game \n\n When in game, press ENTER to return to the data screen', 40, 85, (width - 65));
    pop();
}

//all text on circle data page
function dataScreenText3() {
    //universal qualities
    fill(255);
    textAlign(CENTER);

    //title
    push();
    textSize(30);
    text('CIRCLE DATA', width / 2, 60);
    pop();

    //attibute label
    push();
    textSize(20);
    text('RED', 100, 120);
    text('GREEN', 100, 190);
    text('BLUE', 100, 260);
    text('ALPHA', 100, 330);
    text('NUMBER', 100, 400);
    pop();

    //value label
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

    //array with all data inputs, streamlines hide and show
    allInputs3 = [redMin, redMax, greenMin, greenMax, blueMin, blueMax, alphaMin, alphaMax, cNumber];

}
//red min input box
//default values colorRmin, colorRmax, etc.
//different approach to game 1, more easily editable but more code heavy
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


// called in mouseClicked, created circles and pushes all circle data into an array
function initialCircles() {
    circles = []; //clears previous circles if you're going back and forth between data and game page

    //loop creating all the circle data
    for (let i = 0; i < Number(cNumber.value()); i++) {//cNumber is total number of circles created, pulled from data input page
        //pushes all the circle data into an array called circles
        circles.push({
            x: random(width),//any x on canvas
            y: random(height),//any y on canvas
            size: 40,//could create and input for this in later versions
            color: {
                r: random(Number(redMin.value()), Number(redMax.value())),
                g: random(Number(greenMin.value()), Number(greenMax.value())),
                b: random(Number(blueMin.value()), Number(blueMax.value())),
                a: random(Number(alphaMin.value()), Number(alphaMax.value())),
            }
        });
    }
}
//called in mouseClicked, in game screen, moves the circle to random position and changes color to new random value
function moveCircles(c) {
    //new random x and y position
    c.x = random(width);//any x on canvas
    c.y = random(height);//any y on canvas
    c.color = {//new color created from same value range provided on data page
        r: random(Number(redMin.value()), Number(redMax.value())),
        g: random(Number(greenMin.value()), Number(greenMax.value())),
        b: random(Number(blueMin.value()), Number(blueMax.value())),
        a: random(Number(alphaMin.value()), Number(alphaMax.value())),
    };
}