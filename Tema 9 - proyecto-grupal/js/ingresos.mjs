export let ingresos = {
    elementos: [],

    agregar(descripcion, valor){
        this.elementos.push({descripcion, valor})
    },

    eliminarPorIndice(indice){
        this.elementos.splice(indice, 1)
    },

    eliminarPorDescripcion(descripcion){
        // Trae un arreglo con los elementos que no coincidan
        let newElementos = this.elementos.filter((item)=>item.descripcion != descripcion)
        this.elementos = newElementos
    },

    suma() {
        return this.elementos.reduce((a, b) => a.valor + b.valor)
    }
}
