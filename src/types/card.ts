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

export interface Filters {
  nickname?: string;
  cardType?: CardType | '';
  sorting?: Sorting | '';
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



