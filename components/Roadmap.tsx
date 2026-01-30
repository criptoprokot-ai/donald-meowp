
import React from 'react';

const phases = [
  { phase: 'Phase 1', title: 'The Arrival', desc: 'Comic drop, Stickers released, Community foundations.' },
  { phase: 'Phase 2', title: 'Golden Deals', desc: 'Marketing blast, Meme engine start, Community growth.' },
  { phase: 'Phase 3', title: 'The Great House', desc: '$CATL Token launch on Solana via Pump.fun.' },
  { phase: 'Phase 4', title: 'Full Issue', desc: 'Release of the complete comic edition for holders.' },
  { phase: 'Phase 5', title: 'Expansion', desc: 'Chapter 2, Merch store, Global Meowp collabs.' },
];

export const Roadmap: React.FC = () => {
  return (
    <section className="scroll-reveal opacity-0 translate-y-10 transition-all duration-700 space-y-12 overflow-hidden">
      <h2 className="font-comic text-6xl uppercase">ROADMAP</h2>
      
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-black -translate-y-1/2 hidden md:block"></div>
        <div className="grid md:grid-cols-5 gap-8 relative z-10">
          {phases.map((p, i) => (
            <div key={i} className="bg-white comic-border p-6 comic-shadow relative group hover:-translate-y-2 transition-transform">
              <div className="absolute -top-4 left-4 bg-black text-white px-3 py-1 font-bold text-xs">
                {p.phase}
              </div>
              <h3 className="font-comic text-2xl mt-2 mb-2">{p.title}</h3>
              <p className="text-sm font-bold text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
