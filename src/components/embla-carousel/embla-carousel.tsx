/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useEffect } from 'react';
import { DotButton, useDotButton } from './embla-carousel-dot-button';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './embla-carousel-arrow-buttons';
import useEmblaCarousel from 'embla-carousel-react';
import { CardBox, Container } from '..';
import { useCardStore } from '../../../store/use-card-store';

const EmblaCarousel = (props: any) => {
  const {
    // slides,
    options,
  } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { cardItems, getCardItems } = useCardStore((state) => state);

  useEffect(() => {
    getCardItems();
  }, [getCardItems]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <Container className='px-4 pt-[21px]'>
      <div className='embla'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {cardItems.map((item: any) => (
              <div className='embla__slide' key={item.id}>
                <CardBox
                  imageUrl={item.imageUrl}
                  title={item.title}
                  subtitle={item.subtitle}
                />
                {/* <div className='embla__slide__number'>{index + 1}</div> */}
              </div>
            ))}
          </div>
        </div>

        <div className='embla__controls'>
          <div className='embla__buttons'>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className='embla__dots'>
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
        </div>
      </div>
    </Container>
  );
};

export default EmblaCarousel;
