// llamar a las funciones sin agregar tanta lógica

import { Egreso } from "./Egreso.mjs"
import { Ingreso } from "./Ingreso.mjs"

// origen de los datos
// select -> tipo
// input -> descripcion
// input -> valor

let ingresos = []
let egresos = []


window.onload = function () {
    // Con esto podemos ver los valores de las variables en consola
    window.ingresos = ingresos
    window.egresos = egresos

    document.getElementById('agregar').addEventListener('click', agregar)
    // Para el botón eliminar
    document.getElementById('lista-ingresos').addEventListener('click', eliminarIngresos)
}

const actualizarVista = () => {
    actualizarVistaIngreso()
    // actualizarCabeceroIngreso()
    // actualizarCabeceroEgreso()
    // actualizarPresupuesto()
    // actualizarVistaEgreso()
}

function actualizarVistaIngreso(){
// Actualizar la lista de ingresos
        // document.getElementById('lista-ingresos').innerHTML = ganancia.getVista()
        // Esto va a ser otra función
        let html = ""
        ingresos.forEach((item, indice) => {
            html += item.getVista(indice)
        })
        document.getElementById('lista-ingresos').innerHTML = html
}

function agregar() {
    let isIngreso = document.getElementById('tipo').value == 'Ingreso'
    let txtDescripcion = document.getElementById('descripcion').value
    let monto = document.getElementById('valor').value

    if (isIngreso) {
        let ganancia = new Ingreso(monto, txtDescripcion)
        ingresos.push(ganancia)
        console.log('ingresos', ingresos);
        actualizarVista()

    } else {
        let gasto = new Egreso(monto, txtDescripcion)
        egresos.push(gasto)
        console.log('egresos', egresos);
    }

}

function eliminarIngresos(event) {
    let target = event.target
    if(target.dataset.index){
        let id = parseInt(target.dataset.index)
        // CANTIDAD_A_ELIMINAR - Este parámetro siempre va para eliminar sólo 1 elemento
        const CANTIDAD_A_ELIMINAR = 1
        ingresos.splice(id, CANTIDAD_A_ELIMINAR)
        // Actualizar la vista HTML
        actualizarVista()
    }
    console.log(target)
}
