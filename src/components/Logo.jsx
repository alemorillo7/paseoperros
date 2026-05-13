import React from 'react';
import logoPng from '../assets/logo-paseogo-removebg-preview.png';

const Logo = ({ className = "h-20 w-52", light = false }) => {
  return (
    <div className={`overflow-hidden flex items-center justify-center ${className}`}>
      <img
        src={logoPng}
        alt="PaseoGO Logo"
        className={`h-[300%] w-auto object-contain transition-transform ${light ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};

export default Logo;
