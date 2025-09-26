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
function setup() {
    createCanvas(600, 750);

}

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



/**
 * Draws Gem
*/
function draw() {
    background("#aaaaaa");
    //outline

    fill("#ffffff");

    //top tri
    // triangle(150, 500, 300, 100, 450, 500);

    //bottom tri
    triangle(150, 500, 300, 650, 450, 500);

    //top row inner
    //triangle(150, 500, 300, 100, 225, 500);
    //triangle(225, 500, 300, 100, 300, 500);
    //triangle(300, 500, 300, 100, 375, 500);
    //triangle(375, 500, 300, 100, 450, 500);



    //top row 2nd layer inner left, left to right
    triangle(pointc.c1.x, pointc.c1.y, pointb.b1.x, pointb.b1.y, pointc.c2.x, pointc.c2.y);
    triangle(pointc.c2.x, pointc.c2.y, pointb.b2.x, pointb.b2.y, pointc.c3.x, pointc.c3.y);
    triangle(pointc.c3.x, pointc.c3.y, pointb.b2.x, pointb.b2.y, pointc.c4.x, pointc.c4.y);
    triangle(pointc.c4.x, pointc.c4.y, pointb.b3.x, pointb.b3.y, pointc.c5.x, pointc.c5.y);

    //top row 2nd layer inner right
    triangle(pointc.c5.x, pointc.c5.y, pointb.b3.x, pointb.b3.y, pointc.c6.x, pointc.c6.y);
    triangle(pointc.c6.x, pointc.c6.y, pointb.b4.x, pointb.b4.y, pointc.c7.x, pointc.c7.y);
    triangle(pointc.c7.x, pointc.c7.y, pointb.b4.x, pointb.b4.y, pointc.c8.x, pointc.c8.y);
    triangle(pointc.c8.x, pointc.c8.y, pointb.b5.x, pointb.b5.y, pointc.c9.x, pointc.c9.y);

    //quad top
    quad(pointb.b1.x, pointb.b1.y, pointc.c2.x, pointc.c2.y, pointb.b2.x, pointb.b2.y, pointa.x, pointa.y);
    quad(pointb.b2.x, pointb.b2.y, pointc.c4.x, pointc.c4.y, pointb.b3.x, pointb.b3.y, pointa.x, pointa.y);
    quad(pointb.b3.x, pointb.b3.y, pointc.c6.x, pointc.c6.y, pointb.b4.x, pointb.b4.y, pointa.x, pointa.y);
    quad(pointb.b4.x, pointb.b4.y, pointc.c8.x, pointc.c8.y, pointb.b5.x, pointb.b5.y, pointa.x, pointa.y);



    //bottom row inner
    triangle(150, 500, 300, 650, 225, 500);
    triangle(225, 500, 300, 650, 300, 500);
    triangle(300, 500, 300, 650, 375, 500);
    triangle(375, 500, 300, 650, 450, 500);


    //bottom row 2nd layer inner left
    //t4
    triangle((300 - 37.5), 500, 300, (500 + 50), 300, 500);
    triangle(x1, y1, x2, y2, x3, y3)

    //bottom row 2nd layer inner right
    triangle(300, 500, 300, (500 + 50), (300 + 37.5), 500);
    //triangle((300 + 37.5), 500, 375 - (), (500 + 50), (300 + 37.5), 500);




}
