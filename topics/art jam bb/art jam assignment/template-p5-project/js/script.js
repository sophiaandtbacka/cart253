/**
 * Bipolar Brilliancy an Art Jam: the two halves of the multifacetted image of Sophia Maryse "Crystal" Andtbacka
 * Sophia Andtbacka
 * 
/**
 * Description: 
 * 
 * An interactive art piece and self-portrait exploring my bipolar disorder.
 * The user begins on a sterile, clinical start screen where a monotone lecture plays —
 * setting a mood of detached malaise.
 * At the center, a clear white-outlined gem represents the “clinical” simplification
 * of a complex inner experience.
 * The screen splits like a playing card — a black side depicting a drawn figure of depression,
 * and a white side showing an uplifted figure of mania.
 * Moving the cursor over the gem prompts an interaction: the user is urged to take
 * either the “depressive pill” or the “manic pill.”
 * Upon clicking a pill, a medicine bottle rattling sound plays as the scene transitions slowly
 * into either the depressive or manic screens.
 * Each of these states is visualized through the new color grading of the gem facets,
 * representing the multiple layers and versions within depressive and manic experiences.
 */

/** Controls: 
    * - mouse over certain area causes gem point interaction
    * - click to change screens
       
 * Uses:
 * p5.js
    * https://p5js.org
 */

"use strict";


//cavas size constants that I have named stage
const stage = {
    x: 600,
    y: 750,
    h: 600 / 2,
}


// Defines the rectangles that seperate the start screen into depression half and mania half
// Depression side, black
let rectD = {
    width: stage.h,
    //can change to undefined and other to color if want to change color
    fill: "#000000"
}
// Mania side, white
let rectM = {
    width: stage.h,
    //can change to undefined and other to color if want to change color
    fill: "#ffffff"
}


//sets the start screen as a stagnant split screen  
let Dgrowing = false;
let Mgrowing = false;


//gem grid point constants that build the gem facets, defined a-f depending on the y values from top to bottom and b1 and so on based on x value from left to right
//point a, top gem poin
let pointa = {
    x: 300,
    y: 100,
}
//line b points
const pointb = {
    b1: {
        x: (150 + ((125 * 150) / 400)),
        y: (500 - 125),
    },

    b2: {
        x: (225 + ((125 * 75) / 400)),
        y: (500 - 125),
    },

    b3: {
        x: 300,
        y: (500 - 125),
    },

    b4: {
        x: 375 - ((125 * 75) / 400),
        y: (500 - 125),
    },

    b5: {
        x: (450 - ((125 * 150) / 400)),
        y: (500 - 125),
    }
}
//line c points
const pointc = {
    c1: {
        x: 150,
        y: 500,
    },

    c2: {
        x: (150 + 37.5),
        y: 500,
    },

    c3: {
        x: 225,
        y: 500,
    },

    c4: {
        x: (225 + 37.5),
        y: 500,
    },

    //midpoint
    c5: {
        x: 300,
        y: 500,
    },

    c6: {
        x: (300 + 37.5),
        y: 500,
    },

    c7: {
        x: 375,
        y: 500,
    },

    c8: {
        x: (375 + 37.5),
        y: 500,
    },

    c9: {
        x: 450,
        y: 500,
    },
}
//line d point
let pointd = {
    x: 300,
    y: (500 + 50),
}
//line e point
let pointe = {
    x: 300,
    y: 600,
}
//point f, bottom gem point
let pointf = {
    x: 300,
    y: 650,
}


//top four gem facets, only quads, ordered left to right
let quadA = {
    quad: [pointb.b1.x, pointb.b1.y, pointc.c2.x, pointc.c2.y, pointb.b2.x, pointb.b2.y, pointa.x, pointa.y],
    fill: "#ffffff",
    fills: {
        m: "#FBEDC4",
        d: "#9F6415"
    }
}

let quadB = {
    quad: [pointb.b2.x, pointb.b2.y, pointc.c4.x, pointc.c4.y, pointb.b3.x, pointb.b3.y, pointa.x, pointa.y],
    fill: "#ffffff",
    fills: {
        m: "#FBE8DE",
        d: "#6B1125"
    }
}

