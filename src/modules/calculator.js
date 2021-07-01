const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total'),
        calcCount = document.querySelector('.calc-count'),
        calcSquare = document.querySelector('.calc-square');
    let interval;

    const animation = (value, newValue) => {
        cancelAnimationFrame(interval);


        const chisla = () => {

            if (value < newValue && (newValue - value) > 200) {
                console.log(1);
                value = +value + 100;
            } else if (value < newValue && (newValue - value) > 20) {
                console.log(2);
                value = +value + 10;
            } else if (value < newValue && (newValue - value) <= 20) {
                console.log(3);
                value++;
            } else if (value > newValue && (value - newValue) > 200) {
                console.log(1);
                value -= 100;
            } else if (value > newValue && (value - newValue) > 20) {
                console.log(2);
                value -= 10;
            } else if (value > newValue && (value - newValue) <= 20) {
                console.log(3);
                value--;
            }

            totalValue.textContent = value;
        };

        const animateCalc = () => {
            interval = requestAnimationFrame(animateCalc);
            if (!newValue) {
                totalValue.textContent = 0;
            } else if (value !== newValue) {
                chisla();
            } else {
                cancelAnimationFrame(interval);
            }

        };

        interval = requestAnimationFrame(animateCalc);

    };

    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }

        animation(totalValue.textContent, total);
    };

    calcBlock.addEventListener('change', (e) => {
        const target = e.target;

        if (target.matches('.calc-type, .calc-day, .calc-count, .calc-square')) {
            countSum();
        }
    });

};
export default calc;