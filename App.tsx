
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { TokenLaunch } from './components/TokenLaunch';
import { Roadmap } from './components/Roadmap';
import { Giveaway } from './components/Giveaway';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { StickerPack } from './components/StickerPack';
import { Community } from './components/Community';

const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="fixed inset-0 halftone pointer-events-none z-0"></div>
      
      <Header />
      
      <main className="relative z-10 pt-20">
        <Hero />
        
        <div className="container mx-auto px-4 space-y-24 pb-24">
          <About />
          <TokenLaunch />
          <Gallery />
          <StickerPack />
          <Roadmap />
          <Giveaway />
          <Community />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
