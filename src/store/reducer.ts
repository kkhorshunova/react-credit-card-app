import {State, ActionType, GET_CARDS} from 'types/types';

const initialState = {
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
