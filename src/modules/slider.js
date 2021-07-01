const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
        slider = document.querySelector('.portfolio-content'),
        portfolioDots = document.querySelector('.portfolio-dots');

    let currentSlide = 0,
        interval,
        dots;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if (!target.matches('.portfolio-btn, .dot')) {
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dots.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (e) => {
        if (e.target.matches('.portfolio-btn, .dot')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (e) => {
        if (e.target.matches('.portfolio-btn, .dot')) {
            startSlide();
        }
    });

    const addDots = () => {
        for (let i = 0; i < slide.length; i++) {
            const li = document.createElement('li');
            li.classList.add('dot');
            if (i === 0) {
                li.classList.add('dot-active');
            }
            portfolioDots.append(li);

        }

        dots = document.querySelectorAll('.dot');
    };

    addDots();

    startSlide(1500);
};
export default slider;