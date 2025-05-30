// Declarar un objeto usando var
var objeto1 = {
    key: 'ingreso1',
    // propiedad - valor
    _nombre: "[sin nombre]",
    // definir un método()
    getNombre(){
        return this._nombre
    },
    setNombre(nuevoNombre){
        if(nuevoNombre.length < 3){
            console.warn('El nombre debe ser mayor a 3 caracteres')
        }
        this._nombre = nuevoNombre
    }
}

// Accediendo a los métodos y propiedades (atributos)
// objeto1.setNombre()

// usando let
let objeto2 = {
    color: 'azul',

}

// usando const
const objeto3 = {
    aroma: 'coco'
} // no se puede reemplazar

const Ingresos = {
    _ingresos: [],
    suma: 0,

    /**
     * Agrega un ingreso a la lista
     * @param {number} valor El monto del ingreso
     * @param {string} descripcion La descripción del ingreso
     */
    setIngreso(valor, descripcion){
        // objeto ingreso
        let unIngreso = {
            valor: parseFloat(valor),
            descripcion
        }

        this.suma += parseFloat(valor)
        
        this._ingresos.push(unIngreso)
        console.log('Se agregó el ingreso:', descripcion, '$', valor)
        this.actualizarVista()
    },

    actualizarVista(){
        let lista = document.getElementById('lista_ingresos')
        // comprobamos que el elemento existe
        if(lista){
            let elementosLista = ''
            this._ingresos.forEach((item)=>{
                elementosLista += `<li>$ ${item.valor} | ${item.descripcion}</li>`
            })
            lista.innerHTML = elementosLista
        }
    }
}

function agregarIngreso() {
    let txtValor = document.getElementById('ingreso_valor')
    let txtDescripcion = document.getElementById('ingreso_descripcion')

    Ingresos.setIngreso(txtValor.value, txtDescripcion.value)
    console.log('El total actual de ingreso es', Ingresos.suma)
}

// ejemplo para el proyecto
let ingreso = {
    _cantidad: 0,
    _descripcion: '',

    setCantidad(numero){
        if(numero >=0){
            this._cantidad = numero
        }else{
            console.error('Cantidad debe ser mayor a 0')
        }
    },
    
    setDescripcion(texto){
        if(texto.length > 5){
            this._descripcion = texto
            return;
        }
        console.error('La descripción debe ser mayor a 5 caracteres')
    }
}
