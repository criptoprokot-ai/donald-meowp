
import React from 'react';
import { ASSETS, LINKS } from '../constants';

const heroStyles = `
  @keyframes float-up-down {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-6px); }
  }
  
  .giveaway-card {
    animation: float-up-down 3.5s ease-in-out infinite;
    transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .giveaway-card:hover {
    transform: scale(1.03);
    box-shadow: 12px 12px 0px 0px rgba(0,0,0,0.8), 
                0 0 20px rgba(209, 43, 43, 0.3);
    animation-play-state: paused;
  }
  
  .giveaway-overlay {
    position: absolute;
    top: 0;
    left: -120px;
    width: 300px;
    height: 350px;
    background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255, 249, 230, 0.6), rgba(255, 249, 230, 0.2));
    border-radius: 50%;
    filter: blur(40px);
    z-index: 1;
    pointer-events: none;
  }
  
  .comic-arrow {
    position: absolute;
    font-size: 32px;
    animation: bounce-arrow 2s ease-in-out infinite;
  }
  
  @keyframes bounce-arrow {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(8px); }
  }
`;

export const Hero: React.FC = () => {
  return (
    <>
      <style>{heroStyles}</style>
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-visible py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative">
        <div className="z-20 text-center lg:text-left space-y-8 order-2 lg:order-1">
          <div className="inline-block bg-black text-white px-4 py-1 comic-border mb-4">
             <span className="font-bold text-sm uppercase tracking-widest">Political Satire Comic Universe</span>
          </div>
          <h1 className="font-comic text-7xl lg:text-9xl leading-[0.8] tracking-tighter text-black uppercase">
            MAKE <br />
            <span className="text-[#D4AF37] drop-shadow-[4px_4px_0px_#000]">CATLANDIA</span> <br />
            GREAT AGAIN
          </h1>
          
          <p className="text-xl font-bold max-w-md mx-auto lg:mx-0 bg-white/50 backdrop-blur-sm p-6 comic-border border-dashed border-2 relative">
            <span className="absolute -top-4 -left-4 text-4xl text-[#D12B2B]">“</span>
            "The dogs are at the gates, and the litter boxes are empty. It's time for a Very Confident Cat to take charge. Believe me, it's going to be huge."
            <span className="absolute -bottom-4 -right-4 text-4xl text-[#D12B2B]">”</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#comic" className="bg-black text-white px-10 py-5 comic-border comic-shadow comic-shadow-hover font-comic text-3xl tracking-wide uppercase transition-all transform hover:-translate-y-1">
              Read the Story
            </a>
            <div className="flex gap-4 justify-center">
               <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="bg-white p-5 comic-border comic-shadow comic-shadow-hover transition-all">
                  <img src="https://api.iconify.design/logos:telegram.svg" className="w-10 h-10" alt="Telegram" />
               </a>
               <a href={LINKS.x} target="_blank" rel="noopener noreferrer" className="bg-white p-5 comic-border comic-shadow comic-shadow-hover transition-all">
                  <img src="https://api.iconify.design/logos:twitter.svg" className="w-10 h-10" alt="X" />
               </a>
            </div>
          </div>
        </div>

        {/* Giveaway Promo Box - Repositioned */}
        <div className="absolute left-1/3 top-12 transform -translate-x-1/2 translate-x-4 translate-y-2 z-30">
          {/* Visual contrast overlay - soft glow behind card */}
          <div className="giveaway-overlay"></div>
          
          {/* Comic arrow annotation */}
          <div className="comic-arrow absolute -left-16 top-8">
            <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 55 5 Q 40 15 25 25" stroke="#D12B2B" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="5,3"/>
              <polygon points="25,25 20,18 28,22" fill="#D12B2B"/>
            </svg>
          </div>
          
          {/* Giveaway Card */}
          <div className="giveaway-card bg-white comic-border comic-shadow p-8 flex flex-col items-center justify-center gap-6 w-80 h-96">
            {/* Image - 3x larger, centered above button */}
            <img 
              src="/sticker.webp" 
              alt="Money Sticker" 
              className="w-48 h-48 object-contain" 
            />
            
            {/* Button - Visual focus, centered */}
            <a 
              href="#giveaway" 
              className="bg-[#D12B2B] text-white px-8 py-4 comic-border comic-shadow comic-shadow-hover font-comic text-xl tracking-widest uppercase transition-all transform hover:scale-110 active:scale-95 text-center"
            >
              🎁 JOIN GIVEAWAY
            </a>
            
            {/* Text - Below button */}
            <p className="font-black text-sm uppercase text-black text-center leading-tight">
              DONALD MEOWP IS THROWING MONEY AROUND — GRAB YOURS WHILE YOU CAN
            </p>
          </div>
        </div>

        <div className="relative z-10 flex justify-center items-center order-1 lg:order-2">
           <div className="absolute -z-10 w-[140%] h-[140%] bg-[#D4AF37] rounded-full blur-[120px] opacity-25"></div>
           <div className="relative comic-border p-3 bg-white comic-shadow -rotate-2 transform transition-transform hover:rotate-0 duration-500">
             <img 
               src={ASSETS.meowp} 
               alt="Donald Meowp - Best Cat" 
               className="w-full max-w-[480px] h-auto object-cover border-2 border-black" 
             />
             <div className="absolute -bottom-12 -right-6 bg-black text-white comic-border p-5 comic-shadow z-20 transform rotate-3">
               <p className="font-comic text-3xl leading-tight text-[#D4AF37] uppercase tracking-tighter">THE BEST CAT!</p>
             </div>
             <div className="absolute -top-10 -left-6 bg-[#D12B2B] text-white comic-border px-4 py-2 comic-shadow z-20">
               <p className="font-bold text-xs uppercase tracking-widest">$CATL PRIDE</p>
             </div>
           </div>
        </div>
      </div>
      
      {/* Decorative halftone patterns */}
      <div className="absolute top-40 right-10 w-32 h-32 halftone opacity-20 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 halftone opacity-10 -z-10"></div>
    </section>
    </>
  );
};
