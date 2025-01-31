/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from '@prisma/client';
import { useCardStore } from '../../store/use-card-store';
import { useEffect } from 'react';
// import { useCardStore } from '../../store/use-card-store';
// import { useEffect } from 'react';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export async function getStaticProps() {
  const response = await fetch('https://idn-next-jswp.vercel.app/api/cards/');

  const data = await response.json();

  return {
    props: { cardItems: data.results },
  };
}

export const SlickStaticProps = () => {
  const { cardItems, getCardItems } = useCardStore((state) => state);

  useEffect(() => {
    getCardItems();
  }, [getCardItems]);

  const slides = cardItems.map((item: Card) => (
    <aside key={item.id} className='p-4'>
      <div className='flex flex-col justify-between h-[212px] bg-card rounded-lg p-6 mt-[50px] cursor-grab md:mt-0 md:h-[256px]'>
        <div className='flex flex-row justify-between gap-6 h-full md:flex-col'>
          <Image
            src={item.imageUrl}
            alt='Картинка карточки'
            className='w-[60px] h-[60px] md:w-[80px] md:h-[80px]'
            width={80}
            height={80}
          />
          <p className='text-[24px]/[28px] md:text-[32px]/[36px]'>
            {`Карточка - ${item.title}`}
          </p>
        </div>

        {/** Subtitle появляется только в мобильной версии */}
        <div className='text-[14px]/[20px] tracking-wide md:hidden'>
          {item.subtitle}
        </div>
      </div>
    </aside>
  ));

  return <Slider {...settings}>{slides}</Slider>;
};
