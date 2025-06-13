// Obtener el formulario
// document.getElementsByName('miformulario')[0]
// document.getElementsByTagName('form')[0]
// document.querySelector('form')

// Obtener el formulario
const formulario = document.querySelector('form')
const boton = formulario.querySelector('button')

// formulario.addEventListener

let contenedor = document.getElementById('reloj')
let reloj_1 = new Reloj('00', '00', contenedor)

// Obtener los datos de los inputs
let inputHora = formulario.querySelector('[name="hora"]')
let inputMinuto = formulario.querySelector('[name="minuto"]')

// inputHora.addEventListener('input', function (event) {
//     reloj_1.setHora(event.target.value)
// })

// inputMinuto.addEventListener('input', function(event){
//     reloj_1.setMinuto(event.target.value)
// })

formulario.addEventListener('input', function(event){
    if(event.target.name == 'hora'){
        reloj_1.setHora(event.target.value)
    }
    if(event.target.name == 'minuto'){
        reloj_1.setMinuto(event.target.value)
    }
})

/*
boton.addEventListener('click', () => {
    // Asignar los valores a las etiquetas
    reloj_1.setHora(inputHora.value)
    reloj_1.setMinuto(inputMinuto.value)
    // const reloj = document.querySelector('h2')
    // cambiar el texto de los spans
    // let relojHora = reloj.querySelectorAll('span')[0]
    // let relojMinuto = reloj.querySelectorAll('span')[2]

    // Actualizar el reloj
    // relojHora.innerText = inputHora.value
    // relojMinuto.innerText = inputMinuto.value

})
*/
