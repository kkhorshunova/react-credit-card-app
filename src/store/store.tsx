import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import cardsReducer from './reducer';

const rootReducer = combineReducers({
  cards: cardsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = (initialState = {}): Store => {
  const middlewareList = [thunk as ThunkMiddleware];

  const middleware = applyMiddleware(...middlewareList);

  return createStore(rootReducer, initialState, middleware)
};

export default configureStore;
