import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skills from './Skills/Skills';
import Experience from './Experiencia/Experiencia';
import Formacion from './Formacion/Formacion';
import SobreMi from './SobreMi/SobreMi';

/**
 * Este es un "Smoke Test" (Prueba de Humo).
 * Su objetivo no es probar cada detalle, sino asegurar que las páginas
 * al menos "enciendan" y rendericen sin explotar.
 */

describe('Smoke Test - Static Pages', () => {
    it('renders Skills page without crashing', () => {
        render(<Skills />);
        expect(screen.getByText(/Mis Habilidades Tecnológicas/i)).toBeInTheDocument();
    });

    it('renders Experiencia page without crashing', () => {
        render(<Experience />);
        expect(screen.getByText(/Mi Trayectoria Profesional/i)).toBeInTheDocument();
    });

    it('renders Formacion page without crashing', () => {
        render(<Formacion />);
        expect(screen.getByText(/Mi Formación Académica/i)).toBeInTheDocument();
    });

    it('renders Sobre Mí page without crashing', () => {
        render(<SobreMi />);
        expect(screen.getByText(/Sobre Mí/i)).toBeInTheDocument();
    });
});