let quadC = {
    quad: [pointb.b3.x, pointb.b3.y, pointc.c6.x, pointc.c6.y, pointb.b4.x, pointb.b4.y, pointa.x, pointa.y],
    fill: "#ffffff",
    fills: {
        m: "#EDF0BB",
        d: "#79653F"
    }
}

let quadD = {
    quad: [pointb.b4.x, pointb.b4.y, pointc.c8.x, pointc.c8.y, pointb.b5.x, pointb.b5.y, pointa.x, pointa.y],
    fill: "#ffffff",
    fills: {
        m: "#E2E8F4",
        d: "#122561"
    }
}


//middle row of gem facets, only triangles, ordered left to right
let triangleA = {
    triangle: [pointc.c1.x, pointc.c1.y, pointb.b1.x, pointb.b1.y, pointc.c2.x, pointc.c2.y],
    fill: "#ffffff",
    fills: {
        m: "#EBBA20",
        d: "#65441A"
    }
}

let triangleB = {
    triangle: [pointc.c2.x, pointc.c2.y, pointb.b2.x, pointb.b2.y, pointc.c3.x, pointc.c3.y],
    fill: "#ffffff",
    fills: {
        m: "#EBBA20",
        d: "#65441A"
    }
}

let triangleC = {
    triangle: [pointc.c3.x, pointc.c3.y, pointb.b2.x, pointb.b2.y, pointc.c4.x, pointc.c4.y],
    fill: "#ffffff",
    fills: {
        m: "#ECBCA5",
        d: "#3E1017"
    }
}

let triangleD = {
    triangle: [pointc.c4.x, pointc.c4.y, pointb.b3.x, pointb.b3.y, pointc.c5.x, pointc.c5.y],
    fill: "#ffffff",
    fills: {
        m: "#ECBCA5",
        d: "#3E1017"
    }
}

let triangleE = {
    triangle: [pointc.c5.x, pointc.c5.y, pointb.b3.x, pointb.b3.y, pointc.c6.x, pointc.c6.y],
    fill: "#ffffff",
    fills: {
        m: "#DADE06",
        d: "#433A25"
    }
}

let triangleF = {
    triangle: [pointc.c6.x, pointc.c6.y, pointb.b4.x, pointb.b4.y, pointc.c7.x, pointc.c7.y],
    fill: "#ffffff",
    fills: {
        m: "#DADE06",
        d: "#433A25"
    }
}

let triangleG = {
    triangle: [pointc.c7.x, pointc.c7.y, pointb.b4.x, pointb.b4.y, pointc.c8.x, pointc.c8.y],
    fill: "#ffffff",
    fills: {
        m: "#BFD0EE",
        d: "#071740"
    }
}

let triangleH = {
    triangle: [pointc.c8.x, pointc.c8.y, pointb.b5.x, pointb.b5.y, pointc.c9.x, pointc.c9.y],
    fill: "#ffffff",
    fills: {
        m: "#BFD0EE",
        d: "#071740"
    }
}


//bottom row of gem facets, triangles and quads, ordered left to right 
let triangleJ = {
    triangle: [pointc.c1.x, pointc.c1.y, pointc.c2.x, pointc.c2.y, pointf.x, pointf.y],
    fill: "#ffffff",
    fills: {
        m: "#EBBA20",
        d: "#65441A"
    }
}

let quadE = {
    quad: [pointc.c2.x, pointc.c2.y, pointc.c3.x, pointc.c3.y, pointe.x, pointe.y, pointf.x, pointf.y],
    fill: "#ffffff",
    fills: {
        m: "#EBBA20",
        d: "#65441A"
    }
}

let quadF = {
    quad: [pointc.c3.x, pointc.c3.y, pointc.c4.x, pointc.c4.y, pointd.x, pointd.y, pointe.x, pointe.y],
    fill: "#ffffff",
    fills: {
        m: "#ECBCA5",
        d: "#3E1017"
    }
}

let triangleK = {
    triangle: [pointc.c4.x, pointc.c4.y, pointd.x, pointd.y, pointc.c5.x, pointc.c5.y],
    fill: "#ffffff",
    fills: {
        m: "#ECBCA5",
        d: "#3E1017"
    }
}

