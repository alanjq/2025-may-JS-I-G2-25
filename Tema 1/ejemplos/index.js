console.log('Hola desde index.js');
// Constantes
let NOMBRE = "Maria"
// NOMBRE = "Maria Reyes"

// const NOMBRE = "Bernardo"

// Valores de cadena
let saludo = 'Saludo ' + NOMBRE
saludo = "Saludo " + NOMBRE
saludo = `Saludos, ${NOMBRE}`

let valor1 = 3
let valor2 = 5

console.log(suma('Victor', 3, 5))
console.log(suma('Sergio', 7, 1))
console.log(suma('Blanca', 2, 3))

// Funciones
function suma(nombre, a, b){
    let resultado = a + b
    return `Hola, ${nombre} el resultado de la suma es: ${resultado}` 
}

function cargaCompleta(){
    // alert('La página ya cargó')
    // console.log('el alert se cerró')
}

function clic(){
    console.log('Se hizo clic en el botón')
}


