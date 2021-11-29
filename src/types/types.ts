import React from 'react';

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const GET_CARDS = 'GET_CARDS';

export interface Card {
  id: string;
  cardNumber: string;
  cardName: string;
  expiryDate: {
    month: string;
    year: string;
  };
  cvv: string;
  cardType: string;
  nickname?: string;
}

export type CreateCard = Omit<Card, 'id'>;

export interface State {
  cards: Card[];
}

export type ActionType = {
  type: string;
  payload?: any;
};

export interface AddCardFormData {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
  nickname: string;
}

export interface AvailableCard {
  type: 'VISA' | 'MASTERCARD',
  pattern: RegExp
}



