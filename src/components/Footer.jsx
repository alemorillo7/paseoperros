import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Instagram, Facebook, Twitter, Phone } from 'lucide-react';
import Logo from './Logo';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    { q: "¿Cómo verifican a los paseadores?", a: "Todos nuestros paseadores pasan por un proceso de verificación de identidad con DNI, antecedentes penales y una entrevista personal presencial en nuestras oficinas de Córdoba." },
    { q: "¿Puedo ver por dónde va mi perro?", a: "¡Sí! Desde la app podés activar el tracking en tiempo real y ver el recorrido exacto, paradas y fotos que el paseador sube durante el trayecto." },
    { q: "¿Qué pasa si llueve?", a: "Podés reprogramar el paseo sin costo hasta 2 horas antes. Si la lluvia es leve y querés que salga igual, ¡nuestros paseadores están preparados!" }
  ];

  return (
    <section id="faq" className="section bg-bg-app">
      <div className="container max-w-2xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-light-gray overflow-hidden">
              <button 
                className="w-full p-6 text-left flex justify-between items-center font-bold"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                {openIndex === i ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray" />}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-gray animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Logo light={true} />
            </div>
            <p className="text-gray-400 mb-6">Conectamos dueños con paseadores de confianza en segundos. Hecho con ❤️ en Córdoba Capital.</p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/paseogo.arg?igsh=MWhnZWs4MzRvZzZvbw%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all"
                title="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/share/18opRwL8YC/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all"
                title="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Plataforma</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#como-funciona" className="hover:text-white">Cómo funciona</a></li>
              <li><a href="#beneficios" className="hover:text-white">Beneficios</a></li>
              <li><a href="#" className="hover:text-white">Seguridad</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Sumate</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white">Ser Paseador</a></li>
              <li><a href="#" className="hover:text-white">Blog Perruno</a></li>
              <li><a href="#" className="hover:text-white">Prensa</a></li>
              <li><a href="#" className="hover:text-white">Ayuda</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:row-reverse md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 PaseoGO. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Términos y Condiciones</a>
            <a href="#" className="hover:text-white">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { FAQ, Footer };
