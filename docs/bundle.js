!function(e){function t(i){if(r[i])return r[i].exports;var o=r[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,r){"use strict";function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v(),r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,u.TimerView)();t.timerActive=c=!0,m=setTimeout(n,1e3,e,r),(0,s.toggleSettingsView)("hide"),(0,l.updateProgressCircle)(0,0),(0,u.updateTimerView)(r)}function o(){t.timerActive=c=!1,clearTimeout(m),(0,s.toggleSettingsView)("show"),(0,u.updateTimerView)(),(0,l.updateProgressCircle)(0,0)}function n(e,t){var r=(new Date).getTime();e.timeLeft--,(0,u.updateTimerView)((0,u.TimerView)({title:t.title,time:e.timeLeft}));var i=(e.endTime-e.startTime)/1e3;(0,l.updateProgressCircle)(i,i-e.timeLeft),r>=e.endTime?a(e):m=setTimeout(n,1e3,e,t)}function a(e){var t=(new Date).getTime();if(null!==document.getElementById("alarm")){document.getElementById("alarm").play()}if("pomodoro"===e.currentActivity&&e.pomodoroCount<3){var r=t+e.shortBreak*p;d("You finished! Good work! Take a short break, you deserve it","Short Break Started"),i(v({pomodoro:e.pomodoro,shortBreak:e.shortBreak,longBreak:e.longBreak,pomodoroCount:e.pomodoroCount+1,currentActivity:"shortBreak",endTime:r,timeLeft:e.shortBreak}),(0,u.TimerView)({title:"Short Break",time:e.shortBreak}))}else if("pomodoro"===e.currentActivity&&e.pomodoroCount>=3){var o=t+e.longBreak*p;d("Four in a row! Awesome! Take a long one, dude.","Long Break Started"),i(v({pomodoro:e.pomodoro,shortBreak:e.shortBreak,longBreak:e.longBreak,pomodoroCount:0,currentActivity:"longBreak",endTime:o,timeLeft:e.longBreak}),(0,u.TimerView)({title:"Long Break",time:e.longBreak}))}else{var n=t+e.pomodoro*p;d("Recharged a bit? Good! Pick something new and go get 'em!","Pomodoro Started"),i(v({pomodoro:e.pomodoro,shortBreak:e.shortBreak,longBreak:e.longBreak,pomodoroCount:e.pomodoroCount,endTime:n,timeLeft:e.pomodoro}),(0,u.TimerView)({title:"Pomodoro",time:e.pomodoro}))}}function d(e,t){var r={body:e},i=new Notification(t,r);setTimeout(i.close.bind(i),7e3),i.onclick=function(e){if(null!==document.getElementById("alarm")){document.getElementById("alarm").pause()}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=t.timerActive=void 0,t.beginTimer=i,t.endTimer=o;var u=r(1),s=r(2),l=r(3),c=t.timerActive=!1,m=0,p=1e3,v=t.Timer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.startTime,r=void 0===t?(new Date).getTime():t,i=e.pomodoro,o=void 0===i?(0,s.getInputValue)("pomodoroInput"):i,n=e.shortBreak,a=void 0===n?(0,s.getInputValue)("shortBreakInput"):n,d=e.longBreak,u=void 0===d?(0,s.getInputValue)("longBreakInput"):d,l=e.pomodoroCount,c=void 0===l?0:l,m=e.currentActivity,v=void 0===m?"pomodoro":m,g=e.endTime,f=void 0===g?r+o*p:g,h=e.timeLeft;return{startTime:r,pomodoro:o,shortBreak:a,longBreak:u,pomodoroCount:c,currentActivity:v,endTime:f,timeLeft:void 0===h?o:h}}},function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){var e=document.createElement("div");e.setAttribute("id","timer");var t=document.createElement("label");t.setAttribute("for","timer"),t.setAttribute("class",l.default.title);var r=document.createElement("p"),i=document.createElement("audio");return i.setAttribute("src",u.default),i.setAttribute("id","alarm"),e.appendChild(t),e.appendChild(r),e.appendChild(i),e.classList.add(l.default.timer),e.addEventListener("click",function(){!1===c.timerActive?(0,c.beginTimer)((0,c.Timer)(),m()):!0===c.timerActive&&(0,c.endTimer)()}),e}function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m(),t=document.getElementById("timer");t.childNodes[0].innerHTML=e.title,t.childNodes[1].innerHTML=a(e.time)}function a(e){var t=e%60,r=Math.floor(e/60);return 0===t?r+":00":t<10?r+":0"+t:r+":"+t}Object.defineProperty(t,"__esModule",{value:!0}),t.TimerView=void 0,t.createTimerView=o,t.updateTimerView=n;var d=r(7),u=i(d),s=r(8),l=i(s),c=r(0),m=t.TimerView=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,r=void 0===t?"Pomodoro":t,i=e.time;return{title:r,time:void 0===i?(0,c.Timer)().pomodoro:i}}},function(e,t,r){"use strict";function i(e,t){var r=document.createElement("input");r.setAttribute("id",e[0].toLowerCase()+e.substr(1).replace(/\s/g,"")+"Input"),r.setAttribute("value",t),r.setAttribute("type","number"),r.setAttribute("min",v),r.setAttribute("max",p),r.onkeydown=function(e){d(e)||e.preventDefault()},r.setAttribute("onpaste","return false");var i=document.createElement("label");return i.innerHTML=e+" Length",i.setAttribute("for",e[0].toLowerCase()+e.substr(1).replace(/\s/g,"")+"Input"),i.appendChild(r),i.addEventListener("click",function(e){e.stopPropagation()}),r.addEventListener("input",function(){r.value>p?r.value=p:"0"===r.value.toString().charAt(0)&&r.value>0?r.value=r.value.toString().substr(1):!1===l.timerActive&&r.value>=v&&r.value<=p&&(0,c.updateTimerView)({title:e,time:r.value*m})}),r.addEventListener("change",function(){r.value<v&&(r.value=v)}),i}function o(){var e=document.createElement("div");e.setAttribute("id","settingsParent"),e.classList.add(s.default.settingsParent),e.addEventListener("click",function(){var e=document.getElementById("settingsView");e.classList.contains(s.default.visible)?n("hide"):e.classList.contains(s.default.hidden)&&n("show")});var t=document.createElement("div");t.setAttribute("id","settingsView"),t.classList.add(s.default.settingsView,s.default.hidden);var r=i("Pomodoro","25"),o=i("Short Break","5"),a=i("Long Break","15");return t.appendChild(r),t.appendChild(o),t.appendChild(a),e.appendChild(t),e}function n(e){var t=document.getElementById("settingsView");"show"===e?(t.classList.add(s.default.visible),t.classList.remove(s.default.hidden)):"hide"===e&&(t.classList.remove(s.default.visible),t.classList.add(s.default.hidden))}function a(e){var t=document.getElementById(e);return t.value<=v?v*m:t.value%1==0&&t.value<p?t.value*m:t.value>=p?p*m:t.value%1!=0?0:void 0}function d(e){return!!/Enter|Backspace|Tab|ArrowUp|ArrowDown|ArrowRight|ArrowLeft|End|Home|Escape|Delete|[\d]/.test(e.key)}Object.defineProperty(t,"__esModule",{value:!0}),t.createSettingsView=o,t.toggleSettingsView=n,t.getInputValue=a;var u=r(6),s=function(e){return e&&e.__esModule?e:{default:e}}(u),l=r(0),c=r(1),m=60,p=60,v=1},function(e,t,r){"use strict";function i(){var e=2*l*Math.PI,t=document.createElement("div");t.setAttribute("id","container"),t.setAttribute("class",a.default.container);var r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("viewBox","0, 0, "+c+", "+c),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("id","svg"),r.setAttribute("class",a.default.svg);var i=document.createElementNS("http://www.w3.org/2000/svg","circle");i.setAttribute("id","circle"),i.setAttribute("fill","transparent"),i.setAttribute("stroke","red"),i.setAttribute("stroke-width","5%"),i.setAttribute("r",l),i.setAttribute("cx","50%"),i.setAttribute("cy","50%");var o=document.createElementNS("http://www.w3.org/2000/svg","circle");return o.setAttribute("id","cover-circle"),o.setAttribute("fill","transparent"),o.setAttribute("stroke","lightgrey"),o.setAttribute("stroke-width","5%"),o.setAttribute("r",l),o.setAttribute("cx","50%"),o.setAttribute("cy","50%"),o.setAttribute("stroke-dashoffset",0),o.setAttribute("stroke-dasharray",e),r.appendChild(i),r.appendChild(o),t.appendChild(r),t}function o(e,t){document.getElementById("cover-circle").setAttribute("stroke-dashoffset",-m/e*t)}Object.defineProperty(t,"__esModule",{value:!0}),t.createProgressCircle=i,t.updateProgressCircle=o;var n=r(9),a=function(e){return e&&e.__esModule?e:{default:e}}(n),d=document.documentElement.clientHeight,u=document.documentElement.clientWidth,s=d<u?d:u,l=s/8,c=s/3.8,m=2*l*Math.PI},function(e,t,r){"use strict";var i=r(5),o=(function(e){e&&e.__esModule}(i),r(2)),n=r(1),a=r(0),d=r(3);document.body.appendChild((0,o.createSettingsView)()),document.body.appendChild((0,n.createTimerView)()),document.body.appendChild((0,d.createProgressCircle)()),document.body.addEventListener("keydown",function(e){var t=window.getComputedStyle(document.getElementById("settingsView")).getPropertyValue("visibility");"Escape"===e.key?"hidden"===t?(0,o.toggleSettingsView)("show"):(0,o.toggleSettingsView)("hide"):" "!==e.key&&"Spacebar"!==e.key||(!1===a.timerActive?(0,a.beginTimer)():(0,a.endTimer)())}),(0,n.updateTimerView)(),Notification.requestPermission().then()},function(e,t){},function(e,t){e.exports={settingsParent:"_1RkffBQ4t0cw2JxM-FMqM-",settingsView:"_3FQs3yzLxIewV9zpJ7XBq7",hidden:"_3LNrFKcgPM-GbMkVu18KxO",visible:"mTBil2vWOeYt-AUTb3wHY"}},function(e,t,r){e.exports=r.p+"61eb5a4053f714f2194be9385aa2824d.mp3"},function(e,t){e.exports={timer:"_2GBRQbYZEkpKAPfsQ5qA7U",title:"_1hget2_IAh_7OHG1eFWSfX"}},function(e,t){e.exports={container:"_3gRYcbyFm7maThkUT9YprY",svg:"_15gEXFF7AYU9aG0K6Ljcji"}}]);
//# sourceMappingURL=bundle.js.map