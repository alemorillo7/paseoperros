import React from 'react';
import { Check } from 'lucide-react';

const Pricing = ({ onOpenModal }) => {
  const plans = [
    {
      name: "Paseo Express",
      price: "$1.500",
      time: "30 min",
      features: ["Paseo individual", "Tracking en vivo", "Fotos al final", "Hidratación incl."],
      color: "border-gray"
    },
    {
      name: "Paseo Standard",
      price: "$2.500",
      time: "60 min",
      features: ["Paseo en manada", "Tracking en vivo", "Fotos y videos", "Juegos y socialización", "Snack saludable"],
      popular: true,
      color: "border-primary"
    },
    {
      name: "Paseo VIP",
      price: "$4.000",
      time: "90 min",
      features: ["Paseo individual", "Ruta personalizada", "Limpieza de patitas", "Reporte de conducta", "Soporte prioritario"],
      color: "border-secondary"
    }
  ];

  return (
    <section id="precios" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Planes para cada <span className="text-primary">personalidad</span></h2>
          <p className="text-gray text-lg">Elegí el paseo que mejor se adapte a la energía de tu mascota.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-[40px] border-2 ${plan.color} ${plan.popular ? 'bg-orange-50 scale-105' : 'bg-white'} transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Más Elegido
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-gray">/ {plan.time}</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex gap-2 items-center text-sm font-medium">
                    <Check className={plan.popular ? 'text-primary' : 'text-secondary'} size={18} />
                    {feat}
                  </li>
                ))}
              </ul>
              <button 
                onClick={onOpenModal}
                className={`w-full py-4 rounded-full font-bold transition-all ${
                plan.popular 
                  ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-orange-100' 
                  : 'bg-dark text-white hover:bg-black'
              }`}>
                Reservar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
