# Overview

A pomodoro timer inspired by [FreeCodeCamp](https://www.freecodecamp.com). I'm going to write it initially as a simple web app, but I intend to port it as a browser extension afterwards. I'm going to try to write it in a functional, and modular, style, and with TDD.

My original intention was to use this project as an opportunity to learn how to write and use unit tests with Jest, but after falling down the tooling hole for a while I've built up a more complete/complex tooling chain also including Webpack and Babel. This diversion did take some time away from actual programming, but I feel it was worth it to familiarize myself with more of the tools and processes used in professional web developement.


## User Stories:

 ### Full Page:
 - When I open the app I see a timer. I can press on the timer to start it. I can stop the timer by pressing on it again.
 - When I stop the timer a settings menu opens where I can change the times for the work and break periods.
 - I can push a button to open the settings menu, without stopping the timer.
 - When I change the time in the settings menu, the timer doesn't change until I stop it and start it again (or maybe not).
 - When the timer reaches 0 an alarm sound plays, and a notification pops up. Then a timer starts for a break.
 - After 4 work periods there is a longer break.

 ### Extension:
 - I can add the extension to my browser, when I do a button appears on my toolbar.
 - When I click on the toolbar button a popup appears with a timer on it, I can start and stop the timer by pushing a button (or maybe clicking on the timer itself).
 - As the timer runs down the button will visibly change to show how much time has passed/is left
 - When the timer reaches 0, an alarm sound plays and a notification pops up
 - I can change the time of the timer


## UI:

 ### Full page: 
 - The timer will be the center of the view, with the settings menu hidden on the right side.
 - The timer will fill up clockwise as time passes

 ### Extension:
 - A toolbar button which opens a popup
 - The popup shows the time remaining, has buttons to stop/start, and the time can be changed
 - An indicator will show approximately how much time has passed/is left. Either change the toolbar button itself, or add a badge to it. (or both)
 - other than that it should work with the same code as the full page view.


## Implementation:

I'm going to write it as modular componants, and I'm going to try and keep it as functional (as in the paradigm) as I can.

I'm going to use the Web Notifications API for the notifications.

I'm going to check the timer against the current time multiple times a second, to reduce delays as much as possible.

## Attributions: Alarm sound is copyright of Daniel Simion. Many thanks. Found at: http://soundbible.com/2197-Analog-Watch-Alarm.html