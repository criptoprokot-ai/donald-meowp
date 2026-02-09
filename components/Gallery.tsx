
import React, { useEffect, useState } from 'react';
import { COMIC_PANELS, ComicPanel } from '../constants';

const galleryStyles = `
  .panel-header {
    background-color: #D4AF37;
    background-image: radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px);
    background-size: 6px 6px;
    background-position: center;
    position: relative;
    overflow: hidden;
  }
  .panel-header::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.04));
    pointer-events: none;
    z-index: 1;
  }
  .panel-soon {
    color: #ffffff;
    -webkit-text-stroke: 3px #000000;
    text-shadow: 3px 3px 0px #000000, 0 0 8px rgba(0,0,0,0.35);
    transform: translateY(0);
    transition: transform 180ms ease;
    position: relative;
    z-index: 2;
    letter-spacing: -1px;
  }
  .group:hover .panel-soon { transform: translateY(-4px); }
`;

const CHAPTER_II_PANELS: ComicPanel[] = [
  {
    url: '/chapter2/panel1.jpg',
    caption:
      "Morning in Catlandia. A regular cat tries to catch a sunbeam — but a surveillance drone is already there, issuing a fine for ‘unauthorized photon capture.’ In the new Catlandia, even the sun no longer belongs to us…",
  },
  {
    url: '/chapter2/panel2.jpg',
    caption:
      "The Great Construction. Instead of the promised luxury — a wall of rusted cans and barbed wire. Propaganda says: ‘The Wall is comfort.’ He promised us a fortress. He’s building a cage.",
  },
  {
    url: '/chapter2/panel3.jpg',
    caption:
      "Meowp reclines in his throne woven from golden threads, discussing a plan with his sphinx-advisor to create “fake dogs” — a manufactured threat to distract the masses.",
    quote: 'The ratings are dropping… We need an enemy. A real one. Create it.',
  },
  {
    url: '/chapter2/panel4.jpg',
    caption:
      'The headquarters of the “Claws of Freedom.” Barsik and Murka plan a sabotage ahead of the grand parade.',
    quote: "We won’t kill him. We’ll do something worse. We’ll take away his face.",
  },
  {
    url: '/chapter2/panel5.jpg',
    caption:
      'Murka hands Barsik a secret weapon — a static destabilizer disguised as a simple laser pointer.',
    quote: 'Aim this at his comb-over… well — you’ll see.',
  },
  {
    url: '/chapter2/panel6.jpg',
    caption:
      'The Grand Parade. Meowp delivers a speech from a towering podium about the “Great Purification.” Below — a sea of cats. In the shadow of the crowd, Barsik quietly selects the perfect firing position.',
    quote: '…and when the Dogs come, they won’t see just cats — they’ll see a WALL!',
  },
  {
    url: '/chapter2/panel7.jpg',
    caption:
      'Climax. Barsik presses the button. A thin purple beam from the static destabilizer strikes Meowp’s magnificent comb-over. BZZZZZT!',
  },
  {
    url: '/chapter2/panel8.jpg',
    caption:
      'The comb-over explodes in a burst of static, revealing a completely bald, wrinkled scalp. The crowd freezes in shock. Meowp panics, desperately trying to cover himself with his paws. As the Hounds flood the square with water cannons in total chaos, Barsik and Murka vanish into a dark alley.',
    quote: 'This… this is a Dog attack! Terrorism! Turn off the cameras!',
  },
  {
    url: '/chapter2/panel9.jpg',
    caption:
      'The magic is gone. All that’s left is bare, angry truth. And that truth has very sharp claws.',
  },
];

