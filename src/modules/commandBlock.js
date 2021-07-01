const commandBlock = () => {
    const command = document.getElementById('command'),
        calcBlock = document.querySelector('.calc-block');

    command.addEventListener('mouseover', (e) => {
        const target = e.target;

        if (target.matches('.command__photo')) {
            target.dataset.first = target.src;
            target.src = target.dataset.img;
        }
    });

    command.addEventListener('mouseout', (e) => {
        const target = e.target;

        if (target.matches('.command__photo')) {
            target.src = target.dataset.first;
            target.removeAttribute('data-first');
        }
    });

    calcBlock.addEventListener('input', (e) => {
        const target = e.target;

        if (target.matches('INPUT')) {
            target.value = target.value.replace(/\D/, '');
        }
    });
};
export default commandBlock;