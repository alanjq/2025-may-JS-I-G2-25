function cargarPagina(){
    
    // id
    let id = obtenerIdProducto()
    if(id){
        cargarInfoProducto(id)
    }else{
        console.error('No hay ID')
    }

}

function cargarInfoProducto(id) {
    let url = 'https://fakestoreapi.com/products/' + id
    // trae los datos desde la URL indicada
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            console.log('Producto', data)
        })
        .catch((error) => {
            console.log('Falló', error)
        })
}

function obtenerIdProducto(){
    const params = new URLSearchParams(window.location.search)
    return params.get('id_producto')
}