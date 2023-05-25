//Ejercicio 1: Verificar si un número es positivo, negativo o cero.
// let numero = 7;

// if (numero > 0) {
//   console.log("El número es positivo");
// } else if (numero < 0) {
//   console.log("El número es negativo");
// } else {
//   console.log("El número es cero");
// }

//Ejercicio 2: Determinar si un número es par o impar.
// function esPar(num1) {
//   if (num1 % 2 === 0) {
//     console.log("es par");
//   } else {
//     console.log("no es par");
//   }
// }
//esPar(7);

//Ejercicio 1:Escribe una función llamada esMayorDeEdad que reciba
//como parámetro la edad de una persona y devuelva "Es mayor de edad"
//si la edad es igual o mayor a 18, y "No es mayor de edad" en caso contrario.

function esMayorDeEdad(edad) {
  if (edad > 18) {
    return "es mayor de edad";
  } else {
    return "no puede entrar a la disco";
  }
}
esMayorDeEdad();
