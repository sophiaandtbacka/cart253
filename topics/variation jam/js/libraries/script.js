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
    y: 400,
    width: 100,
    height: 50,
    text: "Enter",
    textFill: 255,
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
    // center canvas on screen


    // red input box
    redInput();


}

function draw() {
    background(255);

    if (game === false) {
        background(0);
        //redInput();
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
    if (enter === true && game === false) {
        colorRmin = Number(redMin.value()); //number converts text string into actual numbers 
        redMin.hide();


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


//input not working properly
function redInput() {
    redMin = createInput();
    redMin.size(100);

    redMin.position(
        (windowWidth / 2),
        (windowHeight / 2));

};

//draws the enter button on the title screen
function enterButton() {
    fill(0);
    noStroke();
    ellipse(button.x, button.y, button.width);
    push();
    fill(button.textFill);
    textAlign(CENTER, CENTER);
    textSize(button.textSize);
    textFont('Consolas');
    text('Enter', button.x, button.y);
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
    for (let i = 0; i < numCircles; i++) {
        //pushes all the circle data into an array called circles
        circles.push({
            x: random(width),
            y: random(height),
            size: 40,
            color: {
                r: random(colorRmin, 255),
                g: random(0, 100),
                b: random(100, 200),
                a: random(200, 255),
            }
        });
    }
}

//in game screen, moves the circle randomly and changes color randomly
function moveCircle(c) {
    c.x = random(width);
    c.y = random(height);
    c.color = {
        r: random(100, 200),
        g: random(100, 100),
        b: random(100, 200),
        a: random(200, 255),
    };
}



//not using right now
function centerCanvas() {
    const x = (windowWidth - width) / 2;
    const y = (windowHeight - height) / 2;
    center.position((windowWidth - width) / 2, (windowHeight - height) / 2);
};


