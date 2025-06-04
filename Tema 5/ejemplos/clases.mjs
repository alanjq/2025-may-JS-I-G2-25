import {Mensaje, archivoActual} from "./clases/animal.mjs"

Mensaje()
console.log(archivoActual);


const suma = () => {
    console.log('this en funcion flecha', this)
}

// console.log(suma())

function CrearPerro(nombre = '', edad = '', ladrar, caminar){
    // console.log('this', this);
    
    let perro = {}

    // Propiedades
    perro.nombre = nombre
    perro.edad = edad
    // Métodos
    perro.ladrar = ladrar
    perro.caminar = caminar

    // Devolvemos el objeto
    return perro
}

let perros = Array(10).fill({})
perros.forEach((item, index)=>{
    perros[index] = CrearPerro('Perro' + index, index)
})


let miObjeto = {
    suma,
    CrearPerro
}
