const formsRules = () => {
    const body = document.querySelector('body');

    body.addEventListener('input', (e) => {
        const target = e.target;

        if (e.inputType === 'insertFromPaste') {
            target.value = '';
            return;
        }

        if (target.matches('#form2-name,#form1-name')) {
            target.value = target.value.replace(/[^а-я\s\-]/i, '');
        } else if (target.matches('#form2-email,#form1-email')) {
            target.value = target.value.replace(/[^a-z\@\-\_\.\!\~\*\']/gi, '');
        } else if (target.matches('#form2-phone,#form1-phone')) {
            target.value = target.value.replace(/[^\d\+]/g, '');
        } else if ('#form2-message') {
            target.value = target.value.replace(/[^а-я\s\d\.\,\?\!\;\:\(\)\"\-]/i, '');
        }
    });

    body.addEventListener('focusout', (e) => {
        const target = e.target;

        if (target.value) {

            if (target.matches('#form2-name,#form2-message,#form1-name')) {
                target.value = target.value.replace(/^\s+|\s+$/g, '');
                target.value = target.value.replace(/\s{2,}/g, ' ');
            } else if (target.matches('#form2-email,#form1-email')) {
                target.value = target.value.replace(/^\-+|\-+$/g, '');
                target.value = target.value.replace(/\-{2,}/g, '-');
            }

            if (target.matches('#form2-name,#form1-name') && target.value) {
                let str = target.value;
                str = str.split(' ');
                str.forEach((el, id) => str[id] = el[0].toUpperCase() + el.substring(1).toLowerCase());
                str = str.join(' ');
                target.value = str;
            }
        }
    });
};
export default formsRules;