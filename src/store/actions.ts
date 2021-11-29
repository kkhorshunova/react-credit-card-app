import {GET_CARDS, Card} from 'types/types';

export const getCards = (payload: Card[]) => ({
  type: GET_CARDS,
  payload,
});
