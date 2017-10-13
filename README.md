# Overview

A pomodoro timer inspired by [FreeCodeCamp's](https://www.freecodecamp.com) Front End course.

~~Note: I'm aware that as a general rule build files should not be comitted to source control. In this case I did it so I can host the timer on GitHub Pages.~~

Now deployed to Surge! [Check it out here!](http://www.pomodorotimer.surge.sh)

## User Stories:
 - When I open the app I see a timer. I can press on the timer to start it. I can stop the timer by pressing on it again.
 - When I stop the timer a settings menu opens where I can change the times for the work and break periods.
 - I can push a button to open the settings menu, without stopping the timer.
 - When the timer reaches 0 an alarm sound plays, and a notification pops up. Then a timer starts for a break.
 - After 4 work periods there is a longer break.
 
## UI:
 - The timer will be the center of the view, with the settings menu hidden on the right side.
 - The timer will fill up clockwise as time passes


# Post (mid) Mortem:
## My original plan (as written):
"I'm going to try to write it in a functional, and modular, style, and with TDD.

My original intention was to use this project as an opportunity to learn how to write and use unit tests with Jest, but after falling down the tooling hole for a while I've built up a more complete/complex tooling chain also including Webpack and Babel. This diversion did take some time away from actual programming, but I feel it was worth it to familiarize myself with more of the tools and processes used in professional web developement."

## And:

"I've written it initially as a simple web app, but I intend to refactor it as a browser extension as well."

## What's actually happened:
### TDD: 
At first I tried to stick to strict TDD, but I found that I couldn't maintain motivation that way and, especially since I'm fitting this in around my full time job etc, maintaining motivation really has to be my priority right now. I tried writing tests after code, but it was very difficult to figure out *how* to test the code. Obviously this is due to a larger problem of my not yet knowing how to write testable code, besides not having experience writing tests.

Nevertheless, I do not consider this to be a failure. I have started learning:
- How to set up a testing framework
- How to write tests
- How to integrate testing into my workflow
and I've started thinking more critically about how I write code, and specifically about how I can write it to be testable.

### Modular:
I think I've done a fairly good job at this. I've certainly learned how to write and use modular Javascript, along with some of the pitfalls of paths and file structure.
I've learned to set up and use Webpack, at least at a basic level, and have integrated it into my workflow. It has certainly given me trouble along the way, and if I had to do it over again I *might* have decided started with a simpler build tool, but on the other hand I think the experience and knowledge I have gained is entirely commensurate with the effort it required.

### Functional:
Maybe a little? I've definitely found myself falling back on global (or at least shared) variables more than I wanted, but I do think I've done a better job at reducing side effects and coupling than in my previous projects

### Extension: 
I am still interested in making this project into a browser extension, but as it gets closer to being feature complete I am honestly losing interest in it. I am going to finish this project off to as high a level of polish as my motivation and ability will allow, and then I'll move onto something else, different learning goals. As I wrote above, maintaining motivation is the main priority for now. Besides: I'm in this for the long haul, there will be plenty of time to practice making browser extensions yet :-)

### Overall:
Although I didn't mention it explicitly in the above paragraph my overall goal with this project, as with all of my projects, was too further familiarize myself with the techniques and tools of front-end web developement, and in that regard it has been an *enormous* success. Besides learning the basics of build tools and testing: I have improved my underastanding of JavaScript, the DOM, and the web platform as a whole. 

## Attributions: 

Watch alarm sound is copyright of Daniel Simion. Many thanks. Found at [soundbible](http://soundbible.com/2197-Analog-Watch-Alarm.html)

Gong alarm sound created by cdiupe, who graciously donated it to the creative commons. Found at [Freesound](https://freesound.org/people/cdiupe/) 

Clock Tick sound is property of the very generous [FreeSFX](http://www.freesfx.co.uk)

Timer Icon Created by [ngamlerdlek.design](https://thenounproject.com/ngamlerdlek.video/), found at the Noun project
