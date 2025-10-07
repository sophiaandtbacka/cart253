/**
 * Art Jam: the multifacetted image of Sophia Maryse "Diamond" Andtbacka
 * Sophia Andtbacka
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



//cavas website size constants that I have named stage
const stage = {
    x: 600,
    y: 750,
    h: 600 / 2,
}

// The buttons
const button1 = {
    // Position and size
    x: 100,
    y: 100,
    // Colours
    size: 50,
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
    // Colours
    size: 50,
    fill: "#000000",
    fills: {
        unpressed: "#000000",
        pressed: "#3e3d3dff"
    },
    // The sound effect to play, we'll load it in preload below
    soundEffect: undefined
}



//Load the sound effect
function preload() {
    button1.soundEffect = loadSound("assets/sounds/bark.wav");
}


//setup
function setup() {
    createCanvas(stage.x, stage.y);
    background("#aaaaaa");
}


//Draws Gem
function draw() {

    const rectB = {
        unchange: stage.x / 2,
        changed: undefined,

    }

    const rectL = {
        unchange: stage.x / 2,
        changed: undefined,

    }


    //constants for split screen
    //one has hex value the other rgb
    const darkl = {
        fill: "#000000"
    }

    const lightr = {
        fill: {
            r: 255,
            g: 255,
            b: 255,
        }
    }

    //black left, white right 
    function splitScreen() {
        push();
        fill(darkl.fill);
        rect(0, 0, rectB.unchange, stage.y);
        pop();



        push();
        fill(lightr.fill.r, lightr.fill.g, lightr.fill.b);
        rect(stage.h, 0, rectL.unchange, stage.y);
        pop();
    }

    splitScreen()


    //gem grid constants
    //line a
    const pointa = {
        x: 300,
        y: 100,
    }

    //line b
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

    //line c
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

    //line d
    const pointd = {
        x: 300,
        y: (500 + 50),
    }

    //line e
    const pointe = {
        x: 300,
        y: 600,
    }

    //line f
    const pointf = {
        x: 300,
        y: 650,
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

    fill("#ffffff");

    //quad top
    quad(pointb.b1.x, pointb.b1.y, pointc.c2.x, pointc.c2.y, pointb.b2.x, pointb.b2.y, pointa.x, pointa.y);
    quad(pointb.b2.x, pointb.b2.y, pointc.c4.x, pointc.c4.y, pointb.b3.x, pointb.b3.y, pointa.x, pointa.y);
    quad(pointb.b3.x, pointb.b3.y, pointc.c6.x, pointc.c6.y, pointb.b4.x, pointb.b4.y, pointa.x, pointa.y);
    quad(pointb.b4.x, pointb.b4.y, pointc.c8.x, pointc.c8.y, pointb.b5.x, pointb.b5.y, pointa.x, pointa.y);

    //top row triangles, left to right
    triangle(pointc.c1.x, pointc.c1.y, pointb.b1.x, pointb.b1.y, pointc.c2.x, pointc.c2.y);
    triangle(pointc.c2.x, pointc.c2.y, pointb.b2.x, pointb.b2.y, pointc.c3.x, pointc.c3.y);
    triangle(pointc.c3.x, pointc.c3.y, pointb.b2.x, pointb.b2.y, pointc.c4.x, pointc.c4.y);
    triangle(pointc.c4.x, pointc.c4.y, pointb.b3.x, pointb.b3.y, pointc.c5.x, pointc.c5.y);
    triangle(pointc.c5.x, pointc.c5.y, pointb.b3.x, pointb.b3.y, pointc.c6.x, pointc.c6.y);
    triangle(pointc.c6.x, pointc.c6.y, pointb.b4.x, pointb.b4.y, pointc.c7.x, pointc.c7.y);
    triangle(pointc.c7.x, pointc.c7.y, pointb.b4.x, pointb.b4.y, pointc.c8.x, pointc.c8.y);
    triangle(pointc.c8.x, pointc.c8.y, pointb.b5.x, pointb.b5.y, pointc.c9.x, pointc.c9.y);

    //bottom row triangles and quad, left to right
    triangle(pointc.c1.x, pointc.c1.y, pointc.c2.x, pointc.c2.y, pointf.x, pointf.y,);
    quad(pointc.c2.x, pointc.c2.y, pointc.c3.x, pointc.c3.y, pointe.x, pointe.y, pointf.x, pointf.y);
    quad(pointc.c3.x, pointc.c3.y, pointc.c4.x, pointc.c4.y, pointd.x, pointd.y, pointe.x, pointe.y);
    triangle(pointc.c4.x, pointc.c4.y, pointd.x, pointd.y, pointc.c5.x, pointc.c5.y);

    triangle(pointc.c5.x, pointc.c5.y, pointc.c6.x, pointc.c6.y, pointd.x, pointd.y,);
    quad(pointc.c6.x, pointc.c6.y, pointc.c7.x, pointc.c7.y, pointe.x, pointe.y, pointd.x, pointd.y);
    quad(pointc.c7.x, pointc.c7.y, pointc.c8.x, pointc.c8.y, pointf.x, pointf.y, pointe.x, pointe.y);
    triangle(pointc.c8.x, pointc.c8.y, pointc.c9.x, pointc.c9.y, pointf.x, pointf.y,);


    //buttons
    //might change to no stroke depending on whether I change split screen colors
    //button 1 //left button 'D' (for depression)
    // The button 1
    push();
    noStroke();
    fill(button1.fill);
    ellipse(button1.x, button1.y, button1.size);

    //text in button 1
    textAlign(CENTER);
    textSize(32);
    fill(0);
    textFont('Arial');
    text('D', button1.x, button1.y + 10);
    pop();


    // The button 2
    push();
    noStroke();
    fill(button2.fill);
    ellipse(button2.x, button2.y, button2.size);

    //text in button 2
    textAlign(CENTER);
    textSize(32);
    fill(255);
    textFont('Arial');
    text('M', button2.x, button2.y + 10);
    pop();


    //Check if the user clicked and play the sound
    function mousePressed() {
        // Check if the click was inside the button D
        const d = dist(mouseX, mouseY, button1.x, button1.y);
        const overlap = (d < button1.size / 2);
        if (overlap) {
            button1.soundEffect.play();
            button1.fill = button1.fills.pressed;
            rectB.unchange = rectB.unchange + 100;

        }


    }


    const d1 = dist(mouseX, mouseY, button2.x, button2.y);
    const overlap1 = (d1 < button2.size / 2);
    if (overlap1) {
        button1.soundEffect.play();
        button2.fill = button2.fills.pressed;
    }
}


//Make the button unpressed
function mouseReleased() {
    button1.fill = button1.fills.unpressed;
    button2.fill = button2.fills.unpressed;
}
