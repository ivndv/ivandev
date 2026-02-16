import { useState } from 'react';
import { Mail, Copy, Check, Send, MessageCircle, MapPin } from 'lucide-react';

/**
 * Página de Contacto que incluye tarjetas de información (email, WhatsApp)
 * y un formulario para enviar mensajes. Administra el estado de copiado al portapapeles.
 */
const Contacto = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);


  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="min-h-screen bg-gray-50 text-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* ENCABEZADO "SÁNDWICH" */}
        <div className="text-center mb-16 space-y-4 mt-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Ponte en Contacto
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-black flex-1 rounded-full opacity-20 max-w-[100px]"></div>
            <p className="text-gray-600 text-lg italic">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
            <div className="h-px bg-black flex-1 rounded-full opacity-20 max-w-[100px]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* COLUMNA IZQUIERDA: INFORMACIÓN DE CONTACTO (2/5 del ancho) */}
          <div className="lg:col-span-2 space-y-6">

            {/* Tarjeta Email */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-50 text-red-600 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <button
                  onClick={() => handleCopy('ivangtx19@gmail.com', 'email')}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  title="Copiar correo"
                >
                  {copiedField === 'email' ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Correo Electrónico</h3>
              <p className="text-gray-500 text-sm mb-4">Para consultas detalladas o colaboraciones formales.</p>
              <a
                href="mailto:ivangtx19@gmail.com"
                className="text-lg font-semibold text-gray-800 hover:text-red-600 transition-colors break-all"
              >
                ivangtx19@gmail.com
              </a>
            </div>
            {/* Tarjeta WhatsApp */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-xl group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <MessageCircle size={24} />
                </div>
                <button
                  onClick={() => handleCopy('+525667723938', 'phone')}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  title="Copiar número"
                >
                  {copiedField === 'phone' ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">WhatsApp / Teléfono</h3>
              <p className="text-gray-500 text-sm mb-4">Respuesta rápida para consultas breves.</p>
              <a
                href="https://wa.me/525667723938"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold text-gray-800 hover:text-green-600 transition-colors"
              >
                +52 56 6772 3938
              </a>
            </div>
            {/* Tarjeta Ubicación (Simple) */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
              <div className="p-3 bg-gray-50 text-gray-600 rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Ubicación</h3>
                <p className="text-gray-500 text-sm">Chimalhuacán, Estado de México</p>
              </div>
            </div>
          </div>
          {/* COLUMNA DERECHA: FORMULARIO (3/5 del ancho) */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Nombre</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    />
                  </div>
                </div>
                {/* Asunto */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="¿En qué puedo ayudarte?"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  />
                </div>
                {/* Mensaje */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Mensaje</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                {/* Botón Submit */}
                <button
                  type="button" // Cambia a "submit" cuando conectes el backend
                  className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;