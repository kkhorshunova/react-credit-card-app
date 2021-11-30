import React, {useCallback, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';

import Grid from '../Grid/Grid';
import CardType from './components/CardType';
import CardNumber from './components/CardNumber';
import {IconButton} from '../Buttons/Buttons';
import {
  CardContainer,
  CardContent,
  CardTypeWrapper,
  CardNumberWrapper,
  CardName,
  MagnetLine,
  CVV
} from './index.style';

import cardChip from 'assets/images/card-chip.png';
import {Card} from 'types/card';

interface CreditCardProps {
  card: Card;
}

const CreditCard = ({card}: CreditCardProps) => {
  const [isFrontSide, changeCardSide] = useState(true);
  const [showCVV, setShownCVV] = useState(false);

  const toggleCardSide = useCallback(
    () => changeCardSide(state => !state),
    [])

  const toggleCVV = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      setShownCVV(state => !state)
    },
    [])


  return isFrontSide
    ? <CardContainer direction="column" role="button" onClick={toggleCardSide} title="Click to see back side">
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
    </CardContainer>
    : <CardContainer direction="column" onClick={toggleCardSide} role="button" title="Click to see front side">
      <Grid direction="column">
        <MagnetLine/>
        <Grid justify="flex-end" align="flex-start" style={{padding: '0 10px'}}>
          <CVV>{showCVV ? card.cvv : <>&#42;&#42;&#42;</>}</CVV>
          <IconButton onClick={toggleCVV}>
            <FontAwesomeIcon icon={faEye}/>
          </IconButton>
        </Grid>
      </Grid>
    </CardContainer>
}

export default CreditCard;