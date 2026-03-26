export abstract class Contenido {
    protected esFavorito: boolean = false;
    protected enReproduccion: boolean = false;

    constructor(
        protected titulo: string,
        protected artista: string,
        protected duracion: number
    ) {}

    public mostrarInfo(): string {
        return `Titulo: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }

    public abstract reproducir(): string;

    public marcarComoFavorito(): string {
        this.esFavorito = true;
        return `${this.titulo} marcado como favorito`;
    }

    public desmarcarFavorito(): void {
        this.esFavorito = false;
    }

    public isFavorito(): boolean {
        return this.esFavorito;
    }
}