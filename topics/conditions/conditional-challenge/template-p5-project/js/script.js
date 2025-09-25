/**
 * Conditional Challenge
 * Matia Paki, Sophia Andtbacka
 * 
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#000000"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#ff0000"
};

const target = {
    x: 100,
    y: 100,
    size: 100,
    fill: "#0000ff"
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");


    // Draw the user and puck
    drawUser();
    drawPuck();
    drawTarget();

    // Move user circle
    moveUser();
    movePuck();
    targetColour();


}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}

function drawTarget() {
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();
}



function movePuck() {
    // Calculate distance between circles' centres
    const d = dist(puck.x, puck.y, user.x, user.y);
    // Check if that distance is smaller than their two radii, 
    // because if it is, they are overlapping by the amazing
    // power of geometry!
    const overlap = (d < puck.size / 2 + user.size / 2);
    // Set fill based on whether they overlap

    if (overlap) {
        //if user is on right
        if (puck.x < user.x) {
            //user below
            if (puck.y < user.y) {
                puck.x = puck.x - 30;
                puck.y = puck.y - 30
            }
            //user above
            else {
                puck.x = puck.x - 30;
                puck.y = puck.y + 30
            }


        }
        //if user on left
        else {
            //user below
            if (puck.y < user.y) {
                puck.x = puck.x + 30;
                puck.y = puck.y - 30
            }
            //user above
            else {
                puck.x = puck.x + 30;
                puck.y = puck.y + 30
            }

        }



    }

}


function targetColour() {
    // Calculate distance between circles' centres
    const d = dist(puck.x, puck.y, target.x, target.y);
    // Check if that distance is smaller than their two radii, 
    // because if it is, they are overlapping by the amazing
    // power of geometry!
    const overlap = (d < puck.size / 2 + target.size / 2);
    // Set fill based on whether they overlap

    if (overlap) {
        drawTarget.fill = fill(255, 13, 0)
    }

}

