import React, {useCallback, useEffect, useState} from 'react';

import {TextInput} from 'components/inputs/TextInput';
import Select from 'components/inputs/Select';

import {getCards} from 'store/thunks';
import {ExpirationDateFilter, FiltersBarWrapper} from './index.style';
import {VISA, MASTERCARD} from '../AddCreditCard/utils/constants';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useDispatch} from 'react-redux';


const CreditCardList = () => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');
  const [cardType, setCardType] = useState('');
  const [sorting, setSorting] = useState('');

  useEffect(() => {
    dispatch(getCards({nickname, cardType, sorting}));
  }, [nickname, cardType, sorting]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setNickname(e.target.value),
    []);

  const handleCardTypeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => setCardType(e.target.value),
    []);

  const handleSortingChange = () => {
      console.log(sorting)
      let sortOption = sorting;
      if(!sorting) sortOption = 'DESC';
      if(sorting === 'DESC') sortOption = 'ASC';
      if(sorting === 'ASC') sortOption = '';
      console.log(sortOption)
      setSorting(sortOption)
    };

  return (
    <FiltersBarWrapper>
      <div>
        <TextInput name="search" label="Search by nickname:" placeholder="Search..." onChange={handleSearchChange}/>
      </div>
      <div>
        <Select
          name="cardType"
          label="Card Type:"
          value={cardType}
          onChange={handleCardTypeChange}
          options={[{value: VISA, label: 'Visa'}, {value: MASTERCARD, label: 'Mastercard'}]}
        />
      </div>
      <div>
        <ExpirationDateFilter onClick={handleSortingChange}>Expiration Date
          {sorting === 'DESC' && <FontAwesomeIcon icon={faArrowDown}/>}
          {sorting === 'ASC' && <FontAwesomeIcon icon={faArrowUp}/>}
        </ExpirationDateFilter>
      </div>
    </FiltersBarWrapper>
  )
}

export default CreditCardList;