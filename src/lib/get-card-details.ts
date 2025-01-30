import { Card } from '@prisma/client';

interface ReturnProps {
  cardItems: Card[];
}

export const getCardDetails = (data: Card[]): ReturnProps => {
  const cardItems = data.map((item) => ({
    id: item.id,
    title: item.title,
    subtitle: item.subtitle,
    imageUrl: item.imageUrl,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }));

  return { cardItems };
};
