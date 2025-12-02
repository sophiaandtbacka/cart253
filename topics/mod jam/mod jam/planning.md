# Planning
I want to create a game where a frog eats flies but if he eats too many or too few he gets electrocuted by Ukko's lightning and looses a layer of anatomy

## Starting Point
- Frog eats flies
- Frog gets electrocuted
- Frog has different visual appearances

## Experience
The experience: the user controls a frog with their mouse position and clicks to launch the tongue to catch flies. If the fly gets eaten the frog's health increases but Ukko's patience decreases. If the fly flies off screen it is counted as a sacrifice and the frog's health decreases but Ukko's patience increases. If either health or patience bars get to 0 the frog looses a life. 3 shots/electrocutions (skin, muscle, and bone) and you're out. 

## Breaking it Down
Basic things to do in title screen:
- Rolling narrative text/instruction text
- Visuals
- Start button

Basic things to do in game screen:
- Draw the different frog appearances
- Draw the score bars and create a scoring system
- Trigger life transitions when the score bars get to 0
- Change the fly's movement to increase difficulty when lives are lost

Basic thing to do in end screen:
- End of game stats
- Visuals
- Try Again button

### Questions:
- How am I going to do the lightning effect
    - Falling Lightning Bolts to Avoid?
    - Sound Effect?
    - Black Out Screen?
    - Literal or Abstract Expression?
- How will the scoring system work?
    - How should I balance both scoring systems to make it difficult but not redundant?
    - What levels of health and patience should the player start with?
    - Will the scoring change over time?
    - Will the game have special items that drastically affect the scoring?
- What does the muscle and bone structure of a frog look like?
- How does the user transition from title screen to game screen and end screen to game screen?
- What is the aesthetic or visual language and what is the layout?

## Program
What is there?

### Initially
- The Setup
    - Create Canvas
- Draw
    - Background
    - Move and Draw Fly
    - Move and Draw Frog
    - Launch and Draw Tongue

### My Addition
- The Setup
    - Timer
- Draw
    - Title Screen
        - Visuals
        - Title
            - My own font
        - Text Box
            - Make it change over time
        - Start Button
            - Check if tongue overlap
            - If it does go to game screen
        - New Version of Frog
    - Game
        - Frog Versions
            - Make it so that the versions progress in order
            - Make it so my frog designs cover the original frog
            - Find a way to create an organic non perfect circle design with shape layering
        - Lightening Effect
            - If it's a black out screen make sure all the visuals with the fly and frog aren't drawn
            - Add a timed element
        - Fly Speed
            - Change after transition, at a specific score, or after a certain amount of time
        - Score Bars
            - Don't exceed the boundaries of the score bar
    - Game Screen
        - Visuals
        - Scores Statistics
            - Make sure it's accurate
            - See if I can update it for best score after every run
        - Try Again Button
            - Check if tongue overlap
            - If it does overlap reset the game and return to game screen
    - Events
        - If user clicks the mouse then play background music
            - Browsers block sounds from automatically playing