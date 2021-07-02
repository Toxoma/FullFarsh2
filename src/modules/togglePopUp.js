const togglePopUp = () => {

    const popup = document.querySelector('.popup'),
        popupContent = document.querySelector('.popup-content'),
        popupBtns = document.querySelectorAll('.popup-btn'),
        inputs = popupContent.querySelectorAll('input');

    popup.style.display = 'block';
    popup.style.transform = 'translateY(-100%)';
    popupContent.style.transform = 'translateX(-100%)';

    const popupTransition = (value) => {
        popupContent.style.transition = `${value}`;

        popupBtns.forEach(btn => btn.addEventListener('click', () => {
            popupContent.style.transform = 'translateX(0%)';
            popup.style.transform = 'translateY(0%)';
            inputs.forEach(input => {
                input.value = '';
                input.classList.remove('success');
                input.classList.remove('error');
            });
        }));
    };

    const timoutsPopup = [];
    const sizePopup = () => {
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

export default togglePopUp;