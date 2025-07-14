function Carrito() {
    this.productos = [];
    this.total = 0;
    
    this.agregarProducto = function(nombre, precio) {
        this.productos.push({nombre, precio});
        this.total += precio;
    };
    
    this.calcularDescuento = function() {
        let descuento = 0;
        if (this.total > 100) {
            descuento = this.total * 0.1;
            this.total -= descuento;
            console.log("Descuento aplicado: $" + descuento);
        } else if (this.total > 50) {
            descuento = this.total * 0.05;
            this.total -= descuento;
            console.log("Descuento aplicado: $" + descuento);
        } else {
            console.log("No se aplica descuento.");
        }
    };
    
    this.mostrar = function() {
        console.log("Su lista de Compras es la siguiente:");
        for (let i = 0; i < this.productos.length; i++) {
            console.log((i+1) + ". " + this.productos[i].nombre + " - $" + this.productos[i].precio);
        }
        console.log("\nSu total es de: $" + this.total + "\n");
    };
}

const miCarrito = new Carrito();
miCarrito.agregarProducto("Azucar", 30);
miCarrito.agregarProducto("Miel", 25);
miCarrito.agregarProducto("Arroz", 60);
miCarrito.mostrar();
miCarrito.calcularDescuento();

