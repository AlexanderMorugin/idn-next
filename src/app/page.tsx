import type {
  // InferGetStaticPropsType,
  // GetStaticProps,
  Metadata,
  // GetServerSideProps,
  // generateStaticParams,
} from 'next';

import { Heading } from '@/components';
import React from 'react';
import EmblaCarousel from '@/components/embla-carousel/embla-carousel';
// import { fetchNavs } from './layout';
// import { Card } from '@prisma/client';

// import { SwiperSlider } from '@/components/swiper-slider';

export const metadata: Metadata = {
  title: 'Наши услуги | IDN Next Slider',
  description: 'Тестовое задание IDN Next Slider',
};

const OPTIONS = { align: 'start' };
// const SLIDE_COUNT = 6
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

// export const getStaticProps = (async (context) => {
//   const res = await fetch('https://idn-next-jswp.vercel.app/api/cards/')
//   const cardItems = await res.json()
//   return { props: { cardItems } }
// }) satisfies GetStaticProps<{
//   cardItems: Card[]
// }>

export default async function Home() {
  const res = await fetch('https://idn-next-jswp.vercel.app/api/cards/');
  const slides = await res.json();

  // export default function Home({ cardItems }) {
  // export default function Home({cardItems}) {
  // console.log(cardItems)

  // const slides = use(fetchNavs());

  return (
    <>
      <Heading />
      {/* <SwiperSlider /> */}

      <EmblaCarousel slides={slides} options={OPTIONS} />
    </>
  );
}

// export const getServerSideProps = (async () => {
//   // export async function generateStaticParams() {
//   const response = await fetch('https://idn-next-jswp.vercel.app/api/cards/');
//   const data = await response.json();
//   return {
//     props: { cardItems: data.results },
//   };
// }) satisfies GetServerSideProps<{ cardItems: Card[] }>;
// }
