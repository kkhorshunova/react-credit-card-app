import {CardType} from 'types/card';

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