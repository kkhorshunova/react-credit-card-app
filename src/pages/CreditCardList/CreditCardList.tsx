import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'

import CreditCard from 'components/CreditCard/CreditCard';
import {CardContainer} from 'components/CreditCard/index.style';
import Page from 'components/Page/Page';
import {IconButton} from 'components/Buttons/Buttons';
import {ListWrapper, CardWrapper, AddCardLink, CardHeader} from './index.style';
import FiltersBar from './FiltersBar';

import {AppState} from 'store/store';
import {deleteCard, getCards} from 'store/thunks';
import {Card, Filters} from 'types/types';

const CreditCardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector<AppState, Card[]>(({cards}) => cards.cards);
  const [filters, setFilters] = useState<Filters>({nickname: '', cardType: '',sorting: ''});

  useEffect(() => {
    dispatch(getCards({...filters}));
  }, [filters]);

  const handleDelete = (id: string) => {
    dispatch(deleteCard(id));
  }

  return (
    <Page title="Cards List">
      <FiltersBar filters={filters} setFilters={setFilters} />
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
            <CardHeader justify="space-between" align="center">
              <p>{card.nickname}</p>
              <IconButton onClick={() => handleDelete(card.id)}><FontAwesomeIcon icon={faTrash}/></IconButton>
            </CardHeader>
            <CreditCard card={card}/>
          </CardWrapper>
        ))}
      </ListWrapper>
    </Page>
  )
}

export default CreditCardList;