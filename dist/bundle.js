/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var t,n,o,r,a,c,i,l,s,u,m,d,f,v,p,y,h,g,L,E,q,S,A;n=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),r=document.querySelector("#timer-seconds"),t=setInterval((function(){var e=function(){var e=(new Date).getTime(),t=(new Date("18 june 2023").getTime()-e)/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60),r=Math.floor(t/60/60);function a(e){return(e+="").length<2&&(e="0"+e),e}return r=a(r),o=a(o),{timeRemaining:t,seconds:n=a(n),minutes:o,hours:r}}();n.textContent=e.hours,o.textContent=e.minutes,r.textContent=e.seconds,e.timeRemaining<=0&&(clearInterval(t),n.textContent="00",o.textContent="00",r.textContent="00")}),1e3),(f=document.querySelector("menu")).querySelectorAll("ul>li>a"),v=document.querySelector("body"),document.querySelector(".menu"),p=-50,y=!1,h=function e(){d=requestAnimationFrame(e),p<0?(p++,f.style.transform="translate(".concat(2*p,"%)")):cancelAnimationFrame(d)},g=function(){f.style.transform="translate(-100%)",p=-50,y=!1,cancelAnimationFrame(d)},L=function(e,t){var n=e.target;n.closest(".menu")?(y=!0,t?f.style.transform&&"translate(0%)"===f.style.transform?g():d=requestAnimationFrame(h):f.style.transform&&"translate(0%)"===f.style.transform?g():(f.style.transform="translate(0%)",p=-50)):(n.closest("menu")&&n.closest("A")||!n.closest("menu")&&y)&&g()},E=function(e){L(e,!0)},q=function(e){L(e,!1)},S=[],A=function(){S.push(setTimeout((function(){S.forEach((function(e){return clearTimeout(e)})),window.innerWidth>=768?(v.addEventListener("click",E),v.removeEventListener("click",q)):(v.addEventListener("click",q),v.removeEventListener("click",E))}),500))},window.addEventListener("resize",A),window.addEventListener("load",A),function(){var e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),n=document.querySelectorAll(".popup-btn");e.style.display="block",e.style.transform="translateY(-100%)",t.style.transform="translateX(-100%)";var o=function(o){t.style.transition="".concat(o),n.forEach((function(n){return n.addEventListener("click",(function(){t.style.transform="translateX(0%)",e.style.transform="translateY(0%)"}))}))},r=[],a=function(){r.push(setTimeout((function(){r.forEach((function(e){return clearTimeout(e)})),console.log(window.innerWidth),window.innerWidth>=768?o("1s"):o("")}),500))};a(),window.addEventListener("resize",a),e.addEventListener("click",(function(n){var o=n.target,r=function(){e.style.transform="translateY(-100%)",t.style.transform="translateX(-100%)"};o.classList.contains("popup-close")?r():(o=o.closest(".popup-content"))||r()}))}(),function(){var e=document.querySelector("main>a>img"),t=document.querySelectorAll("body>div[id]:not(#companies)"),n=document.querySelector("menu").querySelectorAll("ul>li>a"),o=function(e){var t,n=document.documentElement.scrollTop;t=requestAnimationFrame((function o(){t=requestAnimationFrame(o),n<e.offsetTop?(n+=40,document.documentElement.scrollTop=n):cancelAnimationFrame(t)}))};e.addEventListener("click",o.bind(null,t[0]));for(var r=0;r<n.length;r++)n[r].addEventListener("click",o.bind(null,t[r]))}(),s=document.querySelector(".service-header"),u=s.querySelectorAll(".service-header-tab"),m=document.querySelectorAll(".service-tab"),s.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab")).classList.contains("service-header-tab")&&u.forEach((function(e,n){e===t&&function(e){for(var t=0;t<m.length;t++)e===t?(u[t].classList.add("active"),m[t].classList.remove("d-none")):(u[t].classList.remove("active"),m[t].classList.add("d-none"))}(n)}))})),function(){var e,t,n=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-content"),r=document.querySelector(".portfolio-dots"),a=0,c=function(e,t,n){e[t].classList.remove(n)},i=function(e,t,n){e[t].classList.add(n)},l=function(){c(n,a,"portfolio-item-active"),c(t,a,"dot-active"),++a>=n.length&&(a=0),i(n,a,"portfolio-item-active"),i(t,a,"dot-active")},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(l,t)};o.addEventListener("click",(function(e){e.preventDefault();var o=e.target;o.matches(".portfolio-btn, .dot")&&(c(n,a,"portfolio-item-active"),c(t,a,"dot-active"),o.matches("#arrow-right")?a++:o.matches("#arrow-left")?a--:o.matches(".dot")&&t.forEach((function(e,t){e===o&&(a=t)})),a>=n.length&&(a=0),a<0&&(a=n.length-1),i(n,a,"portfolio-item-active"),i(t,a,"dot-active"))})),o.addEventListener("mouseover",(function(t){t.target.matches(".portfolio-btn, .dot")&&clearInterval(e)})),o.addEventListener("mouseout",(function(e){e.target.matches(".portfolio-btn, .dot")&&s()})),function(){for(var e=0;e<n.length;e++){var o=document.createElement("li");o.classList.add("dot"),0===e&&o.classList.add("dot-active"),r.append(o)}t=document.querySelectorAll(".dot")}(),s(1500)}(),i=document.getElementById("command"),l=document.querySelector(".calc-block"),i.addEventListener("mouseover",(function(e){var t=e.target;t.matches(".command__photo")&&(t.dataset.first=t.src,t.src=t.dataset.img)})),i.addEventListener("mouseout",(function(e){var t=e.target;t.matches(".command__photo")&&(t.src=t.dataset.first,t.removeAttribute("data-first"))})),l.addEventListener("input",(function(e){var t=e.target;t.matches("INPUT")&&(t.value=t.value.replace(/\D/,""))})),function(){var e=document.querySelector("body");e.addEventListener("input",(function(e){var t=e.target;"insertFromPaste"!==e.inputType?t.matches("#form2-name,#form1-name")?t.value=t.value.replace(/[^а-я\s\-]/i,""):t.matches("#form2-email,#form1-email")?t.value=t.value.replace(/[^a-z\@\-\_\.\!\~\*\']/gi,""):t.matches("#form2-phone,#form1-phone")?t.value=t.value.replace(/[^\d\+]/g,""):t.value=t.value.replace(/[^а-я\s\d\.\,\?\!\;\:\(\)\"\-]/i,""):t.value=""})),e.addEventListener("focusout",(function(e){var t=e.target;if(t.value&&(t.matches("#form2-name,#form2-message,#form1-name")?(t.value=t.value.replace(/^\s+|\s+$/g,""),t.value=t.value.replace(/\s{2,}/g," ")):t.matches("#form2-email,#form1-email")&&(t.value=t.value.replace(/^\-+|\-+$/g,""),t.value=t.value.replace(/\-{2,}/g,"-")),t.matches("#form2-name,#form1-name")&&t.value)){var n=t.value;(n=n.split(" ")).forEach((function(e,t){return n[t]=e[0].toUpperCase()+e.substring(1).toLowerCase()})),n=n.join(" "),t.value=n}}))}(),function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),r=document.querySelector(".calc-day"),a=document.getElementById("total"),c=document.querySelector(".calc-count"),i=document.querySelector(".calc-square"),l=function(t,n){cancelAnimationFrame(e),e=requestAnimationFrame((function o(){e=requestAnimationFrame(o),n?t!==n?(t<n&&n-t>200?(console.log(1),t=+t+100):t<n&&n-t>20?(console.log(2),t=+t+10):t<n&&n-t<=20?(console.log(3),t++):t>n&&t-n>200?(console.log(1),t-=100):t>n&&t-n>20?(console.log(2),t-=10):t>n&&t-n<=20&&(console.log(3),t--),a.textContent=t):cancelAnimationFrame(e):a.textContent=0}))},s=function(){var e=0,n=1,s=1,u=o.options[o.selectedIndex].value,m=+i.value;c.value>1&&(n+=(c.value-1)/10),r.value&&r.value<5?s*=2:r.value&&r.value<10&&(s*=1.5),u&&m&&(e=t*u*m*n*s),l(a.textContent,e)};n.addEventListener("change",(function(e){e.target.matches(".calc-type, .calc-day, .calc-count, .calc-square")&&s()}))}(100),a=document.querySelectorAll("form"),c=document.createElement("div"),a.forEach((function(t){t.addEventListener("submit",(function(n){if(n.preventDefault(),!(l=t.elements,function(t){if(Array.isArray(t))return e(t)}(l)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(l)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(l)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).find((function(e){return e.matches(".error")}))){c&&(c.textContent=""),c.classList.remove("loadIconText"),c.classList.add("sk-fading-circle");for(var o=1;o<13;o++){var r=document.createElement("div");r.classList.add("sk-circle"),r.classList.add("sk-circle-".concat(o)),c.insertAdjacentElement("beforeend",r)}t.appendChild(c);var a=new FormData(t),i={};a.forEach((function(e,t){i[t]=e})),function(e,t,n,o){var r=new XMLHttpRequest;r.addEventListener("readystatechange",(function(){var e;4===r.readyState&&(c.classList.remove("sk-fading-circle"),c.classList.add("loadIconText"),200===r.status?c.textContent="Спасибо! Скоро рассмотрим вашу заявку!":(e=r.status,c.textContent="Ой что-то пошло не так!",console.error(e)),function(e){e.querySelectorAll("input").forEach((function(e){e.value="",e.classList.remove("success")}))}(o),setTimeout((function(){c.textContent=""}),3e3))})),r.open("POST","./server.php"),r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify(e))}(i,0,0,t)}var l}))}))})();