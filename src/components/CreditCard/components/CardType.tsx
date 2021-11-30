import React from 'react';

import {CardType as CardTypeEnum} from 'types/card';

import visaLogo from 'assets/images/visa.png';
import mastercardLogo from 'assets/images/mastercard.png';

const types: { [key: string]: string } = {
  [CardTypeEnum.Mastercard]: mastercardLogo,
  [CardTypeEnum.Visa]: visaLogo,
}

interface CardTypeProps {
  cardType: CardTypeEnum | '';
}

const CardType = ({cardType}: CardTypeProps) =>
  cardType ? <img src={types[cardType]} alt={cardType} width="70px" height="auto"/> : null;

export default CardType;