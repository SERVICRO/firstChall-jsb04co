"use strict";

let n1;
let n2;
let operator;
let result;

function calculator(operator, n1, n2) {
  if (operator === "sumar") {
    n1 = Number(prompt("Escribe un sumando"));
    n2 = Number(prompt("Escribe el otro sumando"));
    result = n1 + n2;
  } else if (operator === "restar") {
    n1 = Number(prompt("Escribe el minuendo"));
    n2 = Number(prompt("Escribe el sustraendo"));
    result = n1 - n2;
  } else if (operator === "multiplicar") {
    n1 = Number(prompt("Escribe el multiplicando"));
    n2 = Number(prompt("Escribe el multiplicador"));
    result = n1 * n2;
  } else if (operator === "dividir") {
    n1 = Number(prompt("Escribe el dividendo"));
    n2 = Number(prompt("Escribe el divisor"));
    result = n1 / n2;
  } else if (operator === "elevar") {
    n1 = Number(prompt("Escribe la base"));
    n2 = Number(prompt("Escribe el exponente"));
    result = n1 ** n2;
  } else {
    alert("Eso no se hacerlo");
  }
}

calculator(
  prompt(`Indica la operacion a realizar:
sumar
restar
multiplicar
dividir
elevar`),
  n1,
  n2
);
alert(result);
console.log(result);
