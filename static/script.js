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

async function calculate() {

    if (display.value === "") {
        return;
    }

    const response = await fetch("/calculate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            expression: display.value
        })
    });

    const data = await response.json();

    display.value = data.result;

}