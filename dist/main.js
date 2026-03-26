"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contenido_1 = require("./contenido");
const album_1 = require("./album");
class Cancion extends contenido_1.Contenido {
    constructor() {
        super(...arguments);
        this.esFavorito = false;
        this.enReproduccion = false;
    }
    marcarComoFavorito() {
        this.esFavorito = true;
        return `${this.titulo} marcada como favorito`;
    }
    pausar() {
        this.enReproduccion = false;
        return `Pausada: ${this.titulo}`;
    }
    detener() {
        this.enReproduccion = false;
        return `Detenida: ${this.titulo}`;
    }
    avanzar() {
        return `Avanzando en: ${this.titulo}`;
    }
    mostrarInfo() {
        return `Titulo: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }
    reproducir() {
        this.enReproduccion = true;
        return `Reproduciendo: ${this.titulo} de ${this.artista}`;
    }
    marcarFavorito() {
        this.esFavorito = true;
    }
    desmarcarFavorito() {
        this.esFavorito = false;
    }
}
class PlataformaDeMusica {
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
const album1 = new album_1.Album("Pure Heroine", "Lorde", 42); // instancia de la clase Album
const plataforma = new PlataformaDeMusica(); // instancia de la clase PlataformadeMusica
plataforma.agregarCancion(cancion1);
plataforma.agregarCancion(cancion2);
plataforma.agregarCancion(album1);
console.log(plataforma.mostrarCanciones()); //console log sirve para mostrar la informacion de las canciones 
