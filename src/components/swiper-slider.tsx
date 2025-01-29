'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import cardAnalysis from '@/assets/images/card-analysis.svg';
import cardSearch from '@/assets/images/card-search-job.svg';
import cardLetter from '@/assets/images/card-letter.svg';
import cardTraining from '@/assets/images/card-training.svg';
import cardInterview from '@/assets/images/card-interview.svg';
import cardRecommend from '@/assets/images/card-recommend.svg';
import { Card, Container } from '.';
import { cn } from '@/lib/cn';

export const cardData = [
  {
    imageUrl: cardAnalysis,
    title: 'Анализ текущего состояния карьеры',
    subtitle:
      'Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.',
  },
  {
    imageUrl: cardSearch,
    title: 'Поиск работы',
    subtitle:
      'Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.',
  },
  {
    imageUrl: cardLetter,
    title: 'Сопроводительные письма и резюме',
    subtitle:
      'Определим вашу карьерную цель и разработаем стратегию для трудоустройства.',
  },
  {
    imageUrl: cardTraining,
    title: 'Тренинг по презентации личного бренда',
    subtitle: 'Подсветим сильные стороны и грамотно выстроим самопрезентацию.',
  },
  {
    imageUrl: cardInterview,
    title: 'Подготовка к собеседованию',
    subtitle: 'Научим говорить о себе кратко, ярко и профессионально.',
  },
  {
    imageUrl: cardRecommend,
    title: 'Рекомендация по базе STEMPS Career',
    subtitle: 'Поможем встретиться соискателю и работодателю.',
  },
];

interface Props {
  // slides: number;
  className?: string;
}

export const SwiperSlider: FC<Props> = ({ 
  // slides, 
  className }) => {
  return (
    <Container className={cn(className, 'px-4 pt-[21px]')}>
      <Swiper
        loop={true}
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
        modules={[Navigation, Pagination]}
        className='mySwiper'
      >
        {cardData.map((item) => (
          <SwiperSlide key={item.title}>
            <Card
              imageUrl={item.imageUrl}
              title={item.title}
              subtitle={item.subtitle}
            />
          </SwiperSlide>
        ))}

        <div
          className='swiper-pagination [&_.swiper-pagination-bullet-active]:bg-grey-light
    [&_.swiper-pagination-bullet-active]:w-10
    [&_.swiper-pagination-bullet-active]:rounded-md md:hidden'
        ></div>
      </Swiper>
    </Container>
  );
};
