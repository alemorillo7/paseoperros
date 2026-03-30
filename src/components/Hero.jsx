import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Zap, PawPrint } from 'lucide-react';
import heroImg from '../assets/hero_dog.png';

const Hero = ({ onOpenModal }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-pastel rounded-full blur-3xl opacity-50" />
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary-pastel rounded-full blur-3xl opacity-40" />

      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-soft border border-primary-light text-primary-dark font-semibold text-sm mb-6">
            <Star size={16} fill="currentColor" />
            <span>El #1 en paseos de confianza en Córdoba</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[1.1]">
            El Uber para <span className="gradient-text">tu mejor amigo</span>
          </h1>

          <p className="text-xl text-gray mb-10 max-w-xl">
            Conecta con paseadores verificados en Córdoba Capital en minutos. El amor y la seguridad que tu perro merece, con la comodidad que vos necesitás.
          </p>

          <div className="flex flex-col gap-4 mb-10">
            <div className="flex flex-col items-start gap-4">
              <button 
                onClick={onOpenModal}
                className="px-10 py-5 rounded-full bg-primary text-white text-xl font-bold hover:bg-primary-dark shadow-xl shadow-orange-200 hover:scale-105 transition-all text-center"
              >
                ¡Reservar tu lugar ahora!
              </button>
              <p className="text-sm text-gray/80 font-medium pl-4 border-l-2 border-primary/30">
                Únete hoy mismo a la comunidad más grande de Córdoba y asegura la mejor experiencia para tu mascota.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 py-6 border-t border-light-gray">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-secondary" size={24} />
              <div className="text-sm">
                <p className="font-bold">Verificados</p>
                <p className="text-gray">ID 100% real</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-secondary" size={24} fill="currentColor" />
              <div className="text-sm">
                <p className="font-bold">4.9/5</p>
                <p className="text-gray">Reseñas reales</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-secondary" size={24} />
              <div className="text-sm">
                <p className="font-bold">Tracking</p>
                <p className="text-gray">Tiempo real</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="relative"
        >
          <div className="relative z-10 w-full animate-float">
            <img 
              src={heroImg} 
              alt="Happy dog and walker" 
              className="w-full h-auto drop-shadow-2xl rounded-[40px]"
            />
          </div>
          
          {/* Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-light-gray"
          >
            <div className="w-12 h-12 rounded-full bg-green-soft flex items-center justify-center text-secondary">
              <PawPrint size={24} />
            </div>
            <div>
              <p className="text-sm font-bold">¡Paseo Iniciado!</p>
              <p className="text-xs text-gray">Milo está feliz con Mateo</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

