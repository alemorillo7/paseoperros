import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Calendar, Heart, Shield, DollarSign, Clock, Users } from 'lucide-react';

const Features = () => {
  const steps = [
    { icon: <Search size={32} />, title: "Buscá", desc: "Encontrá al paseador ideal cerca tuyo." },
    { icon: <Calendar size={32} />, title: "Reservá", desc: "Elegí el horario que mejor te convenga." },
    { icon: <MapPin size={32} />, title: "Seguí", desc: "Trackeá el paseo en vivo desde tu celular." },
  ];

  const benefitsOwners = [
    { icon: <Shield size={24} />, title: "Seguridad 100%", desc: "Paseadores verificados con ID y antecedentes." },
    { icon: <Heart size={24} />, title: "Amor Perruno", desc: "Un paseo de calidad con alguien que ama a los animales." },
    { icon: <Clock size={24} />, title: "Ahorrá Tiempo", desc: "No te preocupes por el paseo diario, nosotros nos encargamos." },
  ];

  const benefitsWalkers = [
    { icon: <DollarSign size={24} />, title: "Ingresos Extras", desc: "Ganás dinero haciendo lo que más te gusta." },
    { icon: <Calendar size={24} />, title: "Flexibilidad", desc: "Sos dueño de tu tiempo y elegís tus horarios." },
    { icon: <Users size={24} />, title: "Comunidad", desc: "Sumate a la red más grande de cuidado animal." },
  ];

  return (
    <>
      {/* How it Works */}
      <section id="como-funciona" className="section bg-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-16">¿Cómo funciona <span className="text-primary tracking-tight">PaseoGO</span>?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-bg-app border border-light-gray hover:border-primary transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-100">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="section bg-bg-app">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-20">
            {/* For Owners */}
            <div>
              <div className="mb-12">
                <span className="text-primary font-bold tracking-widest uppercase text-sm">Para Dueños</span>
                <h2 className="text-4xl font-bold mt-2">Tranquilidad para vos, felicidad para ellos</h2>
              </div>
              <div className="space-y-8">
                {benefitsOwners.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-gray">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Walkers */}
            <div>
              <div className="mb-12">
                <span className="text-secondary font-bold tracking-widest uppercase text-sm">Para Paseadores</span>
                <h2 className="text-4xl font-bold mt-2">Generá ingresos a tu ritmo</h2>
              </div>
              <div className="space-y-8">
                {benefitsWalkers.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white text-secondary flex items-center justify-center shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-gray">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
