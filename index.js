let display = document.getElementById('display');
let currentInput = '';
let operator = null;
let previousValue = '';

function appendNumber(number) {
    if (currentInput === '0' || display.innerText === 'Error') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (display.innerText === 'Error') return;
    if (currentInput === '' && previousValue !== '') {
        operator = op;
        return;
    }
    if (currentInput !== '') {
        if (previousValue === '') {
            previousValue = currentInput;
        } else {
            previousValue = calculate(previousValue, currentInput, operator);
        }
    }
    operator = op;
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    if (display.innerText === 'Error' || currentInput === '') return;
    if (previousValue !== '') {
        currentInput = calculate(previousValue, currentInput, operator);
        previousValue = '';
        operator = null;
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    previousValue = '';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput || previousValue || '0';
}

function calculate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) return 'Error';
    switch (op) {
        case '+':
            return (a + b).toString();
        case '-':
            return (a - b).toString();
        case '*':
            return (a * b).toString();
        case '/':
            return b === 0 ? 'Error' : (a / b).toString();
        default:
            return 'Error';
    }
}
