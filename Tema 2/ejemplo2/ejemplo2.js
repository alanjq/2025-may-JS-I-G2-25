function mostrarMensaje() {
    // buscar el input de nombre
    // guardar el nombre
    // buscar el label para mostrar el mensaje
    // reemplazar el texto del label
    let nombre = document.getElementById('inputNombre')
    let mensaje = document.getElementById('labelMensaje')
    mensaje.innerText = "Hola, " + nombre.value
}
