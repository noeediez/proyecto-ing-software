import { Contenido } from "./contenido";
import { IReproductorMusica } from "./interfaces";

export class Cancion extends Contenido implements IReproductorMusica {
    public reproducir(): string {
        this.enReproduccion = true;
        return `Reproduciendo: ${this.titulo} de ${this.artista}`;
    }

    public pausar(): string {
        this.enReproduccion = false;
        return `Pausada: ${this.titulo}`;
    }

    public detener(): string {
        this.enReproduccion = false;
        return `Detenida: ${this.titulo}`;
    }

    public avanzar(): string {
        return `Avanzando en: ${this.titulo}`;
    }
    public mostrarInfo(): string {
        return `Cancion: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }
}