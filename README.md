# A pomodoro timer inspired by [FreeCodeCamp's](https://www.freecodecamp.com) Front End course.

[Check it out here!](http://pomodorotimer.surge.sh)

## User Stories (from FreeCodeCamp):
- I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.
- I can reset the clock for my next pomodoro.
- I can customize the length of each pomodoro.

## Features:

- Adjustable, accurate, Pomodoro Timer!
- Keyboard Accessibility!
- A Settings Menu, that can open *and* close!
- **Three** default alarm sounds *and*
- Choose one of your own MP3 files for the alarm!
- Mute the alarm sound, if you don't like it!
- Optional Clock Tick sound!
- Volume Control!
- Desktop Notifications!

## Issues:

- As far as I am aware it doesn't work on mobile devices. I only have Android devices to test with, so I can't say for sure about IOS
- The Settings Menu is only partly responsive
- I've been told it didn't work on one Macintosh computer using Chrome. Unfortunately I cannot test this for myself, and wasn't able to figure out what the problem may be.

## General Comments:

1. I started this project trying to learn (arguably) too many new things at once. This is my first time using: WebPack, Babel, Modular design, and many ES6 features. I did learn a lot, but I spent a *lot* of time stuck because of some problem with a tool (or my understanding of it), and it was very hard to maintain motivation.

2. At the start I was also writing unit tests with Jest, and trying to follow TDD principles. Unfortunately it was too much at once, and I struggled trying to write code (period) with all the new tools and features I was using let alone code that was testable, or the tests for that code. After a week I decided to focus on learning how to write code that worked, and I dropped testing for the duration of the project. As a point of interest: There were many occasions after this were I found myself dealing with a bug that would have been trivial to sort out if I had been writing proper tests, and as such I have a renewed understanding of, and appreciation for, the value of writing tests, and intend to dedicate my next project solely to leraning how to write unit tests, and integrating them into my workflow. (I have left the test files in the repo for posterity, and as a warning to others)

3. I had intended to have the option to save setting presets, and had a working (if basic) save function working via localstorage, but removed that code in order to try and implement a more full-featured version using IndexedDB (via localForage). Unfortunately, this turned out to be beyond me at this point. I struggled a great deal working with Promises, never managed to make it work even as well as the previous version, and ultimately lost all motivation to work on the project as a result. In order to preserve my mental well-being I decided to drop the storage functionality entirely, polish up the rest of the project, and move on. Both versions of the storage code can still be found in the commit history if anyone wants to take a look.

## Attributions: 

The resources I used were provided with, great generosity, by:

[Analog Watch Alarm](http://soundbible.com/2197-Analog-Watch-Alarm.html) by Daniel Simion, Found at SoundBible.

[Gong](https://freesound.org/people/cdiupe/sounds/112507/) by [cdiupe](https://freesound.org/people/cdiupe/), found at [Freesound.org](https://freesound.org/).

[Birdsong May](http://freesound.org/people/juskiddink/sounds/98480/) by [juskiddink](http://freesound.org/people/juskiddink/), found at [Freesound.org](https://freesound.org/).

[Alarm Clock Ticking](https://freesound.org/people/joedeshon/sounds/78563/) by [joedeshon](https://freesound.org/people/joedeshon/), found at [Freesound.org](https://freesound.org/).

[Stopwatch](https://thenounproject.com/search/?q=timer&creator=2823359&i=1136013) icon by [ngamlerdlek.design](https://thenounproject.com/ngamlerdlek.video/), found at [The Noun Project](https://thenounproject.com/). [Attribution 3.0 United States (CC BY 3.0 US)](https://creativecommons.org/licenses/by/3.0/us/)
