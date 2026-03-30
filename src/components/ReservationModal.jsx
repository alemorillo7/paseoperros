import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader2 } from 'lucide-react';

const ReservationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    role: 'dueño',
    nombre: '',
    telefono: '',
    email: '',
    barrio: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://automation8n.fluxia.site/webhook/12d53fcf-554b-4e53-bb84-f371f18495bd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
          setFormData({
            role: 'dueño',
            nombre: '',
            telefono: '',
            email: '',
            barrio: ''
          });
        }, 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray hover:text-dark transition-colors"
            >
              <X size={24} />
            </button>

            <div className="p-8">
              {status === 'success' ? (
                <div className="py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle size={48} />
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-4">¡Lugar Reservado!</h2>
                  <p className="text-gray text-lg">
                    Pronto nos pondremos en contacto con vos para finalizar tu registro.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold mb-2">Reservá tu lugar</h2>
                  <p className="text-gray mb-8">Completá tus datos para unirte a PaseoGO.</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2">¿Cómo querés unirte?</label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className={`
                          flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all
                          ${formData.role === 'dueño' ? 'border-primary bg-orange-50 text-primary' : 'border-light-gray hover:border-gray'}
                        `}>
                          <input
                            type="radio"
                            name="role"
                            value="dueño"
                            checked={formData.role === 'dueño'}
                            onChange={handleChange}
                            className="hidden"
                          />
                          <span className="font-bold">Soy Dueño</span>
                        </label>
                        <label className={`
                          flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all
                          ${formData.role === 'paseador' ? 'border-primary bg-orange-50 text-primary' : 'border-light-gray hover:border-gray'}
                        `}>
                          <input
                            type="radio"
                            name="role"
                            value="paseador"
                            checked={formData.role === 'paseador'}
                            onChange={handleChange}
                            className="hidden"
                          />
                          <span className="font-bold">Soy Paseador</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Nombre y Apellido</label>
                      <input
                        required
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej: Juan Pérez"
                        className="w-full px-4 py-3 rounded-xl border-2 border-light-gray focus:border-primary focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Número de teléfono</label>
                      <input
                        required
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Ej: 3511234567"
                        className="w-full px-4 py-3 rounded-xl border-2 border-light-gray focus:border-primary focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Email</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="juan@example.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-light-gray focus:border-primary focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2">Barrio</label>
                      <input
                        required
                        type="text"
                        name="barrio"
                        value={formData.barrio}
                        onChange={handleChange}
                        placeholder="Ej: Nueva Córdoba"
                        className="w-full px-4 py-3 rounded-xl border-2 border-light-gray focus:border-primary focus:outline-none transition-all"
                      />
                    </div>

                    <button
                      disabled={status === 'loading'}
                      className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg shadow-orange-100 flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="animate-spin" size={20} />
                          Enviando...
                        </>
                      ) : (
                        '¡Quiero mi lugar!'
                      )}
                    </button>
                    
                    {status === 'error' && (
                      <p className="text-red-500 text-center text-sm font-medium">
                        Hubo un error al enviar tus datos. Por favor intentá de nuevo.
                      </p>
                    )}
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;
