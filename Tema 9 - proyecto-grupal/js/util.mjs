export function formatoMoneda(valor, mxn = false){
    // 1000
    let signo = valor > 0 ? '+' : ''
    // '+'
    let cantidad = valor.toLocaleString('es-MX', {style: 'currency', currency: 'MXN'})
    // 1,000
    let currency = mxn ? ' MXN' : ''
    //+1,000 MXN
    return `${signo}${cantidad}${currency}`
}

export function formatoPorcentaje(valor){
    return valor + '%'
}
