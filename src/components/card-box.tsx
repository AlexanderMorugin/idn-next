import { type FC } from 'react';
import Image from 'next/image';

interface Props {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export const CardBox: FC<Props> = ({ imageUrl, title, subtitle }) => {
  return (
    <div className='flex flex-col justify-between w-[358px] h-[212px] bg-card rounded-lg p-6 mt-[50px] cursor-grab select-none md:mt-0 md:h-[256px] md:w-[412px]'>
      <div className='flex flex-row gap-6 h-full md:flex-col md:justify-between'>
        <Image
          src={imageUrl}
          alt='Картинка карточки'
          className='w-[60px] h-[60px] md:w-[80px] md:h-[80px]'
          width={80}
          height={80}
        />
        <p className='text-[24px]/[28px] md:text-[32px]/[36px]'>{title}</p>
      </div>

      {/** Subtitle появляется только в мобильной версии */}
      <div className='text-[14px]/[20px] tracking-wide md:hidden'>
        {subtitle}
      </div>
    </div>
  );
};
