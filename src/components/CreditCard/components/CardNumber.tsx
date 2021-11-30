import React from 'react';

interface CardProps {
  cardNumber: string;
}

const CardNumber = ({cardNumber}: CardProps) => (
  <span>
    &#42;&#42;&#42;&#42; &#42;&#42;&#42;&#42; &#42;&#42;&#42;&#42; {cardNumber.slice(-4)}
  </span>
)

export default CardNumber;