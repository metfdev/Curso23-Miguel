/*
Ejercicios para practicar
  1. Pidele tres datos al usuario. Numero 1, Numero 2 y operacion (suma, resta, multiplicación o división). Crea
  un condicional que imprima el resultado de la operación entre los dos números.

  2. Pidele un numero al usuario y crea un condicional que imprima si el número es par o impar.

  3. Crea un código que le pida un numero entre 1 y 12 e imprima el nombre del mes correspondiente.
  (1 = enero, 2 = febrero, etc.). Si el número no está entre 1 y 12, imprime "Número no válido".
*/


let numero1 = Number(prompt("ingrese un digito:"));
let numero2 = Number(prompt("ingrese un digito:"));
let operación = prompt("Que operacion desea realizar? suma, resta, multiplicación o división:");

switch (operación) {
  case "suma":
    console.log(numero1 + numero2);
    break;
  case "resta":
    let resta = numero1 - numero2;
    console.log(resta);
    break;
  case "multiplicacion":
    let multiplicacion = numero1 * numero2;
    console.log(multiplicacion);
    break;
  case "division":
    let division = numero1 / numero2;
    console.log(division);
    break;
  case "modulo":
    let modulo = numero1 % numero2;
    console.log(modulo);
    break;
  default: 
    console.log("ERROR");
    break;
}

let numeroUsuario = Number(prompt("ingrese un digito:"));

if (numeroUsuario%2==0) {
  console.log("numero par");
} else if (numeroUsuario%2==1) {
  console.log("numero impar");
} else { 
  console.log("ERROR debe ingresar un numero");
}

let meses = Number(prompt("ingrese un número entre 1 y 12"));
switch (meses) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febreo");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Mayo");
    break;
  case 6:
    console.log("Junio");
    break;
  case 7:
    console.log("Julio");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Septiembre");
    break;
  case 10:
    console.log("Octubre");
    break;
  case 11:
    console.log("Noviembre");
    break;
  case 12:
    console.log("Diciembre");
    break;
  default:
    console.log("mes no valido");
}