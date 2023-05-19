function sumar(){
    const valor1 = document.getElementById("numero1").value
    const valor2 = document.getElementById("numero2").value
    const suma = parseFloat (valor1) + parseFloat (valor2)
    document.getElementById("resultado").innerHTML= suma 
}
