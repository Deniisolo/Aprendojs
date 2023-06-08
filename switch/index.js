// let dia = 8;

// switch (dia) {
//   case 1:
//     console.log("Lunes");
//     break;
//   case 2:
//     console.log("Martes");
//     break;
//   case 3:
//     console.log("Miércoles");
//     break;
//   case 4:
//     console.log("Jueves");
//     break;
//   case 5:
//     console.log("Viernes");
//     break;
//   case 6:
//     console.log("Sábado");
//     break;
//   case 7:
//     console.log("Domingo");
//     break;
//   default:
//     console.log("Día inválido");
// }

// let mes = 2;

// switch (mes) {
//   case 1:
//     console.log("Enero");
//     break;
//   case 2:
//     console.log("Febrero");
//     break;
//   case 3:
//     console.log("Marzo");
//     break;
//   case 4:
//     console.log("Abril");
//     break;
//   default:
//     console.log("NO ESTÁ");
// }

//Escribe un programa que tome una calificación del 1 al 5 como entrada y
// muestre un mensaje correspondiente utilizando la estructura condicional switch.

// let mensaje = 8;

// switch (mensaje) {
//   case 1:
//     console.log("holi");
//     break;
//   case 2:
//     console.log("HELLO");
//     break;
//   case 3:
//     console.log("Que mas?");
//     break;
//   case 4:
//     console.log("chaito");
//     break;
//   case 5:
//     console.log("bye");
//     break;
//   default:
//     console.log("No esta la información");
// }

//Calificación de CHATGPT: 8

//Ejercicio de día laborable:
// Escribe un programa que tome un número del 1 al 7 como entrada
// y muestre si es un día laborable o un día de descanso utilizando
// la estructura condicional switch.

// let dialaborable = 0;

// switch (dialaborable) {
//   case 1:
//     console.log("Lunes Día Laborable");
//     break;
//   case 2:
//     console.log("Martes Día Laborable");
//     break;
//   case 3:
//     console.log("Miercoles Día Laborable");
//     break;
//   case 4:
//     console.log("Jueves Día Laborable");
//     break;
//   case 5:
//     console.log("Viernes Día Laborable");
//     break;
//   case 6:
//     console.log("Sábado Día Laborable");
//     break;
//   case 7:
//     console.log("Domingo Día de DESCANSO");
//     break;
//   default:
//     console.log("Día no valido");
//     break;
// }
//Calificación de CHATGPT: 9

// Ejercicio 1: Calificación de estudiantes
// Escribe un programa que tome una calificación numérica (del 1 al 5)
// como entrada y muestre la calificación correspondiente en palabras utilizando una declaración switch.
//  Por ejemplo, si el usuario ingresa 3, el programa debe mostrar "Aprobado".

// let calificacion = parseInt(prompt("Ingresa una calificación del 1 al 5:"));

// switch (calificacion) {
//   case 1:
//     console.log("Muy deficiente");
//     break;
//   case 2:
//     console.log("Insuficiente");
//     break;
//   case 3:
//     console.log("Aprobado");
//     break;
//   case 4:
//     console.log("Notable");
//     break;
//   case 5:
//     console.log("Sobresaliente");
//     break;
//   default:
//     console.log("Número invalido");
// }

let Rock = "Rock";
let Paper = "Paper";
let Scissors = "Scissors";

function game(player, pc) {
  switch (true) {
    case (player === Paper && pc === Rock) ||
      (player === Rock && pc === Scissors) ||
      (player === Scissors && pc === Paper):
      console.log(" Player Gananasteeeeesss");
      break;
    case (pc === Paper && player === Rock) ||
      (pc === Rock && player === Scissors) ||
      (pc === Scissors && player === Paper):
      console.log(" PC Gananasteeeeesss");
      break;
    default:
      console.log("no valido");
      break;
  }
}
game(Paper, Scissors);