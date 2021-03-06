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

         return {
            timeRemaining,
            seconds,
            minutes,
            hours
         };
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

      let selectPart = (e, animationFlag) => {
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
      let sizePopup = () => {
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

   let findScroll = function (value) {


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

   scrollImg.addEventListener('click', findScroll.bind(null, blocks[0]));

   for (let index = 0; index < menuItems.length; index++) {
      menuItems[index].addEventListener('click', findScroll.bind(null, blocks[index]));
   }

   //! ????????
   const tabs = () => {

      const tabHeader = document.querySelector('.service-header'),
         tab = tabHeader.querySelectorAll('.service-header-tab'),
         tabContent = document.querySelectorAll('.service-tab');

      const toggleTabContent = (index) => {
         for (let i = 0; i < tabContent.length; i++) {
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

               if (item === target) {
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

         if (currentSlide >= slide.length) {
            currentSlide = 0;
         }

         nextSlide(slide, currentSlide, 'portfolio-item-active');
         nextSlide(dots, currentSlide, 'dot-active');
      };

      const startSlide = (time = 3000) => {
         interval = setInterval(autoPlaySlide, time);
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
            currentSlide++;
         } else if (target.matches('#arrow-left')) {
            currentSlide--;
         } else if (target.matches('.dot')) {
            dots.forEach((elem, index) => {
               if (elem === target) {
                  currentSlide = index;
               }
            });
         }

         if (currentSlide >= slide.length) {
            currentSlide = 0;
         }
         if (currentSlide < 0) {
            currentSlide = slide.length - 1;
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
            if (i === 0) {
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


   //! comands
   const command = document.getElementById('command'),
      calcBlock = document.querySelector('.calc-block');

   command.addEventListener('mouseover', (e) => {
      let target = e.target;

      if (target.matches('.command__photo')) {
         target.dataset.first = target.src;
         target.src = target.dataset.img;
      }
   });

   command.addEventListener('mouseout', (e) => {
      let target = e.target;

      if (target.matches('.command__photo')) {
         target.src = target.dataset.first;
         target.removeAttribute('data-first');
      }
   });

   calcBlock.addEventListener('input', (e) => {
      let target = e.target;

      if (target.matches('INPUT')) {
         target.value = target.value.replace(/\D/, '');
      }
   });

   //!questions

   body.addEventListener('input', (e) => {
      let target = e.target;

      if (e.inputType === 'insertFromPaste') {
         target.value = '';
         return;
      }

      if (target.matches('#form2-name,#form1-name')) {
         target.value = target.value.replace(/[^??-??\s\-]/i, '');
      } else if (target.matches('#form2-email,#form1-email')) {
         target.value = target.value.replace(/[^a-z\@\-\_\.\!\~\*\']/gi, '');
      } else if (target.matches('#form2-phone,#form1-phone')) {
         target.value = target.value.replace(/[^\d\+]/g, '');
      } else if ('#form2-message') {
         target.value = target.value.replace(/[^??-??\s\d\.\,\?\!\;\:\(\)\"\-]/i, '');
      }
   });

   body.addEventListener('focusout', (e) => {
      let target = e.target;

      if (target.value) {

         if (target.matches('#form2-name,#form2-message,#form1-name')) {
            target.value = target.value.replace(/^\s+|\s+$/g, '');
            target.value = target.value.replace(/\s{2,}/g, ' ');
         } else if (target.matches('#form2-email,#form1-email')) {
            target.value = target.value.replace(/^\-+|\-+$/g, '');
            target.value = target.value.replace(/\-{2,}/g, '-');
         }
         // else if (target.matches('#form2-phone,#form1-phone')) {
         //    target.value = target.value.replace(/^\-+|\-+$/g, '');
         //    target.value = target.value.replace(/\-{2,}/g, '-');
         // }

         if (target.matches('#form2-name,#form1-name') && target.value) {
            let str = target.value;
            str = str.split(' ');
            str.forEach((el, id) => str[id] = el[0].toUpperCase() + el.substring(1).toLowerCase());
            str = str.join(' ');
            target.value = str;
         }
      }
   });

   //!calculator
   const calc = (price = 100) => {
      const calcBlock = document.querySelector('.calc-block'),
         calcType = document.querySelector('.calc-type'),
         calcDay = document.querySelector('.calc-day'),
         totalValue = document.getElementById('total'),
         calcCount = document.querySelector('.calc-count'),
         calcSquare = document.querySelector('.calc-square');
      let interval;

      const animation = (value, newValue) => {
         cancelAnimationFrame(interval);


         const chisla = () => {

            if (value < newValue && (newValue - value) > 200) {
               console.log(1);
               value = +value + 100;
            } else if (value < newValue && (newValue - value) > 20) {
               console.log(2);
               value = +value + 10;
            } else if (value < newValue && (newValue - value) <= 20) {
               console.log(3);
               value++;
            } else if (value > newValue && (value - newValue) > 200) {
               console.log(1);
               value -= 100;
            } else if (value > newValue && (value - newValue) > 20) {
               console.log(2);
               value -= 10;
            } else if (value > newValue && (value - newValue) <= 20) {
               console.log(3);
               value--;
            }

            totalValue.textContent = value;
         };

         const animateCalc = () => {
            interval = requestAnimationFrame(animateCalc);
            if (!newValue) {
               totalValue.textContent = 0;
            } else if (value !== newValue) {
               chisla();
            } else {
               cancelAnimationFrame(interval);
            }

         };

         interval = requestAnimationFrame(animateCalc);

      };

      const countSum = () => {
         let total = 0,
            countValue = 1,
            dayValue = 1;
         const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

         if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
         }

         if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
         } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
         }

         if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
         }

         animation(totalValue.textContent, total);
      };

      calcBlock.addEventListener('change', (e) => {
         let target = e.target;

         if (target.matches('.calc-type, .calc-day, .calc-count, .calc-square')) {
            countSum();
         }
      });

   };

   calc(100);

   //! send-ajax-form
   const sendForm = () => {
      const errorMessage = '??????-???? ?????????? ???? ??????...',
         loadMessage = '????????????????...',
         successMessage = '??????????????! ???? ?????????? ?? ???????? ????????????????!';
      const form = document.querySelectorAll('form');
      const statusMessage = document.createElement('div');

      statusMessage.style.cssText = 'font-size:2rem; color:white;';

      const clearInput = (form) => {
         const inputs = form.querySelectorAll('input');
         inputs.forEach(input => {
            input.value = '';
         });
      };

      const postData = (body, outputData, errorData, form) => {
         const request = new XMLHttpRequest();

         request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
               return;
            }

            if (request.status === 200) {
               outputData();
            } else {
               errorData(request.status);
            }

            clearInput(form);

         });

         request.open('POST', './server.php');
         request.setRequestHeader('Content-Type', 'application/json');

         request.send(JSON.stringify(body));
      };

      form.forEach(el => {
         el.addEventListener('submit', (e) => {
            e.preventDefault();
            el.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(el);
            let body = {};

            formData.forEach((val, key) => {
               body[key] = val;
            });

            postData(body,
               () => {
                  statusMessage.textContent = successMessage;
               },
               (err) => {
                  statusMessage.textContent = errorMessage;
                  console.error(err);
               },
               el);
         });
      });
   };

   sendForm();


});