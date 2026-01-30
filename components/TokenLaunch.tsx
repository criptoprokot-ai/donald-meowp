
import React, { useState, useEffect } from 'react';
import { LAUNCH_DATE, LINKS } from '../constants';

export const TokenLaunch: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isLaunched: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isLaunched: false });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = LAUNCH_DATE - now;

      if (distance < 0) {
        setTimeLeft(prev => ({ ...prev, isLaunched: true }));
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        isLaunched: false
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="token" className="scroll-reveal opacity-0 translate-y-10 transition-all duration-700 bg-black text-white comic-border p-12 comic-shadow">
      <div className="text-center space-y-10">
        <h2 className="font-comic text-6xl text-[#D4AF37] uppercase">TOKEN LAUNCH</h2>
        
        {!timeLeft.isLaunched ? (
          <div className="space-y-6">
            <p className="text-2xl font-bold uppercase tracking-widest text-red-500">07 February, 22:00 MSK</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {[
                { label: 'DAYS', value: timeLeft.days },
                { label: 'HOURS', value: timeLeft.hours },
                { label: 'MINS', value: timeLeft.minutes },
                { label: 'SECS', value: timeLeft.seconds },
              ].map(unit => (
                <div key={unit.label} className="bg-white text-black comic-border p-4 w-20 sm:w-28 comic-shadow transition-transform hover:-translate-y-1">
                  <div className="font-comic text-4xl sm:text-5xl">{unit.value.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] sm:text-xs font-black uppercase">{unit.label}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-[#D12B2B] inline-block px-12 py-4 comic-border animate-pulse transform -rotate-2">
               <span className="font-comic text-5xl uppercase text-white">LAUNCHED NOW!</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <a href={LINKS.pump} className="bg-[#D4AF37] text-black px-8 py-4 comic-border font-comic text-2xl comic-shadow-hover transition-all">BUY / CHART</a>
              <a href={LINKS.dex} className="bg-white text-black px-8 py-4 comic-border font-comic text-2xl comic-shadow-hover transition-all">DEXSCREENER</a>
              <a href={LINKS.raydium} className="bg-white text-black px-8 py-4 comic-border font-comic text-2xl comic-shadow-hover transition-all">RAYDIUM</a>
            </div>
          </div>
        )}

        <div className="max-w-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 text-left border-t border-white/20 pt-8 mt-12">
          <div className="bg-white/5 p-4 comic-border border-white/10">
            <p className="text-[#D4AF37] text-[10px] font-black uppercase">Network</p>
            <p className="font-bold text-lg">SOLANA</p>
          </div>
          <div className="bg-white/5 p-4 comic-border border-white/10">
            <p className="text-[#D4AF37] text-[10px] font-black uppercase">Ticker</p>
            <p className="font-bold text-lg">$CATL</p>
          </div>
          <div className="col-span-2 md:col-span-1 bg-white/5 p-4 comic-border border-white/10">
            <p className="text-[#D4AF37] text-[10px] font-black uppercase">Status</p>
            <p className="font-bold text-lg">{timeLeft.isLaunched ? 'ACTIVE' : 'PRE-LAUNCH'}</p>
          </div>
          <div className="col-span-2 md:col-span-3 bg-white/5 p-4 comic-border border-white/10">
            <p className="text-[#D4AF37] text-[10px] font-black uppercase">Contract Address</p>
            <p className="font-mono text-sm break-all font-bold tracking-tighter">TBA (ANNOUNCED IN TELEGRAM AT LAUNCH)</p>
          </div>
        </div>
      </div>
    </section>
  );
};
