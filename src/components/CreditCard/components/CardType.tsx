import React from 'react';

import {CardType as CardTypeEnum} from 'types/types';

import visaLogo from 'assets/visa.png';
import mastercardLogo from 'assets/mastercard.png';

const types: { [key: string]: any } = {
  [CardTypeEnum.Mastercard]: mastercardLogo,
  [CardTypeEnum.Visa]: visaLogo,
}

interface CardTypeProps {
  cardType: CardTypeEnum | '';
}

const CardType = ({cardType}: CardTypeProps) =>
  cardType ? <img src={types[cardType]} alt={cardType} width="70px" height="auto"/> : null;

export default CardType;