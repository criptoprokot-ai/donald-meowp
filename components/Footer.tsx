
import React from 'react';
import { LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t-8 border-black py-16 px-4">
      <div className="container mx-auto text-center space-y-12">
        <div className="space-y-4">
           <h2 className="font-comic text-5xl uppercase">CATLANDIA</h2>
           <div className="flex justify-center gap-6">
             <a href={LINKS.telegram} target="_blank" rel="noopener noreferrer" className="font-bold underline">Telegram</a>
             <a href={LINKS.x} target="_blank" rel="noopener noreferrer" className="font-bold underline">X (Twitter)</a>
             <a href={LINKS.support} className="font-bold underline">Contact Us</a>
           </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 text-left">
          <p className="text-xs text-gray-400 leading-tight">
            CATLANDIA is a fictional universe. Any resemblance to actual persons, cats, or political figures living or dead is purely for satirical purposes. $MEOWP is a utility-free meme token. Not an investment product. 
            © {new Date().getFullYear()} CATLANDIA UNIVERSE. NO AFFILIATION WITH ANY POLITICAL ENTITIES.
          </p>
        </div>
      </div>
    </footer>
  );
};
