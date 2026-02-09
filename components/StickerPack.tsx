
import React from 'react';
import { ASSETS, LINKS } from '../constants';

export const StickerPack: React.FC = () => {
  return (
    <section className="scroll-reveal opacity-0 translate-y-10 transition-all duration-700 relative overflow-hidden bg-[#D4AF37] comic-border p-6 md:p-20 comic-shadow">
      {/* Background Decorative Element (hidden on small screens) */}
      <div className="hidden sm:block absolute top-0 right-0 w-64 h-64 halftone opacity-10 -mr-20 -mt-20 rotate-12"></div>
      
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left space-y-6">
          <h2 className="font-comic text-6xl md:text-8xl text-black uppercase leading-none tracking-tighter">
            GET THE <br />
            <span className="bg-black text-[#D4AF37] px-4 py-1 inline-block transform -rotate-2">STICKER PACK</span>
          </h2>
          <p className="text-2xl font-black uppercase italic text-black/80 max-w-md mx-auto lg:mx-0">
            Show your allegiance to Catlandia in every Telegram chat! High energy, high quality, best stickers.
          </p>
          
          <div className="pt-4">
            <a 
              href={LINKS.telegram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-black text-white px-12 py-5 comic-border comic-shadow comic-shadow-hover font-comic text-3xl tracking-wide uppercase transition-all transform hover:scale-105 active:scale-95"
            >
              Add to Telegram
            </a>
          </div>
        </div>

        <div className="relative h-auto sm:h-[400px] flex sm:block items-center justify-center">
          {/* Large Overlapping Stickers */}
          <div className="relative w-full h-full">
            {/* Sticker 1 */}
            <div className="sm:absolute top-0 left-0 transform sm:-rotate-12 hover:rotate-0 transition-transform duration-300 z-10">
              <div className="bg-white p-2 comic-border comic-shadow rounded-xl overflow-hidden w-48 h-48 md:w-64 md:h-64">
                <img src={ASSETS.stickers[0]} className="w-full h-full object-cover" alt="Sticker 1" loading="lazy" decoding="async" />
              </div>
            </div>
            
            {/* Sticker 2 */}
            <div className="sm:absolute top-1/2 left-1/2 transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rotate-6 hover:rotate-0 transition-transform duration-300 z-30">
              <div className="bg-white p-2 comic-border comic-shadow rounded-xl overflow-hidden w-56 h-56 md:w-72 md:h-72">
                <img src={ASSETS.stickers[1]} className="w-full h-full object-cover" alt="Sticker 2" loading="lazy" decoding="async" />
                <div className="absolute top-2 right-2 bg-[#D12B2B] text-white text-[10px] font-black px-2 py-0.5 uppercase">Elite</div>
              </div>
            </div>

            {/* Sticker 3 */}
            <div className="sm:absolute bottom-0 right-0 transform sm:rotate-12 hover:rotate-0 transition-transform duration-300 z-20">
              <div className="bg-white p-2 comic-border comic-shadow rounded-xl overflow-hidden w-48 h-48 md:w-64 md:h-64">
                <img src={ASSETS.stickers[2]} className="w-full h-full object-cover" alt="Sticker 3" loading="lazy" decoding="async" />
              </div>
            </div>

            {/* Accent Text Bubble */}
            <div className="absolute -top-4 right-10 bg-white comic-border p-3 comic-shadow z-40 transform -rotate-3 hidden md:block">
              <p className="font-comic text-2xl text-red-600 uppercase leading-none">FREE TO USE!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
