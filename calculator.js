let num1 = null;
let num2 = null;
let currentOperator = null;
let operator = document.querySelectorAll(".operator");
const display = document.getElementById("display");
let buttons = document.querySelectorAll('.integer, .operator, #eval, #clear');
let integer = document.getElementsByClassName("integer");
const decimal = document.getElementById("decimal");
// const clear = document.getElementById("clear"); // Clear button
// const add = document.getElementById("add"); // Add button
// const subtract = document.getElementById("subtract"); // Subtract button
// const multiply = document.getElementById("multiply"); // Multiply button
// const divide = document.getElementById("divide"); // Divide button



// use a for loop to add event listeners to all the buttons
buttons.forEach(button => {
  button.addEventListener('click', function () {
    if (button.classList.contains("integer")){
      handleIntegerClick(button.textContent);
    } else if (button.classList.contains("operator")){
      handleOperatorClick(button.textContent);

    } else if (button.id ==="eval"){
     const result =  operate(currentOperator, parseInt(num1), parseInt(num2));
      updateDisplay(result);
      num1 = result;
      num2 = null;
      currentOperator = null;
    } else if (button.id === "clear"){
      num1 = null;
      num2 = null;
      currentOperator = null;
      updateDisplay("0");
      add.classList.remove("active");
      subtract.classList.remove("active");
      multiply.classList.remove("active");
      divide.classList.remove("active");
      console.log("clear clicked");
    }
  });
});


function handleIntegerClick(value){
  if (currentOperator === null){
    num1 = num1 === null ? value : num1 + value;
  } else {
    // if operator is not null
    num2 = num2 === null ? value : num2 + value;
  }
  updateDisplay(currentOperator === null ? num1 : num2);
  console.log(num1, currentOperator, num2);
}

function handleOperatorClick(operator) {
  operatorClickStyling(operator); // Add styling to the operator button
  // If there are existing values, perform the previous operation
  if (num1 !== null && currentOperator !== null && num2 !== null) {
    stringOperation();
    updateDisplay(num1); // Update display with num1 after the operation
    currentOperator = operator; // Assign the new operator
    num2 = null; // Clear num2 for the next number input
  } else if (num1 !== null && currentOperator !== null) {
    // If an operator is already selected, update it
    currentOperator = operator;
  } else {
    // If this is the first operator, or after an evaluation, assign num1
    num1 = display.value;
    currentOperator = operator;
  }
}

decimal.addEventListener("click", handleDecimalClick);

function handleDecimalClick() {
  if (currentOperator === null) {
    if (!num1.includes(".")) {
      num1 = num1 === null ? "0." : num1 + ".";
    }
  } else {
    if (!num2.includes(".")) {
    num2 = num2 === null ? "0." : num2 + ".";
  }
 }

 updateDisplay(currentOperator === null ? num1 : num2);
  console.log("decimal clicked")
}
function operatorClickStyling(operator, button){

  if (operator === "+"){
    add.classList.add("active");

    if(subtract.classList.contains("active")){
      subtract.classList.remove("active");
    } else if (multiply.classList.contains("active")){
      multiply.classList.remove("active");
    } else if (divide.classList.contains("active")){
      divide.classList.remove("active");
    }
  } else if (operator === "-"){
    subtract.classList.add("active");

    if(add.classList.contains("active")){
      add.classList.remove("active");
    } else if (multiply.classList.contains("active")){
      multiply.classList.remove("active");
    } else if (divide.classList.contains("active")){
      divide.classList.remove("active");
    }
  } else if (operator === "X"){
    multiply.classList.add("active");

    if(add.classList.contains("active")){
      add.classList.remove("active");
    } else if (subtract.classList.contains("active")){
      subtract.classList.remove("active");
    } else if (divide.classList.contains("active")){
      divide.classList.remove("active");
    }
  } else if (operator === "/"){
    divide.classList.add("active");

    if(add.classList.contains("active")){
      add.classList.remove("active");
    } else if (subtract.classList.contains("active")){
      subtract.classList.remove("active");
    } else if (multiply.classList.contains("active")){
      multiply.classList.remove("active");
    }
  } else if (operator === "="){
    add.classList.remove("active");
    subtract.classList.remove("active");
    multiply.classList.remove("active");
    divide.classList.remove("active");
  }

}
function addition(a, b){
  return a + b;

}

function subtraction(a, b){
  return a - b;
}

function multiplication(a, b){
  return a * b;
}

function division(a, b){
  return a / b;
}

function operate(operator, num1, num2){
  let result;
  if (operator === "+"){
  result = addition(num1, num2);

} else if (operator === "-"){
  result = subtraction(num1, num2);
} else if (operator === "X"){
  result = multiplication(num1, num2);
} else if (operator === "/"){
  result = division(num1, num2);
}

return result;
}

function stringOperation() {
  result = operate(currentOperator, parseFloat(num1), parseFloat(num2));
  num1 = result.toString();
  currentOperator = null;
  num2 = null;
}

function updateDisplay(value){
  display.value = value;
  console.log("button clicked");
}