let triangleL = {
    triangle: [pointc.c5.x, pointc.c5.y, pointc.c6.x, pointc.c6.y, pointd.x, pointd.y],
    fill: "#ffffff",
    fills: {
        m: "#DADE06",
        d: "#433A25"
    }
}

let quadG = {
    quad: [pointc.c6.x, pointc.c6.y, pointc.c7.x, pointc.c7.y, pointe.x, pointe.y, pointd.x, pointd.y],
    fill: "#ffffff",
    fills: {
        m: "#DADE06",
        d: "#433A25"
    }
}

let quadH = {
    quad: [pointc.c7.x, pointc.c7.y, pointc.c8.x, pointc.c8.y, pointf.x, pointf.y, pointe.x, pointe.y],
    fill: "#ffffff",
    fills: {
        m: "#BFD0EE",
        d: "#071740"
    }
}

let triangleM = {
    triangle: [pointc.c8.x, pointc.c8.y, pointc.c9.x, pointc.c9.y, pointf.x, pointf.y],
    fill: "#ffffff",
    fills: {
        m: "#BFD0EE",
        d: "#071740"
    }
}


// The Mania and Depression pill button definitons
//Depression button
const button1 = {
    // Position and size
    x: 100,
    y: 650,
    size: 50,

    // Colours
    fill: "#ffffffff",
    fills: {
        unpressed: "#ffffffff",
        pressed: "#9b9b9bff"
    },
    // The sound effect to play, we'll load it in preload below
    soundEffect: undefined
}
//Mania button
const button2 = {
    // Position and size
    x: 500,
    y: 100,
    size: 50,

    // Colours
    fill: "#000000",
    fills: {
        unpressed: "#000000",
        pressed: "#3e3d3dff"
    },
    // The sound effect to play, we'll load it in preload below
    soundEffect: undefined
}


//define sounds and images used
let button;
let startAudio;
let Dimg;
let Mimg;


function preload() {
    //pill sound effect
    button = loadSound("assets/sounds/pill.mp3");
    //clinical lecture recording
    startAudio = loadSound("assets/sounds/startAudio.mp3");

    //depression figure image
    Dimg = loadImage('assets/images/depressed.png');
    //manic figure image
    Mimg = loadImage('assets/images/mania.png');
}

//makes it so Start screen audio will only play when the player is on the right screen
let startPlayed = false;



//sets up canvas size and background color
function setup() {
    createCanvas(stage.x, stage.y);
    background("#aaaaaa");
}



