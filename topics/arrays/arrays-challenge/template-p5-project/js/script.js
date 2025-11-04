/**
 * Boingo
 * Matia Paki and Sophia Andtbacka
 *
 * A ball that bounces around on the canvas
 */

let balls = [];



/**
 * Create the canvas and the ball
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);
    // Create the ball
    for (let i = 0; i < 50; i++) {
        balls.push(createBall())
    }

    console.log(balls);


}

/**
 * Creates a random ball
 */
function createBall() {
    // Create a ball object with appropriate properties
    const newBall = {
        // Position and dimensions
        x: 200,
        y: 200,
        size: 20,
        // Colour
        fill: (random(0, 255), random(0, 255), random(0, 255), random(0, 255)),

        // Movement
        velocity: {
            x: random(-5, 5),
            y: random(-5, 5)
        }
    };
    return newBall;
}


/**
 * Moves and draws the ball
 */
function draw() {
    background("#87ceeb");

    for (let ball of balls) {
        moveBall(ball);
        bounceBall(ball);
        drawBall(ball);
    }
}

/**
 * Moves the ball according to its velocity
 */
function moveBall(ball) {
    ball.x += ball.velocity.x;
    ball.y += ball.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(ball) {
    // Check if the ball has reached the left or right
    const bounce1X = (ball.x > width || ball.x < 0);
    // Check if the ball has reached the top or bottom
    const bounce1Y = (ball.y > height || ball.y < 0);

    // Handle bouncing horizontally
    if (bounce1X) {
        ball.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounce1Y) {
        ball.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(ball) {
    push();
    noStroke();
    fill(ball.fill);
    ellipse(ball.x, ball.y, ball.size);
    pop();
}