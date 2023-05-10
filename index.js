// colorchange("red", "titulo")
// colorchange("blue", "titulo2")
// colorchange("gray", "titulo3")
// function bgcolor1(){
//     document.body.style.backgroundColor="blue";
// }
// function bgcolor2(){
//     document.body.style.backgroundColor="pink";   
// }
// function suma (){
//    const valor1 = document.getElementById("numero1").value
//    const valor2 = document.getElementById("numero2").value
//    const suma = parseFloat (valor1) + parseFloat(valor2)
//    document.getElementById("resultado").innerHTML = suma;
// }
// function resta () {
//     const valor1 = document.getElementById("numero1").value
//    const valor2 = document.getElementById("numero2").value
//    const resta = parseFloat (valor1) - parseFloat(valor2)
//    document.getElementById("resultado").innerHTML = resta;
// }
// function multiplicacion () {
//     const valor1 = document.getElementById("numero1").value
//     const valor2 = document.getElementById("numero2").value
//     const varmultiplicacion= parseFloat (valor1) * parseFloat(valor2)
//     document.getElementById("resultado").innerHTML = varmultiplicacion;
// }
// function division () {
//     const valor1 = document.getElementById("numero1").value
//     const valor2 = document.getElementById("numero2").value
//     const division = parseFloat (valor1) / parseFloat(valor2)
//     document.getElementById("resultado").innerHTML = division;
// }
// function cbackground (){
//     const colorbc = document.getElementById("cbcolor").value 
//     document.body.style.backgroundColor= colorbc;
// }
// let contar = 0
// let contar2 = 0
// function contador1 (){
//   contar=contar+1 
//   document.getElementById("puntos1").innerHTML = contar
// }
// function contador2 (){
//   contar2=contar2+1 
//   document.getElementById("puntos2").innerHTML = contar2 
// }
// function saludar(nombre, edad) {
//     return `Hola, ${nombre}, tienes ${edad}!`;
// }
// function saludar(nombre, edad) {
//     return "¡Hola," + nombre + ", tienes " + edad + "!";
// }
// console.log(saludar("Cesar",26))

// function multiplicacion(num1,num2){
//     return num1 * num2
// }
// console.log(multiplicacion (1,4))

// function sumar(a,b){
//     return a / b
// }
// console.log (sumar (2,7))
function calcularIVA(precio){
    return precio + (21 * precio / 100)
}
console.log (calcularIVA(22))