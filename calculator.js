let num1 = null;
let num2 = null;
let currentOperator = null;
let operator = document.getElementsByClassName("operator");
const display = document.getElementById("display");
let buttons = document.querySelectorAll('.integer, .operator, #eval, #clear');
let integer = document.getElementsByClassName("integer");

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

function handleOperatorClick(operator){
 // assign the operator to currentOperator
  currentOperator = operator;


 updateDisplay(operator);

 console.log(num1, currentOperator, num2);
}

function operate(operator, num1, num2){
  let result;
  if (operator === "+"){
  result = addition(num1, num2);

} else if (operator === "-"){
  result = subtraction(num1, num2);
} else if (operator === "*"){
  result = multiplication(num1, num2);
} else if (operator === "/"){
  result = division(num1, num2);
}

return result;
}

function updateDisplay(value){
  // display.value = display.value === "0" ? value : display.value + value;
  display.value = value.toString();
  console.log("button clicked");
}
