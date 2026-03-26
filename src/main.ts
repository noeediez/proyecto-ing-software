class Cancion { // clase 
    constructor ( // 
        private titulo: string, // propiedades privadas
        private artista: string,
        private duracion: number
    ) {}

    public mostrarInfo(): string {  //metodo publico 
        return `Titulo: ${this.titulo} | Artista: ${this.artista} | Duracion: ${this.duracion} minutos`;
    }

    public reproducir(): string { //metodo publico x2
        return `Reproduciendo: ${this.titulo} de ${this.artista}`;
    }
}
 
class PlataformadeMusica { // clase
    private canciones: Cancion[] = []; // propiedad privada

    public agregarCancion(cancion: Cancion): void { // metodo publico
        this.canciones.push(cancion);
    }
    
    public mostrarCanciones(): string { // metodo publico x2
        return this.canciones.map(c => c.mostrarInfo()).join("\n");
    }
}

const cancion1 = new Cancion("The Subway", "Chappell Roan", 4.1); // instancia de la clase Cancion
const cancion2 = new Cancion("What Was That", "Lorde", 4.3); // instancia de la clase Cancion

const plataforma = new PlataformadeMusica(); // instancia de la clase PlataformadeMusica

plataforma.agregarCancion(cancion1);
plataforma.agregarCancion(cancion2);

console.log(plataforma.mostrarCanciones()); //console log sirve para mostrar la informacion de las canciones 