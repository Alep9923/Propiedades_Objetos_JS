// Ejercicio 2: Lista de compras (Array + for)
// 1 - Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
// 2 - Añade 3 productos con el método agregar()
// 3 - Implementa el método mostrar() que use un for para listar los productos numerados (ej: "1. Manzanas").
// 4 - Muestra la lista completa en consola.

class listaCompras {
    constructor () {
      this.productos = [];  
    }
    agregar(producto){
        this.productos.push(producto)
    }
    
    mostrar() {
        console.log("Lista de Compras:");
        for (let i = 0; i < this.productos.length;i++){
            console.log((i + 1) + ". " + this.productos[i]);
        }
    }
}

const miLista = new listaCompras();

miLista.agregar("Manzanas");
miLista.agregar("Peras");
miLista.agregar("Leche");

miLista.mostrar();