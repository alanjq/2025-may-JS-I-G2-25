export class Dato {
    _valor
    _descripcion
    _tipo

    constructor(valor, descripcion, tipo){
        this.setValor(valor)
        this._descripcion = descripcion
        this.tipo = tipo
    }

    setValor(valor){
        let nuevo = parseInt(valor)
        // NaN = Not A Number
        if(!isNaN(nuevo)){
            // Si es un número válido
            this._valor = valor
        }else{
            this._valor = 0
        }
    }
}
