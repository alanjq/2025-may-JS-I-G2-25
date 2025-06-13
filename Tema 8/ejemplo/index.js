console.log('Inicio')

let contenedorCards = document.getElementById('contenido')

function cargarPagina(){
    cargarProductos()
    // let h1 = document.createElement("h1")
    // h1.classList.add('titulo')
    // h1.textContent = 'Hola desde JS + HTML'

    // contenedor.append(h1)
}

function crearTarjetaProducto(producto){
    // Creamos los elementos
    let card = document.createElement('article')
    card.classList.add('card')
    card.style.width = '18rem'
    
    let card_image = document.createElement('img')
    card_image.classList.add('card-img-top', 'col')
    card_image.src = producto.image
    card_image.alt = producto.title

    let card_body = document.createElement('section')
    card_body.classList.add('card-body')

    card.append(card_image)
    card.append(card_body)

    let card_title = document.createElement('a')
    card_title.classList.add('card-title')
    card_title.textContent = producto.title
    card_title.href = 'producto.html'

    let card_price = document.createElement('p')
    card_price.classList.add('text-center')
    card_price.textContent = producto.price

    let card_text = document.createElement('p')
    card_text.classList.add('card-text')
    card_text.textContent = producto.description
    
    let card_form = document.createElement('form')
    card_form.action = "producto.html"
    card_form.method = 'get'

    // Creamos un input hidden con el id de producto
    let card_form_productid = document.createElement('input')
    card_form_productid.type = 'hidden'
    card_form_productid.name = 'id_producto'
    card_form_productid.value = producto.id
    // Agregamos el input al form
    card_form.append(card_form_productid)
    
    let card_button = document.createElement('button')
    card_button.textContent = "Ver producto"
    card_button.type = 'submit'

    card_body.append(card_title, card_price, card_text)

    // Agregamos la card al contenedor principal
    contenedorCards.append(card)

    // return ` <div class="card" style="width: 18rem;">
    //     <img src="${producto.image}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //         <h5 class="card-title">${producto.title}</h5>
    //         <p>${producto.price}</p>
    //         <p class="card-text">${producto.description}</p>
    //     </div>
    // </div>`
    
    card_body.append(card_form)
    // <div class="card-body">
    //         <h5 class="card-title">${producto.title}</h5>
    //         <p>${producto.price}</p>
    //         <p class="card-text">${producto.description}</p>
    //          <form>
    //          </form>
    //     </div>
    
    card_form.append(card_button)
    //          <form>
    // <button>
    //          </form>

    // Resultado:
    // <div class="card-body">
    //         <h5 class="card-title">${producto.title}</h5>
    //         <p>${producto.price}</p>
    //         <p class="card-text">${producto.description}</p>
    //          <form>
    //              <button>
    //          </form>
    //     </div>
}

// Cargar productos
function cargarProductos(){
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        // Aquí modificaremos
        console.log(data)
        data.map((producto)=>{
            crearTarjetaProducto(producto)
        })
        // Crear tarjeta de producto
        // crearTarjetaProducto()
    });
}

/*
    Product:
        category
        description
        id
        image
        price
        rating
            rate
            count
        title

 */