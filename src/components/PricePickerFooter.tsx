import React, { FC } from 'react';
import Button from './Button';

interface PricePickerFooterProps {
  currentPrice?: string;
}

const PricePickerFooter: FC<PricePickerFooterProps> = ({ currentPrice }) => {
  const imagePath = '../images/icon-cart.svg';

  return (
    <div className="price-picker__footer">
      <span className="price-picker__current-price">{currentPrice}</span>
      <Button imagePath={imagePath} >До кошика</Button>
    </div>
  )
}

export default PricePickerFooter
