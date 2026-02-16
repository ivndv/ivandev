import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Projects from './Proyectos';

describe('Projects Page', () => {
    it('renders the main heading', () => {
        render(<Projects />);
        expect(screen.getByText(/Mis Proyectos Destacados/i)).toBeInTheDocument();
    });

    it('renders correctly all projects in the list', () => {
        render(<Projects />);

        // Verificamos que algunos proyectos específicos aparezcan
        expect(screen.getByText('Fluxbeats')).toBeInTheDocument();
        expect(screen.getByText('Gestor de activos')).toBeInTheDocument();
        expect(screen.getByText('Encriptador de Texto')).toBeInTheDocument();
    });

    it('contains correctly configured external links for projects', () => {
        render(<Projects />);

        // Buscamos los links del primer proyecto (Fluxbeats)
        // getAllByRole porque hay varios botones de "Código" y "Demo"
        const githubLinks = screen.getAllByRole('link', { name: /código/i });
        const demoLinks = screen.getAllByRole('link', { name: /demo/i });

        // Verificamos el primer link de cada tipo (el de Fluxbeats)
        expect(githubLinks[0]).toHaveAttribute('href', 'https://github.com/Ivandv19/landing-page-1906.git');
        expect(demoLinks[0]).toHaveAttribute('href', 'https://landing-page.mgdc.site');
    });

    it('displays tags for projects', () => {
        render(<Projects />);

        // Verificamos que algunas tecnologías aparezcan como etiquetas
        expect(screen.getAllByText('React').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Tailwindcss').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Node.js').length).toBeGreaterThan(0);
    });
});
