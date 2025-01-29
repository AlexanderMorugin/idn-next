import { type FC } from 'react';
import { Container } from '.';

interface Props {
  title: string;
}

export const PageHeading: FC<Props> = ({ title }) => {
  return (
    <Container className='flex justify-center items-center pt-20'>
      <h1 className='text-black text-[48px] font-bold'>{title}</h1>
    </Container>
  );
};
