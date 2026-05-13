import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import { FAQ, Footer } from './components/Footer';
import ReservationModal from './components/ReservationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      <Navbar onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Features />
        <FAQ />
      </main>
      <Footer />
      <ReservationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
