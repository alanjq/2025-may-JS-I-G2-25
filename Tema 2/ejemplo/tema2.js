function saludar(){
    console.log('Buenas noches')
}

function noSaludar(){
    console.log('-No hay saludo-')
}

function algo(c){
    return 3 + 2 + c
}

/*
const SALUDO = true

// Si el resultado es true
if( SALUDO == true ){
    saludar()
}else{
    noSaludar()
}

console.log(algo(7))
*/
// Esta función devuelve el tiempo [am] antes de las 12 y [pm] después de las 12
function obtenerTiempo(hora){
    if(hora >= 12 ){
        return 'pm'
    }

    return 'am'
}

function actualizarHora(){
    let fecha = new Date()
    let hora_actual = fecha.getHours()
    let ahora = {
        dia: SEMANA[fecha.getDay()].toUpperCase(),
        hora: hora_actual,
        minuto: fecha.getMinutes(),
        tiempo: obtenerTiempo(hora_actual),
        numeroDia: fecha.getDate(),
        mes: MESES[fecha.getMonth()]
    }
    // Cambio temporal
    ahora.dia = false
    // Avisar cuando sea fin de semana
    if(ahora.dia == 'VIERNES' || ahora.dia == 'LUNES'){
        
        console.log('El fin de semana está cerca')
        // else if(ahora.dia == 'LUNES'){
        //     console.log('Ya pasó el fin de semana')
        // } 
    }
    else{
        console.log('No es fin de semana')
    }

    return ahora
}

const SEMANA = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
]

const MESES = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
]

// Función tipo flecha
const cambiarTexto = (idElemento, nuevoValor) => document.getElementById(idElemento).innerText = nuevoValor

function cambiarTexto2(idElemento, nuevoValor){
    document.getElementById(idElemento).innerText = nuevoValor
}

function actualizarReloj(){
    let ahora = actualizarHora()
    cambiarTexto('reloj_dia', ahora.dia)
    cambiarTexto('reloj_hora', ahora.hora)
    cambiarTexto('reloj_minuto', ahora.minuto)
    cambiarTexto('reloj_tiempo', ahora.tiempo)
    cambiarTexto('reloj_fecha_numero', ahora.numeroDia)
    cambiarTexto('reloj_mes', ahora.mes)
}

function convertirNumero(texto){
    return texto && !isNaN(texto.value) ? parseInt(texto.value) : 0

    // if(texto && texto.value != ''){
    //     let resultado = !isNaN(texto.value) ? parseInt(texto.value) : 0
    //     return resultado
    //     // console.log('resultado (',resultado,') es', typeof resultado )
    // }else{
    //     console.log('no es un número')
    // }
    
}

// Validar número desde el input
function validarNumeroDeInput(){
    let numero1 = document.getElementById('input1')
    let numero2 = document.getElementById('input2')
    let suma = convertirNumero(numero1) + convertirNumero(numero2)
    
    let resultado = document.querySelector('#resultadoValidacion')
    resultado.innerText = suma
}
