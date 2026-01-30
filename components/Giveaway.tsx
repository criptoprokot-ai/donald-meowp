
import React, { useState, useEffect } from 'react';
import { GiveawayEntry } from '../types';

export const Giveaway: React.FC = () => {
  const [wallet, setWallet] = useState('');
  const [xHandle, setXHandle] = useState('');
  const [proofLink, setProofLink] = useState('');
  const [entries, setEntries] = useState<GiveawayEntry[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('catlandia_entries');
    if (saved) setEntries(JSON.parse(saved));
  }, []);

  const handleSubmit = (e: React.FormEvent, type: 'standard' | 'premium') => {
    e.preventDefault();
    if (!wallet) return;

    const newEntry: GiveawayEntry = {
      wallet,
      timestamp: new Date().toLocaleString(),
      type
    };

    const updated = [...entries, newEntry];
    setEntries(updated);
    localStorage.setItem('catlandia_entries', JSON.stringify(updated));
    setSubmitted(true);
    setWallet('');
    setXHandle('');
    setProofLink('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="giveaway" className="scroll-reveal opacity-0 translate-y-10 transition-all duration-700 space-y-12">
      <div className="text-center">
         <h2 className="font-comic text-6xl uppercase inline-block border-b-8 border-[#D12B2B]">COMMUNITY GIVEAWAYS</h2>
         <p className="mt-4 font-bold text-xl uppercase italic">WE WIN, YOU WIN. BELIEVE ME.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Giveaway #1 */}
        <div className="bg-white comic-border p-8 comic-shadow flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="font-comic text-4xl text-[#D12B2B]">GIVEAWAY #1: THE CABINET</h3>
            <p className="font-bold">5 WINNERS — 1 SOL EACH</p>
            <p className="text-sm font-bold bg-yellow-100 p-2 comic-border border-dashed border-2">
              ANYONE WHO BOUGHT THE TOKEN FOR ANY AMOUNT CAN PARTICIPATE.
            </p>
            
            <form onSubmit={(e) => handleSubmit(e, 'standard')} className="space-y-4 mt-6">
              <input 
                type="text" 
                placeholder="Solana Wallet Address" 
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                className="w-full comic-border p-3 font-bold" 
                required
              />
              <div className="grid grid-cols-1 gap-2">
                <label className="flex items-center gap-2 text-sm font-bold cursor-pointer">
                  <input type="checkbox" required className="w-4 h-4 accent-black" /> I joined Telegram
                </label>
                <label className="flex items-center gap-2 text-sm font-bold cursor-pointer">
                  <input type="checkbox" required className="w-4 h-4 accent-black" /> I followed on X
                </label>
                <label className="flex items-center gap-2 text-sm font-bold cursor-pointer">
                  <input type="checkbox" required className="w-4 h-4 accent-black" /> I retweeted the pinned post
                </label>
              </div>
              <button className="w-full bg-black text-white p-4 font-comic text-2xl uppercase comic-shadow-hover transition-all">
                SUBMIT ENTRY
              </button>
            </form>
          </div>
        </div>

        {/* Giveaway #2 */}
        <div className="bg-black text-white comic-border p-8 comic-shadow">
          <div className="space-y-4">
            <h3 className="font-comic text-4xl text-[#D4AF37]">GIVEAWAY #2: THE GOLDEN DEAL</h3>
            <p className="font-bold text-[#D4AF37]">1 WINNER — 10 SOL</p>
            <p className="text-sm text-gray-400">Our biggest reward yet. Points are awarded for community loyalty and engagement.</p>
            
            <form onSubmit={(e) => handleSubmit(e, 'premium')} className="space-y-4 mt-6">
              <input 
                type="text" 
                placeholder="Solana Wallet Address" 
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                className="w-full comic-border p-3 font-bold text-black" 
                required
              />
              <input 
                type="text" 
                placeholder="Your X handle (optional)" 
                value={xHandle}
                onChange={(e) => setXHandle(e.target.value)}
                className="w-full comic-border p-3 font-bold text-black" 
              />
              <input 
                type="url" 
                placeholder="Proof link (optional)" 
                value={proofLink}
                onChange={(e) => setProofLink(e.target.value)}
                className="w-full comic-border p-3 font-bold text-black" 
              />
              <button className="w-full bg-[#D4AF37] text-black p-4 font-comic text-2xl uppercase hover:bg-white transition-colors">
                CLAIM YOUR SHARE
              </button>
            </form>
            <p className="text-[10px] text-gray-500 uppercase italic pt-4">
              Points from: joining TG, following X, lore contributions. Rules may vary by jurisdiction. Participation void where prohibited.
            </p>
          </div>
        </div>
      </div>

      {submitted && (
        <div className="fixed bottom-10 right-10 bg-green-500 text-white p-6 comic-border comic-shadow font-bold z-[200] animate-bounce">
           ENTRY RECEIVED! GREAT SUCCESS!
        </div>
      )}

      {entries.length > 0 && (
        <div className="mt-12 bg-white comic-border p-6 comic-shadow overflow-x-auto">
          <h4 className="font-comic text-2xl mb-4">YOUR RECENT SUBMISSIONS</h4>
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2 border-black font-black uppercase">
                <th className="py-2">Wallet</th>
                <th className="py-2">Type</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {entries.slice(-5).reverse().map((entry, idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-2 truncate max-w-[150px]">{entry.wallet}</td>
                  <td className="py-2 uppercase font-bold text-xs">{entry.type}</td>
                  <td className="py-2 text-[10px]">{entry.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};
