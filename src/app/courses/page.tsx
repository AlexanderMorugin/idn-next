import { Metadata } from 'next';

import { PageHeading } from '@/components';


export const metadata: Metadata = {
  title: 'Курсы | IDN Next Slider',
  description: 'Тестовое задание IDN Next Slider',
};

export default function CoursesPage() {
  return <PageHeading title='Курсы' />;
}
