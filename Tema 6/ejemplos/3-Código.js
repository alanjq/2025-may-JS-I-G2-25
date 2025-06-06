// 1- Identificar lo que necesito
let nombre  // acá se llama variable
function algo(){
    nombre = 'alan'
}

class Inventario {
    constructor(frutas, verduras, congelados) {
        this._frutas = frutas
        this._verduras = verduras
        this._congelados = congelados

        let nombre
        nombre = 'algo'
        
    }
    
    addFruta(fruta){
        this._frutas = [...this._frutas, fruta]
    }
    
    _nombre // acá se llama propiedad

    _frutas
    get frutas() {
        return this._frutas
    }
    set frutas(value) {
        this._frutas = value
    }

    _congelados
    get congelados() {
        return this._congelados
    }
    set congelados(value) {
        this._congelados = value
    }

    _verduras
    get verduras() {
        return this._verduras
    }
    set verduras(value) {
        this._verduras = value
    }

    obtenerDatos(){

    }
    setNombre(){

    }
}


function obtenerInventario() {
    // Fuente de datos
    let inventario = new Inventario(["coco", "manzana", "uvas"], ["cilantro", "tomate", "papa"], ["pollo", "cerdo"])
    let congelados = inventario.congelados
    let verduras = inventario.verduras
    let frutas = inventario.frutas

    return { frutas, congelados, verduras }
}

// console.log(obtenerInventario())

// 2- Reunir los contenedores
function obtenerBolsas() {
    return 6
}
function obtenerCajas() {
    return 1
}
function reunirContenedores(tipo) {
    let bolsas = obtenerBolsas()
    let cajas = obtenerCajas()
    if (tipo == 'bolsas') {
        return bolsas
    } else if (tipo == 'cajas') {
        return cajas
    }
    return { bolsas, cajas }
}

// console.log(reunirContenedores('bolsas'))

// 3- Ir al supermercado
function desplazarse(donde){
    // elegir tipo de transporte
    // llevo cosas conmigo
    // condiciones del clima
    // cantidad disponible
    let clima = 'sol'
    let llevoMuchasCosas = true

    if(clima == 'sol'){
        if(llevoMuchasCosas){
            return 'tomar transporte a ' + donde
        }else{
            return 'caminar a ' + donde
        }
    }else{
        return 'tomar taxi a' + donde
    }
}

function irAlSupermercado(){
    console.log(desplazarse('supermercado'))
}

// 4- Realizar la Compra
function consultarProductos(){
    console.log('Buscar artículos para comprar');
}

function pagar(){

}

function empacar(){
    
}

function salir(){}

function realizarCompra() {
    consultarProductos()
    pagar()
    empacar()
    salir()
}
// 5- Regresar a casa
function irACasa(){
   
    console.log(desplazarse('casa'))

}
