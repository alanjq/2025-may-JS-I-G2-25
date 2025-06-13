function aplicarClasesCSS(){
    const botones = document.querySelectorAll('button')
    botones.forEach((boton)=>{
        boton.classList.add('btn', 'btn-primary')
    })

    const inputs = document.querySelectorAll('input[type="text"]')
    inputs.forEach((input)=>{
        input.classList.add('btn btn-outline-info')
    })

    const elreloj = document.querySelector('#reloj')
    elreloj.classList.add('jumbotron','text-center')
}
