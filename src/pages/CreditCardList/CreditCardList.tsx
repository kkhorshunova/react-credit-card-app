import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons'

import CreditCard from 'components/CreditCard/CreditCard';
import {CardContainer} from 'components/CreditCard/index.style';
import Page from 'components/Page/Page';
import {IconButton} from 'components/Buttons/Buttons';
import FiltersBar from 'components/FiltersBar/FiltersBar';
import Dialog from 'components/Dialog/Dialog'
import {ListWrapper, CardWrapper, AddCardLink, CardHeader} from './index.style';

import {AppState} from 'store/store';
import {deleteCard, getCards} from 'store/thunks';
import {Card, Filters} from 'types/card';

const CreditCardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector<AppState, Card[]>(({cards}) => cards.cards);
  const [cardId, setCardId] = useState<string>('');
  const [isDialogOpen, setOpenDialog] = useState<boolean>(false);
  const [filters, setFilters] = useState<Filters>({nickname: '', cardType: '', sorting: ''});

  useEffect(() => {
    dispatch(getCards({...filters}));
  }, [filters]);

  const toggleDialog = () => {
    setOpenDialog(state => !state);
  }

  const openModal = (id: string) => {
    setCardId(id);
    toggleDialog();
  }

  const handleDelete = () => {
    dispatch(deleteCard(cardId));
    setCardId('');
    toggleDialog();
  }

  return (
    <>
      <Page title="Cards List">
        <FiltersBar filters={filters} setFilters={setFilters}/>
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
                <IconButton onClick={() => openModal(card.id)}><FontAwesomeIcon icon={faTrash}/></IconButton>
              </CardHeader>
              <CreditCard card={card}/>
            </CardWrapper>
          ))}
        </ListWrapper>
      </Page>
      {isDialogOpen &&
      <Dialog
        message="Are you sure you want to delete the card?"
        onCancel={toggleDialog}
        onConfirm={handleDelete}
      />
      }
    </>
  )
}

export default CreditCardList;