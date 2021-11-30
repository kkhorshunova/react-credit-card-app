import {CreateCard, CardType} from 'types/card';
import {AddCardFormData} from '../types';
import {availableCards} from './constants';

export const formatCardNumber = (cardNumber: string): string => cardNumber.split(' ').join('');
export const formatExpiryDate = (expiryDate: string): string => expiryDate.split(' / ').join('/');

export const getCardType = (cardNumber: string): CardType | '' => {
  const card = availableCards.find(card => card.pattern.test(cardNumber));

  return card?.type || '';
};

export const parseFormData = ({expiryDate, cardNumber, ...values}: AddCardFormData): CreateCard => {
  const [month, year] = expiryDate.split(' / ');
  const formattedCardNumber = cardNumber.split(' ').join('')

  return {
    ...values,
    expiryDate: {
      month,
      year
    },
    cardType: getCardType(formattedCardNumber),
    cardNumber: formattedCardNumber,
  }
}