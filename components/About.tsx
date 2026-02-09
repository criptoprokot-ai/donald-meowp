
import type { FC } from 'react';

export const About: FC = () => {
  return (
    <section className="scroll-reveal opacity-0 translate-y-10 transition-all duration-700 bg-white comic-border p-8 md:p-12 comic-shadow">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="font-comic text-5xl uppercase border-b-4 border-black inline-block">THE LORE</h2>
        <div className="text-lg md:text-xl leading-relaxed space-y-4 font-medium text-gray-800">
          <p>
            CATLANDIA is a satirical comic universe chronicling the adventures of the most ambitious cat in the world: Donald Meowp. 
            Tired of the low-quality laser pointers and subpar kibble of the current administration, Meowp has decided to take matters into his own paws.
          </p>
          <p className="bg-[#f3f2ef] p-6 comic-border border-dashed border-2 font-semibold">
            "Just memes, culture, and a very confident cat. We're going to build a wall around the litter box and make the dogs pay for it."
          </p>
          <p className="text-sm text-gray-500 italic">
            Disclaimer: For entertainment purposes only. Not financial advice. $MEOWP is a meme coin with no intrinsic value or expectation of financial return. Rules may vary by jurisdiction. Participation void where prohibited.
          </p>
        </div>
      </div>
    </section>
  );
};
