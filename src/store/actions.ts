import {GET_CARDS, Card} from 'types/card';

export const getCards = (payload: Card[]) => ({
  type: GET_CARDS,
  payload,
});
