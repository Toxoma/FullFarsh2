const scroll = () => {
    const scrollImg = document.querySelector('main>a>img'),
        blocks = document.querySelectorAll('body>div[id]:not(#companies)'),
        menu = document.querySelector('menu'),
        menuItems = menu.querySelectorAll('ul>li>a');

    const findScroll = function (value) {


        let count = document.documentElement.scrollTop,
            scrollInterval;

        const animateScroll = () => {
            scrollInterval = requestAnimationFrame(animateScroll);
            if (count < value.offsetTop) {
                count += 40;
                document.documentElement.scrollTop = count;
            } else {
                cancelAnimationFrame(scrollInterval);
            }
        };

        scrollInterval = requestAnimationFrame(animateScroll);

    };

    scrollImg.addEventListener('click', findScroll.bind(null, blocks[0]));

    for (let index = 0; index < menuItems.length; index++) {
        menuItems[index].addEventListener('click', findScroll.bind(null, blocks[index]));
    }
};
export default scroll;