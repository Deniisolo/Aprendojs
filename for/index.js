// sintaxis de FOR es ICI: inicio-condición-incremento
// for (inicio; condición; incremento) {
//     bloque de código a ejecutar
//   }
// Ejemplo:

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// var nombres = ["Andres", "Diego", "Platzi", "Ramiro", "Silvia"]

// for(var i = 0; i < nombres.length; i++){
//     console.log( nombres[i] )
// }

// for ( let i = 0; i <= 20; i++){
//   console.log(i)
// }
// Ejercicio 1: Imprimir números del 1 al 10

// for ( let i= 0; i <= 10; i++){
//   console.log(i)
// }

//Ejercicio 2: Imprimir los primeros 5 números pares

// for ( let i=0; i <= 5; i += 2) {
//   console.log(i)
// }
// Ejercicio 3: Calcular la suma de los primeros 10 números naturales

// let suma = 0;
// for (let i = 1; i <= 10; i++) {
//   suma += i;
// }
// console.log(suma);

// let Amor = ["Cesar", "Augusto", "Torres", "Ardila"]
// for ( let i = 0; i < Amor.length; i++){
//   console.log("Hola "+ Amor[i] + "!" )
// }

for ( let i=1; i <= 10; i++){
  let resultado = i * 2;
   console.log( "2"+ "*" + i + "=" + resultado )
}


for (let i=0; i<5; i++){
  console.log("el valor de I es:", i)
}