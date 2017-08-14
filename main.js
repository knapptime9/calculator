function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '0';
    storedNum = '0';
    calculationFinished = true;
    operation = operations.none;
}

function clearAnswer() {
    var display = document.getElementById('display');
    if (calculationFinished) {
        display.value = '0';
        calculationFinished = false;
    }
}

function numInput(digit) {
    var display = document.getElementById('display');
    clearAnswer();
    display.value += digit;
}

function insertDecimal() {
    var display = document.getElementById('display');
    clearAnswer();
    if (display.value.indexOf('.') === -1) display.value += '.';
}

operations = {
    none:     function(left, right) { return right; },
    add:      function(left, right) { return left + right; },
    subtract: function(left, right) { return left - right; },
    multiply: function(left, right) { return left * right; }
};

function setOperation(command) {
    var display = document.getElementById('display');
    calculate();
    storedNum = display.value;
    if (operations.hasOwnProperty(command))
        operation = operations[command];
}

function calculate() {
    var display = document.getElementById('display');
    display.value = operation(+storedNum, +display.value);
    calculationFinished = true;
    operation = operations.none;
}

if ('addEventListener' in window)
    window.addEventListener('load', clearDisplay);
else
    window.attachEvent('onload', clearDisplay);
