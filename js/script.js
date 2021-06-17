/* eslint-disable */

window.addEventListener('DOMContentLoaded', () => {
   'use strict';

   //!timer
   function countTimer(deadline) {
      const timerHours = document.querySelector('#timer-hours'),
         timerMinutes = document.querySelector('#timer-minutes'),
         timerSeconds = document.querySelector('#timer-seconds');

      function getTimeRemaining() {
         const dateNow = new Date().getTime(),
            dateStop = new Date(deadline).getTime(),
            timeRemaining = (dateStop - dateNow) / 1000;
         let seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);

         function putZero(value) {
            value += '';

            if (value.length < 2) {
               value = '0' + value;
            }

            return value;
         }

         hours = putZero(hours);
         minutes = putZero(minutes);
         seconds = putZero(seconds);

         return { timeRemaining, seconds, minutes, hours };
      }

      let interval;

      function updateClock() {
         const timer = getTimeRemaining();
         timerHours.textContent = timer.hours;
         timerMinutes.textContent = timer.minutes;
         timerSeconds.textContent = timer.seconds;

         if (timer.timeRemaining <= 0) {
            clearInterval(interval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
         }
      }

      interval = setInterval(updateClock, 1000);
   }

   countTimer('18 june 2021');


   //!menu
   
   
   const toggleMenu = () => {
      const btnMenu = document.querySelector('.menu'),
         menu = document.querySelector('menu'),
         closeBtn = document.querySelector('.close-btn'),
         menuItems = menu.querySelectorAll('ul>li>a');
      
        let count=-50,
       intervalMenu;

      let handlerAnimate = () => {
        intervalMenu = requestAnimationFrame(handlerAnimate);
         if (count < 0) {
            count++;
            menu.style.transform = `translate(${count*2}%)`;
         } else {
            cancelAnimationFrame(intervalMenu);
         }
      };

      let closeMenu = () => {
         menu.style.transform = `translate(-100%)`;
         count = -50;
      };

      let event = () => {
         if (menu.style.transform && menu.style.transform === `translate(0%)`) {
            closeMenu();
         } else {
            intervalMenu = requestAnimationFrame(handlerAnimate);
         }
      };

      btnMenu.addEventListener('click', event);

      closeBtn.addEventListener('click', closeMenu);
      menuItems.forEach(elem => elem.addEventListener('click', closeMenu));

   };
   
   if (document.documentElement.clientWidth >= 768) {
    toggleMenu();
   }





   //!popup
   const togglePopUp = () => {
      const popup = document.querySelector('.popup'),
         popupBtns = document.querySelectorAll('.popup-btn'),
         popupClose = document.querySelector('.popup-close');

      popupBtns.forEach(btn => btn.addEventListener('click', () => {
         popup.style.display = 'block';
      }));

      popupClose.addEventListener('click', () => {
         popup.style.display = 'none';
      });
   };

   togglePopUp();


   
});


