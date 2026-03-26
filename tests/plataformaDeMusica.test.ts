/// <reference types="vitest" />
import { describe, test, beforeEach, expect } from 'vitest';
import { Cancion } from "../src/cancion";
import { PlataformaDeMusica } from "../src/plataformaDeMusica";

describe("PlataformaDeMusica", () => { 
    let plataforma: PlataformaDeMusica;
    let cancion1: Cancion;
    let cancion2: Cancion;
    let cancion3: Cancion;

    beforeEach(() => {
        plataforma = new PlataformaDeMusica();
        cancion1 = new Cancion("The Subway", "Chappell Roan", 4.1);
        cancion2 = new Cancion("What Was That", "Lorde", 4.3);
        cancion3 = new Cancion("Anti-Hero", "Taylor Swift", 3.2);
    });

    describe("Agregar y mostrar canciones", () => {
        test("agregarCancion y mostrarCanciones", () => {
            plataforma.agregarCancion(cancion1);
            plataforma.agregarCancion(cancion2);
            const resultado = plataforma.mostrarCanciones();
            expect(resultado).toContain("The Subway");
            expect(resultado).toContain("What Was That");
        });
