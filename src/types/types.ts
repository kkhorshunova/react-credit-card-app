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
  cardType: CardType | '';
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
  type: CardType,
  pattern: RegExp
}

export interface Filters {
  nickname: string;
  cardType: CardType | '';
  sorting: Sorting | '';
}

export interface FilterFunc {
  (card: Card): boolean;
}

export enum CardType {
  Visa = 'VISA',
  Mastercard = 'MASTERCARD'
}

export enum Sorting {
  Desc = 'DESC',
  Asc = 'ASC'
}



