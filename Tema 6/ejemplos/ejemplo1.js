// Propiedades mutables
let cadena_mutable = "Cadena"
let objeto_mutable = "objeto"

console.log(objeto_mutable)

objeto_mutable = function(){
    return 'funciono'
}
console.log(objeto_mutable())

cadena_mutable = "nuevo valor"

objeto_mutable = {
    otro: 'c',
    valor: 'd'
}
console.log(objeto_mutable)


// Propiedades inmutables
const cadena_inmutable = "Cadena"
const objeto_inmutable = {
    nombre: 'a',
    apellido: 'b',
}
// objeto_inmutable = {
//     adicional: 'extra'
// }
console.log(objeto_inmutable)
