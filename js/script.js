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
      const btnMenu = document.querySelector('.menu');
         
      let count = -50,
         intervalMenu,
         menuFlag = false;

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
         menuFlag = false;
         cancelAnimationFrame(intervalMenu);
      };

      let eventAnim = () => {
            if (menu.style.transform && menu.style.transform === `translate(0%)`) {
               closeMenu();
            } else {
               intervalMenu = requestAnimationFrame(handlerAnimate);
            }
      };
      let eventWithoutAnim = () => {
            if (menu.style.transform && menu.style.transform === `translate(0%)`) {
               closeMenu();
            } else {
               menu.style.transform = `translate(0%)`;
               count = -50;
         }
      };

      let selectPart = (e,animationFlag) => {
         let target = e.target;

         if (target.closest('.menu')) {
            menuFlag = true;

            if (animationFlag) {
               eventAnim();
            } else {
               eventWithoutAnim();
            }
         } else {

            if (target.closest('menu') && target.closest('A') || !target.closest('menu') && menuFlag) {
               closeMenu();
            }
         }

      };

      let animetionEvent = (e) => {
         selectPart(e, true);
      };

      let noAnimetionEvent = (e) => {
         selectPart(e, false);
      };

      let timoutsMenu = [];

      let sizeMenu = () => {
         timoutsMenu.push(setTimeout(() => {
            timoutsMenu.forEach(item => clearTimeout(item));

            if (window.innerWidth >= 768) {
               body.addEventListener('click', animetionEvent);
               body.removeEventListener('click', noAnimetionEvent);
            } else {
               body.addEventListener('click', noAnimetionEvent);
               body.removeEventListener('click', animetionEvent);
            }
         }, 500));
      };

      window.addEventListener('resize', sizeMenu);
      window.addEventListener('load', sizeMenu);
   };
   
    toggleMenu();
   

   //!popup
   const togglePopUp = () => {

      const popup = document.querySelector('.popup'),
         popupContent = document.querySelector('.popup-content'),
         popupBtns = document.querySelectorAll('.popup-btn');
      
      popup.style.display = 'block';
      popup.style.transform = 'translateY(-100%)';
      popupContent.style.transform = 'translateX(-100%)';

      let popupTransition = (value) => {
         popupContent.style.transition = `${value}`;

         popupBtns.forEach(btn => btn.addEventListener('click', () => {
            popupContent.style.transform = 'translateX(0%)';
            popup.style.transform = 'translateY(0%)';
         }));
      };

      let timoutsPopup = [];
      let sizePopup= () => {
         timoutsPopup.push(setTimeout(() => {
            timoutsPopup.forEach(item => clearTimeout(item));
            
            if (window.innerWidth >= 768) {
         popupTransition('1s');
      } else {
         popupTransition('');
      }
         }, 500));
      };

      sizePopup();
      window.addEventListener('resize', sizePopup);

      popup.addEventListener('click', (e) => {
         let target = e.target;

         const close = () => {
            popup.style.transform = 'translateY(-100%)';
            popupContent.style.transform = 'translateX(-100%)';
         };

         if (target.classList.contains('popup-close')) {
            close();
         } else {
            target = target.closest('.popup-content');
            if (!target) {
              close();
            }
         }
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

   //! табы
   const tabs = () => {
      
      const tabHeader = document.querySelector('.service-header'),
         tab = tabHeader.querySelectorAll('.service-header-tab'),
         tabContent = document.querySelectorAll('.service-tab');
      
      const toggleTabContent = (index) => {
         for (let i = 0; i < tabContent.length; i++){
            if (index === i) {
               tab[i].classList.add('active');
               tabContent[i].classList.remove('d-none');
            } else {
               tab[i].classList.remove('active');
               tabContent[i].classList.add('d-none');
            }
         }
      };
      
      tabHeader.addEventListener('click', (e) => {
         let target = e.target;
         target = target.closest('.service-header-tab');

         if (target.classList.contains('service-header-tab')) {
               
               tab.forEach((item, index) => {

                  if (item ===target) {
                     toggleTabContent(index);
                  }

               });
            
            }
         
      });
   };

   tabs();

   //!slaider

   const slider = () => {
      const slide = document.querySelectorAll('.portfolio-item'),
         slider = document.querySelector('.portfolio-content'),
         portfolioDots = document.querySelector('.portfolio-dots');

      let currentSlide = 0,
         interval,
         dots;

      const prevSlide = (elem, index, strClass) => {
         elem[index].classList.remove(strClass);
      };

      const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
      };

      const autoPlaySlide = () => {
         prevSlide(slide, currentSlide, 'portfolio-item-active');
         prevSlide(dots, currentSlide, 'dot-active');
         currentSlide++;

         if (currentSlide>=slide.length) {
            currentSlide = 0;
         }

         nextSlide(slide, currentSlide, 'portfolio-item-active');
         nextSlide(dots, currentSlide, 'dot-active');
      };

      const startSlide = (time=3000) => {
        interval= setInterval(autoPlaySlide, time);
      };

      const stopSlide = () => {
         clearInterval(interval);
      };

      slider.addEventListener('click', (e) => {
         e.preventDefault();
         let target = e.target;

         if (!target.matches('.portfolio-btn, .dot')) {
            return;
         }

         prevSlide(slide, currentSlide, 'portfolio-item-active');
         prevSlide(dots, currentSlide, 'dot-active');

         if (target.matches('#arrow-right')) {
            currentSlide ++;
         } else if (target.matches('#arrow-left')) {
            currentSlide --;
         } else if (target.matches('.dot')) {
            dots.forEach((elem, index) => {
               if (elem===target) {
                  currentSlide = index;
               }
            });
         }

         if (currentSlide>=slide.length) {
            currentSlide = 0;
         }
         if (currentSlide<0) {
            currentSlide = slide.length-1;
         }

         nextSlide(slide, currentSlide, 'portfolio-item-active');
         nextSlide(dots, currentSlide, 'dot-active');

      });

      slider.addEventListener('mouseover', (e) => {
         if (e.target.matches('.portfolio-btn, .dot')) {
            stopSlide();
         }
      });
      slider.addEventListener('mouseout', (e) => {
         if (e.target.matches('.portfolio-btn, .dot')) {
            startSlide();
         }
      });

      const addDots = () => {
         for (let i = 0; i < slide.length; i++) {
            let li = document.createElement('li');
            li.classList.add('dot');
            if (i===0) {
               li.classList.add('dot-active');
            }
            portfolioDots.append(li);
            
         }

         dots = document.querySelectorAll('.dot');
      };

      addDots();

      startSlide(1500);
   };

   slider();

});


