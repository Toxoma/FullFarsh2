"use strict";

const wrap = document.querySelector('.wrapper');
let newDiv;

function DomElement(selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
   this.position = 'absolute';
   this.top = 100;
   this.left = 100;
}

DomElement.prototype.create = function () {


   if (this.selector[0] === '.') {
      newDiv = document.createElement('div');
      newDiv.classList.add(this.selector.substr(1));

      wrap.append(newDiv);

   } else {
      newDiv = document.createElement('p');
      newDiv.setAttribute("id", this.selector.substr(1));

      wrap.append(newDiv);
   }

   newDiv.style.width = this.width + 'px';
   newDiv.style.height = this.height + 'px';
   newDiv.style.backgroundColor = this.bg;
   newDiv.style.fontSize = this.fontSize + 'px';
   newDiv.style.position = this.position;
   newDiv.style.top = this.top + 'px';
   newDiv.style.left = this.left + 'px';

   newDiv.textContent = 'Привет мир!';

};

DomElement.prototype.event = function () {
   document.addEventListener('keydown', (e) => {
      switch (e.key) {
         case 'ArrowUp':
            this.top = this.top - 10;
            newDiv.style.top = this.top + 'px';
            break;
         case 'ArrowDown':
            this.top = this.top + 10;
            newDiv.style.top = this.top + 'px';
            break;
         case 'ArrowLeft':
            this.left = this.left - 10;
            newDiv.style.left = this.left + 'px';
            break;
         case 'ArrowRight':
            this.left = this.left + 10;
            newDiv.style.left = this.left + 'px';
            break;
      }
   });
};

let first = new DomElement('#abc', 100, 100, 'red', 16);

document.addEventListener('DOMContentLoaded', () => {
   first.create();
   first.event();
});







