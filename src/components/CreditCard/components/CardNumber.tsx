import React from 'react';
import styled from 'styled-components';

import Grid from '../../Grid/Grid';

const CardNumberWrapper = styled(Grid)`
  max-width: 60%;
  margin: 30px 0;
`;

const CardNumber = ({cardNumber}: { cardNumber: string }) => {
  const chunks = [];
  const step = 4;
  let startIndex = 0;

  for (let i = 0; i < 4; i++) {
    chunks.push(cardNumber.slice(startIndex, startIndex + step));
    startIndex = startIndex + step;
  }

  return (
    <div>
      <span style={{fontSize: '16px'}}>
        &#42;&#42;&#42;&#42; &#42;&#42;&#42;&#42; &#42;&#42;&#42;&#42;
      </span>
      {" "}
      <span style={{display: 'inline-block', verticalAlign: 'text-top'}}>{cardNumber.slice(-4)}</span>
      {/*{chunks.map((chunk, index) => <span key={index}> {chunk} </span>)}*/}
    </div>
  )
};

export default CardNumber;