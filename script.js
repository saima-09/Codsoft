// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('button'));
    let currentInput = '';
    let operator = '';
    let firstValue = '';
    let secondValue = '';
    let result = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.getAttribute('data-value');

            if (button.id === 'clear') {
                currentInput = '';
                operator = '';
                firstValue = '';
                secondValue = '';
                result = '';
                display.textContent = '';
            } else if (button.id === 'equals') {
                secondValue = currentInput;
                result = calculate(firstValue, secondValue, operator);
                display.textContent = result;
                currentInput = result;
                operator = '';
                firstValue = '';
                secondValue = '';
            } else if (button.classList.contains('operator')) {
                operator = value;
                firstValue = currentInput;
                currentInput = '';
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });

    function calculate(first, second, operator) {
        const num1 = parseFloat(first);
        const num2 = parseFloat(second);
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return '';
        }
    }
});
