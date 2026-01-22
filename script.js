const display = document.getElementById('display');

function appendValue(input) {
    // Prevent multiple decimals in one number
    if (input === '.' && display.value.includes('.')) return;
    
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // We use Function instead of eval for slightly better security
        display.value = Function('"use strict";return (' + display.value + ')')();
    } catch (error) {
        display.value = "Error";
        setTimeout(clearDisplay, 1500); // Clear error after 1.5s
    }
}