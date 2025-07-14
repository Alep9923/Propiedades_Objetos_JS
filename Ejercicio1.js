//Ejercicio 1: Libro (Objeto básico + IF): Crear un sistema de prestamo de libreos. 
// Tareas
// 1- Usa el constructor Libro para crear un objeto con título y autor
// 2 - Agrega una propiedad prestados = false
// 3 - Implementa el métodos prestar() que: Cambie prestado a true si el libro está disponible y muestre un mensaje de error si ya está prestado
// 4 - Prueba prestar el libro dos veces y observa los mensajes
const prompt = require('prompt-sync')();

class libro { // 
constructor (titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
    this.pretado = false;
} 
 
    prestar() {
        if (!this.prestado){
            this.prestado = true;
            console.log("El Libro"+ " " + this.titulo + " " +". Ha sido prestado exitosamente.")
        } else {
            console.log("Lo sentimos" + " " + this.titulo + " " +".Ya ha sido prestado y no se encuentra disponible.")
        }
    }
}

const libro1 = new libro ("El Principito","Antoine de Saint-Exupéry")
libro1.prestar()
libro1.prestar()