
import React from 'react';
import { LINKS } from '../constants';

export const Community: React.FC = () => {
  return (
    <section id="community" className="scroll-reveal opacity-0 translate-y-10 transition-all duration-700 space-y-12">
      <div className="flex items-center gap-6">
        <div className="h-2 bg-black w-full"></div>
        <h2 className="font-comic text-6xl uppercase flex-shrink-0">COMMUNITY</h2>
        <div className="h-2 bg-black w-full"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white comic-border p-8 comic-shadow flex flex-col items-center text-center space-y-4">
          <img src="https://api.iconify.design/logos:telegram.svg" className="w-16 h-16" alt="TG" />
          <h3 className="font-comic text-3xl uppercase">TELEGRAM</h3>
          <p className="text-sm font-semibold text-gray-700 leading-snug">Join the inner circle. Get the latest leaks and comic panels first.</p>
          <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-2 comic-border font-bold uppercase transition-transform hover:scale-105">Join Now</a>
        </div>

        <div className="bg-white comic-border p-8 comic-shadow flex flex-col items-center text-center space-y-4">
          <img src="https://api.iconify.design/logos:twitter.svg" className="w-16 h-16" alt="X" />
          <h3 className="font-comic text-3xl uppercase">X (TWITTER)</h3>
          <p className="text-sm font-semibold text-gray-700 leading-snug">The megaphone of Catlandia. Retweet the truth and spread the memes.</p>
          <a href={LINKS.x} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-2 comic-border font-bold uppercase transition-transform hover:scale-105">Follow Us</a>
        </div>

        <div className="bg-[#D4AF37] comic-border p-8 comic-shadow flex flex-col items-center text-center space-y-4">
          <div className="bg-white p-3 comic-border rounded-full">
            <img src="https://api.iconify.design/mdi:book-open-variant.svg" className="w-10 h-10" alt="Book" />
          </div>
          <h3 className="font-comic text-3xl uppercase">FULL ISSUE</h3>
          <p className="text-sm font-semibold text-gray-800 leading-snug">Read the complete story of Donald Meowp's rise to power.</p>
          <div className="space-y-2 w-full">
            <span className="block text-xs font-black uppercase bg-black text-white px-2 py-1 mb-2">Coming Soon</span>
            <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="block bg-white text-black px-6 py-2 comic-border font-bold uppercase transition-transform hover:scale-105">Get Updates</a>
          </div>
        </div>
      </div>
    </section>
  );
};
