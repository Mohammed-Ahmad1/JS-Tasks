let x = Number(prompt("Enter value for x:"));
let y = Number(prompt("Enter value for y:"));

let message;

if (x > y) {
    message = "Hello World";
} else {
    message = "Goodbye";
}

swal(message);

console.log(message);

document.getElementById("result").innerHTML =
    `x = ${x} , y = ${y} <br> Result: ${message}`;
