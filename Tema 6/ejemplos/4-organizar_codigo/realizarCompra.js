function consultarProductos(){
    console.log('Buscar artículos para comprar');
}

function pagar(){

}

function empacar(){
    
}

function salir(){}

export function realizarCompra() {
    consultarProductos()
    pagar()
    empacar()
    // Agregamos elementos al inventario
    let inventario = new Inventario(["uvas", "peras"])
    inventario.addFruta("manzana")
    salir()
}