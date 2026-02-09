
import React, { useEffect, useMemo, useState } from 'react';
import { LAUNCH_DATE, LINKS } from '../constants';

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const isRealLink = (url: string) => Boolean(url) && url !== '#' && !url.includes('placeholder');

const formatLaunchTimeMsk = (ts: number) => {
  try {
    return new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Europe/Moscow',
    }).format(new Date(ts));
  } catch {
    return new Date(ts).toLocaleString();
  }
};

export const TokenLaunch: React.FC = () => {
  const launchDate =
    typeof LAUNCH_DATE === 'number' && Number.isFinite(LAUNCH_DATE) && LAUNCH_DATE > 0 ? LAUNCH_DATE : null;

  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!launchDate) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [launchDate]);

  const isLaunched = launchDate ? now >= launchDate : false;

  const launchLabel = launchDate ? `${formatLaunchTimeMsk(launchDate)} (MSK)` : 'TBA';

  const countdown: Countdown | null = useMemo(() => {
    if (!launchDate || isLaunched) return null;
    const distance = launchDate - now;
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }, [isLaunched, launchDate, now]);

  const statusLabel = isLaunched ? 'ACTIVE' : launchDate ? 'PRE-LAUNCH' : 'COMING SOON';

  const liveLinks = useMemo(() => {
    return [
      { label: 'BUY / CHART', href: LINKS.pump, className: 'bg-[#D4AF37] text-black' },
      { label: 'DEXSCREENER', href: LINKS.dex, className: 'bg-white text-black' },
      { label: 'RAYDIUM', href: LINKS.raydium, className: 'bg-white text-black' },
    ].filter((l) => isRealLink(l.href));
  }, []);

  return (
    <section id="token" className="scroll-reveal opacity-0 translate-y-10 transition-all duration-700 bg-black text-white comic-border p-12 comic-shadow">
      <div className="text-center space-y-10">
        <h2 className="font-comic text-6xl text-[#D4AF37] uppercase">TOKEN LAUNCH</h2>
        
        {!launchDate ? (
          <div className="space-y-6">
            <div className="inline-block bg-[#D12B2B] text-white px-10 py-3 comic-border transform -rotate-1">
              <span className="font-comic text-4xl uppercase">COMING SOON</span>
            </div>
            <p className="text-lg font-bold uppercase tracking-widest text-[#D4AF37]">Launch time: {launchLabel}</p>
            <div className="flex flex-wrap justify-center gap-6 pt-2">
              <a
                href={LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 comic-border font-comic text-2xl comic-shadow-hover transition-all"
              >
                JOIN TELEGRAM FOR UPDATES
              </a>
            </div>
          </div>
        ) : !isLaunched && countdown ? (
          <div className="space-y-6">
            <p className="text-2xl font-bold uppercase tracking-widest text-red-500">{launchLabel}</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              {[
                { label: 'DAYS', value: countdown.days },
                { label: 'HOURS', value: countdown.hours },
                { label: 'MINS', value: countdown.minutes },
                { label: 'SECS', value: countdown.seconds },
              ].map(unit => (
                <div key={unit.label} className="bg-white text-black comic-border p-4 w-20 sm:w-28 comic-shadow transition-transform hover:-translate-y-1">
                  <div className="font-comic text-4xl sm:text-5xl">{unit.value.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] sm:text-xs font-black uppercase">{unit.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-2">
              <a
                href={LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black px-8 py-4 comic-border font-comic text-2xl comic-shadow-hover transition-all"
              >
                GET UPDATES IN TELEGRAM
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="bg-[#D12B2B] inline-block px-12 py-4 comic-border animate-pulse transform -rotate-2">
               <span className="font-comic text-5xl uppercase text-white">LAUNCHED</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              {liveLinks.length > 0 ? (
                liveLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${l.className} px-8 py-4 comic-border font-comic text-2xl comic-shadow-hover transition-all`}
                  >
                    {l.label}
                  </a>
                ))
              ) : (
                <a
                  href={LINKS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D4AF37] text-black px-8 py-4 comic-border font-comic text-2xl comic-shadow-hover transition-all"
                >
                  LINKS IN TELEGRAM
                </a>
              )}
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
            <p className="font-bold text-lg">$MEOWP</p>
          </div>
          <div className="col-span-2 md:col-span-1 bg-white/5 p-4 comic-border border-white/10">
            <p className="text-[#D4AF37] text-[10px] font-black uppercase">Status</p>
            <p className="font-bold text-lg">{statusLabel}</p>
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
