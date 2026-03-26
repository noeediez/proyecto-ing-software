import { Contenido } from "./contenido";
import { IReproductorMusica } from "./interfaces";
import { Album } from "./album";

class Cancion extends Contenido implements IReproductorMusica {
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
}
 
class PlataformaDeMusica { // clase
    private canciones: Contenido[] = []; // propiedad privada

    public agregarCancion(cancion: Contenido): void { // metodo publico
        this.canciones.push(cancion);
    }
    
    public mostrarCanciones(): string { // metodo publico x2
        return this.canciones.map(c => c.mostrarInfo()).join("\n"); // mapea cada cancion a su info y las une con salto de linea
    }
    
    public buscar(titulo: string): string;
    public buscar(titulo: string, artista: string): string;

    public buscar(titulo: string, artista?: string): string {
        if (artista) {
            return `Buscando la canción "${titulo}" del artista ${artista}`;
        }
        return `Buscando la canción "${titulo}"`;
    }
}

const cancion1 = new Cancion("The Subway", "Chappell Roan", 4.1);
const cancion2 = new Cancion("What Was That", "Lorde", 4.3);
const album1 = new Album("Pure Heroine", "Lorde", 42);

const plataforma = new PlataformaDeMusica();

plataforma.agregarCancion(cancion1);
plataforma.agregarCancion(cancion2);
plataforma.agregarCancion(album1);

console.log(plataforma.mostrarCanciones());
console.log(plataforma.buscar("The Subway"));
console.log(plataforma.buscar("The Subway", "Chappell Roan"));