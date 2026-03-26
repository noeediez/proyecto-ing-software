import { Contenido } from "./contenido";
import { IReproductorMusica, IMarcarFavorito } from "./interfaces";

export class Album extends Contenido implements IReproductorMusica, IMarcarFavorito {
    private enReproduccion: boolean = false;
    private esFavorito: boolean = false;

    public reproducir(): string {
        this.enReproduccion = true;
        return `Reproduciendo el album: ${this.titulo} de ${this.artista}`;
    }

    public pausar(): string {
        this.enReproduccion = false;
        return `Album pausado: ${this.titulo}`;
    }

    public detener(): string {
        this.enReproduccion = false;
        return `Album detenido: ${this.titulo}`;
    }

    public avanzar(): string {
        return `Siguiente cancion: ${this.titulo}`;
    }

    public marcarComoFavorito(): string {
        this.esFavorito = true;
        return `${this.titulo} se marcó como favorito`;
    }
     public mostrarInfo(): string {
        return `Album: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }
}