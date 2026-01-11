/**
 * Lines
 * Sophia and Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

const NUM_LINES = 501;
const lines = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
    stroke: 0,
    stoke2: 0,
};

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");

    lines.stroke = 0;
    lines.stroke2 = 0;
    lines.x1 = 0;
    lines.x2 = 0;
    lines.y1 = 0;
    lines.y2 = 0;

    let i = 0;
    while (i < NUM_LINES) {
        //vericle lines
        stroke(lines.stroke);
        line(lines.x1, 0, lines.x2, height);
        //horizontal curved lines
        stroke(lines.stroke2);
        line(0, lines.y1, width, lines.y2);

        lines.stroke += .8;
        lines.stroke2 += 10;
        lines.x1 += 1;
        lines.x2 += 1;
        lines.y1 += 1;
        lines.y2 += 2;

        i++
    }
}