import { Metadata } from 'next';

import { PageHeading } from '@/components';

export const metadata: Metadata = {
  title: 'О школе | IDN Next Slider',
  description: 'Тестовое задание IDN Next Slider',
};

export default function SchoolPage() {
  return <PageHeading title='О школе' />;
}
