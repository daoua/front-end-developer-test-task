import React, { FC } from 'react';
import Button from './Button';
import { Footer, CurrentPrice } from '../styles/styled';

interface PricePickerFooterProps {
  currentPrice?: string;
}

const PricePickerFooter: FC<PricePickerFooterProps> = ({ currentPrice }) => {
  const imagePath = '../images/icon-cart.svg';

  return (
    <Footer>
      <CurrentPrice>{currentPrice}</CurrentPrice>
      <Button>До кошика</Button>
    </Footer>
  )
}

export default PricePickerFooter
