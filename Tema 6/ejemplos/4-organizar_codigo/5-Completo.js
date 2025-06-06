import { irAlSupermercado } from "./irAlSuper.mjs";
import { obtenerInventario } from "./obtenerInventario.mjs";
import { realizarCompra } from "./realizarCompra";
import { reunirContenedores } from "./reunirContenedores.mjs";

// 1- Identificar lo que necesito
obtenerInventario()

// 2- Reunir los contenedores
reunirContenedores()

// 3- Ir al supermercado
irAlSupermercado()

// 4- Realizar la Compra
realizarCompra()

// 5- Regresar a casa
irACasa()
