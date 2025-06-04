import {Animal} from './animal.mjs'

export class Gato extends Animal {
    
    constructor(nombre, edad, raza, juguetes){
        super(nombre, edad, raza, juguetes)
    }

    getNombre(){
        return 'Mr. ' + this.nombre
    }

    getEdad(){
        return this.edad + ' meses'
    }

    setJuguetes(juguetes){
        this.juguetes = juguetes
    }

    maullar(){
        console.log('miau')
    }
}

export let otrovalor = {}

export default Gato
