'use client';

import { type FC } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { Card } from '@prisma/client';
import { DotButton, useDotButton } from './embla-carousel-dot-button';
import { CardBox, Container } from '..';

interface Props {
  cardItems: Card[];
}

export const EmblaCarousel: FC<Props> = ({ cardItems }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <Container className='relative px-4 pt-[21px]'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-4'>
          {cardItems.map((item) => (
            <div key={item.id}>
              <CardBox
                imageUrl={item.imageUrl}
                title={item.title}
                subtitle={item.subtitle}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='absolute top-[40px] flex gap-2 md:hidden'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </Container>
  );
};
