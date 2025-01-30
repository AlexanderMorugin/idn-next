import { create } from 'zustand';

import { Card } from '@prisma/client';
import { Api } from '../services/api-client';
import { getCardDetails } from '@/lib/get-card-details';

export interface CardState {
  loading: boolean;
  error: boolean;
  cardItems: Card[];
  getCardItems: () => Promise<void>;
}

export const useCardStore = create<CardState>((set) => ({
  loading: false,
  error: false,
  cardItems: [],

  getCardItems: async () => {
    try {
      set({ loading: true, error: false });
      const data = await Api.cards.getCardService();
      set(getCardDetails(data));
    } catch (error) {
      console.error(error);
    } finally {
      set({ loading: false });
    }
  },
}));
