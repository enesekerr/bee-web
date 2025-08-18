import React from 'react';
import Ari from '../assets/arı.png';

const Hero = () => {
  return (
    <div className="h-[50vh] flex flex-col justify-center items-center text-center text-white relative overflow-hidden">
      
      
      <div
        className="absolute inset-0 bg-cover bg-center blur-[4px]"
        style={{
          backgroundImage: `url(${Ari})`,
        }}
      ></div>
      
      
      <div className="relative z-10 p-4 rounded-lg bg-black/40"> 
        
        <h1 className="text-5xl font-extrabold">
          Doğal & Katkısız Bal
        </h1>
        <p className="mt-6 text-lg">Arılardan sofranıza, %100 organik bal</p>
      </div>
    </div>
  );
};

export default Hero;