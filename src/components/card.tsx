import { type FC } from 'react';
import Image from 'next/image';

interface Props {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const Card: FC<Props> = ({ imageUrl, title, subtitle }) => {
  return (
    <li className='flex flex-col justify-between w-[412px] h-[256px] bg-card rounded-lg p-6'>
      <Image
        src={imageUrl}
        alt='Картинка карточки'
        className='w-[60px] h-[60px] md:w-[80px] md:h-[80px]'
      />
      <p className='text-[24px]/[28px] md:text-[32px]/[36px]'>{title}</p>
      <p className='block text-[14px]/[20px] tracking-wide md:hidden'>{subtitle}</p>
    </li>
  );
};
