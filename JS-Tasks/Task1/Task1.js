let operation = prompt("Enter your operation:");
let number1 = Number(prompt("Enter a first number:"));
let number2 = Number(prompt("Enter a second number:"));

let Result=0;

switch (operation) {
  case "+":
    Result= number1 + number2;
    break;
  case "-":
    Result= number1 - number2;
    break;
  case "*":
    Result= number1 * number2;
    break;
  case "/":
    Result= number1 / number2;
    break;

  default:
    console.log("error");
}

let opElement = document.createElement("h1");
opElement.textContent = `the operation is ${operation}`;
document.body.appendChild(opElement);

let num1Element = document.createElement("h2");
num1Element.textContent = `number one is ${number1}`;
document.body.appendChild(num1Element);

let num2Element = document.createElement("h2");
num2Element.textContent = `number two is ${number2}`;
document.body.appendChild(num2Element);