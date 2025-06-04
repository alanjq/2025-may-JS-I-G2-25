// Clase padre
export class Animal {
    nombre
    edad
    raza

    constructor(nombre, edad, raza){
        this.setNombre(nombre)
        this.setRaza(raza)
        this.setEdad(edad)
    }

    setNombre(nombre) {
        this.nombre = nombre
    }

    setEdad(edad) {
        this.edad = edad
        if(edad > 15){
            this.edad_avanzada = true
        }else{
            delete this.edad_avanzada
        }
    }

    setRaza(raza){
        this.raza = raza
    }

    getNombre = () => this.nombre
    getEdad = () => this.edad
    getRaza = () => this.raza
}
