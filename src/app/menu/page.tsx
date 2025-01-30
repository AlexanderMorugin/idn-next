import { Metadata } from 'next';

import { PageHeading } from '@/components';

export const metadata: Metadata = {
  title: 'Меню | IDN Next Slider',
  description: 'Тестовое задание IDN Next Slider',
};

export default function MenuPage() {
  return <PageHeading title='Меню' />;
}
