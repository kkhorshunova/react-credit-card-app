import {GET_CARDS, Card} from 'types/card';

export interface State {
  cards: Card[];
}

export type ActionType = {
  type: string;
  payload?: any;
};

const initialState: State = {
  cards: []
}

const cardsReducer = (state: State = initialState, {type, payload}: ActionType): State => {
  switch (type) {
    case GET_CARDS: {
      return {...state, cards: payload}
    }
    default: {
      return state;
    }
  }
};

export default cardsReducer;
