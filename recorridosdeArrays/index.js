let articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},  
];

// articulos.forEach(function(artilulo){
//     console.log(artilulo.nombre);
// })

var articulosbaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})

articulosbaratos()
// let articulosFiltrados = articulos.filter(function(articulo){
//     return articulo.costo <= 500
// });

//FOREACH
// let nombres = ["Paula", "Rocio", "cielo", "Andres", "Cesar"];
// nombres.forEach(function(nombre){
//     console.log(nombre);
// })

//MAP
// const numeros = [1, 2, 3, 4, 5];

// const multiplicados = numeros.map(function(numero) {
//   return numero * 2;
// });

// console.log(multiplicados);

// let nombres = ["Paula", "Rocio", "cielo", "Andres", "Cesar"];
//  let saludar = nombres.map (function(nombre){
//     return "HOLA " + nombre;
//  });
//  console.log(saludar)
