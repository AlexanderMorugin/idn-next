import { Card } from '@prisma/client';

import { axiosInstance } from './axios-instance';
import { ApiRoutes } from './api-routes';

export const getCardService = async (): Promise<Card[]> => {
  return (await axiosInstance.get<Card[]>(ApiRoutes.CARDS)).data;
};
