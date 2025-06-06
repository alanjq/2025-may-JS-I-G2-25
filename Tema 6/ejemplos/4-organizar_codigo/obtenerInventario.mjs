import { Inventario } from "./Inventario.mjs"

export function obtenerInventario() {
    // Fuente de datos
    let inventario = new Inventario(["coco", "manzana", "uvas"], ["cilantro", "tomate", "papa"], ["pollo", "cerdo"])
    let congelados = inventario.congelados
    let verduras = inventario.verduras
    let frutas = inventario.frutas

    return { frutas, congelados, verduras }
}
