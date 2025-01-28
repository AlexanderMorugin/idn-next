import { type FC } from 'react';
import { Card, Container } from '.';

import cardAnalysis from '@/assets/images/card-analysis.svg';
import cardSearch from '@/assets/images/card-search-job.svg';
import cardLetter from '@/assets/images/card-letter.svg';
import cardTraining from '@/assets/images/card-training.svg';
import cardInterview from '@/assets/images/card-interview.svg';
import cardRecommend from '@/assets/images/card-recommend.svg';

const cardData = [
  {
    imageUrl: cardAnalysis,
    title: 'Анализ текущего состояния карьеры',
    subtitle: 'Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.'
  },
  // {
  //   imageUrl: cardSearch,
  //   title: 'Поиск работы',
  // subtitle: 'Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.'
  // },
  // {
  //   imageUrl: cardLetter,
  //   title: 'Сопроводительные письма и резюме',
  // subtitle: 'Определим вашу карьерную цель и разработаем стратегию для трудоустройства.'
  // },
  // {
  //   imageUrl: cardTraining,
  //   title: 'Тренинг по презентации личного бренда',
  // subtitle: 'Подсветим сильные стороны и грамотно выстроим самопрезентацию.'
  // },
  // {
  //   imageUrl: cardInterview,
  //   title: 'Подготовка к собеседованию',
  // subtitle: 'Научим говорить о себе кратко, ярко и профессионально.'
  // },
  // {
  //   imageUrl: cardRecommend,
  //   title: 'Рекомендация по базе STEMPS Career',
  // subtitle: 'Поможем встретиться соискателю и работодателю.'
  // },
];

export const CardBox: FC = () => {
  return (
    <Container className='px-4 mt-[40px] md:mt-[21px]'>
      <ul className='flex gap-4'>
        {cardData.map((item) => (
          <Card key={item.title} imageUrl={item.imageUrl} title={item.title} subtitle={item.subtitle}/>
        ))}
      </ul>
    </Container>
  );
};
