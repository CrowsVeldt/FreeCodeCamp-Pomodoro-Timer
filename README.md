A pomodoro timer inspired by FreeCodeCamp.

#User Stories:

 - When I open the app I see a timer. I can press on the timer to start it. I can stop the timer by pressing on it again.
 - When I stop the timer a settings menu opens where I can change the times for the work and break periods
 - I can push a button to open the settings menu, without stopping the timer.
 - When I change the time in the settings menu, the timer doesn't change until I stop it and start it again (or maybe not)
 - When the timer reaches 0 an alarm sound plays, and a notification pops up. Then a timer starts for a break.
 - After 4 work periods there is a longer break


 #UI:

 - The timer will be the center of the view, with the settings menu hidden on the right side.
 - The timer will fill up clockwise as time passes


 #Implementation:

    I'm going to write it as modular componants, and I'm going to try and keep it as functional (as in the paradigm) as I can.

    I'm going to use the Web Notifications API for the notifications.

    I'm going to check the timer against the current time multiple times a second, to reduce delays as much as possible.