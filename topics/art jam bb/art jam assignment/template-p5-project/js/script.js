/**
 * Art Jam: the two halves of the multifacetted image of Sophia Maryse "Crystal" Andtbacka
 * Sophia Andtbacka
 * 
 * Self portrait about my bipolar disorder
 */

"use strict";


//cavas website size constants that I have named stage
const stage = {
    x: 600,
    y: 750,
    h: 600 / 2,
}


// The Mania and Depression pill button definitons
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


// Defines the rectangles that seperate the start screen into depression half and mania half
// Depression side
let rectD = {
    width: stage.h,
    //can change to undefined and other to color if want to change color
    fill: "#000000"
}
// Mania side
let rectM = {
    width: stage.h,
    //can change to undefined and other to color if want to change color
    fill: "#ffffff"
}


//sets the baseline for the split screen activity, 
let Dgrowing = false;
let Mgrowing = false;


//gem grid point constants
//line a point
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
//line d points
let pointd = {
    x: 300,
    y: (500 + 50),
}
//line e points
let pointe = {
    x: 300,
    y: 600,
}
//line f points
let pointf = {
    x: 300,
    y: 650,
}



//quad top
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


//top row triangles, left to right
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


//bottom row of triangle and quad
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

let button;
let startAudio;
let Dimg;
let Mimg;


function preload() {
    button = loadSound("assets/sounds/pill.mp3");
    startAudio = loadSound("assets/sounds/startAudio.mp3");
    Dimg = loadImage('assets/images/depressed.png');
    Mimg = loadImage('assets/images/mania.png');
}

let startPlayed = false;


//setup canvas size and background
function setup() {
    createCanvas(stage.x, stage.y);
    background("#aaaaaa");
}



