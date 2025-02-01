import React from 'react';
import type { Metadata } from 'next';

import { Heading } from '@/components';
import { EmblaCarousel } from '@/components/embla-carousel/embla-carousel';

export const metadata: Metadata = {
  title: 'Наши услуги | IDN Next Slider',
  description: 'Тестовое задание IDN Next Slider',
};

export default async function Home() {
  const res = await fetch('https://idn-next-jswp.vercel.app/api/cards/');
  const cardItems = await res.json();

  return (
    <>
      <Heading />
      <EmblaCarousel cardItems={cardItems} />
    </>
  );
}
