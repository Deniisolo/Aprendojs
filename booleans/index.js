function esMayorDeEdad(edad){
 if (edad >= 18) { 
    console.log(true) 
 } else  {
    console.log(false) 
 }
}
esMayorDeEdad(19)

function esPar(num){
if (num % 2===0){
   console.log(true)
} else {
   console.log (false) 
}
}
esPar(5)

function esPositivo(numero){
if (numero > 0) {
  return true
}else{
   return false
}
}
esPositivo(1)

function esVocal(letra){
  if (letra === "a") {
   return true
  }
  if (letra === "e"){
   return true
  }
  if (letra === "i"){
   return true
  }
  if (letra === "o"){
   return true
  }
  if (letra === "u"){
   return true
  } 
  else{
   return false
  }
}
