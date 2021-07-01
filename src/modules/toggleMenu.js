const toggleMenu = () => {
    const menu = document.querySelector('menu'),
    menuItems = menu.querySelectorAll('ul>li>a'),
    body = document.querySelector('body');
    const btnMenu = document.querySelector('.menu');

    let count = -50,
        intervalMenu,
        menuFlag = false;

    const handlerAnimate = () => {
        intervalMenu = requestAnimationFrame(handlerAnimate);
        if (count < 0) {
            count++;
            menu.style.transform = `translate(${count*2}%)`;
        } else {
            cancelAnimationFrame(intervalMenu);
        }
    };

    const closeMenu = () => {
        menu.style.transform = `translate(-100%)`;
        count = -50;
        menuFlag = false;
        cancelAnimationFrame(intervalMenu);
    };

    const eventAnim = () => {
        if (menu.style.transform && menu.style.transform === `translate(0%)`) {
            closeMenu();
        } else {
            intervalMenu = requestAnimationFrame(handlerAnimate);
        }
    };
    const eventWithoutAnim = () => {
        if (menu.style.transform && menu.style.transform === `translate(0%)`) {
            closeMenu();
        } else {
            menu.style.transform = `translate(0%)`;
            count = -50;
        }
    };

    const selectPart = (e, animationFlag) => {
        const target = e.target;

        if (target.closest('.menu')) {
            menuFlag = true;

            if (animationFlag) {
                eventAnim();
            } else {
                eventWithoutAnim();
            }
        } else {

            if (target.closest('menu') && target.closest('A') || !target.closest('menu') && menuFlag) {
                closeMenu();
            }
        }

    };

    const animetionEvent = (e) => {
        selectPart(e, true);
    };

    const noAnimetionEvent = (e) => {
        selectPart(e, false);
    };

    const timoutsMenu = [];

    const sizeMenu = () => {
        timoutsMenu.push(setTimeout(() => {
            timoutsMenu.forEach(item => clearTimeout(item));

            if (window.innerWidth >= 768) {
                body.addEventListener('click', animetionEvent);
                body.removeEventListener('click', noAnimetionEvent);
            } else {
                body.addEventListener('click', noAnimetionEvent);
                body.removeEventListener('click', animetionEvent);
            }
        }, 500));
    };

    window.addEventListener('resize', sizeMenu);
    window.addEventListener('load', sizeMenu);
};

export default toggleMenu;