import React, { useState, useEffect } from 'react';
import { PawPrint, Menu, X } from 'lucide-react';

const Navbar = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-xl group-hover:scale-110 transition-transform">
            <PawPrint className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            Paseo<span className="text-primary">GO</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#como-funciona" className="hover:text-primary transition-colors">Cómo funciona</a>
          <a href="#beneficios" className="hover:text-primary transition-colors">Beneficios</a>
          <a href="#precios" className="hover:text-primary transition-colors">Precios</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onOpenModal}
            className="px-8 py-2.5 rounded-full font-bold bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg transition-all"
          >
            Reserva tu lugar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-8 flex flex-col gap-6 animate-fade-in">
          <a href="#como-funciona" onClick={() => setMobileMenuOpen(false)}>Cómo funciona</a>
          <a href="#beneficios" onClick={() => setMobileMenuOpen(false)}>Beneficios</a>
          <a href="#precios" onClick={() => setMobileMenuOpen(false)}>Precios</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <div className="flex flex-col gap-3 pt-4 border-t border-light-gray">
            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 rounded-xl bg-primary text-white font-bold"
            >
              Reserva tu lugar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
