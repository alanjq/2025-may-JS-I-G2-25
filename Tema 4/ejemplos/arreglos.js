let arreglo1 = []
let arreglo2 = [10,,50,3,13,]
let arreglo3 = Array(15)
arreglo3[2] = 'aqui sí hay datos'

const ALUMNOS = ["laura", "beRnArdo", "kaRla"]

function listarAlumnos(){
    ALUMNOS.forEach((persona, indice)=>{
        let letras = persona.split('') // devuelve un arreglo de letras
        let nuevaPalabra = ""
        for(let indice = 0; indice < letras.length; indice++){
            if(indice == 0){
                nuevaPalabra = letras[indice].toUpperCase()
                // letras[0] = letras[0].toUpperCase()
            }else{
                nuevaPalabra += letras[indice].toLowerCase()
            }
        }
        // letras = letras.join('')
        
        console.log(`${indice+1}.-${nuevaPalabra}, original: ${letras}`)
    })
}
