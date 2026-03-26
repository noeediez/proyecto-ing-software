import { Cancion } from '../src/cancion';
import { describe, it, expect } from 'vitest';

describe('Cancion', () => {
    it('deberia reproducir una cancion', () => {
        const cancion = new Cancion("Manchild", "Sabrina Carpenter", 3.7);

        expect(cancion.reproducir()).toBe('Reproduciendo: Manchild de Sabrina Carpenter');
    });

    it('deberia pausar una cancion', () => {
        const cancion = new Cancion("Manchild", "Sabrina Carpenter", 3.7);

        expect(cancion.pausar()).toBe('Cancion pausada: Manchild');
    });

    it('deberia detener una cancion', () => {
        const cancion = new Cancion("Manchild", "Sabrina Carpenter", 3.7);

        expect(cancion.detener()).toBe('Cancion detenida: Manchild');
    });

    it('deberia avanzar en una cancion', () => {
        const cancion = new Cancion("Manchild", "Sabrina Carpenter", 3.7);

        expect(cancion.avanzar()).toBe('Avanzando en: Manchild');
    });

    it('deberia mostrar la informacion de una cancion', () => {
        const cancion = new Cancion("Manchild", "Sabrina Carpenter", 3.7);

        expect(cancion.mostrarInfo()).toBe(
            'Cancion: Manchild | Artista: Sabrina Carpenter | Duracion: 3.7 minutos'
        );
    });
});