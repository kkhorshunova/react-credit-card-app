import {RouteProps} from 'react-router-dom';

import CreditCardList from 'pages/CreditCardList/CreditCardList';
import AddCreditCard from 'pages/AddCreditCard/AddCreditCard';

export const routes: RouteProps[] = [
  {
    path: '/cards',
    exact: true,
    component: CreditCardList,
  },
  {
    path: '/cards/add',
    exact: true,
    component: AddCreditCard
  }
]