import { Metadata } from 'next';

import { Heading } from '@/components';
import EmblaCarousel from '@/components/EmblaCarousel';
import React from 'react'


import { EmblaOptionsType } from 'embla-carousel'



// import { SwiperSlider } from '@/components/swiper-slider';
// import { NewSwiper } from '@/components/new-swiper';
// import { SlickStaticProps } from '@/components/slick-stati-props';
// import { EmblaSlider } from '@/components/embla-slider';

export const metadata: Metadata = {
  title: 'Наши услуги | IDN Next Slider',
  description: 'Тестовое задание IDN Next Slider',
};

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <>
      <Heading />
      {/* <SwiperSlider /> */}

      {/* <NewSwiper /> */}
      {/* <SlickStaticProps /> */}

      <EmblaCarousel slides={SLIDES} options={OPTIONS}/>
    </>
  );
}
