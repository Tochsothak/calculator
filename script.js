const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

// console.log(display, buttons, clearBtn, equalsButton);
//variable
let currentInput = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

//Add eventListener to button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        handleButtonClick(button.value);
    });
});
// console.log(handleButtonClick);

//Handle button clicks
function handleButtonClick(value) {
    if (isOperator(value)) {
        handleOperator(value);
    } else if (value === ".") {
        if (!currentInput.includes(".")) {
            currentInput += value;
        }
    } else {
        currentInput += value;
    }
    updateDisplay(currentInput);
}
//Check if the button is an operator
function isOperator(value) {
    return value === "+" || value === "-" || value === "*" || value === "/";
}
// Handle Operator
function handleOperator(op) {
    if (firstNumber && currentInput && operator) {
        secondNumber = currentInput;
        currentInput = calculate(firstNumber, operator, secondNumber);
        updateDisplay(currentInput);
        operator = op;
        firstNumber = currentInput;
        currentInput = "";
    } else {
        operator = op;
        firstNumber = currentInput;
        currentInput = "";
    }
}

//Performing calculation
function calculate(num1, op, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "";
    }
}

function updateDisplay(value) {
    display.value = value;
}

//Clear the display and reset variable
clearBtn.addEventListener("click", () => {
    currentInput = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    updateDisplay("0");
});

//calculate the result
equalsButton.addEventListener("click", () => {
    if (firstNumber && currentInput && operator) {
        secondNumber = currentInput;
        currentInput = calculate(firstNumber, operator, secondNumber);
        updateDisplay(currentInput);

        firstNumber = "";
        secondNumber = "";
        operator = "";
    }
});