//Draws Start Screen and Mania and Depression Pages with Gem Changes
function draw() {

    //Controls the expansion the depression and mania screen
    if (Dgrowing) {
        rectD.width += 2; // speed of  black growth per frame
        rectD.width = constrain(rectD.width, 0, stage.x);
        rectM.width = stage.x - rectD.width
        if (rectD.width >= stage.x) {
            Dgrowing = false; // stop at edge
            //here can put disappearing button like edge hit = true
        }
    }

    if (Mgrowing) {
        rectM.width += 2; // speed of  black growth per frame
        rectM.width = constrain(rectM.width, 0, stage.x);
        rectD.width = stage.x - rectM.width
        if (rectD.width >= stage.x) {
            Dgrowing = false; // stop at edge
            //here can put disappearing button like edge hit = true
        }
    }


    //draws the initial split screen depression side (black) left side and mania side (white) right side
    push();
    fill(rectD.fill);
    rect(0, 0, rectD.width, stage.y);
    pop();

    push();
    fill(rectM.fill);
    rect(rectD.width, 0, rectM.width, stage.y);
    pop();


    //controls when the Depression and Mania buttons are drawn, changes gem and gem interaction when depression and mania screens appear 
    if (rectD.width < stage.x && rectM.width < stage.x) {
        drawButton(button1, "D", 0, 0);
        drawButton(button2, "M", 255, 255);
        drawGem();
        image(Dimg, 0, 0, 200, 433);
        image(Mimg, 475, stage.y - 433, 125, 433);
        if (!startPlayed) {
            startAudio.play();
            startPlayed = true;
        }

    }
    else if (rectD.width === stage.x) {
        //makes it so that the gem points will be stagnant at the top and bottom
        pointa.x = 300;
        pointa.y = 100;
        pointf.x = 300;
        pointf.y = 650;
        pointe.x = 300;
        pointe.y = 600;
        pointd.x = 300;
        pointd.y = 550;
        drawGemD();
    }
    else if (rectM.width === stage.x) {
        //makes it so that the gem points will be stagnant at the top and bottom
        pointa.x = 300;
        pointa.y = 100;
        pointf.x = 300;
        pointf.y = 650;
        pointe.x = 300;
        pointe.y = 600;
        pointd.x = 300;
        pointd.y = 550;
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
    //resets gem points
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
    //refreshes the quad points, makes it so the top point is interactive
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

    //bottom interaction
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


    //fill for all shapes
    fill("#ffffff");

    //draws the top row quad, left to right
    quad(...quadA.quad);
    quad(...quadB.quad);
    quad(...quadC.quad);
    quad(...quadD.quad);


    //top row triangles, left to right
    triangle(...triangleA.triangle);
    triangle(...triangleB.triangle);
    triangle(...triangleC.triangle);
    triangle(...triangleD.triangle);
    triangle(...triangleE.triangle);
    triangle(...triangleF.triangle);
    triangle(...triangleG.triangle);
    triangle(...triangleH.triangle);


    //interaction not working
    //bottom row triangles and quad, left to right
    triangle(...triangleJ.triangle);
    quad(...quadE.quad);
    quad(...quadF.quad);
    triangle(...triangleK.triangle);

    triangle(...triangleL.triangle);
    quad(...quadG.quad);
    quad(...quadH.quad);
    triangle(...triangleM.triangle);

}
//Draws the Gem for the Mania Screen
function drawGemM() {
    //refreshes the quad points, makes it so the top point goes back to it's original position
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

    //bottom interaction
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

    //draw quad top row with pastel Mania fills
    fill(quadA.fills.m);
    quad(...quadA.quad);

    fill(quadB.fills.m);
    quad(...quadB.quad);

    fill(quadC.fills.m);
    quad(...quadC.quad);

    fill(quadD.fills.m);
    quad(...quadD.quad);

    //triangle top row with darker pastel Mania fills
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

    //not working
    //bottom row triangles and quad, left to right
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
function drawGemD() {
    //refreshes the quad points, makes it so the top point goes back to it's original position
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

    //bottom interaction
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

    //draw quad top row with pastel Mania fills
    fill(quadA.fills.d);
    quad(...quadA.quad);

    fill(quadB.fills.d);
    quad(...quadB.quad);

    fill(quadC.fills.d);
    quad(...quadC.quad);

    fill(quadD.fills.d);
    quad(...quadD.quad);

    //triangle top row with darker pastel Mania fills
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

    //not working
    //bottom row triangles and quad, left to right
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

//buttons
//might change to no stroke depending on whether I change split screen colors
//button 1 //left button 'D' (for depression)
// The button 1
function drawButton(button, label, textColor, color) {
    push();
    noStroke();
    fill(button.fill);
    ellipse(button.x, button.y, button.size);

    push();
    stroke(color);
    strokeWeight(7);
    line(button.x - button.size / 2, button.y, button.x - (button.size / 3.6), button.y);
    line(button.x + button.size / 2, button.y, button.x + (button.size / 3.5), button.y);
    pop();

    //text in buttons
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(textColor);
    textFont('Arial');
    text(label, button.x, button.y + 2);
    pop();
}


//button activation and split screen action
//Check if the mania or depression button is pressed and if so plays a sound and expands the relevant Depression or mania side
//used edited version of example code from dog button pippin example
function mousePressed(event) {
    // Check if the click was inside the button D
    const d1 = dist(mouseX, mouseY, button1.x, button1.y);
    const overlap1 = (d1 < button1.size / 2);

    if (overlap1) {
        button.play();
        button1.fill = button1.fills.pressed;
        Dgrowing = true;
        Mgrowing = false;
        console.log();

    }

    const d2 = dist(mouseX, mouseY, button2.x, button2.y);
    const overlap2 = (d2 < button2.size / 2);
    if (overlap2) {
        button.play();
        button2.fill = button2.fills.pressed;
        Mgrowing = true;
        Dgrowing = false;
    }
}
//Make the Mania and Depression buttons unpressed and changes their fill back to black or white
function mouseReleased() {
    button1.fill = button1.fills.unpressed;
    button2.fill = button2.fills.unpressed;

}



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
