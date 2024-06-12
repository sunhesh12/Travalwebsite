let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return; 
    
    currentInput += number;
    display.value = currentInput;
}


function setOperator(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (operator) {
        firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
    }
    operator = op;
    currentInput = '';
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    display.value = '';
}

function calculateResult() {
    if (firstOperand === null || currentInput === '') return;
    let secondOperand = parseFloat(currentInput);
    display.value = calculate(firstOperand, secondOperand, operator);
    currentInput = '';
    operator = '';
    firstOperand = parseFloat(currentInput);
}

function calculate(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: return 0;
    }
}