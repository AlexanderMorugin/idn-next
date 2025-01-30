import { Metadata } from 'next';

import { PageHeading } from '@/components';

export const metadata: Metadata = {
  title: 'Профиль | IDN Next Slider',
  description: 'Тестовое задание IDN Next Slider',
};

export default function ProfilePage() {
  return <PageHeading title='Профиль' />;
}
