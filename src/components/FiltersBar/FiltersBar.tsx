import React from 'react';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {TextInput} from 'components/Inputs/TextInput';
import Select from 'components/Inputs/Select';
import {ExpirationDateFilter, FiltersBarWrapper, FilterItem} from './index.style';

import {CardType, Filters, Sorting} from 'types/card';

const cardTypesOptions = [
  {value: CardType.Visa, label: 'Visa'},
  {value: CardType.Mastercard, label: 'Mastercard'}
];

interface FiltersBarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>
}

const FiltersBar = ({filters, setFilters}: FiltersBarProps) => {
  const updateFilters = (filter: Partial<Filters>) => {
    setFilters(prevState => ({...prevState, ...filter}))
  }

  const handleSearchChange = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) =>
      updateFilters({nickname: value})

  const handleCardTypeChange = ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) =>
      updateFilters({cardType: value as CardType})

  const handleSortingChange = () => {
    let sortOption = filters.sorting;

    if (!filters.sorting) sortOption = Sorting.Desc;
    if (filters.sorting === Sorting.Desc) sortOption = Sorting.Asc;
    if (filters.sorting === Sorting.Asc) sortOption = '';

    updateFilters({sorting: sortOption})
  };

  return (
    <FiltersBarWrapper>
      <FilterItem>
        <TextInput
          name="search"
          label="Search by nickname:"
          placeholder="Search..."
          value={filters.nickname}
          onChange={handleSearchChange}
        />
      </FilterItem>
      <FilterItem>
        <Select
          name="cardType"
          label="Card Type:"
          value={filters.cardType}
          onChange={handleCardTypeChange}
          options={cardTypesOptions}
        />
      </FilterItem>
      <FilterItem>
        <span>Sort by:</span>
        <ExpirationDateFilter onClick={handleSortingChange}>Expiration Date
          {filters.sorting === Sorting.Desc && <FontAwesomeIcon icon={faArrowDown}/>}
          {filters.sorting === Sorting.Asc && <FontAwesomeIcon icon={faArrowUp}/>}
        </ExpirationDateFilter>
      </FilterItem>
    </FiltersBarWrapper>
  )
}

export default FiltersBar;