/**
 * Art Jam: the multifacetted image of Sophia Maryse "Diamond" Andtbacka
 * Sophia Andtbacka
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

//cavas website size
const stage = {
    x: 600,
    y: 750
}


//setup
function setup() {
    createCanvas(stage.x, stage.y);
}



/**
 * Draws Gem
*/
function draw() {
    background("#aaaaaa");

    //not working rn
    const darkl = {
        fill: (0, 0, 0)
    }

    const leftr = {
        fill: (255, 255, 255)
    }

    //black left, white right 
    function splitScreen() {
        fill(0, 0, 0);
        rect(0, 0, stage.x / 2, stage.y);
        fill(255, 255, 255);
        rect(stage.x / 2, 0, stage.x / 2, stage.y);
    }

    splitScreen()


    //outline

    fill("#ffffff");

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

    //top row triangles 2nd layer abstraction, left to right
    triangle(pointc.c1.x, pointc.c1.y, pointb.b1.x, pointb.b1.y, pointc.c2.x, pointc.c2.y);
    triangle(pointc.c2.x, pointc.c2.y, pointb.b2.x, pointb.b2.y, pointc.c3.x, pointc.c3.y);
    triangle(pointc.c3.x, pointc.c3.y, pointb.b2.x, pointb.b2.y, pointc.c4.x, pointc.c4.y);
    triangle(pointc.c4.x, pointc.c4.y, pointb.b3.x, pointb.b3.y, pointc.c5.x, pointc.c5.y);
    triangle(pointc.c5.x, pointc.c5.y, pointb.b3.x, pointb.b3.y, pointc.c6.x, pointc.c6.y);
    triangle(pointc.c6.x, pointc.c6.y, pointb.b4.x, pointb.b4.y, pointc.c7.x, pointc.c7.y);
    triangle(pointc.c7.x, pointc.c7.y, pointb.b4.x, pointb.b4.y, pointc.c8.x, pointc.c8.y);
    triangle(pointc.c8.x, pointc.c8.y, pointb.b5.x, pointb.b5.y, pointc.c9.x, pointc.c9.y);

    //quad top
    quad(pointb.b1.x, pointb.b1.y, pointc.c2.x, pointc.c2.y, pointb.b2.x, pointb.b2.y, pointa.x, pointa.y);
    //drawQuad1();

    quad(pointb.b2.x, pointb.b2.y, pointc.c4.x, pointc.c4.y, pointb.b3.x, pointb.b3.y, pointa.x, pointa.y);
    quad(pointb.b3.x, pointb.b3.y, pointc.c6.x, pointc.c6.y, pointb.b4.x, pointb.b4.y, pointa.x, pointa.y);
    quad(pointb.b4.x, pointb.b4.y, pointc.c8.x, pointc.c8.y, pointb.b5.x, pointb.b5.y, pointa.x, pointa.y);

    //bottom row triangles 2nd layer abstraction, left to right
    triangle(pointc.c1.x, pointc.c1.y, pointc.c2.x, pointc.c2.y, pointf.x, pointf.y,);
    quad(pointc.c2.x, pointc.c2.y, pointc.c3.x, pointc.c3.y, pointe.x, pointe.y, pointf.x, pointf.y);
    quad(pointc.c3.x, pointc.c3.y, pointc.c4.x, pointc.c4.y, pointd.x, pointd.y, pointe.x, pointe.y);
    triangle(pointc.c4.x, pointc.c4.y, pointd.x, pointd.y, pointc.c5.x, pointc.c5.y);

    triangle(pointc.c5.x, pointc.c5.y, pointc.c6.x, pointc.c6.y, pointd.x, pointd.y,);
    quad(pointc.c6.x, pointc.c6.y, pointc.c7.x, pointc.c7.y, pointe.x, pointe.y, pointd.x, pointd.y);
    quad(pointc.c7.x, pointc.c7.y, pointc.c8.x, pointc.c8.y, pointf.x, pointf.y, pointe.x, pointe.y);
    triangle(pointc.c8.x, pointc.c8.y, pointc.c9.x, pointc.c9.y, pointf.x, pointf.y,);


    //button
    const button1 = {
        x: 100,
        y: 100,
        size: 50,
        fill: (255),
        pressed: (255, 0, 0),
    }

    const button2 = {
        x: 500,
        y: 100,
        size: 50,
        fill: 255
    }
    function button() {
        strokeWeight(2);

        fill(255, 255, 255);
        ellipse(button1.x, button1.y, button1.size);

        textAlign(CENTER);
        textSize(32);
        fill(0);
        textFont('Arial');
        text('D', button1.x, button1.y + 10);




        fill(0, 0, 0);
        ellipse(button2.x, button2.y, button2.size);

        textAlign(RIGHT);
        textSize(32);
        fill(255);
        textFont('Arial');
        text('M', button2.x + 12, button2.y + 11.5);
    }

    button();

    //colours not working
    //changes when touches pills, not working right now

    function mousePressed() {
        //Check if the click was inside the button
        const d = dist(mouseX, mouseY, button1.x, button1.y);
        const overlap = (d < button1.size / 2);
        if (overlap) {
            button.bark.wav.play();
            button.fill = button.pressed;
        }
    };

    mousePressed();

}