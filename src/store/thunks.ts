import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import { v4 as uuidv4 } from 'uuid';

import {AppState} from './store';
import {getCards as getCardsAction} from './actions';
import cardService from 'service/CardService';
import {CreateCard, Filters} from 'types/card';

export const getCards = (filters: Filters = {}): ThunkAction<void, AppState, null, Action<string>> => async (
  dispatch
): Promise<void> => {
  const cards = cardService.getCards(filters);

  dispatch(getCardsAction(cards));
};

export const addCard = (
  card: CreateCard
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch): Promise<void> => {
  cardService.addCard({
    ...card,
    id: uuidv4(),
  });
  dispatch(getCards())
};

export const deleteCard = (
  id: string
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch): Promise<void> => {
  cardService.deleteCard(id);
  dispatch(getCards())
};
