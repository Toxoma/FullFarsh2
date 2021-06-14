"use strict";

const username = document.querySelector('#username'),
   registerUser = document.querySelector('#registerUser'),
   login = document.querySelector('#login'),
   list = document.querySelector('#list');

let delBtns = document.querySelectorAll('.btn');

let users = [
   {
      firstName: "das",
      lastName: "d",
      login: "dan",
      password: "123",
      regDate: "14 июня 2021 г., 14:20:5",
   }
];

let user = {
   firstName: '',
   lastName: '',
   login: '',
   password: '',
   regDate: '',
};

const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

let strNameFio;

function getLocal() {
   users = [];

   for (let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
         continue;
      }
      let item = JSON.parse(localStorage[key]);
      users.push(item);
   }

   list.innerText = '';
   users.forEach(item => {
      const li = document.createElement('li');
      const btn = document.createElement('button');

      li.innerText = `Имя: ${item.firstName}, фамилия: ${item.lastName}, зарегистрирован: ${item.regDate}`;

      btn.textContent = 'удалить';
      btn.classList.add('btn');
      li.append(btn);

      list.append(li);

      btn.addEventListener('click', function () {
         localStorage.removeItem(item.login);
         getLocal();
      });
   });
}

function setLocal(key, mas) {
   for (let item in localStorage) {
      if (item === key) {
         return;
      }
   }

   localStorage.setItem(key, JSON.stringify(mas));
}

registerUser.addEventListener('click', () => {
   strNameFio = prompt('Введите через пробел Имя и Фамилию пользователя').split(' ');

   if (strNameFio.length !== 2) {
      alert('Ошибка ввода!!!');
   } else {
      let date = new Date();

      user.firstName = strNameFio[0];
      user.lastName = strNameFio[1];
      user.login = prompt('Введите Логин');
      user.password = prompt('Введите пароль');
      user.regDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} г., ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      users.push(user);
      setLocal(user.login, user);
      getLocal();
   }
});

login.addEventListener('click', () => {
   const login = prompt('Введите Логин');
   const password = prompt('Введите пароль');
   let count = true;

   for (let key in localStorage) {
      if (key === login) {
         user = JSON.parse(localStorage[key]);

         if (user.password === password) {
            count = false;
            username.textContent = user.login;
         }
      }
   }

   if (count) {
      alert('Пользователь не найден');
   }
});

getLocal();

