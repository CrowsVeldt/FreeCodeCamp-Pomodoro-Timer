!function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,o){"use strict";function r(e){try{var t=window[e],o="__storage_test__";return t.setItem(o,o),t.removeItem(o),!0}catch(t){var r=window[e];return t instanceof DOMException&&(22===t.code||1014===t.code||"QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&0!==r.length}}function n(){!0===document.getElementById("storageToggle").checked?(window.localStorage.setItem("pomodoro",document.getElementById("pomodoroInput").value),window.localStorage.setItem("shortBreak",document.getElementById("shortBreakInput").value),window.localStorage.setItem("longBreak",document.getElementById("longBreakInput").value),window.localStorage.setItem("alarm",document.getElementById("alarmDropdown").value),window.localStorage.setItem("ticking",document.getElementById("tickToggle").checked)):i()}function i(){window.localStorage.clear()}function a(){var e=window.localStorage.getItem("pomodoro"),t=window.localStorage.getItem("shortBreak"),o=window.localStorage.getItem("longBreak"),r=window.localStorage.getItem("alarm"),n=window.localStorage.getItem("ticking");document.getElementById("pomodoroInput").value=e,document.getElementById("shortBreakInput").value=t,document.getElementById("longBreakInput").value=o,document.getElementById("alarmDropdown").value=r,document.getElementById("tickToggle").checked="true"===n,document.getElementById("storageToggle").checked=!0}Object.defineProperty(t,"__esModule",{value:!0}),t.storageAvailable=r,t.populateStorage=n,t.emptyStorage=i,t.getStoredSettings=a},function(e,t,o){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b(),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,u.TimerView)();t.timerActive=p=!0,v=setTimeout(i,1e3,e,o),(0,l.toggleSettingsMenu)("hide"),(0,s.updateProgressCircle)(0,0),(0,u.updateTimerView)(o);var r=document.getElementById("tick");(0,c.tickingIsDesired)()&&r.play()}function n(){t.timerActive=p=!1,clearTimeout(v),(0,l.toggleSettingsMenu)("show"),(0,u.updateTimerView)(),(0,s.updateProgressCircle)(0,0),document.getElementById("tick").pause()}function i(e,t){var o=(new Date).getTime();e.timeLeft--,(0,u.updateTimerView)((0,u.TimerView)({title:t.title,time:e.timeLeft}));var r=(e.endTime-e.startTime)/1e3;(0,s.updateProgressCircle)(r,r-e.timeLeft),o>=e.endTime?a(e):v=setTimeout(i,1e3,e,t)}function a(e){var t=(new Date).getTime();if(null!==document.getElementById("alarm")){document.getElementById("alarm").play()}if("pomodoro"===e.currentActivity&&e.pomodoroCount<3){var o=t+e.shortBreak*f;d("You finished, Take a short break!","Short Break Started"),r(b({pomodoro:e.pomodoro,shortBreak:e.shortBreak,longBreak:e.longBreak,pomodoroCount:e.pomodoroCount+1,currentActivity:"shortBreak",endTime:o,timeLeft:e.shortBreak}),(0,u.TimerView)({title:"Short Break",time:e.shortBreak}))}else if("pomodoro"===e.currentActivity&&e.pomodoroCount>=3){var n=t+e.longBreak*f;d("Four in a row! Take a long one, dude.","Long Break Started"),r(b({pomodoro:e.pomodoro,shortBreak:e.shortBreak,longBreak:e.longBreak,pomodoroCount:0,currentActivity:"longBreak",endTime:n,timeLeft:e.longBreak}),(0,u.TimerView)({title:"Long Break",time:e.longBreak}))}else{var i=t+e.pomodoro*f;d("Recharged a bit? Good! Pick something new and go get 'em!","Pomodoro Started"),r(b({pomodoro:e.pomodoro,shortBreak:e.shortBreak,longBreak:e.longBreak,pomodoroCount:e.pomodoroCount,endTime:i,timeLeft:e.pomodoro}),(0,u.TimerView)({title:"Pomodoro",time:e.pomodoro}))}}function d(e,t){var o={body:e,icon:g.default},r=new Notification(t,o);setTimeout(r.close.bind(r),7e3),r.onclick=function(e){if(null!==document.getElementById("alarm")){document.getElementById("alarm").pause()}}}Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=t.timerActive=void 0,t.beginTimer=r,t.endTimer=n;var u=o(2),l=o(3),c=o(4),s=o(6),m=o(13),g=function(e){return e&&e.__esModule?e:{default:e}}(m),p=t.timerActive=!1,v=0,f=1e3,b=t.Timer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.startTime,o=void 0===t?(new Date).getTime():t,r=e.pomodoro,n=void 0===r?(0,l.getInputValue)("pomodoroInput"):r,i=e.shortBreak,a=void 0===i?(0,l.getInputValue)("shortBreakInput"):i,d=e.longBreak,u=void 0===d?(0,l.getInputValue)("longBreakInput"):d,c=e.pomodoroCount,s=void 0===c?0:c,m=e.currentActivity,g=void 0===m?"pomodoro":m,p=e.endTime,v=void 0===p?o+n*f:p,b=e.timeLeft;return{startTime:o,pomodoro:n,shortBreak:a,longBreak:u,pomodoroCount:s,currentActivity:g,endTime:v,timeLeft:void 0===b?n:b}}},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(){var e=document.createElement("div");e.setAttribute("id","timer");var t=document.createElement("label");t.setAttribute("for","timer"),t.setAttribute("class",m.default.title);var o=document.createElement("p"),r=document.createElement("audio");r.setAttribute("src",u.default),r.setAttribute("id","alarm");var n=document.createElement("audio");return n.setAttribute("src",c.default),n.setAttribute("id","tick"),n.setAttribute("loop",!0),e.appendChild(t),e.appendChild(o),e.appendChild(r),e.appendChild(n),e.classList.add(m.default.timer),e.addEventListener("click",function(){!1===g.timerActive?(0,g.beginTimer)((0,g.Timer)(),p()):!0===g.timerActive&&(0,g.endTimer)()}),e}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p(),t=document.getElementById("timer");t.childNodes[0].innerHTML=e.title,t.childNodes[1].innerHTML=a(e.time)}function a(e){var t=e%60,o=Math.floor(e/60);return 0===t?o+":00":t<10?o+":0"+t:o+":"+t}Object.defineProperty(t,"__esModule",{value:!0}),t.TimerView=void 0,t.createTimerView=n,t.updateTimerView=i;var d=o(5),u=r(d),l=o(10),c=r(l),s=o(11),m=r(s),g=o(1),p=t.TimerView=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.title,o=void 0===t?"Pomodoro":t,r=e.time;return{title:o,time:void 0===r?(0,g.Timer)().pomodoro:r}}},function(e,t,o){"use strict";function r(){var e=document.createElement("div");e.setAttribute("id","settingsParent"),e.classList.add(d.default.settingsParent);var t=document.createElement("div");t.setAttribute("id","settingsMenu"),t.classList.add(d.default.settingsMenu,d.default.visible),t.addEventListener("click",function(e){e.stopPropagation()});var o=document.createElement("button");o.innerHTML="< < <",o.setAttribute("id","settingsToggle"),o.classList.add(d.default.settingsToggle,d.default.toggleWhenMenuVisible),o.addEventListener("click",function(){var e=document.getElementById("settingsMenu");e.classList.contains(d.default.visible)?n("hide"):e.classList.contains(d.default.hidden)&&n("show")});var r=(0,c.createTimeInput)("Pomodoro","25",p,g),i=(0,c.createTimeInput)("Short Break","5",p,g),a=(0,c.createTimeInput)("Long Break","15",p,g);return t.appendChild(r),t.appendChild(i),t.appendChild(a),t.appendChild((0,l.createAlarmPicker)()),t.appendChild((0,u.createTickToggle)()),t.appendChild((0,s.createStorageToggle)()),e.appendChild(o),e.appendChild(t),e}function n(e){var t=document.getElementById("settingsMenu"),o=document.getElementById("settingsToggle");"show"===e?(t.classList.add(d.default.visible),t.classList.remove(d.default.hidden),o.classList.add(d.default.toggleWhenMenuVisible),o.classList.remove(d.default.toggleWhenMenuHidden),o.innerHTML="> > >"):"hide"===e&&(t.classList.remove(d.default.visible),t.classList.add(d.default.hidden),o.classList.remove(d.default.toggleWhenMenuVisible),o.classList.add(d.default.toggleWhenMenuHidden),o.innerHTML="< < <")}function i(e){var t=document.getElementById(e);return t.value<=p?p*m:t.value%1==0&&t.value<g?t.value*m:t.value>=g?g*m:t.value%1!=0?0:void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.createSettingsMenu=r,t.toggleSettingsMenu=n,t.getInputValue=i;var a=o(9),d=function(e){return e&&e.__esModule?e:{default:e}}(a),u=o(4),l=o(14),c=o(16),s=o(17),m=60,g=60,p=1},function(e,t,o){"use strict";function r(){var e=document.createElement("label");e.setAttribute("for","tickToggle"),e.innerHTML="Ticking:";var t=document.createElement("input");return t.setAttribute("type","checkbox"),t.setAttribute("id","tickToggle"),e.appendChild(t),e.addEventListener("change",function(){!n()&&i.timerActive?document.getElementById("tick").pause():n&&i.timerActive&&document.getElementById("tick").play(),(0,a.storageAvailable)("localStorage")&&window.localStorage.getItem("pomodoro")&&(0,a.populateStorage)()}),e}function n(){return document.getElementById("tickToggle").checked}Object.defineProperty(t,"__esModule",{value:!0}),t.createTickToggle=r,t.tickingIsDesired=n;var i=o(1),a=o(0)},function(e,t,o){e.exports=o.p+"bb4835385d97375e028e9127f3375966.mp3"},function(e,t,o){"use strict";function r(){var e=2*c*Math.PI,t=document.createElement("div");t.setAttribute("id","container"),t.setAttribute("class",a.default.container);var o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.setAttribute("viewBox","0, 0, "+s+", "+s),o.setAttribute("preserveAspectRatio","xMidYMid meet"),o.setAttribute("id","svg"),o.setAttribute("class",a.default.svg);var r=document.createElementNS("http://www.w3.org/2000/svg","circle");r.setAttribute("id","circle"),r.setAttribute("fill","transparent"),r.setAttribute("stroke","orange"),r.setAttribute("stroke-width","5%"),r.setAttribute("r",c),r.setAttribute("cx","50%"),r.setAttribute("cy","50%");var n=document.createElementNS("http://www.w3.org/2000/svg","circle");return n.setAttribute("id","cover-circle"),n.setAttribute("fill","transparent"),n.setAttribute("stroke","lightgrey"),n.setAttribute("stroke-width","5%"),n.setAttribute("r",c),n.setAttribute("cx","50%"),n.setAttribute("cy","50%"),n.setAttribute("stroke-dashoffset",0),n.setAttribute("stroke-dasharray",e),o.appendChild(r),o.appendChild(n),t.appendChild(o),t}function n(e,t){document.getElementById("cover-circle").setAttribute("stroke-dashoffset",-m/e*t)}Object.defineProperty(t,"__esModule",{value:!0}),t.createProgressCircle=r,t.updateProgressCircle=n;var i=o(12),a=function(e){return e&&e.__esModule?e:{default:e}}(i),d=document.documentElement.clientHeight,u=document.documentElement.clientWidth,l=d<u?d:u,c=l/8,s=l/3.8,m=2*c*Math.PI},function(e,t,o){"use strict";var r=o(8),n=(function(e){e&&e.__esModule}(r),o(0)),i=o(3),a=o(2),d=o(1),u=o(6);document.body.appendChild((0,i.createSettingsMenu)()),(0,n.storageAvailable)("localStorage")&&window.localStorage.getItem("pomodoro")&&(0,n.getStoredSettings)(),document.body.appendChild((0,a.createTimerView)()),document.body.appendChild((0,u.createProgressCircle)()),document.body.addEventListener("keydown",function(e){var t=window.getComputedStyle(document.getElementById("settingsMenu")).getPropertyValue("visibility");"Escape"===e.key?"hidden"===t?(0,i.toggleSettingsMenu)("show"):(0,i.toggleSettingsMenu)("hide"):" "!==e.key&&"Spacebar"!==e.key||(!1===d.timerActive?(0,d.beginTimer)():(0,d.endTimer)())}),(0,a.updateTimerView)(),Notification.requestPermission().then()},function(e,t){},function(e,t){e.exports={settingsParent:"_356edOIeS932m41pHoHfBF",settingsToggle:"_3ZfBuasB9PGO0PxamJsD_H",toggleWhenMenuHidden:"TRduShnxvMofQW5dgHiEs",toggleWhenMenuVisible:"_1BnA04vMUxC4I_2IwKiyAS",settingsMenu:"_39oOgQMmzYCsIg51WM1S_w",hidden:"_2nF4Q8fQMK6cpCfEByuoI5",visible:"Gg60CTpiLmw6GOOtxvve0"}},function(e,t,o){e.exports=o.p+"8459dcc6d9d47f85804d22f5f8103bce.ogg"},function(e,t){e.exports={timer:"_2GBRQbYZEkpKAPfsQ5qA7U",title:"_1hget2_IAh_7OHG1eFWSfX"}},function(e,t){e.exports={container:"_3gRYcbyFm7maThkUT9YprY",svg:"_15gEXFF7AYU9aG0K6Ljcji"}},function(e,t,o){e.exports=o.p+"9f0babc918ebabc77bba3fc6e61e7747.png"},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(){var e=document.createElement("select");e.setAttribute("id","alarmDropdown");var t=document.createElement("option");t.setAttribute("value","Watch Alarm"),t.innerHTML="Watch Alarm";var o=document.createElement("option");return o.setAttribute("value","Gong"),o.innerHTML="Gong",e.appendChild(t),e.appendChild(o),e.addEventListener("change",function(e){"Watch Alarm"===document.getElementById("alarmDropdown").value?i(d.default):"Gong"===document.getElementById("alarmDropdown").value&&i(l.default),(0,c.storageAvailable)("localStorage")&&window.localStorage.getItem("pomodoro")&&(0,c.populateStorage)()}),e}function i(e){document.getElementById("alarm").setAttribute("src",e)}Object.defineProperty(t,"__esModule",{value:!0}),t.createAlarmPicker=n,t.chooseAlarmSound=i;var a=o(5),d=r(a),u=o(15),l=r(u),c=o(0)},function(e,t,o){e.exports=o.p+"ea87cdd814d376170570dc4629c01241.mp3"},function(e,t,o){"use strict";function r(e,t,o,r){var l=document.createElement("input");l.setAttribute("id",e[0].toLowerCase()+e.substr(1).replace(/\s/g,"")+"Input"),l.setAttribute("value",t),l.setAttribute("type","number"),l.setAttribute("min",o),l.setAttribute("max",r),l.onkeydown=function(e){n(e)||e.preventDefault()},l.setAttribute("onpaste","return false");var c=document.createElement("label");return c.innerHTML=e+" Length",c.setAttribute("for",e[0].toLowerCase()+e.substr(1).replace(/\s/g,"")+"Input"),c.appendChild(l),l.addEventListener("input",function(){l.value>r?l.value=r:"0"===l.value.toString().charAt(0)&&l.value>0?l.value=l.value.toString().substr(1):!1===i.timerActive&&l.value>=o&&l.value<=r&&(0,d.updateTimerView)({title:e,time:l.value*u})}),l.addEventListener("change",function(){l.value<o&&(l.value=o),(0,a.storageAvailable)("localStorage")&&window.localStorage.getItem("pomodoro")&&(0,a.populateStorage)()}),c}function n(e){return!!/Enter|Backspace|Tab|ArrowUp|ArrowDown|ArrowRight|ArrowLeft|End|Home|Escape|Delete|[\d]/.test(e.key)}Object.defineProperty(t,"__esModule",{value:!0}),t.createTimeInput=r;var i=o(1),a=o(0),d=o(2),u=60},function(e,t,o){"use strict";function r(){var e=document.createElement("label");e.setAttribute("for","storageToggle"),e.innerHTML="Save settings locally?";var t=document.createElement("input");return t.setAttribute("type","checkbox"),t.setAttribute("id","storageToggle"),t.addEventListener("change",function(){(0,n.populateStorage)()}),(0,n.storageAvailable)("localStorage")||(t.disabled="disabled",t.indeterminate=!0),e.appendChild(t),e}Object.defineProperty(t,"__esModule",{value:!0}),t.createStorageToggle=r;var n=o(0)}]);
//# sourceMappingURL=bundle.js.map