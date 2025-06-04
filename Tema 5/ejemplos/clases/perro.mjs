import { Animal } from "./animal.mjs"

export class Perro extends Animal {
    constructor(nombre, edad, alergias) {
        super()
        this.setNombre(nombre)
        this.setEdad(edad)
        this.setAlergias(alergias)

        // Eliminar del padre
        delete this.raza
        delete this.setRaza
        delete this.getRaza
    }

    setAlergias(alergias) {
        if (!alergias) {
            delete this.alergias
        }
        this.alergias = alergias
    }

    getEdad() {
        return this.edad + ' años'
    }

    getAlergias() {
        if (!this.alergias) {
            return 'Ninguna'
        } else {
            return this.alergias;
        }
    }
}