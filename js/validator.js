/* eslint-disable */

class Validator {
   constructor({
      selector,
      pattern = {},
      method
   }) {
      this.form = document.querySelector(selector);
      this.pattern = pattern;
      this.method = method;
      this.elementsForm = [...this.form.elements].filter(item => {
         return item.tagName.toLowerCase() !== 'button' &&
            item.type !== 'button';
      });
      this.error = new Set();
   }

   init() {
      this.applyStyle();
      this.setPattern();
      this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
      this.form.addEventListener('submit', e => {
         this.elementsForm.forEach(elem => this.checkIt({
            target: elem
         }));

         if (this.error.size) {
            e.preventDefault();
         }
      });
   }

   isValid(elem) {
      const validatorMethod = {
         notEmpty(elem) {
            if (elem.value.trim() === '') {
               return false;
            }
            return true;
         },
         pattern(elem, pattern) {
            return pattern.test(elem.value);
         }
      };

      if (this.method) {
         const method = this.method[elem.dataset.valid];
         if (method) {
            return method.every(item => validatorMethod[item[0]](elem, this.pattern[item[1]]));
         }
      } else {
         console.warn('Необходимо передать id полей ввода и методы проверки этих полей');
      }

      return true;
   }

   checkIt(event) {

      const target = event.target;

      if (this.isValid(target)) {
         this.showSuccess(target);
         this.error.delete(target);
      } else {
         this.error.add(target);
         this.showError(target);
      }
   }

   showError(elem) {
      elem.classList.remove('success');
      elem.classList.add('error');
   }

   showSuccess(elem) {
      elem.classList.remove('error');
      elem.classList.add('success');
   }

   applyStyle() {
      const style = document.createElement('style');

      style.textContent = `
      input.success {
         border: 4px solid green;
      }
      input.error {
         border: 4px solid red;
      }
      `;

      document.body.appendChild(style);
   }

   setPattern() {
      if (!this.pattern.name) {
         this.pattern.name = /^([а-я]){3,}(\s[а-я]{3,})?$/i;
      }
      if (!this.pattern.message) {
         this.pattern.message = /[а-я\d]+/i;
      }
      if (!this.pattern.phone) {
         this.pattern.phone = /^(\+7|8)\d{10}/;
      }
      if (!this.pattern.email) {
         this.pattern.email = /^\w+@\w+\.\w{2,}$/;
      }
   }
}