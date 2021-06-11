"use strict";

const wrap = document.querySelector('.wrapper');

function DomElement(selector, height, width, bg, fontSize) {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
}

DomElement.prototype.create = function () {
   let newDiv;
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

   newDiv.textContent = 'Привет мир!';

};

let first = new DomElement('.abc', 300, 500, 'red', 34);
first.create();