import React from 'react';
import logo from '../assets/logo.png';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#07192f] transition-all duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Pulsing Clinic Logo */}
        <div className="relative flex items-center justify-center w-24 h-24 mb-4">
          <img 
            src={logo} 
            alt="Dr. Aamir Dogra Logo" 
            className="w-18 h-18 object-contain rounded-full shadow-2xl border-2 border-white/20 bg-white relative z-10 animate-float"
          />
          <div className="absolute inset-0 rounded-full border-2 border-teal-400 opacity-30 animate-ping"></div>
        </div>
        
        <h2 className="font-display font-black text-xl text-white tracking-wide">
          Dr. Aamir Dogra
        </h2>
        <p className="mt-1 font-body text-xs font-semibold text-teal-300">
          Paediatrics &bull; MBChB, MRCPCH &bull; Mediways Hospital
        </p>
      </div>
    </div>
  );
};
