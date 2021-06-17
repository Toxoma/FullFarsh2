
window.addEventListener('DOMContentLoaded', () => {
   'use strict';

   function timer(deadline) {
      const good = document.querySelector('#good'),
         day = document.querySelector('#day'),
         newYear = document.querySelector('#newYear'),
         time = document.querySelector('#time'),
         weekDays = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота'
         ];

      function getTimeRemaining() {
         const dateNow = new Date(),
            dateStop = new Date(deadline).getTime(),
            weekDay = weekDays[dateNow.getDay()],
            timeRemaining = (dateStop - dateNow.getTime()) / 1000;

         let seconds = dateNow.getSeconds(),
            minutes = dateNow.getMinutes(),
            hours = dateNow.getHours();
         const days = Math.floor(timeRemaining / 60 / 60 / 24);

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

         return { timeRemaining, seconds, minutes, hours, days, weekDay };
      }

      // eslint-disable-next-line prefer-const
      let interval;

      function updateClock() {
         const timer = getTimeRemaining();

         newYear.textContent = timer.days;
         day.textContent = timer.weekDay;

         switch (timer.hours) {
            case '13':
            case '14':
            case '15':
            case '16':
            case '17':
            case '12':
               good.textContent = 'Добрый день';
               break;
            case '07':
            case '08':
            case '09':
            case '10':
            case '11':
            case '06':
               good.textContent = 'Доброе утро';
               break;
            case '19':
            case '20':
            case '21':
            case '22':
            case '23':
            case '18':
               good.textContent = 'Добрый вечер';
               break;
            default:
               good.textContent = 'Доброй ночи';
               break;
         }

         let str = timer.hours + ':' + timer.minutes + ':' + timer.seconds + ' ';

         if (+timer.hours >= 12) {
            str += 'PM';
         } else {
            str += 'AM';
         }

         time.textContent = str;

         if (timer.timeRemaining <= 0) {
            clearInterval(interval);
         }
      }

      interval = setInterval(updateClock, 1000);
   }

   timer('31 dec 2021');
});


