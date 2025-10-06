/**
 * Sound Effect Button
    * Pippin Barr
        *
 * A button that, when pressed, plays a barking sound
    */

// The button
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



/**
 * Load the sound effect
 */
function preload() {
    button1.soundEffect = loadSound("assets/sounds/bark.wav");
}



/**
 * Create the canvas
 */
function setup() {
    createCanvas(600, 750);
}

/**
 * Display the button
 */
function draw() {
    background("#aaaaaa");

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
}

/**
 * Check if the user clicked and play the sound
 */
function mousePressed() {
    // Check if the click was inside the button
    const d = dist(mouseX, mouseY, button1.x, button1.y);
    const overlap = (d < button1.size / 2);
    if (overlap) {
        button1.soundEffect.play();
        button1.fill = button1.fills.pressed;
    }

    const d1 = dist(mouseX, mouseY, button2.x, button2.y);
    const overlap1 = (d1 < button2.size / 2);
    if (overlap1) {
        button1.soundEffect.play();
        button2.fill = button2.fills.pressed;
    }
}

/**
 * Make the button unpressed
 */
function mouseReleased() {
    button1.fill = button1.fills.unpressed;
    button2.fill = button2.fills.unpressed;
}
