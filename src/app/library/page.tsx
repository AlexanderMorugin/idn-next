import { Metadata } from 'next';

import { PageHeading } from '@/components';

export const metadata: Metadata = {
  title: 'Библиотека | IDN Next Slider',
  description: 'Тестовое задание IDN Next Slider',
};

export default function LibraryPage() {
  return <PageHeading title='Библиотека' />;
}
