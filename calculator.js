let num1 = null;
let num2 = null;
let operator = null;

function addition(a, b){
  return a + b;
}
console.log(addition(5, 2));

function subtraction(a, b){
  return a - b;
}
console.log(subtraction(5, 2));

function multiplication(a, b){
  return a * b;
}
console.log(multiplication(5, 2));

function division(a, b){
  return a / b;
}
console.log(division(10, 2));


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
