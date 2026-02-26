import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout/Layout.tsx";

// Lazy Loading
const Hero = lazy(() => import("@/pages/Hero/Hero"));
const Skills = lazy(() => import("@/pages/Skills/Skills"));
const Experiencia = lazy(() => import("@/pages/Experiencia/Experiencia"));
const Proyectos = lazy(() => import("@/pages/Proyectos/Proyectos"));
const SobreMi = lazy(() => import("@/pages/SobreMi/SobreMi"));
const Formacion = lazy(() => import("@/pages/Formacion/Formacion"));
const Contacto = lazy(() => import("@/pages/Contacto/Contacto"));
const Privacidad = lazy(() => import("@/pages/Legal/Privacidad"));
const Terminos = lazy(() => import("@/pages/Legal/Terminos"));
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));

export const Router = () => {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Cargando...</div>}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