export const Gallery: React.FC = () => {
  const [selectedPanel, setSelectedPanel] = useState<ComicPanel | null>(null);

  useEffect(() => {
    if (!selectedPanel) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPanel(null);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [selectedPanel]);

  return (
    <section id="comic" className="scroll-reveal opacity-0 translate-y-10 transition-all duration-700 space-y-12">
      <style>{galleryStyles}</style>
      <div className="flex items-center gap-6">
        <h2 className="font-comic text-6xl uppercase flex-shrink-0">THE STORY SO FAR</h2>
        <div className="h-2 bg-black w-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COMIC_PANELS.map((panel, idx) => (
          <div 
            key={idx}
            onClick={() => setSelectedPanel(panel)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedPanel(panel);
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={`Open Chapter I panel ${idx + 1}`}
            className="group relative cursor-pointer comic-border p-2 bg-white comic-shadow hover:scale-[1.02] transition-all duration-300"
          >
            <div className="overflow-hidden bg-gray-100 aspect-video mb-4">
              <img 
                src={panel.url} 
                alt={`Panel ${idx + 1}`} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
            </div>
            
            <div className="bg-[#D4AF37] comic-border border-2 p-3 relative -mt-8 mx-4 z-10 comic-shadow">
              <p className="font-bold text-xs leading-tight mb-1 uppercase opacity-70">Chapter I: Panel {idx + 1}</p>
              <p className="text-sm leading-relaxed text-black font-semibold">
                {panel.caption}
              </p>
              {panel.quote && (
                <p className="mt-2 pt-2 border-t border-black/10 font-comic text-lg text-red-700 italic">
                  “{panel.quote}”
                </p>
              )}
            </div>

            <div className="absolute top-4 right-4 bg-black text-white text-[10px] font-black px-2 py-0.5 z-20">
              #{idx + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Chapter section - Price of the Sun */}
      <div className="mt-12 text-center">
        <div className="mb-6">
          <div className="inline-block bg-[#D12B2B] text-white px-6 py-2 comic-border mb-4 font-comic font-black uppercase tracking-wide">CHAPTER II</div>
          <h3 className="font-comic text-5xl md:text-6xl uppercase">THE PRICE OF THE SUN</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
          {CHAPTER_II_PANELS.map((panel, idx) => (
            <div
              key={`chapter2-${idx}`}
              onClick={() => setSelectedPanel(panel)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPanel(panel);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open Chapter II panel ${idx + 1}`}
              className="group relative cursor-pointer comic-border p-2 bg-white comic-shadow hover:scale-[1.02] transition-all duration-300"
            >
              <div className="overflow-hidden bg-gray-100 aspect-video mb-4">
                <img
                  src={panel.url}
                  alt={`Chapter II Panel ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="bg-[#D4AF37] comic-border border-2 p-3 relative -mt-8 mx-4 z-10 comic-shadow">
                <p className="font-bold text-xs leading-tight mb-1 uppercase opacity-70">Chapter II: Panel {idx + 1}</p>
                <p className="text-sm leading-relaxed text-black font-semibold">
                  {panel.caption}
                </p>
                {panel.quote && (
                  <p className="mt-2 pt-2 border-t border-black/10 font-comic text-lg text-red-700 italic">
                    “{panel.quote}”
                  </p>
                )}
              </div>

              <div className="absolute top-4 right-4 bg-black text-white text-[10px] font-black px-2 py-0.5 z-20">
                #{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter section - Operation "Bare Skin" (locked/soon panels) */}
      <div className="mt-16 text-center">
        <div className="mb-6">
          <div className="inline-block bg-[#D12B2B] text-white px-6 py-2 comic-border mb-4 font-comic font-black uppercase tracking-wide">CHAPTER III</div>
          <h3 className="font-comic text-5xl md:text-6xl uppercase">OPERATION “BARE SKIN”</h3>
          <div className="mt-2 mb-6 flex items-center justify-center">
            <div className="h-1 bg-black w-1/4"></div>
            <div className="px-4 text-xs uppercase tracking-widest">Chapter 3: Operation “Bare Skin”</div>
            <div className="h-1 bg-black w-1/4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          {[
            { title: 'OPERATION', leak: 'PANEL LEAK #1' },
            { title: 'BARE', leak: 'PANEL LEAK #2' },
            { title: 'SKIN', leak: 'PANEL LEAK #3' },
          ].map((card, idx) => (
            <div
              key={`chapter3-soon-${idx}`}
              className="group relative cursor-default comic-border p-2 bg-white comic-shadow hover:scale-[1.02] transition-all duration-300"
            >
              <div className="overflow-hidden panel-header aspect-video mb-4 flex items-center justify-center">
                <span className="panel-soon font-comic text-6xl text-black uppercase">SOON</span>
              </div>

              <div className="bg-[#D4AF37] comic-border border-2 p-3 relative -mt-8 mx-4 z-10 comic-shadow">
                <div className="inline-block bg-black text-white px-2 py-1 text-xs font-black uppercase">LOCKED FILE</div>
                <p className="font-bold text-xs leading-tight mt-2 uppercase opacity-70">{card.leak}</p>
                <p className="font-bold text-2xl leading-snug text-black">{card.title}</p>
                <p className="mt-2 pt-2 border-t border-black/10 font-comic text-lg text-red-700 italic">"Chapter 3: Operation “Bare Skin”"</p>
              </div>

              <div className="absolute top-4 right-4 bg-black text-white text-[10px] font-black px-2 py-0.5 z-20 rounded-full">🔒</div>
            </div>
          ))}
        </div>
      </div>

      {selectedPanel && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 overflow-y-auto"
          onClick={() => setSelectedPanel(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Comic panel viewer"
        >
          <div className="relative max-w-6xl w-full bg-white comic-border p-4 comic-shadow mt-auto mb-auto" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPanel.url} alt="Fullscreen Panel" className="w-full h-auto comic-border" />
            
            <div className="mt-6 bg-[#f3f2ef] p-6 comic-border">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-comic text-3xl uppercase text-black">NARRATIVE PANEL</h3>
                <button 
                  onClick={() => setSelectedPanel(null)}
                  type="button"
                  className="bg-black text-white px-4 py-2 font-comic text-xl comic-shadow-hover transition-all"
                >
                  CLOSE [X]
                </button>
              </div>
              <p className="text-xl font-bold text-gray-800 leading-relaxed mb-4">
                {selectedPanel.caption}
              </p>
              {selectedPanel.quote && (
                <div className="relative p-6 bg-white comic-border border-dashed border-2">
                  <div className="absolute -top-3 left-6 bg-black text-white text-[10px] px-2 py-0.5 font-black uppercase">Dialogue</div>
                  <p className="font-comic text-4xl text-red-600 leading-tight">
                    “{selectedPanel.quote}”
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
