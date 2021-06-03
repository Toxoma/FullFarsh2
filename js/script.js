"use strict";
let isNumber = function (n) {
   return !isNaN(parseFloat(n)) && isFinite(n) && +n >= 1 && +n <= 100;
};

let y;

do {
   y = prompt('Загадывание случайного числа от 1 до 100');
} while (!isNumber(y));

let x;

function chislo() {

   do {
      x = prompt('Угадай число от 1 до 100');
   } while (!isNumber(x));
}

chislo();

if (x > y) {
   alert("Загаданное число меньше");
   chislo();
}
if (x < y) {
   alert("Загаданное число больше");
   chislo();
}








