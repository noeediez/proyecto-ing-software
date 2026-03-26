"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contenido = void 0;
class Contenido {
    constructor(titulo, // propiedades protegidas
    artista, duracion) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracion = duracion;
    }
    mostrarInfo() {
        return `Titulo: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }
}
exports.Contenido = Contenido;
