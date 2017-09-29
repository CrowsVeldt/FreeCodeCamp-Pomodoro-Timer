!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,u.TimerView)();if((0,s.tickingIsDesired)()){document.getElementById("tick").play()}t.timerActive=p=!0,v=setTimeout(o,1e3,e,n),(0,c.toggleSettingsMenu)("hide"),(0,l.updateProgressCircle)(0,0),(0,u.updateTimerView)(n)}function i(){t.timerActive=p=!1,clearTimeout(v),(0,c.toggleSettingsMenu)("show"),(0,u.updateTimerView)(),(0,l.updateProgressCircle)(0,0),document.getElementById("tick").pause()}function o(e,t){var n=(new Date).getTime();e.timeLeft--,(0,u.updateTimerView)((0,u.TimerView)({title:t.title,time:e.timeLeft}));var r=(e.endTime-e.startTime)/1e3;(0,l.updateProgressCircle)(r,r-e.timeLeft),n>=e.endTime?d(e):v=setTimeout(o,1e3,e,t)}function d(e){var t=(new Date).getTime();if(null!==document.getElementById("alarm")){document.getElementById("alarm").play()}if("pomodoro"===e.currentActivity&&e.pomodoroCount<3){var n=t+e.shortBreak*f;a("You finished, Take a short break!","Short Break Started"),r(h({pomodoro:e.pomodoro,shortBreak:e.shortBreak,longBreak:e.longBreak,pomodoroCount:e.pomodoroCount+1,currentActivity:"shortBreak",endTime:n,timeLeft:e.shortBreak}),(0,u.TimerView)({title:"Short Break",time:e.shortBreak}))}else if("pomodoro"===e.currentActivity&&e.pomodoroCount>=3){var i=t+e.longBreak*f;a("Four in a row! Take a long one, dude.","Long Break Started"),r(h({pomodoro:e.pomodoro,shortBreak:e.shortBreak,longBreak:e.longBreak,pomodoroCount:0,currentActivity:"longBreak",endTime:i,timeLeft:e.longBreak}),(0,u.TimerView)({title:"Long Break",time:e.longBreak}))}else{var o=t+e.pomodoro*f;a("Recharged a bit? Good! Pick something new and go get 'em!","Pomodoro Started"),r(h({pomodoro:e.pomodoro,shortBreak:e.shortBreak,longBreak:e.longBreak,pomodoroCount:e.pomodoroCount,endTime:o,timeLeft:e.pomodoro}),(0,u.TimerView)({title:"Pomodoro",time:e.pomodoro}))}}function a(e,t){var n={body:e,icon:g.default},r=new Notification(t,n);setTimeout(r.close.bind(r),7e3),r.onclick=function(e){if(null!==document.getElementById("alarm")){document.getElementById("alarm").pause()}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=t.timerActive=void 0,t.beginTimer=r,t.endTimer=i;var u=n(1),c=n(2),s=n(3),l=n(5),m=n(12),g=function(e){return e&&e.__esModule?e:{default:e}}(m),p=t.timerActive=!1,v=0,f=1e3,h=t.Timer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.startTime,n=void 0===t?(new Date).getTime():t,r=e.pomodoro,i=void 0===r?(0,c.getInputValue)("pomodoroInput"):r,o=e.shortBreak,d=void 0===o?(0,c.getInputValue)("shortBreakInput"):o,a=e.longBreak,u=void 0===a?(0,c.getInputValue)("longBreakInput"):a,s=e.pomodoroCount,l=void 0===s?0:s,m=e.currentActivity,g=void 0===m?"pomodoro":m,p=e.endTime,v=void 0===p?n+i*f:p,h=e.timeLeft;return{startTime:n,pomodoro:i,shortBreak:d,longBreak:u,pomodoroCount:l,currentActivity:g,endTime:v,timeLeft:void 0===h?i:h}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=document.createElement("div");e.setAttribute("id","timer");var t=document.createElement("label");t.setAttribute("for","timer"),t.setAttribute("class",m.default.title);var n=document.createElement("p"),r=document.createElement("audio");r.setAttribute("src",u.default),r.setAttribute("id","alarm");var i=document.createElement("audio");return i.setAttribute("src",s.default),i.setAttribute("id","tick"),i.setAttribute("loop",!0),e.appendChild(t),e.appendChild(n),e.appendChild(r),e.appendChild(i),e.classList.add(m.default.timer),e.addEventListener("click",function(){!1===g.timerActive?(0,g.beginTimer)((0,g.Timer)(),p()):!0===g.timerActive&&(0,g.endTimer)()}),e}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p(),t=document.getElementById("timer");t.childNodes[0].innerHTML=e.title,t.childNodes[1].innerHTML=d(e.time)}function d(e){var t=e%60,n=Math.floor(e/60);return 0===t?n+":00":t<10?n+":0"+t:n+":"+t}Object.defineProperty(t,"__esModule",{value:!0}),t.TimerView=void 0,t.createTimerView=i,t.updateTimerView=o;var a=n(4),u=r(a),c=n(9),s=r(c),l=n(10),m=r(l),g=n(0),p=t.TimerView=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,n=void 0===t?"Pomodoro":t,r=e.time;return{title:n,time:void 0===r?(0,g.Timer)().pomodoro:r}}},function(e,t,n){"use strict";function r(){var e=document.createElement("div");e.setAttribute("id","settingsParent"),e.classList.add(a.default.settingsParent);var t=document.createElement("div");t.setAttribute("id","settingsMenu"),t.classList.add(a.default.settingsMenu,a.default.hidden),t.addEventListener("click",function(e){e.stopPropagation()});var n=document.createElement("button");n.innerHTML="< < <",n.setAttribute("id","settingsToggle"),n.classList.add(a.default.settingsToggle,a.default.toggleWhenMenuHidden),n.addEventListener("click",function(){var e=document.getElementById("settingsMenu");e.classList.contains(a.default.visible)?i("hide"):e.classList.contains(a.default.hidden)&&i("show")});var r=(0,s.createTimeInput)("Pomodoro","25",g,m),o=(0,s.createTimeInput)("Short Break","5",g,m),d=(0,s.createTimeInput)("Long Break","15",g,m);return t.appendChild(r),t.appendChild(o),t.appendChild(d),t.appendChild((0,c.createAlarmPicker)()),t.appendChild((0,u.createTickToggle)()),e.appendChild(n),e.appendChild(t),e}function i(e){var t=document.getElementById("settingsMenu"),n=document.getElementById("settingsToggle");"show"===e?(t.classList.add(a.default.visible),t.classList.remove(a.default.hidden),n.classList.add(a.default.toggleWhenMenuVisible),n.classList.remove(a.default.toggleWhenMenuHidden),n.innerHTML="> > >"):"hide"===e&&(t.classList.remove(a.default.visible),t.classList.add(a.default.hidden),n.classList.remove(a.default.toggleWhenMenuVisible),n.classList.add(a.default.toggleWhenMenuHidden),n.innerHTML="< < <")}function o(e){var t=document.getElementById(e);return t.value<=g?g*l:t.value%1==0&&t.value<m?t.value*l:t.value>=m?m*l:t.value%1!=0?0:void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.createSettingsMenu=r,t.toggleSettingsMenu=i,t.getInputValue=o;var d=n(8),a=function(e){return e&&e.__esModule?e:{default:e}}(d),u=n(3),c=n(13),s=n(15),l=60,m=60,g=1},function(e,t,n){"use strict";function r(){var e=document.createElement("label");e.setAttribute("for","tickToggle"),e.innerHTML="Ticking:";var t=document.createElement("input");return t.setAttribute("type","checkbox"),t.setAttribute("id","tickToggle"),t.checked=!0,e.appendChild(t),e.addEventListener("change",function(){!i()&&o.timerActive?document.getElementById("tick").pause():i&&o.timerActive&&document.getElementById("tick").play()}),e}function i(){return document.getElementById("tickToggle").checked}Object.defineProperty(t,"__esModule",{value:!0}),t.createTickToggle=r,t.tickingIsDesired=i;var o=n(0)},function(e,t,n){e.exports=n.p+"bb4835385d97375e028e9127f3375966.mp3"},function(e,t,n){"use strict";function r(){var e=2*s*Math.PI,t=document.createElement("div");t.setAttribute("id","container"),t.setAttribute("class",d.default.container);var n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.setAttribute("viewBox","0, 0, "+l+", "+l),n.setAttribute("preserveAspectRatio","xMidYMid meet"),n.setAttribute("id","svg"),n.setAttribute("class",d.default.svg);var r=document.createElementNS("http://www.w3.org/2000/svg","circle");r.setAttribute("id","circle"),r.setAttribute("fill","transparent"),r.setAttribute("stroke","orange"),r.setAttribute("stroke-width","5%"),r.setAttribute("r",s),r.setAttribute("cx","50%"),r.setAttribute("cy","50%");var i=document.createElementNS("http://www.w3.org/2000/svg","circle");return i.setAttribute("id","cover-circle"),i.setAttribute("fill","transparent"),i.setAttribute("stroke","lightgrey"),i.setAttribute("stroke-width","5%"),i.setAttribute("r",s),i.setAttribute("cx","50%"),i.setAttribute("cy","50%"),i.setAttribute("stroke-dashoffset",0),i.setAttribute("stroke-dasharray",e),n.appendChild(r),n.appendChild(i),t.appendChild(n),t}function i(e,t){document.getElementById("cover-circle").setAttribute("stroke-dashoffset",-m/e*t)}Object.defineProperty(t,"__esModule",{value:!0}),t.createProgressCircle=r,t.updateProgressCircle=i;var o=n(11),d=function(e){return e&&e.__esModule?e:{default:e}}(o),a=document.documentElement.clientHeight,u=document.documentElement.clientWidth,c=a<u?a:u,s=c/8,l=c/3.8,m=2*s*Math.PI},function(e,t,n){"use strict";var r=n(7),i=(function(e){e&&e.__esModule}(r),n(2)),o=n(1),d=n(0),a=n(5);document.body.appendChild((0,i.createSettingsMenu)()),document.body.appendChild((0,o.createTimerView)()),document.body.appendChild((0,a.createProgressCircle)()),document.body.addEventListener("keydown",function(e){var t=window.getComputedStyle(document.getElementById("settingsMenu")).getPropertyValue("visibility");"Escape"===e.key?"hidden"===t?(0,i.toggleSettingsMenu)("show"):(0,i.toggleSettingsMenu)("hide"):" "!==e.key&&"Spacebar"!==e.key||(!1===d.timerActive?(0,d.beginTimer)():(0,d.endTimer)())}),(0,o.updateTimerView)(),Notification.requestPermission().then()},function(e,t){},function(e,t){e.exports={settingsParent:"_356edOIeS932m41pHoHfBF",settingsToggle:"_3ZfBuasB9PGO0PxamJsD_H",toggleWhenMenuHidden:"TRduShnxvMofQW5dgHiEs",toggleWhenMenuVisible:"_1BnA04vMUxC4I_2IwKiyAS",settingsMenu:"_39oOgQMmzYCsIg51WM1S_w",hidden:"_2nF4Q8fQMK6cpCfEByuoI5",visible:"Gg60CTpiLmw6GOOtxvve0"}},function(e,t,n){e.exports=n.p+"8459dcc6d9d47f85804d22f5f8103bce.ogg"},function(e,t){e.exports={timer:"_2GBRQbYZEkpKAPfsQ5qA7U",title:"_1hget2_IAh_7OHG1eFWSfX"}},function(e,t){e.exports={container:"_3gRYcbyFm7maThkUT9YprY",svg:"_15gEXFF7AYU9aG0K6Ljcji"}},function(e,t,n){e.exports=n.p+"a087267f6cc4629ad70f4de53f2c3291.png"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(){var e=document.createElement("select");e.setAttribute("id","alarmDropdown");var t=document.createElement("option");t.setAttribute("value","Watch Alarm"),t.innerHTML="Watch Alarm";var n=document.createElement("option");return n.setAttribute("value","Gong"),n.innerHTML="Gong",e.appendChild(t),e.appendChild(n),e.addEventListener("change",function(e){"Watch Alarm"===document.getElementById("alarmDropdown").value?o(a.default):"Gong"===document.getElementById("alarmDropdown").value&&o(c.default)}),e}function o(e){document.getElementById("alarm").setAttribute("src",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.createAlarmPicker=i,t.chooseAlarmSound=o;var d=n(4),a=r(d),u=n(14),c=r(u)},function(e,t,n){e.exports=n.p+"ea87cdd814d376170570dc4629c01241.mp3"},function(e,t,n){"use strict";function r(e,t,n,r){var u=document.createElement("input");u.setAttribute("id",e[0].toLowerCase()+e.substr(1).replace(/\s/g,"")+"Input"),u.setAttribute("value",t),u.setAttribute("type","number"),u.setAttribute("min",n),u.setAttribute("max",r),u.onkeydown=function(e){i(e)||e.preventDefault()},u.setAttribute("onpaste","return false");var c=document.createElement("label");return c.innerHTML=e+" Length",c.setAttribute("for",e[0].toLowerCase()+e.substr(1).replace(/\s/g,"")+"Input"),c.appendChild(u),u.addEventListener("input",function(){u.value>r?u.value=r:"0"===u.value.toString().charAt(0)&&u.value>0?u.value=u.value.toString().substr(1):!1===o.timerActive&&u.value>=n&&u.value<=r&&(0,d.updateTimerView)({title:e,time:u.value*a})}),u.addEventListener("change",function(){u.value<n&&(u.value=n)}),c}function i(e){return!!/Enter|Backspace|Tab|ArrowUp|ArrowDown|ArrowRight|ArrowLeft|End|Home|Escape|Delete|[\d]/.test(e.key)}Object.defineProperty(t,"__esModule",{value:!0}),t.createTimeInput=r;var o=n(0),d=n(1),a=60}]);
//# sourceMappingURL=bundle.js.map