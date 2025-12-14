Variation Idea 

Theme: Create mini games that allow you to explore your creativity through creating different unexpected visuals. Influenced by the Dada movement and process art. Leverages the unique properties of computers and progammable art (quick interation, mathmatic visualization, and color isolation) to explore visuals and process previously impossible

1. Popping Circle
Objective: create a group of circles which will generate and create a pattern, click and pop a circle if you don't like it's position

Title Screen: title, explanation of game, enter button
Data Screen: title, data inputs: r value min and max, g value min and max, b value min and max, a value min and max, number of circles, enter button
Game Screen: generated circles

Game Aspects - 
Start: generate enough random colored circles to cover the canvas and create a layered pattern
Event-mouseClicked: click circle will disappear and a new circle with random color and position will appear (changed this from a new circle appearing to the clicked circle will change color and teleport to a new location)
Goal: Pop enough circles until you're satisfied with the pattern outcome

Start Screen
const circle = {
    x: random(x, x),
    y: random(y, y),
    colorNoOverlap: {
        r: random(n, n),
        g: random(n, n),
        b: random(n, n),
    },
    colorOverlap: {
        r: random(n, n),
        g: random(n, n),
        b: random(n, n),
    },
    size: n
};

let circles = [];
let numCircles = n;

function drawCircle() {
    // create starting circles
    for (let i = 0; i < numCircles; i++) {
        fill(colorNoOverlap);
        ellipse(x, y, width, height);
    };
}

Event - mouseClicked - Circle Move & Fill Change
function moveCircle(circle) {
    // fill with the circle's overlap color
    fill(circle.colorOverlap.r, circle.colorOverlap.g, circle.colorOverlap.b);

    // teleport to a new random position
    circle.x = random(n, n);
    circle.y = random(n, n);
}

function checkOverlap() {
    const d = distance(mouseX, mouseY, circles.x, circles.y);
    if (d < circle.size / 2) {
        checkOverlap = true
    }
    else {
        checkOverlap = false
    }
}

function mousePressed() {
    if (checkOverlap === true) {
        moveCircle();
    }
}

2. Random Color Picker
Objective: create a random color picker, move around the circle to create a random color, stop when an unexpected color has spoken to you, note down the rgba value at the bottom and use the color for your next project. //my use for it, live coding light shows in clubs, I stop moving when a color speaks to me and surprisingly matches the music/vibe and que up the light transtion

Title Screen: title, explanation of game, enter button
Game Screen: generated circle, text displaying color rgba values

Game Aspects -
Start: Generate circle in the center of canvas with random fill
Event-mouseMove: If mouseX or mouseY changes circle moves and fill changes


Start Screen
const circle = {
    x: mouseX,
    y: mouseY + diplacement,
    colorStart: {
        r: random(n, n),
        g: random(n, n),
        b: random(n, n),
    },
size: n,
};

function drawCircle() {
    fill(colorStart.r, colorStart.g, colorStart.b);
    ellipse(x, y, size);
}

Event - mouseMove - Color Change
    function colorChange() {
        if (mouseX != pmouseX) {
            fill(random(n, n), random(n, n), random(n, n))
        }
    }

3. Pattern
Based on distance from center circle pattern appears, idea stemming from metal pattern torus thing
want to use exponential

4. Swirling Swallows 
Objective: create a group of circles which mimic a gulp of swallows where the mouse acts as the lead bird/circle.

Title Page: title, explanation of game, enter button
Data Page: title, data input for number of circles and size of circles, (maybe input for color of circles, become a bit of a theme in my other variations), enter button
Game Page: group of generated circles

Game Aspects -
Start: generate a number of circles in a triangle formation
Event-mouseMove: generated circles move based on mouse position

Start Screen
Generate circles with two loops: 
a. determine number of rows 
b. determine circles in each row

circles = [];

  let spacing = Number(size.value());
  let totalCircles = Number(number.value());

  let xCenter = width/2;
  let y = width/4;

  let row = 1;
  let count = 0;

  while (count < totalCircles) {

    for (let i = 0; i < row; i++) {
      if (count >= totalCircles) return;

      let x = xCenter + i * spacing - (row - 1) * spacing / 2;

      circles.push({
        x: x,
        y: y,
        size: Number(size.value())
      });

      count++;
    }

    y += spacing;
    row++;
  }



