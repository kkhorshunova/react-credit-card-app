import {Card} from 'types/types';

export const cards: Card[] = [
  {
    id: '1',
    cardNumber: '5425233430109903',
    cardName: 'John Doe',
    expiryDate: {
      month: '12',
      year: '24'
    },
    cvv: '586',
    cardType: 'MASTERCARD',
    nickname: 'Shared Card',
  },
  {
    id: '2',
    cardNumber: '2222420000001113',
    cardName: 'Elisa Sour',
    expiryDate:  {
      month: '08',
      year: '23'
    },
    cvv: '456',
    cardType: 'MASTERCARD',
    nickname: 'Family Card',
  },
  {
    id: '3',
    cardNumber: '4263982640269299',
    cardName: 'Michael Duglas',
    expiryDate: {
      month: '02',
      year: '23'
    },
    cvv: '837',
    cardType: 'VISA',
    nickname: '',
  },
  {
    id: '4',
    cardNumber: '4263982640269299',
    cardName: 'Alisa Vinzer',
    expiryDate: {
      month: '04',
      year: '25'
    },
    cvv: '738',
    cardType: 'VISA',
    nickname: '',
  },
]