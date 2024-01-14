let num1 = null;
let num2 = null;
let operator = document.getElementsByClassName("operator");
const display = document.getElementById("display");
let buttons = document.querySelectorAll('.integer, .operator');
// let integer = document.getElementsByClassName("integer");

buttons.forEach(button => {
  button.addEventListener('click', function () {
    updateDisplay(button.textContent);
    if (button.classList.contains("operator")){
      updateDisplay(button.textContent);
    }
  });
});

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
  if (operator === "+"){
    addition(num1, num2);
} else if (operator === "-"){
  subtraction(num1, num2);
} else if (operator === "*"){
  multiplication(num1, num2);
} else if (operator === "/"){
  division(num1, num2);
}

}

function updateDisplay(value){
  display.value = display.value === "0" ? value : display.value + value;
  console.log("button clicked");
}
