// Ejercicio 3: Reproductor de Música
// Tareas:
//  1.Crea un objeto Reproductor usando una función constructora con:
//  •Una propiedad estado con valor inicial "detenido" (otros valores 
// posibles: "reproduciendo", "pausado").
//  2.Implementa estos métodos:
//  •play():
//  •Si el estado es "detenido" o "pausado", cambia a "reproduciendo" y muestra: "Reproduciendo música...".
//  •Si ya está reproduciendo, muestra: "Ya se está reproduciendo música.".
//  •pausar():
//  •Si el estado es "reproduciendo", cambia a "pausado" y muestra: "Música pausada.".
//  •Si no, muestra: "No hay música reproduciéndose.".
//  •detener(): Cambia el estado a "detenido" y muestra: "Música detenida.".

function Reproductor () {
    this.estado = "Detenido";

    this.play = function(){
        if (this.estado === "Detenido" || this.estado === "Pausado") {
            this.estado === "Reproduciendo";
        } else {
            console.log("La música se esta reproduciendo")
        }
    }
    this.pausar = function(){
        if (this.estado === "Reproduciendo") {
            this.estado === "Pausado"
            console.log ("Música Pausada")
        } else {
            console.log("No hay música en reproducción")
        }
    }
    this.detener = function(){
        this.estado = "Detenido"
        console.log ("Música Detenida")
    }
}

const Reproduccion = new Reproductor()

Reproduccion.play(); 
Reproduccion.play();    
Reproduccion.pausar(); 
Reproduccion.play();    
Reproduccion.detener(); 
Reproduccion.pausar();  