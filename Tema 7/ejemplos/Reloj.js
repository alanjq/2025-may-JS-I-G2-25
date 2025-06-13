class Reloj {
    constructor(hora, minuto, contenedor) {
        this._hora = hora
        this._minuto = minuto
        this._contenedor = contenedor
        // mostramos el reloj al instanciar el objeto
        this.actualizarReloj()
    }

    setHora(hora) {
        this._hora = hora
        this.actualizarReloj()
    }
    setMinuto(minuto) {
        this._minuto = minuto
        this.actualizarReloj()
    }

    actualizarReloj() {
        this._contenedor.innerHTML = `<h2>
            <span>${this._hora}</span>
            <span>:</span>
            <span>${this._minuto}</span>
        </h2>`
    }
}
