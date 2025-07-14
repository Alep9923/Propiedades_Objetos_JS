// Ejercicio 2: Lista de compras (Array + for)
// 1 - Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
// 2 - Añade 3 productos con el método agregar()
// 3 - Implementa el método mostrar() que use un for para listar los productos numerados (ej: "1. Manzanas").
// 4 - Muestra la lista completa en consola.

function ListaCompras() {
    this.productos = [];  

    this.agregar = function(producto) {
        this.productos.push(producto);
    };
    
    this.mostrar = function() {
        console.log("Lista de Compras:");
        for (let i = 0; i < this.productos.length; i++) {
            console.log((i + 1) + ". " + this.productos[i]);
        }
    };
}

const miLista = new ListaCompras();

miLista.agregar("Manzanas");
miLista.agregar("Peras");
miLista.agregar("Leche");

miLista.mostrar();