const DIAS_SEMANA = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]

function numeroFecha(numero = 0){
    // 4 -> 04     12 -> 12
    if(numero >= 10){
        return numero
    }
    return "0"+numero
}

function mes(numero){ // 5
    // false || true // or - se cumple una condición o la otra
    // false && true // and - se deben cumplir ambas condiciones
    // !numero - no hay número o es vacío
    if(isNaN(numero) || numero < 0 || numero > 11){ // Que no tenga un valor
        return {}
    }
    // if(numero == 1){
    //     return "Enero"
    // } else if(numero == 2){
    //     return "Febrero"
    // } else if(numero == 3){
    //     return "Marzo"
    // }
    // else {
    //     return numero + " no es un valor válido"
    // }
    let mes = ""
    switch(numero){
        case 0:
            mes = "Enero"
            break;
        case 1:
            mes = "Febrero"
            break;
        case 2:
            mes = "Marzo"
            break;
        case 3:
            mes = "Abril"
            break;
        case 4:
            mes = "Mayo"
            break;
        case 5:
            mes = "Junio"
            break;
        case 6:
            mes = "Julio"
            break;
        case 7:
            mes = "Agosto"
            break;
        case 8:
            mes = "Septiembre"
            break;
        case 9:
            mes = "Octubre"
            break;
        case 10:
            mes = "Noviembre"
            break;
        case 11:
            mes = "Diciembre"
            break;
        default: return "Ningún mes coincide con el valor ingresado"
    }
    // Hasta aquí [mes] era string, ahora se convierte en objeto
    mes = {
        indice: numero, // el valor de array 0-11
        numero: numeroFecha(numero + 1),
        nombre: mes
    }
    // Devolver el objeto de mes
    return mes
}

function imprimirFecha(){
    let hoy = {
        // La fecha con números
        year: fechadehoy.getFullYear(),
        month: numeroFecha(fechadehoy.getMonth()+1),
        day: numeroFecha(fechadehoy.getDate()),
        // la fecha con letras
        dia_semana: DIAS_SEMANA[fechadehoy.getDay()],
        mes: mes(fechadehoy.getMonth()).nombre
    }
    return `Hoy es ${hoy.dia_semana}, ${hoy.year}/${hoy.month}/${hoy.day} ${hoy.mes}`
}

function obtenerObjetoFecha(){
    let hoy = {
        // La fecha con números
        year: fechadehoy.getFullYear(),
        month: numeroFecha(fechadehoy.getMonth()+1),
        day: numeroFecha(fechadehoy.getDate()),
        // la fecha con letras
        dia_semana: DIAS_SEMANA[fechadehoy.getDay()],
        mes: mes(fechadehoy.getMonth())
    }
    return hoy
}


let eldia = 'Lunes'
// Instanciar objeto Date dentro de la variable fechadehoy
let fechadehoy = new Date()

// console.log(fechadehoy)

// console.log(imprimirFecha())

// let miFecha = 
