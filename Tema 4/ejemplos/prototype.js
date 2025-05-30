// Modificar prototype
Object.prototype.toString = function(){
    return JSON.stringify(this)
}

Object.prototype.toLocalStorage = function(){
    if(this.key){
        localStorage.setItem(this.key, JSON.stringify(this))
    }
}
Object.prototype.fromLocalStorage = function(){
    if(this.key){
       return JSON.parse(localStorage.getItem(this.key))
    }
}