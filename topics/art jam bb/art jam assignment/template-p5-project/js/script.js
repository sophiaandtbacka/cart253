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


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#aaaaaa");
    //outline

    //top tri
    triangle(150, 500, 300, 100, 450, 500);

    //bottom tri
    triangle(150, 500, 300, 650, 450, 500);

    //top row inner
    triangle(150, 500, 300, 100, 225, 500);
    triangle(225, 500, 300, 100, 300, 500);
    triangle(300, 500, 300, 100, 375, 500);
    triangle(375, 500, 300, 100, 450, 500);

    //top row 2nd layer inner left, left to right
    triangle(150, 500, (150 + ((125 * 150) / 400)), (500 - 125), (150 + 37.5), 500);
    triangle((150 + 37.5), 500, (225 + ((125 * 75) / 400)), (500 - 125), 225, 500);
    triangle(225, 500, (225 + ((125 * 75) / 400)), (500 - 125), (300 - 37.5), 500);
    triangle((300 - 37.5), 500, 300, (500 - 125));

    //top row 2nd layer inner right
    triangle(300, 500, 300, (500 - 125), (300 + 37.5), 500);
    triangle((300 + 37.5), 500, 375 - ((125 * 75) / 400), 375, 500);
    triangle(375 - ((125 * 75) / 400), 375, 375, 500, (375 + 37.5), 500);
    triangle((375 + 37.5), 500, (450 - ((125 * 150) / 400)), (500 - 125), 450, 500);

    //bottom row inner
    triangle(150, 500, 300, 650, 225, 500);
    triangle(225, 500, 300, 650, 300, 500);
    triangle(300, 500, 300, 650, 375, 500);
    triangle(375, 500, 300, 650, 450, 500);

    //bottom row 2nd layer inner left


    //t4
    triangle((300 - 37.5), 500, 300, (500 + 50), 300, 500);

    //bottom row 2nd layer inner right
    triangle(300, 500, 300, (500 + 50), (300 + 37.5), 500);
    triangle((300 + 37.5), 500, 375 - (), (500 + 50), (300 + 37.5), 500);




}