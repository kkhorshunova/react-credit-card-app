import * as Yup from 'yup';
import moment from 'moment';

import {formatCardNumber, formatExpiryDate} from './parseData';
import {availableCards} from './constants';

export const checkCardType = (cardNumber: string = ''): boolean =>
  availableCards.some(card => card.pattern.test(cardNumber));

export const addCardValidationSchema = Yup.object().shape({
  nickname: Yup.string().trim(),
  cardName: Yup.string().trim().required('Cardholder name is required'),
  cardNumber: Yup.string()
    .transform(formatCardNumber)
    .length(16)
    .required('Card Number is required')
    .test(
      'is-card-type-valid',
      'Card is not valid. Please enter Visa or Mastercard card',
      (value) => checkCardType(value),
    ),
  expiryDate: Yup.string()
    .required('Expiration Date is required')
    .test(
      'is-expiration-date-valid-format',
      'Please use "MM/YY" date format',
      (value) => value ? !(formatExpiryDate(value).length < 5) : true
    )
    .test(
      'is-expiration-date-valid',
      'Expiration Date is invalid',
      (value) => moment(value, 'MM/YY').isValid()),
  cvv: Yup.string().length(3, 'CVV must be exactly 3 characters').required('CVV is required'),
});