//Draws Start Screen with Mania and Depression Split Screen, 
// Controls button interaction 
// Controls the Transition to the Mania and Depression Screens 
// Draws Mania and Depression Screens with the Gem Color Changes
function draw() {
    //draws the initial split screen depression side (black) left side and mania side (white) right side
    push();
    fill(rectD.fill);
    rect(0, 0, rectD.width, stage.y);
    pop();

    push();
    fill(rectM.fill);
    rect(rectD.width, 0, rectM.width, stage.y);
    pop();

    //Controls the transition to the depression and mania screens, black half or white half of screen will expand until it fills the entire canvas
    //Depression half growth
    if (Dgrowing) {
        rectD.width += 2; // speed of black growth per frame
        rectD.width = constrain(rectD.width, 0, stage.x); //limits the expansion
        rectM.width = stage.x - rectD.width //changes the mania split screen to match the depresion split screen expansion
        if (rectD.width >= stage.x) {
            Dgrowing = false; // stops the growing at the edge of the canvas
        }
    }
    //Mania half growth
    if (Mgrowing) {
        rectM.width += 2; // speed of  black growth per frame
        rectM.width = constrain(rectM.width, 0, stage.x); //limits the expansion
        rectD.width = stage.x - rectM.width //changes the depression split screen to match the mania split screen expansion
        if (rectD.width >= stage.x) {
            Dgrowing = false; // stops the growing at the edge of the canvas
        }
    }


    //controls when the Depression and Mania buttons are drawn, 
    //draws gem and changes gem colors and interaction based on if the player is on start, depression, or mania screen
    if (rectD.width < stage.x && rectM.width < stage.x) { //start screen
        drawButton(button1, "D", 0, 0);//depression pill button
        drawButton(button2, "M", 255, 255);//mania pill button
        drawGem();//interactive and colorless gem
        image(Dimg, 0, 0, 200, 433);//depressed figure
        image(Mimg, 475, stage.y - 433, 125, 433);//manic figure
        if (!startPlayed) {//plays start screen audio once
            startAudio.play();
            startPlayed = true;
        }

    }
    else if (rectD.width === stage.x) {//depression screen
        //makes it so that the gem points will be stagnant at the top and bottom
        pointa.x = 300;
        pointa.y = 100;
        pointf.x = 300;
        pointf.y = 650;
        pointe.x = 300;
        pointe.y = 600;
        pointd.x = 300;
        pointd.y = 550;
        //draws gem with depression color grading and no interaction
        drawGemD();
    }
    else if (rectM.width === stage.x) {//mania screen
        //makes it so that the gem points will be stagnant at the top and bottom
        pointa.x = 300;
        pointa.y = 100;
        pointf.x = 300;
        pointf.y = 650;
        pointe.x = 300;
        pointe.y = 600;
        pointd.x = 300;
        pointd.y = 550;
        //draws gem with mania color grading and no interaction
        drawGemM();
    }

    //adds interaction to the gem points to push the player to push the Mania button or Depression button
    //changes top gem point
    if (50 < mouseY && mouseY < 375 && mouseX > 300 && mouseX < 600) {
        pointa.x = mouseX;
        pointa.y = mouseY;
        pointf.x = 300;
        pointf.y = 650;
    }
    //changes bottom gem point
    else if (mouseY < 725 && mouseY > 625 && mouseX > 0 && mouseX < 300) {
        pointf.x = mouseX;
        pointf.y = mouseY;
        pointe.x = pointf.x + 50;
        pointe.y = pointf.y - 50;
        pointd.x = pointf.x + 100;
        pointd.y = pointf.y - 100;
    }
    //resets gem points to original position when the mouse is not in the desired area of the screen
    else if (mouseY > 725 || 50 > mouseY || mouseY > 375 || mouseX < 300 || mouseX > 600) {
        pointa.x = 300;
        pointa.y = 100;
        pointf.x = 300;
        pointf.y = 650;
        pointe.x = 300;
        pointe.y = 600;
        pointd.x = 300;
        pointd.y = 550;
    }
}



