'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/pagination';

export const NewSwiper = () => {
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
