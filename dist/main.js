"use strict";
class Cancion {
    constructor(// 
    titulo, // propiedades privadas
    artista, duracion) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracion = duracion;
    }
    mostrarInfo() {
        return `Titulo: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }
    reproducir() {
        return `Reproduciendo: ${this.titulo} de ${this.artista}`;
    }
}
class PlataformadeMusica {
    constructor() {
        this.canciones = []; // propiedad privada
    }
    agregarCancion(cancion) {
        this.canciones.push(cancion);
    }
    mostrarCanciones() {
        return this.canciones.map(c => c.mostrarInfo()).join("\n");
    }
}
const cancion1 = new Cancion("The Subway", "Chappell Roan", 4.1); // instancia de la clase Cancion
const cancion2 = new Cancion("What Was That", "Lorde", 4.3); // instancia de la clase Cancion
const plataforma = new PlataformadeMusica(); // instancia de la clase PlataformadeMusica
plataforma.agregarCancion(cancion1);
plataforma.agregarCancion(cancion2);
console.log(plataforma.mostrarCanciones());
