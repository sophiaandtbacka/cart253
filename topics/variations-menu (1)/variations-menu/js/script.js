"use strict";
let speechState = 0;

let speech = {
    x: 215,
    y: 240,
    fill: "#000000",
    strs: {
        hey: " Hey! Listen! ",
        instruction1: "\n   Invasive toxic \n flies are invading \n    the pond ! ...",
        instruction2: "       Eat flies to save \n    the pond from pollution. \n\n    But don't forget about \n    your health, flies are \n     killing you slowly...",
        instruction3: "\n  Eat fairies to gain health.\n\n     But doing so pollutes \n       the pond slowly.",
        size: 40,
        x: 200,
        y: 180,
        delay: 5000,
    },
    delay: 2000,
};

function setup() {
    createCanvas(640, 480);
    angleMode(DEGREES);
    setTimeout(changeSpeech, speech.delay);
    setTimeout(changeSpeech2, speech.strs.delay);
    setTimeout(changeSpeech3, speech.strs.delay + 6000);
}

function draw() {
    background(255);

    // draw speech
    fill(speech.fill);
    textSize(speech.strs.size);
    textAlign(LEFT, TOP);
    text(speech.strs.hey, speech.x, speech.y);
}

function changeSpeech() {
    speechState = 1;
    speech.strs.hey = speech.strs.instruction1;
    speech.strs.size = 30;
    speech.x = speech.strs.x;
    speech.y = speech.strs.y;
}

function changeSpeech2() {
    if (speechState === 1) {
        speechState = 2;
        speech.strs.hey = speech.strs.instruction2;
        speech.strs.size = 20;
    }
}

function changeSpeech3() {
    if (speechState === 2) {
        speechState = 3;
        speech.strs.hey = speech.strs.instruction3;
    }
}
