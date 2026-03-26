export abstract class Contenido { 
    constructor (
        protected titulo: string, // propiedades protegidas
        protected artista: string,
        protected duracion: number
    ) {}
    
    public mostrarInfo(): string {  //metodo publico 
        return `Titulo: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }
    public abstract reproducir(): string; // metodo abstracto
}