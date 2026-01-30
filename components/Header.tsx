
import React from 'react';
import { COLORS } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-black" style={{paddingTop: 'env(safe-area-inset-top)'}}>
      <div className="flex items-center justify-between px-4 py-2 min-h-[56px]">
        <div className="flex items-center gap-2">
          <span className="font-comic text-3xl tracking-tighter">CATLANDIA</span>
          <span className="hidden md:block bg-black text-white px-2 py-0.5 text-xs font-bold rounded">OFFICIAL</span>
        </div>
        
        <div className="flex-1 mx-8 overflow-hidden hidden sm:block">
          <div className="whitespace-nowrap animate-marquee font-bold text-sm uppercase">
            $MEOWP IS COMING • MAKE CATLANDIA GREAT AGAIN • NO UTILITY • JUST VIBES • $MEOWP IS COMING • MAKE CATLANDIA GREAT AGAIN • NO UTILITY • JUST VIBES •
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <a href="#token" className="hidden md:block font-bold hover:underline">TOKEN</a>
          <a href="#comic" className="hidden md:block font-bold hover:underline">COMIC</a>
          <a href="#giveaway" className="bg-[#D12B2B] text-white px-4 py-2 min-h-[44px] flex items-center justify-center comic-border font-bold text-sm transition-transform active:scale-95 rounded-md">
            JOIN WIN
          </a>
        </div>
      </div>
    </header>
  );
};
