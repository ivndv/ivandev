import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
    it('renders the logo image', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const logo = screen.getByAltText(/logo/i);
        expect(logo).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        expect(screen.getByText('Inicio')).toBeInTheDocument();
        expect(screen.getByText('Proyectos')).toBeInTheDocument();
        expect(screen.getByText('Contacto')).toBeInTheDocument();
    });

    it('toggles mobile menu when hamburger button is clicked', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        // Buscamos el botón por su rol (el que tiene el ícono de menú)
        // En el código es un div con un botón adentro fuera de los navs desktop
        const menuButton = screen.getByRole('button');

        // Por defecto, el menú móvil no debería estar (los links del menú móvil se renderizan condicionalmente)
        // NOTA: Como screen.getByText fallaría si no lo encuentra, usamos queryByText para verificar ausencia
        expect(screen.queryAllByText('Experiencia').length).toBe(1); // El de desktop siempre está (aunque esté oculto por CSS, RTL lo ve en el DOM)

        // Simulamos el click
        fireEvent.click(menuButton);

        // Ahora deberían aparecer los links del menú móvil duplicados en el DOM
        // El Header renderiza los mismos links en desktop y en el condicional de móvil
        const experienceLinks = screen.getAllByText('Experiencia');
        expect(experienceLinks.length).toBe(2); // Uno en desktop y otro en el menú móvil abierto

        // Simulamos click para cerrar
        fireEvent.click(menuButton);
        expect(screen.getAllByText('Experiencia').length).toBe(1);
    });
});
