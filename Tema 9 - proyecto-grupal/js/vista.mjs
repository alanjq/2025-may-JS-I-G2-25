import { formatoMoneda, formatoPorcentaje } from "./util.mjs"
import { ingresos } from "./ingresos.mjs"

export class Vista {
    // .presupuesto_valor
    // .presupuesto_ingreso--valor
    // .presupuesto_ingreso--porcentaje

    constructor(){
        // Inicializar la vista
        console.log('Inicializando la vista')
        ingresos.elementos = []

        document.getElementById('agregar').addEventListener('click', this.agregar)

       

        // this.egresos = egresos
        this.presupuesto(0)
    }

    // Aquí define qué tipo de elemento se agrega (si ingreso o egreso)
    agregar(){

        // if(tipo== '+')
        // Simular ingreso de valores:
        ingresos.agregar('Salario', 1504)
        // ingresos.agregar('Venta de coche', 30000)
        this.actualizar()
        console.log(ingresos)
        // ---
    }

    // Se actualizar la página según realicemos cambios
    actualizar(){
        this.presupuesto_ingreso(ingresos.suma())
    }

    /**
     * Muestra la cantidad de presupuesto disponible al principio de la página
     * @param {int} cantidad La cantidad de presupuesto a colocar
     */
    presupuesto(cantidad){
        document.querySelector('.presupuesto_valor').innerText = formatoMoneda(cantidad, true)
    }

    presupuesto_ingreso(cantidad){
        document.querySelector('.presupuesto_ingreso--valor').innerText = formatoMoneda(cantidad)
    }

    presupuesto_ingreso_porcentaje(cantidad){
        document.querySelector('.presupuesto_ingreso--porcentaje').innerText = formatoPorcentaje(cantidad)
    }

    presupuesto_egreso(cantidad){
        document.querySelector('.presupuesto_egreso--valor').innerText = formatoMoneda(cantidad)
    }

    presupuesto_egreso_porcentaje(cantidad){
        document.querySelector('.presupuesto_egreso--porcentaje').innerText = formatoPorcentaje(cantidad)
    }

    // Usando HTML
    listaIngresosHtml(html){
        document.querySelector('#lista-ingresos').innerHTML = html
    }

    // Crear cada elemento de la lista de ingreso
    crearElementoIngresoHtml(descripcion, valor, indice){
        return `
            <div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">${formatoMoneda(valor)}</div>
                    <div class="elemento_eliminar">
                        <button type="button" class="elemento_eliminar--btn" data-indice="${indice}">
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>
        `
    }

    // Usando objetos
    listaIngresosObjeto(...lista){
        document.querySelector('#lista-ingresos').append(...lista)
    }

    crearElementoIngresoObjeto(descripcion, valor, indice){
        let contenedor = document.createElement('div')
            let divDescripcion = document.createElement('div')
            let derecha = document.createElement('div')
                let divValor = document.createElement('div')
                let divEliminar = document.createElement('div')
                    let btnEliminar = document.createElement('button')
                        let ionIcon = document.createElement('ion-icon')
                        ionIcon.setAttribute('name', 'close-circle-outline')
                    btnEliminar.append(ionIcon)
                    btnEliminar.type = "button"
                    btnEliminar.dataset.indice = indice
                    btnEliminar.classList.add('elemento_eliminar--btn')
                divEliminar.append(btnEliminar)
                divEliminar.classList.add('elemento_eliminar')
                divValor.classList.add('elemento_valor')
                divValor.innerText = formatoMoneda(valor)
            derecha.append(divValor, divEliminar)
            derecha.classList.add('derecha', 'limpiarEstilos')
            divDescripcion.classList.add('elemento_descripcion')
            divDescripcion.innerText = descripcion
        contenedor.classList.add('elemento', 'limpiarEstilos')
        contenedor.append(divDescripcion, derecha)
        return contenedor
    }
   
}