//Gem States
//Draws the Gem for the start screen
function drawGem() {
    //refreshes the top quad facet points, makes it so the top point is interactive,  organized left to right
    quadA.quad = [
        pointb.b1.x, pointb.b1.y,
        pointc.c2.x, pointc.c2.y,
        pointb.b2.x, pointb.b2.y,
        pointa.x, pointa.y];

    quadB.quad = [
        pointb.b2.x, pointb.b2.y,
        pointc.c4.x, pointc.c4.y,
        pointb.b3.x, pointb.b3.y,
        pointa.x, pointa.y];

    quadC.quad = [
        pointb.b3.x, pointb.b3.y,
        pointc.c6.x, pointc.c6.y,
        pointb.b4.x, pointb.b4.y,
        pointa.x, pointa.y];

    quadD.quad = [
        pointb.b4.x, pointb.b4.y,
        pointc.c8.x, pointc.c8.y,
        pointb.b5.x, pointb.b5.y,
        pointa.x, pointa.y];

    //refreshes the bottom triangle and quad facet points, makes it so the bottom point is interactive,  organized left to right
    triangleJ.triangle = [
        pointc.c1.x, pointc.c1.y,
        pointc.c2.x, pointc.c2.y,
        pointf.x, pointf.y];

    quadE.quad = [
        pointc.c2.x, pointc.c2.y,
        pointc.c3.x, pointc.c3.y,
        pointe.x, pointe.y,
        pointf.x, pointf.y];

    quadF.quad = [
        pointc.c3.x, pointc.c3.y,
        pointc.c4.x, pointc.c4.y,
        pointd.x, pointd.y,
        pointe.x, pointe.y];

    triangleK.triangle = [
        pointc.c4.x, pointc.c4.y,
        pointd.x, pointd.y,
        pointc.c5.x, pointc.c5.y];

    triangleL.triangle = [
        pointc.c5.x, pointc.c5.y,
        pointc.c6.x, pointc.c6.y,
        pointd.x, pointd.y];

    quadG.quad = [
        pointc.c6.x, pointc.c6.y,
        pointc.c7.x, pointc.c7.y,
        pointe.x, pointe.y,
        pointd.x, pointd.y];

    quadH.quad = [
        pointc.c7.x, pointc.c7.y,
        pointc.c8.x, pointc.c8.y,
        pointf.x, pointf.y,
        pointe.x, pointe.y];

    triangleM.triangle = [
        pointc.c8.x, pointc.c8.y,
        pointc.c9.x, pointc.c9.y,
        pointf.x, pointf.y];


    //makes all the gem facets white
    fill("#ffffff");

    //draws the top row quad facets, left to right
    quad(...quadA.quad);
    quad(...quadB.quad);
    quad(...quadC.quad);
    quad(...quadD.quad);

    //draws middle row triangle facets, left to right
    triangle(...triangleA.triangle);
    triangle(...triangleB.triangle);
    triangle(...triangleC.triangle);
    triangle(...triangleD.triangle);
    triangle(...triangleE.triangle);
    triangle(...triangleF.triangle);
    triangle(...triangleG.triangle);
    triangle(...triangleH.triangle);

    //draws the bottom row triangles and quad facets, left to right
    triangle(...triangleJ.triangle);
    quad(...quadE.quad);
    quad(...quadF.quad);
    triangle(...triangleK.triangle);
    triangle(...triangleL.triangle);
    quad(...quadG.quad);
    quad(...quadH.quad);
    triangle(...triangleM.triangle);
}
//Draws the Gem for the Depression Screen
function drawGemD() {
    //refreshes the top quad facet points, makes it so the top point goes back to it's original stagnant position,  organized left to right
    quadA.quad = [
        pointb.b1.x, pointb.b1.y,
        pointc.c2.x, pointc.c2.y,
        pointb.b2.x, pointb.b2.y,
        pointa.x, pointa.y];

    quadB.quad = [
        pointb.b2.x, pointb.b2.y,
        pointc.c4.x, pointc.c4.y,
        pointb.b3.x, pointb.b3.y,
        pointa.x, pointa.y];

    quadC.quad = [
        pointb.b3.x, pointb.b3.y,
        pointc.c6.x, pointc.c6.y,
        pointb.b4.x, pointb.b4.y,
        pointa.x, pointa.y];

    quadD.quad = [
        pointb.b4.x, pointb.b4.y,
        pointc.c8.x, pointc.c8.y,
        pointb.b5.x, pointb.b5.y,
        pointa.x, pointa.y];

    //refreshes the bottom quad and triange facet points, makes it so the bottom point goes back to it's original stagnant position,  organized left to right
    triangleJ.triangle = [
        pointc.c1.x, pointc.c1.y,
        pointc.c2.x, pointc.c2.y,
        pointf.x, pointf.y];

    quadE.quad = [
        pointc.c2.x, pointc.c2.y,
        pointc.c3.x, pointc.c3.y,
        pointe.x, pointe.y,
        pointf.x, pointf.y];

    quadF.quad = [
        pointc.c3.x, pointc.c3.y,
        pointc.c4.x, pointc.c4.y,
        pointd.x, pointd.y,
        pointe.x, pointe.y];

    triangleK.triangle = [
        pointc.c4.x, pointc.c4.y,
        pointd.x, pointd.y,
        pointc.c5.x, pointc.c5.y];

    triangleL.triangle = [
        pointc.c5.x, pointc.c5.y,
        pointc.c6.x, pointc.c6.y,
        pointd.x, pointd.y];

    quadG.quad = [
        pointc.c6.x, pointc.c6.y,
        pointc.c7.x, pointc.c7.y,
        pointe.x, pointe.y,
        pointd.x, pointd.y];

    quadH.quad = [
        pointc.c7.x, pointc.c7.y,
        pointc.c8.x, pointc.c8.y,
        pointf.x, pointf.y,
        pointe.x, pointe.y];

    triangleM.triangle = [
        pointc.c8.x, pointc.c8.y,
        pointc.c9.x, pointc.c9.y,
        pointf.x, pointf.y];

    //draws the top row quad facets with dark depression color fills, organized left to right
    fill(quadA.fills.d);
    quad(...quadA.quad);

    fill(quadB.fills.d);
    quad(...quadB.quad);

    fill(quadC.fills.d);
    quad(...quadC.quad);

    fill(quadD.fills.d);
    quad(...quadD.quad);

    //draws the middle row triangle facets with darker depression color fills, organized left to right
    fill(triangleA.fills.d);
    triangle(...triangleA.triangle);

    fill(triangleB.fills.d);
    triangle(...triangleB.triangle);

    fill(triangleC.fills.d);
    triangle(...triangleC.triangle);

    fill(triangleD.fills.d);
    triangle(...triangleD.triangle);

    fill(triangleE.fills.d);
    triangle(...triangleE.triangle);

    fill(triangleF.fills.d);
    triangle(...triangleF.triangle);

    fill(triangleG.fills.d);
    triangle(...triangleG.triangle);

    fill(triangleH.fills.d);
    triangle(...triangleH.triangle);

    //draws the bottom row quad and triangle facets with darker depression color fills, organized left to right
    fill(triangleJ.fills.d);
    triangle(...triangleJ.triangle);

    fill(quadE.fills.d);
    quad(...quadE.quad);

    fill(quadF.fills.d);
    quad(...quadF.quad);

    fill(triangleK.fills.d);
    triangle(...triangleK.triangle);

    fill(triangleL.fills.d);
    triangle(...triangleL.triangle);

    fill(quadG.fills.d);
    quad(...quadG.quad);

    fill(quadH.fills.d);
    quad(...quadH.quad);

    fill(triangleM.fills.d);
    triangle(...triangleM.triangle);
}
//Draws the Gem for the Mania Screen
function drawGemM() {
    //refreshes the top quad facet points, makes it so the top point goes back to it's original stagnant position,  organized left to right
    quadA.quad = [
        pointb.b1.x, pointb.b1.y,
        pointc.c2.x, pointc.c2.y,
        pointb.b2.x, pointb.b2.y,
        pointa.x, pointa.y
    ];

    quadB.quad = [
        pointb.b2.x, pointb.b2.y,
        pointc.c4.x, pointc.c4.y,
        pointb.b3.x, pointb.b3.y,
        pointa.x, pointa.y];

    quadC.quad = [
        pointb.b3.x, pointb.b3.y,
        pointc.c6.x, pointc.c6.y,
        pointb.b4.x, pointb.b4.y,
        pointa.x, pointa.y];

    quadD.quad = [
        pointb.b4.x, pointb.b4.y,
        pointc.c8.x, pointc.c8.y,
        pointb.b5.x, pointb.b5.y,
        pointa.x, pointa.y];

    //refreshes the bottom quad and triange facet points, makes it so the bottom point goes back to it's original stagnant position,  organized left to right
    triangleJ.triangle = [
        pointc.c1.x, pointc.c1.y,
        pointc.c2.x, pointc.c2.y,
        pointf.x, pointf.y];

    quadE.quad = [
        pointc.c2.x, pointc.c2.y,
        pointc.c3.x, pointc.c3.y,
        pointe.x, pointe.y,
        pointf.x, pointf.y];

    quadF.quad = [
        pointc.c3.x, pointc.c3.y,
        pointc.c4.x, pointc.c4.y,
        pointd.x, pointd.y,
        pointe.x, pointe.y];

    triangleK.triangle = [
        pointc.c4.x, pointc.c4.y,
        pointd.x, pointd.y,
        pointc.c5.x, pointc.c5.y];

    triangleL.triangle = [
        pointc.c5.x, pointc.c5.y,
        pointc.c6.x, pointc.c6.y,
        pointd.x, pointd.y];

    quadG.quad = [
        pointc.c6.x, pointc.c6.y,
        pointc.c7.x, pointc.c7.y,
        pointe.x, pointe.y,
        pointd.x, pointd.y];

    quadH.quad = [
        pointc.c7.x, pointc.c7.y,
        pointc.c8.x, pointc.c8.y,
        pointf.x, pointf.y,
        pointe.x, pointe.y];

    triangleM.triangle = [
        pointc.c8.x, pointc.c8.y,
        pointc.c9.x, pointc.c9.y,
        pointf.x, pointf.y];

    //draws the top row quad facets with pastel mania color fills, organized left to right
    fill(quadA.fills.m);
    quad(...quadA.quad);

    fill(quadB.fills.m);
    quad(...quadB.quad);

    fill(quadC.fills.m);
    quad(...quadC.quad);

    fill(quadD.fills.m);
    quad(...quadD.quad);

    //draws the middle row triangle facets with darker mania color fills, organized left to right
    fill(triangleA.fills.m);
    triangle(...triangleA.triangle);

    fill(triangleB.fills.m);
    triangle(...triangleB.triangle);

    fill(triangleC.fills.m);
    triangle(...triangleC.triangle);

    fill(triangleD.fills.m);
    triangle(...triangleD.triangle);

    fill(triangleE.fills.m);
    triangle(...triangleE.triangle);

    fill(triangleF.fills.m);
    triangle(...triangleF.triangle);

    fill(triangleG.fills.m);
    triangle(...triangleG.triangle);

    fill(triangleH.fills.m);
    triangle(...triangleH.triangle);

    //draws the bottom row quad and triangle facets with darker mania color fills, organized left to right
    fill(triangleJ.fills.m);
    triangle(...triangleJ.triangle);

    fill(quadE.fills.m);
    quad(...quadE.quad);

    fill(quadF.fills.m);
    quad(...quadF.quad);

    fill(triangleK.fills.m);
    triangle(...triangleK.triangle);

    fill(triangleL.fills.m);
    triangle(...triangleL.triangle);

    fill(quadG.fills.m);
    quad(...quadG.quad);

    fill(quadH.fills.m);
    quad(...quadH.quad);

    fill(triangleM.fills.m);
    triangle(...triangleM.triangle);


}

