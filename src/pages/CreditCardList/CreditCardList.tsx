import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'

import CreditCard from 'components/CreditCard/CreditCard';
import {CardContainer} from 'components/CreditCard/index.style';
import Page from 'components/Page/Page';
import Grid from 'components/Grid/Grid';
import {IconButton} from 'components/buttons/Buttons';
import {ListWrapper, CardWrapper, AddCardLink} from './index.style';

import {AppState} from 'store/store';
import {deleteCard} from 'store/thunks';
import FiltersBar from './FiltersBar';
import {Card} from 'types/types';


const CreditCardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector<AppState, Card[]>(({cards}) => cards.cards);

  const handleDelete = (id: string) => {
    dispatch(deleteCard(id));
  }

  return (
    <Page title="Cards List">
      <FiltersBar/>
      <ListWrapper>
        <CardWrapper>
          <CardContainer>
            <AddCardLink to="cards/add">
              <p>&#43; Add Card</p>
            </AddCardLink>
          </CardContainer>
        </CardWrapper>
        {cards.map(card => (
          <CardWrapper key={card.id}>
            <Grid justify="space-between" align="center" style={{padding: '0 10px 10px'}}>
              <p style={{fontWeight: 700}}>{card.nickname}</p>
              <IconButton onClick={() => handleDelete(card.id)}><FontAwesomeIcon icon={faTrash}/></IconButton>
            </Grid>
            <CreditCard card={card}/>
          </CardWrapper>
        ))}
      </ListWrapper>
    </Page>
  )
}

export default CreditCardList;