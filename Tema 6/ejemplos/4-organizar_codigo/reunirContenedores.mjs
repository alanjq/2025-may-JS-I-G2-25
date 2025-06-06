function obtenerBolsas() {
    return 6
}

function obtenerCajas() {
    return 1
}

export function reunirContenedores(tipo) {
    let bolsas = obtenerBolsas()
    let cajas = obtenerCajas()
    if (tipo == 'bolsas') {
        return bolsas
    } else if (tipo == 'cajas') {
        return cajas
    }
    return { bolsas, cajas }
}
