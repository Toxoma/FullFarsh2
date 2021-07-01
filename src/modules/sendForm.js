const sendForm = () => {
    const form = document.querySelectorAll('form');
    const loadIconDiv = document.createElement('div');

    const successMessage = 'Спасибо! Скоро рассмотрим вашу заявку!',
        errorMessage = 'Ой что-то пошло не так!';

    const clearInput = (form) => {
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = '';
            input.classList.remove('success');
        });
    };

    const postData = (body, outputData, errorData, form) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }

            loadIconDiv.classList.remove('sk-fading-circle');
            loadIconDiv.classList.add('loadIconText');

            if (request.status === 200) {
                outputData();
            } else {
                errorData(request.status);
            }

            clearInput(form);

            setTimeout(() => {
                loadIconDiv.textContent = '';
            }, 3000);

        });

        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');

        request.send(JSON.stringify(body));
    };

    form.forEach(el => {
        el.addEventListener('submit', (e) => {
            e.preventDefault();
            if ([...el.elements].find(item => item.matches('.error'))) {
                return;
            }

            if (loadIconDiv) {
                loadIconDiv.textContent = '';
            }

            loadIconDiv.classList.remove('loadIconText');
            loadIconDiv.classList.add('sk-fading-circle');

            for (let i = 1; i < 13; i++) {
                const innerDiv = document.createElement('div');
                innerDiv.classList.add(`sk-circle`);
                innerDiv.classList.add(`sk-circle-${i}`);
                loadIconDiv.insertAdjacentElement('beforeend', innerDiv);
            }
            el.appendChild(loadIconDiv);

            const formData = new FormData(el);
            const body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body,
                () => {
                    loadIconDiv.textContent = successMessage;
                },
                (err) => {
                    loadIconDiv.textContent = errorMessage;
                    console.error(err);
                },
                el);
        });
    });
};

export default sendForm;