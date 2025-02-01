import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logoIcon from '../../public/logo-big.svg';
import exitIcon from '../../public/exit.svg';
import { Routes } from '@/shared/routes';
import { headerNavData } from '@/shared';
import { Container } from '.';

export const Header: FC = () => {
  return (
    <header className='border-b border-grey-dark'>
      <Container className='flex justify-between items-center gap-4'>
        <div className='flex justify-between items-center gap-6 w-full md:max-w-[488px] lg:max-w-[688px]'>
          {/** Лого */}
          <Link
            href={Routes.MAIN}
            className='flex gap-4 w-[60px] p-4 group md:w-[140px]'
          >
            <Image
              src={logoIcon}
              alt='Логотип компании'
              className='w-[28px] h-[28px]'
            />
            <span className='hidden md:block text-[16px] tracking-wide pt-1 transition group-hover:text-purple'>
              STEMPS
            </span>
          </Link>

          {/** Меню навиации в десктоп */}
          <nav>
            <ul className='hidden md:flex justify-between items-center gap-6'>
              {headerNavData.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.slug}
                    className='text-[16px] tracking-wide transition hover:text-purple'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/** Кнопка входа в меню в мобильной версии */}
        <div className='flex justify-between items-center p-4 md:hidden'>
          <Link
            href={Routes.MENU}
            className='w-[59px] h-[28px] rounded-[4px] bg-black px-2 py-1 transition md:hidden hover:bg-purple'
          >
            <span className='text-white text-[16px]'>Меню</span>
          </Link>
        </div>

        {/** Кнопка входа в профиль в десктоп */}
        <Link
          href={Routes.PROFILE}
          className='hidden md:flex justify-between gap-x-8 w-fit p-4 group'
        >
          <span className='text-[16px] tracking-wide pt-1 transition group-hover:text-purple'>
            Вход
          </span>
          <Image
            src={exitIcon}
            alt='Кнопка входа в профиль'
            className='w-[30px] h-[28px]'
          />
        </Link>
      </Container>
    </header>
  );
};
