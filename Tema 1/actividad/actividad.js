function mostrarMiNombre(){
    /**
     * prompt: solicita un valor y muestra un mensaje
     * primer parámetro: el texto a mostrar
     * segundo parámetro: un valor por defecto
     */
    let elnombre = prompt("Ingresa tu nombre", "Alguien del grupo G2")
    if(elnombre.length > 3){
        minombre.innerText = elnombre
    }else{
        minombre.innerText = '[INGRESA UN NOMBRE DE MÁS DE 4 LETRAS]'
    }
}
