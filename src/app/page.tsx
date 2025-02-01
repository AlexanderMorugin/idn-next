import { Metadata } from 'next';

import { Heading } from '@/components';
// import { SwiperSlider } from '@/components/swiper-slider';
import EmblaCarousel from '@/components/embla-carousel/embla-carousel';

export const metadata: Metadata = {
  title: 'Наши услуги | IDN Next Slider',
  description: 'Тестовое задание IDN Next Slider',
};

const OPTIONS = { align: 'start' };
// const SLIDE_COUNT = 6;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {

  return (
    <>
      <Heading />
      {/* <SwiperSlider /> */}

      <EmblaCarousel 
      // slides={SLIDES} 
      options={OPTIONS} />
    </>
  );
}
