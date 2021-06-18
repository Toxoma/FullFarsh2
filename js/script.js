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

   countTimer('18 june 2022');


   //!menu
   const menu = document.querySelector('menu'),
      menuItems = menu.querySelectorAll('ul>li>a'),
      body = document.querySelector('body');

   const toggleMenu = () => {
      const btnMenu = document.querySelector('.menu'),
         closeBtn = document.querySelector('.close-btn');
         
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


      let size = window.innerWidth;

      let sizeIf = () => {

         if (size !== window.innerWidth) {
            size = window.innerWidth;
            btnMenu.removeEventListener('click', event);
            closeMenu();
            sizeIf();
         } else {
            if (size >= 768) {
               btnMenu.addEventListener('click', event);
            }
         }
      };


      window.addEventListener('resize', sizeIf);

      window.addEventListener('load', sizeIf);


      closeBtn.addEventListener('click', closeMenu);
      menuItems.forEach(elem => elem.addEventListener('click', closeMenu));

   };
   

    toggleMenu();
   

   //!popup
   const togglePopUp = () => {

      const popup = document.querySelector('.popup'),
         popupContent = document.querySelector('.popup-content'),
         popupBtns = document.querySelectorAll('.popup-btn'),
         popupClose = document.querySelector('.popup-close');
      
      popupContent.style.transition = '1s';
      popup.style.display = 'block';
      popup.style.transform = 'translateY(-100%)';
      popupContent.style.transform = 'translateX(-100%)';
   

      popupBtns.forEach(btn => btn.addEventListener('click', () => {
         popupContent.style.transform = 'translateX(0%)';
         popup.style.transform = 'translateY(0%)';
      }));

      popupClose.addEventListener('click', () => {
         popup.style.transform = 'translateY(-100%)';
         popupContent.style.transform = 'translateX(-100%)';
      });

   };

   togglePopUp();


   //!scroll
   const scrollImg = document.querySelector('main>a>img'),
       blocks = document.querySelectorAll('body>div[id]:not(#companies)');
   //825

   let findScroll = function(value) {


      let count = document.documentElement.scrollTop,
         scrollInterval;
      
      let animateScroll = () => {
         scrollInterval = requestAnimationFrame(animateScroll);
         if (count < value.offsetTop) {
            count += 40;
            document.documentElement.scrollTop = count;
         } else {
            cancelAnimationFrame(scrollInterval);
         }
      };

      scrollInterval = requestAnimationFrame(animateScroll);

   };

   scrollImg.addEventListener('click', findScroll.bind(null,blocks[0]));
   
   for (let index = 0; index < 5; index++) {
      menuItems[index].addEventListener('click', findScroll.bind(null, blocks[index]));
   }

});