//Pill M and D buttons for start screen
function drawButton(button, label, textColor, color) {
    //pill shape
    push();
    noStroke();
    fill(button.fill);
    ellipse(button.x, button.y, button.size);

    //pill break line
    push();
    stroke(color);
    strokeWeight(7);
    line(button.x - button.size / 2, button.y, button.x - (button.size / 3.6), button.y);
    line(button.x + button.size / 2, button.y, button.x + (button.size / 3.5), button.y);
    pop();

    //text in in pill buttons
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(textColor);
    textFont('Arial');
    text(label, button.x, button.y + 2);
    pop();
}


//button activation and split screen action
//Check if the mania or depression button is pressed and if so plays a sound and expands the relevant Depression or Mania side
//used edited version of example code from dog button pippin example
function mousePressed(event) {
    // Check if the click was inside the D button 
    const d1 = dist(mouseX, mouseY, button1.x, button1.y);
    const overlap1 = (d1 < button1.size / 2);
    if (overlap1) {
        button.play();
        button1.fill = button1.fills.pressed;
        Dgrowing = true;
        Mgrowing = false;
        console.log();

    }

    // Check if the click was inside the M button 
    const d2 = dist(mouseX, mouseY, button2.x, button2.y);
    const overlap2 = (d2 < button2.size / 2);
    if (overlap2) {
        button.play();
        button2.fill = button2.fills.pressed;
        Mgrowing = true;
        Dgrowing = false;
    }
}
//Makes the Mania and Depression pill buttons unpressed and changes their fill back to black or white
function mouseReleased() {
    //depression button
    button1.fill = button1.fills.unpressed;
    //mania button
    button2.fill = button2.fills.unpressed;

}


//commented out code for larger facets of gem that could be use in further development of this project

//top tri
// triangle(150, 500, 300, 100, 450, 500);
//bottom tri
//triangle(150, 500, 300, 650, 450, 500);

//top row inner
//triangle(150, 500, 300, 100, 225, 500);
//triangle(225, 500, 300, 100, 300, 500);
//triangle(300, 500, 300, 100, 375, 500);
//triangle(375, 500, 300, 100, 450, 500);
//bottom row inner
//triangle(150, 500, 300, 650, 225, 500);
//triangle(225, 500, 300, 650, 300, 500);
//triangle(300, 500, 300, 650, 375, 500);
//triangle(375, 500, 300, 650, 450, 500);

//bottom row 2nd layer inner right
//triangle(300, 500, 300, (500 + 50), (300 + 37.5), 500);
//triangle((300 + 37.5), 500, 375 - (), (500 + 50), (300 + 37.5), 500);
