export const desplazarse = (donde) => {
    let mensaje = validarMedio(donde)
    console.log(mensaje)
}

export function validarMedio(destino){
    let clima = 'sol'
    let llevoMuchasCosas = true

    if(clima == 'sol'){
        if(llevoMuchasCosas){
            return 'tomar transporte a ' + destino
        }else{
            return 'caminar a ' + destino
        }
    }else{
        return 'tomar taxi a' + destino
    }
}