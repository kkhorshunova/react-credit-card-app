import {CardType} from 'types/card';
import {AvailableCard} from '../types';

export const CARD_NUMBER_MASK =
  [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
export const EXPIRATION_DATE_MASK = [/[0-1]/, /\d/, ' ', '/', ' ', /\d/, /\d/];
export const CVV_MASK = [/\d/, /\d/, /\d/];

const visa = /^4[0-9]{15}$/;
const masterCard = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;

export const availableCards: AvailableCard[] = [
  {type: CardType.Visa, pattern: visa},
  {type: CardType.Mastercard, pattern: masterCard}
];