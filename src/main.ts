import { Contenido } from "./contenido";
import { IReproductorMusica, IMarcarFavorito } from "./interfaces";
import { Album } from "./album";

class Cancion extends Contenido implements IReproductorMusica, IMarcarFavorito { // clase 
    private esFavorito: boolean = false;
    private enReproduccion: boolean = false;

    marcarComoFavorito(): string {
        this.esFavorito = true;
        return `${this.titulo} marcada como favorito`;
    }
    pausar(): string {
        this.enReproduccion = false;
        return `Pausada: ${this.titulo}`;
    }
    detener(): string {
        this.enReproduccion = false;
        return `Detenida: ${this.titulo}`;
    }
    avanzar(): string {
        return `Avanzando en: ${this.titulo}`;
    }

    public mostrarInfo(): string {  //metodo publico 
        return `Titulo: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }

    public reproducir(): string { //metodo publico x2
        this.enReproduccion = true;
        return `Reproduciendo: ${this.titulo} de ${this.artista}`;
    }

    public marcarFavorito(): void {
        this.esFavorito = true;
    }

    public desmarcarFavorito(): void {
        this.esFavorito = false;
    }
    
}
 
class PlataformaDeMusica { // clase
    private canciones: Contenido[] = []; // propiedad privada

    public agregarCancion(cancion: Contenido): void { // metodo publico
        this.canciones.push(cancion);
    }
    
    public mostrarCanciones(): string { // metodo publico x2
        return this.canciones.map(c => c.mostrarInfo()).join("\n");
    }
}

const cancion1 = new Cancion("The Subway", "Chappell Roan", 4.1); // instancia de la clase Cancion
const cancion2 = new Cancion("What Was That", "Lorde", 4.3); // instancia de la clase Cancion
const album1 = new Album ("Pure Heroine", "Lorde", 42); // instancia de la clase Album

const plataforma = new PlataformaDeMusica(); // instancia de la clase PlataformadeMusica

plataforma.agregarCancion(cancion1);
plataforma.agregarCancion(cancion2);
plataforma.agregarCancion(album1);

console.log(plataforma.mostrarCanciones()); //console log sirve para mostrar la informacion de las canciones 