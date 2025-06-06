/**
 * Esta contiene información sobre el inventario de la cocina
 * @property _nombre Este valor no se usa, solo fue ejemplo
 * @property _frutas Arreglo con las frutas
 */
export class Inventario {
    constructor(frutas, verduras, congelados) {
        this._frutas = frutas
        this._verduras = verduras
        this._congelados = congelados

        let nombre
        nombre = 'algo'
        
    }
    
    //#region Propiedades y métodos que queremos ocultar en el editor de VS
    _nombre // acá se llama propiedad

    _frutas
    get frutas() {
        return this._frutas
    }
    set frutas(value) {
        this._frutas = value
    }

    _congelados
    get congelados() {
        return this._congelados
    }
    set congelados(value) {
        this._congelados = value
    }

    _verduras
    get verduras() {
        return this._verduras
    }
    set verduras(value) {
        this._verduras = value
    }
    //#endregion

    /**
     * Devuelve los datos disponibles en el inventario
     * @returns Devuelve los elementos disponibles en la cocina
     */
    obtenerDatos(){

    }

    /**
     * Asigna un valor a la propiedad nombre.
     * @param {string} nombre El nombre de la persona
     */
    setNombre(nombre){
        this._nombre = nombre
    }
}