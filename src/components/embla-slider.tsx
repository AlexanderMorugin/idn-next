'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const EmblaSlider = () => {
  const options = { loop: true, dragFree: true };
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className='embla' ref={emblaRef}>
      <div className='embla__container flex gap-5'>

        <div className='bg-slate-400 w-[400px] h-[200px]'>Slide 1</div>
        <div className='bg-slate-400 w-[400px] h-[200px]'>Slide 2</div>
        <div className='bg-slate-400 w-[400px] h-[200px]'>Slide 3</div>
        <div className='bg-slate-400 w-[400px] h-[200px]'>Slide 4</div>
        <div className='bg-slate-400 w-[400px] h-[200px]'>Slide 5</div>
        <div className='bg-slate-400 w-[400px] h-[200px]'>Slide 6</div>
        <div className='bg-slate-400 w-[400px] h-[200px]'>Slide 7</div>
        <div className='bg-slate-400 w-[400px] h-[200px]'>Slide 8</div>
      </div>
    </div>
  );
};
