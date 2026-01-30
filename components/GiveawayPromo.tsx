import React from 'react';
import { LINKS } from '../constants';

export const GiveawayPromo: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 py-8">
      <div className="container mx-auto max-w-4xl">
        <div className="relative comic-border bg-[#D12B2B] comic-shadow p-8 md:p-12">
          {/* Badge */}
          <div className="hidden sm:block absolute -top-4 right-8 bg-black text-[#D4AF37] comic-border px-6 py-2 font-comic text-2xl font-black uppercase tracking-wide">
            FREE SOL
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="font-comic text-5xl md:text-6xl text-white uppercase leading-tight">
                DONALD MEOWP <br />
                <span className="text-yellow-300">IS THROWING MONEY</span> <br />
                AROUND!
              </h2>
              
              <p className="text-2xl font-black text-yellow-300 uppercase">
                Grab yours while you can — join the giveaway now!
              </p>
            </div>

            {/* Money Icon & Button */}
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="text-6xl">💰</div>
              
              <a 
                href="#giveaway" 
                className="bg-black text-white px-6 py-3 sm:px-12 sm:py-6 comic-border comic-shadow comic-shadow-hover font-comic text-2xl sm:text-3xl tracking-wide uppercase transition-all transform hover:scale-105 active:scale-95 w-full text-center"
              >
                Join Giveaway
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
