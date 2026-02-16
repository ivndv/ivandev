
import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';

/**
 * Página de Experiencia que muestra una línea de tiempo (timeline) con
 * los roles y empresas donde se ha trabajado o realizado prácticas.
 */
const Experience = () => {

  const experienceData = [
    {
      id: 1,
      role: "Gestión de Procesos y Soluciones",
      company: "MBQ GROUP BUSINESS SOLUTIONS",
      location: "Remoto",
      date: "Ene 2025 - Abr 2025",
      description: "Contrato de prácticas. Apoyo en el análisis y optimización de flujos de trabajo, asegurando la calidad en la entrega de soluciones empresariales y colaborando con equipos multidisciplinarios.",
      skills: ["Análisis de Procesos", "Gestión", "Resolución de Problemas", "Trabajo Remoto"],
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 text-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* ENCABEZADO */}
        <div className="text-center mb-16 space-y-4 mt-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Mi Trayectoria Profesional
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-black flex-1 rounded-full opacity-20 max-w-[100px]"></div>
            <p className="text-gray-600 text-lg italic">
              Experiencia y Formación
            </p>
            <div className="h-px bg-black flex-1 rounded-full opacity-20 max-w-[100px]"></div>
          </div>
        </div>

        {/* TIMELINE CONTAINER */}
        <div className="relative border-l-2 border-gray-200 ml-4 md:ml-6 space-y-12">
          {experienceData.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-12 group">

              {/* PUNTO DE LA LÍNEA DE TIEMPO */}
              <div className="absolute -left-[9px] md:-left-[11px] top-0 p-1 bg-gray-50 border-2 border-gray-200 rounded-full group-hover:border-red-600 group-hover:scale-110 transition-all duration-300 z-10">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-400 rounded-full group-hover:bg-red-600 transition-colors"></div>
              </div>

              {/* TARJETA DE EXPERIENCIA */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-[0_0_20px_rgba(220,38,38,0.15)] hover:border-red-600/30 transition-all duration-300 relative overflow-hidden">

                {/* Decoración de fondo */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Briefcase size={80} className="text-red-600 transform rotate-12" />
                </div>

                {/* Encabezado */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4 relative z-10">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-700 font-medium mt-1">
                      <Building2 size={16} />
                      <span>{job.company}</span>
                    </div>
                  </div>

                  {/* Fecha Badge */}
                  <div className="flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap">
                    <Calendar size={12} />
                    {job.date}
                  </div>
                </div>

                {/* Ubicación */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <MapPin size={14} />
                  {job.location}
                </div>

                {/* Descripción */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {job.description}
                </p>

                {/* Tags de Tecnologías/Habilidades */}
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-md border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default Experience;