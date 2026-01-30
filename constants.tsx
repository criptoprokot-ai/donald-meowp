
import React from 'react';

export const COLORS = {
  gold: '#D4AF37',
  red: '#D12B2B',
  black: '#000000',
  gray: '#f3f2ef',
};

export const LINKS = {
  telegram: 'https://t.me/catlandiameowp',
  x: 'https://x.com/DonaldMeowp',
  pump: 'https://pump.fun/catlandia_placeholder',
  dex: 'https://dexscreener.com/solana/catlandia_placeholder',
  raydium: 'https://raydium.io/swap/catlandia_placeholder',
  support: 'mailto:support@catlandia.vip',
};

export interface ComicPanel {
  url: string;
  caption: string;
  quote?: string;
}

export const COMIC_PANELS: ComicPanel[] = [
  {
    url: '/panel-1.jpg',
    caption: 'Catlandia at sunset. A utopian city, where a golden scratching-tower rises at the center.',
    quote: 'Catlandia has always been a land of full bellies and soft pillows…'
  },
  {
    url: '/panel-2.jpg',
    caption: 'Barsik ‘The Shadow’ watches the news from a dirty alley.',
    quote: 'A full belly makes a cat lazy. A lazy cat is the perfect voter.'
  },
  {
    url: '/panel-3.jpg',
    caption: 'A golden helicopter lands before the Council of Elders. Donald Meowp steps out, his signature hairstyle untouched.',
    quote: 'Look at this city! It’s collapsing! The dogs are at the gates!'
  },
  {
    url: '/panel-4.jpg',
    caption: 'Meowp promises the Great Wall.',
    quote: 'I’ll build the Wall. And the Dogs will pay for it!'
  },
  {
    url: '/panel-5.jpg',
    caption: 'Meowp bribes the corrupt Council with ‘Golden Deals.’',
    quote: 'I offer you a deal. I give you catnip — you give me power.'
  },
  {
    url: '/panel-6.jpg',
    caption: 'An Elder tries ‘MAHA-Pure.’ Addiction begins.',
    quote: 'It smells like… victory.'
  },
  {
    url: '/panel-7.jpg',
    caption: 'Night raids. The Hounds sweep through the poor districts.',
    quote: 'Deportation to the Dog Shelter!'
  },
  {
    url: '/panel-8.jpg',
    caption: 'The Resistance meets on a rain-soaked rooftop.',
    quote: 'It’s time to show our claws, Murka. Real claws.'
  },
  {
    url: '/panel-9.jpg',
    caption: 'Meowp celebrates victory on the balcony, the city burning behind him.',
    quote: 'The smell of a deal in the morning…'
  }
];

export const ASSETS = {
  meowp:'/cat-1.jpg',
  stickers: [
    '/sticker-1.jpg',
    '/sticker-2.jpg',
    '/sticker-3.jpg',
    '/sticker-4.jpg',
  ],
  panels: COMIC_PANELS,
};

export const LAUNCH_DATE = new Date('2025-02-07T22:00:00+03:00').getTime(); // 22:00 MSK
