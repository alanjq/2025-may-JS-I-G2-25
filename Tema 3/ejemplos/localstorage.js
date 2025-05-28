let fechaglobal = {}

function actualizarInformacion(){
    document.querySelector('h2').innerText = getData('nombre') || '[ingrese un nombre]'
    document.querySelector('#ultconex').innerText = getData('ultconex') || '(sin última conexión)'

    // Obtener un JSON
    fechaglobal = JSON.parse(getData('fecha'))
    console.log('FECHA:', fechaglobal)
}

const setData = (clave, valor) => localStorage.setItem(clave, valor)
const getData = (clave) => localStorage.getItem(clave)
const deleteData = (clave) => delete localStorage[clave]

function actualizarConexion(){
    setData('ultconex', imprimirFecha())
    let inputNombre = document.querySelector("#nombre").value
    setData('nombre', inputNombre)
    setData('fecha', JSON.stringify(obtenerObjetoFecha()))
}
