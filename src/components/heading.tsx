import { type FC } from 'react';
import { Container } from '.';

export const Heading: FC = () => {
  return (
    <Container className='h-[72px] px-4 md:h-[60px]'>
      <article className='flex flex-col text-purple-light text-[26px] mt-[7px] md:text-[40px] md:flex-row md:items-center md:mt-0 md:border-b md:border-grey-medium'>
        <span className='w-full md:max-w-[215px] border-b border-grey-medium md:border-none lg:max-w-[415px] '>1.0</span>
        <h1>Наши услуги</h1>
      </article>
    </Container>
  );
};
