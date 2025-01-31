import { Metadata } from 'next';

import { Heading } from '@/components';
// import { SwiperSlider } from '@/components/swiper-slider';
// import { NewSwiper } from '@/components/new-swiper';
// import { SlickStaticProps } from '@/components/slick-stati-props';
import { EmblaSlider } from '@/components/embla-slider';

export const metadata: Metadata = {
  title: 'Наши услуги | IDN Next Slider',
  description: 'Тестовое задание IDN Next Slider',
};

export default function Home() {
  return (
    <>
      <Heading />
      {/* <SwiperSlider /> */}

      {/* <NewSwiper /> */}
      {/* <SlickStaticProps /> */}
      <EmblaSlider />
    </>
  );
}
