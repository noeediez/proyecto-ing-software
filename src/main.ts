import { Cancion } from "./cancion";
import { Album } from "./album";
import { PlataformaDeMusica } from "./plataformaDeMusica";

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
console.log(cancion1.marcarComoFavorito());
