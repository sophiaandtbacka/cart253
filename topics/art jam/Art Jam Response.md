Sophia Andtbacka
Art Jam Response

    Tasha Oest O Leary: 
            https://mewmewpewpew.github.io/cart253/topics/art-jam
            https://github.com/MewMewPewPew/cart253/tree/main/topics/art-jam
    
    Xueyi Xia:
            https://xiaxueyi00-eng.github.io/cart253/air-jam/
            https://github.com/xiaxueyi00-eng/cart253/tree/main/air-jam
    
    Yann Kruplewicz:
            https://yannkruplewicz-afk.github.io/cart253/ART%20JAM/
            https://github.com/yannkruplewicz-afk/cart253/tree/main/ART%20JAM


While reviewing the projects of Tasha, Xui, and Yann, I chose to focus my reflection on three key areas that stood out across these three works: interactivity, commenting, and arranging elements.


Interactivity
After completing my own project and viewing the others, I realized that one of the greatest strengths of JavaScript-based art is its capacity for user interactivity. Each project engaged with interactivity differently, and in doing so had to operate within different technical and creative limitations to succeed.

Tasha’s project allows the user to draw lines and add to a pre-existing cat design. The drawing mechanism invites users to add their own design language to the image and alter its narrative. The accompanying text box is also effective as it gives the cat character a voice and suggests ideas for what the player might draw next, creating a sense of dialogue between the user and program. While engaging with this project I imagine a group of children taking turns drawing, each wanting to clear the canvas easily for the next person. Therefore, I believe including an erase or reset button would make the project much more fluid and allow for iterative design.

Xueyi’s project centers around a “blushing girl” whose expression changes depending on the user’s mouse actions. The mouse position and scroll modify both the mouth shape and the size of the heart in the background, which alters the emotional expression. While observing the dynamic nature of this piece, I realize that it could serve as the foundation of an animation. 

Yann’s project features two framed portraits of himself, one gradually turns grey while the other gains wrinkles and plays a song when clicked. The wrinkle mechanism is interesting, but I believe it would be more cohesive if they appeared on the greying portrait, allowing the two frames to function symbolically as “past” and “present” versions of self. I also noticed the wrinkle feature sometimes lagged due to file size, which is something to consider in optimizing future projects. The addition of music also elevates the work by creating a multisensory experience and further conveying the sense of nostalgia. However, the ability to restart the same track by clicking the image felt unnecessary. I believe it would be more successful if this component were removed and the track played on a loop, or the interaction remained but instead could trigger a new sound effect.


Commenting
Looking through my peers’ code, I was surprised by how much commenting style can influence readability and introduce an artist’s voice.

Tasha’s code uses personalized comments, such as // all the piercings (wish I had more :D). This challenged my earlier assumption that inline comments should only serve a utilitarian purpose, and instead, her comments bring her artistic voice into the code itself. This also adds interest and removes the banal nature that can come from reading straight code.

Yann’s project includes an excellent README file outlining the chronological development of the work. It provides valuable context for understanding his design decisions and gives viewers insight into his creative and technical process.

Separately, one thing I noticed missing across all three projects, including my own, was a short future plans section in the top comment. I think it would be helpful to include a few suggested improvements or extensions, similar to a “future research” section in scientific writing.


Arranging
All three projects are quite illustration-based, which makes the element arrangement and layering hierarchy crucial for visual clarity.

In Tasha’s project, the lowered opacity of both the text box and the star cursor is an effective choice as it allows the user’s drawing to remain visible. However, I noticed that some parts of the cat drawing, like the inner ear, were accidentally cut off due to an incorrect layering order. 

In Xueyi’s work, several visual elements appear slightly misaligned, which seems unintentional. This could be improved by first designing the image and then using the translate() function to center it on the canvas.

Yann uses a clip() function to mask shapes and control layering, successfully allowing the graying lerp command to function properly. I think this could be very helpful in future projects where we would like to change certain overlapping visual elements in a design over time or in response to an event. 
