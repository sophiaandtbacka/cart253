# Mod Jam Response
This is my dense critique to specific elements of each of Tasha, Xueyi, and Yann’s work.

# Tasha O'Leary
https://mewmewpewpew.github.io/cart253/topics/mod-jam/

## Gameplay & Core Mechanics
I realized that even a small change in speed can significantly enhance gameplay dynamism. Making fairies faster than flies compels players to monitor pollution and health closely, prioritizing which targets to capture. Having to balance frog health and pond pollution promotes active, strategic decision-making.

## Play Screen Movement
The flies and fairies have a shaking effect created by a buzziness attribute, this adds dynamic quality and unpredictability. This sometimes makes the flies harder to catch as they buzz right out of the expected target range, increasing difficulty and engagement.

```javascript
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 8,
    speed: 5,
    //?it's somehow not working?  speed: 50,
    buzziness: {
        body: 4,
        wing: 2,
    },


function moveFly() {
    // Move the fly
    fly.x += fly.speed; //the speed
    fly.x += random(-fly.buzziness.body, fly.buzziness.body);
    fly.y += random(-fly.buzziness.body, fly.buzziness.body);
```

## Start Screen Button
Tasha employs an innovative start button and page transition, the next screen appears when the mouse is clicked and the tongue overlaps the button. This approach benefits users by demonstrating game mechanics before gameplay begins.

```javascript
function checkTongueButtonOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, button.x, button.y);
    // Check if it's an overlap
    const started = (d < frog.tongue.size / 2 + button.w / 2);

    if (started) {
        //make a mlem sound 
        mlem.soundEffect.play();
        music.soundEffect.play();
        music.soundEffect.loop();
        music.soundEffect.setVolume(0.4);
        game = true;
        // Bring back the tongue
        frog.tongue.state = "inbound";
        //Start the game

    }

}
```

## Screen Transitions & Code Structure
<p>The code is organized by individual elements rather than by distinct start, play, and end screens, resulting in redundant transitions. When the player clicks the start button, all non-gameplay elements are redrawn again but with zero opacity, visually disappearing; a process that could be streamlined through a single opacity function. Similarly, all end and start screen shared elements are called twice despite differing only in color; this could be eliminated by redefining the colors and using a single function to draw the shared elements. These revisions would not affect user experience but would improve program readability.</p>

<p>The only user issue with this organization is the inability to replay the game again without reloading the program.</p>

# Xueyi Xia
https://xiaxueyi00-eng.github.io/cart253/mod-jam-frog/

## Fly Movement Pattern
The flies’ sine-wave movement introduces an interesting rhythm and greater visual interest than typical linear motion. However, upon capture, each fly resets a random y coordinate on the left side of the screen, restarting its sine pattern with no variation in amplitude, or speed. This organization limits the game to a single on-screen fly at a time and results in repetitive gameplay. Even small adjustments to these parameters would substantially increase dynamism.

## Lerps 
<p>A notable strength of this project is the diverse use of lerp. In the capture mechanic, when a fly overlaps the tongue, a conditional triggers a lerp that pulls the fly toward the frog’s mouth. This creates a highly convincing “stuck to the tongue” effect, resulting in the most accurate fly capture among the projects I’ve reviewed.</p>

```javascript
function moveFly() {
    // If the fly has been captured by the frog
    if (fly.captured) {

        // Target position (the frog's mouth)
        let targetX = frog.body.x;
        let targetY = frog.body.y - 20;

        // Smoothly move (lerp) the fly toward the frog's mouth
        fly.x = lerp(fly.x, targetX, 0.15);
        fly.y = lerp(fly.y, targetY, 0.15);
```


<p>Additionally, lerp is effectively employed to generate the background color gradient.</p>

```javascript
function drawBackground() {
    let c1, c2;
    c1 = color(120, 190, 255);
    c2 = color(90, 230, 170);

    for (let y = 0; y < height; y++) {
        let n = map(y, 0, height, 0, 1);
        let newc = lerpColor(c1, c2, n);
        stroke(newc);
        line(0, y, width, y);
    }
```

## End Screen Animation
When the end screen is activated, it uses the frog’s in-game data to generate the rolling frog animation. Although attributes like body color would normally be reset, only the x and y positions are reset, producing an interesting effect in which the rolling frog animation color reflects the state in which the player died or won.

```javascript
function drawEndScreen() {
    background("black");
    textAlign(CENTER, CENTER);
    fill("yellow");
    textSize(50);
    push();

    // Save old frog coordinates before rotating
    let oldX = frog.body.x;
    let oldY = frog.body.y;

    // Temporarily move frog to origin for rotation animation
    frog.body.x = 0;
    frog.body.y = 0;

    translate(width / 2, height / 2 + 40);
    rotate(frameCount * 0.05);
    scale(1.0);
    drawFrog();
    pop();

    // Restore frog original position
    frog.body.x = oldX;
    frog.body.y = oldY;
```