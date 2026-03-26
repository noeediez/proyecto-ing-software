"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
const contenido_1 = require("./contenido");
class Album extends contenido_1.Contenido {
    constructor() {
        super(...arguments);
        this.enReproduccion = false;
        this.esFavorito = false;
    }
    reproducir() {
        this.enReproduccion = true;
        return `Reproduciendo el album: ${this.titulo} de ${this.artista}`;
    }
    pausar() {
        this.enReproduccion = false;
        return `Album pausado: ${this.titulo}`;
    }
    detener() {
        this.enReproduccion = false;
        return `Album detenido: ${this.titulo}`;
    }
    avanzar() {
        return `Siguiente cancion: ${this.titulo}`;
    }
    marcarComoFavorito() {
        this.esFavorito = true;
        return `${this.titulo} se marcó como favorito`;
    }
}
exports.Album = Album;
