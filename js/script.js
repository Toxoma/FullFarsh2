"use strict";

let isNumber = function (n) {
   const a = !isNaN(parseFloat(n)) && isFinite(n) && +n >= 1 && +n <= 100;
   if(!a){
      alert('Введи число!');
   }
   return a;
};

function start(){
   let y;
   do {
      y = prompt('Загадывание случайного числа от 1 до 100');
      if(y===null){
         return  alert('Игра окончена');
      }
   } while (!isNumber(y));

   function chislo() {
      let x;
      do {
         x = prompt('Угадай число от 1 до 100');
         if(x===null){
            return  alert('Игра окончена');
         }
      } while (!isNumber(x));

      if (+x > +y) {
         alert("Загаданное число меньше");
         chislo();
      }
      if (+x < +y) {
         alert("Загаданное число больше");
         chislo();
      }
      if(x===y){
         alert('Поздравляю, Вы угадали!!!');
      }
   }

   chislo();
   
}

start();





