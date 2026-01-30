
import React from 'react';
import { LINKS } from '../constants';

export const Footer: React.FC = () => {
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Copy failed', e);
    }
  };

  return (
    <footer className="bg-white border-t-8 border-black py-16 px-4">
      <div className="container mx-auto text-center space-y-12">
        <div className="space-y-4">
           <h2 className="font-comic text-5xl uppercase">CATLANDIA</h2>
           <div className="flex justify-center gap-6">
             <a href={LINKS.telegram} className="font-bold underline">Telegram</a>
             <a href={LINKS.x} className="font-bold underline">X (Twitter)</a>
             <a href={LINKS.support} className="font-bold underline">Contact Us</a>
           </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-6 text-left">
          <div className="bg-[#FFF8E6] comic-border p-4 border-2">
            <h4 className="font-bold uppercase mb-2">Support the project</h4>
            <p className="text-sm mb-3">You can support us by sending crypto to the following addresses. Click <span className="font-mono">Copy</span> to copy an address.</p>

            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-2 comic-border gap-2">
                <div className="min-w-0">
                  <div className="text-xs uppercase opacity-70">Solana</div>
                  <div className="font-mono text-sm break-words">7GuDkrnmb7YpnM44huN1ZxJHk1xxhekzpqvh69teK1wz</div>
                </div>
                <div className="flex sm:ml-4">
                  <button onClick={() => handleCopy('7GuDkrnmb7YpnM44huN1ZxJHk1xxhekzpqvh69teK1wz')} className="px-3 py-1 bg-black text-white font-bold">Copy</button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-2 comic-border gap-2">
                <div className="min-w-0">
                  <div className="text-xs uppercase opacity-70">Bitcoin</div>
                  <div className="font-mono text-sm break-words">bc1pn84zrvf8x3c07x3lq7uxrpedl8eusnzncqavt3fkudl2pm7ydvxqx5gksj</div>
                </div>
                <div className="flex sm:ml-4">
                  <button onClick={() => handleCopy('bc1pn84zrvf8x3c07x3lq7uxrpedl8eusnzncqavt3fkudl2pm7ydvxqx5gksj')} className="px-3 py-1 bg-black text-white font-bold">Copy</button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-2 comic-border gap-2">
                <div className="min-w-0">
                  <div className="text-xs uppercase opacity-70">USDT (Ethereum)</div>
                  <div className="font-mono text-sm break-words">0xdac17f958d2ee523a2206206994597c13d831ec7</div>
                </div>
                <div className="flex sm:ml-4">
                  <button onClick={() => handleCopy('0xdac17f958d2ee523a2206206994597c13d831ec7')} className="px-3 py-1 bg-black text-white font-bold">Copy</button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 leading-tight">
            CATLANDIA is a fictional universe. Any resemblance to actual persons, cats, or political figures living or dead is purely for satirical purposes. $MEOWP is a utility-free meme token. Not an investment product. 
            © {new Date().getFullYear()} CATLANDIA UNIVERSE. NO AFFILIATION WITH ANY POLITICAL ENTITIES.
          </p>
        </div>
      </div>
    </footer>
  );
};
