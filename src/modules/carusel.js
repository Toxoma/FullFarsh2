/* eslint-disable */

class Carusel {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 3,
        responsive = [],
    }) {
        try {
            this.main = document.querySelector(main);
            this.wrap = document.querySelector(wrap);
            this.slides = document.querySelector(wrap).children;
            this.next = document.querySelector(next);
            this.prev = document.querySelector(prev);
            this.slidesToShow = slidesToShow;
            this.options = {
                position,
                maxPosition: this.slides.length - this.slidesToShow,
                infinity,
                widthSlide: Math.floor(100 / this.slidesToShow),
            };
            this.responsive = responsive;
        } catch {
            console.error('Для carusek необходимо 2 свойства main и wrap');
        }
    }

    init() {
        this.addCaruselClass();
        this.addStyle();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }

        if (this.responsive) {
            this.responseInit();
        }
    }

    addCaruselClass() {
        this.main.classList.add('carusel-slider');
        this.wrap.classList.add('carusel-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('carusel-slider__item');
        }
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;

            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }

            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.options.maxPosition) {
            ++this.options.position;

            if (this.options.position > this.options.maxPosition) {
                this.options.position = 0;
            }

            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const allResponce = this.responsive.map(item => item.breakpoint);
        const maxResponce = Math.max(...allResponce);

        const checkResponce = () => {
            const widthWindow = document.documentElement.clientWidth;

            if (widthWindow < maxResponce) {
                for (let i = 0; i < allResponce.length; i++) {
                    if (widthWindow < allResponce[i]) {
                        this.slidesToShow = this.responsive[i].slideToshow;
                        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                        this.addStyle();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };

        checkResponce();

        window.addEventListener('resize', checkResponce);

    }

    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'carusel-slider__prev';
        this.next.className = 'carusel-slider__next';

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);

        const style = document.createElement('style');
        style.textContent = `
            .carusel-slider__prev, .carusel-slider__next{
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
                cursor: pointer;
            }
            .carusel-slider__prev{
                border-right-color: #19b5fe;
            }
            .carusel-slider__next{
                border-left-color: #19b5fe;
            }
            .carusel-slider__prev:hover,
            .carusel-slider__next:hover,
            .carusel-slider__prev:focus,
            .carusel-slider__next:focus{
                background: transparent;
                outline: transparent;
            }
        `;
        document.head.appendChild(style);
    }

    addStyle() {
        let style = document.getElementById('sliderCarusel-style');

        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarusel-style';
        }

        style.textContent = `
            .carusel-slider{
                overflow: hidden !important;
            }
            .carusel-slider__wrap{
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .carusel-slider__item{
                display: flex !important;
                align-items: center;
                justify-content: center;
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;

            }
        `;
        document.head.appendChild(style);
    }
}