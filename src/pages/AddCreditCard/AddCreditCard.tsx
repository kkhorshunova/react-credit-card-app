import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {useHistory} from 'react-router-dom';

import Grid from 'components/Grid/Grid';
import TextField from 'components/Inputs/TextInput';
import Page from 'components/Page/Page';
import MaskedInput from 'components/Inputs/MaskedInput';
import {SuccessButton, CancelButton} from 'components/Buttons/Buttons';
import {StyledForm, HalfWidthInputWrapper, ButtonContainer} from './index.style';

import {addCard} from 'store/thunks';
import {AddCardFormData} from 'types/types';

import {parseFormData} from './utils/parseData';
import {CARD_NUMBER_MASK, CVV_MASK, EXPIRATION_DATE_MASK} from './utils/constants';
import {addCardValidationSchema} from './utils/validation';

const initialValues: AddCardFormData = {
  cardNumber: '',
  cardName: '',
  expiryDate: '',
  cvv: '',
  nickname: '',
}

const AddCreditCard = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectToHomePage = useCallback(() => {
    history.push('/cards');
  }, []);

  const handleSubmit = (values: AddCardFormData) => {
    const cardData = parseFormData(values);

    dispatch(addCard(cardData));
    redirectToHomePage();
  };

  return (
    <Page title="Add Card">
      <Formik<AddCardFormData>
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addCardValidationSchema}
      >
        <StyledForm id="add-card">
          <TextField label="Card Name" name="nickname" placeholder="Card name here"/>
          <MaskedInput
            label="Card Number*"
            name="cardNumber"
            placeholder="0000 0000 0000 0000"
            mask={CARD_NUMBER_MASK}
          />
          <TextField label="Cardholder Name*" name="cardName" placeholder="Your name here"/>
          <Grid justify="space-between">
            <HalfWidthInputWrapper>
              <MaskedInput
                label="Expiration Date*"
                name="expiryDate"
                placeholder="MM/YY"
                mask={EXPIRATION_DATE_MASK}
              />
            </HalfWidthInputWrapper>
            <HalfWidthInputWrapper>
              <MaskedInput
                label="CVV*"
                name="cvv"
                placeholder="&bull;&bull;&bull;"
                mask={CVV_MASK}
              />
            </HalfWidthInputWrapper>
          </Grid>
          <ButtonContainer justify="center">
            <CancelButton type="button" onClick={redirectToHomePage}>Cancel</CancelButton>
            <SuccessButton type="submit">submit</SuccessButton>
          </ButtonContainer>
        </StyledForm>
      </Formik>
    </Page>
  )
}

export default AddCreditCard;