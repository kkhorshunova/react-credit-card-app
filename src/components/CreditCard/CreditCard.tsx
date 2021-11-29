import React, {useCallback, useState} from 'react';

import Grid from '../Grid/Grid';
import CardType from './components/CardType';
import CardNumber from './components/CardNumber';
import {CardContainer, CardContent, CardTypeWrapper, CardNumberWrapper, CardName, MagnetLine} from './index.style';

import cardChip from 'assets/card-chip.png';
import {Card} from 'types/types';

interface CreditCardProps {
  card: Card;
}

const CreditCard = ({card}: CreditCardProps) => {
  const [isFrontSide, changeCardSide] = useState(true);

  const toggleCardSide = useCallback(
    () => changeCardSide(state => !state),
    [])

  return isFrontSide ?
    <CardContainer direction="column" role="button" onClick={toggleCardSide} >
      <CardContent>
        <CardTypeWrapper justify="flex-end" align="flex-start">
          <CardType cardType={card.cardType}/>
        </CardTypeWrapper>
        <img width="40px" height="30px" src={cardChip} alt="card-chip"/>
        <CardNumberWrapper>
          <CardNumber cardNumber={card.cardNumber}/>
        </CardNumberWrapper>
        <Grid justify="space-between" align="center">
          <CardName>{card.cardName}</CardName>
          <p>{card.expiryDate.month}/{card.expiryDate.year}</p>
        </Grid>
      </CardContent>
    </CardContainer> :
    <CardContainer direction="column" onClick={toggleCardSide} role="button">
      <Grid direction="column">
        <MagnetLine/>
        <Grid justify="flex-end" align="flex-start">
          <span style={{padding: '0 25px', fontSize: '18px'}}>&#42;&#42;&#42;</span>
        </Grid>
      </Grid>
    </CardContainer>
}

export default CreditCard;