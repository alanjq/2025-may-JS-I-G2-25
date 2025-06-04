import { Dato } from "./Dato.mjs";

export class Ingreso extends Dato {
    constructor(valor, descripcion) {
        super(valor, descripcion, 'Ingreso')
    }

    getValor(){
        // Output: "$1,234,567.89"
        return "+"+this._valor.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})
    }

    getVista(id){
        return `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${this._descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${this.getValor()}</div>
                <div class="elemento_eliminar" data-index="${id}">
                    <button type="button" class="elemento_eliminar--btn" data-index="${id}">
                        <ion-icon name="close-circle-outline" role="img" class="md hydrated" data-index="${id}"></ion-icon>
                    </button>
                </div>
            </div>
        </div>`
    }
}
