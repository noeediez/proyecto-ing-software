"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const contenido_1 = require("./contenido");
const album_1 = require("./album");
class Cancion extends contenido_1.Contenido {
    reproducir() {
        this.enReproduccion = true;
        return `Reproduciendo: ${this.titulo} de ${this.artista}`;
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
    buscar(titulo, artista) {
        if (artista) {
            return `Buscando la canción "${titulo}" del artista ${artista}`;
        }
        return `Buscando la canción "${titulo}"`;
    }
}
const cancion1 = new Cancion("The Subway", "Chappell Roan", 4.1);
const cancion2 = new Cancion("What Was That", "Lorde", 4.3);
const album1 = new album_1.Album("Pure Heroine", "Lorde", 42);
const plataforma = new PlataformaDeMusica();
plataforma.agregarCancion(cancion1);
plataforma.agregarCancion(cancion2);
plataforma.agregarCancion(album1);
console.log(plataforma.mostrarCanciones());
console.log(plataforma.buscar("The Subway"));
console.log(plataforma.buscar("The Subway", "Chappell Roan"));
