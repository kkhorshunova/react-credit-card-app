import * as Yup from 'yup';
import moment from 'moment';

import {formatCardNumber, formatExpiryDate} from './parseData';
import {availableCards} from './constants';
import * as validationMessages from './validationMessages';

export const checkCardType = (cardNumber: string = ''): boolean =>
  availableCards.some(card => card.pattern.test(cardNumber));

export const addCardValidationSchema = Yup.object().shape({
  nickname: Yup.string().trim(),
  cardName: Yup.string().trim().required(validationMessages.REQUIRED_FIELD),
  cardNumber: Yup.string()
    .transform(formatCardNumber)
    .length(16)
    .required(validationMessages.REQUIRED_FIELD)
    .test(
      'is-card-type-valid',
      validationMessages.CARD_TYPE_NOT_VALID,
      (value) => checkCardType(value),
    ),
  expiryDate: Yup.string()
    .required(validationMessages.REQUIRED_FIELD)
    .test(
      'is-expiration-date-valid-format',
      validationMessages.EXPIRY_DATE_FORMAT_NOT_VALID,
      (value) => value ? !(formatExpiryDate(value).length < 5) : true
    )
    .test(
      'is-expiration-date-valid',
      validationMessages.EXPIRY_DATE_NOT_VALID,
      (value) => moment(value, 'MM/YY').isValid()),
  cvv: Yup.string().length(3, validationMessages.CVV_LENGTH_NOT_VALID).required(validationMessages.REQUIRED_FIELD),
});
