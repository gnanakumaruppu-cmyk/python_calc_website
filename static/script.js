const display = document.getElementById("display");

function appendValue(value) {

    const operators = ['+', '-', '*', '/'];

    const lastChar = display.value.slice(-1);

    if (operators.includes(value) && operators.includes(lastChar)) {

        display.value = display.value.slice(0, -1) + value;

    } else {

        display.value += value;

    }

}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

    if (display.value === "") {
        return;
    }

    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(lastChar)) {
        display.value = display.value.slice(0, -1);
    }

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }

}