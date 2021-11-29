import React from 'react';

import visaLogo from 'assets/visa.png';
import mastercardLogo from 'assets/mastercard.png';

import {VISA, MASTERCARD} from 'pages/AddCreditCard/utils/constants';

const types: {[key: string]: any} = {
  [MASTERCARD]:  mastercardLogo,
  [VISA]: visaLogo,
}

const CardType = ({cardType}: { cardType?: string }) =>
  cardType ?
    <img src={types[cardType]} alt={cardType} width="70px" height="auto" />
    : null

export default CardType;