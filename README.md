# Overview

A pomodoro timer inspired by [FreeCodeCamp](https://www.freecodecamp.com). I'm going to write it as a browser extension, focussing primarily on FireFox (as that is my main browser), but I will also try to keep it compatible with other browsers. I'm going to write it using best practices as best I can (testing; clean, readable code; accesibility; etc).

My original intention was to use this project as an opportunity to learn how to write and use unit tests, with Jest, but after falling down the tooling hole for a while I've build up a more complete/complex tooling chain also including Webpack and Babel. This diversion did take some time away from actual programming, but I feel it was worth it to familiarize myself with more of the tools and processes used in professional web developement.

## User Stories:

 - When I open the app I see a timer. I can press on the timer to start it. I can stop the timer by pressing on it again.
 - When I stop the timer a settings menu opens where I can change the times for the work and break periods
 - I can push a button to open the settings menu, without stopping the timer.
 - When I change the time in the settings menu, the timer doesn't change until I stop it and start it again (or maybe not)
 - When the timer reaches 0 an alarm sound plays, and a notification pops up. Then a timer starts for a break.
 - After 4 work periods there is a longer break


 ## UI:

 - The timer will be the center of the view, with the settings menu hidden on the right side.
 - The timer will fill up clockwise as time passes


 ## Implementation:

I'm going to write it as modular componants, and I'm going to try and keep it as functional (as in the paradigm) as I can.

I'm going to use the Web Notifications API for the notifications.

I'm going to check the timer against the current time multiple times a second, to reduce delays as much as possible.