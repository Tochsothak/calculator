//Select display and  buttons
const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const buttons = document.querySelectorAll(".btn");

//store value

let currentInput = "";
let firstNumber = "";
let secondNumber = "";
let operator = "";

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    handleButtonClick(button.value);
  });
});

//handle button  click
function handleButtonClick(value) {
  if (isOperator(value)) {
    handleOperator(value);
  } else if (value === ".") {
    if (!currentInput.includes(".")) {
      currentInput += value;
    } else {
      currentInput += value;
    }
    updateDisplay(currentInput);
  }
}

//Check if the button is an Operator
function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/";
}

//Handle Operator
function handleOperator(op) {
  if (firstNumber && currentInput && operator) {
    secondNumber = currentInput;
    currentInput = calculate(firstNumber, operator, secondNumber);
    updateDisplay(currentInput);
    operator = op;
    firstNumber = currentInput;
    currentInput = "";
  }
}

//Calculation
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
//Update the display
function updateDisplay(value) {
  display.value = value;
}
//Clear the display and reset variables
clearBtn.addEventListener("click", () => {
  currentInput = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  updateDisplay("0");
});

//Calulate the  result
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
