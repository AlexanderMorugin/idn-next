'use client';

import { FC, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';


import { CardBox, Container } from '.';
import { useCardStore } from '../../store/use-card-store';

export const SwiperSlider: FC = ({}) => {
  const { cardItems, getCardItems } = useCardStore((state) => state);

  useEffect(() => {
    getCardItems();
  }, [getCardItems]);



  return (
    <Container className='px-4 pt-[21px]'>
      <Swiper
        autoplay={true}
        speed={1000}
        spaceBetween={16}
        slidesPerView='auto'
        observer={true}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide',
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {cardItems.map((item) => (
          <SwiperSlide key={item.title}>
            <CardBox
              imageUrl={item.imageUrl}
              title={item.title}
              subtitle={item.subtitle}
            />
          </SwiperSlide>
        ))}

        <div className='absolute top-[10px]'>
          <div
            className='swiper-pagination [&_.swiper-pagination-bullet-active]:bg-grey-light
    [&_.swiper-pagination-bullet-active]:w-10
    [&_.swiper-pagination-bullet-active]:rounded-md md:hidden'
          ></div>
        </div>
      </Swiper>
    </Container>
  );
};
